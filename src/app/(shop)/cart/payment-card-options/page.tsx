"use client"

import { CreditCardIcon, ArrowRightIcon, PlusIcon } from "@heroicons/react/24/outline"
import { PageLayout } from "@/components/templates/PageLayout"
import { SettingsBreadcrumb } from "@/components/organisms/SettingsBreadcrumb"
import { Body, Subheading } from "@/components/atoms/Typography"
import Button from "@/components/atoms/Button"
import { useCart } from "@/contexts/CartContext"
import { useAuth } from "@/contexts/AuthContext"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { getPaymentMethods, PaymentMethod } from "@/services/settings/card"
import Link from "next/link"

export default function PaymentCardOptionsPage() {
  const { getCartTotal } = useCart()
  const { user } = useAuth()
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>("")
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const router = useRouter()

  const subtotal = getCartTotal()
  const total = subtotal

  // Verificar datos del checkout y obtener métodos de pago
  useEffect(() => {
    // Verificar que existan datos del checkout
    const checkoutData = localStorage.getItem('checkoutData')
    if (!checkoutData) {
      router.push('/cart')
      return
    }

    const fetchPaymentMethods = async () => {
      if (!user) return
      
      try {
        setLoading(true)
        setError("")
        const methods = await getPaymentMethods()
        setPaymentMethods(methods)
        
        // Seleccionar el primer método por defecto si existe
        if (methods.length > 0) {
          setSelectedPaymentMethod(methods[0]._id)
        }
      } catch (error: unknown) {
        console.error('Error fetching payment methods:', error)
        setError("Error al cargar los métodos de pago")
      } finally {
        setLoading(false)
      }
    }

    fetchPaymentMethods()
  }, [user, router])

  const getCardDisplayName = (method: PaymentMethod) => {
    const type = method.type === "credit_card" ? "Crédito" : "Débito"
    const provider = method.provider || "Banco"
    const last4 = method.last4 || "****"
    return `${provider} ${type} **** ${last4}`
  }

  const getCardIcon = (type: string) => {
    switch (type) {
      case "credit_card":
      case "debit_card":
        return <CreditCardIcon className="w-4 h-4 text-gray-800" />
      case "paypal":
        return <div className="w-4 h-4 bg-blue-500 rounded flex items-center justify-center">
          <span className="text-white text-xs font-bold">PP</span>
        </div>
      case "oxxo_cash":
        return <div className="w-4 h-4 bg-orange-500 rounded flex items-center justify-center">
          <span className="text-white text-xs font-bold">OX</span>
        </div>
      default:
        return <CreditCardIcon className="w-4 h-4 text-gray-800" />
    }
  }

  const handlePaymentMethodSelect = (methodId: string) => {
    setSelectedPaymentMethod(methodId)
  }

  const handleContinue = () => {
    // Validar que se haya seleccionado un método de pago
    if (!selectedPaymentMethod) {
      alert("Debes seleccionar un método de pago para continuar")
      return
    }

    // Obtener datos existentes del checkout
    const existingCheckoutData = localStorage.getItem('checkoutData')
    if (!existingCheckoutData) {
      alert("Error: No se encontraron datos del carrito")
      router.push('/cart')
      return
    }

    const checkoutData = JSON.parse(existingCheckoutData)

    // Preparar datos del método de pago
    let paymentMethodData
    
    if (selectedPaymentMethod === "cash") {
      // Pago en efectivo/puntos de pago
      paymentMethodData = {
        type: "oxxo_cash" as const,
        provider: "OXXO"
      }
    } else {
      // Pago con tarjeta guardada
      const selectedMethod = paymentMethods.find(method => method._id === selectedPaymentMethod)
      if (!selectedMethod) {
        alert("Error: Método de pago no válido")
        return
      }
      
      paymentMethodData = {
        type: selectedMethod.type,
        provider: selectedMethod.provider,
        last4: selectedMethod.last4,
        methodId: selectedMethod._id
      }
    }

    // Agregar datos del método de pago al checkoutData
    const updatedCheckoutData = {
      ...checkoutData,
      paymentMethod: paymentMethodData,
      timestamp: Date.now()
    }

    // Guardar datos actualizados en localStorage
    localStorage.setItem('checkoutData', JSON.stringify(updatedCheckoutData))

    // Lógica para continuar con el método de pago seleccionado
    if (selectedPaymentMethod === "cash") {
      // Redirigir a página de puntos de pago
      router.push('/cart/payment-points')
    } else {
      // Procesar pago con tarjeta - ir a mensualidades primero
      router.push('/cart/payment-options')
    }
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
          {/* Left Column: Payment Methods */}
          <div className="w-full lg:w-[847px] space-y-6">
            {/* Error Message */}
            {error && (
              <div className="p-3 bg-red-500/20 border border-red-500 rounded-lg">
                <Body className="text-red-400">{error}</Body>
              </div>
            )}

            {loading ? (
              <div className="text-center py-8">
                <Body className="text-white">Cargando métodos de pago...</Body>
              </div>
            ) : (
              <>
                {/* Efectivo en puntos de pago - Mostrar siempre primero */}
                <div className="p-6 bg-gray rounded-lg">
                  <div 
                    className="flex items-center gap-4 cursor-pointer"
                    onClick={() => handlePaymentMethodSelect("cash")}
                  >
                    <div className={`w-5 h-5 p-2.5 rounded-[99px] border border-cyan-400 flex justify-center items-center ${
                      selectedPaymentMethod === "cash" ? "bg-cyan-400" : ""
                    }`}>
                      {selectedPaymentMethod === "cash" && (
                        <div className="w-3.5 h-3.5 bg-cyan-400 rounded-full" />
                      )}
                    </div>
                    <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-lg">
                      💵
                    </div>
                    <div className="flex flex-col gap-1">
                      <Body className="text-white text-xl">Efectivo en puntos de pago</Body>
                      <Body className="text-white text-sm">BBVA Bancomer, 7-Eleven, Kiosko, Soriana y otros.</Body>
                    </div>
                  </div>
                </div>

                {paymentMethods.length === 0 ? (
                  <div className="text-center py-8">
                    <CreditCardIcon className="w-16 h-16 text-zinc-600 mx-auto mb-4" />
                    <Body className="text-white text-xl mb-2">No tienes métodos de pago guardados</Body>
                    <Body className="text-zinc-400 mb-4">Agrega una tarjeta para realizar compras más rápido</Body>
                    <Link href="/settings/cards">
                      <Button className="flex items-center gap-2">
                        <PlusIcon className="w-4 h-4" />
                        Agregar tarjeta
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <>
                    {/* Tarjetas guardadas */}
                    <div className="p-6 bg-gray rounded-lg space-y-6">
                      {paymentMethods.map((method, index) => (
                        <div key={method._id}>
                          <div 
                            className="flex items-center gap-4 cursor-pointer"
                            onClick={() => handlePaymentMethodSelect(method._id)}
                          >
                            <div className={`w-5 h-5 p-2.5 rounded-[99px] border border-cyan-400 flex justify-center items-center ${
                              selectedPaymentMethod === method._id ? "bg-cyan-400" : ""
                            }`}>
                              {selectedPaymentMethod === method._id && (
                                <div className="w-3.5 h-3.5 bg-cyan-400 rounded-full" />
                              )}
                            </div>
                            <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                              {getCardIcon(method.type)}
                            </div>
                            <div className="flex flex-col gap-1">
                              <Body className="text-white text-xl">{getCardDisplayName(method)}</Body>
                              {method.expiration && (
                                <Body className="text-zinc-400 text-sm">
                                  Vence: {method.expiration}
                                </Body>
                              )}
                            </div>
                          </div>
                          {index < paymentMethods.length - 1 && (
                            <div className="h-px bg-white/20 my-6" />
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Opción para agregar nueva tarjeta */}
                    <div className="p-6 bg-gray rounded-lg">
                      <Link href="/settings/cards">
                        <div className="flex items-center gap-4 cursor-pointer">
                          <div className="w-5 h-5 p-2.5 rounded-[99px] border border-zinc-600 flex justify-center items-center">
                            <PlusIcon className="w-4 h-4 text-zinc-400" />
                          </div>
                          <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                            <CreditCardIcon className="w-4 h-4 text-gray-800" />
                          </div>
                          <Body className="text-white text-xl">Agregar nueva tarjeta</Body>
                        </div>
                      </Link>
                    </div>
                  </>
                )}
              </>
            )}

            {/* Continue Button */}
            {!loading && (
              <div className="flex justify-end">
                <Button 
                  onClick={handleContinue}
                  className="bg-primary-600 hover:bg-primary-700"
                  disabled={!selectedPaymentMethod}
                >
                  Continuar
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </Button>
              </div>
            )}
          </div>
          
          {/* Right Column: Purchase Summary */}
          <div className="flex-1 w-full lg:w-auto">
            <div className="p-6 bg-gray rounded-lg space-y-6">
              <Subheading className="text-white">Resumen de la compra</Subheading>
              <div className="h-px bg-white/20"></div>
              <div className="flex justify-between items-center">
                <Body className="text-white text-xl">Producto</Body>
                <Body className="text-white text-xl">${subtotal.toLocaleString()}</Body>
              </div>
              <div className="flex justify-between items-center">
                <Body className="text-white text-xl">Envío</Body>
                <Body className="text-emerald-400 text-xl">Gratis</Body>
              </div>
              <div className="h-px bg-white/20"></div>
              <div className="flex justify-between items-center">
                <Body className="text-white text-xl">Total</Body>
                <Subheading className="text-white text-xl">${total.toLocaleString()}</Subheading>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}