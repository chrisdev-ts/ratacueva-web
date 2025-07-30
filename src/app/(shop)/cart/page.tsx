"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Minus, Plus } from "lucide-react"
import { mockCartItems, type CartItem } from "@/app/lib/data"
import { PageLayout } from "@/components/templates/PageLayout"
import { SettingsBreadcrumb } from "@/components/organisms/SettingsBreadcrumb"
import { Body, Subheading } from "@/components/atoms/Typography"
import Button from "@/components/atoms/Button"

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>(mockCartItems)

  const handleQuantityChange = (productId: number, delta: number) => {
    setCartItems(
      (prevItems) =>
        prevItems
          .map((item) =>
            item.product.id === productId ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item,
          )
          .filter((item) => item.quantity > 0), // Remove if quantity becomes 0
    )
  }

  const handleRemoveItem = (productId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.product.id !== productId))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  const shippingCost = 90 // Example fixed shipping cost
  const total = subtotal + shippingCost

  return (
    <PageLayout>
      <div className="pt-8 pb-4">
        <SettingsBreadcrumb
          items={[
            { label: "Carrito" },
          ]}
          title="Productos en tu carrito"
          color="text-white"
          className="mb-8"
        />
        
        <div className="flex flex-col lg:flex-row justify-start items-start gap-8">
          {/* Left Column: Cart Items */}
          <div className="w-full lg:w-[847px] space-y-6">
            {cartItems.length === 0 ? (
              <div className="p-6 bg-gray rounded-lg">
                <Body className="text-white text-center text-xl">
                  Tu carrito está vacío. ¡Añade algunos productos!
                </Body>
              </div>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div
                    key={item.product.id}
                    className="p-6 bg-gray rounded-lg flex flex-col sm:flex-row justify-start items-center gap-6"
                  >
                    <Image
                      className="w-24 h-24 object-contain"
                      src={item.product.image || "/placeholder.svg"}
                      alt={item.product.name}
                      width={96}
                      height={96}
                    />
                    <div className="flex-1 flex flex-col sm:flex-row justify-between items-start w-full">
                      <div className="flex-1 flex flex-col justify-center items-start gap-4 mb-4 sm:mb-0">
                        <Subheading className="text-white">
                          {item.product.name}
                        </Subheading>
                        <div className="flex justify-start items-center gap-3">
                          <Button variant="outlineSecondary">
                            Favoritos
                          </Button>
                          <Button 
                            variant="outlineSecondary" 
                            onClick={() => handleRemoveItem(item.product.id)}
                          >
                            Eliminar
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col justify-between items-end gap-4 sm:gap-0">
                        <Body className="text-white text-xl font-medium">
                          ₡{(item.product.price * item.quantity).toLocaleString()}
                        </Body>
                        <div className="rounded-[999px] outline outline-2 outline-offset-[-2px] outline-cyan-400 inline-flex justify-start items-start">
                          <button
                            onClick={() => handleQuantityChange(item.product.id, -1)}
                            className="h-11 min-h-11 p-2.5 rounded-tl-[99px] rounded-bl-[99px] flex justify-center items-center gap-3 text-cyan-400 hover:bg-cyan-400 hover:text-white transition-colors"
                            aria-label="Disminuir cantidad"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <div className="h-11 min-h-11 p-2.5 flex justify-center items-center gap-3">
                            <div className="justify-start text-cyan-400 text-base font-bold font-['Inter']">
                              {item.quantity}
                            </div>
                          </div>
                          <button
                            onClick={() => handleQuantityChange(item.product.id, 1)}
                            className="h-11 min-h-11 p-2.5 rounded-tr-[99px] rounded-br-[99px] flex justify-center items-center gap-3 text-cyan-400 hover:bg-cyan-400 hover:text-white transition-colors"
                            aria-label="Aumentar cantidad"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Right Column: Purchase Summary */}
          <div className="flex-1 w-full lg:w-auto">
            <div className="p-6 bg-gray rounded-lg space-y-6">
              <Subheading className="text-white">Resumen de la compra</Subheading>
              <div className="h-px bg-white/20"></div>
              <div className="flex justify-between items-center">
                <Body className="text-white">Producto</Body>
                <Body className="text-white">₡{subtotal.toLocaleString()}</Body>
              </div>
              <div className="flex justify-between items-center">
                <Body className="text-white">Envío</Body>
                <Body className="text-white">₡{shippingCost.toLocaleString()}</Body>
              </div>
              <div className="h-px bg-white/20"></div>
              <div className="flex justify-between items-center">
                <Body className="text-white">Total</Body>
                <Subheading className="text-white">₡{total.toLocaleString()}</Subheading>
              </div>
              <Link href="/checkout" className="w-full">
                <Button className="w-full">
                  Comprar ahora
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
