import axios from "axios";

// URL base de la API, utiliza variable de entorno o valor por defecto
const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Interfaz del producto basada en la respuesta de la API
export interface Product {
  _id: string | { $oid: string };
  id: string | number; // Permitir ambos tipos
  name: string;
  description: string;
  price: number;
  originalPrice?: number; // Campo calculado
  stock: number;
  brand: string;
  images: string[];
  image?: string; // Primera imagen
  videos: string[];
  section: string;
  category: string;
  subcategory: string;
  specs: Record<string, string>;
  discountPercentage?: number;
  discount?: number; // Alias
  rating?: number;
  reviewCount?: number;
  reviews?: number; // Alias
  isFeatured: boolean;
  isNewProduct: boolean;
  location?: string; // Campo adicional
  shipping?: string; // Campo adicional
  createdAt: string | { $date: string };
  updatedAt: string | { $date: string };
}

// Función auxiliar para transformar productos COMPLETA
const transformProduct = (product: Record<string, unknown>): Product => {
  // Extract the actual ID from the MongoDB ObjectId
  const objectId =
    typeof product._id === "object" &&
    product._id !== null &&
    "$oid" in product._id
      ? (product._id as { $oid: string }).$oid
      : (product._id as string) || (product.id as string);

  return {
    ...product,
    id: objectId,
    image: (Array.isArray(product.images)
      ? product.images[0]
      : product.image) as string, // Primera imagen
    originalPrice:
      (product.originalPrice as number) ||
      (typeof product.price === "number" &&
      typeof product.discountPercentage === "number"
        ? product.price / (1 - product.discountPercentage / 100)
        : undefined),
    discount:
      (product.discountPercentage as number) || (product.discount as number),
    reviews: (product.reviewCount as number) || (product.reviews as number),
    shipping: (product.shipping as string) || "Envío gratis",
    location: (product.location as string) || "San José",
  } as Product;
};

// Función auxiliar para transformar array de productos
const transformProducts = (products: unknown[]): Product[] => {
  return products.map((product) =>
    transformProduct(product as Record<string, unknown>)
  );
};

// Obtener todos los productos con filtros opcionales
export const getProducts = async (
  filters: ProductFilters = {}
): Promise<ProductsResponse> => {
  try {
    const params = new URLSearchParams();

    // Agregar parámetros de filtro a la URL
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        params.append(key, value.toString());
      }
    });

    const fullUrl = `${API_URL}/products?${params.toString()}`;
    const response = await axios.get(fullUrl);

    // Verificar si la respuesta es un array (productos directos) u objeto (con paginación)
    if (Array.isArray(response.data)) {
      // Transformar productos antes de devolver
      const transformedProducts = transformProducts(response.data);

      return {
        success: true,
        data: transformedProducts,
        pagination: {
          currentPage: 1,
          totalPages: 1,
          totalProducts: transformedProducts.length,
          hasNextPage: false,
          hasPrevPage: false,
        },
      };
    }

    // La API devolvió un objeto con paginación
    return {
      ...response.data,
      data: transformProducts(response.data.data || response.data),
    };
  } catch (error) {
    console.error("Error al obtener productos:", error);
    throw error;
  }
};

// Obtener producto por ID
export const getProductById = async (
  id: string
): Promise<Product | { success: boolean; data: Product }> => {
  try {
    const response = await axios.get(`${API_URL}/products/${id}`);

    // Si la respuesta tiene una estructura con success y data
    if (response.data.success && response.data.data) {
      return {
        success: response.data.success,
        data: transformProduct(response.data.data),
      };
    }

    // Si la respuesta es directamente el producto
    return transformProduct(response.data);
  } catch (error) {
    console.error("Error al obtener producto por ID:", error);
    throw error;
  }
};

// Obtener productos relacionados por categoría (excluyendo el producto actual)
export const getRelatedProducts = async (
  category: string,
  currentProductId: string,
  limit: number = 4
): Promise<ProductsResponse> => {
  try {
    // Solicitar productos adicionales para filtrar el actual
    const response = await axios.get(
      `${API_URL}/products?category=${category}&limit=${limit + 1}`
    );

    // Filtrar el producto actual y limitar resultados
    const products = response.data;
    if (Array.isArray(products)) {
      const filteredProducts = products
        .filter((product: Product) => {
          // Extract the actual ID from the MongoDB ObjectId for comparison
          const productId =
            typeof product._id === "object" && "$oid" in product._id
              ? product._id.$oid
              : product._id;
          return productId !== currentProductId;
        })
        .slice(0, limit);

      return {
        success: true,
        data: transformProducts(filteredProducts),
        pagination: {
          currentPage: 1,
          totalPages: 1,
          totalProducts: filteredProducts.length,
          hasNextPage: false,
          hasPrevPage: false,
        },
      };
    }

    return {
      ...response.data,
      data: transformProducts(response.data.data || response.data),
    };
  } catch (error) {
    console.error("Error al obtener productos relacionados:", error);
    throw error;
  }
};

// Interfaz de paginación
export interface Pagination {
  currentPage: number;
  totalPages: number;
  totalProducts: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

// Interfaz de respuesta de la API
export interface ProductsResponse {
  success: boolean;
  data: Product[];
  pagination: Pagination;
}

// Interfaz de parámetros de filtro
export interface ProductFilters {
  page?: number;
  limit?: number;
  section?: string;
  category?: string;
  brand?: string;
  minPrice?: number;
  maxPrice?: number;
  search?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
  inStock?: boolean;
  featured?: boolean;
  isNew?: boolean;
}

// Obtener todos los productos disponibles
export const getAllProducts = async (): Promise<ProductsResponse> => {
  return getProducts({ limit: 1000 }); // Límite alto para obtener todos los productos
};

// Obtener productos por sección
export const getProductsBySection = async (
  section: string,
  limit: number = 20
): Promise<ProductsResponse> => {
  return getProducts({ section, limit });
};

// Obtener productos por categoría
export const getProductsByCategory = async (
  category: string,
  limit: number = 20
): Promise<ProductsResponse> => {
  return getProducts({ category, limit });
};

// Obtener productos destacados
export const getFeaturedProducts = async (
  limit: number = 20
): Promise<ProductsResponse> => {
  return getProducts({ featured: true, limit });
};

// Obtener productos nuevos
export const getNewProducts = async (
  limit: number = 20
): Promise<ProductsResponse> => {
  return getProducts({ isNew: true, limit });
};

// Buscar productos por término de búsqueda
export const searchProducts = async (
  searchTerm: string,
  limit: number = 20
): Promise<ProductsResponse> => {
  return getProducts({ search: searchTerm, limit });
};

// Obtener productos en stock
export const getProductsInStock = async (
  limit: number = 20
): Promise<ProductsResponse> => {
  return getProducts({ inStock: true, limit });
};

// Obtener productos por rango de precios
export const getProductsByPriceRange = async (
  minPrice: number,
  maxPrice: number,
  limit: number = 20
): Promise<ProductsResponse> => {
  return getProducts({ minPrice, maxPrice, limit });
};

// Obtener productos por marca
export const getProductsByBrand = async (
  brand: string,
  limit: number = 20
): Promise<ProductsResponse> => {
  return getProducts({ brand, limit });
};
