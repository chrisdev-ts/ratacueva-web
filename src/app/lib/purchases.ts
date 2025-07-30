// Datos de ejemplo para compras - reemplazar con tus llamadas a la API
export interface PurchaseItem {
  id: number
  status: "Entregado" | "En camino" | "Cancelado"
  deliveryDate: string
  returnPolicy: string
  description: string
  imageUrl: string
  price?: number
  quantity?: number
  orderNumber?: string
}

export interface PurchaseGroup {
  date: string
  items: PurchaseItem[]
}

export interface PurchaseFilters {
  status: "Todas" | "Entregado" | "En camino" | "Cancelado"
  dateRange?: [string, string]
  searchQuery?: string
}

// Datos de ejemplo de compras
export const mockPurchaseGroups: PurchaseGroup[] = [
  {
    date: "Comprado el 29 de mayo",
    items: [
      {
        id: 1,
        status: "Entregado",
        deliveryDate: "Llegó el 2 de junio",
        returnPolicy: "Puedes devolverlo hasta el miércoles 2 de julio.",
        description:
          "Auriculares Diadema Gamer Soundcore Q30: Cancelación Híbrida De Ruido Activa, Sonido Hi-res, 40h Autonomía, Modos Multifunción, Almohadillas Suaves, Carga Rápida, Color Negro",
        imageUrl: "/placeholder.svg?height=150&width=150",
        price: 45000,
        quantity: 1,
        orderNumber: "ORD-2024-001",
      },
      {
        id: 2,
        status: "Entregado",
        deliveryDate: "Llegó el 2 de junio",
        returnPolicy: "Puedes devolverlo hasta el miércoles 2 de julio.",
        description:
          "Auriculares Diadema Gamer Soundcore Q30: Cancelación Híbrida De Ruido Activa, Sonido Hi-res, 40h Autonomía, Modos Multifunción, Almohadillas Suaves, Carga Rápida, Color Negro",
        imageUrl: "/placeholder.svg?height=150&width=150",
        price: 45000,
        quantity: 1,
        orderNumber: "ORD-2024-002",
      },
    ],
  },
  {
    date: "Comprado el 15 de abril",
    items: [
      {
        id: 3,
        status: "En camino",
        deliveryDate: "Llega el 20 de abril",
        returnPolicy: "Puedes cancelar hasta el 19 de abril.",
        description:
          "Teclado Mecánico RGB HyperX Alloy Origins Core: Switches HyperX Red, Diseño Compacto TKL, Iluminación RGB Dinámica, Construcción de Aluminio, Cable Desmontable",
        imageUrl: "/placeholder.svg?height=150&width=150",
        price: 85000,
        quantity: 1,
        orderNumber: "ORD-2024-003",
      },
    ],
  },
  {
    date: "Comprado el 10 de marzo",
    items: [
      {
        id: 4,
        status: "Cancelado",
        deliveryDate: "Cancelado el 12 de marzo",
        returnPolicy: "Orden cancelada",
        description:
          "Mouse Gaming Logitech G Pro X Superlight: Ultra Ligero 63g, Sensor HERO 25K, 5 Botones Programables, Diseño Ambidiestro, Cable USB-C, Color Blanco",
        imageUrl: "/placeholder.svg?height=150&width=150",
        price: 65000,
        quantity: 1,
        orderNumber: "ORD-2024-004",
      },
    ],
  },
]

// Funciones de utilidad para compras
export function getPurchaseGroups(): PurchaseGroup[] {
  return mockPurchaseGroups
}

export function getPurchaseById(id: number): PurchaseItem | undefined {
  for (const group of mockPurchaseGroups) {
    const item = group.items.find(item => item.id === id)
    if (item) return item
  }
  return undefined
}

export function filterPurchases(
  purchaseGroups: PurchaseGroup[],
  filters: PurchaseFilters
): PurchaseGroup[] {
  return purchaseGroups
    .map(group => ({
      ...group,
      items: group.items.filter(item => {
        // Filtrar por estado
        if (filters.status !== "Todas" && item.status !== filters.status) {
          return false
        }

        // Filtrar por búsqueda
        if (filters.searchQuery) {
          const query = filters.searchQuery.toLowerCase()
          const matchesDescription = item.description.toLowerCase().includes(query)
          const matchesOrderNumber = item.orderNumber?.toLowerCase().includes(query)
          if (!matchesDescription && !matchesOrderNumber) {
            return false
          }
        }

        return true
      })
    }))
    .filter(group => group.items.length > 0) // Remover grupos vacíos
}

export function getPurchaseStats(purchaseGroups: PurchaseGroup[]) {
  const allItems = purchaseGroups.flatMap(group => group.items)
  
  return {
    total: allItems.length,
    delivered: allItems.filter(item => item.status === "Entregado").length,
    inTransit: allItems.filter(item => item.status === "En camino").length,
    cancelled: allItems.filter(item => item.status === "Cancelado").length,
    totalSpent: allItems
      .filter(item => item.status === "Entregado" && item.price)
      .reduce((sum, item) => sum + (item.price || 0), 0),
  }
}

export function searchPurchases(query: string): PurchaseItem[] {
  const allItems = mockPurchaseGroups.flatMap(group => group.items)
  const searchTerm = query.toLowerCase()
  
  return allItems.filter(item => 
    item.description.toLowerCase().includes(searchTerm) ||
    item.orderNumber?.toLowerCase().includes(searchTerm)
  )
}