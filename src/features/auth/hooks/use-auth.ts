import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { authService } from "../api/auth-service";
import { storage } from "@/lib/storage";
import { LoginInput, RegisterInput } from "../schemas/auth-schema";

export function useLogin() {
  const router = useRouter();

  return useMutation({
    mutationFn: (data: LoginInput) => authService.signIn(data),
    onSuccess: (data) => {
      // 1. Salva o token
      storage.setToken(data.accessToken);
      // 2. Redireciona para o Dashboard
      router.push("/dashboard"); 
    },
    // O erro é tratado no componente para exibir feedback visual específico
  });
}

export function useRegister() {
  const router = useRouter();

  return useMutation({
    mutationFn: (data: RegisterInput) => authService.signUp(data),
    onSuccess: (data) => {
      storage.setToken(data.accessToken);
      router.push("/dashboard");
    },
  });
}