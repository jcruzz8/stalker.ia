"use client";

import { Linkedin } from "lucide-react";
import Image from "next/image"; // Importante para performance no Next.js

export default function About() {
  const team = [
    {
      name: "José Cruz",
      role: "Engenheiro Informático",
      description: "O cérebro técnico. Especialista em arquitetura de software e inteligência artificial.",
      image: "/jose.JPEG", // Substitui pelo caminho real da tua foto
      linkedin: "https://www.linkedin.com/in/jose-cruzz0812/",
    },
    {
      name: "Filipe Duarte",
      role: "Gestor de Marketing",
      description: "A voz do negócio. Estratega de crescimento e especialista em automação de vendas.",
      image: "/filipe.jpeg", // Substitui pelo caminho real da tua foto
      linkedin: "https://www.linkedin.com/in/filipeduartefa/",
    },
  ];

  return (
    <section id="sobre" className="py-24 px-6 relative border-t border-white/10 overflow-hidden bg-transparent">
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Quem está por trás da <span className="text-[#cba363]">Stalker</span>?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Combinamos engenharia de ponta com estratégias de marketing agressivas para criar o produto que o mercado português precisava.
          </p>
        </div>

        {/* Grelha da Equipa */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          {team.map((member, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-3xl bg-black/40 backdrop-blur-md border border-white/10 hover:border-[#cba363]/50 transition-all duration-300 hover:bg-black/60 shadow-xl"
            >
              <div className="flex flex-col items-center text-center">
                
                {/* Contentor da Foto */}
                <div className="w-32 h-32 rounded-full mb-6 relative overflow-hidden border-2 border-white/10 group-hover:border-[#cba363] transition-all duration-500 shadow-inner bg-[#cba363]/10">
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Nome e Cargo */}
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <span className="inline-block px-3 py-1 rounded-full bg-[#cba363]/20 text-[#f2d8a7] text-xs font-bold mb-4 tracking-wide uppercase border border-[#cba363]/20">
                  {member.role}
                </span>

                {/* Descrição */}
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {member.description}
                </p>

                {/* Redes Sociais */}
                <div className="flex gap-4">
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-white/5 p-3 rounded-full text-gray-400 hover:text-[#0c0805] hover:bg-[#cba363] transition-all duration-300 shadow-lg"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}