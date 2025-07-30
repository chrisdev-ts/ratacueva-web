"use client"

import Image from "next/image"
import Link from "next/link"
import { Receipt, Heart, ClipboardList, CreditCard, MapPin, Lock, Bell } from "lucide-react"
import { PageLayout } from "@/components/templates/PageLayout"

export default function SettingsPage() {
  const row1 = [
    {
      icon: Receipt,
      title: "Historial de compras",
      description: "Lista de todas las compras que has realizado.",
      href: "/settings/purchases",
    },
    {
      icon: Heart,
      title: "Favoritos",
      description: "Lista de productos que has marcado como favoritos.",
      href: "/settings/favorites",
    },
  ]
  const row2 = [
    {
      icon: ClipboardList,
      title: "Información personal",
      description: "Información de tu identificación oficial y tu actividad fiscal.",
      href: "/settings/personal-info",
    },
    {
      icon: CreditCard,
      title: "Tarjetas",
      description: "Tarjetas guardadas en la cuenta.",
      href: "/settings/cards",
    },
    {
      icon: MapPin,
      title: "Direcciones",
      description: "Direcciones guardadas en tu cuenta.",
      href: "/settings/addresses",
    },
  ]
  const row3 = [
    {
      icon: Lock,
      title: "Privacidad",
      description: "Preferencias y control sobre el uso de tus datos.",
      href: "/settings/privacy-policy",
    },
    {
      icon: Bell,
      title: "Notificaciones",
      description: "Elige qué tipo de información quieres recibir.",
      href: "/settings/notifications",
    },
  ]

  return (
    <PageLayout>
      <div className="self-stretch flex-1 pt-12 pb-8 flex flex-col justify-start items-center gap-8">
        <div className="self-stretch flex flex-col sm:flex-row justify-start items-center gap-8">
          <div className="w-20 h-20 p-2.5 bg-gray rounded-[99px] flex items-center justify-center overflow-hidden">
            <Image
              src="/placeholder.svg?height=80&width=80"
              alt="User Avatar"
              width={80}
              height={80}
              className="rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center items-start gap-2 text-center sm:text-left">
            <div className="text-white text-3xl font-bold">
              Jorge Christian Serrano Puertos
            </div>
            <div className="text-white text-base font-normal">christiansp7231@gmail.com</div>
          </div>
        </div>

        {/* Row 1: 2 columns */}
        <div className="self-stretch grid grid-cols-1 md:grid-cols-2 gap-8">
          {row1.map((category, index) => (
            <Link
              key={index}
              href={category.href}
              className="flex-1 self-stretch p-6 bg-gray hover:bg-zinc-700 transition-all duration-200 rounded-lg flex flex-col justify-start items-start gap-4 overflow-hidden group"
            >
              <div className="self-stretch flex justify-start items-center gap-2.5">
                <div className="p-0.5 py-1 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
                  <category.icon className="w-6 h-6 text-white group-hover:text-primary transition-colors" />
                </div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <div className="text-white text-xl font-bold group-hover:text-primary transition-colors">
                  {category.title}
                </div>
                <div className="self-stretch text-white text-base font-normal">
                  {category.description}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Row 2: 3 columns */}
        <div className="self-stretch grid grid-cols-1 md:grid-cols-3 gap-8">
          {row2.map((category, index) => (
            <Link
              key={index}
              href={category.href}
              className="flex-1 self-stretch p-6 bg-gray hover:bg-zinc-700 transition-all duration-200 rounded-lg flex flex-col justify-start items-start gap-4 overflow-hidden group"
            >
              <div className="self-stretch flex justify-start items-center gap-2.5">
                <div className="p-0.5 py-1 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
                  <category.icon className="w-6 h-6 text-white group-hover:text-primary transition-colors" />
                </div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <div className="text-white text-xl font-bold group-hover:text-primary transition-colors">
                  {category.title}
                </div>
                <div className="self-stretch text-white text-base font-normal">
                  {category.description}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Row 3: 2 columns */}
        <div className="self-stretch grid grid-cols-1 md:grid-cols-2 gap-8">
          {row3.map((category, index) => (
            <Link
              key={index}
              href={category.href}
              className="flex-1 self-stretch p-6 bg-gray hover:bg-zinc-700 transition-all duration-200 rounded-lg flex flex-col justify-start items-start gap-4 overflow-hidden group"
            >
              <div className="self-stretch flex justify-start items-center gap-2.5">
                <div className="p-0.5 py-1 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
                  <category.icon className="w-6 h-6 text-white group-hover:text-primary transition-colors" />
                </div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <div className="text-white text-xl font-bold group-hover:text-primary transition-colors">
                  {category.title}
                </div>
                <div className="self-stretch text-white text-base font-normal">
                  {category.description}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageLayout>
  )
}