"use client"

import { PageLayout } from "@/components/templates/PageLayout"
import { SettingsBreadcrumb } from "@/components/organisms/SettingsBreadcrumb";
import Input from "@/components/atoms/Input"
import Button from "@/components/atoms/Button"
import { CalendarIcon, CheckIcon } from "@heroicons/react/24/outline"
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
        <div className="overflow-hidden rounded-lg bg-gray p-8">
          <div className="mb-6 flex flex-col items-start gap-6 self-stretch">
            <div className="flex w-full flex-col items-start gap-4">
              <BodySmall as="label" htmlFor="fullName" className="text-base font-medium text-white">
                Nombre completo
              </BodySmall>
              <Input
                id="fullName"
                type="text"
                defaultValue="Jorge Christian"
              />
            </div>
            
            <div className="flex w-full items-start gap-4 sm:gap-6">
              <div className="flex flex-1 min-w-0 flex-col items-start gap-4">
                <BodySmall as="label" htmlFor="firstName" className="text-base font-medium text-white">
                  Primer apellido
                </BodySmall>
                <Input
                  id="firstName"
                  type="text"
                  defaultValue="Serrano"
                />
              </div>
              <div className="flex flex-1 min-w-0 flex-col items-start gap-4">
                <BodySmall as="label" htmlFor="secondName" className="text-base font-medium text-white">
                  Segundo apellido
                </BodySmall>
                <Input
                  id="secondName"
                  type="text"
                  defaultValue="Puertos"
                />
              </div>
            </div>
            
            <div className="flex w-full flex-col items-start gap-4">
              <BodySmall as="label" htmlFor="email" className="text-base font-medium text-white">
                Correo electrónico
              </BodySmall>
              <Input
                id="email"
                type="email"
                defaultValue="christiansp7231@gmail.com"
              />
            </div>
            
            <div className="flex w-full flex-col items-start gap-4">
              <BodySmall as="label" htmlFor="phoneNumber" className="text-base font-medium text-white">
                Número de teléfono
              </BodySmall>
              <Input
                id="phoneNumber"
                type="tel"
                defaultValue="271823712830"
              />
            </div>
            
            <div className="flex w-full flex-col items-start gap-4">
              <BodySmall as="label" htmlFor="birthDate" className="text-base font-medium text-white">
                Fecha de nacimiento
              </BodySmall>
              <div className="flex h-[44px] w-full items-center justify-between rounded-lg border border-neutral-600 bg-gray px-4 py-3 box-border">
                <Body className="text-base font-medium text-white">20/07/2004</Body>
                <CalendarIcon className="h-6 w-6 text-white flex-shrink-0" />
              </div>
            </div>
            
            <div className="flex w-full flex-col items-start gap-4">
              <BodySmall as="label" htmlFor="currentPassword" className="text-base font-medium text-white">
                Contraseña actual
              </BodySmall>
              <Input
                id="currentPassword"
                type="password"
                defaultValue="********"
                className="text-neutral-400"
              />
            </div>
            
            <div className="flex w-full flex-col items-start gap-4">
              <BodySmall as="label" htmlFor="newPassword" className="text-base font-medium text-white">
                Nueva contraseña
              </BodySmall>
              <Input
                id="newPassword"
                type="password"
              />
            </div>
            
            <div className="flex w-full flex-col items-start gap-4">
              <BodySmall as="label" htmlFor="repeatNewPassword" className="text-base font-medium text-white">
                Repetir nueva contraseña
              </BodySmall>
              <Input
                id="repeatNewPassword"
                type="password"
              />
            </div>
          </div>
          
          <div className="flex w-full justify-end">
            <Button>
              <CheckIcon className="w-5 h-5 mr-2" />
              Actualizar
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}