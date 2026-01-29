import React, { useState } from 'react';
import { Gift, Star, Download, Users } from 'lucide-react';

export const Clube: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Cadastro realizado! Verifique seu e-mail.');
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-purple-400 to-pink-400 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <Gift className="w-20 h-20 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-4">Clube de Freebies</h1>
          <p className="text-2xl mb-8">
            Receba conteúdos gratuitos exclusivos toda semana!
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <Download className="w-12 h-12 text-pink-400 mx-auto mb-4" />
            <h3 className="font-bold text-gray-800 mb-3">Freebies Semanais</h3>
            <p className="text-gray-600">
              Receba páginas, adesivos e templates exclusivos toda semana
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <Star className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="font-bold text-gray-800 mb-3">Dicas Exclusivas</h3>
            <p className="text-gray-600">
              Acesse tutoriais e dicas de organização antes de todo mundo
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <Users className="w-12 h-12 text-pink-400 mx-auto mb-4" />
            <h3 className="font-bold text-gray-800 mb-3">Comunidade VIP</h3>
            <p className="text-gray-600">
              Faça parte de um grupo exclusivo de mulheres organizadas
            </p>
          </div>
        </div>

        {/* Signup Form */}
        <div className="bg-white rounded-2xl shadow-xl p-12 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Faça Parte do Clube!
          </h2>
          <p className="text-gray-600 text-center mb-8">
            É totalmente gratuito e você pode cancelar quando quiser
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Nome</label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">E-mail</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-pink-400 hover:bg-pink-500 text-white py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Quero Fazer Parte!
            </button>
          </form>

          <p className="text-sm text-gray-500 text-center mt-6">
            Respeitamos sua privacidade. Sem spam, prometemos! ❤️
          </p>
        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            O Que as Membras Dizem
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-purple-50 rounded-lg p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Os freebies são incríveis! Já baixei vários e uso todos os dias. Amei fazer parte!"
              </p>
              <p className="font-semibold text-gray-800">- Paula Rodrigues</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Toda semana tem novidade! É como ganhar um presente. Recomendo muito!"
              </p>
              <p className="font-semibold text-gray-800">- Beatriz Santos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
