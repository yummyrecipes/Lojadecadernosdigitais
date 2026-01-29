import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, 
  XCircle, 
  Loader2, 
  Server, 
  ShoppingBag, 
  CreditCard,
  AlertCircle 
} from 'lucide-react';
import { 
  testWooCommerceConnection, 
  fetchWooCommerceProducts,
  isWooCommerceConfigured 
} from '@/app/services/woocommerce';

interface TestResult {
  name: string;
  status: 'loading' | 'success' | 'error' | 'pending';
  message: string;
}

export const TesteConexao: React.FC = () => {
  const [tests, setTests] = useState<TestResult[]>([
    { name: 'Configuração', status: 'pending', message: 'Verificando variáveis de ambiente...' },
    { name: 'Conexão WordPress', status: 'pending', message: 'Testando conexão com API...' },
    { name: 'Buscar Produtos', status: 'pending', message: 'Buscando produtos do WooCommerce...' },
  ]);

  const [isConfigured, setIsConfigured] = useState(false);

  useEffect(() => {
    runTests();
  }, []);

  const runTests = async () => {
    // Teste 1: Verificar configuração
    setTests(prev => prev.map((test, i) => 
      i === 0 ? { ...test, status: 'loading' } : test
    ));

    await new Promise(resolve => setTimeout(resolve, 500));

    const configured = isWooCommerceConfigured();
    setIsConfigured(configured);

    setTests(prev => prev.map((test, i) => 
      i === 0 ? {
        ...test,
        status: configured ? 'success' : 'error',
        message: configured 
          ? '✅ Variáveis de ambiente configuradas!' 
          : '❌ Configure o arquivo .env com suas credenciais'
      } : test
    ));

    if (!configured) {
      setTests(prev => prev.map((test, i) => 
        i > 0 ? { ...test, status: 'error', message: '⏭️ Pulado - configure o .env primeiro' } : test
      ));
      return;
    }

    // Teste 2: Testar conexão
    setTests(prev => prev.map((test, i) => 
      i === 1 ? { ...test, status: 'loading' } : test
    ));

    const connectionResult = await testWooCommerceConnection();

    setTests(prev => prev.map((test, i) => 
      i === 1 ? {
        ...test,
        status: connectionResult.success ? 'success' : 'error',
        message: connectionResult.message
      } : test
    ));

    if (!connectionResult.success) {
      setTests(prev => prev.map((test, i) => 
        i === 2 ? { ...test, status: 'error', message: '⏭️ Pulado - conexão falhou' } : test
      ));
      return;
    }

    // Teste 3: Buscar produtos
    setTests(prev => prev.map((test, i) => 
      i === 2 ? { ...test, status: 'loading' } : test
    ));

    const products = await fetchWooCommerceProducts();

    setTests(prev => prev.map((test, i) => 
      i === 2 ? {
        ...test,
        status: products.length > 0 ? 'success' : 'error',
        message: products.length > 0 
          ? `✅ ${products.length} produto(s) encontrado(s)! ${products.map(p => p.name).join(', ')}` 
          : '❌ Nenhum produto encontrado. Cadastre produtos no WooCommerce.'
      } : test
    ));
  };

  const getStatusIcon = (status: TestResult['status']) => {
    switch (status) {
      case 'loading':
        return <Loader2 className="w-5 h-5 animate-spin text-blue-500" />;
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'error':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <AlertCircle className="w-5 h-5 text-gray-400" />;
    }
  };

  const allTestsPassed = tests.every(test => test.status === 'success');

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <Server className="w-16 h-16 mx-auto mb-4" style={{ color: '#E89BB9' }} />
          <h1 className="text-4xl font-bold mb-3" style={{ color: '#E89BB9' }}>
            Teste de Conexão WooCommerce
          </h1>
          <p className="text-gray-600">
            Verificando integração com WordPress e Mercado Pago
          </p>
        </div>

        {/* Testes */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <div className="space-y-6">
            {tests.map((test, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg bg-gray-50"
              >
                <div className="flex-shrink-0 mt-1">
                  {getStatusIcon(test.status)}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 mb-1">
                    {index + 1}. {test.name}
                  </h3>
                  <p className={`text-sm ${
                    test.status === 'success' ? 'text-green-600' :
                    test.status === 'error' ? 'text-red-600' :
                    'text-gray-600'
                  }`}>
                    {test.message}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Resultado Final */}
          <div className={`mt-8 p-6 rounded-lg ${
            allTestsPassed 
              ? 'bg-green-50 border-2 border-green-200' 
              : tests.some(t => t.status === 'loading')
              ? 'bg-blue-50 border-2 border-blue-200'
              : 'bg-yellow-50 border-2 border-yellow-200'
          }`}>
            {allTestsPassed ? (
              <>
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <h3 className="text-xl font-bold text-green-800">
                    Tudo Funcionando! 🎉
                  </h3>
                </div>
                <p className="text-green-700 mb-4">
                  Sua integração com WooCommerce está 100% operacional! 
                  O site está pronto para receber pedidos reais.
                </p>
                <div className="flex gap-3">
                  <a
                    href="/loja"
                    className="px-4 py-2 rounded-lg font-semibold text-white transition-all hover:scale-105"
                    style={{ backgroundColor: '#E89BB9' }}
                  >
                    Ir para Loja
                  </a>
                  <button
                    onClick={runTests}
                    className="px-4 py-2 rounded-lg font-semibold border-2 transition-all hover:scale-105"
                    style={{ borderColor: '#E89BB9', color: '#E89BB9' }}
                  >
                    Testar Novamente
                  </button>
                </div>
              </>
            ) : tests.some(t => t.status === 'loading') ? (
              <>
                <div className="flex items-center gap-3">
                  <Loader2 className="w-6 h-6 text-blue-600 animate-spin" />
                  <h3 className="text-xl font-bold text-blue-800">
                    Testando Conexão...
                  </h3>
                </div>
                <p className="text-blue-700 mt-2">
                  Aguarde enquanto verificamos a integração.
                </p>
              </>
            ) : (
              <>
                <div className="flex items-center gap-3 mb-3">
                  <XCircle className="w-6 h-6 text-red-600" />
                  <h3 className="text-xl font-bold text-red-800">
                    Configuração Necessária
                  </h3>
                </div>
                <p className="text-red-700 mb-4">
                  {!isConfigured 
                    ? 'Configure o arquivo .env com suas credenciais do WooCommerce.'
                    : 'Verifique os erros acima e tente novamente.'
                  }
                </p>
                <button
                  onClick={runTests}
                  className="px-4 py-2 rounded-lg font-semibold text-white transition-all hover:scale-105"
                  style={{ backgroundColor: '#E89BB9' }}
                >
                  Testar Novamente
                </button>
              </>
            )}
          </div>
        </div>

        {/* Informações de Configuração */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#E89BB9' }}>
            📝 Como Configurar
          </h2>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: '#E89BB9' }}>
                  1
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Configure o arquivo .env
                </h3>
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                  <div>VITE_WORDPRESS_URL=https://seu-wordpress.com.br</div>
                  <div>VITE_WOOCOMMERCE_KEY=ck_sua_key_aqui</div>
                  <div>VITE_WOOCOMMERCE_SECRET=cs_seu_secret_aqui</div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: '#F5A962' }}>
                  2
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Instale o Plugin Mercado Pago
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  No WordPress Admin:
                </p>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  <li>Plugins → Adicionar Novo</li>
                  <li>Pesquisar: "WooCommerce Mercado Pago"</li>
                  <li>Instalar e Ativar</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: '#E89BB9' }}>
                  3
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Configure Mercado Pago
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  No WordPress:
                </p>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  <li>WooCommerce → Configurações → Pagamentos</li>
                  <li>Mercado Pago → Configurar</li>
                  <li>Adicionar Public Key e Access Token</li>
                  <li>Ativar PIX e Cartão de Crédito</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Links Úteis */}
          <div className="mt-8 pt-6 border-t">
            <h3 className="font-semibold text-gray-800 mb-4">📚 Documentação</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <a 
                href="https://woocommerce.github.io/woocommerce-rest-api-docs/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-3 rounded-lg border-2 hover:bg-purple-50 transition-colors"
                style={{ borderColor: '#E89BB9' }}
              >
                <ShoppingBag className="w-5 h-5" style={{ color: '#E89BB9' }} />
                <span className="text-sm font-medium">API WooCommerce</span>
              </a>
              <a 
                href="https://www.mercadopago.com.br/developers/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-3 rounded-lg border-2 hover:bg-amber-50 transition-colors"
                style={{ borderColor: '#F5A962' }}
              >
                <CreditCard className="w-5 h-5" style={{ color: '#F5A962' }} />
                <span className="text-sm font-medium">Mercado Pago Developers</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};