"use client"

import { useState } from "react"
import Link from "next/link"
import { PageLayout } from "@/components/templates/PageLayout"
import { SettingsBreadcrumb } from "@/components/organisms/SettingsBreadcrumb"
import { Body, Subheading, BodySmall } from "@/components/atoms/Typography"
import Button from "@/components/atoms/Button"
import { useCart } from "@/contexts/CartContext"

export default function AddCardPage() {
  const { getCartTotal } = useCart()
  const [cardData, setCardData] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: ""
  })
  
  const subtotal = getCartTotal()
  const shipping = 0
  const total = subtotal + shipping

  const handleInputChange = (field: string, value: string) => {
    setCardData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle card addition
    console.log("Adding card:", cardData)
  }

  const isFormValid = cardData.cardNumber && cardData.cardName && cardData.expiryDate && cardData.cvv

  return (
    <PageLayout>
      <div className="pt-8 pb-4">
        <SettingsBreadcrumb
          items={[
            { label: "Carrito", href: "/cart" },
            { label: "Envío", href: "/shipping" },
            { label: "Nueva Tarjeta" },
          ]}
          title="Ingresa una nueva tarjeta"
          color="text-white"
          className="mb-8"
        />
        
        <div className="flex flex-col lg:flex-row justify-start items-start gap-8">
          {/* Left Column: Card Form */}
          <div className="w-full lg:w-[847px] space-y-8">
            {/* Card Form */}
            <div className="p-6 bg-gray rounded-lg">
              <div className="flex gap-8">
                {/* Form Section */}
                <div className="flex-1 space-y-6">
                  {/* Card Number */}
                  <div className="space-y-4">
                    <BodySmall as="label" htmlFor="cardNumber" className="text-white text-base font-medium block">
                      Número de tarjeta
                    </BodySmall>
                    <input
                      id="cardNumber"
                      type="text"
                      value={cardData.cardNumber}
                      onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                      className="w-full h-11 px-4 py-3 bg-gray rounded-lg border border-neutral-600 text-white focus:outline-none focus:border-cyan-400"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>
                  
                  {/* Cardholder Name */}
                  <div className="space-y-4">
                    <BodySmall as="label" htmlFor="cardName" className="text-white text-base font-medium block">
                      Nombre y apellido
                    </BodySmall>
                    <div className="space-y-1">
                      <input
                        id="cardName"
                        type="text"
                        value={cardData.cardName}
                        onChange={(e) => handleInputChange('cardName', e.target.value)}
                        className="w-full h-11 px-4 py-3 bg-gray rounded-lg border border-neutral-600 text-white focus:outline-none focus:border-cyan-400"
                        placeholder="Juan Pérez"
                      />
                      <BodySmall className="text-white text-xs">Como figura en la tarjeta.</BodySmall>
                    </div>
                  </div>
                  
                  {/* Expiry and CVV */}
                  <div className="flex gap-6">
                    {/* Expiry Date */}
                    <div className="flex-1 space-y-4">
                      <BodySmall as="label" htmlFor="expiryDate" className="text-white text-base font-medium block">
                        Fecha de vencimiento
                      </BodySmall>
                      <div className="space-y-1">
                        <input
                          id="expiryDate"
                          type="text"
                          value={cardData.expiryDate}
                          onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                          className="w-full h-11 px-4 py-3 bg-gray rounded-lg border border-neutral-600 text-white focus:outline-none focus:border-cyan-400"
                          placeholder="MM/AA"
                        />
                        <BodySmall className="text-white text-xs">Mes / Año</BodySmall>
                      </div>
                    </div>
                    
                    {/* CVV */}
                    <div className="flex-1 space-y-4">
                      <BodySmall as="label" htmlFor="cvv" className="text-white text-base font-medium block">
                        Código de seguridad
                      </BodySmall>
                      <div className="space-y-1">
                        <input
                          id="cvv"
                          type="text"
                          value={cardData.cvv}
                          onChange={(e) => handleInputChange('cvv', e.target.value)}
                          className="w-full h-11 px-4 py-3 bg-gray rounded-lg border border-neutral-600 text-white focus:outline-none focus:border-cyan-400"
                          placeholder="123"
                          maxLength={4}
                        />
                        <BodySmall className="text-white text-xs">CVV</BodySmall>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Card Visual */}
                <div className="w-96 h-48 bg-zinc-900 rounded-2xl flex items-center justify-center">
                  <Body className="text-white/50">Vista previa de la tarjeta</Body>
                </div>
              </div>
            </div>
            
            {/* Continue Button */}
            <div className="flex justify-end">
              <Link href="/payment-options">
                <Button 
                  onClick={() => handleSubmit(new Event("submit") as unknown as React.FormEvent<HTMLFormElement>)}
                  className="bg-pink-600 hover:bg-pink-700"
                  disabled={!isFormValid}
                >
                  Continuar
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