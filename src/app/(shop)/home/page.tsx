import { HeroSection, ProductSection, FeaturedBanner, CommunitySection, FaqSection } from "@/components/features/home/organisms"
import { PageLayout } from "@/components/templates/PageLayout"
import { 
  featuredProducts, 
  gamingProducts, 
  componentProducts, 
  computerProducts, 
  accessoryProducts 
} from "@/lib"

export default function Home() {
  return (
    <>
      <HeroSection />

      <PageLayout>
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
      </PageLayout>
    </>
  )
}
