import { redirect } from "next/navigation";

export default function Home() {
  // Em SaaS B2B, a raiz geralmente redireciona para o app ou é uma Landing Page.
  // Por enquanto, vamos direto para o fluxo de login/dashboard.
  redirect("/login");
}