
import React, { useState, useRef } from 'react';

const Hero: React.FC = () => {
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
      setIsVideoEnded(false);
    }
  };

  const handleVideoEnd = () => {
    setIsVideoEnded(true);
    setIsPlaying(false);
  };

  const scrollToPricing = () => {
    const element = document.querySelector('#precos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 pb-24 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl aspect-square bg-cyan-500/5 blur-[120px] -z-10 rounded-full"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16 text-left">
          
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center px-6 py-2.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-sm md:text-base font-black text-cyan-400 mb-8 tracking-[0.15em] uppercase shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all hover:border-cyan-400/50">
              <span className="mr-2">👁️</span> O MECANISMO OCULTO DA RETENÇÃO
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-8 tracking-tighter text-white max-w-2xl">
              Assuma o Controle Completo <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
                da Jornada dos Seus Alunos
              </span>
            </h1>
            
            <p className="text-gray-200 text-xl md:text-2xl max-w-xl mb-8 leading-tight font-medium drop-shadow-sm">
              Enquanto você dorme, alunos silenciosos abandonam a sua mentoria. O Mentor Vision é o <span className="text-white font-bold underline decoration-cyan-500 underline-offset-4 text-2xl">Sistema de Controle e Alerta</span> que você precisa.
            </p>
          </div>

          <div className="order-1 lg:order-2 relative group perspective-1000 lg:translate-x-12">
            <div className="absolute -inset-10 bg-cyan-500/20 rounded-full blur-[100px] opacity-50 group-hover:opacity-80 transition-opacity duration-1000"></div>
            <div className="relative transform lg:rotate-2 lg:group-hover:rotate-0 transition-all duration-700 ease-out">
              <div className="bg-[#0f1115] rounded-t-2xl p-1.5 border-t border-x border-white/20 shadow-[0_0_50px_rgba(6,182,212,0.15)]">
                <div className="flex gap-1.5 mb-2 px-3 pt-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                  <div className="ml-2 h-2.5 w-24 bg-white/20 rounded-full"></div>
                </div>
                <div className="rounded-lg overflow-hidden border border-white/10 aspect-[16/10] relative bg-black">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" 
                    alt="O Comando Central do Mentor de Sucesso" 
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent pointer-events-none"></div>
                </div>
              </div>
              <div className="h-3 bg-[#1e2128] rounded-b-2xl border-b border-x border-white/10 shadow-2xl w-[104%] -ml-[2%] relative z-10"></div>
            </div>
          </div>
        </div>

        {/* Video Placeholder Section */}
        <div className="relative max-w-5xl mx-auto flex flex-col items-center gap-10">
          <div className="w-full relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            
            <div className="relative aspect-video rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#0c0d10] shadow-2xl">
              {!isPlaying && !isVideoEnded && (
                <div 
                  onClick={handlePlayVideo}
                  className="absolute inset-0 flex items-center justify-center z-20 bg-black/60 backdrop-blur-sm cursor-pointer hover:bg-black/40 transition-all group"
                >
                  <div className="w-28 h-28 bg-white/5 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-500 shadow-3xl">
                    <div className="w-20 h-20 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/60">
                      <svg className="w-10 h-10 text-black fill-current ml-1" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              )}

              <video 
                ref={videoRef}
                className="w-full h-full object-cover"
                onEnded={handleVideoEnd}
                controls={isPlaying}
                poster="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2426"
              >
                <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
              
              <div className="absolute bottom-8 left-8 flex items-center gap-4 z-10 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                <span className="text-xs font-black text-white tracking-[0.3em] uppercase">ASSISTA: O MECANISMO DE RETENÇÃO</span>
              </div>
            </div>
          </div>

          {/* CTA que aparece após o vídeo */}
          <div className={`w-full max-w-3xl transition-all duration-1000 cubic-bezier(0.34, 1.56, 0.64, 1) transform ${isVideoEnded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-90 pointer-events-none h-0 overflow-hidden'}`}>
            <button 
              onClick={scrollToPricing}
              className="relative w-full group overflow-hidden bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 hover:from-cyan-300 hover:to-indigo-500 text-black font-black text-2xl md:text-4xl py-8 md:py-10 px-8 rounded-[3rem] shadow-[0_0_60px_rgba(34,211,238,0.5)] hover:shadow-[0_0_100px_rgba(34,211,238,0.7)] transition-all transform hover:-translate-y-2 active:scale-95"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none"></div>
              
              <span className="relative z-10 flex items-center justify-center gap-6 leading-tight uppercase tracking-tighter">
                <span className="text-4xl md:text-6xl drop-shadow-md">💎</span> 
                <span>DOMINAR MEUS DADOS AGORA</span>
              </span>
            </button>
            
            <div className="flex flex-col items-center mt-8">
              <p className="text-white text-center text-lg md:text-xl font-bold tracking-wider uppercase animate-pulse drop-shadow-[0_0_15px_rgba(34,211,238,0.4)] bg-cyan-900/40 px-6 py-2 rounded-full border border-cyan-500/30">
                ⚠️ AVISO: Apenas 12 licenças restantes no valor de lançamento.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .group-hover\\:animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
