"use client";

import { PageLayout } from "@/components/templates/PageLayout";
import { SettingsBreadcrumb } from "@/components/organisms/SettingsBreadcrumb";
import { Body, Subheading } from "@/components/atoms/Typography";
import Button from "@/components/atoms/Button";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowRightIcon, PlusIcon } from "@heroicons/react/24/outline";
import { getAddresses, Address } from "@/services/settings/address/addresses";
import Link from "next/link";
import { AuthGuard } from "@/components/providers/AuthGuard";

function FormPageContent() {
  const { getCartTotal } = useCart();
  const { user } = useAuth();
  const [selectedDeliveryOption, setSelectedDeliveryOption] =
    useState("domicilio");
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedAddressId, setSelectedAddressId] = useState<string | null>(
    null
  );
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();

  const subtotal = getCartTotal();
  const shippingCost = 90; // Mismo costo que en la página original

  // Initialize token from localStorage
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  // Verificar que existan datos del carrito
  useEffect(() => {
    const checkoutData = localStorage.getItem("checkoutData");
    if (!checkoutData) {
      // Si no hay datos del carrito, redirigir al carrito
      router.push("/cart");
      return;
    }
  }, [router]);

  // Obtener direcciones del usuario
  useEffect(() => {
    const fetchAddresses = async () => {
      if (!user || !token) return;

      try {
        setLoading(true);
        const userAddresses = await getAddresses(token);
        setAddresses(userAddresses);

        // Seleccionar la dirección predeterminada si existe
        const defaultAddress = userAddresses.find(
          (addr: Address) => addr.isDefault
        );
        if (defaultAddress) {
          setSelectedAddressId(defaultAddress._id);
        } else if (userAddresses.length > 0) {
          setSelectedAddressId(userAddresses[0]._id);
        }
      } catch (error) {
        console.error("Error fetching addresses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAddresses();
  }, [user, token]);

  const selectedAddress = addresses.find(
    (addr: Address) => addr._id === selectedAddressId
  );

  const formatAddress = (address: Address) => {
    const parts = [
      address.street,
      address.externalNumber && `No. ${address.externalNumber}`,
      address.internalNumber && `Int. ${address.internalNumber}`,
      address.neighborhood,
      address.city,
      address.state,
      address.postalCode,
      address.country,
    ].filter(Boolean);

    return parts.join(", ");
  };

  const handleContinue = () => {
    // Validar que se haya seleccionado una dirección si se eligió domicilio
    if (selectedDeliveryOption === "domicilio" && addresses.length === 0) {
      alert("Debes agregar al menos una dirección para continuar");
      return;
    }

    if (selectedDeliveryOption === "domicilio" && !selectedAddressId) {
      alert("Debes seleccionar una dirección para continuar");
      return;
    }

    // Obtener datos existentes del checkout
    const existingCheckoutData = localStorage.getItem("checkoutData");
    if (!existingCheckoutData) {
      alert("Error: No se encontraron datos del carrito");
      router.push("/cart");
      return;
    }

    const checkoutData = JSON.parse(existingCheckoutData);

    // Agregar datos de envío al checkoutData
    const shippingData = {
      deliveryOption: selectedDeliveryOption,
      shippingAddress:
        selectedDeliveryOption === "domicilio" && selectedAddress
          ? {
              postalCode: selectedAddress.postalCode,
              street: selectedAddress.street,
              externalNumber: selectedAddress.externalNumber,
              internalNumber: selectedAddress.internalNumber,
              neighborhood: selectedAddress.neighborhood,
              city: selectedAddress.city,
              state: selectedAddress.state,
              country: selectedAddress.country,
              isDefault: selectedAddress.isDefault,
            }
          : null,
      shippingCost: selectedDeliveryOption === "domicilio" ? shippingCost : 0,
    };

    // Actualizar checkoutData con los datos de envío
    const updatedCheckoutData = {
      ...checkoutData,
      ...shippingData,
      timestamp: Date.now(),
    };

    // Guardar datos actualizados en localStorage
    localStorage.setItem("checkoutData", JSON.stringify(updatedCheckoutData));

    // Continuar al siguiente paso
    router.push("/cart/delivery-day");
  };

  return (
    <PageLayout>
      <div className="pt-8 pb-4">
        <SettingsBreadcrumb
          items={[{ label: "Carrito", href: "/cart" }, { label: "Envío" }]}
          title="Elige la forma de entrega"
          color="text-white"
          className="mb-8"/>

        <div className="flex flex-col lg:flex-row justify-start items-start gap-8">
          {/* Left Column: Delivery Options */}
          <div className="w-full lg:w-[847px] space-y-6">
            {/* Opción 1: Enviar a domicilio */}
            <div
              className="p-6 bg-gray rounded-lg flex justify-start items-start gap-6 cursor-pointer"
              onClick={() => setSelectedDeliveryOption("domicilio")}>
              <div
                className={`w-5 h-5 p-2.5 rounded-[99px] border border-cyan-400 flex justify-center items-center ${
                  selectedDeliveryOption === "domicilio" ? "bg-cyan-400" : ""
                }`}>
                {selectedDeliveryOption === "domicilio" && (
                  <div className="w-3.5 h-3.5 bg-cyan-400 rounded-full" />
                )}
              </div>
              <div className="flex-1 flex flex-col justify-start items-start gap-6">
                <div className="w-full flex justify-between items-center">
                  <Subheading className="text-white">
                    Enviar a domicilio
                  </Subheading>
                  <Body className="text-emerald-400 text-xl font-medium">
                    ${shippingCost.toLocaleString()}
                  </Body>
                </div>

                {loading ? (
                  <Body className="text-white">Cargando direcciones...</Body>
                ) : addresses.length === 0 ? (
                  <div className="flex flex-col gap-4">
                    <Body className="text-white">
                      No tienes direcciones guardadas
                    </Body>
                    <Link href="/settings/addresses/new-address">
                      <Button className="flex items-center gap-2">
                        <PlusIcon className="w-4 h-4" />
                        Agregar dirección
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-1">
                        <Body className="text-white">
                          {selectedAddress
                            ? formatAddress(selectedAddress)
                            : "Selecciona una dirección"}
                        </Body>
                      </div>
                    </div>

                    {/* Selector de direcciones */}
                    {addresses.length > 1 && (
                      <div className="space-y-2">
                        <Body className="text-white text-sm">
                          Seleccionar dirección:
                        </Body>
                        {addresses.map((address) => (
                          <div
                            key={address._id}
                            className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                              selectedAddressId === address._id
                                ? "border-cyan-400 bg-cyan-400/10"
                                : "border-zinc-600 hover:border-zinc-500"
                            }`}
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedAddressId(address._id);
                            }}>
                            <Body className="text-white text-sm">
                              {formatAddress(address)}
                              {address.isDefault && (
                                <span className="ml-2 text-cyan-400 text-xs">
                                  (Predeterminada)
                                </span>
                              )}
                            </Body>
                          </div>
                        ))}
                      </div>
                    )}

                    <Link href="/settings/addresses/new-address">
                      <button className="text-cyan-400 text-base font-bold hover:underline">
                        Agregar nueva dirección
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Opción 2: Retirar en punto de entrega */}
            <div
              className="p-6 bg-gray rounded-lg flex justify-start items-start gap-6 cursor-pointer"
              onClick={() => setSelectedDeliveryOption("punto")}>
              <div
                className={`w-5 h-5 p-2.5 rounded-[99px] border border-cyan-400 flex justify-center items-center ${
                  selectedDeliveryOption === "punto" ? "bg-cyan-400" : ""
                }`}>
                {selectedDeliveryOption === "punto" && (
                  <div className="w-3.5 h-3.5 bg-cyan-400 rounded-full" />
                )}
              </div>
              <div className="flex-1 flex flex-col justify-start items-start gap-6">
                <div className="w-full flex justify-between items-center">
                  <Subheading className="text-white">
                    Retirar en punto de entrega
                  </Subheading>
                  <Body className="text-emerald-400 text-xl font-medium">
                    Gratis
                  </Body>
                </div>
              </div>
            </div>

            {/* Botón Continuar */}
            <div className="flex justify-end">
              <Button onClick={handleContinue} className=" px-6 py-3">
                Continuar
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>

          {/* Right Column: Purchase Summary */}
          <div className="flex-1 w-full lg:w-auto">
            <div className="p-6 bg-gray rounded-lg space-y-6">
              <Subheading className="text-white">
                Resumen de la compra
              </Subheading>
              <div className="h-px bg-white/20"></div>
              <div className="flex justify-between items-center">
                <Body className="text-white">Producto</Body>
                <Body className="text-white">${subtotal.toLocaleString()}</Body>
              </div>
              <div className="flex justify-between items-center">
                <Body className="text-white">Envío</Body>
                <Body className="text-white">
                  $
                  {selectedDeliveryOption === "domicilio"
                    ? shippingCost.toLocaleString()
                    : "0"}
                </Body>
              </div>
              <div className="h-px bg-white/20"></div>
              <div className="flex justify-between items-center">
                <Body className="text-white">Total</Body>
                <Subheading className="text-white">
                  $
                  {(
                    subtotal +
                    (selectedDeliveryOption === "domicilio" ? shippingCost : 0)
                  ).toLocaleString()}
                </Subheading>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default function FormPage() {
  return (
    <AuthGuard>
      <FormPageContent />
    </AuthGuard>
  );
}
