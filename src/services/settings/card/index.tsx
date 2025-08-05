import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export interface PaymentMethod {
  _id: string;
  type: "credit_card" | "debit_card" | "paypal" | "oxxo_cash";
  last4?: string;
  provider?: string;
  expiration?: string;
}

export const getPaymentMethods = async (): Promise<PaymentMethod[]> => {
  const token = localStorage.getItem('token');
  
  if (!token) {
    throw new Error('No se encontró token de autenticación');
  }

  const response = await axios.get(`${API_URL}/users/payment-methods`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });

  return response.data;
};

export const addPaymentMethod = async (paymentData: {
  type: "credit_card" | "debit_card" | "paypal" | "oxxo_cash";
  last4?: string;
  provider?: string;
  expiration?: string;
}): Promise<PaymentMethod> => {
  const token = localStorage.getItem('token');
  
  if (!token) {
    throw new Error('No se encontró token de autenticación');
  }

  const response = await axios.post(`${API_URL}/users/payment-methods`, paymentData, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });

  return response.data;
};

export const updatePaymentMethod = async (id: string, paymentData: {
  type?: "credit_card" | "debit_card" | "paypal" | "oxxo_cash";
  last4?: string;
  provider?: string;
  expiration?: string;
}): Promise<PaymentMethod> => {
  const token = localStorage.getItem('token');
  
  if (!token) {
    throw new Error('No se encontró token de autenticación');
  }

  const response = await axios.patch(`${API_URL}/users/payment-methods/${id}`, paymentData, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });

  return response.data;
};

export const deletePaymentMethod = async (id: string): Promise<void> => {
  const token = localStorage.getItem('token');
  
  if (!token) {
    throw new Error('No se encontró token de autenticación');
  }

  await axios.delete(`${API_URL}/users/payment-methods/${id}`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });
};