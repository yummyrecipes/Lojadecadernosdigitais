import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export const Blog: React.FC = () => {
  const posts = [
    {
      id: 1,
      title: 'Como começar a usar um planner digital',
      excerpt: 'Aprenda os primeiros passos para transformar sua organização com planners digitais.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800',
      date: '15 Jan 2026',
      author: 'Camila Alves',
      category: 'Tutoriais',
    },
    {
      id: 2,
      title: '5 dicas para manter a consistência no planejamento',
      excerpt: 'Descubra como criar o hábito de planejar e manter a consistência todos os dias.',
      image: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=800',
      date: '20 Jan 2026',
      author: 'Camila Alves',
      category: 'Produtividade',
    },
    {
      id: 3,
      title: 'Organização digital vs papel: qual escolher?',
      excerpt: 'Entenda as vantagens de cada método e escolha o melhor para você.',
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800',
      date: '25 Jan 2026',
      author: 'Camila Alves',
      category: 'Dicas',
    },
    {
      id: 4,
      title: 'Decorando seu planner digital: guia completo',
      excerpt: 'Aprenda a deixar seu planner único e cheio de personalidade.',
      image: 'https://images.unsplash.com/photo-1607827448387-a67db1383b59?w=800',
      date: '28 Jan 2026',
      author: 'Camila Alves',
      category: 'Decoração',
    },
    {
      id: 5,
      title: 'Estabelecendo metas realistas para 2026',
      excerpt: 'Como definir objetivos alcançáveis e monitorar seu progresso.',
      image: 'https://images.unsplash.com/photo-1554224311-beee415c201f?w=800',
      date: '1 Fev 2026',
      author: 'Camila Alves',
      category: 'Metas',
    },
    {
      id: 6,
      title: 'Routine matinal de sucesso com planner digital',
      excerpt: 'Transforme suas manhãs e comece o dia com mais energia e foco.',
      image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=800',
      date: '5 Fev 2026',
      author: 'Camila Alves',
      category: 'Rotina',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-purple-300 to-pink-300 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Blog PlannerLove</h1>
          <p className="text-xl">
            Dicas, tutoriais e inspiração para sua jornada de organização
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Categories */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {['Todos', 'Tutoriais', 'Produtividade', 'Dicas', 'Decoração', 'Metas', 'Rotina'].map(
            (category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full bg-white hover:bg-pink-400 hover:text-white text-gray-700 transition-colors shadow-sm"
              >
                {category}
              </button>
            )
          )}
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="aspect-video overflow-hidden">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <span className="inline-block bg-purple-100 text-purple-600 text-xs px-3 py-1 rounded-full mb-3">
                  {post.category}
                </span>
                <h3 className="font-bold text-gray-800 mb-3 group-hover:text-pink-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span className="mr-4">{post.date}</span>
                  <User className="w-4 h-4 mr-1" />
                  <span>{post.author}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
