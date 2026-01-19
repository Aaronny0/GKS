
import { Product } from './types';

// Numéro WhatsApp sans le 01 (Format international)
export const WHATSAPP_LINK = "https://wa.me/22990821260";
// Numéro d'affichage avec le 01
export const PHONE_NUMBER = "+229 01 90 82 12 60";
export const STORE_EMAIL = "contact@gksmobile.com";
export const STORE_LOCATION = "Bénin, Cotonou, Sikecodji";

// Fonction utilitaire pour obtenir les vraies specs marketing par modèle
const getRealSpecs = (name: string, brand: 'Apple' | 'Samsung') => {
  const n = name.toLowerCase();

  if (brand === 'Apple') {
    if (n.includes('17')) return { screen: 'Ultra Retina XDR', battery: 'IA Générative', camera: '48MP Fusion Pro', storage: 'Puce A19 Pro' };
    
    if (n.includes('16 pro')) return { screen: 'Super Retina XDR 120Hz', battery: '33h Lecture Vidéo', camera: '48MP Fusion + 5x', storage: 'Titane Grade 5' };
    if (n.includes('16')) return { screen: 'Super Retina XDR', battery: '27h Lecture Vidéo', camera: '48MP Ultra Wide', storage: 'Puce A18 + Apple AI' };
    
    if (n.includes('15 pro')) return { screen: 'Super Retina XDR 120Hz', battery: '29h Lecture Vidéo', camera: '48MP + Zoom 5x', storage: 'Design Titane' };
    if (n.includes('15')) return { screen: 'Super Retina XDR', battery: '20h Lecture Vidéo', camera: '48MP Principal', storage: 'Dynamic Island' };
    
    if (n.includes('14 pro')) return { screen: 'ProMotion 120Hz', battery: '23h Lecture Vidéo', camera: '48MP ProRAW', storage: 'Dynamic Island' };
    if (n.includes('14')) return { screen: 'OLED Super Retina', battery: '20h Lecture Vidéo', camera: 'Mode Action', storage: 'Puce A15 Bionic' };
    
    if (n.includes('13 pro')) return { screen: 'ProMotion 120Hz', battery: '22h Lecture Vidéo', camera: 'Macro & Cinématique', storage: 'Acier Inoxydable' };
    if (n.includes('13')) return { screen: 'OLED Super Retina', battery: '19h Lecture Vidéo', camera: 'Double 12MP', storage: 'Mode Cinématique' };
    
    if (n.includes('12 pro')) return { screen: 'OLED Super Retina', battery: 'Compatible MagSafe', camera: 'LiDAR Scanner', storage: 'Puce A14 Bionic' };
    if (n.includes('12')) return { screen: 'OLED Edge-to-Edge', battery: 'Compatible MagSafe', camera: 'Mode Nuit Avancé', storage: 'Design Droit' };
    
    if (n.includes('11 pro')) return { screen: 'OLED Super Retina', battery: '18h Lecture Vidéo', camera: 'Triple Objectif', storage: 'Acier Inoxydable' };
    if (n.includes('11')) return { screen: 'LCD Liquid Retina', battery: 'Journée complète', camera: 'Double Objectif', storage: '6 Couleurs' };
    
    return { screen: 'Retina HD', battery: 'Optimisée GKS', camera: 'iSight Camera', storage: 'Sécurisé TouchID/FaceID' };
  }

  if (brand === 'Samsung') {
    if (n.includes('z fold 6')) return { screen: '7.6" Amoled 120Hz', battery: 'Multitâche IA', camera: 'Sous l\'écran', storage: 'Snapdragon 8 Gen 3' };
    if (n.includes('s25 ultra')) return { screen: 'Dynamic AMOLED 2X', battery: 'Titanium Frame', camera: '200MP AI Boost', storage: 'Galaxy AI Ultimate' };
    if (n.includes('s24 ultra')) return { screen: '6.8" QHD+ 120Hz', battery: 'Titanium Frame', camera: '200MP Nightography', storage: 'Galaxy AI Intégré' };
    if (n.includes('s24')) return { screen: '6.2" FHD+ 120Hz', battery: 'Charge Rapide 25W', camera: '50MP AI Zoom', storage: 'Galaxy AI' };
    if (n.includes('s23 ultra')) return { screen: '6.8" Edge QHD+', battery: 'S-Pen Intégré', camera: '200MP Space Zoom', storage: 'Snapdragon 8 Gen 2' };
    if (n.includes('s23')) return { screen: 'Dynamic AMOLED 2X', battery: 'Gestion Intelligente', camera: 'Nightography', storage: 'Puce Galaxy' };
    if (n.includes('s22')) return { screen: 'Dynamic AMOLED 2X', battery: 'Charge Rapide', camera: '8K Video', storage: 'Verre Victus+' };
    
    return { screen: 'Super AMOLED', battery: 'Longue Durée', camera: 'Multi-Capteurs', storage: 'Android OneUI' };
  }

  return { screen: 'HD Display', battery: 'Standard', camera: 'High Res', storage: 'Standard' };
};

