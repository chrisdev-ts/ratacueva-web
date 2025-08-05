import { useState, useEffect, useCallback } from "react";
import { getOrders, type Order } from "@/services/settings/purchases";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";

export const useOrders = () => {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchOrders = useCallback(async () => {
    if (!user) return;

    try {
      setLoading(true);
      setError(null);
      const response = await getOrders({ limit: 50 });
      setOrders(response.orders);
    } catch (err: unknown) {
      console.error("Error fetching orders:", err);

      const errorMessage = err instanceof Error ? err.message : String(err);
      if (errorMessage.includes("Token expirado")) {
        logout();
        router.push("/login");
        return;
      }

      setError(errorMessage || "Error al cargar las compras");
    } finally {
      setLoading(false);
    }
  }, [user, logout, router]);

  const addOrder = (newOrder: Order) => {
    setOrders((prevOrders) => [newOrder, ...prevOrders]);
  };

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  return {
    orders,
    loading,
    error,
    refetch: fetchOrders,
    addOrder,
  };
};
