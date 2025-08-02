"use client"

import Link from "next/link"
import { PageLayout } from "@/components/templates/PageLayout"
import { SettingsBreadcrumb } from "@/components/organisms/SettingsBreadcrumb"
import { Body, Subheading } from "@/components/atoms/Typography"
import Button from "@/components/atoms/Button"
import { useCart } from "@/contexts/CartContext"
import { useState } from "react"
import { ArrowRightIcon } from "@heroicons/react/24/outline"

export default function DeliveryDayPage() {
  const { getCartTotal } = useCart()
  const [selectedDeliveryDay, setSelectedDeliveryDay] = useState("option1")
  const subtotal = getCartTotal()
  const total = subtotal

  return (
    <PageLayout>
      <div className="pt-8 pb-4">
        <SettingsBreadcrumb
          items={[
            { label: "Carrito", href: "/cart" },
            { label: "Envío", href: "/cart/form-page" },
            { label: "Día de entrega" },
          ]}
          title="Elige el día de entrega"
          color="text-white"
          className="mb-8"
        />
        
        <div className="flex flex-col lg:flex-row justify-start items-start gap-8">
          {/* Left Column: Shipping Options */}
          <div className="w-full lg:w-[847px] space-y-8">
            {/* Shipping Options */}
            <div className="p-6 bg-gray rounded-lg space-y-6">
              <Subheading className="text-white">Envío 1</Subheading>
              <div className="h-px bg-white/20"></div>
              
              <div className="space-y-8">
                {/* Option 1 */}
                <div 
                  className="flex items-center gap-4 cursor-pointer"
                  onClick={() => setSelectedDeliveryDay("option1")}
                >
                  <div className={`w-5 h-5 p-2.5 rounded-[99px] border border-cyan-400 flex justify-center items-center ${
                    selectedDeliveryDay === "option1" ? "bg-cyan-400" : ""
                  }`}>
                    {selectedDeliveryDay === "option1" && (
                      <div className="w-3.5 h-3.5 bg-cyan-400 rounded-full" />
                    )}
                  </div>
                  <div className="flex-1 flex justify-between items-center">
                    <Body className="text-white text-xl">Entre el miércoles y el jueves</Body>
                    <Body className="text-emerald-400 text-xl">Gratis</Body>
                  </div>
                </div>
                
                {/* Option 2 */}
                <div 
                  className="flex items-center gap-4 cursor-pointer"
                  onClick={() => setSelectedDeliveryDay("option2")}
                >
                  <div className={`w-5 h-5 p-2.5 rounded-[99px] border border-cyan-400 flex justify-center items-center ${
                    selectedDeliveryDay === "option2" ? "bg-cyan-400" : ""
                  }`}>
                    {selectedDeliveryDay === "option2" && (
                      <div className="w-3.5 h-3.5 bg-cyan-400 rounded-full" />
                    )}
                  </div>
                  <div className="flex-1 flex justify-between items-center">
                    <Body className="text-white text-xl">Entre el 3 y el 5 de julio, en dos semanas</Body>
                    <Body className="text-emerald-400 text-xl">Gratis</Body>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Continue Button */}
            <div className="flex justify-end">
              <Link href="/cart/payment-card-options">
                <Button className="bg-pink-600 hover:bg-pink-700">
                  Continuar
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Right Column: Purchase Summary */}
          <div className="flex-1 w-full lg:w-auto">
            <div className="p-6 bg-gray rounded-lg space-y-6">
              <Subheading className="text-white">Resumen de la compra</Subheading>
              <div className="h-px bg-white/20"></div>
              <div className="flex justify-between items-center">
                <Body className="text-white text-xl">Producto</Body>
                <Body className="text-white text-xl">₡{subtotal.toLocaleString()}</Body>
              </div>
              <div className="h-px bg-white/20"></div>
              <div className="flex justify-between items-center">
                <Body className="text-white text-xl">Total</Body>
                <Subheading className="text-white text-xl">₡{total.toLocaleString()}</Subheading>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}