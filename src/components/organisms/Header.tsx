import { Search, ShoppingCart, User, Heart, Menu } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
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
          <div className="flex-1 max-w-2xl mx-4 lg:mx-8">
            <div className="min-h-11 px-4 py-2.5 rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex justify-start items-center gap-3 bg-zinc-800/50">
              <Search className="w-5 h-5 lg:w-6 lg:h-6 text-zinc-300 flex-shrink-0" />
              <input
                type="text"
                placeholder="Buscar productos..."
                className="flex-1 bg-transparent text-zinc-300 text-sm lg:text-base font-normal outline-none placeholder:text-zinc-500"
              />
            </div>
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
                href="/login"
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
