import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, Calendar, FileText, Users, Award, Gift, Sparkles, Heart, Download, ChevronRight, Play, CheckCircle2 } from 'lucide-react';
import { ProductCard } from '@/app/components/ProductCard';
import { featuredProducts } from '@/app/data/products';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4" style={{ backgroundColor: '#FFF5F8' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              {/* Small text with emoji */}
              <div className="inline-flex items-center gap-2 mb-6">
                <Heart className="w-5 h-5" style={{ color: '#E89BB9', fill: '#E89BB9' }} />
                <span className="text-lg font-semibold" style={{ color: '#E89BB9' }}>
                  Per(Feito) para o seu Tablet ❤️
                </span>
              </div>
              
              {/* Main Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ color: '#2C1840' }}>
                O Planner Digital para{' '}
                <span style={{ color: '#E89BB9' }}>inspirar seus dias</span> e deixar sua rotina{' '}
                <span style={{ color: '#F5A962' }}>Organizada e Leve</span> em 2026
              </h1>
              
              {/* Description */}
              <p className="text-lg md:text-xl mb-8 leading-relaxed" style={{ color: '#2C1840', opacity: 0.8 }}>
                Transforme sua vida com planners digitais elegantes, completos e fáceis de usar. 
                Alcance suas metas, organize sua rotina e viva com mais leveza e propósito.
              </p>
              
              {/* CTA Button */}
              <Link
                to="/loja"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-xl text-white transition-all hover:scale-105 shadow-2xl mb-8"
                style={{ backgroundColor: '#F5A962' }}
              >
                Baixar Meu Planner Digital
                <ChevronRight className="w-6 h-6" />
              </Link>
              
              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" style={{ color: '#F5A962' }} />
                    ))}
                  </div>
                  <span className="font-semibold" style={{ color: '#2C1840' }}>4.9/5 (2.547 avaliações)</span>
                </div>
              </div>
            </div>
            
            {/* Product Mockup */}
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-20 blur-3xl" style={{ backgroundColor: '#E89BB9' }}></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full opacity-20 blur-3xl" style={{ backgroundColor: '#F5A962' }}></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1614801502766-e2562eb626d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwcGxhbm5lciUyMHRhYmxldCUyMGlwYWQlMjBtb2NrdXB8ZW58MXx8fHwxNzY5NjAyNDc3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Planner Digital no iPad"
                className="rounded-3xl shadow-2xl relative z-10 transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
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
                Planners Baixados
              </p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#F5A962' }}>
                98%
              </div>
              <p className="text-sm md:text-base" style={{ color: '#2C1840', opacity: 0.7 }}>
                Satisfação
              </p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#E89BB9' }}>
                4.9/5
              </div>
              <p className="text-sm md:text-base" style={{ color: '#2C1840', opacity: 0.7 }}>
                Avaliação Média
              </p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#F5A962' }}>
                12.500+
              </div>
              <p className="text-sm md:text-base" style={{ color: '#2C1840', opacity: 0.7 }}>
                Clientes Felizes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section id="como-funciona" className="py-20 px-4" style={{ backgroundColor: '#FFF5F8' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#2C1840' }}>
              Como Funciona?
            </h2>
            <p className="text-lg" style={{ color: '#2C1840', opacity: 0.7 }}>
              É simples, rápido e você pode começar agora mesmo!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 text-3xl font-bold text-white" style={{ backgroundColor: '#E89BB9' }}>
                1
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#2C1840' }}>
                Escolha seu Planner
              </h3>
              <p className="text-base" style={{ color: '#2C1840', opacity: 0.7 }}>
                Navegue por nossa coleção de planners digitais e escolha o que mais combina com você. 
                Temos opções para todos os estilos e necessidades.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 text-3xl font-bold text-white" style={{ backgroundColor: '#F5A962' }}>
                2
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#2C1840' }}>
                Baixe Instantaneamente
              </h3>
              <p className="text-base" style={{ color: '#2C1840', opacity: 0.7 }}>
                Após a compra, você recebe o link de download na hora. 
                É só baixar o arquivo PDF e importar no seu aplicativo favorito.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 text-3xl font-bold text-white" style={{ backgroundColor: '#E89BB9' }}>
                3
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#2C1840' }}>
                Comece a Planejar
              </h3>
              <p className="text-base" style={{ color: '#2C1840', opacity: 0.7 }}>
                Use no GoodNotes, Notability, Noteshelf ou qualquer app de anotações. 
                Organize sua vida e alcance seus objetivos!
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/como-funciona"
              className="inline-flex items-center gap-2 font-semibold text-lg transition-colors hover:opacity-80"
              style={{ color: '#E89BB9' }}
            >
              Saiba mais sobre como usar
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features/Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#2C1840' }}>
              Por que escolher o Planner Fluxo?
            </h2>
            <p className="text-lg" style={{ color: '#2C1840', opacity: 0.7 }}>
              Tudo o que você precisa para organizar sua vida em um único planner
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-8 rounded-3xl transition-all hover:shadow-xl" style={{ backgroundColor: '#FFF5F8' }}>
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6" style={{ backgroundColor: '#E89BB9' }}>
                <Calendar className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#2C1840' }}>
                Planejador Completo
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#2C1840', opacity: 0.7 }}>
                Calendários mensais e semanais, listas de tarefas, controle financeiro, rastreador de hábitos e muito mais
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-8 rounded-3xl transition-all hover:shadow-xl" style={{ backgroundColor: '#FFF5F8' }}>
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6" style={{ backgroundColor: '#F5A962' }}>
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#2C1840' }}>
                Páginas Exclusivas
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#2C1840', opacity: 0.7 }}>
                Design único e elegante, com atenção aos detalhes. Criado especialmente para você se organizar com estilo
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-8 rounded-3xl transition-all hover:shadow-xl" style={{ backgroundColor: '#FFF5F8' }}>
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6" style={{ backgroundColor: '#E89BB9' }}>
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#2C1840' }}>
                Área de Membros
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#2C1840', opacity: 0.7 }}>
                Acesso vitalício à área exclusiva com atualizações gratuitas, novos templates e suporte dedicado
              </p>
            </div>

            {/* Feature 4 */}
            <div className="text-center p-8 rounded-3xl transition-all hover:shadow-xl" style={{ backgroundColor: '#FFF5F8' }}>
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6" style={{ backgroundColor: '#F5A962' }}>
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#2C1840' }}>
                Resultados Comprovados
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#2C1840', opacity: 0.7 }}>
                Milhares de clientes satisfeitas que transformaram suas rotinas e alcançaram seus objetivos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 px-4" style={{ backgroundColor: '#FFF5F8' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div className="order-2 md:order-1">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1706515952116-2235028e7178?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwcGxhbm5lciUyMHBpbmslMjBpcGFkJTIwYWVzdGhldGljfGVufDF8fHx8MTc2OTYwNDE0M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Planner Digital Elegante"
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-4xl font-bold mb-6" style={{ color: '#2C1840' }}>
                Design que <span style={{ color: '#E89BB9' }}>Inspira</span> e <span style={{ color: '#F5A962' }}>Funciona</span>
              </h3>
              <p className="text-lg mb-6 leading-relaxed" style={{ color: '#2C1840', opacity: 0.8 }}>
                Cada página foi cuidadosamente desenhada para combinar beleza e praticidade. 
                Organize suas tarefas, metas e sonhos com um design que te motiva todos os dias.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: '#F5A962' }} />
                  <span className="text-base" style={{ color: '#2C1840' }}>
                    <strong>Compatível</strong> com iPad, tablet Android, Samsung Galaxy Tab e notebooks
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: '#F5A962' }} />
                  <span className="text-base" style={{ color: '#2C1840' }}>
                    <strong>Hyperlinks interativos</strong> para navegação rápida entre seções
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: '#F5A962' }} />
                  <span className="text-base" style={{ color: '#2C1840' }}>
                    <strong>Atualizações gratuitas</strong> sempre que lançarmos novas páginas
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: '#F5A962' }} />
                  <span className="text-base" style={{ color: '#2C1840' }}>
                    <strong>Suporte dedicado</strong> para tirar todas as suas dúvidas
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#2C1840' }}>
              Nossos Planners em Destaque
            </h2>
            <p className="text-lg" style={{ color: '#2C1840', opacity: 0.7 }}>
              Escolha o planner perfeito para transformar sua rotina em 2026
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center">
            <Link
              to="/loja"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-bold text-lg text-white transition-all hover:scale-105 shadow-lg"
              style={{ backgroundColor: '#E89BB9' }}
            >
              Ver Todos os Planners
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials / Relatos Section */}
      <section id="relatos" className="py-20 px-4" style={{ backgroundColor: '#FFF5F8' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#2C1840' }}>
              Relatos de quem já transformou a rotina 💬
            </h2>
            <p className="text-lg" style={{ color: '#2C1840', opacity: 0.7 }}>
              Mensagens reais de organização, produtividade e conquistas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 - WhatsApp Style */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2" style={{ borderColor: '#E5DDD5' }}>
              <div className="px-6 py-4 flex items-center gap-3" style={{ backgroundColor: '#075E54' }}>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
                  alt="Mariana Silva"
                  className="w-12 h-12 rounded-full object-cover border-2 border-white"
                />
                <div className="flex-1">
                  <p className="font-bold text-white text-base">Mariana Silva</p>
                  <p className="text-xs text-white/80">online</p>
                </div>
              </div>
              <div className="p-6 space-y-3" style={{ backgroundColor: '#E5DDD5', minHeight: '280px' }}>
                <div className="flex justify-end">
                  <div className="max-w-[85%] px-4 py-3 rounded-2xl rounded-tr-sm shadow-md" style={{ backgroundColor: '#DCF8C6' }}>
                    <p className="text-sm leading-relaxed" style={{ color: '#303030' }}>
                      Melhor planner digital que já usei! 😍
                    </p>
                    <p className="text-xs mt-1 text-right" style={{ color: '#667781' }}>14:32</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="max-w-[85%] px-4 py-3 rounded-2xl rounded-tr-sm shadow-md" style={{ backgroundColor: '#DCF8C6' }}>
                    <p className="text-sm leading-relaxed" style={{ color: '#303030' }}>
                      Mudou completamente minha organização. Consigo acompanhar metas e projetos de forma visual e prática 📱✨
                    </p>
                    <p className="text-xs mt-1 text-right" style={{ color: '#667781' }}>14:32</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="max-w-[85%] px-4 py-3 rounded-2xl rounded-tr-sm shadow-md" style={{ backgroundColor: '#DCF8C6' }}>
                    <p className="text-sm leading-relaxed" style={{ color: '#303030' }}>
                      Recomendo muito! 💕
                    </p>
                    <p className="text-xs mt-1 text-right" style={{ color: '#667781' }}>14:33</p>
                  </div>
                </div>
              </div>
              <div className="px-6 py-3 border-t-2" style={{ borderColor: '#E5DDD5', backgroundColor: 'white' }}>
                <p className="text-sm font-semibold text-center" style={{ color: '#E89BB9' }}>Empresária</p>
              </div>
            </div>

            {/* Testimonial 2 - WhatsApp Style */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2" style={{ borderColor: '#E5DDD5' }}>
              <div className="px-6 py-4 flex items-center gap-3" style={{ backgroundColor: '#075E54' }}>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100"
                  alt="Ana Carolina"
                  className="w-12 h-12 rounded-full object-cover border-2 border-white"
                />
                <div className="flex-1">
                  <p className="font-bold text-white text-base">Ana Carolina</p>
                  <p className="text-xs text-white/80">online</p>
                </div>
              </div>
              <div className="p-6 space-y-3" style={{ backgroundColor: '#E5DDD5', minHeight: '280px' }}>
                <div className="flex justify-end">
                  <div className="max-w-[85%] px-4 py-3 rounded-2xl rounded-tr-sm shadow-md" style={{ backgroundColor: '#DCF8C6' }}>
                    <p className="text-sm leading-relaxed" style={{ color: '#303030' }}>
                      As páginas são lindas e super funcionais! 🎉
                    </p>
                    <p className="text-xs mt-1 text-right" style={{ color: '#667781' }}>16:45</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="max-w-[85%] px-4 py-3 rounded-2xl rounded-tr-sm shadow-md" style={{ backgroundColor: '#DCF8C6' }}>
                    <p className="text-sm leading-relaxed" style={{ color: '#303030' }}>
                      O design é impecável e me ajuda a manter o foco. Uso todos os dias no meu iPad! 📱
                    </p>
                    <p className="text-xs mt-1 text-right" style={{ color: '#667781' }}>16:45</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="max-w-[85%] px-4 py-3 rounded-2xl rounded-tr-sm shadow-md" style={{ backgroundColor: '#DCF8C6' }}>
                    <p className="text-sm leading-relaxed" style={{ color: '#303030' }}>
                      Vale MUITO a pena! ❤️
                    </p>
                    <p className="text-xs mt-1 text-right" style={{ color: '#667781' }}>16:46</p>
                  </div>
                </div>
              </div>
              <div className="px-6 py-3 border-t-2" style={{ borderColor: '#E5DDD5', backgroundColor: 'white' }}>
                <p className="text-sm font-semibold text-center" style={{ color: '#E89BB9' }}>Estudante de Medicina</p>
              </div>
            </div>

            {/* Testimonial 3 - WhatsApp Style */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2" style={{ borderColor: '#E5DDD5' }}>
              <div className="px-6 py-4 flex items-center gap-3" style={{ backgroundColor: '#075E54' }}>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100"
                  alt="Juliana Mendes"
                  className="w-12 h-12 rounded-full object-cover border-2 border-white"
                />
                <div className="flex-1">
                  <p className="font-bold text-white text-base">Juliana Mendes</p>
                  <p className="text-xs text-white/80">online</p>
                </div>
              </div>
              <div className="p-6 space-y-3" style={{ backgroundColor: '#E5DDD5', minHeight: '280px' }}>
                <div className="flex justify-end">
                  <div className="max-w-[85%] px-4 py-3 rounded-2xl rounded-tr-sm shadow-md" style={{ backgroundColor: '#DCF8C6' }}>
                    <p className="text-sm leading-relaxed" style={{ color: '#303030' }}>
                      Gente do céu! Esse planner é PERFEITO! 😱
                    </p>
                    <p className="text-xs mt-1 text-right" style={{ color: '#667781' }}>10:15</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="max-w-[85%] px-4 py-3 rounded-2xl rounded-tr-sm shadow-md" style={{ backgroundColor: '#DCF8C6' }}>
                    <p className="text-sm leading-relaxed" style={{ color: '#303030' }}>
                      Estou conseguindo alcançar minhas metas! A organização mudou minha vida 🎯
                    </p>
                    <p className="text-xs mt-1 text-right" style={{ color: '#667781' }}>10:15</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="max-w-[85%] px-4 py-3 rounded-2xl rounded-tr-sm shadow-md" style={{ backgroundColor: '#DCF8C6' }}>
                    <p className="text-sm leading-relaxed" style={{ color: '#303030' }}>
                      Nunca fui tão produtiva! Super recomendo! 💪✨
                    </p>
                    <p className="text-xs mt-1 text-right" style={{ color: '#667781' }}>10:16</p>
                  </div>
                </div>
              </div>
              <div className="px-6 py-3 border-t-2" style={{ borderColor: '#E5DDD5', backgroundColor: 'white' }}>
                <p className="text-sm font-semibold text-center" style={{ color: '#E89BB9' }}>Designer Gráfica</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/relatos"
              className="inline-flex items-center gap-2 font-semibold text-lg transition-colors hover:opacity-80"
              style={{ color: '#E89BB9' }}
            >
              Ver mais relatos
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pink Banner CTA */}
      <section className="py-20 px-4" style={{ background: 'linear-gradient(135deg, #E89BB9 0%, #F5A962 100%)' }}>
        <div className="max-w-5xl mx-auto text-center text-white">
          <Sparkles className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronta para Transformar sua Rotina?
          </h2>
          <p className="text-xl md:text-2xl mb-10 opacity-95 leading-relaxed">
            Junte-se a mais de 15.000 mulheres que já estão vivendo de forma mais organizada, 
            leve e produtiva com o Planner Fluxo
          </p>
          
          <Link
            to="/loja"
            className="inline-flex items-center gap-3 px-12 py-5 rounded-full font-bold text-xl transition-all hover:scale-105 shadow-2xl mb-10"
            style={{ backgroundColor: 'white', color: '#E89BB9' }}
          >
            Começar Agora
            <ChevronRight className="w-6 h-6" />
          </Link>

          <div className="flex flex-wrap justify-center items-center gap-12 mt-12 border-t border-white/20 pt-12">
            <div className="text-center">
              <div className="text-4xl font-bold mb-1">15.000+</div>
              <div className="text-base opacity-90">Planners Baixados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-1">4.9/5</div>
              <div className="text-base opacity-90">Avaliação Média</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-1">98%</div>
              <div className="text-base opacity-90">Satisfação</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ / Dúvidas Preview */}
      <section id="duvidas" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#2C1840' }}>
              Dúvidas Frequentes
            </h2>
            <p className="text-lg" style={{ color: '#2C1840', opacity: 0.7 }}>
              Tudo o que você precisa saber antes de começar
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-2xl border-2" style={{ borderColor: '#FFF5F8', backgroundColor: '#FFF5F8' }}>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#2C1840' }}>
                Em quais dispositivos posso usar o planner?
              </h3>
              <p style={{ color: '#2C1840', opacity: 0.7 }}>
                O Planner Fluxo funciona em iPad, tablets Android (Samsung, Xiaomi, etc.), 
                notebooks e computadores. Você pode usar em apps como GoodNotes, Notability, 
                Noteshelf, Xodo, Adobe Reader e muitos outros.
              </p>
            </div>

            <div className="p-6 rounded-2xl border-2" style={{ borderColor: '#FFF5F8', backgroundColor: '#FFF5F8' }}>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#2C1840' }}>
                Como recebo o planner após a compra?
              </h3>
              <p style={{ color: '#2C1840', opacity: 0.7 }}>
                Assim que o pagamento for confirmado, você recebe um e-mail com o link para 
                download do arquivo PDF. O acesso é imediato e vitalício!
              </p>
            </div>

            <div className="p-6 rounded-2xl border-2" style={{ borderColor: '#FFF5F8', backgroundColor: '#FFF5F8' }}>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#2C1840' }}>
                Posso imprimir o planner?
              </h3>
              <p style={{ color: '#2C1840', opacity: 0.7 }}>
                Sim! Embora seja otimizado para uso digital, você pode imprimir as páginas 
                que quiser. O arquivo é seu e você pode usar como preferir.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/duvidas"
              className="inline-flex items-center gap-2 font-semibold text-lg transition-colors hover:opacity-80"
              style={{ color: '#E89BB9' }}
            >
              Ver todas as dúvidas
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Freebie Club Section */}
      <section className="py-20 px-4" style={{ backgroundColor: '#FFF5F8' }}>
        <div className="max-w-4xl mx-auto text-center">
          <Gift className="w-16 h-16 mx-auto mb-6" style={{ color: '#E89BB9' }} />
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#2C1840' }}>
            Clube de <span style={{ color: '#E89BB9' }}>Freebies</span> Exclusivos
          </h2>
          <p className="text-xl mb-10 leading-relaxed" style={{ color: '#2C1840', opacity: 0.8 }}>
            Cadastre-se gratuitamente e receba páginas exclusivas, templates, 
            dicas de organização e ofertas especiais direto no seu e-mail!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="px-6 py-4 rounded-full text-lg border-2 flex-1 focus:outline-none focus:border-[#F5A962] transition-colors"
              style={{ borderColor: '#E89BB9', color: '#2C1840' }}
            />
            <button 
              className="px-8 py-4 rounded-full font-bold text-lg text-white transition-all hover:scale-105 shadow-lg whitespace-nowrap"
              style={{ backgroundColor: '#E89BB9' }}
            >
              Quero Participar!
            </button>
          </div>
          <p className="text-sm mt-4" style={{ color: '#2C1840', opacity: 0.6 }}>
            ✨ Mais de 10.000 pessoas já fazem parte do clube!
          </p>
        </div>
      </section>
    </div>
  );
};