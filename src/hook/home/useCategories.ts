import { useQuery } from '@tanstack/react-query';
import { getProducts, Product } from '@/services/home/products';

export interface CategoryWithProduct {
  category: string;
  product: Product;
}

export const useRandomCategories = (count: number = 5) => {
  return useQuery({
    queryKey: ['random-categories', count],
    queryFn: async () => {
      const response = await getProducts({ limit: 100 });
      const products = response.data;
      
      // Obtener categorías únicas
      const categories = [...new Set(products.map(product => product.category))];
      
      // Seleccionar categorías aleatorias
      const shuffledCategories = categories.sort(() => 0.5 - Math.random());
      const selectedCategories = shuffledCategories.slice(0, count);
      
      // Para cada categoría seleccionada, obtener el primer producto
      const categoriesWithProducts: CategoryWithProduct[] = selectedCategories.map(category => {
        const firstProduct = products.find(product => product.category === category);
        return {
          category,
          product: firstProduct!
        };
      });
      
      return categoriesWithProducts;
    },
    staleTime: 10 * 60 * 1000, // 10 minutos
  });
}; 