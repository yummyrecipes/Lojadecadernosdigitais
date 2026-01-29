import React from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export const Contato: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mensagem enviada! Responderemos em breve.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-purple-300 to-pink-300 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Entre em Contato</h1>
          <p className="text-xl">
            Estamos aqui para ajudar! Envie sua mensagem e responderemos em breve
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Envie uma Mensagem
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Nome Completo</label>
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
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Assunto</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Mensagem</label>
                <textarea
                  required
                  rows={5}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-pink-400 hover:bg-pink-500 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-8 mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Informações de Contato
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-pink-400 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">E-mail</h3>
                    <p className="text-gray-600">contato@plannerlove.com.br</p>
                    <p className="text-gray-600">suporte@plannerlove.com.br</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-pink-400 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Telefone</h3>
                    <p className="text-gray-600">(11) 98765-4321</p>
                    <p className="text-sm text-gray-500">Seg a Sex, 9h às 18h</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MessageCircle className="w-6 h-6 text-pink-400 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">WhatsApp</h3>
                    <p className="text-gray-600">(11) 98765-4321</p>
                    <a
                      href="https://wa.me/5511987654321"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-400 hover:underline"
                    >
                      Iniciar conversa →
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-pink-400 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Localização</h3>
                    <p className="text-gray-600">São Paulo, SP</p>
                    <p className="text-gray-600">Brasil</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-purple-50 rounded-lg p-8">
              <h3 className="font-bold text-gray-800 mb-4">Perguntas Frequentes</h3>
              <p className="text-gray-600 mb-4">
                Antes de nos enviar uma mensagem, confira nossa seção de perguntas
                frequentes. Talvez sua dúvida já tenha sido respondida!
              </p>
              <a
                href="#"
                className="text-pink-400 font-semibold hover:underline"
              >
                Ver FAQ →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
