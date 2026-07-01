import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://publiciart.com.br"),
  title: {
    default: "Publiciart — Sites premium que vendem",
    template: "%s · Publiciart",
  },
  description:
    "Agência de criação de sites premium. Sites institucionais, landing pages, identidade visual, hospedagem própria e suporte humano direto.",
  keywords: ["criação de sites", "landing page", "sites premium", "Publiciart", "agência web"],
  openGraph: {
    title: "Publiciart — Sites premium que vendem",
    description: "Sites feitos à mão que prendem a atenção e convertem visitantes em clientes.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${bricolage.variable} ${inter.variable} h-full antialiased`}>
      <body className="relative flex min-h-full flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
