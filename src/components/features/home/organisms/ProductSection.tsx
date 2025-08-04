"use client"
import { useRef } from "react"
import ProductCard from "@/components/features/home/atoms/ProductCard"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { Heading } from "@/components/atoms/Typography"

interface ProductSectionProps {
  title: string
  products: Array<{
    id: string
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
        <Heading className="text-white">{title}</Heading>
        {showViewAll && (
          <Link
            href={`/search?categories=${encodeURIComponent(title)}`}
            className="h-11 min-h-11 px-4 lg:px-6 py-2.5 rounded-[99px] outline-1 outline-offset-[-1px] outline-cyan-400 hover:bg-cyan-400/10 transition-colors flex justify-center items-center gap-3"
          >
            <span className="text-cyan-400 text-sm lg:text-base font-bold">Ver todo</span>
          </Link>
        )}
      </div>

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

        <button
          onClick={scrollRight}
          className="w-12 h-12 lg:w-14 lg:h-14 absolute right-0 top-1/2 -translate-y-1/2 bg-neutral-600/90 hover:bg-neutral-500 backdrop-blur-sm rounded-full flex justify-center items-center z-10 transition-colors"
        >
          <ChevronRightIcon className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={scrollLeft}
          className="w-12 h-12 lg:w-14 lg:h-14 absolute left-0 top-1/2 -translate-y-1/2 bg-neutral-600/90 hover:bg-neutral-500 backdrop-blur-sm rounded-full flex justify-center items-center z-10 transition-colors"
        >
          <ChevronLeftIcon className="w-6 h-6 text-white" />
        </button>
      </div>
    </section>
  )
}
