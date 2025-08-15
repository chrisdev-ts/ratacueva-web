"use client";

import { DocumentDuplicateIcon, CheckIcon } from "@heroicons/react/24/outline";
import { PageLayout } from "@/components/templates/PageLayout";
import { SettingsBreadcrumb } from "@/components/organisms/SettingsBreadcrumb";
import Button from "@/components/atoms/Button";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Body, Subheading } from "@/components/atoms/Typography";
import { useCart } from "@/contexts/CartContext";

export default function PaymentPointsPage() {
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(true);

  type PaymentData = {
    barcode: string;
    paymentType: string;
    paymentCode: string;
    amount: string;
  };

  const [paymentData, setPaymentData] = useState<PaymentData | null>(null);
  const [error, setError] = useState("");
  const router = useRouter();
  const { getCartTotal } = useCart();

  const subtotal = getCartTotal();
  const shipping = 0;
  const total = subtotal + shipping;

  // Generar datos de pago al cargar la página (sin crear orden todavía)
  useEffect(() => {
    const generatePaymentData = async () => {
      try {
        setLoading(true);

        // Verificar que existan datos del checkout
        const checkoutData = localStorage.getItem("checkoutData");
        if (!checkoutData) {
          setError("No se encontraron datos del checkout");
          return;
        }

        const parsedCheckoutData = JSON.parse(checkoutData);

        // Verificar que sea pago en efectivo
        if (parsedCheckoutData.paymentMethod?.type !== "oxxo_cash") {
          setError("Esta página es solo para pagos en efectivo");
          return;
        }

        // Generar datos del punto de pago
        const paymentInfo = {
          barcode: generateBarcode(),
          paymentType: "Servicios de la ecommerce",
          paymentCode: generatePaymentCode(),
          amount: `$${total.toLocaleString()}`,
        };

        setPaymentData(paymentInfo);
      } catch (err) {
        console.error("Error generating payment data:", err);
        setError("Error al generar el código de pago");
      } finally {
        setLoading(false);
      }
    };

    generatePaymentData();
  }, [total]);

  // Generar código de barras único
  const generateBarcode = () => {
    return Date.now().toString() + Math.random().toString(36).substr(2, 9);
  };

  // Generar código de pago
  const generatePaymentCode = () => {
    return Math.random().toString(36).substr(2, 9).toUpperCase();
  };

  const handleCopyBarcode = async () => {
    if (!paymentData) return;

    try {
      await navigator.clipboard.writeText(paymentData.barcode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Error al copiar:", err);
    }
  };

  const handlePaymentConfirmed = async () => {
    try {
      // Actualizar el checkoutData con información del pago en efectivo
      const checkoutData = localStorage.getItem("checkoutData");
      if (checkoutData) {
        const parsedData = JSON.parse(checkoutData);
        const updatedData = {
          ...parsedData,
          cashPayment: {
            barcode: paymentData?.barcode,
            paymentCode: paymentData?.paymentCode,
            confirmed: true,
            timestamp: Date.now(),
          },
        };
        localStorage.setItem("checkoutData", JSON.stringify(updatedData));
      }

      // Ir a success para crear la orden
      router.push("/cart/success");
    } catch (err) {
      console.error("Error confirming payment:", err);
      setError("Error al confirmar el pago");
    }
  };

  if (loading) {
    return (
      <PageLayout>
        <div className="pt-8 pb-4">
          <div className="flex justify-center items-center min-h-[400px]">
            <Body className="text-white">Generando código de pago...</Body>
          </div>
        </div>
      </PageLayout>
    );
  }

  if (error) {
    return (
      <PageLayout>
        <div className="pt-8 pb-4">
          <div className="flex flex-col justify-center items-center min-h-[400px] gap-4">
            <Body className="text-red-400">{error}</Body>
            <Button onClick={() => router.push("/cart")}>
              Volver al carrito
            </Button>
          </div>
        </div>
      </PageLayout>
    );
  }

  if (!paymentData) {
    return (
      <PageLayout>
        <div className="pt-8 pb-4">
          <div className="flex justify-center items-center min-h-[400px]">
            <Body className="text-white">
              Error al generar el código de pago
            </Body>
          </div>
        </div>
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
            { label: "Método de pago", href: "/cart/payment-card-options" },
            { label: "Mensualidades", href: "/cart/payment-options" },
            { label: "Punto de pago" },
          ]}
          title="Paga en un punto de pago"
          color="text-white"
          className="mb-8"/>

        <div className="px-4 lg:px-60 py-8 flex flex-col justify-center items-center gap-8">
          <div className="w-full flex flex-col justify-start items-center gap-12">
            <div className="w-full flex flex-col justify-start items-start gap-8">
              {/* Card principal de pago */}
              <div className="w-full p-6 relative bg-zinc-800 rounded-lg flex justify-end items-end gap-6">
                <div className="flex-1 flex flex-col justify-start items-start gap-6">
                  {/* Instrucciones */}
                  <Body className="w-full text-center text-emerald-400 text-xl font-bold">
                    Muestra el código de barras al pagar o menciona estos datos
                  </Body>

                  {/* Código de barras */}
                  <div className="w-full flex flex-col justify-start items-start gap-2">
                    <div className="w-full flex justify-start items-center gap-6">
                      <div className="w-full h-36 bg-white rounded-lg flex items-center justify-center">
                        {/* Simulación de código de barras */}
                        <div className="flex gap-1">
                          {Array.from({ length: 30 }).map((_, i) => (
                            <div
                              key={i}
                              className="bg-black"
                              style={{
                                width: `${Math.random() * 4 + 1}px`,
                                height: "120px",
                              }}/>
                          ))}
                        </div>
                      </div>
                    </div>
                    <Body className="w-full text-center text-white select-all">
                      {paymentData.barcode}
                    </Body>
                  </div>

                  {/* Tipo de pago */}
                  <div className="flex flex-col justify-start items-start gap-2">
                    <Subheading className="text-white">Tipo de pago</Subheading>
                    <Body className="text-white">
                      {paymentData.paymentType}
                    </Body>
                  </div>

                  {/* Código de pago */}
                  <div className="flex flex-col justify-start items-start gap-2">
                    <Subheading className="text-white">
                      Código de pago
                    </Subheading>
                    <Body className="text-white select-all">
                      {paymentData.paymentCode}
                    </Body>
                  </div>

                  {/* Monto */}
                  <div className="flex flex-col justify-start items-start gap-2">
                    <Subheading className="text-white">Monto</Subheading>
                    <Body className="text-white">{paymentData.amount}</Body>
                  </div>
                </div>

                {/* Botón de copiar */}
                <button
                  onClick={handleCopyBarcode}
                  className="absolute right-6 bottom-6 h-11 min-h-11 p-2.5 rounded-[99px] border border-cyan-400 flex justify-center items-center gap-3 hover:bg-cyan-400/10 transition-colors"
                  title="Copiar código de barras">
                  <DocumentDuplicateIcon className="w-6 h-6 text-cyan-400" />
                </button>

                {/* Mensaje de copiado */}
                {copied && (
                  <div className="absolute right-6 bottom-20 bg-emerald-500 text-white px-3 py-1 rounded text-sm">
                    ¡Copiado!
                  </div>
                )}
              </div>

              {/* Botones de acción */}
              <div className="w-full flex justify-center items-center">
                <Button
                  onClick={handlePaymentConfirmed}
                  className="w-full max-w-xs h-11 bg-emerald-600 hover:bg-emerald-700 rounded-[99px] px-4 py-2.5">
                  <CheckIcon className="w-5 h-5 mr-2" />
                  Ya pagué - Continuar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
