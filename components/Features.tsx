import { Phone, Calendar, ShieldCheck, Zap } from "lucide-react";

const features = [
  {
    title: "Atendimento 24/7",
    description: "A sua loja/serviço nunca fecha. Faça dinheiro às 3 da manhã de domingo.",
    icon: <Phone className="w-6 h-6 text-stalker-light" />,
    colSpan: "md:col-span-2", // Este cartão ocupa 2 espaços (mais largo)
  },
  {
    title: "Zero Atrasos",
    description: "Respostas imediatas. O cliente não fica à espera nunca.",
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    colSpan: "md:col-span-1",
  },
  {
    title: "Sincronização Total",
    description: "Liga-se diretamente ao seu Google Calendar. Sem conflitos de horários.",
    icon: <Calendar className="w-6 h-6 text-purple-400" />,
    colSpan: "md:col-span-1",
  },
  {
    title: "Privacidade Garantida",
    description: "Dados encriptados e compatíveis com RGPD europeu.",
    icon: <ShieldCheck className="w-6 h-6 text-green-400" />,
    colSpan: "md:col-span-2",
  },
];

export default function Features() {
  return (
    <section id="solucoes" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          Mais do que uma <span className="text-stalker-gold">secretária eletrónica.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`
                ${feature.colSpan} 
                relative group overflow-hidden p-8 rounded-3xl 
                bg-white/5 border border-white/10 
                hover:bg-white/10 transition-colors duration-300
              `}
            >
              {/* Efeito de brilho no hover */}
              <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 rounded-full bg-stalker-gold/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="mb-6 p-4 bg-black/40 w-fit rounded-2xl border border-white/5">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}