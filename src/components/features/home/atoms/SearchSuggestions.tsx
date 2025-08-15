//C:\Users\Misrael\Documents\WEBS\ratacueva-web\src\components\organisms\search\search-suggestions.tsx
"use client";
import Button from "@/components/atoms/Button";
import { Body, BodySmall, Caption } from "@/components/atoms/Typography";
import { Product } from "@/services/home/products";
import {
  MagnifyingGlassIcon,
  ArrowTrendingUpIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

interface SearchSuggestionsProps {
  query: string;
  products: Product[];
  isLoading?: boolean;
  onProductSelect: (productId: string) => void;
  onSuggestionSelect: (suggestion: string) => void;
  onClose: () => void;
}

export default function SearchSuggestions({
  query,
  products,
  onSuggestionSelect,
  onClose,
}: SearchSuggestionsProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const filteredProducts = products
    .filter(
      (product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase()) ||
        product.brand.toLowerCase().includes(query.toLowerCase())
    )
    .slice(0, 3);

  const hasResults = filteredProducts.length > 0;

  if (!hasResults) return null;

  return (
    <>
      <div className="fixed inset-0 z-40" onClick={onClose} />
      <div className="absolute top-full left-0 right-0 mt-2 bg-dark border border-gray rounded-2xl shadow-xl z-50 max-h-96 overflow-y-auto">
        <div className="p-2">
          {filteredProducts.length > 0 && (
            <div className="mb-4">
              <div className="px-4 py-2 text-xs font-medium text-placeholder uppercase tracking-wide">
                Productos
              </div>
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.id}`}
                  onClick={onClose}
                  className="block px-4 py-3 hover:bg-dark rounded-lg transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-zinc-700 rounded-lg overflow-hidden flex-shrink-0">
                      {product.images && product.images.length > 0 ? (
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"/>
                      ) : null}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-white truncate text-sm">
                        {product.name}
                      </div>
                      <div className="text-xs text-zinc-400 truncate">
                        {product.brand} • {product.category}
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex items-center gap-1">
                          <StarIcon className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <BodySmall className="text-white text-xs">
                            {product.rating}
                          </BodySmall>
                        </div>
                        <div className="text-sm font-semibold text-primary">
                          {formatPrice(product.price)}
                        </div>
                        {product.shipping && (
                          <div className="flex items-center gap-1">
                            <TruckIcon className="w-3 h-3 text-green-400" />
                            <Caption className="text-green-400 text-xs">
                              {product.shipping}
                            </Caption>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      {product.stock > 0 ? (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-800 text-green-200">
                          En stock
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-800 text-red-200">
                          Agotado
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {filteredProducts.length > 0 && (
            <div>
              <div className="px-4 py-2 text-xs font-medium text-placeholder uppercase tracking-wide">
                Sugerencias
              </div>
              {filteredProducts.map((product) => (
                <Button
                  key={`suggestion-${product.id}`}
                  onClick={() => onSuggestionSelect(product.name)}
                  variant="icon"
                  className="w-full px-4 py-3 text-left hover:bg-dark rounded-lg transition-colors flex items-center gap-3 h-auto bg-transparent border-none shadow-none">
                  <MagnifyingGlassIcon className="w-4 h-4 text-placeholder flex-shrink-0" />
                  <Body className="text-white flex-1">{product.name}</Body>
                  <ArrowTrendingUpIcon className="w-4 h-4 text-placeholder" />
                </Button>
              ))}
            </div>
          )}

          <div className="border-t border-placeholder mt-2 pt-2">
            <Link
              href={`/search?q=${encodeURIComponent(query)}`}
              onClick={onClose}
              className="block px-4 py-3 text-center text-cyan-400 hover:bg-dark rounded-lg transition-colors text-sm font-medium">
              Ver todos los resultados para &quot;{query}&quot;
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
