"use client";

import {
  ShoppingCartIcon,
  UserIcon,
  HeartIcon,
  Bars3Icon,
  ComputerDesktopIcon,
  Cog6ToothIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { searchSuggestions } from "@/app/lib/data";
import SearchSuggestions from "@/components/features/home/atoms/SearchSuggestions";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";
import { useCart } from "@/contexts/CartContext";
import { useFavorites } from "@/contexts/FavoritesContext";
import { useAuth } from "@/contexts/AuthContext";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const router = useRouter();
  const searchRef = useRef<HTMLDivElement>(null);
  const { getCartCount } = useCart();
  const { getFavoritesCount } = useFavorites();
  const { isAuthenticated } = useAuth();

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    setShowSuggestions(value.length > 0);
  };

  const handleInputFocus = () => {
    if (searchQuery.length > 0) {
      setShowSuggestions(true);
    }
  };

  const handleUserButtonClick = () => {
    if (isAuthenticated) {
      router.push("/settings");
    } else {
      router.push("/auth/login");
    }
  };

  // Cerrar sugerencias al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

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
              width={200}
              height={36}
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
                suggestions={searchSuggestions}
                onSelect={handleSuggestionSelect}
                onClose={() => setShowSuggestions(false)}
              />
            )}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex justify-start items-center gap-6">
            <Button variant="primary" size="lg" shape="pill" href="/build-pc">
              <ComputerDesktopIcon className="w-5 h-5" />
              <span className="text-sm xl:text-base font-bold">Arma tu PC</span>
            </Button>
            <div className="flex justify-start items-center gap-4">
              <div className="relative">
                <Button
                  variant="primary"
                  size="lg"
                  shape="circle"
                  href="/settings/favorites"
                >
                  <HeartIcon className="w-6 h-6" />
                </Button>
                {getFavoritesCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {getFavoritesCount() > 99 ? "99+" : getFavoritesCount()}
                  </span>
                )}
              </div>
              <div className="relative">
                <Button variant="primary" size="lg" shape="circle" href="/cart">
                  <ShoppingCartIcon className="w-6 h-6" />
                </Button>
                {getCartCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {getCartCount() > 99 ? "99+" : getCartCount()}
                  </span>
                )}
              </div>
              <Button
                variant="primary"
                size="lg"
                shape="circle"
                onClick={handleUserButtonClick}
              >
                <Cog6ToothIcon className="w-6 h-6" />
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="primary"
            size="lg"
            shape="circle"
            className="lg:hidden"
          >
            <Bars3Icon className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </header>
  );
}
