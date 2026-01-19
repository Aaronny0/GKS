
import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { Brand } from '../types';

interface CatalogProps {
  onProductClick: (id: string) => void;
}

const Catalog: React.FC<CatalogProps> = ({ onProductClick }) => {
  const [activeBrand, setActiveBrand] = useState<Brand | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState<'chrono' | 'asc'>('chrono');

  const filteredProducts = useMemo(() => {
    let result = PRODUCTS.filter(p => {
      const matchesBrand = activeBrand === 'All' || p.brand === activeBrand;
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           p.series.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesBrand && matchesSearch;
    });

    if (sortOrder === 'chrono') {
      return result;
    } else {
      return result.sort((a, b) => a.name.localeCompare(b.name));
    }
  }, [activeBrand, searchQuery, sortOrder]);

  return (
    <div className="min-h-screen pt-20 sm:pt-32 pb-20 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-20 space-y-6 sm:space-y-8">
          <div className="space-y-3 mt-4">
            <h1 className="text-3xl sm:text-6xl font-fancy font-bold text-white tracking-tight">
              Collection <span className="text-[#0047AB]">Prestige</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto font-medium opacity-70 px-4">
              L'élite mobile de Cotonou chez GKSMOBILE WORLD : Chaque pièce est certifiée et garantie.
            </p>
          </div>

          {/* Search Bar - text-base (16px) prevents iOS zoom */}
          <div className="w-full max-w-2xl relative group px-2">
            <div className="absolute inset-y-0 left-6 sm:left-8 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-slate-500 group-focus-within:text-[#0047AB] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input 
              type="text" 
              placeholder="Chercher (ex: iPhone 16...)" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 sm:pl-16 pr-6 py-4 sm:py-6 bg-[#0f172a] border border-slate-800 rounded-[20px] sm:rounded-[32px] text-base font-medium shadow-2xl shadow-black/40 focus:outline-none focus:ring-2 focus:ring-[#0047AB]/50 focus:border-[#0047AB]/50 transition-all placeholder:text-slate-600 text-white"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:items-center justify-between mb-8 sm:mb-12 glass p-3 sm:p-5 rounded-[24px] sm:rounded-[32px] border border-slate-800 bg-slate-900/50 mx-2 sm:mx-0">
          <div className="flex space-x-2 overflow-x-auto no-scrollbar pb-1 sm:pb-0 touch-pan-x">
            {(['All', 'Apple', 'Samsung'] as const).map(brand => (
              <button
                key={brand}
                onClick={() => setActiveBrand(brand)}
                className={`flex-shrink-0 px-5 py-2 sm:px-8 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-black uppercase tracking-widest transition-all ${
                  activeBrand === brand 
                    ? 'bg-[#16A34A] text-white shadow-lg shadow-green-500/20 scale-105' 
                    : 'bg-slate-800/50 text-slate-400 hover:bg-slate-800 border border-slate-700'
                }`}
              >
                {brand === 'All' ? 'Tout' : brand}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-auto">
            <select 
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as 'chrono' | 'asc')}
              className="w-full bg-slate-800/80 border border-slate-700 rounded-full px-6 py-3 sm:py-2.5 text-[11px] font-black uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-[#0047AB]/20 text-slate-300 appearance-none min-w-[140px] cursor-pointer"
            >
              <option value="chrono">Plus Récent</option>
              <option value="asc">A - Z</option>
            </select>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-slate-500">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </div>
          </div>
        </div>

        {/* Results Grid - Responsive Grid Optimization */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-10 pb-12">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} onClick={() => onProductClick(product.id)} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 sm:py-40 space-y-6">
            <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-800 shadow-inner">
              <svg className="w-10 h-10 text-[#16A34A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <p className="text-white font-fancy font-bold text-xl sm:text-2xl">Modèle non trouvé</p>
            <button 
              onClick={() => { setSearchQuery(''); setActiveBrand('All'); }}
              className="px-8 py-3 bg-[#0047AB] text-white font-black text-[10px] uppercase tracking-[0.2em] rounded-full transition-all active:scale-95 hover:bg-[#003d94]"
            >
              Réinitialiser
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;
