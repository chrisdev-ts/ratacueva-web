"use client"

import { PageLayout } from "@/components/templates/PageLayout"
import { SettingsBreadcrumb } from "@/components/organisms/SettingsBreadcrumb"
import { Body, Subheading } from "@/components/atoms/Typography"
import Button from "@/components/atoms/Button"
import { useCart } from "@/contexts/CartContext"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowRightIcon } from "@heroicons/react/24/outline"

export default function CheckoutPage() {    
  const { getCartTotal } = useCart()
  const [selectedDeliveryOption, setSelectedDeliveryOption] = useState("domicilio")
  const router = useRouter()

  const subtotal = getCartTotal()
  const shippingCost = 90 // Mismo costo que en la página original
  const total = subtotal + shippingCost

  const handleContinue = () => {
    router.push('/cart/delivery-day') 
  }

  return (
    <PageLayout>
      <div className="pt-8 pb-4">
        <SettingsBreadcrumb
          items={[
            { label: "Carrito", href: "/cart" },
            { label: "Envío" },
          ]}
          title="Elige la forma de entrega"
          color="text-white"
          className="mb-8"
        />
        
        <div className="flex flex-col lg:flex-row justify-start items-start gap-8">
          {/* Left Column: Delivery Options */}
          <div className="w-full lg:w-[847px] space-y-6">
            {/* Opción 1: Enviar a domicilio */}
            <div 
              className="p-6 bg-gray rounded-lg flex justify-start items-start gap-6 cursor-pointer"
              onClick={() => setSelectedDeliveryOption("domicilio")}
            >
              <div className={`w-5 h-5 p-2.5 rounded-[99px] border border-cyan-400 flex justify-center items-center ${
                selectedDeliveryOption === "domicilio" ? "bg-cyan-400" : ""
              }`}>
                {selectedDeliveryOption === "domicilio" && (
                  <div className="w-3.5 h-3.5 bg-cyan-400 rounded-full" />
                )}
              </div>
              <div className="flex-1 flex flex-col justify-start items-start gap-6">
                <div className="w-full flex justify-between items-center">
                  <Subheading className="text-white">
                    Enviar a domicilio
                  </Subheading>
                  <Body className="text-emerald-400 text-xl font-medium">
                    Gratis
                  </Body>
                </div>
                <Body className="text-white">
                  Prolongación de la calle 1 Av. 10 y Av. Hortencia 26 - Córdoba Residencial
                </Body>
                <button className="text-cyan-400 text-base font-bold hover:underline">
                  Modificar o elegir otro domicilio
                </button>
              </div>
            </div>

            {/* Opción 2: Retirar en punto de entrega */}
            <div 
              className="p-6 bg-gray rounded-lg flex justify-start items-start gap-6 cursor-pointer"
              onClick={() => setSelectedDeliveryOption("punto")}
            >
              <div className={`w-5 h-5 p-2.5 rounded-[99px] border border-cyan-400 flex justify-center items-center ${
                selectedDeliveryOption === "punto" ? "bg-cyan-400" : ""
              }`}>
                {selectedDeliveryOption === "punto" && (
                  <div className="w-3.5 h-3.5 bg-cyan-400 rounded-full" />
                )}
              </div>
              <div className="flex-1 flex flex-col justify-start items-start gap-6">
                <div className="w-full flex justify-between items-center">
                  <Subheading className="text-white">
                    Retirar en punto de entrega
                  </Subheading>
                  <Body className="text-emerald-400 text-xl font-medium">
                    Gratis
                  </Body>
                </div>
              </div>
            </div>

            {/* Botón Continuar */}
            <div className="flex justify-end">
              <Button 
                onClick={handleContinue}
                className=" px-6 py-3"
              >
                Continuar
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
          
          {/* Right Column: Purchase Summary */}
          <div className="flex-1 w-full lg:w-auto">
            <div className="p-6 bg-gray rounded-lg space-y-6">
              <Subheading className="text-white">Resumen de la compra</Subheading>
              <div className="h-px bg-white/20"></div>
              <div className="flex justify-between items-center">
                <Body className="text-white">Producto</Body>
                <Body className="text-white">₡{subtotal.toLocaleString()}</Body>
              </div>
              <div className="flex justify-between items-center">
                <Body className="text-white">Envío</Body>
                <Body className="text-white">₡{shippingCost.toLocaleString()}</Body>
              </div>
              <div className="h-px bg-white/20"></div>
              <div className="flex justify-between items-center">
                <Body className="text-white">Total</Body>
                <Subheading className="text-white">₡{total.toLocaleString()}</Subheading>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}