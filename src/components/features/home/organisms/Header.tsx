"use client"

import { ShoppingCartIcon, UserIcon, HeartIcon, Bars3Icon, ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { searchProducts, Product } from "@/services/home/products"
import SearchSuggestions from "@/components/features/home/atoms/SearchSuggestions"
import Input from "@/components/atoms/Input"
import { useCart } from "@/contexts/CartContext"
import { useFavorites } from "@/contexts/FavoritesContext"
import { useAuth } from "@/contexts/AuthContext"

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [showUserDropdown, setShowUserDropdown] = useState(false)
  const [searchResults, setSearchResults] = useState<Product[]>([])
  const [isSearching, setIsSearching] = useState(false)

  const router = useRouter()
  const searchRef = useRef<HTMLDivElement>(null)
  const userDropdownRef = useRef<HTMLDivElement>(null)
  const searchTimeoutRef = useRef<NodeJS.Timeout>()
  
  const { getCartCount } = useCart()
  const { getFavoritesCount } = useFavorites()
  const { isAuthenticated, logout } = useAuth()

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

  const handleProductSelect = (productId: string) => {
    router.push(`/product/${productId}`)
    setShowSuggestions(false)
    setSearchQuery("")
  }

  // Función para buscar productos en tiempo real
  const performSearch = async (query: string) => {
    if (query.trim().length < 2) {
      setSearchResults([])
      return
    }

    setIsSearching(true)
    try {
      const response = await searchProducts(query.trim(), 5) // Limitar a 5 resultados para el dropdown
      setSearchResults(response.data)
    } catch (error) {
      console.error("Error al buscar productos:", error)
      setSearchResults([])
    } finally {
      setIsSearching(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchQuery(value)
    setShowSuggestions(value.length > 0)

    // Cancelar búsqueda anterior
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current)
    }

    // Realizar nueva búsqueda con debounce
    if (value.trim().length >= 2) {
      searchTimeoutRef.current = setTimeout(() => {
        performSearch(value)
      }, 300) // 300ms de debounce
    } else {
      setSearchResults([])
    }
  }

  const handleInputFocus = () => {
    if (searchQuery.length > 0) {
      setShowSuggestions(true)
      if (searchQuery.trim().length >= 2) {
        performSearch(searchQuery)
      }
    }
  }

  const handleUserButtonClick = () => {
    if (isAuthenticated) {
      setShowUserDropdown(!showUserDropdown)
    } else {
      router.push('/auth/login')
    }
  }

  const handleLogout = () => {
    logout()
    setShowUserDropdown(false)
    router.push('/')
  }

  // Limpiar timeout al desmontar
  useEffect(() => {
    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current)
      }
    }
  }, [])

  // Cerrar sugerencias y dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false)
      }
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target as Node)) {
        setShowUserDropdown(false)
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
              priority
              style={{ height: 'auto' }}
            />
          </Link>

          {/* Search Bar - Expandido en desktop */}
          <div className="flex-1 max-w-2xl mx-4 lg:mx-8 relative" ref={searchRef}>
            <form onSubmit={handleSearch}>
              <Input
                type="search"
                variant="searchbar"      // Solo era poner el tipo correcto de variante, en este caso "searchbar"          
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
                products={searchResults}
                isLoading={isSearching}
                onProductSelect={handleProductSelect}
                onSuggestionSelect={handleSuggestionSelect}
                onClose={() => setShowSuggestions(false)}
              />
            )}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex justify-start items-center gap-4 xl:gap-6">
            <Link
              href="/search"
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
              <div className="relative" ref={userDropdownRef}>
                <button
                  onClick={handleUserButtonClick}
                  className="h-11 min-h-11 p-2.5 bg-primary hover:bg-primary/80 transition-colors rounded-[99px] flex justify-center items-center"
                >
                  <UserIcon className="w-5 h-5 text-white" />
                </button>
                
                {/* User Dropdown */}
                {showUserDropdown && isAuthenticated && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-gray rounded-lg shadow-lg border border-zinc-700 z-50">
                    <div className="py-1">
                      <Link
                        href="/settings"
                        className="flex items-center px-4 py-2 text-white hover:bg-zinc-700 transition-colors"
                        onClick={() => setShowUserDropdown(false)}
                      >
                        <UserIcon className="w-4 h-4 mr-3" />
                        Mi Perfil
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="flex items-center w-full px-4 py-2 text-white hover:bg-zinc-700 transition-colors"
                      >
                        <ArrowRightOnRectangleIcon className="w-4 h-4 mr-3" />
                        Cerrar sesión
                      </button>
                    </div>
                  </div>
                )}
              </div>
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
