"use client";

import { ShoppingCartIcon, UserIcon, HeartIcon, Bars3Icon, ArrowRightOnRectangleIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline"
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
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null)  
  const { getCartCount } = useCart()
  const { getFavoritesCount } = useFavorites()
  const { isAuthenticated, logout } = useAuth()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionSelect = (suggestion: string) => {
    setSearchQuery(suggestion);
    router.push(`/search?q=${encodeURIComponent(suggestion)}`);
    setShowSuggestions(false);
  };

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
  };

  const handleUserButtonClick = () => {
    if (isAuthenticated) {
      setShowUserDropdown(!showUserDropdown)
    } else {
      router.push("/auth/login");
    }
  };

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
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target as Node)) {
        setShowUserDropdown(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-20 xl:px-[80px] py-6">
        <div className="flex justify-between items-center gap-6 lg:gap-12">
          {/* Logo */}
          <Link
            href="/"
            className="flex justify-start items-center gap-2 flex-shrink-0"
          >
            <Image
              src="/images/logotipo-base.svg"
              alt="RataCueva Logo"
              width={126}
              height={22}
              priority
              style={{ height: 'auto' }}
            />
          </Link>

          {/* Search Bar - Expandido en desktop */}
          <div
            className="flex-1 max-w-2xl mx-4 lg:mx-8 relative"
            ref={searchRef}
          >
            <form onSubmit={handleSearch} className="relative">
              <div className="relative">
                <MagnifyingGlassIcon className="w-6 h-6 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2 z-10" />
                <Input
                  type="search"
                  variant="searchbar"
                  placeholder="Buscar productos..."
                  value={searchQuery}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  className="min-h-11 rounded-2xl pl-12 border-gray-200 focus:border-primary"
                />
              </div>
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
                    {getFavoritesCount() > 99 ? "99+" : getFavoritesCount()}
                  </span>
                )}
              </Link>
              <div className="relative">
                <Link
                  href="/cart"
                  className="h-11 min-h-11 p-2.5 bg-primary hover:bg-primary/80 transition-colors rounded-[99px] flex justify-center items-center relative"
                >
                  <ShoppingCartIcon className="w-5 h-5 text-white" />
                  {getCartCount() > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                      {getCartCount() > 99 ? "99+" : getCartCount()}
                    </span>
                  )}
                </Link>
              </div>
              <div className="relative" ref={userDropdownRef}>
                <button
                  onClick={handleUserButtonClick}
                  className="h-11 min-h-11 p-2.5 bg-primary hover:bg-primary/80 transition-colors rounded-[99px] flex justify-center items-center"
                >
                  <UserIcon className="w-5 h-5 text-white" />
                </button>
                
                {/* User Dropdown */}
                {showUserDropdown && isAuthenticated && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-gray-800 rounded-lg shadow-lg border border-zinc-700 z-50">
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
          <button className="lg:hidden h-11 min-h-11 p-2.5 bg-primary hover:bg-primary/80 transition-colors rounded-[99px] flex justify-center items-center">
            <Bars3Icon className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </header>
  );
}

/**
 * Obtiene las iniciales de un nombre completo
 * @param name - Nombre completo del usuario
 * @returns Las iniciales en mayúsculas
 */
export function getInitials(name: string): string {
  if (!name || typeof name !== 'string') {
    return '';
  }
  
  return name
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
    .toUpperCase()
    .substring(0, 2); // Limitar a 2 caracteres máximo
}

/**
 * Genera un color de avatar basado en el nombre
 * @param name - Nombre del usuario
 * @returns Color en formato hex
 */
export function getAvatarColor(name: string): string {
  if (!name || typeof name !== 'string') {
    return '#6B7280'; // Color gris por defecto
  }
  
  const colors = [
    '#EF4444', // red-500
    '#F59E0B', // amber-500
    '#10B981', // emerald-500
    '#3B82F6', // blue-500
    '#8B5CF6', // violet-500
    '#EC4899', // pink-500
    '#F97316', // orange-500
    '#84CC16', // lime-500
    '#06B6D4', // cyan-500
    '#6366F1', // indigo-500
  ];
  
  // Generar un índice basado en el nombre
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  const colorIndex = Math.abs(hash) % colors.length;
  return colors[colorIndex];
}

/**
 * Clase utilitaria para combinar clases CSS condicionalmente
 * @param classes - Array de clases o condiciones
 * @returns String con las clases combinadas
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Formatea un número como moneda en colones costarricenses
 * @param amount - Cantidad a formatear
 * @returns String formateado como moneda
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('es-CR', {
    style: 'currency',
    currency: 'CRC',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Trunca un texto a una longitud específica
 * @param text - Texto a truncar
 * @param length - Longitud máxima
 * @returns Texto truncado con "..." si es necesario
 */
export function truncateText(text: string, length: number): string {
  if (!text || text.length <= length) {
    return text;
  }
  return text.substring(0, length) + '...';
}