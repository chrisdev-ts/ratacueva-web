//C:\Users\Misrael\Documents\WEBS\ratacueva-web\src\app\search\page.tsx
import { mockProducts, type Filters } from "@/app/lib/data"
import SearchClientPage from "@/components/features/landing/search/search-client-page"

interface SearchPageProps {
  searchParams: {
    q?: string
    sortBy?: string
    priceRange?: string // e.g., "0-2000000"
    categories?: string // e.g., "Tarjetas Gráficas,Procesadores"
    brands?: string
    locations?: string
    freeShipping?: string // "true" or "false"
    withDiscount?: string // "true" or "false"
  }
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams.q || ""
  const sortBy = searchParams.sortBy || "relevance"

  const parsedPriceRange: [number, number] = searchParams.priceRange
    ? (searchParams.priceRange.split("-").map(Number) as [number, number])
    : [0, 2000000]

  // Asegurar que el rango de precios sea siempre válido (min <= max)
  const effectivePriceRange: [number, number] = [
    Math.min(parsedPriceRange[0], parsedPriceRange[1]),
    Math.max(parsedPriceRange[0], parsedPriceRange[1]),
  ]

  const parsedCategories = searchParams.categories ? searchParams.categories.split(",") : []
  const parsedBrands = searchParams.brands ? searchParams.brands.split(",") : []
  const parsedLocations = searchParams.locations ? searchParams.locations.split(",") : []
  const parsedFreeShipping = searchParams.freeShipping === "true"
  const parsedWithDiscount = searchParams.withDiscount === "true"

  const currentFilters: Filters = {
    priceRange: effectivePriceRange, // Usar el rango de precios efectivo aquí
    categories: parsedCategories,
    brands: parsedBrands,
    locations: parsedLocations,
    freeShipping: parsedFreeShipping,
    withDiscount: parsedWithDiscount,
  }

  // Lógica de filtrado
  const filtered = mockProducts.filter((product) => {
    const matchesQuery =
      query === "" ||
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase()) ||
      product.brand.toLowerCase().includes(query.toLowerCase())
    const matchesPrice = product.price >= currentFilters.priceRange[0] && product.price <= currentFilters.priceRange[1]
    const matchesCategory =
      currentFilters.categories.length === 0 || currentFilters.categories.includes(product.category)
    const matchesBrand = currentFilters.brands.length === 0 || currentFilters.brands.includes(product.brand)
    const matchesLocation = currentFilters.locations.length === 0 || currentFilters.locations.includes(product.location)
    const matchesShipping = !currentFilters.freeShipping || product.shipping === "Envío gratis"
    const matchesDiscount = !currentFilters.withDiscount || product.discount

    return (
      matchesQuery &&
      matchesPrice &&
      matchesCategory &&
      matchesBrand &&
      matchesLocation &&
      matchesShipping &&
      matchesDiscount
    )
  })

  // Lógica de ordenación
  const sortedProducts = [...filtered] // Crear una copia para no mutar el array original
  switch (sortBy) {
    case "price-low":
      sortedProducts.sort((a, b) => a.price - b.price)
      break
    case "price-high":
      sortedProducts.sort((a, b) => b.price - a.price)
      break
    case "rating":
      sortedProducts.sort((a, b) => b.rating - a.rating)
      break
    case "reviews":
      sortedProducts.sort((a, b) => b.reviews - a.reviews)
      break
    default:
      // relevancia - mantener el orden original
      break
  }

  return (
    <SearchClientPage
      initialProducts={sortedProducts}
      initialQuery={query}
      initialFilters={currentFilters}
      initialSortBy={sortBy}
    />
  )
}
