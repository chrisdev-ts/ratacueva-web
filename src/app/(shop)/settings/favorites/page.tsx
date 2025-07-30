"use client"

import Image from "next/image"
import { useState } from "react"
import { mockFavoriteItems, type FavoriteItem } from "@/app/lib/data"
import { PageLayout } from "@/components/templates/PageLayout"
import { SettingsBreadcrumb } from "@/components/organisms/SettingsBreadcrumb";
import { Body, Subheading } from "@/components/atoms/Typography";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

export default function FavoritesPage() {
  const [favoriteItems, setFavoriteItems] = useState<FavoriteItem[]>(mockFavoriteItems)

  const handleRemoveFavorite = (productId: number) => {
    setFavoriteItems((prevItems) => prevItems.filter((item) => item.product.id !== productId))
  }

  return (
    <PageLayout>
      <div className="pt-8 pb-4">
        <SettingsBreadcrumb
          items={[
            { label: "Configuración", href: "/settings" },
            { label: "Favoritos" },
          ]}
          title="Favoritos"
          color="text-white"
          className="mb-8"
        />
        <div className="space-y-6">
          {favoriteItems.length === 0 ? (
            <div className="p-6 bg-zinc-800 rounded-lg">
              <Body className="text-white text-center text-xl">
                No tienes productos favoritos. ¡Añade algunos!
              </Body>
            </div>
          ) : (
            <div className="space-y-4">
              {favoriteItems.map((item) => (
                <div
                  key={item.product.id}
                  className="p-6 bg-zinc-800 rounded-lg flex flex-col sm:flex-row justify-start items-center gap-6"
                >
                  <Image
                    className="w-24 h-24 object-contain"
                    src={item.product.image || "/placeholder.svg?height=100&width=100"}
                    alt={item.product.name}
                    width={96}
                    height={96}
                  />
                  <div className="flex-1 flex flex-col sm:flex-row justify-between items-start w-full">
                    <div className="flex-1 flex flex-col justify-center items-start gap-4 mb-4 sm:mb-0">
                      <Subheading className="text-white hover:underline cursor-pointer">
                        {item.product.name}
                      </Subheading>
                      <Body className="text-white text-xl font-medium">
                        ₡{item.product.price.toLocaleString()}
                      </Body>
                    </div>
                    <div className="flex justify-start items-start gap-3">
                      <Button onClick={() => handleRemoveFavorite(item.product.id)} className="rounded-[99px] min-w-[160px] bg-pink-600 hover:bg-pink-700 transition-colors text-white">
                        <Trash2 className="w-5 h-5" />Eliminar
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  )
}