const generateIPhones = (): Product[] => {
  const images: Record<string, string> = {
    '17 Pro Max': 'https://i.pinimg.com/736x/ee/5e/c4/ee5ec48e527ee60042a03a784c9768d9.jpg',
    '17 Pro': 'https://i.pinimg.com/736x/1c/2f/f8/1c2ff82e205159a2feac32a423168978.jpg',
    '16 Pro Max': 'https://i.pinimg.com/736x/b3/07/89/b30789c67872a566ab0513e50540feee.jpg',
    '16 Pro': 'https://i.pinimg.com/736x/a7/b5/a4/a7b5a4a5b084e4a6ae7943d898a609fd.jpg',
    '16': 'https://i.pinimg.com/1200x/bf/66/ee/bf66ee8325fe7ec86686a20b75e0e89c.jpg',
    '15 Pro Max': 'https://i.pinimg.com/1200x/d0/19/e9/d019e9eb433a315fc0b67750fe80b978.jpg',
    '15 Pro': 'https://i.pinimg.com/736x/65/99/0e/65990e98131d9846d52cec167d9b9c7d.jpg',
    '15': 'https://i.pinimg.com/736x/1d/a6/ec/1da6ecea645c0cf649bcbff8fd75538d.jpg',
    '14 Pro Max': 'https://m.media-amazon.com/images/I/51uD1lmrV8L._AC_SX679_.jpg',
    '14 Pro': 'https://i.pinimg.com/736x/e0/87/14/e08714336780dd6735bc9284f2098e27.jpg',
    '14 Plus': 'https://i.pinimg.com/736x/5a/1a/6a/5a1a6ac92ecf538f3285d4de117c5961.jpg',
    '14': 'https://i.pinimg.com/736x/dc/22/35/dc2235bbb7c5ae968a36e4fd9f3e1941.jpg',
    '13 Pro Max': 'https://i.pinimg.com/1200x/a8/7c/36/a87c36f53b7ef06f98e7327b9870cc8c.jpg',
    '13 Pro': 'https://i.pinimg.com/736x/42/27/81/4227817bdc50016683bb65811a8ac373.jpg',
    '13 mini': 'https://i.pinimg.com/736x/11/68/06/11680613416acabf52ec6a327ad24c91.jpg',
    '13': 'https://i.pinimg.com/1200x/6a/bf/87/6abf87489cc8e460cd8403c72cb4b505.jpg',
    '12 Pro Max': 'https://i.pinimg.com/1200x/db/c5/40/dbc5408ba83d63fb7b55076516549a19.jpg',
    '12 Pro': 'https://i.pinimg.com/736x/1f/99/71/1f9971ee7e1f91f36c517466912e1c7d.jpg',
    '12': 'https://i.pinimg.com/736x/36/41/42/364142adff6c5d8cc03483fa0b76cde4.jpg',
    '12 mini': 'https://i.pinimg.com/736x/da/c1/f0/dac1f0de713ef528a95c26b4c91dad8b.jpg',
    '11 Pro Max': 'https://i.pinimg.com/736x/76/8d/3a/768d3a380217a181076e7e407ab33314.jpg',
    '11 Pro': 'https://i.pinimg.com/1200x/63/1f/de/631fdeabc0fa8f63bd809d68ac8fccb4.jpg',
    '11': 'https://i.pinimg.com/736x/78/f8/d4/78f8d43306630c7c55882a4a4144075d.jpg',
    'Xs Max': 'https://i.pinimg.com/736x/fb/fe/20/fbfe20c5a42f288835f27b583a99fa96.jpg',
    'Xs': 'https://i.pinimg.com/1200x/d8/6a/0f/d86a0f00d1646e54689b63d3cce96766.jpg',
    'Xr': 'https://i.pinimg.com/1200x/6d/7e/44/6d7e4442f478ec671ab9867052c96bda.jpg',
    'X': 'https://i.pinimg.com/1200x/20/98/d3/2098d376dcf3a1530443fd37a720bf1b.jpg',
    '8 Plus': 'https://i.pinimg.com/736x/2f/aa/ff/2faaffd78043704066389b6664e1c8d5.jpg',
    '8': 'https://i.pinimg.com/736x/25/51/e9/2551e97f594f1ecc21016394aa7bd25b.jpg',
    '7 Plus': 'https://i.pinimg.com/736x/73/97/a5/7397a54f2d2bd99fef9dee30197256d8.jpg',
    '7': 'https://i.pinimg.com/736x/06/71/75/06717534edfeb27b55328457fbf1a50a.jpg',
    '6s Plus': 'https://i.pinimg.com/1200x/60/4f/ec/604fec0ac90e3b25fde12bf1222a54e7.jpg',
    '6s': 'https://i.pinimg.com/736x/0e/aa/df/0eaadf3e3a6e84188faac7faa432d70f.jpg',
    '6 Plus': 'https://i.pinimg.com/736x/62/4c/d9/624cd9c409706d60650798e6f9bfd175.jpg',
    '6': 'https://i.pinimg.com/736x/d8/c0/17/d8c01751c2e5277c7879b6a4270ffc94.jpg',
  };

  const models = [
    { num: '17', variants: [' Pro Max', ' Pro'] },
    { num: '16', variants: [' Pro Max', ' Pro', ''] },
    { num: '15', variants: [' Pro Max', ' Pro', ''] },
    { num: '14', variants: [' Pro Max', ' Pro', ' Plus', ''] },
    { num: '13', variants: [' Pro Max', ' Pro', ' mini', ''] },
    { num: '12', variants: [' Pro Max', ' Pro', ' mini', ''] },
    { num: '11', variants: [' Pro Max', ' Pro', ''] },
    { num: 'X', variants: ['s Max', 's', 'r', ''] },
    { num: '8', variants: [' Plus', ''] },
    { num: '7', variants: [' Plus', ''] },
    { num: '6', variants: ['s Plus', 's', ' Plus', ''] },
  ];

  let list: Product[] = [];
  models.forEach(m => {
    m.variants.forEach(v => {
      const fullName = `iPhone ${m.num}${v}`;
      const imgKey = `${m.num}${v}`;
      const featuredModels = ['iPhone 17 Pro Max', 'iPhone 16 Pro Max', 'iPhone 16', 'iPhone 13 mini', 'iPhone 14 Pro Max'];
      
      const realSpecs = getRealSpecs(fullName, 'Apple');

      list.push({
        id: `apple-${m.num}-${v.trim().replace(/\s+/g, '-')}`,
        name: fullName,
        brand: 'Apple',
        category: 'Smartphone',
        series: 'iPhone',
        image: images[imgKey] || 'https://images.unsplash.com/photo-1592890288564-76628a30a657?q=80&w=800&auto=format&fit=crop',
        description: `Disponible chez GKSMOBILE WORLD. Le ${fullName} est inspecté minutieusement par Géraud Kinsou à Sikecodji.`,
        specs: realSpecs,
        featured: featuredModels.includes(fullName)
      });
    });
  });
  return list;
};

