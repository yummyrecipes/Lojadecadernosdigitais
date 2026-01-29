/**
 * Serviço de integração com WordPress WooCommerce
 * 
 * CONFIGURAÇÃO NO WORDPRESS:
 * 1. Instale o WooCommerce
 * 2. Vá em WooCommerce > Configurações > Avançado > API REST
 * 3. Clique em "Adicionar chave"
 * 4. Descrição: "Planner Fluxo React"
 * 5. Permissões: Leitura/Gravação
 * 6. Copie a Consumer Key e Consumer Secret
 * 7. Configure no arquivo .env
 */

// ============================================
// CONFIGURAÇÃO - Usando variáveis de ambiente
// ============================================

const WORDPRESS_URL = import.meta.env.VITE_WORDPRESS_URL || 'https://seu-site.com.br';
const CONSUMER_KEY = import.meta.env.VITE_WOOCOMMERCE_KEY || 'ck_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const CONSUMER_SECRET = import.meta.env.VITE_WOOCOMMERCE_SECRET || 'cs_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';

// ============================================
// INTERFACES
// ============================================

export interface WooCommerceProduct {
  id: number;
  name: string;
  slug: string;
  permalink: string;
  price: string;
  regular_price: string;
  sale_price: string;
  on_sale: boolean;
  description: string;
  short_description: string;
  images: Array<{
    id: number;
    src: string;
    name: string;
    alt: string;
  }>;
  categories: Array<{
    id: number;
    name: string;
    slug: string;
  }>;
  tags: Array<{
    id: number;
    name: string;
    slug: string;
  }>;
  stock_status: 'instock' | 'outofstock' | 'onbackorder';
  average_rating: string;
  rating_count: number;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  image: string;
  category: string;
  badge?: string;
  rating?: number;
  reviewCount?: number;
  slug: string;
}

// ============================================
// FUNÇÕES DE API
// ============================================

/**
 * Busca todos os produtos do WooCommerce
 */
export async function fetchWooCommerceProducts(): Promise<Product[]> {
  try {
    const url = `${WORDPRESS_URL}/wp-json/wc/v3/products?consumer_key=${CONSUMER_KEY}&consumer_secret=${CONSUMER_SECRET}&per_page=100`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Erro ao buscar produtos: ${response.statusText}`);
    }
    
    const wooProducts: WooCommerceProduct[] = await response.json();
    
    // Converter produtos do WooCommerce para formato do app
    return wooProducts.map(convertWooProductToAppProduct);
  } catch (error) {
    console.error('Erro ao conectar com WooCommerce:', error);
    // Retorna produtos mock em caso de erro
    return getMockProducts();
  }
}

/**
 * Busca um produto específico por ID
 */
export async function fetchWooCommerceProductById(id: string): Promise<Product | null> {
  try {
    const url = `${WORDPRESS_URL}/wp-json/wc/v3/products/${id}?consumer_key=${CONSUMER_KEY}&consumer_secret=${CONSUMER_SECRET}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Erro ao buscar produto: ${response.statusText}`);
    }
    
    const wooProduct: WooCommerceProduct = await response.json();
    
    return convertWooProductToAppProduct(wooProduct);
  } catch (error) {
    console.error('Erro ao buscar produto:', error);
    return null;
  }
}

/**
 * Busca produtos por categoria
 */
export async function fetchWooCommerceProductsByCategory(categorySlug: string): Promise<Product[]> {
  try {
    // Primeiro busca o ID da categoria
    const categoryUrl = `${WORDPRESS_URL}/wp-json/wc/v3/products/categories?slug=${categorySlug}&consumer_key=${CONSUMER_KEY}&consumer_secret=${CONSUMER_SECRET}`;
    const categoryResponse = await fetch(categoryUrl);
    const categories = await categoryResponse.json();
    
    if (!categories || categories.length === 0) {
      return [];
    }
    
    const categoryId = categories[0].id;
    
    // Busca produtos da categoria
    const url = `${WORDPRESS_URL}/wp-json/wc/v3/products?category=${categoryId}&consumer_key=${CONSUMER_KEY}&consumer_secret=${CONSUMER_SECRET}&per_page=100`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Erro ao buscar produtos: ${response.statusText}`);
    }
    
    const wooProducts: WooCommerceProduct[] = await response.json();
    
    return wooProducts.map(convertWooProductToAppProduct);
  } catch (error) {
    console.error('Erro ao buscar produtos por categoria:', error);
    return [];
  }
}

