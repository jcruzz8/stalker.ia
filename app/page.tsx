"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import RoiCalculator from "@/components/RoiCalculator";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Comparison from "@/components/Comparison";
import About from "@/components/About";
// Adicionámos os ícones X, Bot e CheckCheck para usar no Modal
import { ArrowRight, Phone, X, Bot, CheckCheck } from "lucide-react";

// @ts-ignore
import LiquidEther from "@/components/LiquidEther";

export default function Home() {
  // Estado para controlar se a janela do WhatsApp está aberta
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <main className="min-h-screen relative text-white bg-[#050302]">
      
      {/* FUNDO GLOBAL LIQUID ETHER FIXO */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
          <LiquidEther 
            // @ts-expect-error: Ignora erro de tipagem no JSX
            color="#cba363" 
            speed={0.1}     // Mais lento para não distrair na leitura
            amplitude={0.8}
            density={0.6}
            blur={20}
          />
      </div>

      <div className="relative z-10">
        <Navbar />
        
        {/* HERO SECTION - Já com as cores certas */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 bg-transparent">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs text-[#f2d8a7] mb-8 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#cba363] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f2d8a7]"></span>
              </span>
              Disponível em Portugal
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white">
              A sua nova rececionista <br />
              <span className="text-[#cba363]">não tira férias.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Nunca mais perca uma oportunidade de negócio. A <span className="text-[#cba363] font-bold">Stalker</span> responde, esclarece dúvidas e agenda reuniões no <span className="text-[#f2d8a7] font-medium">Google Calendar</span>.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-10">
              
              {/* ADICIONADO O onClick PARA ABRIR O MODAL AQUI 👇 */}
              <button 
                onClick={() => setIsChatOpen(true)}
                className="w-full md:w-auto px-8 py-4 bg-[#cba363] hover:bg-[#f2d8a7] text-[#1c1612] rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_40px_-10px_rgba(203,163,99,0.5)]"
              >
                <Phone className="w-5 h-5" />
                Ver Exemplo de Conversa
              </button>
              
              <a href="#precos" className="w-full md:w-auto px-8 py-4 bg-white/5 backdrop-blur-md border border-[#cba363]/30 hover:bg-[#cba363]/10 text-white rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                Ver Preços
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        <Features />
        <Comparison />
        <RoiCalculator />
        <Pricing />
        <FAQ />
        <About />
        <Footer />
      </div>

      {/* ========================================= */}
      {/* MODAL DO WHATSAPP ACRESCENTADO AQUI NO FUNDO */}
      {/* ========================================= */}
      {isChatOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-all">
          
          {/* Fundo que fecha o modal se clicares fora dele */}
          <div className="absolute inset-0" onClick={() => setIsChatOpen(false)}></div>
          
          {/* Telemóvel / Janela de Chat */}
          <div className="relative w-full max-w-md bg-[#0b141a] rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col h-[80vh] sm:h-[600px] animate-in fade-in zoom-in duration-300">
            
            {/* Cabeçalho do WhatsApp */}
            <div className="bg-[#202c33] p-4 flex items-center justify-between border-b border-white/5 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#cba363]/20 rounded-full flex items-center justify-center border border-[#cba363]/30">
                  <Bot className="w-6 h-6 text-[#cba363]" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base leading-tight">Clínica Sorriso Perfeito</h3>
                  <p className="text-xs text-gray-400">Stalker.ia online</p>
                </div>
              </div>
              <button 
                onClick={() => setIsChatOpen(false)}
                className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Corpo da Conversa (Scroll) */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-[#0b141a] scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              
              {/* Mensagem Cliente */}
              <div className="flex justify-end">
                <div className="bg-[#005c4b] text-white p-3 rounded-2xl rounded-tr-sm max-w-[85%] text-sm shadow-sm relative">
                  <p>Bom dia. Queria marcar uma consulta, por favor.</p>
                  <span className="text-[10px] text-green-200/70 absolute bottom-1 right-2 flex items-center gap-1">
                    09:41 <CheckCheck className="w-3 h-3 text-blue-400" />
                  </span>
                  <div className="h-2 w-8"></div>
                </div>
              </div>

              {/* Mensagem IA */}
              <div className="flex justify-start">
                <div className="bg-[#202c33] text-gray-100 p-3 rounded-2xl rounded-tl-sm max-w-[85%] text-sm shadow-sm relative border border-white/5">
                  <p>Bom dia! Fala com a assistente virtual da Clínica Dentária Sorriso Perfeito. Como posso ajudar hoje?</p>
                  <span className="text-[10px] text-gray-400 absolute bottom-1 right-2">09:41</span>
                  <div className="h-2 w-6"></div>
                </div>
              </div>

              {/* Mensagem Cliente */}
              <div className="flex justify-end">
                <div className="bg-[#005c4b] text-white p-3 rounded-2xl rounded-tr-sm max-w-[85%] text-sm shadow-sm relative">
                  <p>Queria marcar uma limpeza e um check-up, mas tem de ser especificamente com o Dr. Tiago Silva.</p>
                  <span className="text-[10px] text-green-200/70 absolute bottom-1 right-2 flex items-center gap-1">
                    09:42 <CheckCheck className="w-3 h-3 text-blue-400" />
                  </span>
                  <div className="h-2 w-8"></div>
                </div>
              </div>

              {/* Mensagem IA */}
              <div className="flex justify-start">
                <div className="bg-[#202c33] text-gray-100 p-3 rounded-2xl rounded-tl-sm max-w-[85%] text-sm shadow-sm relative border border-white/5">
                  <p>Com certeza. Fui verificar a agenda do Dr. Tiago Silva. Para a próxima semana, ele tem vagas na <strong>terça-feira (dia 17) às 14h30</strong>, ou na <strong>quinta-feira (dia 19) às 10h00</strong>. Algum destes horários lhe convém?</p>
                  <span className="text-[10px] text-gray-400 absolute bottom-1 right-2">09:42</span>
                  <div className="h-2 w-6"></div>
                </div>
              </div>

              {/* Mensagem Cliente */}
              <div className="flex justify-end">
                <div className="bg-[#005c4b] text-white p-3 rounded-2xl rounded-tr-sm max-w-[85%] text-sm shadow-sm relative">
                  <p>Terça às 14h30 é perfeito para mim.</p>
                  <span className="text-[10px] text-green-200/70 absolute bottom-1 right-2 flex items-center gap-1">
                    09:43 <CheckCheck className="w-3 h-3 text-blue-400" />
                  </span>
                  <div className="h-2 w-8"></div>
                </div>
              </div>

              {/* Mensagem IA */}
              <div className="flex justify-start">
                <div className="bg-[#202c33] text-gray-100 p-3 rounded-2xl rounded-tl-sm max-w-[85%] text-sm shadow-sm relative border border-white/5">
                  <p>Excelente escolha. Para bloquearmos esse horário, preciso apenas que me indique o seu nome completo e, caso já seja nosso paciente, confirme se este é o número de telemóvel associado à sua ficha.</p>
                  <span className="text-[10px] text-gray-400 absolute bottom-1 right-2">09:43</span>
                  <div className="h-2 w-6"></div>
                </div>
              </div>

              {/* Mensagem Cliente */}
              <div className="flex justify-end">
                <div className="bg-[#005c4b] text-white p-3 rounded-2xl rounded-tr-sm max-w-[85%] text-sm shadow-sm relative">
                  <p>Sou o João Mário. Sim, o número é este mesmo. Já sou vosso cliente há uns anos.</p>
                  <span className="text-[10px] text-green-200/70 absolute bottom-1 right-2 flex items-center gap-1">
                    09:44 <CheckCheck className="w-3 h-3 text-blue-400" />
                  </span>
                  <div className="h-2 w-8"></div>
                </div>
              </div>

              {/* Mensagem IA */}
              <div className="flex justify-start">
                <div className="bg-[#202c33] text-gray-100 p-3 rounded-2xl rounded-tl-sm max-w-[85%] text-sm shadow-sm relative border border-white/5">
                  <p>Tudo certo, João! Já encontrei a sua ficha. A sua consulta de limpeza e check-up com o Dr. Tiago Silva está <strong>confirmada para terça-feira, dia 17, às 14h30</strong>. ✅</p>
                  <span className="text-[10px] text-gray-400 absolute bottom-1 right-2">09:44</span>
                  <div className="h-2 w-6"></div>
                </div>
              </div>
              
              {/* Mensagem IA */}
              <div className="flex justify-start">
                <div className="bg-[#202c33] text-gray-100 p-3 rounded-2xl rounded-tl-sm max-w-[85%] text-sm shadow-sm relative border border-white/5">
                  <p>O agendamento já foi inserido diretamente na agenda do Doutor. Irei enviar-lhe uma mensagem de lembrete no dia anterior. Posso ajudar com mais alguma questão?</p>
                  <span className="text-[10px] text-gray-400 absolute bottom-1 right-2">09:44</span>
                  <div className="h-2 w-6"></div>
                </div>
              </div>

              {/* Mensagem Cliente */}
              <div className="flex justify-end">
                <div className="bg-[#005c4b] text-white p-3 rounded-2xl rounded-tr-sm max-w-[85%] text-sm shadow-sm relative">
                  <p>Não, era só mesmo isso. Muito obrigado, foram muito rápidos!</p>
                  <span className="text-[10px] text-green-200/70 absolute bottom-1 right-2 flex items-center gap-1">
                    09:45 <CheckCheck className="w-3 h-3 text-blue-400" />
                  </span>
                  <div className="h-2 w-8"></div>
                </div>
              </div>

              {/* Mensagem IA */}
              <div className="flex justify-start">
                <div className="bg-[#202c33] text-gray-100 p-3 rounded-2xl rounded-tl-sm max-w-[85%] text-sm shadow-sm relative border border-white/5 mb-4">
                  <p>É para isso que cá estamos! Muito obrigado pela preferência, João. Tenha um excelente dia e até terça-feira! 👋</p>
                  <span className="text-[10px] text-gray-400 absolute bottom-1 right-2">09:45</span>
                  <div className="h-2 w-6"></div>
                </div>
              </div>

            </div>

            {/* Rodapé (Input de Mentira) */}
            <div className="bg-[#202c33] p-3 flex items-center gap-3 border-t border-white/5 shrink-0">
              <div className="flex-1 bg-[#2a3942] rounded-full py-2.5 px-4 text-sm text-gray-400 flex items-center">
                Mensagem
              </div>
              <div className="w-10 h-10 bg-[#00a884] rounded-full flex items-center justify-center shrink-0">
                <div className="w-4 h-4 bg-white rounded-sm custom-mic-icon" style={{ clipPath: "polygon(30% 0%, 70% 0%, 70% 60%, 100% 60%, 50% 100%, 0% 60%, 30% 60%)" }}></div>
              </div>
            </div>

          </div>
        </div>
      )}

    </main>
  );
}