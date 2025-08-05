"use client";

import { CreditCardIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { PageLayout } from "@/components/templates/PageLayout";
import { SettingsBreadcrumb } from "@/components/organisms/SettingsBreadcrumb";
import { Body } from "@/components/atoms/Typography";
import Button from "@/components/atoms/Button";
import { useCart } from "@/contexts/CartContext";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  getPaymentMethods,
  PaymentMethod,
} from "@/services/payment/paymentOptions";
import PurchaseSummary from "@/components/organisms/PurchaseSummary";

export default function PaymentCardOptionsPage() {
  const { getCartTotal } = useCart();
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    string | null
  >(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();

  const subtotal = getCartTotal();
  const total = subtotal;

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    } else {
      setIsLoading(false);
      setError("No estás autenticado. Por favor, inicia sesión.");
    }
  }, []);

  const fetchPaymentMethods = useCallback(async () => {
    if (!token) {
      return;
    }

    try {
      const data = await getPaymentMethods(token);
      setPaymentMethods(data);
      if (data.length > 0) {
        setSelectedPaymentMethod(data[0]._id);
      }
      setIsLoading(false);
    } catch (err) {
      console.error("Error al obtener los métodos de pago:", err);
      setError(
        "No se pudieron cargar los métodos de pago. Inténtalo de nuevo."
      );
      setIsLoading(false);
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      fetchPaymentMethods();
    }
  }, [token, fetchPaymentMethods]);

  const handlePaymentMethodSelect = (methodId: string) => {
    setSelectedPaymentMethod(methodId);
  };

  const handleContinue = () => {
    if (!selectedPaymentMethod) {
      alert("Por favor, selecciona un método de pago.");
      return;
    }

    const selectedMethod = paymentMethods.find(
      (m) => m._id === selectedPaymentMethod
    );
    if (selectedMethod && selectedMethod.type === "cash") {
      router.push("/cart/payment-points");
    } else {
      router.push("/cart/payment-options");
    }
  };

  if (isLoading) {
    return (
      <PageLayout>
        <div className="pt-8 pb-4 text-center text-white">
          Cargando métodos de pago...
        </div>
      </PageLayout>
    );
  }

  if (error) {
    return (
      <PageLayout>
        <div className="pt-8 pb-4 text-center text-red-500">{error}</div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="pt-8 pb-4">
        <SettingsBreadcrumb
          items={[
            { label: "Carrito", href: "/cart" },
            { label: "Envío", href: "/cart/form-page" },
            { label: "Día de entrega", href: "/cart/delivery-day" },
            { label: "Método de pago" },
          ]}
          title="Elige cómo pagar"
          color="text-white"
          className="mb-8"
        />

        <div className="flex flex-col lg:flex-row justify-start items-start gap-8">
          <div className="w-full lg:w-[847px] space-y-6">
            {paymentMethods.map((method) => (
              <div key={method._id} className="p-6 bg-gray rounded-lg">
                <div
                  className="flex items-center gap-4 cursor-pointer"
                  onClick={() => handlePaymentMethodSelect(method._id)}
                >
                  <div
                    className={`w-5 h-5 p-2.5 rounded-[99px] border border-cyan-400 flex justify-center items-center ${
                      selectedPaymentMethod === method._id ? "bg-cyan-400" : ""
                    }`}
                  >
                    {selectedPaymentMethod === method._id && (
                      <div className="w-3.5 h-3.5 bg-cyan-400 rounded-full" />
                    )}
                  </div>
                  <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                    {method.type === "credit_card" && (
                      <CreditCardIcon className="w-4 h-4 text-gray-800" />
                    )}
                  </div>
                  <div className="flex flex-col gap-1">
                    <Body className="text-white text-xl">
                      {method.provider} **** {method.last4}
                    </Body>
                    <Body className="text-white text-sm">
                      Expira {method.expiration}
                    </Body>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex justify-end">
              <Button
                onClick={handleContinue}
                className="bg-pink-600 hover:bg-pink-700"
              >
                Continuar
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>

          <PurchaseSummary subtotal={subtotal} total={total} />
        </div>
      </div>
    </PageLayout>
  );
}
