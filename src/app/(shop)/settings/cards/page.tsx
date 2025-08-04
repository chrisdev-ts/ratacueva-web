"use client"

import { PageLayout } from "@/components/templates/PageLayout"
import { CreditCardIcon, TrashIcon, StarIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
import { SettingsBreadcrumb } from "@/components/organisms/SettingsBreadcrumb";
import { Body, Subheading } from "@/components/atoms/Typography";
import Button from "@/components/atoms/Button"

type Card = {
  id: number
  type: string
  lastFour: string
  expiry: string
  bank: string
  isDefault: boolean
}

export default function CardsPage() {
  const [savedCards, setSavedCards] = useState<Card[]>([
    {
      id: 1,
      type: "Visa",
      lastFour: "5768",
      expiry: "09/2026",
      bank: "BBVA",
      isDefault: true,
    },
    {
      id: 2,
      type: "Mastercard",
      lastFour: "6295",
      expiry: "09/2026",
      bank: "Banco Azteca",
      isDefault: false,
    },
    {
      id: 3,
      type: "American Express",
      lastFour: "3832",
      expiry: "03/2027",
      bank: "Bancoppel",
      isDefault: false,
    },
  ])

  const handleDeleteCard = (id: number) => {
    setSavedCards((prevCards) => prevCards.filter((card) => card.id !== id))
  }

  const handleSetDefault = (id: number) => {
    setSavedCards((prevCards) =>
      prevCards.map((card) => ({
        ...card,
        isDefault: card.id === id,
      })),
    )
  }

  return (
    <PageLayout>
      <div className="pt-8 pb-4">
        <SettingsBreadcrumb
          items={[
            { label: "Configuración", href: "/settings" },
            { label: "Tarjetas" },
          ]}
          title="Tarjetas"
          color="text-white"
          className="mb-8"
        />
        <div className="space-y-6">
          <div className="space-y-4">
            {savedCards.length === 0 ? (
              <Body className="text-white text-center text-xl w-full py-8">No tienes tarjetas guardadas.</Body>
            ) : (
              savedCards.map((card) => (
                <div key={card.id} className="p-6 bg-gray rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 relative bg-white rounded-[99px] flex items-center justify-center flex-shrink-0">
                        <CreditCardIcon className="w-8 h-8 text-gray" />
                      </div>
                      <div>
                        <Subheading className="text-white font-medium">
                          {card.type} terminada en {card.lastFour}
                        </Subheading>
                        <Body className="text-placeholder text-sm">{card.bank}</Body>
                        <Body className="text-placeholder text-sm">
                          Vencimiento: {card.expiry}
                          {card.isDefault && (
                            <span className="ml-2 px-2 py-1 bg-primary text-white text-xs rounded-full">
                              Predeterminada
                            </span>
                          )}
                        </Body>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch gap-2">
                      {!card.isDefault && (
                        <Button className="min-w-[160px]"onClick={() => handleSetDefault(card.id)}>
                          <StarIcon className="w-5 h-5 mr-2" />Predeterminar
                        </Button>
                      )}
                      <Button className="min-w-[160px]" onClick={() => handleDeleteCard(card.id)}>
                        <TrashIcon className="w-5 h-5 mr-2" />Eliminar
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  )
}