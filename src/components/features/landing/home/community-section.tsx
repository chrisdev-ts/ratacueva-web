import Link from "next/link"
import { Facebook, Instagram, Youtube } from "lucide-react"
import { Heading, Body, Subheading } from "@/components/atoms/Typography"

export default function CommunitySection() {
  return (
    <section className="py-12 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
        {/* Left Column - Content */}
        <div className="space-y-6 lg:space-y-8">
          <Heading className="text-white">
            ¿Qué opina la comunidad de RataCueva?
          </Heading>

          <Body className="text-lg lg:text-xl text-white leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Body>

          {/* Social Media Buttons */}
          <div className="flex flex-wrap gap-4 lg:gap-6">
            <Link
              href="#"
              className="h-11 min-h-11 px-4 py-2.5 bg-pink-600 hover:bg-pink-700 transition-colors rounded-[99px] flex justify-center items-center gap-3"
            >
              <Facebook className="w-5 h-5 text-white" />
              <span className="text-white text-base font-bold">Facebook</span>
            </Link>

            <Link
              href="#"
              className="h-11 min-h-11 px-4 py-2.5 bg-pink-600 hover:bg-pink-700 transition-colors rounded-[99px] flex justify-center items-center gap-3"
            >
              <Instagram className="w-5 h-5 text-white" />
              <span className="text-white text-base font-bold">Instagram</span>
            </Link>

            <Link
              href="#"
              className="h-11 min-h-11 px-4 py-2.5 bg-pink-600 hover:bg-pink-700 transition-colors rounded-[99px] flex justify-center items-center gap-3"
            >
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
              <span className="text-white text-base font-bold">TikTok</span>
            </Link>

            <Link
              href="#"
              className="h-11 min-h-11 px-4 py-2.5 bg-pink-600 hover:bg-pink-700 transition-colors rounded-[99px] flex justify-center items-center gap-3"
            >
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span className="text-white text-base font-bold">X</span>
            </Link>

            <Link
              href="#"
              className="h-11 min-h-11 px-4 py-2.5 bg-pink-600 hover:bg-pink-700 transition-colors rounded-[99px] flex justify-center items-center gap-3"
            >
              <Youtube className="w-5 h-5 text-white" />
              <span className="text-white text-base font-bold">YouTube</span>
            </Link>
          </div>
        </div>

        {/* Right Column - Community Cards Grid */}
        <div className="flex gap-6 lg:gap-9">
          {/* First Column */}
          <div className="flex-1 space-y-6 lg:space-y-9">
            <div className="h-56 bg-zinc-800 hover:bg-zinc-750 transition-colors rounded-lg cursor-pointer group">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-pink-600/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-pink-600/30 transition-colors">
                    <Facebook className="w-8 h-8 text-pink-400" />
                  </div>
                  <Subheading className="text-white">Reseñas en Facebook</Subheading>
                  <p className="text-zinc-400 text-sm mt-1">Ver opiniones</p>
                </div>
              </div>
            </div>

            <div className="h-56 bg-zinc-800 hover:bg-zinc-750 transition-colors rounded-lg cursor-pointer group">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-pink-600/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-pink-600/30 transition-colors">
                    <Instagram className="w-8 h-8 text-pink-400" />
                  </div>
                  <Subheading className="text-white">Posts de Instagram</Subheading>
                  <p className="text-zinc-400 text-sm mt-1">Ver galería</p>
                </div>
              </div>
            </div>
          </div>

          {/* Second Column */}
          <div className="flex-1 space-y-6 lg:space-y-9">
            <div className="h-56 bg-zinc-800 hover:bg-zinc-750 transition-colors rounded-lg cursor-pointer group">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-pink-600/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-pink-600/30 transition-colors">
                    <Youtube className="w-8 h-8 text-pink-400" />
                  </div>
                  <Subheading className="text-white">Videos de YouTube</Subheading>
                  <p className="text-zinc-400 text-sm mt-1">Ver canal</p>
                </div>
              </div>
            </div>

            <div className="h-56 bg-zinc-800 hover:bg-zinc-750 transition-colors rounded-lg cursor-pointer group">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-pink-600/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-pink-600/30 transition-colors">
                    <svg className="w-8 h-8 text-pink-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  </div>
                  <Subheading className="text-white">Videos de TikTok</Subheading>
                  <p className="text-zinc-400 text-sm mt-1">Ver perfil</p>
                </div>
              </div>
            </div>

            <div className="h-56 bg-zinc-800 hover:bg-zinc-750 transition-colors rounded-lg cursor-pointer group">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-pink-600/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-pink-600/30 transition-colors">
                    <svg className="w-8 h-8 text-pink-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </div>
                  <Subheading className="text-white">Posts de X</Subheading>
                  <p className="text-zinc-400 text-sm mt-1">Ver tweets</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
