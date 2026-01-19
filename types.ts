export type Brand = 'Apple' | 'Samsung' | 'Generic';
export type Category = 'Smartphone' | 'MacBook' | 'Audio' | 'Accessoire';

export interface Product {
  id: string;
  name: string;
  brand: Brand;
  category: Category;
  series: string;
  image: string;
  description: string;
  specs: {
    screen?: string;
    battery?: string;
    camera?: string;
    storage?: string;
    type?: string;
    color?: string;
  };
  featured?: boolean;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}