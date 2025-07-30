"use client"

import { PageLayout } from "@/components/templates/PageLayout"
import { Home, Plus } from "lucide-react"
import Link from "next/link"
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
        <div className="overflow-hidden rounded-lg bg-gray p-6">
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
             
              </div>
              <div className="h-px w-full bg-white/50" /> {/* Horizontal line */}
            </div>
          ))}
          <Link href="/settings/addresses/new-address">
            <button className="inline-flex h-11 min-h-11 items-center justify-center gap-2 rounded-[99px] bg-transparent px-4 py-2.5 text-cyan-400 hover:bg-transparent hover:text-cyan-300">
              <Plus className="h-5 w-5" />
              <span className="text-base font-bold">Agregar dirección</span>
            </button>
          </Link>
        </div>
      </div>
    </PageLayout>
  )
}
