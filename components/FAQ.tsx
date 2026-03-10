"use client";

import { useState, memo } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "A IA fala Português de Portugal ou Brasileiro?",
    answer:
      "Nós configuramos a IA especificamente com sotaque de Portugal (PT-PT). Utilizamos vozes neuronais avançadas que soam naturais e profissionais, evitando o tom robótico.",
  },
  {
    question: "O que acontece se ligarem 10 pessoas ao mesmo tempo?",
    answer:
      "A IA tem escalabilidade infinita. Ela atende as 10 chamadas em simultâneo, sem deixar ninguém à espera e sem sinal de ocupado.",
  },
  {
    question: "Preciso de mudar o meu número de telefone?",
    answer:
      "Não. Pode manter o seu número atual e simplesmente ativar o desvio de chamadas para o número da nossa IA quando não puder atender (ou permanentemente).",
  },
  {
    question: "Como é que vejo as marcações?",
    answer:
      "Tudo aparece automaticamente no seu Google Calendar e recebe um resumo da conversa por WhatsApp ou Email assim que a chamada termina.",
  },
  {
    question: "Existe fidelização?",
    answer:
      "Não. O serviço é pré-pago consoante o seu plano. Pode cancelar a qualquer momento sem penalizações.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    // AJUSTE: Trocado bg-[#050302] por bg-transparent
    <section id="faq" className="py-24 px-6 relative overflow-hidden bg-transparent">

      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-white">
          Dúvidas <span className="text-[#cba363]">Frequentes</span>
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-2xl bg-black/50 backdrop-blur-xl overflow-hidden transition-all hover:border-[#cba363]/40 shadow-2xl"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left group"
              >
                <span className={`font-semibold text-lg transition-colors ${openIndex === index ? 'text-[#cba363]' : 'text-white'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-[#f2d8a7] flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-500 group-hover:text-[#cba363] flex-shrink-0 transition-colors" />
                )}
              </button>
              
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 pt-0 border-t border-white/5 mt-2">
                  <p className="text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}