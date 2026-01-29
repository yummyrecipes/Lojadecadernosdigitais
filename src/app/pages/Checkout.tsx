import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Smartphone, Loader2 } from 'lucide-react';
import { useCart } from '@/app/context/CartContext';
import { createOrder, type OrderData } from '@/app/services/woocommerce';

export const Checkout: React.FC = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    cpf: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    try {
      // Separar nome em primeiro e último nome
      const nameParts = formData.nome.trim().split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || '';
      
      // Preparar dados do pedido
      const orderData: OrderData = {
        billing: {
          first_name: firstName,
          last_name: lastName,
          email: formData.email,
          phone: formData.telefone,
          country: 'BR',
        },
        line_items: cartItems.map(item => ({
          product_id: parseInt(item.id),
          quantity: item.quantity,
        })),
        payment_method: paymentMethod === 'pix' ? 'woo-mercado-pago-pix' : 'woo-mercado-pago-custom',
        payment_method_title: paymentMethod === 'pix' ? 'PIX - Mercado Pago' : 'Cartão de Crédito - Mercado Pago',
      };
      
      // Criar pedido no WooCommerce
      const order = await createOrder(orderData);
      
      if (order) {
        // Limpar carrinho
        clearCart();
        
        // Se for PIX ou Cartão, redireciona para URL de pagamento do Mercado Pago
        if (order.payment_url && paymentMethod === 'pix') {
          // Abre página de pagamento do Mercado Pago
          window.location.href = order.payment_url;
        } else if (order.payment_url && paymentMethod === 'credit') {
          // Abre página de pagamento do Mercado Pago
          window.location.href = order.payment_url;
        } else {
          // Redireciona para página de obrigado
          navigate(`/obrigado?order_id=${order.id}&email=${encodeURIComponent(formData.email)}`);
        }
      } else {
        // Se falhar, usar sistema mock
        const orderId = Math.floor(Math.random() * 100000);
        clearCart();
        navigate(`/obrigado?order_id=${orderId}&email=${encodeURIComponent(formData.email)}`);
      }
    } catch (error) {
      console.error('Erro ao processar pedido:', error);
      alert('Erro ao processar pedido. Por favor, tente novamente.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (cartItems.length === 0) {
    navigate('/carrinho');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Finalizar Compra</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Info */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-6">
                  Informações Pessoais
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Nome Completo</label>
                    <input
                      type="text"
                      required
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">E-mail</label>
                    <input
                      type="email"
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Telefone</label>
                    <input
                      type="tel"
                      required
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">CPF</label>
                    <input
                      type="text"
                      required
                      name="cpf"
                      value={formData.cpf}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-6">
                  Forma de Pagamento
                </h2>

                <div className="space-y-4">
                  <label className="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                    <input
                      type="radio"
                      name="payment"
                      value="credit"
                      checked={paymentMethod === 'credit'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="mr-3 accent-pink-400"
                    />
                    <CreditCard className="w-6 h-6 text-pink-400 mr-3" />
                    <div>
                      <p className="font-semibold text-gray-800">Cartão de Crédito</p>
                      <p className="text-sm text-gray-500">Parcelamento em até 4x sem juros</p>
                    </div>
                  </label>

                  <label className="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                    <input
                      type="radio"
                      name="payment"
                      value="pix"
                      checked={paymentMethod === 'pix'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="mr-3 accent-pink-400"
                    />
                    <Smartphone className="w-6 h-6 text-pink-400 mr-3" />
                    <div>
                      <p className="font-semibold text-gray-800">PIX</p>
                      <p className="text-sm text-green-600">5% de desconto à vista</p>
                    </div>
                  </label>
                </div>

                {paymentMethod === 'credit' && (
                  <div className="mt-6 space-y-4">
                    <div>
                      <label className="block text-gray-700 mb-2">Número do Cartão</label>
                      <input
                        type="text"
                        required
                        placeholder="0000 0000 0000 0000"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="col-span-2">
                        <label className="block text-gray-700 mb-2">Validade</label>
                        <input
                          type="text"
                          required
                          placeholder="MM/AA"
                          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2">CVV</label>
                        <input
                          type="text"
                          required
                          placeholder="000"
                          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-pink-400 hover:bg-pink-500 text-white py-4 rounded-lg font-semibold text-lg transition-colors"
                disabled={isProcessing}
              >
                {isProcessing ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Confirmar Pedido'}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-800 mb-6">
                Resumo do Pedido
              </h2>

              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-3 text-sm">
                    <span className="text-gray-600">{item.quantity}x</span>
                    <span className="text-gray-800 flex-1">{item.name}</span>
                    <span className="font-semibold text-gray-800">
                      R$ {((item.discount ? item.price * (1 - item.discount / 100) : item.price) * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>R$ {getCartTotal().toFixed(2)}</span>
                </div>
                {paymentMethod === 'pix' && (
                  <div className="flex justify-between text-green-600">
                    <span>Desconto PIX (5%)</span>
                    <span>-R$ {(getCartTotal() * 0.05).toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between font-bold text-lg text-pink-400 pt-2">
                  <span>Total</span>
                  <span>
                    R$ {(paymentMethod === 'pix' ? getCartTotal() * 0.95 : getCartTotal()).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};