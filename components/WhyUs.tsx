
import React, { useState } from 'react';

interface TestimonialProps {
  name: string;
  role: string;
  quote: string;
  metric: string;
  metricLabel: string;
  image: string;
  isExpanded: boolean;
  onToggle: () => void;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ 
  name, role, quote, metric, metricLabel, image, isExpanded, onToggle 
}) => (
  <div 
    onClick={onToggle}
    className={`p-10 rounded-[2.5rem] border-2 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group cursor-pointer relative overflow-hidden flex flex-col h-full ${
      isExpanded 
        ? 'bg-gradient-to-br from-[#1E1B4B] to-[#0F072D] border-cyan-400 shadow-[0_0_60px_rgba(34,211,238,0.25)] md:col-span-2' 
        : 'bg-[#0F072D] border-white/10 hover:border-cyan-500/40 hover:shadow-2xl'
    }`}
  >
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-start mb-6">
        <div className={`text-cyan-400 font-serif italic transition-all duration-500 ${isExpanded ? 'text-8xl opacity-80' : 'text-6xl opacity-40 group-hover:opacity-60'}`}>
          "
        </div>
        <div className={`transition-all duration-300 ${isExpanded ? 'rotate-180 text-cyan-400' : 'text-gray-500'}`}>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      <p className={`leading-relaxed font-semibold transition-all duration-500 mb-10 ${
        isExpanded 
          ? 'text-2xl text-white italic' 
          : 'text-lg text-gray-300 line-clamp-3'
      }`}>
        {quote}
      </p>

      <div className="mt-auto flex items-center justify-between gap-6 border-t border-white/10 pt-8">
        <div className="flex items-center gap-5">
          <div className="relative">
            <img 
              src={image} 
              alt={name} 
              className={`rounded-full border-2 transition-all duration-500 object-cover ${
                isExpanded ? 'w-20 h-20 border-cyan-400 shadow-xl' : 'w-14 h-14 border-white/20'
              }`} 
            />
          </div>
          <div>
            <p className={`font-black text-white transition-all duration-300 ${isExpanded ? 'text-xl' : 'text-base'}`}>{name}</p>
            <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">{role}</p>
          </div>
        </div>
        <div className="text-right shrink-0">
          <span className={`text-cyan-400 font-black block leading-none transition-all duration-500 ${isExpanded ? 'text-4xl' : 'text-2xl'}`}>
            {metric}
          </span>
          <span className="text-[10px] text-gray-300 uppercase tracking-widest font-black">{metricLabel}</span>
        </div>
      </div>
    </div>
  </div>
);

const WhyUs: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const testimonials = [
    {
      name: "Marcelo Costa",
      role: "Mentor de Marketing Digital",
      quote: "Antes do Mentor Vision, eu perdia horas tentando entender quem estava acompanhando as aulas. Agora tenho tudo na palma da mão. Minha taxa de retenção explodiu em apenas 2 meses graças à visibilidade total que ganhei sobre meus alunos.",
      metric: "+23%",
      metricLabel: "Retenção",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100"
    },
    {
      name: "Juliana Mendes",
      role: "Estrategista de Carreira",
      quote: "Consegui escalar meu programa de 20 para 80 mentorados sem contratar suporte adicional. O dashboard automatizado faz o trabalho de uma equipe inteira de 3 pessoas, permitindo focar no que realmente importa: o conteúdo.",
      metric: "4x",
      metricLabel: "Escalabilidade",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100"
    },
    {
      name: "Roberto Farias",
      role: "Mentor de Finanças",
      quote: "A funcionalidade de alertas de risco é simplesmente genial. Consegui salvar 5 contratos críticos este mês simplesmente por saber exatamente quem não estava acessando o conteúdo e entrar em contato proativamente.",
      metric: "-15%",
      metricLabel: "Churn",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100"
    }
  ];

  const toggleExpansion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="beneficios" className="py-32 px-4 bg-[#170B42] scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          
          <div className="lg:col-span-5 space-y-12">
            <div className="relative">
              <div className="absolute -left-6 top-0 w-1.5 h-32 bg-gradient-to-b from-cyan-500 to-transparent"></div>
              <p className="text-cyan-400 font-black tracking-[0.3em] uppercase text-sm mb-6">A Diferença Mentor Vision</p>
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-none text-white">Por que os maiores mentores estão migrando?</h2>
              <p className="text-gray-200 text-xl font-medium leading-relaxed">
                Nós não vendemos software. Nós vendemos a <span className="text-white font-bold underline decoration-cyan-500 underline-offset-4">Paz de Espírito</span> de saber que seu negócio está sob controle total.
              </p>
            </div>

            <div className="space-y-10">
              {[
                { title: "Economize +40 horas mensais", desc: "Automatização inteligente de relatórios e acessos." },
                { title: "Radar de Evasão", desc: "Identifique quem vai sair antes mesmo deles pensarem nisso." },
                { title: "Métricas de Evolução Cerebral", desc: "Dados reais de aprendizado, não apenas 'visto'." },
                { title: "Prova Social de Alto Padrão", desc: "Relatórios de progresso que fecham novas vendas sozinhos." }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-6 group">
                  <div className="mt-1 w-12 h-12 rounded-2xl bg-cyan-500/10 border-2 border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-black text-2xl mb-2 text-white group-hover:text-cyan-400 transition-colors tracking-tight">{item.title}</h4>
                    <p className="text-gray-300 text-lg font-medium leading-snug">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] -z-10 rounded-full animate-pulse"></div>
            
            {testimonials.map((t, i) => (
              <TestimonialCard 
                key={i} 
                {...t} 
                isExpanded={expandedIndex === i}
                onToggle={() => toggleExpansion(i)}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyUs;
