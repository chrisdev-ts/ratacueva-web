export interface Sale {
  id: string;
  customerName: string;
  shippingCity: string;
  totalPrice: string;
  status: "completed" | "pending" | "processing" | "cancelled";
  payMethod: string;
  totalProducts: string;
  shipping: string;
  date: string;
}

export const mockSalesData: Sale[] = [
  {
    id: "688ab10d8dfb0",
    customerName: "Emanuel Najera",
    shippingCity: "Mexico City",
    totalPrice: "$1920.00 MXN",
    status: "completed",
    payMethod: "Tarjeta de débito",
    totalProducts: "3 productos",
    shipping: "México, Ciudad de México",
    date: "2025-06-20"
  },
  {
    id: "688ab10d8dfb1",
    customerName: "María González",
    shippingCity: "Guadalajara",
    totalPrice: "$850.00 MXN",
    status: "pending",
    payMethod: "Tarjeta de crédito",
    totalProducts: "2 productos",
    shipping: "Guadalajara, Jalisco",
    date: "2025-06-19"
  },
  {
    id: "688ab10d8dfb2",
    customerName: "Carlos Rodríguez",
    shippingCity: "Monterrey",
    totalPrice: "$2150.00 MXN",
    status: "processing",
    payMethod: "PayPal",
    totalProducts: "5 productos",
    shipping: "Monterrey, Nuevo León",
    date: "2025-06-18"
  },
  {
    id: "688ab10d8dfb3",
    customerName: "Ana Martínez",
    shippingCity: "Puebla",
    totalPrice: "$1200.00 MXN",
    status: "completed",
    payMethod: "Tarjeta de débito",
    totalProducts: "4 productos",
    shipping: "Puebla, Puebla",
    date: "2025-06-17"
  },
  {
    id: "688ab10d8dfb4",
    customerName: "Luis Hernández",
    shippingCity: "Tijuana",
    totalPrice: "$980.00 MXN",
    status: "cancelled",
    payMethod: "Tarjeta de crédito",
    totalProducts: "1 producto",
    shipping: "Tijuana, Baja California",
    date: "2025-06-16"
  },
  {
    id: "688ab10d8dfb5",
    customerName: "Patricia Silva",
    shippingCity: "León",
    totalPrice: "$1750.00 MXN",
    status: "completed",
    payMethod: "Transferencia",
    totalProducts: "6 productos",
    shipping: "León, Guanajuato",
    date: "2025-06-15"
  },
  {
    id: "688ab10d8dfb6",
    customerName: "Roberto García",
    shippingCity: "Querétaro",
    totalPrice: "$1400.00 MXN",
    status: "processing",
    payMethod: "Tarjeta de débito",
    totalProducts: "3 productos",
    shipping: "Querétaro, Querétaro",
    date: "2025-06-14"
  },
  {
    id: "688ab10d8dfb7",
    customerName: "Sandra López",
    shippingCity: "Mérida",
    totalPrice: "$3200.00 MXN",
    status: "completed",
    payMethod: "Tarjeta de crédito",
    totalProducts: "8 productos",
    shipping: "Mérida, Yucatán",
    date: "2025-06-13"
  },
  {
    id: "688ab10d8dfb8",
    customerName: "Diego Morales",
    shippingCity: "Cancún",
    totalPrice: "$890.00 MXN",
    status: "pending",
    payMethod: "PayPal",
    totalProducts: "2 productos",
    shipping: "Cancún, Quintana Roo",
    date: "2025-06-12"
  },
  {
    id: "688ab10d8dfb9",
    customerName: "Isabella Ruiz",
    shippingCity: "Chihuahua",
    totalPrice: "$2800.00 MXN",
    status: "completed",
    payMethod: "Transferencia",
    totalProducts: "7 productos",
    shipping: "Chihuahua, Chihuahua",
    date: "2025-06-11"
  }
];
