import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { Subheading, Body, Caption } from "@/components/atoms/Typography"

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-800">
      <div className="max-w-[1440px] mx-auto px-[80px] py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex justify-start items-center gap-2 mb-6">
              <Image
                className="w-10 h-10"
                src="/images/isotipo.svg"
                alt="RataCueva Logo"
                width={40}
                height={40}
              />
              <div className="text-neutral-400 text-2xl lg:text-3xl font-black font-exo">RataCueva</div>
            </Link>
            <Body className="text-zinc-300 text-base lg:text-lg mb-6 leading-relaxed">
              Tu tienda de confianza para productos gaming y tecnología. Llevamos tu experiencia al siguiente nivel.
            </Body>

            {/* Social Media */}
            <div className="mb-6">
              <Subheading className="text-white mb-4">Síguenos</Subheading>
              <div className="flex gap-3">
                {[
                  { icon: Facebook, href: "#" },
                  { icon: Instagram, href: "#" },
                  { icon: Twitter, href: "#" },
                  { icon: Youtube, href: "#" },
                ].map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-primary hover:bg-primary/80 transition-colors rounded-full flex justify-center items-center"
                  >
                    <social.icon className="w-5 h-5 text-white" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <Subheading className="text-white mb-6">Navegación</Subheading>
            <div className="space-y-3">
              {[
                "Inicio",
                "Ofertas",
                "Videojuegos",
                "Componentes",
                "Computadoras",
                "Consolas",
                "Workstations",
                "Accesorios",
              ].map((item, index) => (
                <Link
                  key={index}
                  href="#"
                  className="block text-zinc-300 hover:text-cyan-400 transition-colors text-base"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Support Column */}
          <div>
            <Subheading className="text-white mb-6">Soporte</Subheading>
            <div className="space-y-3">
              {[
                "Centro de ayuda",
                "Garantías",
                "Devoluciones",
                "Reparaciones",
                "Mantenimiento",
                "Servicio técnico",
                "Preguntas frecuentes",
              ].map((item, index) => (
                <Link
                  key={index}
                  href="#"
                  className="block text-zinc-300 hover:text-cyan-400 transition-colors text-base"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <Subheading className="text-white mb-6">Contacto</Subheading>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <div>
                  <Body className="text-zinc-300 text-base">support@ratacueva.com</Body>
                  <Body className="text-zinc-300 text-base">pedidos@ratacueva.com</Body>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <div>
                  <Body className="text-zinc-300 text-base">+506 2222-3333</Body>
                  <Body className="text-zinc-300 text-base">+506 8888-9999</Body>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <Body className="text-zinc-300 text-base">
                  San José, Costa Rica
                  <br />
                  Centro Comercial Plaza Real
                </Body>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <Caption className="text-zinc-400 text-sm lg:text-base text-center lg:text-left">
              © 2025 RataCueva. Todos los derechos reservados.
            </Caption>
            <div className="flex flex-wrap justify-center lg:justify-end gap-6">
              <Link href="#" className="text-zinc-400 hover:text-cyan-400 transition-colors text-sm lg:text-base">
                Términos de servicio
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-cyan-400 transition-colors text-sm lg:text-base">
                Política de privacidad
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-cyan-400 transition-colors text-sm lg:text-base">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
