import { useQuery } from "@tanstack/react-query";

const API_URL = "https://ratacueva-api.onrender.com/api/shipping/shipments";

export type Shipment = {
    id: string;
    trackingNumber: string;
    carrier: string;
    destination: string;
    status: string
    createdAt: string;
};

export const useShipments = () => {
    return useQuery<Shipment[]>({
        queryKey: ["shipments"],
        queryFn: async () => {
            const res = await fetch(API_URL);
            if (!res.ok) throw new Error("Error al obtener envíos");
            return res.json(); // espera un arreglo de envíos
        },
        staleTime: 1000 * 60 * 5, // 5 minutos
    });
};
