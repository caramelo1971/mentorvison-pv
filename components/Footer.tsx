
import React from 'react';

const Logo = () => (
  <div className="flex items-center gap-3 group cursor-pointer scale-90 origin-left">
    {/* Node-link "M" Icon */}
    <div className="relative w-10 h-10 flex items-center justify-center">
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">
        <defs>
          <linearGradient id="logoGradFooter" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
        <circle cx="20" cy="80" r="6" fill="#a855f7" />
        <circle cx="20" cy="30" r="6" fill="#22d3ee" />
        <circle cx="50" cy="55" r="8" fill="#22d3ee" />
        <circle cx="80" cy="30" r="6" fill="#60a5fa" />
        <circle cx="80" cy="80" r="6" fill="#a855f7" />
        <path d="M20 80 L20 30 L50 55 L80 30 L80 80" stroke="url(#logoGradFooter)" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" className="opacity-70" />
        <circle cx="50" cy="85" r="3" fill="#60a5fa" className="opacity-50" />
      </svg>
    </div>

    <div className="h-8 w-[1.5px] bg-white/30 rounded-full"></div>

    <div className="flex flex-col leading-none">
      <span className="text-xl font-black text-white tracking-tight">MENTOR</span>
      <span className="text-[10px] font-bold text-blue-400 tracking-[0.3em] mt-0.5">VISION</span>
    </div>
  </div>
);

const Footer: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-24 px-4 bg-[#0F072D] border-t border-white/5 relative overflow-hidden">
      {/* Glow Sutil de Fundo */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-cyan-500/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <Logo />
            <p className="text-gray-400 text-base leading-relaxed max-w-xs font-medium">
              Transformando mentores em comandantes de dados através da inteligência em retenção e gestão de alunos.
            </p>
            <div className="flex gap-5">
              {[
                { name: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
                { name: 'X', path: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' }
              ].map((social) => (
                <div key={social.name} className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition-all duration-300 cursor-pointer text-white border border-white/10 hover:border-cyan-400 group">
                  <svg className="w-6 h-6 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.path}/>
                  </svg>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black mb-8 text-white uppercase tracking-[0.2em] text-sm">Produto</h4>
            <ul className="space-y-5 text-base text-gray-400 font-semibold">
              <li><a href="#recursos" onClick={(e) => scrollToSection(e, '#recursos')} className="hover:text-cyan-400 transition-colors">Funcionalidades</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Integrações</a></li>
              <li><a href="#precos" onClick={(e) => scrollToSection(e, '#precos')} className="hover:text-cyan-400 transition-colors">Preços</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Roadmap</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black mb-8 text-white uppercase tracking-[0.2em] text-sm">Recursos</h4>
            <ul className="space-y-5 text-base text-gray-400 font-semibold">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Documentação</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Comunidade</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Afiliados</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black mb-8 text-white uppercase tracking-[0.2em] text-sm">Empresa</h4>
            <ul className="space-y-5 text-base text-gray-400 font-semibold">
              <li><a href="#beneficios" onClick={(e) => scrollToSection(e, '#beneficios')} className="hover:text-cyan-400 transition-colors">Sobre nós</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Contato</a></li>
              <li><a href="/privacidade.html" className="hover:text-cyan-400 transition-colors">Privacidade</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/10 text-sm text-gray-500 font-bold">
          <p>© 2024 Mentor Vision. Todos os direitos reservados.</p>
          <div className="flex gap-10 mt-6 md:mt-0">
            <a href="/termos.html" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="/privacidade.html" className="hover:text-white transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
