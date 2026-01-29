import React from 'react';
import { DollarSign, Users, TrendingUp, Gift } from 'lucide-react';

export const Afiliados: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-purple-400 to-pink-400 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Programa de Afiliados</h1>
          <p className="text-2xl mb-8">
            Ganhe até 30% de comissão recomendando nossos produtos!
          </p>
          <button className="bg-white text-pink-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
            Quero Ser Afiliada
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Benefits */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          <div className="text-center">
            <div className="bg-pink-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-10 h-10 text-pink-400" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Até 30% de Comissão</h3>
            <p className="text-gray-600 text-sm">
              Ganhe por cada venda realizada através do seu link
            </p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <Users className="w-10 h-10 text-purple-400" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Suporte Dedicado</h3>
            <p className="text-gray-600 text-sm">
              Receba todo o apoio que você precisa para vender mais
            </p>
          </div>
          <div className="text-center">
            <div className="bg-pink-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-10 h-10 text-pink-400" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Materiais Prontos</h3>
            <p className="text-gray-600 text-sm">
              Artes, textos e tudo que você precisa para divulgar
            </p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <Gift className="w-10 h-10 text-purple-400" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Bônus Especiais</h3>
            <p className="text-gray-600 text-sm">
              Produtos gratuitos e vantagens exclusivas
            </p>
          </div>
        </div>

        {/* How it Works */}
        <div className="bg-white rounded-2xl shadow-xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Como Funciona?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-pink-400 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                1
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Cadastre-se</h3>
              <p className="text-gray-600">
                Preencha o formulário e receba seu link único de afiliada
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-400 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                2
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Divulgue</h3>
              <p className="text-gray-600">
                Compartilhe nas redes sociais, blog ou onde preferir
              </p>
            </div>
            <div className="text-center">
              <div className="bg-pink-400 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                3
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Receba</h3>
              <p className="text-gray-600">
                Ganhe comissão por cada venda realizada através do seu link
              </p>
            </div>
          </div>
        </div>

        {/* CTA Form */}
        <div className="bg-gradient-to-r from-purple-300 to-pink-300 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Pronta para Começar?</h2>
          <p className="text-xl mb-8">
            Preencha o formulário e comece a ganhar hoje mesmo!
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 px-6 py-3 rounded-full text-gray-800"
            />
            <button
              type="submit"
              className="bg-white text-pink-400 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Quero Ser Afiliada
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
