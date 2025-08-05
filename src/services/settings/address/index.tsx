import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export interface Address {
  _id: string;
  postalCode: string;
  street: string;
  externalNumber?: string;
  internalNumber?: string;
  neighborhood: string;
  city: string;
  state: string;
  country: string;
  isDefault: boolean;
}

export interface CreateAddressPayload {
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

export interface UpdateAddressPayload {
  postalCode?: string;
  street?: string;
  externalNumber?: string;
  internalNumber?: string;
  neighborhood?: string;
  city?: string;
  state?: string;
  country?: string;
  isDefault?: boolean;
}

export const getAddresses = async (): Promise<Address[]> => {
  const token = localStorage.getItem('token');
  
  if (!token) {
    throw new Error('No se encontró token de autenticación');
  }

  const response = await axios.get(`${API_URL}/users/addresses`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });

  return response.data;
};

export const createAddress = async (addressData: CreateAddressPayload): Promise<Address> => {
  const token = localStorage.getItem('token');
  
  if (!token) {
    throw new Error('No se encontró token de autenticación');
  }

  const response = await axios.post(`${API_URL}/users/addresses`, addressData, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });

  return response.data;
};

export const updateAddress = async (id: string, addressData: UpdateAddressPayload): Promise<Address> => {
  const token = localStorage.getItem('token');
  
  if (!token) {
    throw new Error('No se encontró token de autenticación');
  }

  const response = await axios.patch(`${API_URL}/users/addresses/${id}`, addressData, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });

  return response.data;
};

export const deleteAddress = async (id: string): Promise<void> => {
  const token = localStorage.getItem('token');
  
  if (!token) {
    throw new Error('No se encontró token de autenticación');
  }

  await axios.delete(`${API_URL}/users/addresses/${id}`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });
};

export const setDefaultAddress = async (id: string): Promise<Address> => {
  const token = localStorage.getItem('token');
  
  if (!token) {
    throw new Error('No se encontró token de autenticación');
  }

  const response = await axios.patch(`${API_URL}/users/addresses/${id}/set-default`, {}, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });

  return response.data;
};
