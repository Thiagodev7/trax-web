// src/lib/storage.ts

const APP_PREFIX = 'trax_';

export const storage = {
  getToken: () => {
    // Em produção real, considere usar Cookies HttpOnly para maior segurança
    if (typeof window !== 'undefined') {
      return JSON.parse(window.localStorage.getItem(`${APP_PREFIX}token`) || 'null');
    }
    return null;
  },
  setToken: (token: string) => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(`${APP_PREFIX}token`, JSON.stringify(token));
    }
  },
  clearToken: () => {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(`${APP_PREFIX}token`);
    }
  },
};