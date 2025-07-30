import ProductDetailPage from "@/components/features/landing/search/product-detail-page";
import {
  getProductById,
  getRelatedProducts,
  getProductReviews,
} from "@/app/lib/data";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const productId = Number(params.id);

  const product = getProductById(productId);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product.id, product.category);

  const reviews = getProductReviews(product.id);

  return (
    <ProductDetailPage
      product={product}
      relatedProducts={relatedProducts}
      reviews={reviews}
    />
  );
}
