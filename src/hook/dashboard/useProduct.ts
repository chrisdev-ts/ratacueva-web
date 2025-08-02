// hooks/useProducts.ts
import { useQuery } from "@tanstack/react-query";

const API_URL = "http://localhost:3001/api/products";

type Product = {
    _id: string;
    name: string;
    category: string;
    stock: number;
    price: number;
};

type ProductsResponse = {
    data: Product[];
    pagination: { totalProducts: number; totalPages: number; currentPage: number };
};


export const useProducts = () => {
    return useQuery<Product[]>({
        queryKey: ["products"],
        queryFn: async () => {
            const res = await fetch(API_URL);
            if (!res.ok) throw new Error("Error al obtener productos");
            return res.json(); // aquí retorna arreglo de productos
        },
        staleTime: 1000 * 60 * 5,
    });
};

