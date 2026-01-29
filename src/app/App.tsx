import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/app/context/CartContext';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { Home } from '@/app/pages/Home';
import { Loja } from '@/app/pages/Loja';
import { Produto } from '@/app/pages/Produto';
import { Carrinho } from '@/app/pages/Carrinho';
import { Checkout } from '@/app/pages/Checkout';
import { QuemSomos } from '@/app/pages/QuemSomos';
import { Clube } from '@/app/pages/Clube';
import { Afiliados } from '@/app/pages/Afiliados';
import { Blog } from '@/app/pages/Blog';
import { Contato } from '@/app/pages/Contato';
import { ComoFunciona } from '@/app/pages/ComoFunciona';
import { Relatos } from '@/app/pages/Relatos';
import { Duvidas } from '@/app/pages/Duvidas';
import { AreaMembros } from '@/app/pages/AreaMembros';
import { Privacidade } from '@/app/pages/Privacidade';
import { Obrigado } from '@/app/pages/Obrigado';
import { TesteConexao } from '@/app/pages/TesteConexao';

const App: React.FC = () => {
  return (
    <Router>
      <CartProvider>
        <div className="flex flex-col min-h-screen">
          {/* Promo Bar */}
          <div className="text-center py-3 px-4" style={{ background: 'linear-gradient(135deg, #E89BB9 0%, #F5A962 100%)' }}>
            <p className="text-white font-medium text-sm md:text-base">
              🎉 Oferta Especial: 30% OFF em todos os planners + Frete Grátis! Use o cupom: FLUXO30
            </p>
          </div>
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/loja" element={<Loja />} />
              <Route path="/produto/:id" element={<Produto />} />
              <Route path="/carrinho" element={<Carrinho />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/quem-somos" element={<QuemSomos />} />
              <Route path="/clube" element={<Clube />} />
              <Route path="/afiliados" element={<Afiliados />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<Blog />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/como-funciona" element={<ComoFunciona />} />
              <Route path="/relatos" element={<Relatos />} />
              <Route path="/duvidas" element={<Duvidas />} />
              <Route path="/area-membros" element={<AreaMembros />} />
              <Route path="/privacidade" element={<Privacidade />} />
              <Route path="/obrigado" element={<Obrigado />} />
              <Route path="/teste-conexao" element={<TesteConexao />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
};

export default App;