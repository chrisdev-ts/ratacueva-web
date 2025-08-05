import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getUserProfile = async () => {
  const token = localStorage.getItem('token');
  
  if (!token) {
    throw new Error('No se encontró token de autenticación');
  }

  const response = await axios.get(`${API_URL}/users/me`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });

  return response.data;
};

export const updateUserProfile = async (userData: {
  name: string;
  lastName: string;
  secondLastName: string;
  phone: string;
}) => {
  const token = localStorage.getItem('token');
  
  if (!token) {
    throw new Error('No se encontró token de autenticación');
  }

  const response = await axios.patch(`${API_URL}/users/me`, userData, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });

  return response.data;
};