import React from 'react';
import { Star, Heart, Quote } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export const Relatos: React.FC = () => {
  const testimonials = [
    {
      name: 'Mariana Silva',
      role: 'Empresária',
      phone: '+55 11 98765-4321',
      time: '14:32',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
      messages: [
        'Gente, vocês não têm ideia do quanto esse planner mudou minha vida! 😍',
        'Eu sempre fui desorganizada e nunca conseguia acompanhar minhas metas',
        'Mas agora com o Planner Fluxo tá tudo diferente! Consigo ver tudo de forma visual e prática 📱✨',
        'MELHOR COMPRA que fiz esse ano! Recomendo muito! 💕'
      ],
    },
    {
      name: 'Ana Carolina',
      role: 'Estudante de Medicina',
      phone: '+55 21 99876-5432',
      time: '16:45',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
      messages: [
        'Meninas, preciso compartilhar isso com vocês! 🎉',
        'Comprei o planner digital e estou APAIXONADA 😍',
        'As páginas são lindíssimas e super funcionais',
        'Uso no iPad todos os dias pra estudar e organizar minhas aulas',
        'Vale MUITO a pena! ❤️'
      ],
    },
    {
      name: 'Juliana Mendes',
      role: 'Designer Gráfica',
      phone: '+55 11 97654-3210',
      time: '10:15',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200',
      messages: [
        'Gente do céu! 😱',
        'Esse planner digital é PERFEITO!',
        'Estou conseguindo finalmente alcançar minhas metas 🎯',
        'A organização mudou minha vida completamente',
        'Nunca fui tão produtiva! Super recomendo! 💪✨'
      ],
    },
    {
      name: 'Fernanda Costa',
      role: 'Advogada',
      phone: '+55 31 98123-4567',
      time: '09:20',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200',
      messages: [
        'Preciso contar pra vocês!',
        'Comprei o Planner Fluxo semana passada e já vi diferença 📊',
        'Organizar minha rotina de trabalho ficou muito mais fácil!',
        'Tem calendário, to-do lists, controle de projetos... tudo que eu preciso! 💼',
        'Perfeito pra quem tem rotina corrida como eu 🏃‍♀️'
      ],
    },
    {
      name: 'Beatriz Oliveira',
      role: 'Mãe e Empreendedora',
      phone: '+55 85 99234-5678',
      time: '18:50',
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200',
      messages: [
        'Meninas mães empreendedoras, PRECISAM conhecer! 🙌',
        'Consegui equilibrar vida pessoal e profissional com esse planner',
        'Organizo as tarefas da empresa, dos filhos e ainda sobra tempo pra mim 😅',
        'Melhor investimento que fiz! Sério! 💯'
      ],
    },
    {
      name: 'Camila Rodrigues',
      role: 'Professora',
      phone: '+55 48 98345-6789',
      time: '20:30',
      image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200',
      messages: [
        'Gente! Que planner MARAVILHOSO! 📚',
        'Perfeito pra planejar aulas e acompanhar desenvolvimento dos alunos',
        'O layout é clean, organizado e super bonito 🌸',
        'Adoro poder personalizar com as cores que eu gosto',
        'Simplesmente AMEI! ❤️✨'
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4" style={{ backgroundColor: '#FFF5F8' }}>
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="w-16 h-16 mx-auto mb-6" style={{ color: '#E89BB9', fill: '#E89BB9' }} />
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: '#2C1840' }}>
            O que nossas clientes estão dizendo 💬
          </h1>
          <p className="text-xl" style={{ color: '#2C1840', opacity: 0.8 }}>
            Mensagens reais de mulheres que transformaram suas rotinas com o Planner Fluxo
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#E89BB9' }}>
                15.000+
              </div>
              <p className="text-sm md:text-base" style={{ color: '#2C1840', opacity: 0.7 }}>
                Clientes Satisfeitas
              </p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#F5A962' }}>
                4.9/5
              </div>
              <p className="text-sm md:text-base" style={{ color: '#2C1840', opacity: 0.7 }}>
                Avaliação Média
              </p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#E89BB9' }}>
                98%
              </div>
              <p className="text-sm md:text-base" style={{ color: '#2C1840', opacity: 0.7 }}>
                Recomendariam
              </p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#F5A962' }}>
                2.547
              </div>
              <p className="text-sm md:text-base" style={{ color: '#2C1840', opacity: 0.7 }}>
                Avaliações
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Messages Grid */}
      <section className="py-20 px-4" style={{ backgroundColor: '#FFF5F8' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-xl overflow-hidden border-2"
                style={{ borderColor: '#E5DDD5' }}
              >
                {/* WhatsApp Header */}
                <div className="px-6 py-4 flex items-center gap-3" style={{ backgroundColor: '#075E54' }}>
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white"
                  />
                  <div className="flex-1">
                    <p className="font-bold text-white text-base">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-white/80">
                      online
                    </p>
                  </div>
                </div>

                {/* WhatsApp Messages */}
                <div className="p-6 space-y-3" style={{ backgroundColor: '#E5DDD5', minHeight: '300px' }}>
                  {testimonial.messages.map((message, msgIndex) => (
                    <div key={msgIndex} className="flex justify-end">
                      <div
                        className="max-w-[85%] px-4 py-3 rounded-2xl rounded-tr-sm shadow-md"
                        style={{ backgroundColor: '#DCF8C6' }}
                      >
                        <p className="text-sm leading-relaxed" style={{ color: '#303030' }}>
                          {message}
                        </p>
                        <p className="text-xs mt-1 text-right" style={{ color: '#667781' }}>
                          {testimonial.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Role Tag */}
                <div className="px-6 py-3 border-t-2" style={{ borderColor: '#E5DDD5', backgroundColor: 'white' }}>
                  <p className="text-sm font-semibold text-center" style={{ color: '#E89BB9' }}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#2C1840' }}>
            Faça Parte dessa <span style={{ color: '#E89BB9' }}>Transformação</span>!
          </h2>
          <p className="text-xl mb-10" style={{ color: '#2C1840', opacity: 0.8 }}>
            Junte-se a milhares de mulheres que já mudaram suas vidas com o Planner Fluxo
          </p>
          <a
            href="/loja"
            className="inline-block px-10 py-5 rounded-full font-bold text-xl text-white transition-all hover:scale-105 shadow-2xl"
            style={{ backgroundColor: '#E89BB9' }}
          >
            Começar Agora
          </a>
        </div>
      </section>
    </div>
  );
};