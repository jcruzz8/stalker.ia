"use client";

import { memo } from "react";
import { Check, Plus, Gift, Info } from "lucide-react";
import Link from "next/link";

const features = [
  "Atendimento automático 24/7 via WhatsApp",
  "Automações através de n8n",
  "Integrações (CRM, Google Calendar, APIs)",
  "Qualificação automática de leads",
  "Atualizações contínuas do sistema",
  "Suporte técnico",
  "Painel de controlo",
];

const addons = [
  { name: "Número WhatsApp adicional", color: "text-[#cba363]", bg: "bg-[#cba363]/10", border: "border-[#cba363]/20" },
  { name: "Pacotes extra de mensagens", color: "text-[#f2d8a7]", bg: "bg-[#f2d8a7]/10", border: "border-[#f2d8a7]/20" },
  { name: "Setup e onboarding profissional", color: "text-[#73542a]", bg: "bg-[#73542a]/10", border: "border-[#73542a]/20" },
  { name: "Integrações personalizadas", color: "text-[#cba363]", bg: "bg-[#cba363]/10", border: "border-[#cba363]/20" },
  { name: "Otimização mensal da IA", color: "text-[#f2d8a7]", bg: "bg-[#f2d8a7]/10", border: "border-[#f2d8a7]/20" },
  { name: "Suporte prioritário", color: "text-[#73542a]", bg: "bg-[#73542a]/10", border: "border-[#73542a]/20" },
  { name: "Automações avançadas", color: "text-[#cba363]", bg: "bg-[#cba363]/10", border: "border-[#cba363]/20" },
];

