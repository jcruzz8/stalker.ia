"use client";

import { memo } from "react";
import { Check, X, User, Bot } from "lucide-react";

export default function Comparison() {
  return (
    // AJUSTE: Trocado bg-[#050302] por bg-transparent
    <section className="py-24 px-6 relative overflow-hidden bg-transparent">

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Cabeçalho da Secção */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
             Quantos euros perdeu este mês <br />
             por{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f2d8a7] to-[#cba363]">
              não responder a uma mensagem?
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Cada mensagem perdida é dinheiro que fica na mesa. Veja a diferença entre contratar uma pessoa e ativar a Stalker IA.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          
          {/* CARTÃO 1: SOLUÇÃO TRADICIONAL */}
          <div className="relative p-8 rounded-3xl bg-black/60 backdrop-blur-xl border border-white/10 flex flex-col opacity-80 hover:opacity-100 transition-opacity">
            <div className="absolute top-0 right-0 bg-red-500/20 text-red-400 text-xs font-bold px-4 py-2 rounded-bl-2xl rounded-tr-2xl border-b border-l border-red-500/20">
              SOLUÇÃO TRADICIONAL
            </div>

            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 rounded-full bg-red-500/10">
                <User className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-white">Rececionista Humano</h3>
            </div>

            <ul className="space-y-6 flex-1">
              <li className="flex gap-4">
                <div className="mt-1 bg-red-500/20 p-1 rounded-full h-fit">
                    <X className="w-4 h-4 text-red-500" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-200">Disponibilidade Limitada</h4>
                  <p className="text-sm text-gray-500">Horário 9h-18h, pausas para almoço, férias e baixas médicas.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 bg-red-500/20 p-1 rounded-full h-fit">
                    <X className="w-4 h-4 text-red-500" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-200">1 Pessoa de Cada Vez</h4>
                  <p className="text-sm text-gray-500">Se vários clientes mandarem mensagens, alguns podem ficar esquecidos.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 bg-red-500/20 p-1 rounded-full h-fit">
                    <X className="w-4 h-4 text-red-500" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-200">Custo Elevado</h4>
                  <p className="text-sm text-gray-500">Salário Mínimo + Segurança Social + Subsídios {'>'} 1000€/mês.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 bg-red-500/20 p-1 rounded-full h-fit">
                    <X className="w-4 h-4 text-red-500" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-200">Erro Humano</h4>
                  <p className="text-sm text-gray-500">Esquecimentos, apontamentos errados na agenda ou mau humor.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* CARTÃO 2: STALKER.IA */}
          <div className="relative p-8 rounded-3xl bg-gradient-to-br from-[#73542a]/80 to-[#cba363]/80 backdrop-blur-xl border border-[#f2d8a7]/50 flex flex-col shadow-[0_0_50px_-12px_rgba(203,163,99,0.3)] transform transition-transform duration-300 hover:scale-105 z-20 cursor-default">
             {/* Badge */}
             <div className="absolute top-0 right-0 bg-white text-[#73542a] text-xs font-bold px-4 py-2 rounded-bl-2xl rounded-tr-2xl shadow-lg">
              RECOMENDADO
            </div>

            {/* Ícone e Título */}
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 rounded-full bg-white/20 backdrop-blur-sm border border-white/20">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Stalker.ia</h3>
            </div>

            {/* Lista de Pontos Positivos */}
            <ul className="space-y-6 flex-1 text-white">
              <li className="flex gap-4">
                <div className="mt-1 bg-white/20 p-1 rounded-full h-fit">
                    <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-bold">Disponível 24/7/365</h4>
                  <p className="text-sm text-white/90">Nunca dorme, nunca para, trabalha ao Domingo e Natal.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 bg-white/20 p-1 rounded-full h-fit">
                    <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-bold">Escala Infinita</h4>
                  <p className="text-sm text-white/90">Responde a 100 mensagens ao mesmo tempo. Zero sinais de ocupado.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 bg-white/20 p-1 rounded-full h-fit">
                    <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-bold">Custo Reduzido</h4>
                  <p className="text-sm text-white/90">Uma fração do custo de um salário. A partir de 99€/mês.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 bg-white/20 p-1 rounded-full h-fit">
                    <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-bold">Precisão Perfeita</h4>
                  <p className="text-sm text-white/90">Sincronização direta com o Calendário. Zero erros.</p>
                </div>
              </li>
            </ul>

            {/* Botão CTA dentro do Card */}
            <div className="mt-8 pt-8 border-t border-white/20">
                <a href="#precos" className="w-full block text-center py-4 bg-white text-[#73542a] font-bold rounded-xl hover:bg-[#f2d8a7] hover:text-[#0c0805] transition-colors shadow-lg">
                  Começar Agora
                </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}