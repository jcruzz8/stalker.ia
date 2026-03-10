"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, Mail, Phone, Calendar } from "lucide-react";

// @ts-ignore: Ignorar tipagem de import JS
import LiquidEther from "@/components/LiquidEther";

export default function AgendarPage() {
  return (
    <main className="min-h-screen relative text-white selection:bg-[#cba363]/30">
      
      {/* O NOSSO FUNDO LIQUID ETHER */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none overflow-hidden bg-[#050302]">
          <LiquidEther 
            // Podes ajustar estes parâmetros ao teu gosto, mas este setup cria uma neblina rica
            // @ts-expect-error: O TypeScript não consegue ler as propriedades do ficheiro .jsx
            color="#cba363"      // A cor base da névoa
            speed={0.15}         // Movimento lento e elegante
            amplitude={1.2}      // Intensidade das ondas
            density={0.8}        // Quão espessa é a névoa
            blur={20}            // Suavidade extrema
          />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <section className="flex-1 pt-32 pb-20 px-6 relative">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
            
            {/* COLUNA DA ESQUERDA: Texto e Venda */}
            <div className="space-y-8 bg-black/40 backdrop-blur-md p-8 rounded-3xl border border-white/5">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#cba363]/10 text-[#cba363] text-sm font-medium mb-6 border border-[#cba363]/20">
                  <Calendar className="w-4 h-4" />
                  Reunião de Descoberta
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                  Vamos dar o próximo <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f2d8a7] to-[#cba363]">passo.</span>
                </h1>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Pode marcar uma reunião online com o José e com o Filipe. Vamos analisar o seu processo atual e mostrar ao vivo quanto dinheiro pode poupar.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-white font-semibold text-xl">O que vamos discutir:</h3>
                <ul className="space-y-3">
                  {[
                    "Análise das chamadas perdidas do seu negócio",
                    "Demonstração personalizada da IA",
                    "Cálculo exato do ROI (Retorno do Investimento)",
                    "Plano de implementação (o mais adequado ao seu negócio)",
                    "Extras adaptados às suas necessidades (opcional)",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <div className="p-1 rounded-full bg-green-500/20 mt-1 shrink-0">
                        <Check className="w-3 h-3 text-green-400" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contactos Diretos */}
              <div className="pt-8 border-t border-white/10 space-y-4">
                <div className="flex items-center gap-3 text-gray-400 hover:text-[#f2d8a7] transition-colors cursor-pointer">
                  <Mail className="w-5 h-5 text-[#cba363]" />
                  <span>geral.stalker.ia@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 hover:text-[#f2d8a7] transition-colors cursor-pointer">
                  <Phone className="w-5 h-5 text-[#cba363]" />
                  <span>+351 934 480 266</span>
                </div>
              </div>
            </div>

            {/* COLUNA DA DIREITA: Calendário Embed */}
            <div className="w-full bg-[#1c1612]/80 backdrop-blur-xl border border-[#cba363]/30 rounded-3xl overflow-hidden h-[700px] relative shadow-[0_0_50px_rgba(203,163,99,0.15)]">
              <iframe 
                src="https://cal.com/stalker/30min" 
                style={{width: "100%", height: "100%", border: "none"}}
                title="Agendar Reunião"
              ></iframe>
            </div>

          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}