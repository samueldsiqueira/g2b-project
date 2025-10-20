import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/locales/LanguageContext";

export const metadata: Metadata = {
  title: "G2B - Treinamento Executivo e Assessoria Empresarial",
  description: "G2B é uma empresa criada por Gisele Blak Bernat em 2008, com objetivo de atuar no segmento de Treinamento e Consultoria com foco em Gestão de Projetos nos diversos setores da economia.",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
