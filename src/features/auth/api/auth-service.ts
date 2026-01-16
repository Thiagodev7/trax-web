import { api } from "@/lib/api-client";
import { AuthResponse } from "../types";
import { LoginInput, RegisterInput } from "../schemas/auth-schema";

export const authService = {
  signIn: async (data: LoginInput): Promise<AuthResponse> => {
    // O backend espera { email, password }
    const response = await api.post<AuthResponse>("/v1/auth/sign-in", data);
    return response.data; // O axios interceptor já retorna data, mas o TS precisa saber
  },

  signUp: async (data: RegisterInput): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>("/v1/auth/sign-up", data);
    return response.data;
  },
};