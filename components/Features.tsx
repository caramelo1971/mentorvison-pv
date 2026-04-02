
import React from 'react';

const FeatureCard = ({ title, description, gradientClass, icon, shadowColor }: { title: string, description: string, gradientClass: string, icon: React.ReactNode, shadowColor: string }) => (
  <div className={`
    group p-10 rounded-[3rem] ${gradientClass} h-full flex flex-col items-start 
    transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
    hover:-translate-y-4 hover:scale-[1.02] 
    cursor-pointer relative overflow-hidden border border-white/20
    shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)]
    hover:shadow-[0_30px_70px_-10px_${shadowColor}]
  `}>
    {/* Camada de brilho gloss para sofisticação */}
    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-30 pointer-events-none"></div>
    
    {/* Ícone com fundo de vidro branco para contraste */}
    <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl mb-8 border border-white/30 shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
      <div className="text-white drop-shadow-md">
        {icon}
      </div>
    </div>
    
    {/* Texto com sombra sutil para garantir legibilidade absoluta sobre qualquer cor */}
    <h3 className="text-2xl md:text-3xl font-black mb-4 tracking-tighter text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] transition-all duration-300">
      {title}
    </h3>
    
    <p className="text-white/90 text-lg font-bold leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]">
      {description}
    </p>

    {/* Detalhe de luz inferior */}
    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
  </div>
);

const Features: React.FC = () => {
  return (
    <section id="recursos" className="py-32 px-4 bg-[#0F072D] scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <p className="text-cyan-400 font-black tracking-[0.4em] uppercase text-sm mb-6 animate-pulse">Tecnologia de Elite</p>
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-white leading-none tracking-tighter">
            Domine o jogo com <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Controle Absoluto.</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-xl font-medium leading-relaxed">
            Seus alunos não são apenas nomes em uma lista. São ativos que precisam de monitoramento constante. Use o arsenal Mentor Vision para garantir que nenhum deles fique para trás.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <FeatureCard 
            title="Radar de Atividade"
            description="Detecte alunos silenciosos antes que eles desistam. O radar monitora o pulso da sua mentoria 24/7."
            gradientClass="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800"
            shadowColor="rgba(37,99,235,0.4)"
            icon={<svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
          />
          <FeatureCard 
            title="Biometria de Progresso"
            description="Transforme o aprendizado em gráficos de evolução. Saiba exatamente onde cada cérebro está travado."
            gradientClass="bg-gradient-to-br from-lime-600 via-lime-500 to-lime-700"
            shadowColor="rgba(132,204,22,0.4)"
            icon={<svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>}
          />
          <FeatureCard 
            title="Escudo Anti-Churn"
            description="Alertas em tempo real sobre riscos de cancelamento. Recupere o faturamento antes do reembolso."
            gradientClass="bg-gradient-to-br from-rose-700 via-rose-600 to-rose-800"
            shadowColor="rgba(225,29,72,0.4)"
            icon={<svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>}
          />
          <FeatureCard 
            title="Central Financeira"
            description="Fluxo de caixa cristalino. Veja quem pagou, quem deve e sua projeção para os próximos 12 meses."
            gradientClass="bg-gradient-to-br from-purple-700 via-purple-600 to-purple-800"
            shadowColor="rgba(147,51,234,0.4)"
            icon={<svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>}
          />
          <FeatureCard 
            title="Histórico Inabalável"
            description="O dossiê completo de cada mentorado. Personalização extrema sem gastar um minuto a mais do seu tempo."
            gradientClass="bg-gradient-to-br from-emerald-700 via-emerald-600 to-emerald-800"
            shadowColor="rgba(5,150,105,0.4)"
            icon={<svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>}
          />
          <FeatureCard 
            title="Prova Social Automática"
            description="Gere relatórios de impacto que provam seu valor. Seus alunos verão a própria evolução e venderão por você."
            gradientClass="bg-gradient-to-br from-orange-600 via-orange-500 to-orange-700"
            shadowColor="rgba(234,88,12,0.4)"
            icon={<svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
