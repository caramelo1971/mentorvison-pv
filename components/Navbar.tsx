
import React, { useState } from 'react';

const Logo = () => (
  <div className="flex items-center gap-4 group cursor-pointer transition-all duration-300 hover:scale-[1.05] active:scale-95">
    {/* Node-link "M" Icon - Enhanced size with Pulse and Glow */}
    <div className="relative w-12 h-12 flex items-center justify-center transition-all duration-300 group-hover:drop-shadow-[0_0_20px_rgba(34,211,238,0.8)] group-hover:animate-logo-subtle-pulse">
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
        <defs>
          <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
        <circle cx="20" cy="80" r="6" fill="#a855f7" />
        <circle cx="20" cy="30" r="6" fill="#22d3ee" />
        <circle cx="50" cy="55" r="8" fill="#22d3ee" className="animate-pulse" />
        <circle cx="80" cy="30" r="6" fill="#60a5fa" />
        <circle cx="80" cy="80" r="6" fill="#a855f7" />
        <path d="M20 80 L20 30 L50 55 L80 30 L80 80" stroke="url(#logoGrad)" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 group-hover:opacity-100 transition-opacity" />
        <circle cx="50" cy="85" r="3" fill="#60a5fa" className="opacity-50 group-hover:opacity-80 transition-opacity" />
      </svg>
    </div>

    <div className="h-10 w-[2px] bg-white/30 rounded-full group-hover:bg-cyan-400/50 transition-colors"></div>

    <div className="flex flex-col leading-none">
      <span className="text-2xl font-black text-white tracking-tight group-hover:text-cyan-50 transition-colors">MENTOR</span>
      <span className="text-[12px] font-bold text-blue-400 tracking-[0.4em] mt-0.5 group-hover:text-cyan-400 transition-colors uppercase">Vision</span>
    </div>
  </div>
);

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Recursos', href: '#recursos' },
    { name: 'Benefícios', href: '#beneficios' },
    { name: 'Preços', href: '#precos' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-[#170B42]/90 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="shrink-0">
            <a href="#" onClick={scrollToTop}>
              <Logo />
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-16 text-lg font-bold">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 relative group tracking-wide"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-cyan-400 transition-all group-hover:w-full rounded-full"></span>
              </a>
            ))}
          </div>

          <div className="hidden md:block w-12"></div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-white p-2 transition-transform active:rotate-90"
              aria-label="Menu Principal"
            >
              {isMenuOpen ? (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden fixed inset-0 top-24 bg-[#170B42] transition-all duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}`}>
        <div className="px-8 pt-12 pb-12 space-y-8 h-full flex flex-col">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleLinkClick(e, link.href)}
              className="block text-3xl font-black text-white hover:text-cyan-400 py-4 border-b border-white/10 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes logo-subtle-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        .group-hover\\:animate-logo-subtle-pulse:hover {
          animation: logo-subtle-pulse 2s infinite ease-in-out;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
