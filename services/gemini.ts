
/**
 * Moteur de réponse local pour GKSMOBILE WORLD.
 */
export const getPhoneRecommendation = async (userPrompt: string): Promise<string> => {
  const prompt = userPrompt.toLowerCase();
  
  await new Promise(resolve => setTimeout(resolve, 1000));

  if (prompt.includes('iphone')) {
    if (prompt.includes('17') || prompt.includes('16')) {
      return "Chez GKSMOBILE WORLD, nous avons les derniers iPhone 16 et 17 Pro Max. Géraud Kinsou garantit personnellement leur authenticité.";
    }
    return "Nous avons une large gamme d'iPhone à Sikecodji. Tous nos modèles sont testés et validés par l'équipe de Géraud.";
  }

  if (prompt.includes('samsung') || prompt.includes('galaxy')) {
    return "Les Samsung Galaxy (S24, S25, Z Fold) sont disponibles. Passez à notre boutique de Sikecodji pour les voir en vrai.";
  }

  if (prompt.includes('prix') || prompt.includes('combien') || prompt.includes('coûte')) {
    return "Pour le meilleur prix, contactez directement Géraud Kinsou sur WhatsApp. Il vous fera une offre personnalisée.";
  }

  if (prompt.includes('adresse') || prompt.includes('où') || prompt.includes('localisation')) {
    return "Nous sommes situés à Sikecodji, Cotonou. C'est le QG de GKSMOBILE WORLD.";
  }

  if (prompt.includes('geraud') || prompt.includes('géraud') || prompt.includes('kinsou')) {
    return "Géraud Kinsou est le fondateur et l'expert en chef de GKSMOBILE WORLD. Il s'assure que chaque client reparte satisfait.";
  }

  return "Bienvenue chez GKSMOBILE WORLD. Je suis l'assistant virtuel. Cherchez-vous un iPhone, un Samsung, ou voulez-vous parler à Géraud ?";
};
