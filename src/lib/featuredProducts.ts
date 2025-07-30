export interface Product {
  id: number
  name: string
  rating: number
  reviews: number
  price: number
  originalPrice?: number
  discount?: number
  image: string
  badge?: string
}

// Productos destacados con ofertas y nuevos lanzamientos
export const featuredProducts: Product[] = [
  {
    id: 1,
    name: 'Monitor Samsung 47"',
    rating: 4.8,
    reviews: 740,
    price: 2449,
    originalPrice: 2899,
    discount: 15,
    image: "/placeholder.svg?height=200&width=200",
    badge: "Oferta",
  },
  {
    id: 2,
    name: "Teclado Mecánico RGB",
    rating: 4.9,
    reviews: 1240,
    price: 899,
    image: "/placeholder.svg?height=200&width=200",
    badge: "Nuevo",
  },
  {
    id: 3,
    name: "Mouse Gaming Pro",
    rating: 4.7,
    reviews: 890,
    price: 599,
    originalPrice: 799,
    discount: 25,
    image: "/placeholder.svg?height=200&width=200",
    badge: "Oferta",
  },
  {
    id: 4,
    name: "Auriculares Gaming",
    rating: 4.6,
    reviews: 650,
    price: 1299,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 5,
    name: "Tarjeta Gráfica RTX",
    rating: 4.9,
    reviews: 2100,
    price: 15999,
    image: "/placeholder.svg?height=200&width=200",
    badge: "Popular",
  },
  {
    id: 6,
    name: "Procesador Intel i9",
    rating: 4.8,
    reviews: 1560,
    price: 12999,
    image: "/placeholder.svg?height=200&width=200",
  },
] 