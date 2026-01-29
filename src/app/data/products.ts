import { Product } from '@/app/context/CartContext';

export const products: Product[] = [
  {
    id: '1',
    name: 'Planner Digital Completo 2026',
    price: 89.90,
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800',
    category: 'Planners Datados',
    discount: 20,
  },
  {
    id: '2',
    name: 'Caderno de Estudos Minimalista',
    price: 49.90,
    image: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=800',
    category: 'Cadernos',
  },
  {
    id: '3',
    name: 'Planner Sem Data Rosa Pastel',
    price: 69.90,
    image: 'https://images.unsplash.com/photo-1750814019023-4e43037f5075?w=800',
    category: 'Planners sem datas',
    discount: 15,
  },
  {
    id: '4',
    name: 'Adesivos Digitais Premium',
    price: 24.90,
    image: 'https://images.unsplash.com/photo-1607827448387-a67db1383b59?w=800',
    category: 'Adesivos',
  },
  {
    id: '5',
    name: 'Combo Produtividade Total',
    price: 149.90,
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800',
    category: 'Combos',
    discount: 30,
  },
  {
    id: '6',
    name: 'Planner Financeiro Lavanda',
    price: 59.90,
    image: 'https://images.unsplash.com/photo-1554224311-beee415c201f?w=800',
    category: 'Planners sem datas',
  },
  {
    id: '7',
    name: 'Caderno de Metas Verde Menta',
    price: 39.90,
    image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=800',
    category: 'Cadernos',
    discount: 10,
  },
  {
    id: '8',
    name: 'Kit Adesivos Românticos',
    price: 29.90,
    image: 'https://images.unsplash.com/photo-1607827448387-a67db1383b59?w=800',
    category: 'Adesivos',
  },
  {
    id: '9',
    name: 'Planner Datado Azul Serenidade',
    price: 79.90,
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=800',
    category: 'Planners Datados',
  },
  {
    id: '10',
    name: 'Combo Estudante Dedicada',
    price: 119.90,
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800',
    category: 'Combos',
    discount: 25,
  },
  {
    id: '11',
    name: 'Caderno Gratidão Diária',
    price: 34.90,
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=800',
    category: 'Cadernos',
  },
  {
    id: '12',
    name: 'Adesivos Motivacionais',
    price: 19.90,
    image: 'https://images.unsplash.com/photo-1607827448387-a67db1383b59?w=800',
    category: 'Adesivos',
    discount: 5,
  },
];

export const featuredProducts = products.slice(0, 8);

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'todos') return products;
  return products.filter((product) => product.category === category);
};

export const categories = [
  'todos',
  'Planners Datados',
  'Planners sem datas',
  'Cadernos',
  'Adesivos',
  'Combos',
];
