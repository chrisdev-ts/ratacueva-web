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
    name: "María González",
    platform: "Facebook",
    stars: 5,
    text: "Increíble experiencia en RataCueva! La comida estaba deliciosa y el ambiente muy acogedor. Definitivamente volveremos pronto."
  },
  {
    id: 2,
    name: "Carlos Ruiz",
    platform: "Google",
    stars: 5,
    text: "El mejor lugar para pasar un rato agradable. La atención es excelente y los precios muy justos. 100% recomendado."
  },
  {
    id: 3,
    name: "Ana Martínez",
    platform: "Instagram",
    stars: 4,
    text: "Me encantó la decoración del lugar y la variedad del menú. Los postres están espectaculares, sobre todo el tiramisú."
  },
  {
    id: 4,
    name: "Luis Hernández",
    platform: "TikTok",
    stars: 5,
    text: "Un lugar único en la ciudad. La música en vivo los viernes es genial y la comida tiene un sabor casero increíble."
  },
  {
    id: 5,
    name: "Sofia López",
    platform: "YouTube",
    stars: 4,
    text: "Perfecto para celebraciones familiares. El personal es muy atento y el lugar tiene una energía muy positiva."
  },
  {
    id: 6,
    name: "Roberto Díaz",
    platform: "TripAdvisor",
    stars: 5,
    text: "Excelente servicio y comida de calidad. El ambiente es perfecto para una cena romántica o reunión con amigos."
  },
  {
    id: 7,
    name: "Carmen Vega",
    platform: "Yelp",
    stars: 4,
    text: "Muy buena relación calidad-precio. Los platos son abundantes y sabrosos. El personal es muy amable."
  },
  {
    id: 8,
    name: "Diego Morales",
    platform: "Google",
    stars: 5,
    text: "El mejor café de la ciudad y los pasteles están deliciosos. Ambiente perfecto para trabajar o estudiar."
  },
  {
    id: 9,
    name: "Patricia Silva",
    platform: "Facebook",
    stars: 5,
    text: "Lugar mágico con decoración única. La música en vivo crea una atmósfera especial. Comida excepcional."
  },
  {
    id: 10,
    name: "Miguel Torres",
    platform: "Instagram",
    stars: 4,
    text: "Gran variedad de opciones vegetarianas. El servicio es rápido y la presentación de los platos es hermosa."
  },
  {
    id: 11,
    name: "Laura Jiménez",
    platform: "TikTok",
    stars: 5,
    text: "Mi lugar favorito para desayunar. Los pancakes son increíbles y el café está perfecto. Ambiente muy acogedor."
  },
  {
    id: 12,
    name: "Fernando Castro",
    platform: "YouTube",
    stars: 4,
    text: "Perfecto para eventos especiales. El personal se adapta a todas las necesidades y la comida es consistente."
  }
] 