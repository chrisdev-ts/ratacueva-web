import Button from "@/components/atoms/Button"
import { Body, Display } from "@/components/atoms/Typography"

export default function HeroSection() {
  return (
    <section className="w-full h-[400px] lg:h-[600px] xl:h-[700px] relative bg-gradient-to-br from-zinc-800 via-zinc-900 to-black">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-cyan-400/20"></div>
      <div className="max-w-[1440px] mx-auto px-[80px] h-full flex items-center">
        <div className="max-w-2xl">
          <Display className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white mb-6">
            El mejor{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">gaming</span> te
            espera
          </Display>
          <Body className="text-lg lg:text-xl text-zinc-300 mb-8">
            Descubre los productos más innovadores para llevar tu experiencia gaming al siguiente nivel
          </Body>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button>
              Explorar productos
            </Button>
            <Button>
              Arma tu PC
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
