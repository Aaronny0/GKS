
import React from 'react';
import { Product } from '../types';
import { WHATSAPP_LINK } from '../constants';

interface ProductDetailsProps {
  product: Product;
  onBack: () => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product, onBack }) => {
  const encodedMessage = encodeURIComponent(`Bonjour GKSMOBILE, je suis intéressé par le ${product.name} que j'ai vu sur le site. Est-il disponible ?`);
  const orderLink = `${WHATSAPP_LINK}?text=${encodedMessage}`;

  return (
    <div className="min-h-screen pt-24 sm:pt-32 pb-32 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <button 
          onClick={onBack}
          className="flex items-center text-slate-400 hover:text-[#0047AB] transition-all mb-6 sm:mb-8 font-bold text-xs uppercase tracking-widest group p-2 -ml-2"
        >
          <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Retour
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-start">
          {/* Image Section */}
          <div className="relative">
            <div className="aspect-[4/5] sm:aspect-square bg-[#0f172a] rounded-3xl overflow-hidden shadow-2xl border border-slate-800 p-8 flex items-center justify-center relative group">
              <div className="absolute inset-0 bg-[#0047AB]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img src={product.image} alt={product.name} className="w-full h-full object-contain hover:scale-105 transition-transform duration-500 relative z-10" />
            </div>
            
            <div className="absolute top-4 right-4 bg-slate-950/90 backdrop-blur text-white px-3 py-1.5 rounded-lg font-bold text-[9px] uppercase tracking-widest shadow-lg border border-white/10">
              Certifié GKS
            </div>
          </div>

          {/* Info Section */}
          <div className="space-y-6 sm:space-y-8 pb-20 sm:pb-0">
            <div>
              <p className="text-[#0047AB] font-black uppercase tracking-[0.2em] text-[10px] mb-2">{product.brand}</p>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-none mb-3">{product.name}</h1>
              <div className="flex items-center space-x-3">
                <span className="bg-[#16A34A]/20 text-[#16A34A] border border-[#16A34A]/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide">En Stock Sikecodji</span>
              </div>
            </div>

            <div>
              <h4 className="text-[11px] font-black text-slate-500 uppercase tracking-widest mb-2">Description</h4>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{product.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="p-3 sm:p-4 bg-[#0f172a] rounded-xl border border-slate-800 shadow-sm">
                  <p className="text-[9px] text-slate-500 font-black uppercase mb-1 tracking-wider">{key}</p>
                  <p className="text-slate-200 font-bold text-xs sm:text-sm">{value}</p>
                </div>
              ))}
            </div>

            {/* Sticky Mobile Footer Action - pb-safe is critical here for iPhone Home Indicator */}
            <div className="fixed bottom-0 left-0 right-0 bg-[#020617]/90 backdrop-blur-md border-t border-slate-800 p-4 pb-safe sm:relative sm:bg-transparent sm:p-0 sm:border-none z-50 flex gap-3">
              <a 
                href={orderLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-[2] bg-white text-slate-900 py-3.5 sm:py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#0047AB] hover:text-white transition-all shadow-lg text-center flex items-center justify-center active:scale-95"
              >
                Commander (WhatsApp)
              </a>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-transparent border border-slate-700 text-white py-3.5 sm:py-4 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-slate-800 transition-all text-center flex items-center justify-center"
              >
                Question
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
