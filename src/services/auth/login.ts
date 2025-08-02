// src/services/auth/login.ts
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://ratacueva-api.onrender.com/api";


interface LoginPayload {
    email: string;
    password: string;
}

export const login = async ({ email, password }: LoginPayload) => {
    const response = await axios.post(`${API_URL}/auth/login`, {
        email,
        password,
    });

    return response.data; 
};
