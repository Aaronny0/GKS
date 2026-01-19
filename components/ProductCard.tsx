
import React from 'react';
import { Product } from '../types';
import { WHATSAPP_LINK } from '../constants';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  // Construction du lien WhatsApp dynamique pour l'achat rapide
  const encodedMessage = encodeURIComponent(`Bonjour GKSMOBILE, je suis intéressé par le ${product.name} que j'ai vu sur le site. Est-il disponible ?`);
  const quickBuyLink = `${WHATSAPP_LINK}?text=${encodedMessage}`;

  const handleBuyClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Empêche l'ouverture des détails quand on clique sur le bouton WhatsApp
    window.open(quickBuyLink, '_blank');
  };

  return (
    <div 
      onClick={onClick}
      className="group relative bg-[#0f172a] rounded-3xl p-3 sm:p-4 transition-all duration-500 border border-slate-800 hover:border-[#0047AB]/50 hover:shadow-[0_10px_40px_rgba(0,71,171,0.2)] cursor-pointer flex flex-col h-full overflow-hidden hover:-translate-y-1 w-full max-w-full"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#020617] mb-3 sm:mb-6">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />
        {product.featured && (
          <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-[#020617]/80 backdrop-blur text-[#16A34A] text-[8px] sm:text-[9px] font-black px-2 py-1 sm:px-3 sm:py-1 rounded-full uppercase tracking-[0.2em] shadow-lg z-10 border border-[#16A34A]/20">
            GKS
          </div>
        )}
      </div>

      <div className="space-y-1 sm:space-y-2 flex-grow relative z-10 px-1 sm:px-0">
        <div className="flex justify-between items-center">
          <p className="text-[8px] sm:text-[10px] font-black text-[#0047AB] uppercase tracking-[0.2em] opacity-90">{product.brand}</p>
          <div className="w-1.5 h-1.5 rounded-full bg-[#16A34A] shadow-[0_0_8px_rgba(22,163,74,0.6)]"></div>
        </div>
        <h3 className="text-sm sm:text-lg font-bold text-slate-100 group-hover:text-[#0047AB] transition-colors line-clamp-1 leading-tight">{product.name}</h3>
        <p className="text-[10px] text-slate-500 truncate">{product.specs.storage} • {product.specs.color || 'Noir'}</p>
      </div>

      <div className="mt-3 sm:mt-5 pt-3 border-t border-slate-800 flex items-center justify-between relative z-10 gap-2">
        <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest hidden sm:inline-block group-hover:text-slate-300 transition-colors">Détails</span>
        
        <div className="flex gap-2 w-full sm:w-auto">
          {/* Bouton Détails (Visible mobile) */}
          <div className="bg-slate-800 text-white flex-1 sm:flex-none sm:w-auto py-2.5 px-3 rounded-xl group-hover:bg-[#0047AB] transition-all flex items-center justify-center sm:hidden">
             <span className="text-[9px] font-black uppercase">Voir</span>
          </div>

          {/* Bouton WhatsApp Rapide */}
          <button 
            onClick={handleBuyClick}
            className="bg-[#16A34A] text-white flex-1 sm:flex-none sm:px-3 py-2.5 rounded-xl hover:bg-[#128C7E] transition-all flex items-center justify-center shadow-lg shadow-green-900/20 active:scale-95 z-20"
            aria-label="Achat Rapide WhatsApp"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
