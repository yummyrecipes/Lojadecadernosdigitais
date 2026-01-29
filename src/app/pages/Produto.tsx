import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Heart, Star, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { getProductById } from '@/app/data/products';
import { useCart } from '@/app/context/CartContext';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export const Produto: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || '');
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [showFaq, setShowFaq] = useState<number | null>(null);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Produto não encontrado
          </h2>
          <Link to="/loja" className="text-pink-400 hover:underline">
            Voltar para a loja
          </Link>
        </div>
      </div>
    );
  }

  const finalPrice = product.discount
    ? product.price * (1 - product.discount / 100)
    : product.price;

  const images = [product.image, product.image, product.image];

  const reviews = [
    {
      id: 1,
      name: 'Julia Santos',
      rating: 5,
      date: '10 Jan 2026',
      comment:
        'Adorei! O planner é lindo e muito funcional. Recomendo demais!',
    },
    {
      id: 2,
      name: 'Fernanda Costa',
      rating: 5,
      date: '15 Jan 2026',
      comment:
        'Excelente qualidade. As páginas são bem pensadas e o design é maravilhoso.',
    },
  ];

  const faqs = [
    {
      question: 'Como vou receber meu planner?',
      answer:
        'Após a confirmação do pagamento, você receberá um e-mail com o link para download do arquivo PDF.',
    },
    {
      question: 'Posso usar em qual aplicativo?',
      answer:
        'Nossos planners são compatíveis com GoodNotes, Notability, Noteshelf e outros aplicativos de anotação digital.',
    },
    {
      question: 'Posso imprimir?',
      answer:
        'Sim! Você pode imprimir para uso pessoal, mas a revenda é proibida.',
    },
    {
      question: 'Tem garantia?',
      answer:
        'Sim! Oferecemos garantia de 7 dias. Se não gostar, devolvemos seu dinheiro.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="mb-8 text-sm text-gray-600">
          <Link to="/" className="hover:text-pink-400">
            Início
          </Link>{' '}
          /{' '}
          <Link to="/loja" className="hover:text-pink-400">
            Loja
          </Link>{' '}
          / {product.name}
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
              <ImageWithFallback
                src={images[selectedImage]}
                alt={product.name}
                className="w-full rounded-lg"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`rounded-lg overflow-hidden border-2 ${
                    selectedImage === index
                      ? 'border-pink-400'
                      : 'border-transparent'
                  }`}
                >
                  <ImageWithFallback
                    src={img}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full aspect-square object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              {product.name}
            </h1>

            <div className="flex items-center mb-6">
              <div className="flex mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <span className="text-gray-600">(127 avaliações)</span>
            </div>

            <div className="mb-6">
              {product.discount && (
                <div className="inline-block bg-pink-400 text-white px-3 py-1 rounded-full text-sm font-semibold mb-2">
                  -{product.discount}% OFF
                </div>
              )}
              <div className="flex items-baseline gap-4">
                <span className="text-4xl font-bold text-pink-400">
                  R$ {finalPrice.toFixed(2)}
                </span>
                {product.discount && (
                  <span className="text-xl text-gray-400 line-through">
                    R$ {product.price.toFixed(2)}
                  </span>
                )}
              </div>
              <p className="text-gray-600 mt-2">
                ou 4x de R$ {(finalPrice / 4).toFixed(2)} sem juros
              </p>
              <p className="text-gray-600">PIX: R$ {(finalPrice * 0.95).toFixed(2)} (5% de desconto)</p>
            </div>

            <div className="bg-purple-50 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-gray-800 mb-4">
                O que está incluído:
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Mais de 200 páginas personalizáveis
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Seções de planejamento diário, semanal e mensal
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Páginas de controle financeiro e metas
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Compatível com GoodNotes, Notability e outros
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Atualizações gratuitas por 1 ano
                  </span>
                </li>
              </ul>
            </div>

            <div className="flex gap-4 mb-6">
              <button
                onClick={() => addToCart(product)}
                className="flex-1 bg-pink-400 hover:bg-pink-500 text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <ShoppingCart className="w-5 h-5" />
                Adicionar ao Carrinho
              </button>
              <button className="bg-white hover:bg-gray-50 text-pink-400 border-2 border-pink-400 p-4 rounded-lg transition-colors">
                <Heart className="w-6 h-6" />
              </button>
            </div>

            <Link
              to="/carrinho"
              className="block w-full bg-purple-300 hover:bg-purple-400 text-white py-4 rounded-lg font-semibold text-center transition-colors"
            >
              Comprar Agora
            </Link>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Descrição</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Transforme sua rotina com nosso {product.name}! Este planner digital
            foi cuidadosamente desenvolvido para ajudá-la a alcançar seus
            objetivos com organização e estilo.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Com design exclusivo e funcionalidades pensadas especialmente para o
            público feminino, você terá todas as ferramentas necessárias para
            planejar seu dia a dia, acompanhar suas metas e celebrar suas
            conquistas.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Ideal para estudantes, empreendedoras, mães e todas as mulheres que
            buscam mais produtividade e organização na vida pessoal e
            profissional.
          </p>
        </div>

        {/* Reviews */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Avaliações</h2>
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="border-b pb-6 last:border-0">
                <div className="flex items-center mb-2">
                  <div className="flex mr-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <span className="font-semibold text-gray-800 mr-2">
                    {review.name}
                  </span>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Perguntas Frequentes
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b pb-4 last:border-0">
                <button
                  onClick={() => setShowFaq(showFaq === index ? null : index)}
                  className="w-full flex items-center justify-between text-left font-semibold text-gray-800 hover:text-pink-400 transition-colors"
                >
                  {faq.question}
                  {showFaq === index ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>
                {showFaq === index && (
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
