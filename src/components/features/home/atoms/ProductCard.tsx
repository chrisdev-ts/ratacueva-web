import Image from "next/image"
import { StarIcon } from "@heroicons/react/24/solid"
import { Subheading, BodySmall, Caption } from "@/components/atoms/Typography"

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


      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      {/* Product Info */}
      <div className="p-4 lg:p-6">
        <Subheading className="text-white mb-2 line-clamp-2 group-hover:text-cyan-400 transition-colors">
          {product.name}
        </Subheading>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <StarIcon
                  key={index}
                  className={`w-4 h-4 ${
                    index < Math.floor(product.rating)
                      ? "text-yellow-400"
                      : "text-zinc-600"
                  }`}
                />
              ))}
            </div>
            <BodySmall className="text-white font-medium">{product.rating}</BodySmall>
          </div>
          <Caption className="text-zinc-400">({product.reviews} reseñas)</Caption>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="text-white text-xl lg:text-2xl font-bold">${product.price.toLocaleString()}</div>
        </div>
      </div>
    </div>
  )
}
