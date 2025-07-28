import HeroSection from "@/components/features/landing/home/hero-section"
import ProductSection from "@/components/features/landing/home/product-section"
import FeaturedBanner from "@/components/features/landing/home/featured-banner"
import CommunitySection from "@/components/features/landing/home/community-section"
import FaqSection from "@/components/features/landing/home/faq-section"

// Productos destacados con ofertas y nuevos lanzamientos
const featuredProducts = [
  {
    id: 1,
    name: 'Monitor Samsung 47"',
    rating: 4.8,
    reviews: 740,
    price: 2449,
    originalPrice: 2899,
    discount: 15,
    image: "/placeholder.svg?height=200&width=200",
    badge: "Oferta",
  },
  {
    id: 2,
    name: "Teclado Mecánico RGB",
    rating: 4.9,
    reviews: 1240,
    price: 899,
    image: "/placeholder.svg?height=200&width=200",
    badge: "Nuevo",
  },
  {
    id: 3,
    name: "Mouse Gaming Pro",
    rating: 4.7,
    reviews: 890,
    price: 599,
    originalPrice: 799,
    discount: 25,
    image: "/placeholder.svg?height=200&width=200",
    badge: "Oferta",
  },
  {
    id: 4,
    name: "Auriculares Gaming",
    rating: 4.6,
    reviews: 650,
    price: 1299,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 5,
    name: "Tarjeta Gráfica RTX",
    rating: 4.9,
    reviews: 2100,
    price: 15999,
    image: "/placeholder.svg?height=200&width=200",
    badge: "Popular",
  },
  {
    id: 6,
    name: "Procesador Intel i9",
    rating: 4.8,
    reviews: 1560,
    price: 12999,
    image: "/placeholder.svg?height=200&width=200",
  },
]

// Productos de gaming y consolas
const gamingProducts = [
  {
    id: 7,
    name: "PlayStation 5",
    rating: 4.9,
    reviews: 3200,
    price: 18999,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 8,
    name: "Xbox Series X",
    rating: 4.8,
    reviews: 2800,
    price: 17999,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 9,
    name: "Nintendo Switch OLED",
    rating: 4.7,
    reviews: 2100,
    price: 12999,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 10,
    name: "Steam Deck",
    rating: 4.6,
    reviews: 1500,
    price: 15999,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 11,
    name: "Control DualSense",
    rating: 4.7,
    reviews: 890,
    price: 2499,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 12,
    name: "Volante Racing",
    rating: 4.5,
    reviews: 450,
    price: 8999,
    image: "/placeholder.svg?height=200&width=200",
  },
]

// Componentes de PC
const componentProducts = [
  {
    id: 13,
    name: "Motherboard ASUS ROG",
    rating: 4.8,
    reviews: 890,
    price: 8999,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 14,
    name: "Fuente 850W Modular",
    rating: 4.7,
    reviews: 1200,
    price: 4599,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 15,
    name: "Cooler CPU Líquido",
    rating: 4.9,
    reviews: 750,
    price: 3999,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 16,
    name: "Case Gaming RGB",
    rating: 4.6,
    reviews: 650,
    price: 2999,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 17,
    name: "SSD NVMe 1TB",
    rating: 4.8,
    reviews: 1120,
    price: 3499,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 18,
    name: "Memoria RAM 32GB",
    rating: 4.7,
    reviews: 980,
    price: 4999,
    image: "/placeholder.svg?height=200&width=200",
  },
]

// Computadoras completas
const computerProducts = [
  {
    id: 19,
    name: "PC Gaming RTX 4070",
    rating: 4.9,
    reviews: 340,
    price: 45999,
    image: "/placeholder.svg?height=200&width=200",
    badge: "Armada",
  },
  {
    id: 20,
    name: "PC Workstation Pro",
    rating: 4.8,
    reviews: 180,
    price: 65999,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 21,
    name: "PC Gaming Básica",
    rating: 4.6,
    reviews: 520,
    price: 25999,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 22,
    name: "PC Streaming Setup",
    rating: 4.7,
    reviews: 290,
    price: 38999,
    image: "/placeholder.svg?height=200&width=200",
  },
]

// Accesorios gaming
const accessoryProducts = [
  {
    id: 23,
    name: "Webcam 4K",
    rating: 4.5,
    reviews: 420,
    price: 1899,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 24,
    name: "Micrófono USB",
    rating: 4.7,
    reviews: 680,
    price: 2499,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 25,
    name: "Pad Mouse XXL",
    rating: 4.6,
    reviews: 890,
    price: 599,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 26,
    name: "Hub USB-C",
    rating: 4.4,
    reviews: 340,
    price: 1299,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 27,
    name: "Soporte Monitor Dual",
    rating: 4.8,
    reviews: 230,
    price: 1899,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 28,
    name: "Lámpara LED Gaming",
    rating: 4.5,
    reviews: 150,
    price: 899,
    image: "/placeholder.svg?height=200&width=200",
  },
]

export default function Home() {
  return (
    <>
      <HeroSection />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Ofertas y nuevos lanzamientos */}
        <section className="py-8">
          <ProductSection title="Ofertas y nuevos lanzamientos" products={featuredProducts} />
        </section>

        {/* Featured Banner */}
        <section className="py-8">
          <FeaturedBanner />
        </section>

        {/* Videojuegos y Consolas */}
        <section className="py-8">
          <ProductSection title="Videojuegos y Consolas" products={gamingProducts} showViewAll={true} />
        </section>

        {/* Componentes de PC */}
        <section className="py-8">
          <ProductSection title="Componentes de PC" products={componentProducts} showViewAll={true} />
        </section>

        {/* Computadoras completas */}
        <section className="py-8">
          <ProductSection title="Computadoras Gaming" products={computerProducts} showViewAll={true} />
        </section>

        {/* Workstations - usando productos de computadoras */}
        <section className="py-8">
          <ProductSection
            title="Workstations Profesionales"
            products={computerProducts.slice(1, 5)}
            showViewAll={true}
          />
        </section>

        {/* Accesorios Gaming */}
        <section className="py-8">
          <ProductSection title="Accesorios Gaming" products={accessoryProducts} showViewAll={true} />
        </section>

        {/* Community Section */}
        <section className="py-12">
          <CommunitySection />
        </section>

        {/* FAQ Section */}
        <section className="py-12">
          <FaqSection />
        </section>
      </div>
    </>
  )
}
