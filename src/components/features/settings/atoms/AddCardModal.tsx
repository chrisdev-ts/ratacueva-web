"use client"

import { useState } from "react"
import { XMarkIcon, CheckIcon, XCircleIcon } from "@heroicons/react/24/outline"
import { Body, Subheading, BodySmall } from "@/components/atoms/Typography"
import Button from "@/components/atoms/Button"
import { addPaymentMethod } from "@/services/settings/card"

interface AddCardModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
}

export default function AddCardModal({ isOpen, onClose, onSuccess }: AddCardModalProps) {
  const [cardData, setCardData] = useState({
    type: "credit_card" as "credit_card" | "debit_card" | "paypal" | "oxxo_cash",
    last4: "",
    provider: "",
    expiration: ""
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleInputChange = (field: string, value: string) => {
    setCardData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      setLoading(true)
      setError("")
      
      await addPaymentMethod(cardData)
      onSuccess()
      onClose()
      
      // Reset form
      setCardData({
        type: "credit_card",
        last4: "",
        provider: "",
        expiration: ""
      })
    } catch (error: unknown) {
      console.error('Error adding payment method:', error)
      const errorMessage = error && typeof error === 'object' && 'response' in error 
        ? (error.response as { data?: { message?: string } })?.data?.message || "Error al agregar la tarjeta"
        : "Error al agregar la tarjeta"
      setError(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  const isFormValid = cardData.last4 && cardData.provider && cardData.expiration

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-gray rounded-lg p-6 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <Subheading className="text-white">Agregar nueva tarjeta</Subheading>
          <button
            onClick={onClose}
            className="text-white hover:text-zinc-400 transition-colors"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 bg-red-500/20 border border-red-500 rounded-lg">
            <Body className="text-red-400">{error}</Body>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Payment Type */}
          <div className="space-y-4">
            <BodySmall as="label" className="text-white text-base font-medium block">
              Tipo de método de pago
            </BodySmall>
            <select
              value={cardData.type}
              onChange={(e) => handleInputChange('type', e.target.value)}
              className="w-full h-11 px-4 py-3 bg-gray rounded-lg border border-neutral-600 text-white focus:outline-none focus:border-cyan-400"
            >
              <option value="credit_card">Tarjeta de Crédito</option>
              <option value="debit_card">Tarjeta de Débito</option>
              <option value="paypal">PayPal</option>
              <option value="oxxo_cash">OXXO</option>
            </select>
          </div>

          {/* Last 4 Digits */}
          <div className="space-y-4">
            <BodySmall as="label" htmlFor="last4" className="text-white text-base font-medium block">
              Últimos 4 dígitos
            </BodySmall>
            <input
              id="last4"
              type="text"
              value={cardData.last4}
              onChange={(e) => handleInputChange('last4', e.target.value)}
              className="w-full h-11 px-4 py-3 bg-gray rounded-lg border border-neutral-600 text-white focus:outline-none focus:border-cyan-400"
              placeholder="1234"
              maxLength={4}
              required
            />
          </div>

          {/* Provider/Bank */}
          <div className="space-y-4">
            <BodySmall as="label" htmlFor="provider" className="text-white text-base font-medium block">
              Banco o proveedor
            </BodySmall>
            <input
              id="provider"
              type="text"
              value={cardData.provider}
              onChange={(e) => handleInputChange('provider', e.target.value)}
              className="w-full h-11 px-4 py-3 bg-gray rounded-lg border border-neutral-600 text-white focus:outline-none focus:border-cyan-400"
              placeholder="BBVA, Banamex, etc."
              required
            />
          </div>

          {/* Expiration Date */}
          <div className="space-y-4">
            <BodySmall as="label" htmlFor="expiration" className="text-white text-base font-medium block">
              Fecha de vencimiento
            </BodySmall>
            <div className="space-y-1">
              <input
                id="expiration"
                type="text"
                value={cardData.expiration}
                onChange={(e) => handleInputChange('expiration', e.target.value)}
                className="w-full h-11 px-4 py-3 bg-gray rounded-lg border border-neutral-600 text-white focus:outline-none focus:border-cyan-400"
                placeholder="MM/YY"
                required
              />
              <BodySmall className="text-white text-xs">Formato: MM/YY (ej: 12/25)</BodySmall>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 pt-4">
            <Button
              type="button"
              variant="primary"
              onClick={onClose}
              disabled={loading}
            >
              <XCircleIcon className="w-5 h-5 mr-2" />
              Cancelar
            </Button>
            <Button
              type="submit"
              variant="primary"
              disabled={!isFormValid || loading}
            >
              <CheckIcon className="w-5 h-5 mr-2" />
              {loading ? "Agregando..." : "Agregar tarjeta"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
} 