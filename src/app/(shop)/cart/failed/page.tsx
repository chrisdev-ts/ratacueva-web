"use client"

import Link from "next/link"
import { PageLayout } from "@/components/templates/PageLayout"
import Button from "@/components/atoms/Button"
import { Body, Heading } from "@/components/atoms/Typography"

export default function FailedPurchasePage() {
  return (
    <PageLayout>
      <div className="px-4 lg:px-60 py-8 flex flex-col justify-center items-center gap-8">
        <div className="w-full flex flex-col justify-start items-center gap-12">
          {/* Título principal */}
          <Heading className="text-white">
            Compra fallida
          </Heading>
          
          <div className="w-full flex flex-col justify-start items-start gap-8">
            {/* Card de error */}
            <div className="w-full p-6 bg-dark rounded-lg flex flex-col justify-center items-center gap-4">
              <Heading className="text-white text-center">
                No se pudo completar la transacción
              </Heading>
              <Body className="text-white text-center">
                Por favor, vuelve a elegir cómo pagar tu compra
              </Body>
            </div>
            
            {/* Botones de acción */}
            <div className="w-full flex flex-col sm:flex-row justify-start items-start gap-6">
              <Link href="/products" className="flex-1 w-full">
                <Button className="w-full h-11  px-4 py-2.5">
                  Seguir comprando
                </Button>
              </Link>
              <Link href="/checkout" className="flex-1 w-full">
                <Button className="w-full h-11  px-4 py-2.5">
                  Intentar de nuevo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}