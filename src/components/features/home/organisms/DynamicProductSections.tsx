"use client";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/services/home/products";
import ProductSection from "./ProductSection";
import { transformProduct } from "@/hook/useProducts";

export default function DynamicProductSections() {
  const {
    data: allProducts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products", "all"],
    queryFn: () => getProducts({ limit: 100 }),
    staleTime: 10 * 60 * 1000,
  });

  if (isLoading) {
    return (
      <div className="space-y-8">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="animate-pulse">
            <div className="h-8 bg-placeholder rounded mb-6 w-1/3"></div>
            <div className="flex gap-4 overflow-hidden">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="min-w-[280px] h-64 bg-placeholder rounded"></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-400 p-8 text-center">
        Error cargando productos: {error.message}
      </div>
    );
  }

  if (!allProducts?.data) {
    return (
      <div className="text-placeholder p-8 text-center">
        No hay productos disponibles
      </div>
    );
  }

  const productsByCategory = allProducts.data.reduce((acc, product) => {
    const category = product.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {} as Record<string, typeof allProducts.data>);

  const categories = Object.keys(productsByCategory);

  if (categories.length === 0) {
    return (
      <div className="text-placeholder p-8 text-center">
        No se encontraron categorías de productos
      </div>
    );
  }

  return (
    <>
      {categories.map((category) => {
        const products = productsByCategory[category];
        const transformedProducts = products.map(transformProduct);
        const categoryId = category.toLowerCase().replace(/\s+/g, "-");

        return (
          <section key={category} id={categoryId} className="py-8">
            <ProductSection
              title={category}
              products={transformedProducts}
              showViewAll={true}
            />
          </section>
        );
      })}
    </>
  );
}
