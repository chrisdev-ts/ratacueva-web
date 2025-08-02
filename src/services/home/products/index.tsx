import axios from "axios";

// URL base de la API, utiliza variable de entorno o valor por defecto
const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://ratacueva-api.onrender.com/api";

// Interfaz del producto basada en la respuesta de la API
export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  brand: string;
  images: string[];
  videos: string[];
  section: string;
  category: string;
  subcategory: string;
  specs: Record<string, string>;
  discountPercentage?: number;
  rating?: number; // Campo opcional
  reviewCount?: number; // Campo opcional
  isFeatured: boolean;
  isNewProduct: boolean;
  createdAt: string;
  updatedAt: string;
}

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
  sortOrder?: 'asc' | 'desc';
  inStock?: boolean;
  featured?: boolean;
  isNew?: boolean;
}

// Obtener todos los productos con filtros opcionales
export const getProducts = async (filters: ProductFilters = {}): Promise<ProductsResponse> => {
  try {
    const params = new URLSearchParams();
    
    // Agregar parámetros de filtro a la URL
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        params.append(key, value.toString());
      }
    });

    const fullUrl = `${API_URL}/products?${params.toString()}`;
    const response = await axios.get(fullUrl);
    
    // Verificar si la respuesta es un array (productos directos) u objeto (con paginación)
    if (Array.isArray(response.data)) {
      // La API devolvió un array directamente, envolver en formato esperado
      return {
        success: true,
        data: response.data,
        pagination: {
          currentPage: 1,
          totalPages: 1,
          totalProducts: response.data.length,
          hasNextPage: false,
          hasPrevPage: false
        }
      };
    }
    
    // La API devolvió un objeto con paginación
    return response.data;
  } catch (error) {
    console.error('Error al obtener productos:', error);
    throw error;
  }
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

// Obtener todos los productos disponibles
export const getAllProducts = async (): Promise<ProductsResponse> => {
  return getProducts({ limit: 1000 }); // Límite alto para obtener todos los productos
};

// Obtener producto por ID
export const getProductById = async (
  id: string
): Promise<Product | { success: boolean; data: Product }> => {
  try {
    const response = await axios.get(`${API_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener producto por ID:', error);
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
    let products = response.data;
    if (Array.isArray(products)) {
      products = products
        .filter((product: Product) => product._id !== currentProductId)
        .slice(0, limit);
      
      return {
        success: true,
        data: products,
        pagination: {
          currentPage: 1,
          totalPages: 1,
          totalProducts: products.length,
          hasNextPage: false,
          hasPrevPage: false
        }
      };
    }
    
    return response.data;
  } catch (error) {
    console.error('Error al obtener productos relacionados:', error);
    throw error;
  }
};