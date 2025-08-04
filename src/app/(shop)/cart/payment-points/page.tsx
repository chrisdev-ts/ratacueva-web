"use client"

import Link from "next/link"
import { DocumentDuplicateIcon, CheckIcon, ShoppingBagIcon, ClipboardDocumentListIcon } from "@heroicons/react/24/outline"
import { PageLayout } from "@/components/templates/PageLayout"
import Button from "@/components/atoms/Button"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Body, Subheading, Heading } from "@/components/atoms/Typography"

export default function PaymentPointsPage() {
  const [copied, setCopied] = useState(false)
  const router = useRouter()

  // Datos del pago (en una app real vendrían de la API)
  const paymentData = {
    barcode: "15468787610364131874916134",
    paymentType: "Servicios de la ecommerce",
    paymentCode: "4658116ASF",
    amount: "$1,450"
  }

  const handleCopyBarcode = async () => {
    try {
      await navigator.clipboard.writeText(paymentData.barcode)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Error al copiar:", err)
    }
  }

  return (
    <PageLayout>
      <div className="px-4 lg:px-60 py-8 flex flex-col justify-center items-center gap-8">
        <div className="w-full flex flex-col justify-start items-center gap-12">
          {/* Título principal */}
          <Heading className="text-center text-white">
            Paga en un punto de pago para <br />
            asegurar tu stock
          </Heading>
          
          <div className="w-full flex flex-col justify-start items-start gap-8">
            {/* Card principal de pago */}
            <div className="w-full p-6 relative bg-dark rounded-lg flex justify-end items-end gap-6">
              <div className="flex-1 flex flex-col justify-start items-start gap-6">
                {/* Instrucciones */}
                <Body className="w-full text-center text-emerald-400 text-xl font-bold">
                  Muestra el código de barras al pagar o menciona estos datos
                </Body>
                
                {/* Código de barras */}
                <div className="w-full flex flex-col justify-start items-start gap-2">
                  <div className="w-full flex justify-start items-center gap-6">
                    <div className="w-full h-36 bg-white rounded-lg flex items-center justify-center">
                      {/* Simulación de código de barras */}
                      <div className="flex gap-1">
                        {Array.from({ length: 30 }).map((_, i) => (
                          <div
                            key={i}
                            className="bg-black"
                            style={{
                              width: `${Math.random() * 4 + 1}px`,
                              height: "120px"
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <Body className="w-full text-center text-white select-all">
                    {paymentData.barcode}
                  </Body>
                </div>
                
                {/* Tipo de pago */}
                <div className="flex flex-col justify-start items-start gap-2">
                  <Subheading className="text-white">
                    Tipo de pago
                  </Subheading>
                  <Body className="text-white">
                    {paymentData.paymentType}
                  </Body>
                </div>
                
                {/* Código de pago */}
                <div className="flex flex-col justify-start items-start gap-2">
                  <Subheading className="text-white">
                    Código de pago
                  </Subheading>
                  <Body className="text-white select-all">
                    {paymentData.paymentCode}
                  </Body>
                </div>
                
                {/* Monto */}
                <div className="flex flex-col justify-start items-start gap-2">
                  <Subheading className="text-white">
                    Monto
                  </Subheading>
                  <Body className="text-white">
                    {paymentData.amount}
                  </Body>
                </div>
              </div>
              
              {/* Botón de copiar */}
              <button
                onClick={handleCopyBarcode}
                className="absolute right-6 bottom-6 h-11 min-h-11 p-2.5 rounded-[99px] border border-cyan-400 flex justify-center items-center gap-3 hover:bg-cyan-400/10 transition-colors"
                title="Copiar código de barras"
              >
                <DocumentDuplicateIcon className="w-6 h-6 text-cyan-400" />
              </button>
              
              {/* Mensaje de copiado */}
              {copied && (
                <div className="absolute right-6 bottom-20 bg-emerald-500 text-white px-3 py-1 rounded text-sm">
                  ¡Copiado!
                </div>
              )}
            </div>
            
            {/* Botones de acción */}
            <div className="w-full flex flex-col sm:flex-row justify-start items-start gap-6">
              <Button 
                onClick={() => router.push('/cart/success')}
                className="flex-1 w-full h-11 bg-emerald-600 hover:bg-emerald-700 rounded-[99px] px-4 py-2.5"
              >
                <CheckIcon className="w-5 h-5 mr-2" />
                Ya pagué
              </Button>
              <Link href="/products" className="flex-1 w-full">
                <Button className="w-full h-11  px-4 py-2.5">
                  <ShoppingBagIcon className="w-5 h-5 mr-2" />
                  Seguir comprando
                </Button>
              </Link>
              <Link href="/orders" className="flex-1 w-full">
                <Button className="w-full h-11  px-4 py-2.5">
                  <ClipboardDocumentListIcon className="w-5 h-5 mr-2" />
                  Ir a mis compras
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}