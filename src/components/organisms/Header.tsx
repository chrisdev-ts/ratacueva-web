"use client"

import { Search, ShoppingCart, User, Heart, Menu } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { searchSuggestions } from "@/app/lib/data"
import SearchSuggestions from "@/components/features/landing/search/search-suggestions"
import Input from "../atoms/Input"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showSuggestions, setShowSuggestions] = useState(false)
  const router = useRouter()
  const searchRef = useRef<HTMLDivElement>(null)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      setShowSuggestions(false)
    }
  }

  const handleSuggestionSelect = (suggestion: string) => {
    setSearchQuery(suggestion)
    router.push(`/search?q=${encodeURIComponent(suggestion)}`)
    setShowSuggestions(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchQuery(value)
    setShowSuggestions(value.length > 0)
  }

  const handleInputFocus = () => {
    if (searchQuery.length > 0) {
      setShowSuggestions(true)
    }
  }

  // Cerrar sugerencias al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <header className="w-full bg-zinc-900 border-b border-zinc-800">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-4 lg:py-6">
        <div className="flex justify-between items-center gap-4">
          {/* Logo */}
          <Link href="/" className="flex justify-start items-center gap-2 flex-shrink-0">
            <Image
              className="w-8 h-8 lg:w-10 lg:h-10"
              src="/landing/home/logo.png"
              alt="RataCueva Logo"
              width={40}
              height={40}
            />
            <div className="text-neutral-400 text-xl lg:text-3xl font-black font-exo">RataCueva</div>
          </Link>

          {/* Search Bar - Expandido en desktop */}
          <div className="flex-1 max-w-2xl mx-4 lg:mx-8 relative" ref={searchRef}>
            <form
              onSubmit={handleSearch}
              className="relative"
              role="search"
              aria-label="Buscar productos">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-placeholder pointer-events-none" />

              <Input
                variant="searchbar"
                type="text"
                placeholder="Buscar productos..."
                value={searchQuery}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                className="pl-10"/>
            </form>

            {/* Dropdown de sugerencias */}
            {showSuggestions && (
              <SearchSuggestions
                query={searchQuery}
                suggestions={searchSuggestions}
                onSelect={handleSuggestionSelect}
                onClose={() => setShowSuggestions(false)}
              />
            )}
          </div>


          {/* Desktop Actions */}
          <div className="hidden lg:flex justify-start items-center gap-4 xl:gap-6">
            <Link
              href="/build-pc"
              className="h-11 min-h-11 px-4 py-2.5 bg-pink-600 hover:bg-pink-700 transition-colors rounded-[99px] flex justify-center items-center gap-3"
            >
              <ShoppingCart className="w-5 h-5 text-white" />
              <span className="text-white text-sm xl:text-base font-bold">Arma tu PC</span>
            </Link>
            <div className="flex justify-start items-center gap-3">
              <button className="h-11 min-h-11 p-2.5 bg-pink-600 hover:bg-pink-700 transition-colors rounded-[99px] flex justify-center items-center">
                <Heart className="w-5 h-5 text-white" />
              </button>
              <button className="h-11 min-h-11 p-2.5 bg-pink-600 hover:bg-pink-700 transition-colors rounded-[99px] flex justify-center items-center">
                <ShoppingCart className="w-5 h-5 text-white" />
              </button>
              <Link
                href="/settings"
                className="h-11 min-h-11 p-2.5 bg-pink-600 hover:bg-pink-700 transition-colors rounded-[99px] flex justify-center items-center"
              >
                <User className="w-5 h-5 text-white" />
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden h-11 min-h-11 p-2.5 bg-pink-600 rounded-[99px] flex justify-center items-center">
            <Menu className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </header>
  )
}
