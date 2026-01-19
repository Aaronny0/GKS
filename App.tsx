import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ProductDetails from './pages/ProductDetails';
import Contact from './pages/Contact';
import AIAssistant from './components/AIAssistant';
import { PRODUCTS } from './constants';
import { Product } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, selectedProductId]);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    setSelectedProductId(null);
  };

  const handleProductClick = (id: string) => {
    setSelectedProductId(id);
    setCurrentPage('details');
  };

  const selectedProduct = selectedProductId ? PRODUCTS.find(p => p.id === selectedProductId) : null;

  return (
    <div className="flex flex-col min-h-screen bg-[#020617] text-slate-100">
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
      
      <div className="flex-grow">
        {currentPage === 'home' && (
          <Home 
            onCatalogClick={() => handleNavigate('catalog')} 
            onProductClick={handleProductClick}
          />
        )}
        {currentPage === 'catalog' && (
          <Catalog onProductClick={handleProductClick} />
        )}
        {currentPage === 'details' && selectedProduct && (
          <ProductDetails 
            product={selectedProduct} 
            onBack={() => handleNavigate('catalog')} 
          />
        )}
        {currentPage === 'contact' && <Contact />}
        {currentPage === 'about' && (
          <div className="pt-32 sm:pt-48 text-center min-h-[80vh] px-4 flex flex-col items-center bg-[#020617]">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-8 tracking-tight">À Propos de <span className="text-[#0047AB]">GKSMOBILE</span></h1>
              <p className="text-slate-400 leading-relaxed text-lg mb-12">
                Située au cœur de <strong className="text-white font-bold">Sikecodji</strong> à Cotonou, <strong className="text-white font-bold">GKSMOBILE WORLD</strong> est l'entreprise de référence fondée par <strong className="text-white font-bold">Géraud Kinsou</strong>. 
                Notre succès repose sur une trinité de valeurs inébranlables.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
              <div className="p-8 bg-[#0f172a] rounded-2xl shadow-lg border border-slate-800 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#0047AB]"></div>
                <h3 className="text-[#0047AB] font-fancy font-bold text-xl mb-3">Amour</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  L'Amour de nos clients et du travail bien fait. C'est ce qui pousse Géraud Kinsou à sélectionner chaque téléphone avec une attention maniaque.
                </p>
              </div>
              <div className="p-8 bg-[#0f172a] rounded-2xl shadow-lg border border-slate-800 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-white"></div>
                <h3 className="text-white font-fancy font-bold text-xl mb-3">Richesse</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  La Richesse de notre catalogue. Nous offrons le luxe de la technologie (iPhone, Samsung) accessible à ceux qui exigent l'excellence.
                </p>
              </div>
              <div className="p-8 bg-[#0f172a] rounded-2xl shadow-lg border border-slate-800 relative overflow-hidden group">
                 <div className="absolute top-0 left-0 w-1 h-full bg-[#16A34A]"></div>
                <h3 className="text-[#16A34A] font-fancy font-bold text-xl mb-3">Paix</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  La Paix d'esprit. Acheter chez GKSMOBILE WORLD, c'est dormir tranquille en sachant que votre appareil est authentique et garanti.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <AIAssistant />

      <footer className="bg-slate-950 text-white py-16 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="text-center md:text-left">
            <span className="text-xl font-black tracking-widest uppercase">
              GKS<span className="text-[#16A34A]">MOBILE</span><br/>
              <span className="text-[10px] text-slate-500 tracking-[0.3em] font-sans font-bold">WORLD SIKECODJI</span>
            </span>
            <p className="text-slate-400 text-[10px] mt-2 uppercase tracking-[0.2em] font-medium">Dirigé par Géraud Kinsou</p>
            <p className="text-slate-600 text-[8px] mt-4 font-fancy tracking-widest italic">"AVEC GKS CONNECTEZ VOUS A L'ESSENTIEL"</p>
          </div>
          
          <div className="flex space-x-8 sm:space-x-16">
            <div className="space-y-4">
              <h4 className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Plan</h4>
              <ul className="text-slate-400 text-xs space-y-2 font-medium">
                <li className="hover:text-white cursor-pointer" onClick={() => handleNavigate('home')}>Accueil</li>
                <li className="hover:text-white cursor-pointer" onClick={() => handleNavigate('catalog')}>Stock</li>
                <li className="hover:text-white cursor-pointer" onClick={() => handleNavigate('contact')}>Contact</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Réseaux</h4>
              <ul className="text-slate-400 text-xs space-y-2 font-medium">
                <li className="hover:text-white cursor-pointer">WhatsApp</li>
                <li className="hover:text-white cursor-pointer">Instagram</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-slate-700 text-[10px] font-bold uppercase tracking-widest">© 2025 GKSMOBILE WORLD</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;