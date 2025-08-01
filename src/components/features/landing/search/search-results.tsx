"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link" // ← AGREGAR ESTA IMPORTACIÓN
import { Star, Heart, ShoppingCart, Truck, ChevronDown } from "lucide-react"
import { Subheading, Body, BodySmall, Caption } from "@/components/atoms/Typography"
import type { Product } from "@/app/lib/data"

interface SearchResultsProps {
  products: Product[]
  sortBy: string
  onSortChange: (sort: string) => void
  query: string
}

const sortOptions = [
  { value: "relevance", label: "Más relevantes" },
  { value: "price-low", label: "Menor precio" },
  { value: "price-high", label: "Mayor precio" },
  { value: "rating", label: "Mejor calificados" },
  { value: "reviews", label: "Más vendidos" },
]

export default function SearchResults({ products, sortBy, onSortChange, query }: SearchResultsProps) {
  const [showSortDropdown, setShowSortDropdown] = useState(false)

  const ProductCard = ({ product }: { product: Product }) => (
    // ← ENVOLVER TODO EL CARD CON LINK
    <Link 
      href={`/products/${product.id}`}
      className="block bg-zinc-800 hover:bg-zinc-750 transition-colors rounded-lg overflow-hidden group cursor-pointer"
    >
      <div className="relative">
        {/* Product Image */}
        <div className="relative h-48 p-4 flex items-center justify-center bg-zinc-800/50">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={200}
            height={200}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
          {/* Discount Badge */}
          {product.discount && (
            <div className="absolute top-2 left-2 bg-pink-600 text-white text-xs font-bold px-2 py-1 rounded-full">
              -{product.discount}%
            </div>
          )}
          {/* Action Buttons */}
          <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button 
              onClick={(e) => {
                e.preventDefault() // ← PREVENIR NAVEGACIÓN
                e.stopPropagation()
                console.log('Agregar a favoritos:', product.id)
              }}
              className="w-8 h-8 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center"
            >
              <Heart className="w-4 h-4 text-white" />
            </button>
            <button 
              onClick={(e) => {
                e.preventDefault() // ← PREVENIR NAVEGACIÓN
                e.stopPropagation()
                console.log('Agregar al carrito:', product.id)
              }}
              className="w-8 h-8 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center"
            >
              <ShoppingCart className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
        {/* Product Info */}
        <div className="p-4">
          {/* Shipping Info */}
          {product.shipping && (
            <div className="flex items-center gap-1 mb-2">
              <Truck className="w-3 h-3 text-green-400" />
              <Caption className="text-green-400 text-xs">{product.shipping}</Caption>
            </div>
          )}
          {/* Product Name */}
          <Subheading className="text-white mb-2 line-clamp-2 group-hover:text-cyan-400 transition-colors text-sm">
            {product.name}
          </Subheading>
          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              <BodySmall className="text-white text-xs">{product.rating}</BodySmall>
            </div>
            <Caption className="text-zinc-400 text-xs">({product.reviews})</Caption>
          </div>
          {/* Price */}
          <div className="space-y-1">
            {product.originalPrice && (
              <div className="text-zinc-500 text-sm line-through">₡{product.originalPrice.toLocaleString()}</div>
            )}
            <div className="text-white text-lg font-bold">₡{product.price.toLocaleString()}</div>
          </div>
          {/* Location */}
          <Caption className="text-zinc-400 text-xs mt-2">{product.location}</Caption>
        </div>
      </div>
    </Link>
  )

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🔍</div>
        <Subheading className="text-white mb-2">No encontramos productos</Subheading>
        <Body className="text-zinc-400">
          {query ? `No hay resultados para "${query}"` : "Intenta con otros términos de búsqueda"}
        </Body>
      </div>
    )
  }

  return (
    <div>
      {/* Sort Controls */}
      <div className="flex justify-between items-center mb-6">
        <Body className="text-zinc-300">
          {products.length} {products.length === 1 ? "resultado" : "resultados"}
        </Body>
        <div className="relative">
          <button
            onClick={() => setShowSortDropdown(!showSortDropdown)}
            className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 border border-zinc-600 rounded-lg text-white text-sm transition-colors"
          >
            <span>Ordenar: {sortOptions.find((opt) => opt.value === sortBy)?.label}</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          {showSortDropdown && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setShowSortDropdown(false)} />
              <div className="absolute top-full right-0 mt-2 w-48 bg-zinc-800 border border-zinc-700 rounded-lg shadow-xl z-50">
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      onSortChange(option.value)
                      setShowSortDropdown(false)
                    }}
                    className={`w-full px-4 py-3 text-left text-sm hover:bg-zinc-700 transition-colors ${
                      sortBy === option.value ? "text-cyan-400" : "text-white"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}