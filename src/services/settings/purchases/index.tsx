import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export interface OrderItem {
  _id: string;
  productId: string;
  name: string;
  priceAtAddition: number;
  quantity: number;
  selectedVariation?: string;
  imageUrl: string;
  discountPercentageApplied?: number;
}

export interface Address {
  postalCode: string;
  street: string;
  externalNumber?: string;
  internalNumber?: string;
  neighborhood: string;
  city: string;
  state: string;
  country: string;
  isDefault?: boolean;
}

export interface PaymentDetails {
  type: "credit_card" | "debit_card" | "paypal" | "oxxo_cash";
  transactionId: string;
  last4?: string;
  provider: string;
}

export interface Order {
  _id: string;
  userId: string;
  items: OrderItem[];
  subtotal: number;
  shippingCost: number;
  taxAmount: number;
  discountAmount: number;
  totalAmount: number;
  currency: string;
  orderStatus: "pending" | "processing" | "shipped" | "delivered" | "cancelled" | "refunded";
  paymentStatus: "pending" | "paid" | "failed" | "refunded";
  shippingStatus: "pending" | "shipped" | "delivered" | "returned";
  shippingAddress: Address;
  billingAddress?: Address;
  paymentDetails: PaymentDetails;
  estimatedDeliveryDate?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateOrderRequest {
  items: Array<{
    productId: string;
    quantity: number;
    selectedVariation?: string;
  }>;
  shippingAddress: {
    postalCode: string;
    street: string;
    externalNumber: string;
    internalNumber?: string;
    neighborhood: string;
    city: string;
    state: string;
    country: string;
  };
  billingAddress?: {
    postalCode: string;
    street: string;
    externalNumber: string;
    internalNumber?: string;
    neighborhood: string;
    city: string;
    state: string;
    country: string;
  };
  paymentMethod: {
    type: "credit_card" | "debit_card" | "paypal" | "oxxo_cash";
    paymentGatewayToken: string;
    paypalApprovalId?: string;
  };
  shippingCost: number;
  taxAmount: number;
  discountAmount?: number;
}

export interface CreateOrderResponse {
  success: boolean;
  order: Order;
  message?: string;
}

export const getOrders = async ({ 
  limit = 10, 
  offset = 0, 
  status 
}: { 
  limit?: number; 
  offset?: number; 
  status?: string; 
} = {}): Promise<{ orders: Order[]; total: number }> => {
  const token = localStorage.getItem('token');
  
  if (!token) {
    throw new Error('No se encontró token de autenticación');
  }

  try {
    const params = new URLSearchParams({
      limit: limit.toString(),
      offset: offset.toString(),
      ...(status && { status })
    });

    console.log('Making request to:', `${API_URL}/orders?${params}`);
    console.log('Token:', token.substring(0, 20) + '...');

    const response = await axios.get(`${API_URL}/orders?${params}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    console.log('API Response:', response.data);
    console.log('Response status:', response.status);
    console.log('Response headers:', response.headers);

    return response.data.orders ? { orders: response.data.orders, total: response.data.orders.length } : response.data;
  } catch (error: unknown) {
    console.error('Error fetching orders:', error);
    
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      console.error('Token is invalid or expired. Please login again.');
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      throw new Error('Token expirado. Por favor, inicia sesión nuevamente.');
    }
    
    throw new Error('Error al cargar las compras. Por favor, intenta nuevamente.');
  }
};

export const createOrder = async (orderData: CreateOrderRequest): Promise<CreateOrderResponse> => {
  const token = localStorage.getItem('token');
  
  if (!token) {
    throw new Error('No se encontró token de autenticación');
  }

  try {
    console.log('Creating order with API request');
    
    const response = await axios.post(`${API_URL}/orders`, orderData, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    console.log('API Response for order creation:', response.data);
    
    return {
      success: true,
      order: response.data.order,
      message: response.data.message || "Order created successfully"
    };
  } catch (error: unknown) {
    console.error('Error creating order:', error);
    
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 400) {
        const errorDetails = error.response.data?.details || [];
        interface ErrorDetail {
          field: string;
          message: string;
        }
        const errorMessages = errorDetails.map((detail: ErrorDetail) => `${detail.field}: ${detail.message}`).join(', ');
        throw new Error(`Validación fallida: ${errorMessages || error.response.data?.message}`);
      }
      
      if (error.response?.status === 401) {
        console.error('Token is invalid or expired. Please login again.');
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        throw new Error('Token expirado. Por favor, inicia sesión nuevamente.');
      }
      
      if (error.response?.status === 409) {
        throw new Error(error.response.data?.message || 'Stock insuficiente o problema con el pago.');
      }
    }
    
    throw new Error('Error al crear la orden. Por favor, intenta nuevamente.');
  }
};

export const getOrderById = async (orderId: string): Promise<Order> => {
  const token = localStorage.getItem('token');
  
  if (!token) {
    throw new Error('No se encontró token de autenticación');
  }

  try {
    console.log('Fetching order from API:', orderId);
    
    const response = await axios.get(`${API_URL}/orders/${orderId}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    console.log('API Response for order detail:', response.data);
    return response.data.order || response.data;
  } catch (error: unknown) {
    console.error('Error fetching order by ID:', error);
    
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      console.error('Token is invalid or expired. Please login again.');
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      throw new Error('Token expirado. Por favor, inicia sesión nuevamente.');
    }
    
    throw new Error('Error al cargar los detalles de la compra. Por favor, intenta nuevamente.');
  }
};

export const cancelOrder = async (orderId: string): Promise<void> => {
  const token = localStorage.getItem('token');
  
  if (!token) {
    throw new Error('No se encontró token de autenticación');
  }

  await axios.patch(`${API_URL}/orders/${orderId}/cancel`, {}, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });
};

export const requestRefund = async (orderId: string, reason: string): Promise<void> => {
  const token = localStorage.getItem('token');
  
  if (!token) {
    throw new Error('No se encontró token de autenticación');
  }

  await axios.post(`${API_URL}/orders/${orderId}/refund`, { reason }, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });
};