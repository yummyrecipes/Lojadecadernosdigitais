import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Mail } from 'lucide-react';
import logo from 'figma:asset/2a00d9e85e8b461bff1a33745aec636fddad71e2.png';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-auto" style={{ backgroundColor: '#E89BB9', color: 'white' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1">
            <div className="mb-0">
              <img src={logo} alt="Planner Fluxo" className="h-40 w-auto brightness-0 invert block" />
            </div>
            <p className="text-white/90 text-sm leading-relaxed">
              Transforme sua rotina com nossos planners digitais exclusivos.
              Organize sua vida com elegância e praticidade.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-semibold text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  to="/loja"
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  Loja
                </Link>
              </li>
              <li>
                <Link
                  to="/clube"
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  Clube de Freebies
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/quem-somos"
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  Quem Somos
                </Link>
              </li>
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h4 className="font-semibold text-white mb-4">Suporte</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/contato"
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  Contato
                </Link>
              </li>
              <li>
                <Link
                  to="/afiliados"
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  Programa de Afiliados
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  FAQ
                </a>
              </li>
              <li>
                <Link
                  to="/prprivacvaciddadee"
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter e Redes Sociais */}
          <div>
            <h4 className="font-semibold text-white mb-4">Newsletter</h4>
            <p className="text-white/80 text-sm mb-3">
              Receba novidades e ofertas exclusivas!
            </p>
            <div className="flex gap-2 mb-4">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="px-3 py-2 rounded-full text-sm flex-1 focus:outline-none"
                style={{ color: '#2C1840' }}
              />
              <button 
                className="px-4 py-2 rounded-full font-semibold text-sm transition-colors"
                style={{ backgroundColor: '#F5A962', color: 'white' }}
              >
                Enviar
              </button>
            </div>
            <h4 className="font-semibold text-white mb-3">Siga-nos</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-[#F5A962] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#F5A962] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#F5A962] transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="mailto:contato@plannerfluxo.com.br"
                className="text-white hover:text-[#F5A962] transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>
          <p className="text-white/80 text-sm">
            © 2026 Planner Fluxo. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};