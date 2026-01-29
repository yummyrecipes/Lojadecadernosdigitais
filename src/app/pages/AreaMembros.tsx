import React, { useState } from 'react';
import { Lock, Mail, User, LogIn, Download, FileText, Gift, Star } from 'lucide-react';

export const AreaMembros: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4" style={{ backgroundColor: '#FFF5F8' }}>
        <div className="max-w-4xl mx-auto text-center">
          <Lock className="w-16 h-16 mx-auto mb-6" style={{ color: '#E89BB9' }} />
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: '#2C1840' }}>
            Área de <span style={{ color: '#E89BB9' }}>Membros</span>
          </h1>
          <p className="text-xl" style={{ color: '#2C1840', opacity: 0.8 }}>
            Acesse seus planners, atualizações gratuitas e conteúdos exclusivos
          </p>
        </div>
      </section>

      {/* Login/Register Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 border-2" style={{ borderColor: '#FFF5F8' }}>
            {/* Toggle Buttons */}
            <div className="flex gap-2 mb-8 p-1 rounded-full" style={{ backgroundColor: '#FFF5F8' }}>
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-3 rounded-full font-semibold transition-all ${
                  isLogin ? 'text-white shadow-lg' : ''
                }`}
                style={{
                  backgroundColor: isLogin ? '#E89BB9' : 'transparent',
                  color: isLogin ? 'white' : '#2C1840',
                }}
              >
                Login
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-3 rounded-full font-semibold transition-all ${
                  !isLogin ? 'text-white shadow-lg' : ''
                }`}
                style={{
                  backgroundColor: !isLogin ? '#E89BB9' : 'transparent',
                  color: !isLogin ? 'white' : '#2C1840',
                }}
              >
                Cadastro
              </button>
            </div>

            {isLogin ? (
              // Login Form
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#2C1840' }}>
                    E-mail
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: '#E89BB9' }} />
                    <input
                      type="email"
                      placeholder="seu@email.com"
                      className="w-full pl-12 pr-4 py-4 rounded-full border-2 focus:outline-none focus:border-[#F5A962] transition-colors"
                      style={{ borderColor: '#E89BB9' }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#2C1840' }}>
                    Senha
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: '#E89BB9' }} />
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full pl-12 pr-4 py-4 rounded-full border-2 focus:outline-none focus:border-[#F5A962] transition-colors"
                      style={{ borderColor: '#E89BB9' }}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4" style={{ accentColor: '#E89BB9' }} />
                    <span style={{ color: '#2C1840' }}>Lembrar-me</span>
                  </label>
                  <a href="#" className="font-semibold hover:opacity-80" style={{ color: '#E89BB9' }}>
                    Esqueci minha senha
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full font-bold text-lg text-white transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                  style={{ backgroundColor: '#E89BB9' }}
                >
                  <LogIn className="w-5 h-5" />
                  Entrar na Área de Membros
                </button>
              </form>
            ) : (
              // Register Form
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#2C1840' }}>
                    Nome Completo
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: '#E89BB9' }} />
                    <input
                      type="text"
                      placeholder="Seu nome"
                      className="w-full pl-12 pr-4 py-4 rounded-full border-2 focus:outline-none focus:border-[#F5A962] transition-colors"
                      style={{ borderColor: '#E89BB9' }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#2C1840' }}>
                    E-mail
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: '#E89BB9' }} />
                    <input
                      type="email"
                      placeholder="seu@email.com"
                      className="w-full pl-12 pr-4 py-4 rounded-full border-2 focus:outline-none focus:border-[#F5A962] transition-colors"
                      style={{ borderColor: '#E89BB9' }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#2C1840' }}>
                    Senha
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: '#E89BB9' }} />
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full pl-12 pr-4 py-4 rounded-full border-2 focus:outline-none focus:border-[#F5A962] transition-colors"
                      style={{ borderColor: '#E89BB9' }}
                    />
                  </div>
                </div>

                <div>
                  <label className="flex items-start gap-2 cursor-pointer text-sm">
                    <input type="checkbox" className="w-4 h-4 mt-1" style={{ accentColor: '#E89BB9' }} />
                    <span style={{ color: '#2C1840' }}>
                      Aceito os termos de uso e política de privacidade
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full font-bold text-lg text-white transition-all hover:scale-105 shadow-lg"
                  style={{ backgroundColor: '#E89BB9' }}
                >
                  Criar Minha Conta
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4" style={{ backgroundColor: '#FFF5F8' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#2C1840' }}>
              Benefícios da Área de Membros
            </h2>
            <p className="text-xl" style={{ color: '#2C1840', opacity: 0.7 }}>
              Veja tudo o que você tem acesso ao se tornar membro
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
              <Download className="w-12 h-12 mx-auto mb-6" style={{ color: '#E89BB9' }} />
              <h3 className="text-xl font-bold mb-4" style={{ color: '#2C1840' }}>
                Download Vitalício
              </h3>
              <p className="text-sm" style={{ color: '#2C1840', opacity: 0.7 }}>
                Baixe seus planners quantas vezes precisar, para sempre
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
              <FileText className="w-12 h-12 mx-auto mb-6" style={{ color: '#F5A962' }} />
              <h3 className="text-xl font-bold mb-4" style={{ color: '#2C1840' }}>
                Atualizações Grátis
              </h3>
              <p className="text-sm" style={{ color: '#2C1840', opacity: 0.7 }}>
                Receba todas as atualizações e melhorias sem custo adicional
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
              <Gift className="w-12 h-12 mx-auto mb-6" style={{ color: '#E89BB9' }} />
              <h3 className="text-xl font-bold mb-4" style={{ color: '#2C1840' }}>
                Conteúdo Exclusivo
              </h3>
              <p className="text-sm" style={{ color: '#2C1840', opacity: 0.7 }}>
                Acesso a templates, adesivos digitais e páginas extras
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
              <Star className="w-12 h-12 mx-auto mb-6" style={{ color: '#F5A962' }} />
              <h3 className="text-xl font-bold mb-4" style={{ color: '#2C1840' }}>
                Suporte Premium
              </h3>
              <p className="text-sm" style={{ color: '#2C1840', opacity: 0.7 }}>
                Atendimento prioritário para tirar todas suas dúvidas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#2C1840' }}>
            Ainda não é membro?
          </h2>
          <p className="text-xl mb-10" style={{ color: '#2C1840', opacity: 0.8 }}>
            Compre seu primeiro planner e ganhe acesso vitalício à área de membros!
          </p>
          <a
            href="/loja"
            className="inline-block px-10 py-5 rounded-full font-bold text-xl text-white transition-all hover:scale-105 shadow-2xl"
            style={{ backgroundColor: '#E89BB9' }}
          >
            Ver Planners Disponíveis
          </a>
        </div>
      </section>
    </div>
  );
};
