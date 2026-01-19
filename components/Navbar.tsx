
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Gestion du scroll navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Gestion du verrouillage du body quand le menu est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => document.body.classList.remove('overflow-hidden');
  }, [isOpen]);

  const navLinks = [
    { name: 'Accueil', id: 'home' },
    { name: 'Smartphones', id: 'catalog' },
    { name: 'À Propos', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleMobileNav = (id: string) => {
    setIsOpen(false); // Ferme le menu
    setTimeout(() => onNavigate(id), 150); // Navigue après légère fermeture
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 pt-safe ${
        scrolled ? 'glass py-3 shadow-lg shadow-black/20' : 'bg-transparent py-4 sm:py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center">
            {/* Logo Area */}
            <div className="flex items-center cursor-pointer group z-[10000]" onClick={() => onNavigate('home')}>
              <span className="text-xl sm:text-2xl font-black tracking-tighter uppercase transition-transform group-active:scale-95 leading-none">
                <span className="animate-scintille block">GKSMOBILE</span>
                <span className="text-[10px] sm:text-[11px] text-slate-400 tracking-[0.3em] font-bold font-sans block mt-1">WORLD SIKECODJI</span>
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className={`text-[11px] font-bold uppercase tracking-widest transition-all hover:text-[#0047AB] relative group ${
                    currentPage === link.id ? 'text-[#0047AB]' : 'text-slate-300'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0047AB] transition-all duration-300 ${
                    currentPage === link.id ? 'w-full' : 'group-hover:w-full'
                  }`}></span>
                </button>
              ))}
              <button 
                onClick={() => onNavigate('catalog')}
                className="bg-white text-slate-900 px-6 py-2.5 rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-[#0047AB] hover:text-white transition-all active:scale-95 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
              >
                Le Stock
              </button>
            </div>

            {/* Mobile Menu Button - Z-index MAX */}
            <div className="md:hidden flex items-center z-[10000]">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="w-10 h-10 flex items-center justify-center relative focus:outline-none active:scale-90 transition-transform touch-manipulation bg-white/10 rounded-full border border-white/10 backdrop-blur-md"
                aria-label="Menu"
              >
                <div className="flex flex-col space-y-1 items-center">
                  <span className={`h-0.5 bg-white transition-all duration-300 rounded-full ${isOpen ? 'w-5 rotate-45 translate-y-1.5' : 'w-5'}`}></span>
                  <span className={`h-0.5 bg-white transition-all duration-300 rounded-full ${isOpen ? 'opacity-0' : 'w-3'}`}></span>
                  <span className={`h-0.5 bg-white transition-all duration-300 rounded-full ${isOpen ? 'w-5 -rotate-45 -translate-y-1.5' : 'w-5'}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu */}
      <div className={`fixed inset-0 bg-[#020617] z-[9998] transition-all duration-300 ease-out flex flex-col justify-center items-center ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}>
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#0047AB]/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#16A34A]/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        <div className="space-y-8 text-center px-6 w-full relative z-10 overflow-y-auto max-h-screen py-safe">
          <div className="mb-10 text-3xl font-black text-white tracking-tighter uppercase">
            <span className="animate-scintille">MENU</span>
          </div>
          {navLinks.map((link, idx) => (
            <button
              key={link.id}
              onClick={() => handleMobileNav(link.id)}
              style={{ transitionDelay: `${isOpen ? idx * 50 + 50 : 0}ms` }}
              className={`block w-full text-2xl font-bold text-slate-200 tracking-tight transition-all active:scale-95 py-3 hover:text-[#0047AB] transform ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              {link.name}
            </button>
          ))}
          <div className="pt-8 w-full flex justify-center">
            <button 
              onClick={() => handleMobileNav('catalog')}
              className={`bg-[#0047AB] text-white px-10 py-5 rounded-2xl text-sm font-black uppercase tracking-widest transition-all active:scale-95 shadow-[0_10px_30px_rgba(0,71,171,0.3)] w-full max-w-[280px] ${
                isOpen ? 'scale-100 opacity-100 delay-200' : 'scale-75 opacity-0'
              }`}
            >
              Voir les Téléphones
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
