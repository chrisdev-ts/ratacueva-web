"use client"

import { PageLayout } from "@/components/templates/PageLayout"
import { SettingsBreadcrumb } from "@/components/organisms/SettingsBreadcrumb";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Calendar, Save } from "lucide-react"
import { Body, BodySmall } from "@/components/atoms/Typography"

export default function PersonalInfoPage() {
  return (
    <PageLayout>
      <div className="pt-8 pb-4">
        <SettingsBreadcrumb
          items={[
            { label: "Configuración", href: "/settings" },
            { label: "Información personal" },
          ]}
          title="Información personal"
          color="text-white"
          className="mb-8"
        />
        <div className="overflow-hidden rounded-lg bg-zinc-800 p-8">
          <div className="mb-6 flex flex-col items-start gap-6 self-stretch">
            <div className="flex w-full flex-col items-start gap-4 self-stretch">
              <BodySmall as="label" htmlFor="fullName" className="text-base font-medium text-white">
                Nombre completo
              </BodySmall>
              <Input
                id="fullName"
                type="text"
                defaultValue="Jorge Christian"
                className="h-11 min-h-11 w-full rounded-lg border border-neutral-600 bg-zinc-800 px-4 py-3 text-base font-medium text-white outline-none focus:border-pink-600 focus:ring-0"
              />
            </div>
            <div className="inline-flex w-full items-start justify-start gap-6 self-stretch">
              <div className="flex flex-1 flex-col items-start gap-4">
                <BodySmall as="label" htmlFor="firstName" className="text-base font-medium text-white">
                  Primer apellido
                </BodySmall>
                <Input
                  id="firstName"
                  type="text"
                  defaultValue="Serrano"
                  className="h-11 min-h-11 w-full rounded-lg border border-neutral-600 bg-zinc-800 px-4 py-3 text-base font-medium text-white outline-none focus:border-pink-600 focus:ring-0"
                />
              </div>
              <div className="flex flex-1 flex-col items-start gap-4">
                <BodySmall as="label" htmlFor="secondName" className="text-base font-medium text-white">
                  Segundo apellido
                </BodySmall>
                <Input
                  id="secondName"
                  type="text"
                  defaultValue="Puertos"
                  className="h-11 min-h-11 w-full rounded-lg border border-neutral-600 bg-zinc-800 px-4 py-3 text-base font-medium text-white outline-none focus:border-pink-600 focus:ring-0"
                />
              </div>
            </div>
            <div className="flex w-full flex-col items-start gap-4 self-stretch">
              <BodySmall as="label" htmlFor="email" className="text-base font-medium text-white">
                Correo electrónico
              </BodySmall>
              <Input
                id="email"
                type="email"
                defaultValue="christiansp7231@gmail.com"
                className="h-11 min-h-11 w-full rounded-lg border border-neutral-600 bg-zinc-800 px-4 py-3 text-base font-medium text-white outline-none focus:border-pink-600 focus:ring-0"
              />
            </div>
            <div className="flex w-full flex-col items-start gap-4 self-stretch">
              <BodySmall as="label" htmlFor="phoneNumber" className="text-base font-medium text-white">
                Número de teléfono
              </BodySmall>
              <Input
                id="phoneNumber"
                type="tel"
                defaultValue="271823712830"
                className="h-11 min-h-11 w-full rounded-lg border border-neutral-600 bg-zinc-800 px-4 py-3 text-base font-medium text-white outline-none focus:border-pink-600 focus:ring-0"
              />
            </div>
            <div className="flex w-full flex-col items-start gap-4 self-stretch">
              <BodySmall as="label" htmlFor="birthDate" className="text-base font-medium text-white">
                Fecha de nacimiento
              </BodySmall>
              <div className="inline-flex h-11 min-h-11 w-full items-center justify-between overflow-hidden rounded-lg border border-neutral-600 bg-zinc-800 px-4 py-3">
                <Body className="text-base font-medium text-white">20/07/2004</Body>
                <Calendar className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="flex w-full flex-col items-start gap-4 self-stretch">
              <BodySmall as="label" htmlFor="currentPassword" className="text-base font-medium text-white">
                Contraseña actual
              </BodySmall>
              <Input
                id="currentPassword"
                type="password"
                defaultValue="********"
                className="h-11 min-h-11 w-full rounded-lg border border-neutral-600 bg-zinc-800 px-4 py-3 text-base font-medium text-neutral-400 outline-none focus:border-pink-600 focus:ring-0"
              />
            </div>
            <div className="flex w-full flex-col items-start gap-4 self-stretch">
              <BodySmall as="label" htmlFor="newPassword" className="text-base font-medium text-white">
                Nueva contraseña
              </BodySmall>
              <Input
                id="newPassword"
                type="password"
                className="h-11 min-h-11 w-full rounded-lg border border-neutral-600 bg-zinc-800 px-4 py-3 text-base font-medium text-white outline-none focus:border-pink-600 focus:ring-0"
              />
            </div>
            <div className="flex w-full flex-col items-start gap-4 self-stretch">
              <BodySmall as="label" htmlFor="repeatNewPassword" className="text-base font-medium text-white">
                Repetir nueva contraseña
              </BodySmall>
              <Input
                id="repeatNewPassword"
                type="password"
                className="h-11 min-h-11 w-full rounded-lg border border-neutral-600 bg-zinc-800 px-4 py-3 text-base font-medium text-white outline-none focus:border-pink-600 focus:ring-0"
              />
            </div>
          </div>
          <div className="flex w-full justify-end">
            <Button className="h-11 min-h-11 rounded-[99px] bg-pink-600 px-4 py-2.5 font-bold text-white hover:bg-pink-700">
              <Save className="w-5 h-5" />
              Actualizar
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
