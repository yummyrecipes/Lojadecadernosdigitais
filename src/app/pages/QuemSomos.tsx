import React from 'react';
import { Heart, Target, Users } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export const QuemSomos: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-purple-300 to-pink-300 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Nossa História</h1>
          <p className="text-xl">
            Transformando vidas através da organização e planejamento
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Founder Story */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1573497620166-aef748c8c792?w=800"
              alt="Fundadora"
              className="rounded-2xl shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Olá, eu sou a Camila!
            </h2>
            <p className="text-gray-600 mb-4">
              Em 2020, eu estava completamente perdida. Minha vida era uma bagunça de papéis,
              post-its e listas esquecidas. Foi quando descobri os planners digitais e minha
              vida mudou completamente.
            </p>
            <p className="text-gray-600 mb-4">
              Percebi que não era só eu que precisava dessa organização. Muitas mulheres
              estavam na mesma situação, lutando para equilibrar trabalho, estudos, família
              e sonhos pessoais.
            </p>
            <p className="text-gray-600 mb-6">
              Foi assim que nasceu a PlannerLove: uma missão de ajudar mulheres a organizarem
              suas vidas com elegância, praticidade e muito amor por si mesmas.
            </p>
            <p className="text-pink-400 font-semibold text-lg">
              Hoje, já ajudamos mais de 50.000 mulheres a alcançarem seus objetivos!
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Nossos Valores
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <Heart className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h3 className="font-bold text-gray-800 mb-3">Amor Próprio</h3>
              <p className="text-gray-600">
                Acreditamos que cuidar da sua organização é um ato de amor próprio e autocuidado.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <Target className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="font-bold text-gray-800 mb-3">Foco em Resultados</h3>
              <p className="text-gray-600">
                Criamos ferramentas que realmente funcionam e ajudam você a alcançar suas metas.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <Users className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h3 className="font-bold text-gray-800 mb-3">Comunidade</h3>
              <p className="text-gray-600">
                Construímos uma comunidade de mulheres que se apoiam e crescem juntas.
              </p>
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="bg-purple-50 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Nossa Missão</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empoderar mulheres através de ferramentas de organização que combinam beleza,
            funcionalidade e praticidade, ajudando-as a conquistar seus sonhos um dia de cada vez.
          </p>
        </div>
      </div>
    </div>
  );
};
