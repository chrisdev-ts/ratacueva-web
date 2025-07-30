"use client"

import { PageLayout } from "@/components/templates/PageLayout"
import { Home, MoreVertical, Plus } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SettingsBreadcrumb } from "@/components/organisms/SettingsBreadcrumb";
import { Body, BodySmall } from "@/components/atoms/Typography"

type Address = {
  id: number
  street: string
  postalCode: string
  city: string
  state: string
  contactName: string
  contactPhone: string
}

export default function AddressesPage() {
  const savedAddresses: Address[] = [
    {
      id: 1,
      street: "Prolongación de la calle 1 Av. 10 y Av. Hortencia 268",
      postalCode: "94520",
      city: "Córdoba",
      state: "Veracruz de Ignacio de la Llave",
      contactName: "Jorge Christian Serrano Puertos",
      contactPhone: "271 1223069",
    },
  ];

  return (
    <PageLayout>
      <div className="pt-8 pb-4">
        <SettingsBreadcrumb
          items={[
            { label: "Configuración", href: "/settings" },
            { label: "Direcciones" },
          ]}
          title="Direcciones"
          color="text-white"
          className="mb-8"
        />
        <div className="overflow-hidden rounded-lg bg-zinc-800 p-6">
          {savedAddresses.map((address) => (
            <div key={address.id} className="mb-6 flex flex-col items-end gap-6 self-stretch">
              <div className="inline-flex w-full items-start justify-between">
                <div className="flex items-start gap-6">
                  <div className="relative h-12 w-12 overflow-hidden">
                    <Home className="absolute left-[10px] top-[9.23px] h-8 w-7 text-white" />
                  </div>
                  <div className="inline-flex flex-col items-start justify-center gap-2">
                    <Body className="text-xl font-normal text-white">{address.street}</Body>
                    <BodySmall className="text-base font-normal text-white">
                      Código postal {address.postalCode} - {address.state} - {address.city}
                    </BodySmall>
                    <BodySmall className="text-base font-normal text-white">
                      {address.contactName} - {address.contactPhone}
                    </BodySmall>
                  </div>
                </div>
                <Button size="icon" variant="ghost" className="h-6 w-6 text-cyan-400 hover:text-cyan-300">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
              <div className="h-px w-full bg-white/50" /> {/* Horizontal line */}
            </div>
          ))}
          <Link href="/settings/addresses/new-address">
            <Button asChild className="inline-flex h-11 min-h-11 items-center justify-center rounded-[99px] bg-transparent px-0 py-0 text-cyan-400 hover:bg-transparent hover:text-cyan-300">
              <span>
                <Plus className="mr-2 h-6 w-6 text-cyan-400" />
                <span className="text-base font-bold">Agregar dirección</span>
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </PageLayout>
  )
}
