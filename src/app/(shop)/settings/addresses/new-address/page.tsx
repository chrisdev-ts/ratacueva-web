"use client"

import { PageLayout } from "@/components/templates/PageLayout"
import { SettingsBreadcrumb } from "@/components/organisms/SettingsBreadcrumb";
import { MapPinIcon, CheckIcon } from "@heroicons/react/24/outline"
import Input from "@/components/atoms/Input"
import Button from "@/components/atoms/Button"
import { RadioGroup, RadioGroupItem } from "@/components/atoms/radio-group"
import { Subheading } from "@/components/atoms/Typography";
import { Body, BodySmall } from "@/components/atoms/Typography";

export default function NewAddressPage() {
  return (
    <PageLayout className="px-[240px]">
      <div className="pt-8 pb-4">
        <SettingsBreadcrumb
          items={[
            { label: "Configuración", href: "/settings" },
            { label: "Direcciones", href: "/settings/addresses" },
            { label: "Nueva dirección" },
          ]}
          title="Nueva dirección"
          color="text-white"
          className="mb-8"
        />
        <div className="overflow-hidden rounded-lg bg-gray p-6">
          <div className="mb-6 flex w-full flex-col items-start gap-6 self-stretch">
            <div className="inline-flex h-auto min-h-11 items-center justify-start gap-3 px-0 py-0 text-cyan-400">
              <MapPinIcon className="h-6 w-6 text-cyan-400" />
              <Subheading className="text-cyan-400">Usar mi ubicación</Subheading>
            </div>

            <div className="h-px w-full bg-white" />

            <div className="flex w-full flex-col items-start gap-8 self-stretch">
              <div className="flex w-full flex-col items-start gap-4">
                <BodySmall as="label" htmlFor="deliveryAddress" className="text-base font-medium text-white">
                  Dirección o lugar de entrega
                </BodySmall>
                <Input
                  id="deliveryAddress"
                  type="text"
                  placeholder="Ej: Avenida los leones 4563"
                />
              </div>

              <div className="flex w-full flex-col items-start gap-4">
                <BodySmall as="label" htmlFor="postalCode" className="text-base font-medium text-white">
                  Código postal
                </BodySmall>
                <Input
                  id="postalCode"
                  type="text"
                  placeholder="Ej: 09440"
                />
              </div>

              <div className="flex w-full items-start gap-4 sm:gap-8">
                <div className="flex flex-1 min-w-0 flex-col items-start gap-4">
                  <BodySmall as="label" htmlFor="state" className="text-base font-medium text-white">
                    Estado
                  </BodySmall>
                  <Input
                    id="state"
                    type="text"
                    placeholder="Debes seleccionar una opción"
                  />
                </div>
                <div className="flex flex-1 min-w-0 flex-col items-start gap-4">
                  <BodySmall as="label" htmlFor="municipality" className="text-base font-medium text-white">
                    Municipio o alcaldía
                  </BodySmall>
                  <Input
                    id="municipality"
                    type="text"
                    placeholder="Ej: Córdoba"
                  />
                </div>
              </div>

              <div className="flex w-full items-start gap-4 sm:gap-8">
                <div className="flex flex-1 min-w-0 flex-col items-start gap-4">
                  <BodySmall as="label" htmlFor="locality" className="text-base font-medium text-white">
                    Localidad
                  </BodySmall>
                  <Input
                    id="locality"
                    type="text"
                    placeholder="Ej: Córdoba"
                  />
                </div>
                <div className="flex flex-1 min-w-0 flex-col items-start gap-4">
                  <BodySmall as="label" htmlFor="neighborhood" className="text-base font-medium text-white">
                    Colonia o barrio
                  </BodySmall>
                  <Input
                    id="neighborhood"
                    type="text"
                    placeholder="Ej: México"
                  />
                </div>
              </div>

              <div className="flex w-full flex-col items-start gap-4">
                <BodySmall as="label" htmlFor="interiorNumber" className="text-base font-medium text-white">
                  Número interior / Departamento (opcional)
                </BodySmall>
                <Input
                  id="interiorNumber"
                  type="text"
                  placeholder="Ej: 266"
                />
              </div>

              <div className="flex w-full flex-col items-start gap-4">
                <BodySmall as="label" htmlFor="deliveryInstructions" className="text-base font-medium text-white">
                  Indicaciones para la entrega (opcional)
                </BodySmall>
                <Input
                  id="deliveryInstructions"
                  type="text"
                  placeholder="Ej: Entre calles, color del edificio, no tiene timbre."
                />
              </div>

              <div className="flex w-full flex-col items-start gap-4">
                <BodySmall className="text-base font-medium text-white">Tipo de domicilio</BodySmall>
                <RadioGroup defaultValue="residential" className="flex flex-col items-start gap-2">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="residential" id="residential" className="border-white text-primary" />
                    <BodySmall as="label" htmlFor="residential" className="text-base font-medium text-white">
                      Residencial
                    </BodySmall>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="work" id="work" className="border-white text-primary" />
                    <BodySmall as="label" htmlFor="work" className="text-base font-medium text-white">
                      Laboral
                    </BodySmall>
                  </div>
                </RadioGroup>
              </div>

              <div className="flex w-full flex-col items-start gap-4">
                <BodySmall className="text-base font-medium text-white">Datos de contacto</BodySmall>
                <Body className="text-base font-normal text-white">Te llamaremos si hay un problema con la entrega.</Body>
              </div>

              <div className="flex w-full flex-col items-start gap-4">
                <BodySmall as="label" htmlFor="contactName" className="text-base font-medium text-white">
                  Nombre y apellido
                </BodySmall>
                <Input
                  id="contactName"
                  type="text"
                  placeholder="Ej: Juan Martinez"
                />
              </div>

              <div className="flex w-full flex-col items-start gap-4">
                <BodySmall as="label" htmlFor="contactPhone" className="text-base font-medium text-white">
                  Teléfono
                </BodySmall>
                <Input
                  id="contactPhone"
                  type="tel"
                  placeholder="Ej: 2712667564"
                />
              </div>
            </div>
          </div>

          <div className="flex w-full justify-end">
            <Button>
              <CheckIcon className="w-5 h-5 mr-2" />
              Guardar nueva dirección
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}