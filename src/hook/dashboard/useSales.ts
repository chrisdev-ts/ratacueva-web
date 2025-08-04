import { useQuery } from "@tanstack/react-query";

const API_URL = "https://ratacueva-api.onrender.com/api/orders";

// libs/salesData.ts (o donde declares tipos)
export type Sale = {
  _id: string;
  userId: {
    name: string;
    lastName: string;
    email: string;
    _id?: string;
  };
  shippingAddress: {
    postalCode: string;
    street: string;
    externalNumber: string;
    neighborhood: string;
    city: string;
    state?: string;
    country?: string;
  };
  paymentDetails: {
    type: string;  // ej. "credit_card"
    transactionId: string;
  };
  totalAmount: number;
  orderStatus: string; // ej. "shipped"
  paymentStatus: string; // ej. "paid"
  shippingStatus: string;
  createdAt: string;
  updatedAt: string;
};


export const useSales = () => {
  return useQuery<Sale[]>({
    queryKey: ["sales"],
    queryFn: async (): Promise<Sale[]> => {
      const token = localStorage.getItem("token");

      const res = await fetch(API_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error("Error al obtener las ventas");
      }

      const data = await res.json();
      return data.orders;  // <-- Aquí asumes que la API responde con { orders: Sale[] }
    },
    staleTime: 1000 * 60 * 5,
  });
};