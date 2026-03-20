
import React from 'react';

const DashboardPreview: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-black/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-bold tracking-widest uppercase text-sm mb-4">Dashboard em Ação</p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Veja seu painel ao vivo</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Acompanhe a evolução, veja contratos, pagamentos e métricas de todos os seus alunos em um dashboard dinâmico.
          </p>
        </div>

        <div className="bg-[#121418] rounded-[3rem] p-4 md:p-8 border border-white/10 shadow-3xl">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Sidebar Mock */}
            <div className="hidden md:block w-16 bg-white/5 rounded-2xl p-4 flex flex-col gap-8 items-center">
              <div className="w-8 h-8 rounded bg-cyan-500"></div>
              <div className="w-6 h-6 rounded bg-white/10"></div>
              <div className="w-6 h-6 rounded bg-white/10"></div>
              <div className="w-6 h-6 rounded bg-white/10"></div>
              <div className="w-6 h-6 rounded bg-white/10"></div>
            </div>
            
            <div className="flex-1 space-y-8">
              {/* Header Mock */}
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold">Resumo Financeiro</h3>
                <div className="flex gap-2">
                  <div className="px-4 py-2 bg-white/5 rounded-lg text-xs font-medium border border-white/5">Últimos 30 dias</div>
                  <div className="px-4 py-2 bg-cyan-500 rounded-lg text-xs font-bold text-black cursor-pointer">Exportar Relatório</div>
                </div>
              </div>

              {/* Cards Mock */}
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                {[
                  { label: 'MRR Total', value: 'R$ 12.450', color: 'text-cyan-400' },
                  { label: 'Novos Alunos', value: '47', color: 'text-green-400' },
                  { label: 'Ticket Médio', value: 'R$ 264,89', color: 'text-yellow-400' },
                  { label: 'Taxa de Churn', value: '2.3%', color: 'text-purple-400' },
                  { label: 'LTV Projetado', value: 'R$ 1.840', color: 'text-blue-400' },
                ].map((stat, i) => (
                  <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/5">
                    <p className="text-xs text-gray-500 font-bold mb-2 uppercase tracking-wider">{stat.label}</p>
                    <p className={`text-xl font-bold ${stat.color}`}>{stat.value}</p>
                  </div>
                ))}
              </div>

              {/* Graph Mock */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white/5 p-8 rounded-3xl border border-white/5 h-80 flex items-end gap-2">
                  {[40, 70, 45, 90, 65, 80, 50, 95, 100, 75, 60, 85].map((h, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-t-lg transition-all hover:opacity-80" style={{ height: `${h}%` }}></div>
                  ))}
                </div>
                <div className="bg-white/5 p-8 rounded-3xl border border-white/5 space-y-6">
                  <h4 className="font-bold">Índice de Risco</h4>
                  {[
                    { name: 'Ricardo Santos', risk: 'Baixo', color: 'bg-green-500' },
                    { name: 'Ana Oliveira', risk: 'Médio', color: 'bg-yellow-500' },
                    { name: 'Carlos Lima', risk: 'Crítico', color: 'bg-red-500' },
                    { name: 'Marina Silva', risk: 'Baixo', color: 'bg-green-500' },
                  ].map((user, i) => (
                    <div key={i} className="flex justify-between items-center text-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/10"></div>
                        <span>{user.name}</span>
                      </div>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${user.color} text-black`}>{user.risk}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
