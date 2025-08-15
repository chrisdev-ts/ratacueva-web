"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { PageLayout } from "@/components/templates/PageLayout";
import { SettingsBreadcrumb } from "@/components/organisms/SettingsBreadcrumb";
import { MapPinIcon, CheckIcon } from "@heroicons/react/24/outline";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";
import { RadioGroup, RadioGroupItem } from "@/components/atoms/radio-group";
import { Subheading } from "@/components/atoms/Typography";
import { Body, BodySmall } from "@/components/atoms/Typography";
import {
  getAddresses,
  updateAddress,
  Address,
  UpdateAddressPayload,
} from "@/services/settings/address/addresses";
import { useAuth } from "@/contexts/AuthContext";

export default function EditAddressPage() {
  const router = useRouter();
  const params = useParams();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [address, setAddress] = useState<Address | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [formData, setFormData] = useState<UpdateAddressPayload>({
    postalCode: "",
    street: "",
    externalNumber: "",
    internalNumber: "",
    neighborhood: "",
    city: "",
    state: "",
    country: "",
    isDefault: false,
  });

  const addressId = params.id as string;

  // Initialize token from localStorage
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  // Fetch address data on component mount
  useEffect(() => {
    const fetchAddress = async () => {
      if (!token) return;

      try {
        setLoading(true);
        setError("");

        const addresses = await getAddresses(token);
        const targetAddress = addresses.find(
          (addr: Address) => addr._id === addressId
        );

        if (!targetAddress) {
          setError("Dirección no encontrada");
          return;
        }

        setAddress(targetAddress);
        setFormData({
          postalCode: targetAddress.postalCode,
          street: targetAddress.street,
          externalNumber: targetAddress.externalNumber || "",
          internalNumber: targetAddress.internalNumber || "",
          neighborhood: targetAddress.neighborhood,
          city: targetAddress.city,
          state: targetAddress.state,
          country: targetAddress.country,
          isDefault: targetAddress.isDefault,
        });
      } catch (error: unknown) {
        console.error("Error fetching address:", error);
        setError("Error al cargar la dirección");
      } finally {
        setLoading(false);
      }
    };

    if (user && addressId && token) {
      fetchAddress();
    }
  }, [user, addressId, token]);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev: UpdateAddressPayload) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!token) {
      setError("No hay token de autenticación disponible");
      return;
    }

    try {
      setSaving(true);
      setError("");

      await updateAddress(token, addressId, formData);
      router.push("/settings/addresses");
    } catch (error: unknown) {
      console.error("Error updating address:", error);
      const errorMessage =
        error && typeof error === "object" && "response" in error
          ? (error.response as { data?: { message?: string } })?.data
              ?.message || "Error al actualizar la dirección"
          : "Error al actualizar la dirección";
      setError(errorMessage);
    } finally {
      setSaving(false);
    }
  };

  const isFormValid =
    formData.postalCode &&
    formData.street &&
    formData.neighborhood &&
    formData.city &&
    formData.state &&
    formData.country;

  if (loading) {
    return (
      <PageLayout className="px-[240px]">
        <div className="pt-8 pb-4">
          <SettingsBreadcrumb
            items={[
              { label: "Configuración", href: "/settings" },
              { label: "Direcciones", href: "/settings/addresses" },
              { label: "Editar dirección" },
            ]}
            title="Editar dirección"
            color="text-white"
            className="mb-8"/>
          <div className="overflow-hidden rounded-lg bg-gray p-6">
            <div className="text-white text-center">Cargando dirección...</div>
          </div>
        </div>
      </PageLayout>
    );
  }

  if (!address) {
    return (
      <PageLayout className="px-[240px]">
        <div className="pt-8 pb-4">
          <SettingsBreadcrumb
            items={[
              { label: "Configuración", href: "/settings" },
              { label: "Direcciones", href: "/settings/addresses" },
              { label: "Editar dirección" },
            ]}
            title="Editar dirección"
            color="text-white"
            className="mb-8"/>
          <div className="overflow-hidden rounded-lg bg-gray p-6">
            <div className="text-red-400 text-center">
              Dirección no encontrada
            </div>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout className="px-[240px]">
      <div className="pt-8 pb-4">
        <SettingsBreadcrumb
          items={[
            { label: "Configuración", href: "/settings" },
            { label: "Direcciones", href: "/settings/addresses" },
            { label: "Editar dirección" },
          ]}
          title="Editar dirección"
          color="text-white"
          className="mb-8"/>
        <div className="overflow-hidden rounded-lg bg-gray p-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-6 flex w-full flex-col items-start gap-6 self-stretch">
              <div className="inline-flex h-auto min-h-11 items-center justify-start gap-3 px-0 py-0 text-cyan-400">
                <MapPinIcon className="h-6 w-6 text-cyan-400" />
                <Subheading className="text-cyan-400">
                  Editar dirección
                </Subheading>
              </div>

              <div className="h-px w-full bg-white" />

              {/* Error Message */}
              {error && (
                <div className="w-full p-3 bg-red-500/20 border border-red-500 rounded-lg">
                  <Body className="text-red-400">{error}</Body>
                </div>
              )}

              <div className="flex w-full flex-col items-start gap-8 self-stretch">
                <div className="flex w-full flex-col items-start gap-4">
                  <BodySmall
                    as="label"
                    htmlFor="street"
                    className="text-base font-medium text-white">
                    Dirección o lugar de entrega
                  </BodySmall>
                  <Input
                    id="street"
                    type="text"
                    value={formData.street}
                    onChange={(e) =>
                      handleInputChange("street", e.target.value)
                    }
                    placeholder="Ej: Avenida los leones 4563"
                    required/>
                </div>

                <div className="flex w-full flex-col items-start gap-4">
                  <BodySmall
                    as="label"
                    htmlFor="postalCode"
                    className="text-base font-medium text-white">
                    Código postal
                  </BodySmall>
                  <Input
                    id="postalCode"
                    type="text"
                    value={formData.postalCode}
                    onChange={(e) =>
                      handleInputChange("postalCode", e.target.value)
                    }
                    placeholder="Ej: 09440"
                    maxLength={5}
                    required/>
                </div>

                <div className="flex w-full items-start gap-4 sm:gap-8">
                  <div className="flex flex-1 min-w-0 flex-col items-start gap-4">
                    <BodySmall
                      as="label"
                      htmlFor="state"
                      className="text-base font-medium text-white">
                      Estado
                    </BodySmall>
                    <Input
                      id="state"
                      type="text"
                      value={formData.state}
                      onChange={(e) =>
                        handleInputChange("state", e.target.value)
                      }
                      placeholder="Ej: Veracruz"
                      required/>
                  </div>
                  <div className="flex flex-1 min-w-0 flex-col items-start gap-4">
                    <BodySmall
                      as="label"
                      htmlFor="city"
                      className="text-base font-medium text-white">
                      Ciudad
                    </BodySmall>
                    <Input
                      id="city"
                      type="text"
                      value={formData.city}
                      onChange={(e) =>
                        handleInputChange("city", e.target.value)
                      }
                      placeholder="Ej: Córdoba"
                      required/>
                  </div>
                </div>

                <div className="flex w-full items-start gap-4 sm:gap-8">
                  <div className="flex flex-1 min-w-0 flex-col items-start gap-4">
                    <BodySmall
                      as="label"
                      htmlFor="neighborhood"
                      className="text-base font-medium text-white">
                      Colonia o barrio
                    </BodySmall>
                    <Input
                      id="neighborhood"
                      type="text"
                      value={formData.neighborhood}
                      onChange={(e) =>
                        handleInputChange("neighborhood", e.target.value)
                      }
                      placeholder="Ej: Centro"
                      required/>
                  </div>
                  <div className="flex flex-1 min-w-0 flex-col items-start gap-4">
                    <BodySmall
                      as="label"
                      htmlFor="externalNumber"
                      className="text-base font-medium text-white">
                      Número exterior
                    </BodySmall>
                    <Input
                      id="externalNumber"
                      type="text"
                      value={formData.externalNumber}
                      onChange={(e) =>
                        handleInputChange("externalNumber", e.target.value)
                      }
                      placeholder="Ej: 123"/>
                  </div>
                </div>

                <div className="flex w-full flex-col items-start gap-4">
                  <BodySmall
                    as="label"
                    htmlFor="internalNumber"
                    className="text-base font-medium text-white">
                    Número interior / Departamento (opcional)
                  </BodySmall>
                  <Input
                    id="internalNumber"
                    type="text"
                    value={formData.internalNumber}
                    onChange={(e) =>
                      handleInputChange("internalNumber", e.target.value)
                    }
                    placeholder="Ej: 266"/>
                </div>

                <div className="flex w-full flex-col items-start gap-4">
                  <BodySmall
                    as="label"
                    htmlFor="country"
                    className="text-base font-medium text-white">
                    País
                  </BodySmall>
                  <Input
                    id="country"
                    type="text"
                    value={formData.country}
                    onChange={(e) =>
                      handleInputChange("country", e.target.value)
                    }
                    placeholder="Ej: México"
                    required/>
                </div>

                <div className="flex w-full flex-col items-start gap-4">
                  <BodySmall className="text-base font-medium text-white">
                    Establecer como predeterminada
                  </BodySmall>
                  <RadioGroup
                    value={formData.isDefault ? "true" : "false"}
                    onValueChange={(value) =>
                      handleInputChange(
                        "isDefault",
                        value === "true" ? "true" : "false"
                      )
                    }
                    className="flex flex-col items-start gap-2">
                    <div className="flex items-center gap-2">
                      <RadioGroupItem
                        value="true"
                        id="default"
                        className="border-white text-primary"/>
                      <BodySmall
                        as="label"
                        htmlFor="default"
                        className="text-base font-medium text-white">
                        Sí, establecer como predeterminada
                      </BodySmall>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem
                        value="false"
                        id="not-default"
                        className="border-white text-primary"/>
                      <BodySmall
                        as="label"
                        htmlFor="not-default"
                        className="text-base font-medium text-white">
                        No, solo agregar como dirección adicional
                      </BodySmall>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>

            <div className="flex w-full justify-end">
              <Button type="submit" disabled={!isFormValid || saving}>
                <CheckIcon className="w-5 h-5 mr-2" />
                {saving ? "Guardando..." : "Guardar cambios"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </PageLayout>
  );
}
