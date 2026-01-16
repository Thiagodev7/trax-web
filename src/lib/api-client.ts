// src/lib/api-client.ts
import axios from 'axios';
import { storage } from './storage';

// URL base vinda de variável de ambiente (Boas práticas)
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 1. Interceptor de Requisição: Injeta o Token
api.interceptors.request.use((config) => {
  const token = storage.getToken();
  
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  
  return config;
});

// 2. Interceptor de Resposta: Tratamento Global de Erros
api.interceptors.response.use(
  (response) => response.data, // Retorna direto os dados (UX de dev mais limpa)
  (error) => {
    const message = error.response?.data?.message || error.message;

    // Segurança: Se der 401 (Não autorizado), limpa token e redireciona
    if (error.response?.status === 401) {
      storage.clearToken();
      // Usamos window.location para forçar um refresh limpo do estado
      if (typeof window !== 'undefined' && !window.location.pathname.includes('/login')) {
         window.location.href = '/login'; 
      }
    }

    // Aqui poderíamos conectar com um Toast Notification global
    console.error(`[API Error]: ${message}`);

    return Promise.reject(error);
  }
);