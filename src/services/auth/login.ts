// src/services/auth/login.ts
import axios from "axios";

interface LoginPayload {
    email: string;
    password: string;
}

export const login = async ({ email, password }: LoginPayload) => {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`, {
        email,
        password,
    });

    return response.data; // { token, user }
};
