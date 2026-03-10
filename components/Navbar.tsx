"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* 1. LOGO AGORA É UM LINK PARA A HOME */}
        {/* 1. LOGO E NOME (Apenas UM componente Link) */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Image 
            src="/stalker_logo-remove.png" 
            alt="Logótipo Stalker IA" 
            width={64} 
            height={64} 
            className="w-16 h-16 object-contain"
          />
          <span className="text-xl font-bold text-white tracking-tighter">stalker.ia</span>
        </Link>

        {/* 2. LINKS COM BARRA ATRÁS (/#...) PARA FUNCIONAR EM QUALQUER PÁGINA */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-400">
          <Link href="/#solucoes" className="hover:text-white transition-colors">Soluções</Link>
          <Link href="/#roi" className="hover:text-white transition-colors">Calculadora</Link>
          <Link href="/#precos" className="hover:text-white transition-colors">Planos</Link>
          <Link href="/#faq" className="hover:text-white transition-colors">Dúvidas</Link>
          {/* O Quem Somos também precisa da barra */}
          <Link href="/#sobre" className="hover:text-white transition-colors">
            Quem Somos
          </Link>
        </div>

        {/* CTA Button */}
        <Link 
          href="/agendar" 
          className="bg-[#cba363] text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#f2d8a7] transition-colors"
        >
          Agendar Reunião
        </Link>
      </div>
    </nav>
  );
}