
import React from 'react';
import Hero from '../components/Hero';
import { PRODUCTS, THEME } from '../constants';
import ProductCard from '../components/ProductCard';

interface HomeProps {
  onCatalogClick: () => void;
  onProductClick: (id: string) => void;
}

interface ReviewCardProps {
  name: string;
  location: string;
  comment: string;
  stars: number;
  date: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ name, location, comment, stars, date }) => (
  <div className="bg-[#0f172a] p-6 rounded-2xl border border-slate-800 shadow-lg hover:border-[#0047AB]/30 transition-all duration-300">
    <div className="flex items-center space-x-0.5 mb-4">
      {[...Array(stars)].map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 text-[#16A34A] fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">"{comment}"</p>
    <div className="flex items-center justify-between border-t border-slate-800 pt-3">
      <div>
        <h4 className="font-bold text-white text-xs uppercase tracking-wider">{name}</h4>
        <p className="text-[9px] text-slate-500 font-bold uppercase">{location}</p>
      </div>
      <span className="text-[9px] text-slate-600 font-medium uppercase">{date}</span>
    </div>
  </div>
);

const Home: React.FC<HomeProps> = ({ onCatalogClick, onProductClick }) => {
  const featuredPhones = PRODUCTS
    .filter(p => p.featured)
    .slice(0, 8);

  const reviews = [
    {
      name: "Marc A.",
      location: "Sikecodji",
      comment: "Je suis passé à la boutique de Sikecodji. Géraud est très pro, mon iPhone 14 Pro est impeccable. Je recommande.",
      stars: 5,
      date: "Hier"
    },
    {
      name: "Sarah L.",
      location: "Cotonou",
      comment: "Service rapide et honnête. Pas de blabla, juste des bons téléphones. GKSMOBILE est une valeur sûre.",
      stars: 5,
      date: "Il y a 2 jours"
    },
    {
      name: "Hervé D.",
      location: "Akpakpa",
      comment: "J'ai pris un Samsung S23. Batterie nickel, écran parfait. Merci à l'équipe pour les conseils.",
      stars: 5,
      date: "Il y a 5 jours"
    },
    {
      name: "Clarisse",
      location: "Fidjrossè",
      comment: "Enfin une boutique sérieuse. Géraud connait ses produits. J'achèterai mon prochain téléphone ici aussi.",
      stars: 5,
      date: "Il y a 1 semaine"
    }
  ];

  return (
    <main className="min-h-screen bg-[#020617]">
      <Hero onCtaClick={onCatalogClick} />

      {/* GKS PHILOSOPHY BANNER - Dark Theme */}
      <section className="bg-[#0f172a] border-y border-slate-800 py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0047AB]/5"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            
            <div className="py-2 flex flex-col items-center group cursor-default">
              <span className="text-[#0047AB] font-fancy text-2xl sm:text-3xl font-bold mb-2 group-hover:scale-110 transition-transform duration-500 shadow-blue-500/50 drop-shadow-lg">Amour</span>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-1">Notre Moteur</p>
              <p className="text-xs text-slate-400 max-w-[200px]">L'amour du travail bien fait et la passion de servir chaque client.</p>
            </div>

            <div className="py-2 flex flex-col items-center group cursor-default">
              <span className="text-white font-fancy text-2xl sm:text-3xl font-bold mb-2 group-hover:scale-110 transition-transform duration-500 drop-shadow-lg">Richesse</span>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-1">Notre Offre</p>
              <p className="text-xs text-slate-400 max-w-[200px]">La richesse technologique des meilleurs appareils du marché.</p>
            </div>

            <div className="py-2 flex flex-col items-center group cursor-default">
              <span className="text-[#16A34A] font-fancy text-2xl sm:text-3xl font-bold mb-2 group-hover:scale-110 transition-transform duration-500 shadow-green-500/50 drop-shadow-lg">Paix</span>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-1">Votre Garantie</p>
              <p className="text-xs text-slate-400 max-w-[200px]">La paix d'esprit avec des produits certifiés et garantis par Géraud.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end mb-12 space-y-4 sm:space-y-0 text-center sm:text-left">
            <div>
              <p className="text-[#16A34A] uppercase text-[10px] font-bold tracking-[0.3em] mb-2">Sélection Géraud Kinsou</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Nos Pépites.</h2>
            </div>
            <button 
              onClick={onCatalogClick}
              className="text-slate-400 hover:text-[#0047AB] font-bold text-xs uppercase tracking-widest transition-colors flex items-center group"
            >
              Voir tout le stock
              <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {featuredPhones.map(phone => (
              <ProductCard key={phone.id} product={phone} onClick={() => onProductClick(phone.id)} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust/Info Section */}
      <section className="py-16 bg-[#0f172a] border-y border-slate-800">
         <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
               <div className="w-10 h-10 bg-[#0047AB]/20 text-[#0047AB] rounded-full flex items-center justify-center mx-auto mb-4">
                 <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                 </svg>
               </div>
               <h3 className="text-sm font-black uppercase tracking-widest mb-2 text-white">Certifié GKS</h3>
               <p className="text-xs text-slate-400">Chaque appareil est testé rigoureusement par Géraud Kinsou.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
               <div className="w-10 h-10 bg-[#16A34A]/20 text-[#16A34A] rounded-full flex items-center justify-center mx-auto mb-4">
                 <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                 </svg>
               </div>
               <h3 className="text-sm font-black uppercase tracking-widest mb-2 text-white">Sikecodji</h3>
               <p className="text-xs text-slate-400">Boutique physique accessible pour vos achats en toute confiance.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
               <div className="w-10 h-10 bg-slate-800 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-4">
                 <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                 </svg>
               </div>
               <h3 className="text-sm font-black uppercase tracking-widest mb-2 text-white">Disponibilité</h3>
               <p className="text-xs text-slate-400">Service client réactif pour répondre à toutes vos demandes.</p>
            </div>
         </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-white tracking-tight mb-2">Avis Clients.</h2>
            <p className="text-slate-500 text-sm">Ils nous font confiance à Sikecodji et ailleurs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((rev, idx) => (
              <ReviewCard key={idx} {...rev} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
