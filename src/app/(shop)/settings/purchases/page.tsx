"use client"

import { useState } from "react"
import Image from "next/image"
import { PageLayout } from "@/components/templates/PageLayout"
import { Search, ChevronDown, Eye, RotateCcw } from "lucide-react"
import { Input } from "@/components/ui/input"   
import { Button } from "@/components/ui/button"
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
          <div className="flex-1">
            <div className="flex h-11 items-center gap-3 rounded-2xl border border-zinc-300 px-4 py-2.5">
              <Search className="h-6 w-6 text-zinc-300" />
              <Input
                type="text"
                placeholder="Buscar productos..."
                className="flex-1 border-none bg-transparent p-0 text-base font-normal text-zinc-300 placeholder:text-zinc-300 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
          </div>
          <Button className="h-11 min-h-11 rounded-[99px] border border-cyan-400 px-4 py-2.5 font-bold text-cyan-400 hover:bg-cyan-400/10">
            Todas
            <ChevronDown className="ml-3 h-6 w-6" />
          </Button>
        </div>
        <div className="space-y-8">
          {purchaseGroups.map((group) => (
            <div key={group.date} className="overflow-hidden rounded-lg bg-zinc-800 p-6">
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
                        <Button className="rounded-[99px] min-w-[160px] bg-pink-600 hover:bg-pink-700 transition-colors text-white"><Eye className="w-5 h-5" />Ver compra</Button>
                        <Button className="rounded-[99px] min-w-[160px] bg-pink-600 hover:bg-pink-700 transition-colors text-white"><RotateCcw className="w-5 h-5" />Volver a comprar</Button>
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
