"use client"

import { ShoppingCartIcon, UserIcon, HeartIcon, Bars3Icon } from "@heroicons/react/24/outline"
import Link from "next/link"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { searchSuggestions } from "@/app/lib/data"
import SearchSuggestions from "@/components/features/home/atoms/SearchSuggestions"
import Input from "@/components/atoms/Input"
<<<<<<< HEAD
=======
import { useCart } from "@/contexts/CartContext"
import { useFavorites } from "@/contexts/FavoritesContext"
import { useAuth } from "@/contexts/AuthContext"
>>>>>>> 017d92bedc55f80b463897b044c617286893aa62

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showSuggestions, setShowSuggestions] = useState(false)

  const router = useRouter()
  const searchRef = useRef<HTMLDivElement>(null)
  const { getCartCount } = useCart()
  const { getFavoritesCount } = useFavorites()
  const { isAuthenticated } = useAuth()

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

  const handleUserButtonClick = () => {
    if (isAuthenticated) {
      router.push('/settings')
    } else {
      router.push('/auth/login')
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
    <header className="w-full">
      <div className="max-w-[1440px] mx-auto px-[80px] py-4 lg:py-6">
        <div className="flex justify-between items-center gap-4">
          {/* Logo */}
          <Link href="/" className="flex justify-start items-center gap-2 flex-shrink-0">
            <Image
              className="h-10 lg:h-12"
              src="/images/logotipo-base.svg"
              alt="RataCueva Logo"
              width={126}
              height={22}
            />
          </Link>

          {/* Search Bar - Expandido en desktop */}
          <div className="flex-1 max-w-2xl mx-4 lg:mx-8 relative" ref={searchRef}>
            <form onSubmit={handleSearch}>
              <Input
                type="search"
<<<<<<< HEAD
                variant="search"
=======
>>>>>>> 017d92bedc55f80b463897b044c617286893aa62
                placeholder="Buscar productos..."
                value={searchQuery}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                className="min-h-11 rounded-2xl"
              />
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
              className="h-11 min-h-11 px-4 py-2.5 bg-primary hover:bg-primary/80 transition-colors rounded-[99px] flex justify-center items-center gap-3"
            >
              <ShoppingCartIcon className="w-5 h-5 text-white" />
              <span className="text-white text-sm xl:text-base font-bold">Arma tu PC</span>
            </Link>
            <div className="flex justify-start items-center gap-3">
              <Link
                href="/settings/favorites"
                className="h-11 min-h-11 p-2.5 bg-primary hover:bg-primary/80 transition-colors rounded-[99px] flex justify-center items-center relative"
              >
                <HeartIcon className="w-5 h-5 text-white" />
                {getFavoritesCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {getFavoritesCount() > 99 ? '99+' : getFavoritesCount()}
                  </span>
                )}
              </Link>
              <Link
                href="/cart"
                className="h-11 min-h-11 p-2.5 bg-primary hover:bg-primary/80 transition-colors rounded-[99px] flex justify-center items-center relative"
              >
                <ShoppingCartIcon className="w-5 h-5 text-white" />
                {getCartCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {getCartCount() > 99 ? '99+' : getCartCount()}
                  </span>
                )}
              </Link>
              <button
                onClick={handleUserButtonClick}
                className="h-11 min-h-11 p-2.5 bg-primary hover:bg-primary/80 transition-colors rounded-[99px] flex justify-center items-center"
              >
                <UserIcon className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden h-11 min-h-11 p-2.5 bg-primary rounded-[99px] flex justify-center items-center">
            <Bars3Icon className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </header>
  )
}
