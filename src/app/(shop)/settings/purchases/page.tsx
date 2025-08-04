"use client"

import { useState } from "react"
import Image from "next/image"
import { PageLayout } from "@/components/templates/PageLayout"
import { MagnifyingGlassIcon, EyeIcon, ArrowPathIcon, FunnelIcon } from "@heroicons/react/24/outline"
import Input from "@/components/atoms/Input"
import Button from "@/components/atoms/Button"
import {  Body } from "@/components/atoms/Typography";
import { SettingsBreadcrumb } from "@/components/organisms/SettingsBreadcrumb";

type PurchaseItem = {
  id: number
  status: "Entregado" | "En camino" | "Cancelado"
  deliveryDate: string
  returnPolicy: string
  description: string
  imageUrl: string
}

type PurchaseGroup = {
  date: string
  items: PurchaseItem[]
}

export default function PurchasesPage() {
  const [purchaseGroups] = useState<PurchaseGroup[]>([
    {
      date: "Comprado el 29 de mayo",
      items: [
        {
          id: 1,
          status: "Entregado",
          deliveryDate: "Llegó el 2 de junio",
          returnPolicy: "Puedes devolverlo hasta el miércoles 2 de julio.",
          description:
            "Auriculares Diadema Gamer Soundcore Q30: Cancelación Híbrida De Ruido Activa, Sonido Hi-res, 40h Autonomía, Modos Multifunción, Almohadillas Suaves, Carga Rápida, Color Negro",
          imageUrl: "/placeholder.svg?height=150&width=150",
        },
        {
          id: 2,
          status: "Entregado",
          deliveryDate: "Llegó el 2 de junio",
          returnPolicy: "Puedes devolverlo hasta el miércoles 2 de julio.",
          description:
            "Auriculares Diadema Gamer Soundcore Q30: Cancelación Híbrida De Ruido Activa, Sonido Hi-res, 40h Autonomía, Modos Multifunción, Almohadillas Suaves, Carga Rápida, Color Negro",
          imageUrl: "/placeholder.svg?height=150&width=150",
        },
      ],
    },
    {
      date: "Comprado el 15 de abril",
      items: [
        {
          id: 3,
          status: "En camino",
          deliveryDate: "Llega el 20 de abril",
          returnPolicy: "Puedes cancelar hasta el 19 de abril.",
          description:
            "Teclado Mecánico RGB HyperX Alloy Origins Core: Switches HyperX Red, Diseño Compacto TKL, Iluminación RGB Dinámica, Construcción de Aluminio, Cable Desmontable",
          imageUrl: "/placeholder.svg?height=150&width=150",
        },
      ],
    },
  ])

  return (
    <PageLayout>
      <div className="pt-8 pb-4">
        <SettingsBreadcrumb
          items={[
            { label: "Configuración", href: "/settings" },
            { label: "Compras" },
          ]}
          title="Compras"
          color="text-white"
          className="mb-8"
        />

        <div className="mb-8 flex items-center gap-6">
          <div className="flex-1 relative">
            <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-placeholder z-10" />
            <Input
              type="text"
              placeholder="Buscar productos..."
              className="h-11 pl-12"
              variant="searchbar" // En este que me encontré por accidente también solo era poner "searchbar"
            />
          </div>
          <button className="h-11 min-h-11 rounded-[99px] border border-cyan-400 px-4 py-2.5 font-bold text-cyan-400 hover:bg-cyan-400/10 flex items-center gap-2">
            <FunnelIcon className="w-5 h-5" />
            Todas
          </button>
        </div>
        <div className="space-y-8">
          {purchaseGroups.map((group) => (
            <div key={group.date} className="overflow-hidden rounded-lg bg-gray p-6">
              <Body className="mb-6 text-white font-bold">{group.date}</Body>
              <div className="h-px w-full bg-white" />
              <div className="mt-6 space-y-6">
                {group.items.map((item) => (
                  <div key={item.id} className="flex items-center gap-6">
                    <Image
                      className="h-36 w-36 flex-shrink-0 rounded-md object-cover"
                      src={item.imageUrl || "/placeholder.svg"}
                      alt={item.description}
                      width={150}
                      height={150}
                    />
                    <div className="flex flex-1 items-center gap-12">
                      <div className="flex flex-1 flex-col items-start gap-4">
                        <div className="flex flex-col items-start gap-2">
                          <Body className={`font-bold ${item.status === "Entregado" ? "text-emerald-400" : "text-yellow-400"}`}>{item.status}</Body>
                          <Body className="text-white font-bold">{item.deliveryDate}</Body>
                          <Body className="text-white font-medium">{item.returnPolicy}</Body>
                        </div>
                        <Body className="self-stretch text-white">{item.description}</Body>
                      </div>
                      <div className="flex flex-col items-start gap-6">
                        <Button className="min-w-[160px] "><EyeIcon className="w-5 h-5 mr-2" />Ver compra</Button>
                        <Button className="min-w-[160px] "><ArrowPathIcon className="w-5 h-5 mr-2" />Volver a comprar</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  )
}
