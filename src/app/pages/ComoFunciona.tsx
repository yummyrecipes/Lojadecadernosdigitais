import React from 'react';
import { Link } from 'react-router-dom';
import { Download, Tablet, Play, CheckCircle2, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export const ComoFunciona: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4" style={{ backgroundColor: '#FFF5F8' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: '#2C1840' }}>
            Como Funciona o <span style={{ color: '#E89BB9' }}>Planner Fluxo</span>?
          </h1>
          <p className="text-xl mb-8" style={{ color: '#2C1840', opacity: 0.8 }}>
            É simples, rápido e você pode começar a usar em minutos! Veja o passo a passo completo.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-20">
            {/* Step 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 text-2xl font-bold text-white" style={{ backgroundColor: '#E89BB9' }}>
                  1
                </div>
                <h2 className="text-4xl font-bold mb-6" style={{ color: '#2C1840' }}>
                  Escolha seu Planner
                </h2>
                <p className="text-lg mb-6 leading-relaxed" style={{ color: '#2C1840', opacity: 0.8 }}>
                  Navegue por nossa coleção de planners digitais e escolha o que mais combina com você. 
                  Temos opções para diferentes necessidades: planner anual completo, cadernos de estudos, 
                  controle financeiro e muito mais.
                </p>
                <Link
                  to="/loja"
                  className="inline-flex items-center gap-2 font-semibold text-lg transition-colors hover:opacity-80"
                  style={{ color: '#E89BB9' }}
                >
                  Ver todos os planners
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
              <div>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
                  alt="Escolhendo planner"
                  className="rounded-3xl shadow-xl"
                />
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
                  alt="Download instantâneo"
                  className="rounded-3xl shadow-xl"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 text-2xl font-bold text-white" style={{ backgroundColor: '#F5A962' }}>
                  2
                </div>
                <h2 className="text-4xl font-bold mb-6" style={{ color: '#2C1840' }}>
                  Baixe Instantaneamente
                </h2>
                <p className="text-lg mb-6 leading-relaxed" style={{ color: '#2C1840', opacity: 0.8 }}>
                  Após a confirmação do pagamento, você recebe um e-mail com o link de download. 
                  O arquivo PDF está pronto para uso imediato. Você também ganha acesso vitalício à 
                  área de membros, onde pode baixar sempre que precisar.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 text-2xl font-bold text-white" style={{ backgroundColor: '#E89BB9' }}>
                  3
                </div>
                <h2 className="text-4xl font-bold mb-6" style={{ color: '#2C1840' }}>
                  Importe no seu App Favorito
                </h2>
                <p className="text-lg mb-6 leading-relaxed" style={{ color: '#2C1840', opacity: 0.8 }}>
                  Abra o arquivo PDF no app de anotações da sua preferência: GoodNotes, Notability, 
                  Noteshelf, Xodo, Samsung Notes, OneNote ou Adobe Reader. É compatível com iPad, 
                  tablets Android e notebooks.
                </p>
              </div>
              <div>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
                  alt="Usando no tablet"
                  className="rounded-3xl shadow-xl"
                />
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
                  alt="Planejando"
                  className="rounded-3xl shadow-xl"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 text-2xl font-bold text-white" style={{ backgroundColor: '#F5A962' }}>
                  4
                </div>
                <h2 className="text-4xl font-bold mb-6" style={{ color: '#2C1840' }}>
                  Comece a Planejar!
                </h2>
                <p className="text-lg mb-6 leading-relaxed" style={{ color: '#2C1840', opacity: 0.8 }}>
                  Pronto! Agora é só começar a organizar sua vida. Use os hyperlinks para navegar 
                  entre as páginas, personalize com adesivos digitais e aproveite todos os recursos 
                  do seu planner. Sua jornada de organização começa agora!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compatibility Section */}
      <section className="py-20 px-4" style={{ backgroundColor: '#FFF5F8' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#2C1840' }}>
              Compatibilidade Total
            </h2>
            <p className="text-xl" style={{ color: '#2C1840', opacity: 0.7 }}>
              Use em qualquer dispositivo e aplicativo
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <Tablet className="w-12 h-12 mb-6" style={{ color: '#E89BB9' }} />
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#2C1840' }}>
                Dispositivos
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0" style={{ color: '#F5A962' }} />
                  <span style={{ color: '#2C1840' }}>iPad (todos os modelos)</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0" style={{ color: '#F5A962' }} />
                  <span style={{ color: '#2C1840' }}>Tablets Android (Samsung, Xiaomi, etc.)</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0" style={{ color: '#F5A962' }} />
                  <span style={{ color: '#2C1840' }}>Notebooks Windows e Mac</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0" style={{ color: '#F5A962' }} />
                  <span style={{ color: '#2C1840' }}>Smartphones (para visualização)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <Download className="w-12 h-12 mb-6" style={{ color: '#F5A962' }} />
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#2C1840' }}>
                Aplicativos
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0" style={{ color: '#F5A962' }} />
                  <span style={{ color: '#2C1840' }}>GoodNotes 5 e 6</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0" style={{ color: '#F5A962' }} />
                  <span style={{ color: '#2C1840' }}>Notability</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0" style={{ color: '#F5A962' }} />
                  <span style={{ color: '#2C1840' }}>Noteshelf, Samsung Notes, Xodo</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0" style={{ color: '#F5A962' }} />
                  <span style={{ color: '#2C1840' }}>Adobe Reader, OneNote e mais</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#2C1840' }}>
            Pronta para Começar?
          </h2>
          <p className="text-xl mb-10" style={{ color: '#2C1840', opacity: 0.8 }}>
            Escolha seu planner e transforme sua rotina hoje mesmo!
          </p>
          <Link
            to="/loja"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-xl text-white transition-all hover:scale-105 shadow-2xl"
            style={{ backgroundColor: '#E89BB9' }}
          >
            Ver Todos os Planners
            <ChevronRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
};
