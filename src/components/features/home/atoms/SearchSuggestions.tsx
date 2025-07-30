//C:\Users\Misrael\Documents\WEBS\ratacueva-web\src\components\organisms\search\search-suggestions.tsx
"use client"
import { Search, TrendingUp, Star, Truck } from "lucide-react"
import { Body, BodySmall, Caption } from "@/components/atoms/Typography"
import Button from "@/components/atoms/Button"
import { mockProducts } from "@/app/lib/data"
import Image from "next/image"
import Link from "next/link"

interface SearchSuggestionsProps {
  query: string
  suggestions: string[]
  onSelect: (suggestion: string) => void
  onClose: () => void
}

export default function SearchSuggestions({ query, suggestions, onSelect, onClose }: SearchSuggestionsProps) {
  const filteredSuggestions = suggestions
    .filter((suggestion) => suggestion.toLowerCase().includes(query.toLowerCase()))
    .slice(0, 4)

  // Filtrar productos que coincidan con la búsqueda
  const matchingProducts = mockProducts
    .filter((product) => 
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase()) ||
      product.brand.toLowerCase().includes(query.toLowerCase())
    )
    .slice(0, 3)

  const hasResults = filteredSuggestions.length > 0 || matchingProducts.length > 0

  if (!hasResults) return null

  return (
    <>
      <div className="fixed inset-0 z-40" onClick={onClose} />
      <div className="absolute top-full left-0 right-0 mt-2 bg-zinc-800 border border-zinc-700 rounded-2xl shadow-xl z-50 max-h-96 overflow-y-auto">
        <div className="p-2">
          {/* Productos que coinciden */}
          {matchingProducts.length > 0 && (
            <div className="mb-4">
              <div className="px-4 py-2 text-xs font-medium text-zinc-400 uppercase tracking-wide">
                Productos
              </div>
              {matchingProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.id}`}
                  onClick={onClose}
                  className="block px-4 py-3 hover:bg-zinc-700 rounded-lg transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 flex-shrink-0">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-contain rounded"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <Body className="text-white text-sm truncate">{product.name}</Body>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <BodySmall className="text-white text-xs">{product.rating}</BodySmall>
                        </div>
                        <Caption className="text-zinc-400 text-xs">₡{product.price.toLocaleString()}</Caption>
                        {product.shipping && (
                          <div className="flex items-center gap-1">
                            <Truck className="w-3 h-3 text-green-400" />
                            <Caption className="text-green-400 text-xs">{product.shipping}</Caption>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Sugerencias de búsqueda */}
          {filteredSuggestions.length > 0 && (
            <div>
              <div className="px-4 py-2 text-xs font-medium text-zinc-400 uppercase tracking-wide">
                Sugerencias
              </div>
              {filteredSuggestions.map((suggestion, index) => (
                <Button
                  key={index}
                  onClick={() => onSelect(suggestion)}
                  variant="icon"
                  className="w-full px-4 py-3 text-left hover:bg-zinc-700 rounded-lg transition-colors flex items-center gap-3 h-auto bg-transparent border-none shadow-none"
                >
                  <Search className="w-4 h-4 text-zinc-400 flex-shrink-0" />
                  <Body className="text-white flex-1">{suggestion}</Body>
                  <TrendingUp className="w-4 h-4 text-zinc-500" />
                </Button>
              ))}
            </div>
          )}

          {/* Ver todos los resultados */}
          <div className="border-t border-zinc-700 mt-2 pt-2">
            <Link
              href={`/search?q=${encodeURIComponent(query)}`}
              onClick={onClose}
              className="block px-4 py-3 text-center text-cyan-400 hover:bg-zinc-700 rounded-lg transition-colors text-sm font-medium"
            >
              Ver todos los resultados para &quot;{query}&quot;
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

