import Link from "next/link";
import { LoginForm } from "@/features/auth/components/login-form";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Wand2, CheckCircle2 } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Botão de Tema Flutuante */}
      <ThemeToggle />

      {/* LADO ESQUERDO: Branding Imersivo */}
      <div className="relative hidden lg:flex flex-col justify-between p-10 text-white overflow-hidden">
        
        {/* Camada de Fundo: Gradiente Aurora Animado */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900 via-purple-900 to-black animate-gradient z-0" />
        
        {/* Camada de Textura: Noise (Granulação) para dar aspecto premium */}
        <div className="absolute inset-0 opacity-20 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150" />

        {/* Efeito de Vidro sobre o Brand */}
        <div className="relative z-10">
          <div className="flex items-center gap-2 text-xl font-bold tracking-tight">
            <div className="p-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
              <Wand2 className="h-6 w-6" />
            </div>
            <span>Trax Inc.</span>
          </div>
        </div>

        {/* Conteúdo Central do Branding */}
        <div className="relative z-10 space-y-6 max-w-lg">
          <h2 className="text-4xl font-bold leading-tight tracking-tight">
            Automação de Marketing <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300">
              com a inteligência da IA.
            </span>
          </h2>
          
          <ul className="space-y-4 mt-8">
            {[
              "Geração de Copy em segundos",
              "Análise preditiva de campanhas",
              "Multi-workspace nativo"
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-indigo-100/80">
                <CheckCircle2 className="h-5 w-5 text-indigo-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Footer / Social Proof */}
        <div className="relative z-10">
          <blockquote className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
            <p className="text-lg font-medium text-indigo-50 leading-relaxed">
              &ldquo;O Trax mudou a forma como nossa agência opera. O que levava dias, agora fazemos em minutos com o Magic Editor.&rdquo;
            </p>
            <footer className="mt-4 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-indigo-500/30 flex items-center justify-center border border-white/20 font-bold">
                SD
              </div>
              <div>
                <div className="font-semibold text-white">Sofia Davis</div>
                <div className="text-xs text-indigo-200">CMO @ Acme Corp</div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>

      {/* LADO DIREITO: Formulário Clean & Focado */}
      <div className="relative flex flex-col items-center justify-center p-8 sm:p-12 bg-background">
        
        {/* Padrão de Pontos sutil no fundo (Dot Pattern) */}
        <div className="absolute inset-0 bg-dot-pattern opacity-[0.2] dark:opacity-[0.1] pointer-events-none" />
        
        {/* Container do Form */}
        <div className="w-full max-w-md space-y-8 relative z-10">
          
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tighter">
              Bem-vindo de volta
            </h1>
            <p className="text-muted-foreground">
              Entre com suas credenciais para acessar o dashboard.
            </p>
          </div>

          {/* Componente do Formulário (Reutilizado) */}
          <div className="bg-card/50 backdrop-blur-sm border shadow-xl shadow-indigo-500/5 rounded-2xl p-6 md:p-8">
            <LoginForm />
          </div>

          <p className="px-8 text-center text-sm text-muted-foreground">
            Ainda não tem uma conta?{" "}
            <Link
              href="/register"
              className="font-medium text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
            >
              Criar workspace grátis
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}