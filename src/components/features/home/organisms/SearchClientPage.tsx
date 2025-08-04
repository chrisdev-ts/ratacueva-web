//C:\Users\Misrael\Documents\WEBS\ratacueva-web\src\components\organisms\search\search-client-page.tsx
"use client"

import { useState, useCallback, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import SearchFilters from "@/components/features/home/molecules/SearchFilters"
import SearchResults from "@/components/features/home/molecules/SearchResults"
import type { Product, Filters } from "@/app/lib/data"
import { PageLayout } from "@/components/templates/PageLayout"

interface SearchClientPageProps {
  initialProducts: Product[]
  initialQuery: string
  initialFilters: Filters
  initialSortBy: string
}

export default function SearchClientPage({
  initialProducts,
  initialQuery,
  initialFilters,
  initialSortBy,
}: SearchClientPageProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [showFilters, setShowFilters] = useState(false)
  const [products, setProducts] = useState(initialProducts)
  const [currentSortBy, setCurrentSortBy] = useState(initialSortBy)

  const updateSearchParams = useCallback(
    (newParams: Record<string, string | string[] | number[] | boolean | undefined>) => {
      const current = new URLSearchParams(searchParams.toString())
      Object.entries(newParams).forEach(([key, value]) => {
        if (value === undefined || value === null || value === "" || (Array.isArray(value) && value.length === 0)) {
          current.delete(key)
        } else if (Array.isArray(value)) {
          current.set(key, value.join(","))
        } else {
          current.set(key, String(value))
        }
      })
      router.push(`?${current.toString()}`)
    },
    [router, searchParams],
  )

  const handleFiltersChange = (newFilters: Filters) => {
    updateSearchParams({
      priceRange: `${newFilters.priceRange[0]}-${newFilters.priceRange[1]}`,
      categories: newFilters.categories,
      brands: newFilters.brands,
      locations: newFilters.locations,
      freeShipping: newFilters.freeShipping,
      withDiscount: newFilters.withDiscount,
    })
  }

  const handleSortChange = (sort: string) => {
    setCurrentSortBy(sort)
    updateSearchParams({ sortBy: sort })
  }

  // Función para ordenar productos
  const sortProducts = (productsToSort: Product[], sortBy: string): Product[] => {
    const sortedProducts = [...productsToSort]
    
    switch (sortBy) {
      case "price-low":
        return sortedProducts.sort((a, b) => a.price - b.price)
      case "price-high":
        return sortedProducts.sort((a, b) => b.price - a.price)
      case "rating":
        return sortedProducts.sort((a, b) => (b.rating || 0) - (a.rating || 0))
      case "reviews":
        return sortedProducts.sort((a, b) => (b.reviews || 0) - (a.reviews || 0))
      default:
        return sortedProducts
    }
  }

  // Ordenar productos cuando cambia el sortBy
  const sortedProducts = sortProducts(products, currentSortBy)

  // Actualizar productos cuando cambien los filtros (nueva navegación)
  useEffect(() => {
    setProducts(initialProducts)
    setCurrentSortBy(initialSortBy)
  }, [initialProducts, initialSortBy])

  return (
    <PageLayout className="py-6">
      <div className="mb-6">
        
        {/* Results Count */}
        {initialQuery && (
          <div className="text-placeholder">
            {initialProducts.length} resultados para &quot;{initialQuery}&quot;
          </div>
        )}
      </div>
      <div className="flex gap-6">
        {/* Filters Sidebar */}
        <div className={`${showFilters ? "block" : "hidden"} lg:block w-full lg:w-80 flex-shrink-0`}>
          <SearchFilters
            filters={initialFilters}
            onFiltersChange={handleFiltersChange}
            onClose={() => setShowFilters(false)}
          />
        </div>
        {/* Results */}
        <div className="flex-1">
          <SearchResults
            products={sortedProducts}
            sortBy={currentSortBy}
            onSortChange={handleSortChange}
            query={initialQuery}
          />
        </div>
      </div>
    </PageLayout>
  )
}
