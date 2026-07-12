import type { Metadata } from "next";
import { Electrolize } from "next/font/google";
import "./globals.css";

const electrolize = Electrolize({
  variable: "--font-electrolize-sans",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "音楽性 / Ongakusei",
  description: "Pesquise por músicas com facilidade",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${electrolize.variable}`}>
      <body>{children}</body>
    </html>
  );
}
