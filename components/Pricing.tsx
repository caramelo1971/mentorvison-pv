
import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section id="precos" className="py-32 px-4 bg-black/40 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-cyan-400 font-black tracking-[0.4em] uppercase text-sm mb-6 animate-pulse">Estratégia de Crescimento</p>
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-white leading-none tracking-tighter">
            Quanto vale um aluno que <br className="hidden md:block" />
            <span className="text-cyan-400">não pede reembolso?</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-xl font-medium leading-relaxed">
            O Mentor Vision não é um custo. É a barreira de segurança entre seu lucro e a desistência. Escolha seu nível de comando:
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Plano Mensal - O Ancorador */}
            <div className="bg-[#121418]/60 p-8 md:p-10 rounded-[2.5rem] border border-white/10 flex flex-col items-center text-center transition-all duration-500 hover:border-white/20 group order-2 md:order-1">
              <span className="text-gray-400 text-sm font-black uppercase tracking-[0.2em] mb-6">Flexibilidade Total</span>
              <h3 className="text-2xl font-bold text-white mb-6">Plano Mensal Vision</h3>
              
              <div className="text-gray-400 text-sm font-bold mb-2">Valor Total R$ 814,80</div>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-xl font-bold text-gray-400">R$</span>
                <span className="text-6xl font-black text-white">67,90</span>
                <span className="text-gray-500 font-bold ml-1">/mês</span>
              </div>
              
              <p className="text-gray-400 text-sm mb-10 leading-relaxed font-medium">
                Ideal para quem está começando e quer testar o poder dos dados. Cancele a qualquer momento.
              </p>

              <button className="w-full bg-white/5 hover:bg-white/10 text-white font-bold py-5 rounded-2xl border border-white/10 transition-all active:scale-95">
                COMEÇAR TESTE FLEX
              </button>
            </div>

            {/* Plano Anual - O Protagonista (Destaque Massivo) */}
            <div className="relative group order-1 md:order-2">
              {/* Efeito de Brilho de Fundo */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-[3rem] blur-xl opacity-40 group-hover:opacity-70 transition duration-1000 animate-pulse"></div>
              
              <div className="relative bg-gradient-to-b from-[#1E1B4B] to-[#0F072D] p-10 md:p-14 rounded-[2.5rem] border-2 border-cyan-400/50 flex flex-col items-center text-center shadow-2xl scale-105 md:scale-110">
                
                {/* Badge de Seleção */}
                <div className="absolute -top-6 bg-cyan-500 text-black font-black px-10 py-2.5 rounded-full text-sm uppercase tracking-[0.2em] shadow-[0_10px_30px_rgba(34,211,238,0.5)]">
                  MELHOR ESCOLHA - ECONOMIZE R$ 244
                </div>

                <span className="text-cyan-400 text-sm font-black uppercase tracking-[0.3em] mb-6">Domínio Inabalável</span>
                <h3 className="text-3xl font-black text-white mb-8">Plano Anual Elite</h3>
                
                <div className="flex flex-col items-center mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-cyan-400">R$</span>
                    <span className="text-8xl font-black text-white tracking-tighter drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">570</span>
                  </div>
                  
                  {/* Divisão em duas linhas com destaque em vermelho conforme solicitado */}
                  <div className="flex flex-col items-center mt-4 space-y-2">
                    <span className="text-cyan-400/70 font-black text-sm md:text-base uppercase tracking-[0.2em]">
                      À VISTA NO PIX OU
                    </span>
                    <span className="text-white font-black text-3xl md:text-4xl uppercase tracking-tighter leading-tight">
                      EM 12 X DE <span className="text-red-500 drop-shadow-[0_0_12px_rgba(239,68,68,0.6)] animate-pulse">R$ 47,50</span>
                    </span>
                  </div>
                </div>

                <div className="bg-cyan-500/10 px-6 py-3 rounded-full border border-cyan-500/30 mb-10">
                  <p className="text-cyan-400 font-bold text-sm tracking-wide">
                    🔥 Menos de <span className="text-white text-lg">R$ 1,60</span> por dia de inteligência.
                  </p>
                </div>

                <button className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-black text-2xl py-7 rounded-[2rem] transition-all shadow-[0_15px_40px_rgba(34,211,238,0.3)] transform hover:-translate-y-2 active:scale-95 group/btn">
                  <span className="flex items-center justify-center gap-3">
                    GARANTIR MEU ACESSO ELITE
                    <svg className="w-6 h-6 transition-transform group-hover/btn:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  </span>
                </button>
              </div>
            </div>

          </div>

          {/* Checklist de Recursos Unificado abaixo dos planos para reforçar valor */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Alunos Ilimitados",
              "Dashboard Preditivo",
              "Radar Anti-Churn",
              "Suporte Prioritário",
              "API de Dados",
              "Relatórios Automáticos",
              "Controle Financeiro",
              "Integrações VIP"
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/10 transition-colors hover:bg-white/10">
                <div className="shrink-0 w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center text-black">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </div>
                <span className="text-sm font-bold text-gray-200">{feature}</span>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-500 text-lg italic max-w-2xl mx-auto">
              "A única ferramenta que se paga sozinha com apenas <span className="text-white font-bold">UM aluno</span> que você deixa de perder para o esquecimento."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
