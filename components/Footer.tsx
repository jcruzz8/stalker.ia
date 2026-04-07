import { Facebook, Instagram,} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
        
        {/* Coluna 1: Marca */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Image 
                src="/stalker_logo-remove.png" 
                alt="Logótipo Stalker IA" 
                width={64} 
                height={64} 
                className="w-16 h-16 object-contain"
              />
            <span className="text-xl font-bold">stalker.ia</span>
          </Link>
          <p className="text-gray-400 text-sm">
            Automatização com inteligência artificial para empresas que valorizam o seu dinheiro e os seus clientes.
          </p>
        </div>

        {/* Coluna 2: Produto (Links Corrigidos com /#...) */}
        <div>
          <h4 className="font-bold mb-4">Produto</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/#solucoes" className="hover:text-stalker-light">Funcionalidades</Link></li>
            <li><Link href="/#precos" className="hover:text-stalker-light">Planos</Link></li>
            <li><Link href="/#roi" className="hover:text-stalker-light">Calculadora ROI</Link></li>
            {/* O Ouvir Demos pode mandar para o topo da home */}
            <li><Link href="/" className="hover:text-stalker-light">Exemplos de Conversas</Link></li>
          </ul>
        </div>

        {/* Coluna 3: Sobre Nós (Links Corrigidos) */}
        <div>
           <h4 className="font-bold mb-4">Sobre nós</h4>
           <ul className="space-y-2 text-sm text-gray-400">
             <li><Link href="/#sobre" className="hover:text-stalker-light">Quem somos</Link></li>
             {/* Contactos agora pode mandar para a página de Agendar que tem os emails */}
             <li><Link href="/agendar" className="hover:text-stalker-light">Contactos</Link></li>
           </ul>
        </div>

        {/* Coluna 4: Redes */}
        <div>
          <h4 className="font-bold mb-4">Redes</h4>
          <div className="flex gap-4">
            <a 
                href="https://www.instagram.com/stalker_ia1/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/5 p-2 rounded-full text-gray-400 hover:text-pink-500 hover:bg-white/10 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>&copy; 2026 Stalker IA. Todos os direitos reservados.</p>
        <p>Feito com inteligência em Portugal 🇵🇹</p>
      </div>
    </footer>
  );
}