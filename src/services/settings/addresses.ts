import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://ratacueva-api.onrender.com/api";

export interface Address {
  _id: string;
  postalCode: string;
  street: string;
  externalNumber: string;
  internalNumber?: string
  neighborhood: string;
  city: string;
  state: string;
  country: string;
  isDefault: boolean;
}

export const getAddresses = async (token: string): Promise<Address[]> => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };

    const response = await axios.get(`${API_URL}/users/addresses`, config);
    return response.data;

  } catch (error) {
    console.error("Error en addressService.getAddresses:", error);
    throw error;
  }
};