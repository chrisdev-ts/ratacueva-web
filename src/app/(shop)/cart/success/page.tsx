"use client"

import Image from "next/image"
import Link from "next/link"
import { PageLayout } from "@/components/templates/PageLayout"
import Button from "@/components/atoms/Button"
import { useCart } from "@/contexts/CartContext"
import { useEffect } from "react"
import { ShoppingBagIcon, ClipboardDocumentListIcon } from "@heroicons/react/24/outline"
import { Body, Subheading, Heading } from "@/components/atoms/Typography"

export default function SuccessfulPurchasePage() {
  const { clearCart } = useCart()

  useEffect(() => {
    // Clear the cart after successful purchase
    clearCart()
  }, []) // Empty dependency array - only run once on mount

  // Simulamos datos de la compra (en una app real vendrían de la API)
  const purchaseData = {
    deliveryDate: "25 de abril",
    product: {
      name: "Monitor Samsung 47\"",
      description: "Ofrece una buena calidad de imagen y sonido. Su funcionamiento es excelente y es recomendada por su relación calidad precio. Además, su diseño es atractivo y cumple con las expectativas de un Smart TV 4K.",
      image: "/placeholder.svg"
    }
  }

  return (
    <PageLayout>
      <div className="px-4 lg:px-60 py-8 flex flex-col justify-center items-center gap-8">
        <div className="w-full flex flex-col justify-start items-center gap-12">
          {/* Título principal */}
          <Heading className="text-white">
            Compra exitosa
          </Heading>
          
          <div className="w-full flex flex-col justify-start items-start gap-8">
            {/* Card del producto comprado */}
            <div className="w-full p-6 bg-zinc-800 rounded-lg flex justify-start items-center gap-6">
              <div className="flex-1 flex flex-col justify-start items-start gap-4">
                {/* Fecha de llegada */}
                <div className="w-full flex justify-start items-center gap-2.5">
                  <Body className="text-emerald-400 text-xl font-bold">
                    Llega el {purchaseData.deliveryDate}
                  </Body>
                </div>
                
                {/* Información del producto */}
                <div className="w-full flex justify-start items-center gap-6">
                  <Image
                    className="w-36 h-36 object-cover rounded-lg"
                    src={purchaseData.product.image}
                    alt={purchaseData.product.name}
                    width={144}
                    height={144}
                  />
                  <div className="flex-1 flex flex-col justify-start items-start gap-2">
                    <Subheading className="text-white">
                      {purchaseData.product.name}
                    </Subheading>
                    <Body className="text-white">
                      {purchaseData.product.description}
                    </Body>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Botones de acción */}
            <div className="w-full flex flex-col sm:flex-row justify-start items-start gap-6">
              <Link href="/" className="flex-1 w-full">
                <Button className="w-full h-11  px-4 py-2.5">
                  <ShoppingBagIcon className="w-5 h-5 mr-2" />
                  Seguir comprando
                </Button>
              </Link>
              <Link href="/settings/purchases" className="flex-1 w-full">
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