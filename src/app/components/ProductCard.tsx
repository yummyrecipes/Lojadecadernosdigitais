import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';
import { Product, useCart } from '@/app/context/CartContext';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const finalPrice = product.discount
    ? product.price * (1 - product.discount / 100)
    : product.price;

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 group border-2" style={{ borderColor: '#FFF5F8' }}>
      <Link to={`/produto/${product.id}`} className="block relative">
        <div className="aspect-square overflow-hidden" style={{ backgroundColor: '#FFF5F8' }}>
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        {product.discount && (
          <div className="absolute top-3 right-3 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg" style={{ backgroundColor: '#F5A962' }}>
            -{product.discount}%
          </div>
        )}
        <button className="absolute top-3 left-3 bg-white p-2.5 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110">
          <Heart className="w-5 h-5" style={{ color: '#E89BB9' }} />
        </button>
      </Link>

      <div className="p-5">
        <Link to={`/produto/${product.id}`}>
          <h3 className="font-semibold mb-2 hover:opacity-80 transition-colors" style={{ color: '#2C1840' }}>
            {product.name}
          </h3>
        </Link>
        <p className="text-sm mb-3" style={{ color: '#2C1840', opacity: 0.6 }}>{product.category}</p>

        <div className="flex items-center mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 fill-current" style={{ color: '#F5A962' }} viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <span className="text-xs ml-2" style={{ color: '#2C1840', opacity: 0.6 }}>(4.9)</span>
        </div>

        <div className="flex items-center justify-between mb-3">
          <div className="flex flex-col">
            {product.discount ? (
              <>
                <span className="text-xl font-bold" style={{ color: '#E89BB9' }}>
                  R$ {finalPrice.toFixed(2)}
                </span>
                <span className="text-sm line-through" style={{ color: '#2C1840', opacity: 0.4 }}>
                  R$ {product.price.toFixed(2)}
                </span>
              </>
            ) : (
              <span className="text-xl font-bold" style={{ color: '#E89BB9' }}>
                R$ {product.price.toFixed(2)}
              </span>
            )}
          </div>

          <button
            onClick={() => addToCart(product)}
            className="text-white p-3 rounded-full transition-all hover:scale-110 shadow-md"
            style={{ backgroundColor: '#E89BB9' }}
            aria-label="Adicionar ao carrinho"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>

        <div className="text-xs pt-3 border-t space-y-1" style={{ borderColor: '#FFF5F8', color: '#2C1840', opacity: 0.7 }}>
          <p>💳 4x de R$ {(finalPrice / 4).toFixed(2)} sem juros</p>
          <p>✨ ou R$ {(finalPrice * 0.95).toFixed(2)} no PIX (5% off)</p>
        </div>
      </div>
    </div>
  );
};