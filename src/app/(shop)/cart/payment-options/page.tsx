"use client"

import Link from "next/link"
import { PageLayout } from "@/components/templates/PageLayout"
import { SettingsBreadcrumb } from "@/components/organisms/SettingsBreadcrumb"
import { Body, Subheading, BodySmall } from "@/components/atoms/Typography"
import Button from "@/components/atoms/Button"
import { useCart } from "@/contexts/CartContext"
import { useState } from "react"
import { ArrowRightIcon } from "@heroicons/react/24/outline"

export default function PaymentOptionsPage() {
  const { getCartTotal } = useCart()
  const [selectedPlan, setSelectedPlan] = useState("plan1")
  const subtotal = getCartTotal()
  const shipping = 0
  const total = subtotal + shipping

  return (
    <PageLayout>
      <div className="pt-8 pb-4">
        <SettingsBreadcrumb
          items={[
            { label: "Carrito", href: "/cart" },
            { label: "Envío", href: "/cart/form-page" },
            { label: "Día de entrega", href: "/cart/delivery-day" },
            { label: "Método de pago", href: "/cart/payment-card-options" },
            { label: "Mensualidades" },
          ]}
          title="Elige las mensualidades"
          color="text-white"
          className="mb-8"
        />
        
        <div className="flex flex-col lg:flex-row justify-start items-start gap-8">
          {/* Left Column: Payment Options */}
          <div className="w-full lg:w-[847px] space-y-8">
            {/* Selected Card */}
            <div className="p-6 bg-gray rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-7 h-7 bg-white rounded-full" />
                <Body className="text-white text-xl">Bancoppel Débito **** 3832</Body>
              </div>
            </div>
            
            {/* Payment Plans */}
            <div className="p-6 bg-gray rounded-lg space-y-6">
              {/* Plan 1 */}
              <div 
                className="flex items-center gap-4 cursor-pointer"
                onClick={() => setSelectedPlan("plan1")}
              >
                <div className={`w-5 h-5 p-2.5 rounded-[99px] border border-cyan-400 flex justify-center items-center ${
                  selectedPlan === "plan1" ? "bg-cyan-400" : ""
                }`}>
                  {selectedPlan === "plan1" && (
                    <div className="w-3.5 h-3.5 bg-cyan-400 rounded-full" />
                  )}
                </div>
                <div className="flex-1 flex justify-between items-center">
                  <Body className="text-white text-xl">1 x ₡150</Body>
                  <BodySmall className="text-white text-xl">MSI</BodySmall>
                </div>
              </div>
              
              <div className="h-px bg-white/20"></div>
              
              {/* Plan 2 */}
              <div 
                className="flex items-center gap-4 cursor-pointer"
                onClick={() => setSelectedPlan("plan2")}
              >
                <div className={`w-5 h-5 p-2.5 rounded-[99px] border border-cyan-400 flex justify-center items-center ${
                  selectedPlan === "plan2" ? "bg-cyan-400" : ""
                }`}>
                  {selectedPlan === "plan2" && (
                    <div className="w-3.5 h-3.5 bg-cyan-400 rounded-full" />
                  )}
                </div>
                <div className="flex-1 flex justify-between items-center">
                  <Body className="text-white text-xl">2 x ₡300</Body>
                  <BodySmall className="text-white text-xl">MSI</BodySmall>
                </div>
              </div>
              
              <div className="h-px bg-white/20"></div>
              
              {/* Plan 3 */}
              <div 
                className="flex items-center gap-4 cursor-pointer"
                onClick={() => setSelectedPlan("plan3")}
              >
                <div className={`w-5 h-5 p-2.5 rounded-[99px] border border-cyan-400 flex justify-center items-center ${
                  selectedPlan === "plan3" ? "bg-cyan-400" : ""
                }`}>
                  {selectedPlan === "plan3" && (
                    <div className="w-3.5 h-3.5 bg-cyan-400 rounded-full" />
                  )}
                </div>
                <div className="flex-1 flex justify-between items-center">
                  <Body className="text-white text-xl">3 x ₡600</Body>
                  <BodySmall className="text-white text-xl">MSI</BodySmall>
                </div>
              </div>
              
              <div className="h-px bg-white/20"></div>
              
              {/* Plan 4 */}
              <div 
                className="flex items-center gap-4 cursor-pointer"
                onClick={() => setSelectedPlan("plan4")}
              >
                <div className={`w-5 h-5 p-2.5 rounded-[99px] border border-cyan-400 flex justify-center items-center ${
                  selectedPlan === "plan4" ? "bg-cyan-400" : ""
                }`}>
                  {selectedPlan === "plan4" && (
                    <div className="w-3.5 h-3.5 bg-cyan-400 rounded-full" />
                  )}
                </div>
                <div className="flex-1 flex justify-between items-center">
                  <Body className="text-white text-xl">4 x ₡1200</Body>
                  <BodySmall className="text-white text-xl">MSI</BodySmall>
                </div>
              </div>
            </div>
            
            {/* Continue Button */}
            <div className="flex justify-end">
              <Link href="/cart/payment-security">
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
              <div className="flex justify-between items-center">
                <Body className="text-white text-xl">Envío</Body>
                <Body className="text-emerald-400 text-xl">Gratis</Body>
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