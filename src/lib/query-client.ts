// src/lib/query-client.ts
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // O dado é considerado "fresco" por 1 minuto.
      // Isso evita refetching agressivo quando o usuário troca de abas.
      staleTime: 1000 * 60, 
      
      // Tenta reconectar 1 vez se falhar (bom para instabilidade de rede)
      retry: 1,
      
      // Não refetch na janela focar, a menos que o dado esteja stale
      refetchOnWindowFocus: false, 
    },
  },
});