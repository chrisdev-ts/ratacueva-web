import axios from "axios";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://ratacueva-api.onrender.com/api";

export interface RegisterPayload {
  name: string;
  lastName: string;
  secondLastName?: string;
  email: string;
  password: string;
  phone?: string;
}

export const registerUser = async (payload: RegisterPayload) => {
  const response = await axios.post(`${API_URL}/auth/register`, payload);
  return response.data;
};