// ============================================
// FUNÇÕES AUXILIARES
// ============================================

/**
 * Converte produto do WooCommerce para formato do app
 */
function convertWooProductToAppProduct(wooProduct: WooCommerceProduct): Product {
  const price = parseFloat(wooProduct.price);
  const regularPrice = parseFloat(wooProduct.regular_price);
  
  return {
    id: wooProduct.id.toString(),
    name: wooProduct.name,
    price: price,
    originalPrice: wooProduct.on_sale ? regularPrice : undefined,
    description: stripHtml(wooProduct.short_description || wooProduct.description),
    image: wooProduct.images[0]?.src || 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=600',
    category: wooProduct.categories[0]?.name || 'Geral',
    badge: wooProduct.on_sale ? 'Promoção' : undefined,
    rating: parseFloat(wooProduct.average_rating) || undefined,
    reviewCount: wooProduct.rating_count || undefined,
    slug: wooProduct.slug,
  };
}

/**
 * Remove tags HTML de uma string
 */
function stripHtml(html: string): string {
  const tmp = document.createElement('DIV');
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || '';
}

/**
 * Retorna produtos mock para desenvolvimento/fallback
 */
function getMockProducts(): Product[] {
  return [
    {
      id: '1',
      name: 'Planner Mensal Rosa 2026',
      price: 49.90,
      originalPrice: 79.90,
      description: 'Organize seu mês com elegância! Planner digital completo com 12 meses, calendários, metas e muito mais.',
      image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=600',
      category: 'Planners Mensais',
      badge: 'Mais Vendido',
      rating: 4.9,
      reviewCount: 247,
      slug: 'planner-mensal-rosa-2026',
    },
    {
      id: '2',
      name: 'Planner Semanal Ouro',
      price: 39.90,
      description: 'Planeje sua semana com estilo! Design sofisticado em tons de ouro para organizar cada dia.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600',
      category: 'Planners Semanais',
      rating: 4.8,
      reviewCount: 189,
      slug: 'planner-semanal-ouro',
    },
    {
      id: '3',
      name: 'Planner Anual Completo 2026',
      price: 97.00,
      originalPrice: 147.00,
      description: 'O mais completo! Visão anual, mensal e semanal + rastreadores de hábitos e metas.',
      image: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=600',
      category: 'Planners Anuais',
      badge: 'Promoção',
      rating: 5.0,
      reviewCount: 421,
      slug: 'planner-anual-completo-2026',
    },
    {
      id: '4',
      name: 'Kit 3 Planners - Oferta Especial',
      price: 127.00,
      originalPrice: 186.70,
      description: 'Economize 32%! Receba 3 planners: Mensal, Semanal e Anual em um pacote promocional.',
      image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=600',
      category: 'Kits Especiais',
      badge: 'Oferta',
      rating: 4.9,
      reviewCount: 312,
      slug: 'kit-3-planners',
    },
    {
      id: '5',
      name: 'Planner Minimalista',
      price: 44.90,
      description: 'Design clean e minimalista. Perfeito para quem busca simplicidade e funcionalidade.',
      image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=600',
      category: 'Planners Mensais',
      rating: 4.7,
      reviewCount: 156,
      slug: 'planner-minimalista',
    },
    {
      id: '6',
      name: 'Planner de Estudos 2026',
      price: 54.90,
      description: 'Especial para estudantes! Com calendário acadêmico, controle de matérias e cronograma de provas.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600',
      category: 'Estudos',
      rating: 4.8,
      reviewCount: 198,
      slug: 'planner-estudos-2026',
    },
  ];
}

