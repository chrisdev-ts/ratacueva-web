"use client"
import { useRef } from "react"
import ProductCard from "./product-card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

interface ProductSectionProps {
  title: string
  products: Array<{
    id: number
    name: string
    rating: number
    reviews: number
    price: number
    image: string
  }>
  showViewAll?: boolean
}

export default function ProductSection({ title, products, showViewAll = false }: ProductSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" })
    }
  }

  return (
    <section className="py-8 lg:py-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 lg:mb-8">
        <h2 className="text-white text-xl lg:text-2xl xl:text-3xl font-bold">{title}</h2>
        {showViewAll && (
          <Link
            href={`/category/${title.toLowerCase().replace(/\s+/g, "-")}`}
            className="h-11 min-h-11 px-4 lg:px-6 py-2.5 rounded-[99px] outline outline-1 outline-offset-[-1px] outline-cyan-400 hover:bg-cyan-400/10 transition-colors flex justify-center items-center gap-3"
          >
            <span className="text-cyan-400 text-sm lg:text-base font-bold">Ver todo</span>
          </Link>
        )}
      </div>

      {/* Products Container */}
      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-4 lg:gap-6 xl:gap-8 pb-4 scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.map((product) => (
            <div key={product.id} className="min-w-[280px] lg:min-w-[320px] xl:min-w-[350px] flex-shrink-0">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={scrollRight}
          className="w-12 h-12 lg:w-14 lg:h-14 absolute right-0 top-1/2 -translate-y-1/2 bg-neutral-600/90 hover:bg-neutral-500 backdrop-blur-sm rounded-full flex justify-center items-center z-10 transition-colors"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={scrollLeft}
          className="w-12 h-12 lg:w-14 lg:h-14 absolute left-0 top-1/2 -translate-y-1/2 bg-neutral-600/90 hover:bg-neutral-500 backdrop-blur-sm rounded-full flex justify-center items-center z-10 transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
      </div>
    </section>
  )
}
