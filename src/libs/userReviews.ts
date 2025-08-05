export interface Review {
  id: number
  name: string
  platform: string
  stars: number
  text: string
}

export const userReviews: Review[] = [
  {
    id: 1,
    name: "Carlos Rodríguez",
    platform: "Amazon",
    stars: 5,
    text: "La RTX 4090 es una bestia absoluta! Juego en 4K con ray tracing activado y mantiene 120+ FPS. El precio es alto pero vale cada peso."
  },
  {
    id: 2,
    name: "Ana Martínez",
    platform: "Newegg",
    stars: 5,
    text: "El Ryzen 9 7950X es increíble para mi trabajo de edición de video. Los 16 núcleos hacen que el renderizado sea súper rápido."
  },
  {
    id: 3,
    name: "Luis Hernández",
    platform: "Best Buy",
    stars: 4,
    text: "El Samsung 980 Pro es súper rápido. Mi PC arranca en segundos y los juegos cargan instantáneamente. Excelente relación calidad-precio."
  },
  {
    id: 4,
    name: "Sofia López",
    platform: "Micro Center",
    stars: 5,
    text: "La RAM Corsair DDR5 funciona perfectamente con mi Ryzen 9. Los 6000MHz dan un rendimiento excepcional en juegos y multitarea."
  },
  {
    id: 5,
    name: "Roberto Díaz",
    platform: "Amazon",
    stars: 4,
    text: "La motherboard ASUS ROG Strix X670E es muy estable y tiene todas las conexiones que necesito. La BIOS es fácil de usar."
  },
  {
    id: 6,
    name: "Carmen Vega",
    platform: "Newegg",
    stars: 4,
    text: "La fuente MSI MPG A1000G es muy silenciosa y eficiente. El cableado modular hace que la instalación sea limpia y ordenada."
  },
  {
    id: 7,
    name: "Diego Morales",
    platform: "Best Buy",
    stars: 5,
    text: "El case NZXT H710i es hermoso y espacioso. La gestión de cables es excelente y el control RGB integrado es muy útil."
  },
  {
    id: 8,
    name: "Patricia Silva",
    platform: "Micro Center",
    stars: 5,
    text: "El mouse Logitech G Pro X Superlight es perfecto para gaming. Es súper ligero y el sensor HERO es muy preciso."
  },
  {
    id: 9,
    name: "Miguel Torres",
    platform: "Amazon",
    stars: 4,
    text: "El monitor LG UltraGear 27GP950 es espectacular para gaming. Los 144Hz en 4K son increíbles y los colores son muy vibrantes."
  },
  {
    id: 10,
    name: "Laura Jiménez",
    platform: "Newegg",
    stars: 5,
    text: "El Stream Deck XL de Elgato ha revolucionado mi streaming. Los 32 botones son perfectos para macros y la calidad es excepcional."
  },
  {
    id: 11,
    name: "Fernando Castro",
    platform: "Best Buy",
    stars: 4,
    text: "Compré la RTX 4090 para trabajo de IA y es increíble. El entrenamiento de modelos es 3x más rápido que con mi GPU anterior."
  },
  {
    id: 12,
    name: "María González",
    platform: "Micro Center",
    stars: 5,
    text: "El Ryzen 9 7950X junto con la RAM DDR5 han transformado mi experiencia de gaming. Los tiempos de carga son mínimos."
  }
] 