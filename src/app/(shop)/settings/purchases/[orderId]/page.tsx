"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { PageLayout } from "@/components/templates/PageLayout"
import { ArrowLeftIcon } from "@heroicons/react/24/outline"
import Button from "@/components/atoms/Button"
import { Body, Subheading } from "@/components/atoms/Typography"
import { SettingsBreadcrumb } from "@/components/organisms/SettingsBreadcrumb"
import { getOrderById, type Order } from "@/services/settings/purchases"
import { useAuth } from "@/contexts/AuthContext"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Address } from "@/services/settings/address"

export default function PurchaseDetailPage() {
  const { user } = useAuth()
  const params = useParams()
  const orderId = params.orderId as string
  
  const [order, setOrder] = useState<Order | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        setLoading(true)
        setError("")
        console.log('Fetching order with ID:', orderId)
        const orderData = await getOrderById(orderId)
        console.log('API Response - Order data:', orderData)
        setOrder(orderData)
      } catch (error: unknown) {
        console.error("Error fetching order:", error)
        setError("Error al cargar los detalles de la compra")
      } finally {
        setLoading(false)
      }
    }

    if (user && orderId) {
      fetchOrder()
    }
  }, [user, orderId])

  const getStatusText = (status: string) => {
    switch (status) {
      case "delivered":
        return "Entregado"
      case "shipped":
        return "En camino"
      case "processing":
        return "Procesando"
      case "pending":
        return "Pendiente"
      case "cancelled":
        return "Cancelado"
      case "refunded":
        return "Reembolsado"
      default:
        return "En proceso"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "text-emerald-400"
      case "shipped":
        return "text-blue-400"
      case "cancelled":
        return "text-red-400"
      case "refunded":
        return "text-purple-400"
      default:
        return "text-yellow-400"
    }
  }

  const formatCurrency = (amount: number, currency: string = "MXN") => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: currency
    }).format(amount)
  }

  const formatDate = (dateString: string) => {
    if (!dateString) return 'Fecha no disponible'
    
    try {
      const date = new Date(dateString)
      if (isNaN(date.getTime())) return 'Fecha inválida'
      
      return date.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    } catch {
      return 'Fecha inválida'
    }
  }

  const formatAddress = (address: Address) => {
    const parts = [
      address.street,
      address.externalNumber && `No. ${address.externalNumber}`,
      address.internalNumber && `Int. ${address.internalNumber}`,
      address.neighborhood,
      address.city,
      address.state,
      address.postalCode,
      address.country
    ].filter(Boolean)
    
    return parts.join(", ")
  }

  if (!mounted || loading) {
    return (
      <PageLayout>
        <div className="pt-8 pb-4">
          <SettingsBreadcrumb
            items={[
              { label: "Configuración", href: "/settings" },
              { label: "Compras", href: "/settings/purchases" },
              { label: "Detalles" },
            ]}
            title="Detalles de la compra"
            color="text-white"
            className="mb-8"
          />
          <div className="text-white text-center">Cargando detalles...</div>
        </div>
      </PageLayout>
    )
  }

  if (error || !order) {
    return (
      <PageLayout>
        <div className="pt-8 pb-4">
          <SettingsBreadcrumb
            items={[
              { label: "Configuración", href: "/settings" },
              { label: "Compras", href: "/settings/purchases" },
              { label: "Detalles" },
            ]}
            title="Detalles de la compra"
            color="text-white"
            className="mb-8"
          />
          <div className="text-red-400 text-center">{error || "No se encontró la compra"}</div>
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout>
      <div className="pt-8 pb-4">
        <SettingsBreadcrumb
          items={[
            { label: "Configuración", href: "/settings" },
            { label: "Compras", href: "/settings/purchases" },
            { label: "Detalles" },
          ]}
          title="Detalles de la compra"
          color="text-white"
          className="mb-8"
        />

        <div className="space-y-6">
          {/* Order Status */}
          <div className="bg-gray rounded-lg p-6">
            <div className="mb-4">
              <Subheading className={`font-bold ${getStatusColor(order.orderStatus)}`}>
                {getStatusText(order.orderStatus)}
              </Subheading>
              <Body className="text-zinc-400">
                Pedido #{order._id ? order._id.slice(-8) : orderId.slice(-8)}
              </Body>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <Body className="text-zinc-400">Fecha del pedido:</Body>
                <Body className="text-white">{order.createdAt ? formatDate(order.createdAt?.toString() || '') : 'Fecha no disponible'}</Body>
              </div>
              {order.estimatedDeliveryDate && (
                <div>
                  <Body className="text-zinc-400">Entrega estimada:</Body>
                  <Body className="text-white">{formatDate(order.estimatedDeliveryDate?.toString() || '')}</Body>
                </div>
              )}

            </div>
          </div>

          {/* Order Items */}
          <div className="bg-gray rounded-lg p-6">
            <Subheading className="text-white mb-4">Productos</Subheading>
            <div className="space-y-4">
              {order.items.map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-zinc-800 rounded-lg">
                  <Image
                    className="h-20 w-20 flex-shrink-0 rounded-md object-cover"
                    src={item.imageUrl || "/placeholder.svg"}
                    alt={item.name}
                    width={80}
                    height={80}
                  />
                  <div className="flex-1">
                    <Body className="text-white font-medium">{item.name}</Body>
                    <Body className="text-zinc-400 text-sm">
                      Cantidad: {item.quantity}
                    </Body>
                    {item.selectedVariation && (
                      <Body className="text-zinc-400 text-sm">
                        Variación: {item.selectedVariation}
                      </Body>
                    )}
                    <Body className="text-emerald-400 font-medium">
                      {formatCurrency(item.priceAtAddition, order.currency)}
                    </Body>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-gray rounded-lg p-6">
            <Subheading className="text-white mb-4">Resumen del pedido</Subheading>
            <div className="space-y-2">
              <div className="flex justify-between">
                <Body className="text-zinc-400">Subtotal:</Body>
                <Body className="text-white">{formatCurrency(order.subtotal, order.currency)}</Body>
              </div>
              <div className="flex justify-between">
                <Body className="text-zinc-400">Envío:</Body>
                <Body className="text-white">{formatCurrency(order.shippingCost, order.currency)}</Body>
              </div>
              <div className="flex justify-between">
                <Body className="text-zinc-400">Impuestos:</Body>
                <Body className="text-white">{formatCurrency(order.taxAmount, order.currency)}</Body>
              </div>
              {order.discountAmount > 0 && (
                <div className="flex justify-between">
                  <Body className="text-zinc-400">Descuento:</Body>
                  <Body className="text-emerald-400">-{formatCurrency(order.discountAmount, order.currency)}</Body>
                </div>
              )}
              <div className="border-t border-zinc-700 pt-2 mt-2">
                <div className="flex justify-between">
                  <Body className="text-white font-bold">Total:</Body>
                  <Body className="text-white font-bold">{formatCurrency(order.totalAmount, order.currency)}</Body>
                </div>
              </div>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="bg-gray rounded-lg p-6">
            <Subheading className="text-white mb-4">Dirección de envío</Subheading>
            <Body className="text-zinc-400">
              {formatAddress(order.shippingAddress as Address)}
            </Body>
          </div>

          {/* Payment Details */}
          <div className="bg-gray rounded-lg p-6">
            <Subheading className="text-white mb-4">Información de pago</Subheading>
            <div className="space-y-2">
              <div className="flex justify-between">
                <Body className="text-zinc-400">Método de pago:</Body>
                <Body className="text-white">
                  {order.paymentDetails.type === "credit_card" && "Tarjeta de crédito"}
                  {order.paymentDetails.type === "debit_card" && "Tarjeta de débito"}
                  {order.paymentDetails.type === "paypal" && "PayPal"}
                  {order.paymentDetails.type === "oxxo_cash" && "OXXO"}
                </Body>
              </div>
              {order.paymentDetails.last4 && (
                <div className="flex justify-between">
                  <Body className="text-zinc-400">Últimos 4 dígitos:</Body>
                  <Body className="text-white">****{order.paymentDetails.last4}</Body>
                </div>
              )}
              {order.paymentDetails.provider && (
                <div className="flex justify-between">
                  <Body className="text-zinc-400">Proveedor:</Body>
                  <Body className="text-white">{order.paymentDetails.provider}</Body>
                </div>
              )}
              <div className="flex justify-between">
                <Body className="text-zinc-400">Estado del pago:</Body>
                <Body className={`font-medium ${
                  order.paymentStatus === "paid" ? "text-emerald-400" : 
                  order.paymentStatus === "failed" ? "text-red-400" : "text-yellow-400"
                }`}>
                  {order.paymentStatus === "paid" && "Pagado"}
                  {order.paymentStatus === "pending" && "Pendiente"}
                  {order.paymentStatus === "failed" && "Fallido"}
                  {order.paymentStatus === "refunded" && "Reembolsado"}
                </Body>
              </div>
            </div>
          </div>
        </div>

        {/* Back to purchases button */}
        <div className="flex justify-end mt-8">
          <Link href="/settings/purchases">
            <Button className="flex items-center gap-2">
              <ArrowLeftIcon className="w-5 h-5" />
              Volver a compras
            </Button>
          </Link>
        </div>
      </div>
    </PageLayout>
  )
} 