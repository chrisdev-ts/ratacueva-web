import { useState, useEffect } from 'react'
import { getOrders, type Order } from '@/services/settings/purchases'
import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'

export const useOrders = () => {
  const { user, logout } = useAuth()
  const router = useRouter()
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchOrders = async () => {
    if (!user) return

    try {
      setLoading(true)
      setError(null)
      const response = await getOrders({ limit: 50 })
      setOrders(response.orders)
    } catch (err: any) {
      console.error('Error fetching orders:', err)
      
      if (err.message?.includes('Token expirado')) {
        logout()
        router.push('/login')
        return
      }
      
      setError(err.message || 'Error al cargar las compras')
    } finally {
      setLoading(false)
    }
  }

  const addOrder = (newOrder: Order) => {
    setOrders(prevOrders => [newOrder, ...prevOrders])
  }

  useEffect(() => {
    fetchOrders()
  }, [user])

  return {
    orders,
    loading,
    error,
    refetch: fetchOrders,
    addOrder
  }
} 