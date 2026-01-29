import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '@/app/context/CartContext';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export const Carrinho: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Seu carrinho está vazio
          </h2>
          <p className="text-gray-600 mb-8">
            Adicione produtos para começar suas compras!
          </p>
          <Link
            to="/loja"
            className="inline-block bg-pink-400 hover:bg-pink-500 text-white px-8 py-3 rounded-full font-semibold transition-colors"
          >
            Ir para a loja
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Carrinho de Compras
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md">
              {cartItems.map((item) => {
                const finalPrice = item.discount
                  ? item.price * (1 - item.discount / 100)
                  : item.price;

                return (
                  <div
                    key={item.id}
                    className="p-6 border-b last:border-0 flex gap-4"
                  >
                    <div className="w-24 h-24 flex-shrink-0">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 mb-2">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-500 mb-4">
                        {item.category}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="w-8 h-8 flex items-center justify-center border rounded hover:bg-gray-50"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="font-semibold">{item.quantity}</span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="w-8 h-8 flex items-center justify-center border rounded hover:bg-gray-50"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="text-right">
                          <p className="text-lg font-bold text-pink-400">
                            R$ {(finalPrice * item.quantity).toFixed(2)}
                          </p>
                          {item.discount && (
                            <p className="text-sm text-gray-400 line-through">
                              R$ {(item.price * item.quantity).toFixed(2)}
                            </p>
                          )}
                        </div>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="ml-4 text-red-500 hover:text-red-600"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-800 mb-6">
                Resumo do Pedido
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>R$ {getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Desconto</span>
                  <span className="text-green-600">R$ 0,00</span>
                </div>
                <div className="border-t pt-4 flex justify-between font-bold text-gray-800 text-lg">
                  <span>Total</span>
                  <span className="text-pink-400">
                    R$ {getCartTotal().toFixed(2)}
                  </span>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-4">
                ou 4x de R$ {(getCartTotal() / 4).toFixed(2)} sem juros
              </p>

              <Link
                to="/checkout"
                className="block w-full bg-pink-400 hover:bg-pink-500 text-white py-3 rounded-lg font-semibold text-center transition-colors mb-3"
              >
                Finalizar Compra
              </Link>

              <Link
                to="/loja"
                className="block w-full bg-white hover:bg-gray-50 text-pink-400 border-2 border-pink-400 py-3 rounded-lg font-semibold text-center transition-colors"
              >
                Continuar Comprando
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
