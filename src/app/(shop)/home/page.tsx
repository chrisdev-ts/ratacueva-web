import { HeroSection, DynamicProductSections, FeaturedBanner, CommunitySection, FaqSection } from "@/components/features/home/organisms"
import { PageLayout } from "@/components/templates/PageLayout"

export default function Home() {
  return (
    <>
      <HeroSection />

      <PageLayout>
        {/* Featured Banner */}
        <section className="py-8">
          <FeaturedBanner />
        </section>

        {/* Dynamic Product Sections by Category */}
        <DynamicProductSections />

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
