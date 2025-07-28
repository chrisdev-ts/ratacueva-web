import { Subheading, Body } from "@/components/atoms/Typography"

export default function FeaturedBanner() {
  return (
    <section className="py-8 lg:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12">
        {/* Main Featured Item */}
        <div className="relative h-[300px] lg:h-[500px] bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-lg overflow-hidden group cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <Subheading className="text-white mb-2">Oferta Especial</Subheading>
            <Body className="text-zinc-300 text-lg mb-4">Hasta 50% de descuento en componentes</Body>
            <button className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-lg transition-colors">
              Ver ofertas
            </button>
          </div>
        </div>

        {/* Secondary Items Grid */}
        <div className="grid grid-cols-2 gap-4 lg:gap-6">
          {[
            { title: "Nuevos Lanzamientos", subtitle: "Lo último en gaming" },
            { title: "Componentes", subtitle: "Arma tu setup ideal" },
            { title: "Periféricos", subtitle: "Mejora tu experiencia" },
            { title: "Consolas", subtitle: "Gaming para todos" },
          ].map((item, index) => (
            <div
              key={index}
              className="relative h-[140px] lg:h-[240px] bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-lg overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3">
                <Subheading className="text-white text-sm lg:text-lg mb-1">{item.title}</Subheading>
                <Body className="text-zinc-300 text-xs lg:text-sm">{item.subtitle}</Body>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
