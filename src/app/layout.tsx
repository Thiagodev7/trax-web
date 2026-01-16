// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Fonte padrão SaaS limpo
import "./globals.css";
import { AppProvider } from "@/providers/app-provider";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Trax | Marketing Automation",
  description: "AI-powered marketing automation for modern teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased", 
        inter.variable
      )}>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}