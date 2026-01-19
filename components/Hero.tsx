
import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  // Logo Apple Vert GKS (SVG Data URI optimisé)
  const greenAppleLogo = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3Cpath fill='%2316A34A' d='M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z'/%3E%3C/svg%3E";

  return (
    <div className="relative pt-safe overflow-hidden">
      {/* Background Ambience - Dark & Moody */}
      <div className="absolute top-0 left-0 w-full h-[80vh] bg-gradient-to-b from-slate-900/50 to-[#020617] -z-20"></div>
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#0047AB]/20 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-[10%] left-[-10%] w-[40%] h-[40%] bg-[#16A34A]/10 blur-[100px] rounded-full -z-10"></div>
      
      <div className="relative pt-28 pb-12 sm:pt-40 sm:pb-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20">
            
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left space-y-6 sm:space-y-8 w-full">
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] animate-pulse"></span>
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-300">Sikecodji, Cotonou</span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-2">
                GKSMOBILE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0047AB] to-[#4287f5] relative inline-block pb-2">
                  WORLD.
                </span>
              </h1>

              {/* Phrase Fétiche - Signature */}
              <div className="relative inline-block py-3 sm:py-4 border-l-4 border-[#16A34A] pl-4 sm:pl-6 bg-gradient-to-r from-slate-900/80 to-transparent rounded-r-xl max-w-full">
                 <p className="text-lg sm:text-2xl text-slate-200 font-fancy font-bold italic relative z-10 leading-relaxed">
                   "AVEC GKS CONNECTEZ VOUS A L'ESSENTIEL."
                 </p>
              </div>
              
              <p className="text-sm sm:text-lg text-slate-400 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium mt-4">
                Votre nouvelle destination mobile à Cotonou. <strong className="text-white font-bold">Géraud Kinsou</strong> vous propose une sélection rigoureuse d'iPhone et Samsung.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4 w-full sm:w-auto">
                <button 
                  onClick={onCtaClick}
                  className="w-full sm:w-auto bg-white text-slate-950 px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-[0.15em] hover:bg-[#0047AB] hover:text-white transition-all transform active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                >
                  Voir le Stock
                </button>
                <div className="flex items-center space-x-3 px-4 py-2 bg-slate-900/50 rounded-xl border border-slate-800 w-full sm:w-auto justify-center sm:justify-start">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-800 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?u=${i + 20}`} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Clients Satisfaits</span>
                </div>
              </div>
            </div>
            
            {/* Right Visual - GREEN APPLE LOGO WITH BORDER BEAM ANIMATION (NO ORBIT) */}
            <div className="flex-1 w-full flex justify-center lg:justify-end">
              <div className="relative flex items-center justify-center"> 
                
                {/* Large Ambient Glow Background */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0047AB]/20 to-[#16A34A]/30 rounded-full blur-[80px] z-0 animate-pulse"></div>

                {/* Circular Container with Moving Border Beam (Conic Gradient) */}
                <div className="relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] rounded-full flex items-center justify-center overflow-hidden p-[3px] z-10 shadow-2xl">
                    {/* The Beam: Conic Gradient Rotating (Blue Neon & Cyan) */}
                    <div className="absolute inset-[-50%] w-[200%] h-[200%] bg-[conic-gradient(transparent_20%,_#0047AB_40%,_#00ffff_50%,_#0047AB_60%,_transparent_80%)] animate-border-spin"></div>
                    
                    {/* Inner Mask (The Dark Background to reveal only the border) */}
                    <div className="absolute inset-[3px] bg-[#020617] rounded-full z-10"></div>

                    {/* The Image */}
                    <img 
                        src={greenAppleLogo} 
                        alt="Logo Apple Vert GKS" 
                        className="relative z-20 w-[180px] h-[220px] sm:w-[240px] sm:h-[300px] object-contain drop-shadow-[0_0_30px_rgba(22,163,74,0.5)] hover:scale-105 transition-transform duration-500"
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
