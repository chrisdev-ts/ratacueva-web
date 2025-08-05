import { getProducts } from "@/services/home/products";
import type { Filters } from "@/app/lib/data";
import type { Product as ApiProduct } from "@/services/home/products";
import type { Product } from "@/app/lib/data";
import SearchClientPage from "@/components/features/home/organisms/SearchClientPage";

// Transform API product to component format
function transformApiProductToComponent(apiProduct: ApiProduct): Product {
  // Extract the actual ID from the MongoDB ObjectId
  const objectId =
    typeof apiProduct._id === "object" && "$oid" in apiProduct._id
      ? apiProduct._id.$oid
      : (apiProduct._id as string);

  return {
    id: objectId,
    name: apiProduct.name,
    price: apiProduct.price,
    originalPrice: apiProduct.discountPercentage
      ? apiProduct.price / (1 - apiProduct.discountPercentage / 100)
      : undefined,
    image: apiProduct.images[0] || "/placeholder.svg",
    rating: apiProduct.rating || 0,
    reviews: apiProduct.reviewCount || 0,
    shipping: "Envío gratis", // Default value
    discount: apiProduct.discountPercentage,
    category: apiProduct.category,
    brand: apiProduct.brand,
    location: "San José", // Default value
    description: apiProduct.description,
    specs: apiProduct.specs
      ? Object.entries(apiProduct.specs).map(([key, value]) => ({
          label: key,
          value: value,
        }))
      : [],
    images: apiProduct.images,
  };
}

interface SearchPageProps {
  searchParams: Promise<{
    q?: string;
    sortBy?: string;
    priceRange?: string; // e.g., "0-2000000"
    categories?: string; // e.g., "Tarjetas Gráficas,Procesadores"
    brands?: string;
    locations?: string;
    freeShipping?: string; // "true" or "false"
    withDiscount?: string; // "true" or "false"
  }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const query = params.q || "";
  const sortBy = params.sortBy || "relevance";

  const parsedPriceRange: [number, number] = params.priceRange
    ? (params.priceRange.split("-").map(Number) as [number, number])
    : [0, 2000000];

  // Asegurar que el rango de precios sea siempre válido (min <= max)
  const effectivePriceRange: [number, number] = [
    Math.min(parsedPriceRange[0], parsedPriceRange[1]),
    Math.max(parsedPriceRange[0], parsedPriceRange[1]),
  ];

  const parsedCategories = params.categories
    ? params.categories.split(",")
    : [];
  const parsedBrands = params.brands ? params.brands.split(",") : [];
  const parsedLocations = params.locations ? params.locations.split(",") : [];
  const parsedFreeShipping = params.freeShipping === "true";
  const parsedWithDiscount = params.withDiscount === "true";

  // Preparar filtros para la API
  const apiFilters: Record<string, unknown> = {
    limit: 100, // Obtener más productos para tener una buena selección
  };

  // Agregar búsqueda si hay query
  if (query) {
    apiFilters.search = query;
  }

  // Agregar filtros de categoría
  if (parsedCategories.length > 0) {
    apiFilters.category = parsedCategories.join(",");
  }

  // Agregar filtros de marca
  if (parsedBrands.length > 0) {
    apiFilters.brand = parsedBrands.join(",");
  }

  // Agregar filtros de precio
  if (effectivePriceRange[0] > 0 || effectivePriceRange[1] < 2000000) {
    apiFilters.minPrice = effectivePriceRange[0];
    apiFilters.maxPrice = effectivePriceRange[1];
  }

  // Agregar ordenamiento
  switch (sortBy) {
    case "price-low":
      apiFilters.sortBy = "price";
      apiFilters.sortOrder = "asc";
      break;
    case "price-high":
      apiFilters.sortBy = "price";
      apiFilters.sortOrder = "desc";
      break;
    case "rating":
      apiFilters.sortBy = "rating";
      apiFilters.sortOrder = "desc";
      break;
    case "reviews":
      apiFilters.sortBy = "reviewCount";
      apiFilters.sortOrder = "desc";
      break;
    default:
      // relevancia - mantener el orden original
      break;
  }

  // Obtener productos de la API
  let products: Product[] = [];
  try {
    const response = await getProducts(apiFilters);
    const apiProducts = response.data || [];
    products = apiProducts.map(transformApiProductToComponent);
  } catch (error) {
    console.error("Error fetching products:", error);
    // En caso de error, devolver array vacío
    products = [];
  }

  // Aplicar filtros adicionales que no están disponibles en la API
  const filteredProducts = products.filter((product) => {
    const matchesLocation =
      parsedLocations.length === 0 ||
      parsedLocations.includes(product.location);
    const matchesShipping =
      !parsedFreeShipping || product.shipping === "Envío gratis";
    const matchesDiscount = !parsedWithDiscount || product.discount;

    return matchesLocation && matchesShipping && matchesDiscount;
  });

  const currentFilters: Filters = {
    priceRange: effectivePriceRange,
    categories: parsedCategories,
    brands: parsedBrands,
    locations: parsedLocations,
    freeShipping: parsedFreeShipping,
    withDiscount: parsedWithDiscount,
  };

  return (
    <SearchClientPage
      initialProducts={filteredProducts}
      initialQuery={query}
      initialFilters={currentFilters}
      initialSortBy={sortBy}
    />
  );
}
