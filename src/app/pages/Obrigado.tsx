import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { CheckCircle, Download, Mail, Package, ShoppingBag } from 'lucide-react';

export const Obrigado: React.FC = () => {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('order_id');
  const email = searchParams.get('email');
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    // Limpar carrinho após compra
    localStorage.removeItem('cart');
    
    // Countdown para download
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        
        {/* Animação de Sucesso */}
        <div className="text-center mb-8">
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-green-400 rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <CheckCircle 
              className="w-24 h-24 mx-auto relative z-10 animate-bounce" 
              style={{ color: '#10B981' }} 
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-3" style={{ color: '#E89BB9' }}>
            Pagamento Confirmado! 🎉
          </h1>
          <p className="text-xl text-gray-600">
            Obrigada pela sua compra na Planner Fluxo!
          </p>
        </div>

        {/* Card principal */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-6">
          
          {/* Informações do pedido */}
          {orderId && (
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-6 mb-8">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Número do Pedido</p>
                  <p className="text-2xl font-bold" style={{ color: '#E89BB9' }}>
                    #{orderId}
                  </p>
                </div>
                {email && (
                  <div className="text-right">
                    <p className="text-sm text-gray-600 mb-1">E-mail de confirmação</p>
                    <p className="text-sm font-medium" style={{ color: '#E89BB9' }}>
                      {email}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Próximos passos */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: '#E89BB9' }}>
              O que acontece agora?
            </h2>
            
            <div className="space-y-4">
              {/* Passo 1 */}
              <div className="flex gap-4 items-start bg-purple-50 rounded-lg p-4">
                <div className="bg-white rounded-full p-3 shadow-sm">
                  <Mail className="w-6 h-6" style={{ color: '#E89BB9' }} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1" style={{ color: '#E89BB9' }}>
                    1. Verifique seu e-mail
                  </h3>
                  <p className="text-sm text-gray-700">
                    Enviamos um e-mail de confirmação com todos os detalhes do pedido 
                    para <strong>{email || 'seu e-mail cadastrado'}</strong>
                  </p>
                </div>
              </div>

              {/* Passo 2 */}
              <div className="flex gap-4 items-start bg-pink-50 rounded-lg p-4">
                <div className="bg-white rounded-full p-3 shadow-sm">
                  <Download className="w-6 h-6" style={{ color: '#F5A962' }} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1" style={{ color: '#E89BB9' }}>
                    2. Acesse seus arquivos
                  </h3>
                  <p className="text-sm text-gray-700">
                    O link para download dos seus planners digitais está no e-mail 
                    e disponível na Área de Membros
                  </p>
                </div>
              </div>

              {/* Passo 3 */}
              <div className="flex gap-4 items-start bg-amber-50 rounded-lg p-4">
                <div className="bg-white rounded-full p-3 shadow-sm">
                  <Package className="w-6 h-6" style={{ color: '#E89BB9' }} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1" style={{ color: '#E89BB9' }}>
                    3. Comece a usar!
                  </h3>
                  <p className="text-sm text-gray-700">
                    Baixe seus planners em PDF e comece a organizar sua vida com elegância! 
                    Compatível com todos os tablets e apps de anotação.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Botões de ação */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <Link
              to="/area-membros"
              className="flex items-center justify-center gap-2 px-6 py-4 rounded-full font-semibold text-white transition-all hover:scale-105 shadow-lg"
              style={{ background: 'linear-gradient(135deg, #E89BB9 0%, #F5A962 100%)' }}
            >
              <Download className="w-5 h-5" />
              Acessar Área de Membros
            </Link>
            
            <Link
              to="/loja"
              className="flex items-center justify-center gap-2 px-6 py-4 rounded-full font-semibold border-2 transition-all hover:scale-105"
              style={{ borderColor: '#E89BB9', color: '#E89BB9' }}
            >
              <ShoppingBag className="w-5 h-5" />
              Continuar Comprando
            </Link>
          </div>

          {/* Dica importante */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
            <div className="flex gap-3">
              <div className="text-yellow-600 text-xl">💡</div>
              <div>
                <h3 className="font-semibold text-yellow-800 mb-1">
                  Dica Importante
                </h3>
                <p className="text-sm text-yellow-700">
                  Não encontrou o e-mail? Verifique a caixa de spam ou promoções. 
                  Se precisar de ajuda, entre em contato conosco pelo WhatsApp ou e-mail.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefícios extras */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: '#E89BB9' }}>
            🎁 Bônus Exclusivos
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-3xl">📚</span>
              </div>
              <h3 className="font-semibold mb-2" style={{ color: '#E89BB9' }}>
                Atualizações Grátis
              </h3>
              <p className="text-sm text-gray-600">
                Receba novas versões e melhorias sem custo adicional
              </p>
            </div>

            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-3xl">👥</span>
              </div>
              <h3 className="font-semibold mb-2" style={{ color: '#E89BB9' }}>
                Comunidade VIP
              </h3>
              <p className="text-sm text-gray-600">
                Acesso ao grupo exclusivo de clientes no Telegram
              </p>
            </div>

            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-3xl">💬</span>
              </div>
              <h3 className="font-semibold mb-2" style={{ color: '#E89BB9' }}>
                Suporte Premium
              </h3>
              <p className="text-sm text-gray-600">
                Atendimento prioritário para tirar dúvidas
              </p>
            </div>
          </div>
        </div>

        {/* Compartilhe */}
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3" style={{ color: '#E89BB9' }}>
            Amou seus planners? 💕
          </h2>
          <p className="text-gray-700 mb-6">
            Compartilhe com suas amigas e ganhe <strong>15% OFF</strong> na próxima compra! 
            Use nosso programa de afiliados e ganhe comissões.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/afiliados"
              className="px-6 py-3 rounded-full font-semibold text-white transition-all hover:scale-105"
              style={{ backgroundColor: '#E89BB9' }}
            >
              Quero ser Afiliada
            </Link>
            <a
              href="https://instagram.com/plannerfluxo"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full font-semibold border-2 transition-all hover:scale-105"
              style={{ borderColor: '#E89BB9', color: '#E89BB9' }}
            >
              Nos siga no Instagram
            </a>
          </div>
        </div>

        {/* Suporte */}
        <div className="text-center mt-8 text-gray-600">
          <p className="mb-2">Precisa de ajuda?</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/contato" className="text-pink-500 hover:underline font-medium">
              Entre em Contato
            </Link>
            <Link to="/duvidas" className="text-pink-500 hover:underline font-medium">
              Central de Ajuda
            </Link>
            <a 
              href="https://wa.me/5511999999999" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:underline font-medium"
            >
              WhatsApp
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
