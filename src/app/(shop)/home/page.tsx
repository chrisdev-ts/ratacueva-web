import HeroSection from "@/components/templates/landing/home/hero-section"
import ProductSection from "@/components/templates/landing/home/product-section"
import FeaturedBanner from "@/components/templates/landing/home/featured-banner"
import CommunitySection from "@/components/templates/landing/home/community-section"
import FaqSection from "@/components/templates/landing/home/faq-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* Contenedor principal con mejor aprovechamiento del ancho */}
      <div className="w-full">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <ProductSection title="Ofertas y nuevos lanzamientos" products={sampleProducts} />
          <FeaturedBanner />
          <ProductSection title="Videojuegos" products={sampleProducts} showViewAll={true} />
          <ProductSection title="Componentes" products={sampleProducts} showViewAll={true} />
          <ProductSection title="Computadoras" products={sampleProducts} showViewAll={true} />
          <ProductSection title="Consolas" products={sampleProducts} showViewAll={true} />
          <ProductSection title="Workstations" products={sampleProducts} showViewAll={true} />
          <ProductSection title="Accesorios" products={sampleProducts} showViewAll={true} />
          <CommunitySection />
          <FaqSection />
        </div>
      </div>
    </>
  )
}

// Sample data for products
const sampleProducts = [
  {
    id: 1,
    name: 'Monitor Samsung 47"',
    rating: 4.8,
    reviews: 740,
    price: 2449,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    name: "Teclado Mecánico RGB",
    rating: 4.9,
    reviews: 1240,
    price: 899,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    name: "Mouse Gaming Pro",
    rating: 4.7,
    reviews: 890,
    price: 599,
    image: "/placeholder.svg?height=200&width=200",
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
