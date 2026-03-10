import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import RoiCalculator from "@/components/RoiCalculator";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Comparison from "@/components/Comparison";
import About from "@/components/About";
import { ArrowRight, Phone } from "lucide-react";

// @ts-ignore
import LiquidEther from "@/components/LiquidEther";

export default function Home() {
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
              Nunca mais perca uma chamada de negócio. A <span className="text-[#cba363] font-bold">Stalker</span> atende, esclarece dúvidas e agenda reuniões no <span className="text-[#f2d8a7] font-medium">Google Calendar</span>.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-10">
              <button className="w-full md:w-auto px-8 py-4 bg-[#cba363] hover:bg-[#f2d8a7] text-[#1c1612] rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_40px_-10px_rgba(203,163,99,0.5)]">
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
    </main>
  );
}