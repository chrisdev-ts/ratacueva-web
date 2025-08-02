import { useQuery } from '@tanstack/react-query';
import { getAllProducts, type Product as ApiProduct } from '@/services/home/products';

export interface CategoryCard {
  id: string;
  name: string;
  image: string;
  productCount: number;
}

export const useRandomCategories = () => {
  return useQuery({
    queryKey: ['random-categories'],
    queryFn: async (): Promise<CategoryCard[]> => {
      const response = await getAllProducts();
      const products = response.data || [];
      
      // Agrupar productos por categoría
      const categoriesMap = new Map<string, { products: ApiProduct[], image: string }>();
      
      products.forEach(product => {
        const category = product.category;
        if (!categoriesMap.has(category)) {
          categoriesMap.set(category, {
            products: [],
            image: product.images[0] || '/placeholder.svg'
          });
        }
        categoriesMap.get(category)!.products.push(product);
      });
      
      // Convertir a array y seleccionar 5 categorías aleatorias
      const categories = Array.from(categoriesMap.entries()).map(([name, data]) => ({
        id: name.toLowerCase().replace(/\s+/g, '-'),
        name,
        image: data.image,
        productCount: data.products.length
      }));
      
      // Mezclar y tomar 5 categorías aleatorias
      const shuffled = categories.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 5);
    },
    staleTime: 10 * 60 * 1000, // 10 minutos
  });
}; 