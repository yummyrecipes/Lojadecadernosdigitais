import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, Heart, User, Search } from 'lucide-react';
import { useCart } from '@/app/context/CartContext';
import logo from 'figma:asset/2a00d9e85e8b461bff1a33745aec636fddad71e2.png';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { cartCount } = useCart();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b-2" style={{ borderBottomColor: '#E89BB9' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-32">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Planner Fluxo" className="h-28 md:h-32 w-auto" />
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Buscar planners..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 rounded-full border-2 focus:outline-none focus:border-[#F5A962] transition-colors"
                style={{ borderColor: '#E89BB9' }}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: '#E89BB9' }} />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="/#como-funciona"
              className="font-medium transition-colors hover:text-[#F5A962]"
              style={{ color: '#2C1840' }}
            >
              Como Funciona
            </a>
            <a
              href="/#relatos"
              className="font-medium transition-colors hover:text-[#F5A962]"
              style={{ color: '#2C1840' }}
            >
              Relatos
            </a>
            <a
              href="/#duvidas"
              className="font-medium transition-colors hover:text-[#F5A962]"
              style={{ color: '#2C1840' }}
            >
              Dúvidas
            </a>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4 ml-4">
            <button className="transition-colors hidden md:block hover:text-[#F5A962]" style={{ color: '#E89BB9' }}>
              <Heart className="w-5 h-5" />
            </button>
            <button className="transition-colors hidden md:block hover:text-[#F5A962]" style={{ color: '#E89BB9' }}>
              <User className="w-5 h-5" />
            </button>
            <Link
              to="/carrinho"
              className="relative transition-colors hover:text-[#F5A962]"
              style={{ color: '#E89BB9' }}
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center" style={{ backgroundColor: '#F5A962' }}>
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              style={{ color: '#2C1840' }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t" style={{ borderColor: '#E89BB9' }}>
            {/* Search Bar - Mobile */}
            <div className="mb-4">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Buscar planners..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pl-10 rounded-full border-2 focus:outline-none focus:border-[#F5A962]"
                  style={{ borderColor: '#E89BB9' }}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: '#E89BB9' }} />
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="font-medium transition-colors hover:text-[#F5A962]"
                style={{ color: '#2C1840' }}
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link
                to="/loja"
                className="font-medium transition-colors hover:text-[#F5A962]"
                style={{ color: '#2C1840' }}
                onClick={() => setIsMenuOpen(false)}
              >
                Loja
              </Link>
              <Link
                to="/clube"
                className="font-medium transition-colors hover:text-[#F5A962]"
                style={{ color: '#2C1840' }}
                onClick={() => setIsMenuOpen(false)}
              >
                Clube
              </Link>
              <Link
                to="/blog"
                className="font-medium transition-colors hover:text-[#F5A962]"
                style={{ color: '#2C1840' }}
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/quem-somos"
                className="font-medium transition-colors hover:text-[#F5A962]"
                style={{ color: '#2C1840' }}
                onClick={() => setIsMenuOpen(false)}
              >
                Quem Somos
              </Link>
              <Link
                to="/afiliados"
                className="font-medium transition-colors hover:text-[#F5A962]"
                style={{ color: '#2C1840' }}
                onClick={() => setIsMenuOpen(false)}
              >
                Afiliados
              </Link>
              <Link
                to="/contato"
                className="font-medium transition-colors hover:text-[#F5A962]"
                style={{ color: '#2C1840' }}
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};