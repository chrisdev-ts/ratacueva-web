"use client"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Heading, Subheading, Body } from "@/components/atoms/Typography"

const faqItems = [
  {
    question: "¿Qué es RataCueva?",
    answer: "RataCueva es una tienda especializada en productos de tecnología y gaming.",
  },
  {
    question: "¿Cómo puedo realizar un pedido?",
    answer: "Puedes realizar un pedido a través de nuestra página web o visitando nuestra tienda física.",
  },
  {
    question: "¿Cuáles son los métodos de pago disponibles?",
    answer: "Aceptamos tarjetas de crédito/débito, transferencias bancarias y efectivo en tienda.",
  },
  {
    question: "¿Cuánto tiempo tarda en llegar mi pedido?",
    answer: "El tiempo de entrega depende de tu ubicación, generalmente entre 3-5 días hábiles.",
  },
  {
    question: "¿Tienen garantía los productos?",
    answer: "Sí, todos nuestros productos cuentan con garantía del fabricante.",
  },
  {
    question: "¿Puedo devolver un producto?",
    answer: "Sí, tienes hasta 14 días para devolver un producto en su empaque original.",
  },
]

const paymentMethods = ["Visa", "Mastercard", "American Express", "PayPal", "Transferencia bancaria", "Efectivo"]
const cashDepositLocations = ["Banco Nacional", "Banco Popular", "Banco BCR"]
const shippingCompanies = ["DHL", "FedEx", "UPS", "Correos", "Mensajería local"]

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="py-12 lg:py-16">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
        {/* Left Column - Payment & Shipping Info */}
        <div className="space-y-8 lg:space-y-12">
          <div>
            <Heading className="text-white mb-4 lg:mb-6">Preguntas frecuentes</Heading>
            <Body className="text-lg text-zinc-300">
              Encuentra respuestas a las preguntas más comunes sobre nuestros productos y servicios.
            </Body>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

          <div>
            <Subheading className="text-white mb-4 lg:mb-6">Métodos de pago disponibles</Subheading>
            <Body className="text-zinc-300 mb-6">
              Ofrecemos múltiples opciones para que puedas pagar de la forma que prefieras.
            </Body>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
              {paymentMethods.map((method, index) => (
                <div
                  key={index}
                  className="px-4 py-3 bg-zinc-800 hover:bg-zinc-750 transition-colors rounded-lg text-center text-white text-sm lg:text-base"
                >
                  {method}
                </div>
              ))}
            </div>
          </div>

          <div>
            <Subheading className="text-white mb-4 lg:mb-6">Depósitos en efectivo</Subheading>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-4">
              {cashDepositLocations.map((location, index) => (
                <div
                  key={index}
                  className="px-4 py-3 bg-zinc-800 hover:bg-zinc-750 transition-colors rounded-lg text-center text-white text-sm lg:text-base"
                >
                  {location}
                </div>
              ))}
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

          <div>
            <Subheading className="text-white mb-4 lg:mb-6">Empresas de envío</Subheading>
            <Body className="text-zinc-300 mb-6">
              Tu paquete en las mejores manos, trabajamos con las empresas más confiables.
            </Body>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
              {shippingCompanies.map((company, index) => (
                <div
                  key={index}
                  className="px-4 py-3 bg-zinc-800 hover:bg-zinc-750 transition-colors rounded-lg text-center text-white text-sm lg:text-base"
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - FAQ Items */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-zinc-800 hover:bg-zinc-750 transition-colors rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-white text-base lg:text-lg font-medium pr-4">{item.question}</span>
                {activeIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-zinc-400 flex-shrink-0" />
                )}
              </button>
              {activeIndex === index && (
                <div className="px-6 pb-4">
                  <Body className="text-zinc-300 text-sm lg:text-base leading-relaxed">{item.answer}</Body>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
