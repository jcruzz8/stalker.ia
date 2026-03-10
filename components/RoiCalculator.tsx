"use client";

import { useState } from "react";
import { Calculator, TrendingUp, Calendar, CalendarDays, CalendarRange } from "lucide-react";

export default function RoiCalculator() {
  const [ticketMedio, setTicketMedio] = useState(15); 
  const [chamadasPerdidas, setChamadasPerdidas] = useState(3); 

  const perdaDiaria = ticketMedio * chamadasPerdidas;
  const perdaMensal = perdaDiaria * 22; 
  const perdaAnual = perdaMensal * 12;

  const formatMoney = (value: number) => {
    return new Intl.NumberFormat('pt-PT', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section id="roi" className="py-24 px-6 border-y border-white/10 relative overflow-hidden bg-transparent">

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#cba363]/10 text-[#cba363] text-sm font-medium mb-4 border border-[#cba363]/20">
            <Calculator className="w-4 h-4" />
            Simulador de Perdas
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            <span className="text-[#cba363]">A matemática</span> não mente.
          </h2>
          <p className="text-gray-400">
            Veja quanto dinheiro deixa na mesa a curto, médio e longo prazo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LADO ESQUERDO: SLIDERS (CONTROLOS) */}
          <div className="p-8 rounded-3xl bg-black/40 backdrop-blur-md border border-white/10 h-full flex flex-col shadow-xl">
            
            {/* Título adicionado no topo do quadrado */}
            <div className="border-b border-white/5 pb-4 mb-8">
              <h3 className="text-2xl font-bold text-white">
                Calculadora de <span className="text-[#cba363]">investimento</span>
              </h3>
            </div>

            {/* Zona dos Sliders (flex-1 para empurrar o rodapé para baixo) */}
            <div className="flex-1 space-y-8">
              {/* Slider 1 */}
              <div>
                <label className="flex justify-between mb-4 items-end">
                  <span className="text-gray-300 font-medium">Valor Médio </span>
                  <span className="text-3xl font-bold text-white">{ticketMedio}€</span>
                </label>
                <input
                  type="range"
                  min="5"
                  max="200"
                  step="5"
                  value={ticketMedio}
                  onChange={(e) => setTicketMedio(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#cba363] hover:accent-[#f2d8a7] transition-all"
                />
                <p className="text-xs text-gray-500 mt-3">Quanto gasta um cliente médio na sua loja/serviço?</p>
              </div>

              <div className="w-full h-px bg-white/5" />

              {/* Slider 2 */}
              <div>
                <label className="flex justify-between mb-4 items-end">
                  <span className="text-gray-300 font-medium">Chamadas Perdidas / Dia</span>
                  <span className="text-3xl font-bold text-[#f2d8a7]">{chamadasPerdidas}</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={chamadasPerdidas}
                  onChange={(e) => setChamadasPerdidas(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#cba363] hover:accent-[#f2d8a7] transition-all"
                />
                <p className="text-xs text-gray-500 mt-3">Chamadas não atendidas ou sinal de ocupado.</p>
              </div>
            </div>

            {/* Rodapé adicionado no fundo do quadrado */}
            <div className="pt-6 mt-8 border-t border-white/5 text-center">
              <p className="text-sm text-gray-400 italic">
                Ajuste os valores consoante o seu negócio
              </p>
            </div>
            
          </div>

          {/* LADO DIREITO: RESULTADOS */}
          <div className="space-y-4">
            <p className="text-gray-400 text-lg mb-2 font-medium">Você está a perder:</p>
            
            {/* Cartão Dia */}
            <div className="flex items-center justify-between p-6 rounded-2xl bg-black/20 backdrop-blur-sm border border-white/5 hover:border-[#cba363]/30 transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/5 rounded-lg text-gray-400">
                  <Calendar className="w-5 h-5" />
                </div>
                <span className="text-gray-300">Por Dia</span>
              </div>
              <span className="text-2xl font-bold text-white">{formatMoney(perdaDiaria)}</span>
            </div>

            {/* Cartão Mês */}
            <div className="flex items-center justify-between p-6 rounded-2xl bg-black/20 backdrop-blur-sm border border-white/5 hover:border-[#cba363]/30 transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/5 rounded-lg text-gray-400">
                  <CalendarDays className="w-5 h-5" />
                </div>
                <span className="text-gray-300">Por Mês</span>
              </div>
              <span className="text-3xl font-bold text-white">{formatMoney(perdaMensal)}</span>
            </div>

            {/* Cartão Ano */}
            <div className="relative overflow-hidden flex items-center justify-between p-8 rounded-2xl bg-gradient-to-r from-[#1c1612] to-[#73542a]/60 border border-[#cba363]/30 shadow-[0_0_30px_rgba(203,163,99,0.15)]">
              <div className="relative z-10 flex items-center gap-3">
                <div className="p-2 bg-[#cba363]/20 rounded-lg text-[#cba363]">
                  <CalendarRange className="w-6 h-6" />
                </div>
                <span className="text-[#f2d8a7] font-medium">Num Ano</span>
              </div>
              <span className="relative z-10 text-4xl md:text-5xl font-bold text-[#cba363] drop-shadow-md">
                {formatMoney(perdaAnual)}
              </span>
            </div>

            {/* Call to Action Pequeno */}
            <div className="mt-6 p-4 bg-[#cba363]/10 border border-[#cba363]/20 rounded-xl flex gap-4 items-center">
              <TrendingUp className="w-5 h-5 text-[#cba363] flex-shrink-0" />
              <p className="text-sm text-gray-300">
                Recupere este valor por apenas <span className="font-bold text-[#f2d8a7]">99€/mês</span>.
              </p>
            </div>
            
             <button className="w-full py-4 bg-[#cba363] text-[#1c1612] font-bold rounded-xl hover:bg-[#f2d8a7] transition-colors shadow-lg shadow-[#cba363]/20 mt-2">
              Recuperar O Meu Dinheiro
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}