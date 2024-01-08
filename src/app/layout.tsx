import type { Metadata } from "next";
import { Dosis, Inter } from "next/font/google";
import { TRPCReactProvider } from "~/trpc/react";
import "./globals.css";

const dosis = Dosis({ subsets: ["latin"], variable: "--font-dosis" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Gerenciamento de Hábitos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body
        className={`${dosis.variable} ${inter.variable} min-h-screen bg-neutral-900`}
      >
        <TRPCReactProvider cookies="ggsgsg">{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
