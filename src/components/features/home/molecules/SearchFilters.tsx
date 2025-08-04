"use client"
import type React from "react"
import { useState } from "react"
import { XMarkIcon, ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline"
import { Subheading, Body } from "@/components/atoms/Typography"
import Button from "@/components/atoms/Button"
import type { Filters } from "@/app/lib/data"

interface SearchFiltersProps {
  filters: Filters
  onFiltersChange: (filters: Filters) => void
  onClose: () => void
}

const categories = [
  "Tarjetas Gráficas",
  "Procesadores",
  "Memoria RAM",
  "Tarjetas Madre",
  "Almacenamiento",
  "Periféricos",
]
const brands = ["NVIDIA", "AMD", "Intel", "Corsair", "ASUS", "MSI", "Samsung", "Logitech"]
const locations = ["San José", "Cartago", "Alajuela", "Heredia", "Puntarenas", "Guanacaste", "Limón"]

export default function SearchFilters({ filters, onFiltersChange, onClose }: SearchFiltersProps) {
  const [expandedSections, setExpandedSections] = useState({
    price: true,
    category: true,
    brand: false,
    location: false,
    shipping: true,
  })

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const handlePriceChange = (index: number, value: string) => {
    const newRange = [...filters.priceRange] as [number, number]
    newRange[index] = Number.parseInt(value) || 0
    onFiltersChange({ ...filters, priceRange: newRange })
  }

  const handleArrayFilter = (filterKey: "categories" | "brands" | "locations", value: string) => {
    const currentArray = filters[filterKey]
    const newArray = currentArray.includes(value)
      ? currentArray.filter((item) => item !== value)
      : [...currentArray, value]
    onFiltersChange({ ...filters, [filterKey]: newArray })
  }

  const clearAllFilters = () => {
    onFiltersChange({
      priceRange: [0, 2000000],
      categories: [],
      brands: [],
      locations: [],
      freeShipping: false,
      withDiscount: false,
    })
  }

  const FilterSection = ({
    title,
    isExpanded,
    onToggle,
    children,
  }: {
    title: string
    isExpanded: boolean
    onToggle: () => void
    children: React.ReactNode
  }) => (
    <div className="border-b border-placeholder last:border-b-0">
      <Button
        onClick={onToggle}
        variant="icon"
        className="w-full px-4 py-4 flex justify-between items-center hover:bg-dark transition-colors h-auto bg-transparent border-none shadow-none rounded-none font-normal text-left"
      >
        <Subheading className="text-white">{title}</Subheading>
        {isExpanded ? (
          <ChevronUpIcon className="w-5 h-5 text-white" />
        ) : (
          <ChevronDownIcon className="w-5 h-5 text-white" />
        )}
      </Button>
      {isExpanded && <div className="px-4 pb-4">{children}</div>}
    </div>
  )

  return (
    <div className="bg-gray rounded-2xl overflow-hidden relative max-h-[80vh] overflow-y-auto">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-placeholder">
        <Subheading className="text-white">Filtros</Subheading>
        <div className="flex items-center gap-2">
          <button onClick={clearAllFilters} className="text-cyan-400 hover:text-cyan-300 text-sm font-medium bg-transparent border-none shadow-none h-auto p-0 rounded-none font-normal">
            Limpiar todo
          </button>
          <Button onClick={onClose} variant="icon" className="lg:hidden text-dark hover:text-white bg-transparent border-none shadow-none h-auto p-0 rounded-none">
            <XMarkIcon className="w-5 h-5" />
          </Button>
        </div>
      </div>
      {/* Price Range */}
      <FilterSection title="Precio" isExpanded={expandedSections.price} onToggle={() => toggleSection("price")}>
        <div className="space-y-3">
          <div className="flex gap-3">
            <div className="flex-1">
              <Body className="text-white text-sm mb-1">Mínimo</Body>
              <input
                type="number"
                value={filters.priceRange[0]}
                onChange={(e) => handlePriceChange(0, e.target.value)}
                className="w-full px-3 py-2 bg-dark border border-dark rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-dark"
                placeholder="0"
              />
            </div>
            <div className="flex-1">
              <Body className="text-white text-sm mb-1">Máximo</Body>
              <input
                type="number"
                value={filters.priceRange[1]}
                onChange={(e) => handlePriceChange(1, e.target.value)}
                className="w-full px-3 py-2 bg-dark border border-dark rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-dark"
                placeholder="2000000"
              />
            </div>
          </div>
          <div className="flex gap-2 flex-wrap">
            {[50000, 100000, 200000, 500000, 1000000].map((price) => (
              <button
                key={price}
                onClick={() => onFiltersChange({ ...filters, priceRange: [0, price] })}
                className="px-3 py-1 bg-dark hover:bg-gray text-white text-xs rounded-full transition-colors"
              >
                Hasta ${price.toLocaleString()}
              </button>
            ))}
          </div>
        </div>
      </FilterSection>
      {/* Categories */}
      <FilterSection
        title="Categoría"
        isExpanded={expandedSections.category}
        onToggle={() => toggleSection("category")}
      >
        <div className="space-y-2">
          {categories.map((category) => (
            <label
              key={category}
              className="flex items-center gap-3 cursor-pointer hover:bg-dark p-2 rounded-lg"
            >
              <input
                type="checkbox"
                checked={filters.categories.includes(category)}
                onChange={() => handleArrayFilter("categories", category)}
                className="w-4 h-4 text-primary bg-dark border-dark rounded focus:ring-pink-500"
              />
              <Body className="text-white text-sm">{category}</Body>
            </label>
          ))}
        </div>
      </FilterSection>
      {/* Brands */}
      <FilterSection title="Marca" isExpanded={expandedSections.brand} onToggle={() => toggleSection("brand")}>
        <div className="space-y-2">
          {brands.map((brand) => (
            <label key={brand} className="flex items-center gap-3 cursor-pointer hover:bg-dark p-2 rounded-lg">
              <input
                type="checkbox"
                checked={filters.brands.includes(brand)}
                onChange={() => handleArrayFilter("brands", brand)}
                className="w-4 h-4 text-primary bg-dark border-dark rounded focus:ring-pink-500"
              />
              <Body className="text-white text-sm">{brand}</Body>
            </label>
          ))}
        </div>
      </FilterSection>
      {/* Location */}
      <FilterSection
        title="Ubicación"
        isExpanded={expandedSections.location}
        onToggle={() => toggleSection("location")}
      >
        <div className="space-y-2">
          {locations.map((location) => (
            <label
              key={location}
              className="flex items-center gap-3 cursor-pointer hover:bg-dark p-2 rounded-lg"
            >
              <input
                type="checkbox"
                checked={filters.locations.includes(location)}
                onChange={() => handleArrayFilter("locations", location)}
                className="w-4 h-4 text-primary bg-dark border-dark rounded focus:ring-pink-500"
              />
              <Body className="text-white text-sm">{location}</Body>
            </label>
          ))}
        </div>
      </FilterSection>
      {/* Shipping & Discounts */}
      <FilterSection
        title="Envío y Ofertas"
        isExpanded={expandedSections.shipping}
        onToggle={() => toggleSection("shipping")}
      >
        <div className="space-y-3">
          <label className="flex items-center gap-3 cursor-pointer hover:bg-dark p-2 rounded-lg">
            <input
              type="checkbox"
              checked={filters.freeShipping}
              onChange={(e) => onFiltersChange({ ...filters, freeShipping: e.target.checked })}
              className="w-4 h-4 text-primary bg-dark border-dark rounded focus:ring-pink-500"
            />
            <Body className="text-white text-sm">Envío gratis</Body>
          </label>
          <label className="flex items-center gap-3 cursor-pointer hover:bg-dark p-2 rounded-lg">
            <input
              type="checkbox"
              checked={filters.withDiscount}
              onChange={(e) => onFiltersChange({ ...filters, withDiscount: e.target.checked })}
              className="w-4 h-4 text-primary bg-dark border-dark rounded focus:ring-pink-500"
            />
            <Body className="text-white text-sm">Con descuento</Body>
          </label>
        </div>
      </FilterSection>
    </div>
  )
}