// ============================================
// VERIFICAÇÃO DE CONFIGURAÇÃO
// ============================================

/**
 * Verifica se o WordPress está configurado
 */
export function isWooCommerceConfigured(): boolean {
  return (
    WORDPRESS_URL !== 'https://seu-site.com.br' &&
    CONSUMER_KEY !== 'ck_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' &&
    CONSUMER_SECRET !== 'cs_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
  );
}

/**
 * Testa conexão com WordPress
 */
export async function testWooCommerceConnection(): Promise<{ success: boolean; message: string }> {
  try {
    const url = `${WORDPRESS_URL}/wp-json/wc/v3/system_status?consumer_key=${CONSUMER_KEY}&consumer_secret=${CONSUMER_SECRET}`;
    const response = await fetch(url);
    
    if (response.ok) {
      return {
        success: true,
        message: 'Conexão com WordPress estabelecida com sucesso!',
      };
    } else {
      return {
        success: false,
        message: `Erro de conexão: ${response.status} - ${response.statusText}`,
      };
    }
  } catch (error) {
    return {
      success: false,
      message: `Erro ao conectar: ${error instanceof Error ? error.message : 'Erro desconhecido'}`,
    };
  }
}

// ============================================
// CRIAÇÃO DE PEDIDOS
// ============================================

export interface OrderData {
  billing: {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    address_1?: string;
    city?: string;
    state?: string;
    postcode?: string;
    country?: string;
  };
  line_items: Array<{
    product_id: number;
    quantity: number;
  }>;
  payment_method: string;
  payment_method_title: string;
  set_paid?: boolean;
}

export interface WooCommerceOrder {
  id: number;
  order_key: string;
  status: string;
  total: string;
  payment_url: string;
  date_created: string;
}

/**
 * Cria um pedido no WooCommerce
 */
export async function createOrder(orderData: OrderData): Promise<WooCommerceOrder | null> {
  try {
    const url = `${WORDPRESS_URL}/wp-json/wc/v3/orders?consumer_key=${CONSUMER_KEY}&consumer_secret=${CONSUMER_SECRET}`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    });
    
    if (!response.ok) {
      const error = await response.json();
      console.error('Erro ao criar pedido:', error);
      throw new Error(`Erro ao criar pedido: ${response.statusText}`);
    }
    
    const order: WooCommerceOrder = await response.json();
    return order;
  } catch (error) {
    console.error('Erro ao criar pedido no WooCommerce:', error);
    return null;
  }
}

/**
 * Busca um pedido específico por ID
 */
export async function getOrder(orderId: number): Promise<WooCommerceOrder | null> {
  try {
    const url = `${WORDPRESS_URL}/wp-json/wc/v3/orders/${orderId}?consumer_key=${CONSUMER_KEY}&consumer_secret=${CONSUMER_SECRET}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Erro ao buscar pedido: ${response.statusText}`);
    }
    
    const order: WooCommerceOrder = await response.json();
    return order;
  } catch (error) {
    console.error('Erro ao buscar pedido:', error);
    return null;
  }
}

/**
 * Atualiza status de um pedido
 */
export async function updateOrderStatus(
  orderId: number,
  status: 'pending' | 'processing' | 'on-hold' | 'completed' | 'cancelled' | 'refunded' | 'failed'
): Promise<boolean> {
  try {
    const url = `${WORDPRESS_URL}/wp-json/wc/v3/orders/${orderId}?consumer_key=${CONSUMER_KEY}&consumer_secret=${CONSUMER_SECRET}`;
    
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status }),
    });
    
    return response.ok;
  } catch (error) {
    console.error('Erro ao atualizar status do pedido:', error);
    return false;
  }
}