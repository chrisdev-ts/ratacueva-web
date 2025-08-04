"use client"

import { useState } from "react"
import axios from "axios";
import { PageLayout } from "@/components/templates/PageLayout"
import { SettingsBreadcrumb } from "@/components/organisms/SettingsBreadcrumb";
import { MapPinIcon, CheckIcon } from "@heroicons/react/24/outline"
import Input from "@/components/atoms/Input"
import Button from "@/components/atoms/Button"
import { RadioGroup, RadioGroupItem } from "@/components/atoms/radio-group"
import { Subheading } from "@/components/atoms/Typography";
import { Body, BodySmall } from "@/components/atoms/Typography";
import Toast from "@/components/atoms/Toast";

export default function NewAddressPage() {

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://ratacueva-api.onrender.com/api";

  const [postalCode, setPostalCode] = useState("");
  const [street, setStreet] = useState("");
  const [externalNumber, setExternalNumber] = useState("");
  const [internalNumber, setInternalNumber] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("México");
  const [fullAddress, setFullAddress] = useState("");
  const [locality, setLocality] = useState("");
  const [deliveryInstructions, setDeliveryInstructions] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [recipientPhone, setRecipientPhone] = useState("");
  const [addressType, setAddressType] = useState<"home" | "work">("home");
  const [isDefault, setIsDefault] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [toastType, setToastType] = useState<"success" | "info" | "warning">("success");

  const token = localStorage.getItem("token");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const isValid = validateForm();
    if (!isValid) {
      setIsLoading(false);
      return;
    }

    try {
      await axios.post(`${API_URL}/users/addresses`, {
        postalCode,
        street: fullAddress,
        externalNumber,
        internalNumber,
        neighborhood,
        city,
        state,
        country,
        fullAddress,
        locality,
        deliveryInstructions,
        recipientName,
        recipientPhone,
        addressType,
        isDefault
      },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
      setToastMessage("Dirección añadida con éxito");
      setToastType("success");
      setIsToastVisible(true);
      resetForm();
    } catch (error: any) {
      setToastMessage(error.response?.data?.message || "Hubo un error al añadir la dirección");
      setToastType("warning");
      setIsToastVisible(true);
      console.error(error)
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setPostalCode("");
    setStreet("");
    setExternalNumber("");
    setInternalNumber("");
    setNeighborhood("");
    setCity("");
    setState("");
    setCountry("");
    setFullAddress("");
    setLocality("");
    setDeliveryInstructions("");
    setRecipientName("");
    setRecipientPhone("");
    setAddressType("home");
    setIsDefault(false);
  }

  const validateForm = () => {
    if (!fullAddress.trim() || !postalCode.trim() || !city.trim() || !state.trim() || !recipientName.trim() || !recipientPhone.trim()) {
      setToastMessage("Por favor, completa todos los campos obligatorios.");
      setToastType("warning");
      setIsToastVisible(true);
      return false;
    }
    return true;
  }

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
        <form onSubmit={handleSubmit} className="overflow-hidden rounded-lg bg-gray p-6">
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
                  value={fullAddress}
                  onChange={(e) => setFullAddress(e.target.value)}
                />
              </div>

              <div className="flex w-full flex-col items-start gap-4">
                <BodySmall as="label" htmlFor="postalCode" className="text-base font-medium text-white" pattern="\d{5}" maxLength={5}>
                  Código postal
                </BodySmall>
                <Input
                  id="postalCode"
                  type="text"
                  placeholder="Ej: 09440"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  pattern="\d{5}"
                  maxLength={5}
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
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    minLength={2}
                    maxLength={100}
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
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    minLength={2}
                    maxLength={100}
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
                    value={locality}
                    onChange={(e) => setLocality(e.target.value)}
                    minLength={2}
                    maxLength={100}
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
                    value={neighborhood}
                    onChange={(e) => setNeighborhood(e.target.value)}
                    minLength={2}
                    maxLength={255}
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
                  value={internalNumber}
                  onChange={(e) => setInternalNumber(e.target.value)}
                  maxLength={20}
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
                  value={deliveryInstructions}
                  onChange={(e) => setDeliveryInstructions(e.target.value)}
                  maxLength={255}
                />
              </div>

              <div className="flex w-full flex-col items-start gap-4">
                <BodySmall className="text-base font-medium text-white">Tipo de domicilio</BodySmall>
                <RadioGroup
                  defaultValue="home"
                  className="flex flex-col items-start gap-2"
                  onValueChange={(value) => setAddressType(value as "home" | "work")}
                >
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="home" id="home" className="border-white text-primary" />
                    <BodySmall as="label" htmlFor="home" className="text-base font-medium text-white">
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
                  value={recipientName}
                  onChange={(e) => setRecipientName(e.target.value)}
                  minLength={2}
                  maxLength={255}
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
                  value={recipientPhone}
                  onChange={(e) => setRecipientPhone(e.target.value)}
                  pattern="\d{10,15}"
                  minLength={10}
                  maxLength={15}
                />
              </div>
            </div>
          </div>

          <div className="flex w-full justify-end">
            <Button type="submit" disabled={isLoading}>
              <CheckIcon className="w-5 h-5 mr-2" />
              {isLoading ? "Guardando..." : "Guardar nueva dirección"}
            </Button>
          </div>
        </form>
      </div>
      <Toast
        message={toastMessage}
        isVisible={isToastVisible}
        onClose={() => setIsToastVisible(false)}
        type={toastType}
      />
    </PageLayout>
  )
}