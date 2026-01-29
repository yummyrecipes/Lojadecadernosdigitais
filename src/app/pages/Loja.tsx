import React, { useState, useEffect } from 'react';
import { Filter, AlertCircle } from 'lucide-react';
import { ProductCard } from '@/app/components/ProductCard';
import { products, categories, getProductsByCategory } from '@/app/data/products';
import { fetchWooCommerceProducts, isWooCommerceConfigured, type Product } from '@/app/services/woocommerce';

export const Loja: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [showFilters, setShowFilters] = useState(false);
  const [wooProducts, setWooProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [useWooCommerce, setUseWooCommerce] = useState(false);

  // Carrega produtos do WooCommerce na montagem do componente
  useEffect(() => {
    const loadProducts = async () => {
      if (isWooCommerceConfigured()) {
        setLoading(true);
        const fetchedProducts = await fetchWooCommerceProducts();
        setWooProducts(fetchedProducts);
        setUseWooCommerce(true);
        setLoading(false);
      } else {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  // Usa produtos do WooCommerce se configurado, senão usa produtos mock
  const allProducts = useWooCommerce && wooProducts.length > 0 ? wooProducts : products;
  
  // Filtra produtos por categoria
  const filteredProducts = selectedCategory === 'todos' 
    ? allProducts 
    : allProducts.filter(p => p.category === selectedCategory);

  // Extrai categorias únicas dos produtos
  const availableCategories = ['todos', ...Array.from(new Set(allProducts.map(p => p.category)))];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-300 to-pink-300 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Nossa Loja</h1>
          <p className="text-xl">
            Encontre o planner perfeito para transformar sua rotina
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Aviso de status da conexão */}
        {loading ? (
          <div className="mb-6 bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-center gap-3">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
            <p className="text-sm text-blue-800">
              Carregando produtos do WooCommerce...
            </p>
          </div>
        ) : useWooCommerce && wooProducts.length > 0 ? (
          <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
            <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <div className="flex-1">
              <p className="text-sm text-green-800">
                <strong>✅ Conectado ao WooCommerce!</strong> Exibindo <strong>{wooProducts.length} produto(s)</strong> do seu WordPress.
                {' '}<a href="/teste-conexao" className="underline hover:text-green-900">Ver detalhes</a>
              </p>
            </div>
          </div>
        ) : (
          <div className="mb-6 bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm text-amber-800">
                <strong>⚠️ Modo de demonstração:</strong> Exibindo produtos de exemplo. 
                Configure o arquivo <code className="bg-amber-100 px-1.5 py-0.5 rounded">.env</code> para carregar produtos do WordPress.
                {' '}<a href="/teste-conexao" className="underline hover:text-amber-900">Testar conexão</a>
              </p>
            </div>
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6 lg:mb-0">
                <h2 className="font-semibold text-gray-800">Filtros</h2>
                <button
                  className="lg:hidden"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter className="w-5 h-5" />
                </button>
              </div>

              <div className={`${showFilters ? 'block' : 'hidden'} lg:block mt-6`}>
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-800 mb-4">Categorias</h3>
                  <div className="space-y-2">
                    {availableCategories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                          selectedCategory === category
                            ? 'bg-pink-400 text-white'
                            : 'hover:bg-gray-100 text-gray-700'
                        }`}
                      >
                        {category === 'todos' ? 'Todos os Produtos' : category}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-gray-800 mb-4">Preço</h3>
                  <div className="space-y-2">
                    <label className="flex items-center text-gray-700">
                      <input type="checkbox" className="mr-2 accent-pink-400" />
                      Até R$ 50
                    </label>
                    <label className="flex items-center text-gray-700">
                      <input type="checkbox" className="mr-2 accent-pink-400" />
                      R$ 50 - R$ 100
                    </label>
                    <label className="flex items-center text-gray-700">
                      <input type="checkbox" className="mr-2 accent-pink-400" />
                      Acima de R$ 100
                    </label>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-gray-800 mb-4">Estilo</h3>
                  <div className="space-y-2">
                    <label className="flex items-center text-gray-700">
                      <input type="checkbox" className="mr-2 accent-pink-400" />
                      Minimalista
                    </label>
                    <label className="flex items-center text-gray-700">
                      <input type="checkbox" className="mr-2 accent-pink-400" />
                      Floral
                    </label>
                    <label className="flex items-center text-gray-700">
                      <input type="checkbox" className="mr-2 accent-pink-400" />
                      Geométrico
                    </label>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <p className="text-sm text-gray-600 mb-4">
                    <strong>Formas de Pagamento:</strong>
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>✓ Parcelamento em até 4x</li>
                    <li>✓ PIX com desconto</li>
                    <li>✓ Cartão de crédito</li>
                    <li>✓ PayPal</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {loading ? (
              <div className="text-center py-16">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-pink-400 border-t-transparent"></div>
                <p className="mt-4 text-gray-600">Carregando produtos...</p>
              </div>
            ) : (
              <>
                <div className="mb-6 flex items-center justify-between">
                  <p className="text-gray-600">
                    Mostrando <strong>{filteredProducts.length}</strong> produtos
                  </p>
                  <select className="px-4 py-2 border rounded-lg text-gray-700">
                    <option>Mais relevantes</option>
                    <option>Menor preço</option>
                    <option>Maior preço</option>
                    <option>Mais vendidos</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {filteredProducts.length === 0 && (
                  <div className="text-center py-16">
                    <p className="text-gray-600 text-lg">
                      Nenhum produto encontrado nesta categoria.
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};