
import axios from 'axios';

export interface AddressPayload {
  // Define la estructura del payload de la dirección aquí
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export const addAddress = async (payload: AddressPayload) => {
  try {
    const response = await axios.post('/api/addresses', payload);
    return response.data;
  } catch (error) {
    throw error;
  }
};