const generateSamsungs = (): Product[] => {
  const sSeries = ['S25', 'S24', 'S23', 'S22', 'S21', 'S20', 'S10'];
  let list: Product[] = [];

  const specialImages: Record<string, string> = {
    'S25 Ultra': 'https://i.pinimg.com/1200x/e3/33/47/e3334717862dfaaee575d45efba30c06.jpg',
    'S24': 'https://i.pinimg.com/1200x/44/db/f3/44dbf3252affe1b050eef4b7ea01c988.jpg',
    'Z Fold 6': 'https://i.pinimg.com/736x/80/85/6f/80856f186aa451201cdc9814e021b0eb.jpg'
  };

  const zFoldSpecs = getRealSpecs('Samsung Galaxy Z Fold 6', 'Samsung');
  list.push({
    id: 'samsung-z-fold-6',
    name: 'Samsung Galaxy Z Fold 6',
    brand: 'Samsung',
    category: 'Smartphone',
    series: 'Galaxy Z',
    image: specialImages['Z Fold 6'],
    description: 'L\'innovation pliable ultime. Un écran immense dans votre poche, disponible à Sikecodji.',
    specs: zFoldSpecs,
    featured: true
  });

  sSeries.forEach(s => {
    const variants = [' Ultra', ' Plus', ''];
    variants.forEach(v => {
      const fullName = `Samsung Galaxy ${s}${v}`;
      const shortName = `${s}${v}`.trim();
      
      const realSpecs = getRealSpecs(fullName, 'Samsung');

      list.push({
        id: `samsung-${s}-${v.trim().replace(/\s+/g, '-')}`,
        name: fullName,
        brand: 'Samsung',
        category: 'Smartphone',
        series: 'Galaxy S',
        image: specialImages[shortName] || 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=800&auto=format&fit=crop',
        description: `Le Samsung Galaxy ${s} chez GKSMOBILE WORLD. Performance brute et photos exceptionnelles.`,
        specs: realSpecs,
        featured: shortName === 'S25 Ultra' || shortName === 'S24 Ultra'
      });
    });
  });

  return list;
};

export const PRODUCTS: Product[] = [...generateIPhones(), ...generateSamsungs()];

export const THEME = {
  blue: '#0047AB',
  green: '#16A34A',
  storeName: 'GKSMOBILE WORLD'
};
