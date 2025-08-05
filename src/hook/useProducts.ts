import { useQuery } from "@tanstack/react-query";
import {
  getProducts,
  getProductsBySection,
  getProductsByCategory,
  getFeaturedProducts,
  getNewProducts,
  getProductById,
  getRelatedProducts,
  Product,
  ProductFilters,
} from "@/services/home/products";

// Hook to get all products with filters
export const useProducts = (filters: ProductFilters = {}) => {
  return useQuery({
    queryKey: ["products", filters],
    queryFn: () => getProducts(filters),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

// Hook to get products by section
export const useProductsBySection = (section: string, limit: number = 20) => {
  return useQuery({
    queryKey: ["products", "section", section, limit],
    queryFn: () => getProductsBySection(section, limit),
    staleTime: 5 * 60 * 1000,
  });
};

// Hook to get products by category
export const useProductsByCategory = (category: string, limit: number = 20) => {
  return useQuery({
    queryKey: ["products", "category", category, limit],
    queryFn: () => getProductsByCategory(category, limit),
    staleTime: 5 * 60 * 1000,
  });
};

// Hook to get featured products
export const useFeaturedProducts = (limit: number = 20) => {
  return useQuery({
    queryKey: ["products", "featured", limit],
    queryFn: () => getFeaturedProducts(limit),
    staleTime: 5 * 60 * 1000,
  });
};

// Hook to get new products
export const useNewProducts = (limit: number = 20) => {
  return useQuery({
    queryKey: ["products", "new", limit],
    queryFn: () => getNewProducts(limit),
    staleTime: 5 * 60 * 1000,
  });
};

// Helper function to transform API product to component product format
export const transformProduct = (apiProduct: Product) => {
  // Extract the actual ID from the MongoDB ObjectId
  const id =
    typeof apiProduct._id === "object" &&
    apiProduct._id !== null &&
    "$oid" in apiProduct._id
      ? (apiProduct._id as { $oid: string }).$oid
      : (apiProduct._id as string);

  return {
    id, // Use properly extracted string ID
    name: apiProduct.name,
    description: apiProduct.description, // <-- Agregado
    rating: apiProduct.rating || 0, // Default to 0 if not present
    reviews: apiProduct.reviewCount || 0, // Default to 0 if not present
    price: apiProduct.price,
    image: apiProduct.images[0] || "/placeholder.svg",
    discountPercentage: apiProduct.discountPercentage,
    stock: apiProduct.stock,
    brand: apiProduct.brand,
    category: apiProduct.category,
    section: apiProduct.section,
    isNew: apiProduct.isNewProduct,
    isFeatured: apiProduct.isFeatured,
  };
};

// Hook to get products by category with transformation
export const useProductsByCategoryTransformed = (
  category: string,
  limit: number = 20
) => {
  const { data, isLoading, error } = useProductsByCategory(category, limit);

  return {
    data: data?.data.map(transformProduct) || [],
    isLoading,
    error,
    pagination: data?.pagination,
  };
};

// Hook to get featured products with transformation
export const useFeaturedProductsTransformed = (limit: number = 20) => {
  const { data, isLoading, error } = useFeaturedProducts(limit);

  return {
    data: data?.data.map(transformProduct) || [],
    isLoading,
    error,
    pagination: data?.pagination,
  };
};

// Hook to get new products with transformation
export const useNewProductsTransformed = (limit: number = 20) => {
  const { data, isLoading, error } = useNewProducts(limit);

  return {
    data: data?.data.map(transformProduct) || [],
    isLoading,
    error,
    pagination: data?.pagination,
  };
};

// Hook to get product by ID
export const useProductById = (id: string) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
  });
};

// Hook to get related products
export const useRelatedProducts = (
  category: string,
  currentProductId: string,
  limit: number = 4
) => {
  return useQuery({
    queryKey: ["related-products", category, currentProductId, limit],
    queryFn: () => getRelatedProducts(category, currentProductId, limit),
    enabled: !!category && !!currentProductId,
    staleTime: 5 * 60 * 1000,
  });
};
