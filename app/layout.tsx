import type { Metadata } from "next";
import { ReactNode } from "react"; 
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.stalkeragent.pt'), 
  title: {
    default: "Stalker.ia | O Seu Agente de IA para Atendimento",
    template: "%s | Stalker.ia"
  },
  // 👇 Aqui está a correção para o Next.js e o Cloudflare 👇
  icons: {
    icon: '/icon.png',
  },
  // 👆 ---------------------------------------------------- 👆
  description: "A sua nova rececionista não tira férias. A Stalker IA atende chamadas 24/7, esclarece dúvidas e agenda reuniões diretamente no seu calendário.",
  keywords: ["stalkeria", "stalker ia", "stalker agent", "agente ia portugal", "atendimento automático whatsapp", "rececionista ia"],
  openGraph: {
    title: "Stalker.ia | Atendimento IA 24/7",
    description: "Nunca mais perca uma chamada de negócio. Automação de atendimento com Inteligência Artificial em Portugal.",
    url: 'https://www.stalkeragent.pt',
    siteName: 'Stalker IA',
    images: [
      {
        url: '/icon.png', 
        width: 1200,
        height: 630,
      },
    ],
    locale: 'pt_PT',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-PT" className="scroll-smooth">
      <body className="bg-[#050302] text-white selection:bg-[#cba363]/30">
        {children}
      </body>
    </html>
  );
}