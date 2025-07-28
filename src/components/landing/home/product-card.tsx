import Image from "next/image"
import { Star, Heart, ShoppingCart } from "lucide-react"

interface ProductCardProps {
  product: {
    id: number
    name: string
    rating: number
    reviews: number
    price: number
    image: string
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-zinc-800 hover:bg-zinc-750 transition-colors rounded-lg overflow-hidden group">
      {/* Image Container */}
      <div className="relative h-56 lg:h-64 p-4 flex flex-col justify-center items-center bg-zinc-800/50">
        <Image
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={300}
          height={300}
        />

        {/* Hover Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="w-8 h-8 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center">
            <Heart className="w-4 h-4 text-white" />
          </button>
          <button className="w-8 h-8 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center">
            <ShoppingCart className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      {/* Product Info */}
      <div className="p-4 lg:p-6">
        <h3 className="text-white text-lg lg:text-xl font-semibold mb-2 line-clamp-2 group-hover:text-cyan-400 transition-colors">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-white text-sm font-medium">{product.rating}</span>
          </div>
          <span className="text-zinc-400 text-sm">({product.reviews} reseñas)</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="text-white text-xl lg:text-2xl font-bold">${product.price.toLocaleString()}</div>
          <button className="px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white text-sm font-medium rounded-lg transition-colors">
            Agregar
          </button>
        </div>
      </div>
    </div>
  )
}
