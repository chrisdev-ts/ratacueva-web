export default function HeroSection() {
  return (
    <section className="w-full h-[400px] lg:h-[600px] xl:h-[700px] relative bg-gradient-to-br from-zinc-800 via-zinc-900 to-black">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-cyan-400/20"></div>
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white mb-6">
            El mejor{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">gaming</span> te
            espera
          </h1>
          <p className="text-lg lg:text-xl text-zinc-300 mb-8">
            Descubre los productos más innovadores para llevar tu experiencia gaming al siguiente nivel
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-lg transition-colors">
              Explorar productos
            </button>
            <button className="px-8 py-4 border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-bold rounded-lg transition-colors">
              Arma tu PC
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
