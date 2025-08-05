"use client"

import { CreditCardIcon, ArrowRightIcon } from "@heroicons/react/24/outline"
import { PageLayout } from "@/components/templates/PageLayout"
import { SettingsBreadcrumb } from "@/components/organisms/SettingsBreadcrumb"
import { Body, Subheading } from "@/components/atoms/Typography"
import Button from "@/components/atoms/Button"
import { useCart } from "@/contexts/CartContext"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function PaymentCardOptionsPage() {
  const { getCartTotal } = useCart()
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("bancoppel")
  const router = useRouter()

  const subtotal = getCartTotal()
  const total = subtotal

  // Datos de métodos de pago
  const paymentMethods = [
    {
      id: "bancoppel",
      type: "single",
      name: "Bancoppel Débito **** 3832",
      icon: "💳"
    },
    {
      id: "saved_cards",
      type: "group",
      options: [
        { id: "azteca", name: "Banco Azteca Débito **** 6295", icon: "💳" },
        { id: "bbva", name: "BBVA Débito **** 6295", icon: "💳" },
        { id: "new_credit", name: "Nueva tarjeta de crédito", icon: "💳" },
        { id: "new_debit", name: "Nueva tarjeta de débito", icon: "💳" }
      ]
    },
    {
      id: "cash",
      type: "single",
      name: "Efectivo en puntos de pago",
      description: "BBVA Bancomer, 7-Eleven, Kiosko, Soriana y otros.",
      icon: "💵"
    }
  ]

  const handlePaymentMethodSelect = (methodId: string) => {
    setSelectedPaymentMethod(methodId)
  }

  const handleContinue = () => {
    // Lógica para continuar con el método de pago seleccionado
    if (selectedPaymentMethod === "cash") {
      // Redirigir a página de puntos de pago
      router.push('/cart/payment-points')
    } else {
      // Procesar pago con tarjeta - ir a mensualidades primero
      router.push('/cart/payment-options')
    }
  }

  return (
    <PageLayout>
      <div className="pt-8 pb-4">
        <SettingsBreadcrumb
          items={[
            { label: "Carrito", href: "/cart" },
            { label: "Envío", href: "/cart/form-page" },
            { label: "Día de entrega", href: "/cart/delivery-day" },
            { label: "Método de pago" },
          ]}
          title="Elige cómo pagar"
          color="text-white"
          className="mb-8"
        />
        
        <div className="flex flex-col lg:flex-row justify-start items-start gap-8">
          {/* Left Column: Payment Methods */}
          <div className="w-full lg:w-[847px] space-y-6">
            {/* Tarjeta guardada principal */}
            <div className="p-6 bg-gray rounded-lg">
              <div 
                className="flex items-center gap-4 cursor-pointer"
                onClick={() => handlePaymentMethodSelect("bancoppel")}
              >
                <div className={`w-5 h-5 p-2.5 rounded-[99px] border border-cyan-400 flex justify-center items-center ${
                  selectedPaymentMethod === "bancoppel" ? "bg-cyan-400" : ""
                }`}>
                  {selectedPaymentMethod === "bancoppel" && (
                    <div className="w-3.5 h-3.5 bg-cyan-400 rounded-full" />
                  )}
                </div>
                <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                  <CreditCardIcon className="w-4 h-4 text-placeholder" />
                </div>
                <Body className="text-white text-xl">Bancoppel Débito **** 3832</Body>
              </div>
            </div>

            {/* Otras tarjetas guardadas */}
            <div className="p-6 bg-gray rounded-lg space-y-6">
              {paymentMethods[1].options.map((option, index) => (
                <div key={option.id}>
                  <div 
                    className="flex items-center gap-4 cursor-pointer"
                    onClick={() => handlePaymentMethodSelect(option.id)}
                  >
                    <div className={`w-5 h-5 p-2.5 rounded-[99px] border border-cyan-400 flex justify-center items-center ${
                      selectedPaymentMethod === option.id ? "bg-cyan-400" : ""
                    }`}>
                      {selectedPaymentMethod === option.id && (
                        <div className="w-3.5 h-3.5 bg-cyan-400 rounded-full" />
                      )}
                    </div>
                    <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                      <CreditCardIcon className="w-4 h-4 text-placeholder" />
                    </div>
                    <Body className="text-white text-xl">{option.name}</Body>
                  </div>
                  {index < paymentMethods[1].options.length - 1 && (
                    <div className="h-px bg-white/20 my-6" />
                  )}
                </div>
              ))}
            </div>

            {/* Efectivo en puntos de pago */}
            <div className="p-6 bg-gray rounded-lg">
              <div 
                className="flex items-center gap-4 cursor-pointer"
                onClick={() => handlePaymentMethodSelect("cash")}
              >
                <div className={`w-5 h-5 p-2.5 rounded-[99px] border border-cyan-400 flex justify-center items-center ${
                  selectedPaymentMethod === "cash" ? "bg-cyan-400" : ""
                }`}>
                  {selectedPaymentMethod === "cash" && (
                    <div className="w-3.5 h-3.5 bg-cyan-400 rounded-full" />
                  )}
                </div>
                <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-lg">
                  💵
                </div>
                <div className="flex flex-col gap-1">
                  <Body className="text-white text-xl">Efectivo en puntos de pago</Body>
                  <Body className="text-white text-sm">BBVA Bancomer, 7-Eleven, Kiosko, Soriana y otros.</Body>
                </div>
              </div>
            </div>

            {/* Continue Button */}
            <div className="flex justify-end">
              <Button 
                onClick={handleContinue}
                className="bg-pink-600 hover:bg-pink-700"
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