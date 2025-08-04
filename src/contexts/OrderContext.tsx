"use client"

import React, { createContext, useContext, useState } from 'react';
import { createOrder, type CreateOrderRequest, type Order } from '@/services/settings/purchases';

interface OrderContextType {
  createNewOrder: (orderData: CreateOrderRequest) => Promise<Order>;
  isLoading: boolean;
  error: string | null;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error('useOrder debe ser usado dentro de un OrderProvider');
  }
  return context;
};

export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createNewOrder = async (orderData: CreateOrderRequest): Promise<Order> => {
    setIsLoading(true);
    setError(null);
    
    try {
      console.log('OrderContext: Creando orden con datos:', orderData);
      
      const response = await createOrder(orderData);
      
      console.log('OrderContext: Respuesta de creación de orden:', response);
      console.log('OrderContext: Objeto de orden:', response.order);
      
      if (!response.success) {
        throw new Error(response.message || 'Error al crear la orden');
      }

      if (!response.order) {
        console.error('OrderContext: No se recibió objeto de orden', response);
        throw new Error('No se recibió el objeto de orden del servidor');
      }

      return response.order;
    } catch (error) {
      console.error('OrderContext: Error al crear orden:', error);
      setError(error instanceof Error ? error.message : 'Error desconocido');
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const value: OrderContextType = {
    createNewOrder,
    isLoading,
    error,
  };

  return (
    <OrderContext.Provider value={value}>
      {children}
    </OrderContext.Provider>
  );
};