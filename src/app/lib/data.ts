// Datos de ejemplo - reemplazar con tus llamadas a la API
export const mockProducts = [
    {
      id: 1,
      name: "NVIDIA GeForce RTX 4080 Gaming Graphics Card",
      price: 899000,
      originalPrice: 1200000,
      image: "/placeholder.svg?height=200&width=200&text=RTX 4080",
      rating: 4.8,
      reviews: 156,
      shipping: "Envío gratis",
      discount: 25,
      category: "Tarjetas Gráficas",
      brand: "NVIDIA",
      location: "San José",
      description:
        "La NVIDIA GeForce RTX 4080 es una tarjeta gráfica de alto rendimiento diseñada para los entusiastas de los videojuegos y creadores de contenido. Ofrece gráficos ultrarrealistas con trazado de rayos, rendimiento impulsado por IA con DLSS 3 y baja latencia para una experiencia de juego inmersiva. Ideal para resoluciones 4K y altas tasas de refresco.",
      specs: [
        { label: "GPU", value: "NVIDIA GeForce RTX 4080" },
        { label: "Memoria", value: "16GB GDDR6X" },
        { label: "Interfaz", value: "PCI Express 4.0" },
        { label: "Conectividad", value: "HDMI 2.1, DisplayPort 1.4a" },
      ],
      images: [
        "/placeholder.svg?height=150&width=150&text=RTX 4080 Front",
        "/placeholder.svg?height=150&width=150&text=RTX 4080 Side",
        "/placeholder.svg?height=150&width=150&text=RTX 4080 Back",
        "/placeholder.svg?height=150&width=150&text=RTX 4080 Box",
      ],
    },
    {
      id: 2,
      name: "AMD Ryzen 9 7900X Processor",
      price: 450000,
      image: "/placeholder.svg?height=200&width=200&text=Ryzen 9",
      rating: 4.7,
      reviews: 89,
      shipping: "Envío gratis",
      category: "Procesadores",
      brand: "AMD",
      location: "Cartago",
      description:
        "El procesador AMD Ryzen 9 7900X ofrece un rendimiento excepcional para juegos, creación de contenido y multitarea intensiva. Con la arquitectura Zen 4, proporciona velocidades de reloj impresionantes y una eficiencia energética mejorada. Es la elección perfecta para construir una estación de trabajo o un PC gaming de alta gama.",
      specs: [
        { label: "Núcleos/Hilos", value: "12 Núcleos / 24 Hilos" },
        { label: "Frecuencia Base", value: "4.7 GHz" },
        { label: "Frecuencia Max. Boost", value: "5.6 GHz" },
        { label: "Socket", value: "AM5" },
      ],
      images: [
        "/placeholder.svg?height=150&width=150&text=Ryzen 9 Front",
        "/placeholder.svg?height=150&width=150&text=Ryzen 9 Box",
      ],
    },
    {
      id: 3,
      name: "Corsair Vengeance RGB Pro 32GB DDR4",
      price: 180000,
      originalPrice: 220000,
      image: "/placeholder.svg?height=200&width=200&text=RAM 32GB",
      rating: 4.9,
      reviews: 234,
      shipping: "Envío gratis",
      discount: 18,
      category: "Memoria RAM",
      brand: "Corsair",
      location: "Alajuela",
      description:
        "La memoria Corsair Vengeance RGB Pro de 32GB (2x16GB) DDR4 a 3600MHz ofrece un rendimiento excepcional y una estética impresionante con iluminación RGB dinámica. Ideal para sistemas gaming y estaciones de trabajo que requieren alta velocidad y capacidad de respuesta.",
      specs: [
        { label: "Capacidad", value: "32GB (2x16GB)" },
        { label: "Tipo", value: "DDR4" },
        { label: "Velocidad", value: "3600MHz" },
        { label: "Latencia", value: "CL18" },
      ],
      images: [
        "/placeholder.svg?height=150&width=150&text=RAM Module 1",
        "/placeholder.svg?height=150&width=150&text=RAM Module 2",
      ],
    },
    {
      id: 4,
      name: "ASUS ROG Strix Gaming Motherboard",
      price: 320000,
      image: "/placeholder.svg?height=200&width=200&text=ROG Strix",
      rating: 4.6,
      reviews: 67,
      category: "Tarjetas Madre",
      brand: "ASUS",
      location: "San José",
      description:
        "La placa base ASUS ROG Strix es la base perfecta para tu PC gaming de alto rendimiento. Ofrece características avanzadas para overclocking, conectividad de última generación y un diseño robusto para una durabilidad excepcional. Compatible con los últimos procesadores y componentes.",
      specs: [
        { label: "Chipset", value: "Intel Z790" },
        { label: "Socket", value: "LGA 1700" },
        { label: "Formato", value: "ATX" },
        { label: "Conectividad", value: "Wi-Fi 6E, 2.5Gb Ethernet" },
      ],
      images: [
        "/placeholder.svg?height=150&width=150&text=Motherboard Top",
        "/placeholder.svg?height=150&width=150&text=Motherboard Angle",
      ],
    },
    {
      id: 5,
      name: "Samsung 980 PRO 1TB NVMe SSD",
      price: 95000,
      originalPrice: 120000,
      image: "/placeholder.svg?height=200&width=200&text=SSD 1TB",
      rating: 4.8,
      reviews: 145,
      shipping: "Envío gratis",
      discount: 21,
      category: "Almacenamiento",
      brand: "Samsung",
      location: "Heredia",
      description:
        "El SSD Samsung 980 PRO de 1TB NVMe ofrece velocidades de lectura y escritura ultrarrápidas, llevando el rendimiento de tu PC al siguiente nivel. Ideal para juegos, edición de video y aplicaciones exigentes. Experimenta tiempos de carga reducidos y una multitarea fluida.",
      specs: [
        { label: "Capacidad", value: "1TB" },
        { label: "Interfaz", value: "PCIe Gen4 x4, NVMe 1.3c" },
        { label: "Velocidad Lectura", value: "Hasta 7,000 MB/s" },
        { label: "Velocidad Escritura", value: "Hasta 5,000 MB/s" },
      ],
      images: [
        "/placeholder.svg?height=150&width=150&text=SSD Front",
        "/placeholder.svg?height=150&width=150&text=SSD Back",
      ],
    },
    {
      id: 6,
      name: "Logitech G Pro X Mechanical Keyboard",
      price: 85000,
      image: "/placeholder.svg?height=200&width=200&text=G Pro X",
      rating: 4.7,
      reviews: 198,
      category: "Periféricos",
      brand: "Logitech",
      location: "San José",
      description:
        "El teclado mecánico Logitech G Pro X es una herramienta esencial para gamers profesionales. Con interruptores intercambiables, diseño compacto y durabilidad excepcional, te ofrece la ventaja competitiva que necesitas. Personaliza tu experiencia de juego con la iluminación RGB LIGHTSYNC.",
      specs: [
        { label: "Tipo de Switch", value: "GX Blue Clicky (intercambiable)" },
        { label: "Diseño", value: "Tenkeyless (TKL)" },
        { label: "Iluminación", value: "RGB LIGHTSYNC" },
        { label: "Conectividad", value: "USB" },
      ],
      images: [
        "/placeholder.svg?height=150&width=150&text=Keyboard Top",
        "/placeholder.svg?height=150&width=150&text=Keyboard Angle",
      ],
    },
    {
      id: 7,
      name: "Monitor Samsung 47”",
      rating: 4.8,
      reviews: 740,
      price: 2449,
      originalPrice: 2899,
      discount: 15,
      image: "/placeholder.svg?height=200&width=200&text=Monitor 47",
      badge: "Oferta",
      category: "Monitores",
      brand: "Samsung",
      location: "San José",
      description:
        "El Monitor Samsung de 47 pulgadas ofrece una experiencia visual inmersiva con colores vibrantes y detalles nítidos. Ideal para gaming, trabajo y entretenimiento, su gran tamaño y alta resolución te sumergirán en cada escena. Cuenta con tecnología de protección ocular para largas sesiones de uso.",
      specs: [
        { label: "Tamaño", value: "47 pulgadas" },
        { label: "Resolución", value: "3840x2160 (4K)" },
        { label: "Tasa de Refresco", value: "144Hz" },
        { label: "Tiempo de Respuesta", value: "1ms" },
      ],
      images: [
        "/placeholder.svg?height=150&width=150&text=Monitor Front",
        "/placeholder.svg?height=150&width=150&text=Monitor Side",
        "/placeholder.svg?height=150&width=150&text=Monitor Back",
        "/placeholder.svg?height=150&width=150&text=Monitor Stand",
      ],
    },
  ]
  
  export const searchSuggestions = [
    "RTX 4080",
    "Ryzen 9",
    "Gaming keyboard",
    "32GB RAM",
    "NVMe SSD",
    "Gaming mouse",
    "Motherboard ASUS",
    "Monitor 4K",
    "NVIDIA GeForce RTX 4080",
    "AMD Ryzen 9",
    "Corsair Vengeance RGB Pro 32GB DDR4",
    "ASUS ROG Strix Gaming Motherboard",
    "Samsung 980 PRO 1TB NVMe SSD",
    "Logitech G Pro X Mechanical Keyboard",
    "Monitor 47",
    "Monitor 1080p",
    "Monitor 1ms",
    "Monitor 4K",
    "Monitor 144Hz",
    "Monitor 1080p",
    "Monitor 1ms",
  ]
  
  export interface Product {
    id: number
    name: string
    price: number
    originalPrice?: number
    image: string
    rating: number
    reviews: number
    shipping?: string
    discount?: number
    category: string
    brand: string
    location: string
    description?: string
    specs?: { label: string; value: string }[]
    images?: string[]
  }
  
  export interface Filters {
    priceRange: [number, number]
    categories: string[]
    brands: string[]
    locations: string[]
    freeShipping: boolean
    withDiscount: boolean
  }
  
  export interface Review {
    id: number
    author: string
    date: string
    content: string
    rating: number
    upvotes: number
    downvotes: number
  }

  export interface CartItem {
    product: Product
    quantity: number
  }

  export interface FavoriteItem {
    product: Product
  }

  export const mockCartItems: CartItem[] = [
    {
      product: mockProducts[0],
      quantity: 1,
    },
    {
      product: mockProducts[1],
      quantity: 2,
    },
  ]

  export const mockFavoriteItems: FavoriteItem[] = [
    {
      product: mockProducts[2],
    },
    {
      product: mockProducts[3],
    },
    {
      product: mockProducts[4],
    },
  ]
  
  export const mockReviews: Review[] = [
    {
      id: 1,
      author: "Rock Punk",
      date: "03/07/2024",
      content:
        "Desde pequeño siempre me gustó este juego, buscaba maneras de jugarlo. Ahora que he crecido pude comprarlo y es algo hermoso y satisfactorio, se los recomiendo.",
      rating: 5,
      upvotes: 45,
      downvotes: 2,
    },
    {
      id: 2,
      author: "GamerPro",
      date: "01/07/2024",
      content:
        "Excelente monitor, la calidad de imagen es impresionante y la tasa de refresco es perfecta para mis juegos. ¡Totalmente recomendado!",
      rating: 5,
      upvotes: 30,
      downvotes: 1,
    },
    {
      id: 3,
      author: "TechLover",
      date: "28/06/2024",
      content:
        "Muy buen producto, cumple con lo prometido. El tamaño es ideal para mi setup y los colores son muy vivos. Un poco caro, pero vale la pena.",
      rating: 4,
      upvotes: 15,
      downvotes: 0,
    },
  ]
  
  export function getProductById(id: number): Product | undefined {
    return mockProducts.find((product) => product.id === id)
  }
  
  export function getRelatedProducts(currentProductId: number, category: string): Product[] {
    // Filtra productos de la misma categoría, excluyendo el producto actual
    const related = mockProducts.filter((product) => product.category === category && product.id !== currentProductId)
    // Devuelve un máximo de 4 productos relacionados
    return related.slice(0, 4)
  }
  
  export function getProductReviews(productId: number): Review[] {
    console.log('Getting reviews for product ID:', productId)
    // En un caso real, esto filtraría por productId.
    // Para el mock, devolvemos todas las reseñas o un subconjunto.
    return mockReviews.slice(0, 3)
  }
  