export default function Pricing() {
  return (
    // AJUSTE: Trocado bg-[#050302] por bg-transparent
    <section id="precos" className="py-24 px-6 relative border-t border-white/10 overflow-hidden bg-transparent">

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Cabeçalho da Secção */}
        <div className="text-center mb-10 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Um plano único. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f2d8a7] to-[#cba363]">Preços transparentes.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Quanto maior o compromisso, menor o investimento mensal.
          </p>
        </div>

        {/* SUPER DESTAQUE: Período Experimental */}
        <div className="max-w-4xl mx-auto mb-16 relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#1c1612] via-[#73542a]/40 to-[#1c1612] border border-[#cba363]/30 p-8 shadow-[0_0_40px_rgba(203,163,99,0.15)] bg-black/40 backdrop-blur-xl">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-[#cba363]/20 blur-3xl rounded-full"></div>
          
          <div className="flex flex-col md:flex-row items-center gap-6 mb-8 relative z-10">
            <div className="bg-[#cba363]/20 p-4 rounded-2xl border border-[#cba363]/30">
              <Gift className="w-10 h-10 text-[#cba363]" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-1">Experimente 7 Dias Gratuitamente</h3>
              <p className="text-[#f2d8a7]/80">Disponível em qualquer um dos nossos planos, sem compromisso inicial.</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 relative z-10">
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-[#cba363]/10">
              <h4 className="font-semibold text-white mb-2 text-lg">1. Teste Real</h4>
              <p className="text-sm text-gray-400">Permite testar o agente IA no terreno, a falar com os seus clientes reais.</p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-[#cba363]/10">
              <h4 className="font-semibold text-white mb-2 text-lg">2. Valor Imediato</h4>
              <p className="text-sm text-gray-400">Sinta o impacto da automatização no seu negócio num curto espaço de tempo.</p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-[#cba363]/10">
              <h4 className="font-semibold text-white mb-2 text-lg">3. Zero Fricção</h4>
              <p className="text-sm text-gray-400">Decida apenas após ver resultados concretos. Cancele se não estiver satisfeito.</p>
            </div>
          </div>
        </div>

        {/* Grelha de Preços */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center mb-24 relative z-10">
          
          {/* 1. PLANO TRIMESTRAL */}
          <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col h-full hover:border-[#cba363]/30 transition-colors shadow-xl">
            <h3 className="text-xl font-semibold text-gray-300 mb-2">Trimestral</h3>
            <p className="text-sm text-gray-500 mb-6">Compromisso mínimo</p>
            
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">99€</span>
              <span className="text-gray-400">/mês</span>
              <p className="text-sm text-gray-500 mt-2">Cobrado 297€ a cada 3 meses</p>
            </div>
            
            <Link href="/agendar" className="w-full py-3 px-6 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-center transition-colors mb-8">
              Começar 7 Dias Grátis
            </Link>
            
            <div className="space-y-4 flex-1">
              {features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#cba363] shrink-0" />
                  <span className="text-gray-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 2. PLANO ANUAL (DESTAQUE OURO/BRONZE) */}
          <div className="bg-gradient-to-b from-[#73542a]/40 to-[#050302] backdrop-blur-xl border border-[#cba363]/50 rounded-3xl p-8 flex flex-col h-full relative transform md:-translate-y-4 shadow-2xl shadow-[#cba363]/20">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#cba363] text-[#1c1612] px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg shadow-[#cba363]/30">
              Recomendado
            </div>
            
            <h3 className="text-xl font-semibold text-white mb-2">Anual</h3>
            <p className="text-sm text-[#f2d8a7]/80 mb-6">Maior poupança a longo prazo</p>
            
            <div className="mb-6">
              <span className="text-5xl font-bold text-[#cba363]">79€</span>
              <span className="text-[#f2d8a7]/80">/mês</span>
              <p className="text-sm text-[#f2d8a7]/60 mt-2">Cobrado 948€ por ano</p>
            </div>
            
            <Link href="/agendar" className="w-full py-4 px-6 rounded-xl bg-[#cba363] hover:bg-[#f2d8a7] text-[#1c1612] font-bold text-center transition-colors mb-8 shadow-lg shadow-[#cba363]/25">
              Começar 7 Dias Grátis
            </Link>
            
            <div className="space-y-4 flex-1">
              {features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#f2d8a7] shrink-0" />
                  <span className="text-gray-100 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 3. PLANO SEMESTRAL */}
          <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col h-full hover:border-[#cba363]/30 transition-colors shadow-xl">
            <h3 className="text-xl font-semibold text-gray-300 mb-2">Semestral</h3>
            <p className="text-sm text-gray-500 mb-6">Equilíbrio perfeito</p>
            
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">89€</span>
              <span className="text-gray-400">/mês</span>
              <p className="text-sm text-gray-500 mt-2">Cobrado 534€ a cada 6 meses</p>
            </div>
            
            <Link href="/agendar" className="w-full py-3 px-6 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-center transition-colors mb-8">
              Começar 7 Dias Grátis
            </Link>
            
            <div className="space-y-4 flex-1">
              {features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#cba363] shrink-0" />
                  <span className="text-gray-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Secção de Add-ons Colorida com a paleta Ouro */}
        <div className="max-w-5xl mx-auto bg-black/60 backdrop-blur-xl border border-[#cba363]/20 rounded-3xl p-8 md:p-12 shadow-xl relative z-10">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-white mb-4">Evolua à medida do seu negócio</h3>
            <p className="text-gray-400 text-base max-w-2xl mx-auto">
              Adicione funcionalidades extra (add-ons) ao seu plano base sempre que precisar de escalar as suas operações.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {addons.map((addon, i) => (
              <div 
                key={i} 
                className={`flex items-center gap-3 px-5 py-3 rounded-xl border ${addon.bg} ${addon.border} transition-transform hover:scale-105 cursor-default`}
              >
                <Plus className={`w-5 h-5 ${addon.color}`} />
                <span className={`font-medium ${addon.color}`}>{addon.name}</span>
              </div>
            ))}
          </div>

          {/* Aviso Importante sobre os Valores */}
          <div className="bg-[#73542a]/10 border border-[#cba363]/20 rounded-2xl p-6 flex items-start gap-4">
            <Info className="w-6 h-6 text-[#cba363] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-[#f2d8a7] font-semibold mb-1">Valores sob consulta</h4>
              <p className="text-sm text-gray-400">
                Os valores destes extras não são fixos porque dependem inteiramente da dimensão, complexidade e necessidades específicas do seu negócio. <strong className="text-gray-200">Os preços finais serão discutidos e ajustados consigo durante a reunião de apresentação do produto.</strong>
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}