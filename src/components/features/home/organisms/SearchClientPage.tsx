//C:\Users\Misrael\Documents\WEBS\ratacueva-web\src\components\organisms\search\search-client-page.tsx
"use client"

import { useState, useCallback } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import SearchFilters from "@/components/features/home/molecules/SearchFilters"
import SearchResults from "@/components/features/home/molecules/SearchResults"
import { SlidersHorizontal } from "lucide-react"
import type { Product, Filters } from "@/app/lib/data"
import Button from "@/components/atoms/Button"
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
    updateSearchParams({ sortBy: sort })
  }

  return (
    <PageLayout className="py-6">
      <div className="mb-6">
        <div className="flex justify-end items-center mb-4">
          {/* Mobile Filter Toggle */}
          <Button
            onClick={() => setShowFilters(!showFilters)}
            
          >
            <SlidersHorizontal className="w-5 h-5 text-white" />
            <span className="text-white font-medium">Filtros</span>
          </Button>
        </div>
        {/* Results Count */}
        {initialQuery && (
          <div className="text-zinc-300">
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
            products={initialProducts}
            sortBy={initialSortBy}
            onSortChange={handleSortChange}
            query={initialQuery}
          />
        </div>
      </div>
    </PageLayout>
  )
}
