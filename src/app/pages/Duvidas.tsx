import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export const Duvidas: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Em quais dispositivos posso usar o planner?',
      answer: 'O Planner Fluxo funciona em iPad, tablets Android (Samsung, Xiaomi, Positivo, etc.), notebooks Windows e Mac, e até smartphones (para visualização). Você pode usar em qualquer dispositivo que abra arquivos PDF.',
    },
    {
      question: 'Quais aplicativos são compatíveis?',
      answer: 'Nossos planners são compatíveis com todos os principais apps de anotações: GoodNotes 5 e 6, Notability, Noteshelf, Xodo PDF, Samsung Notes, OneNote, Adobe Acrobat Reader, Foxit Reader e muitos outros. Qualquer app que permita escrever e anotar em PDFs funciona perfeitamente!',
    },
    {
      question: 'Como recebo o planner após a compra?',
      answer: 'Após a confirmação do pagamento, você recebe imediatamente um e-mail com o link para download do arquivo PDF. O acesso é vitalício e você também ganha login na área de membros, onde pode baixar novamente sempre que precisar.',
    },
    {
      question: 'O planner tem hyperlinks?',
      answer: 'Sim! Todos os nossos planners têm hyperlinks interativos para facilitar a navegação. Você pode clicar nos links e ir direto para a página desejada, tornando o uso muito mais prático e rápido.',
    },
    {
      question: 'Posso imprimir o planner?',
      answer: 'Sim! Embora nossos planners sejam otimizados para uso digital, você pode imprimir as páginas que quiser. O arquivo é 100% seu e você tem liberdade para usar como preferir.',
    },
    {
      question: 'Como faço o pagamento?',
      answer: 'Aceitamos pagamento via cartão de crédito (parcelado em até 4x sem juros), PIX (com desconto especial) e boleto bancário. A confirmação é rápida e você recebe o planner logo após o pagamento ser aprovado.',
    },
    {
      question: 'O planner vem com instruções de uso?',
      answer: 'Sim! Junto com o planner você recebe um guia completo de uso com dicas de como importar o arquivo, utilizar os hyperlinks, escolher canetas digitais e aproveitar ao máximo todos os recursos.',
    },
    {
      question: 'Posso usar o planner em mais de um dispositivo?',
      answer: 'Sim! Você pode usar o planner em quantos dispositivos quiser. Basta fazer o download do arquivo e importar em cada dispositivo. Muitas clientes usam no iPad em casa e no tablet Android no trabalho, por exemplo.',
    },
    {
      question: 'O planner é atualizado?',
      answer: 'Sim! Sempre que lançamos novas páginas, melhorias ou versões atualizadas, você recebe gratuitamente na sua área de membros. Uma vez cliente, sempre terá acesso às novidades!',
    },
    {
      question: 'Preciso de caneta stylus?',
      answer: 'A caneta stylus (como Apple Pencil, S Pen Samsung, etc.) proporciona uma experiência muito melhor para escrever e desenhar no planner. Mas se você não tiver uma, ainda pode usar o dedo ou o mouse para navegar e fazer anotações básicas.',
    },
    {
      question: 'Posso compartilhar o planner com amigas?',
      answer: 'O planner é de uso pessoal e intransferível. Compartilhar viola nossos direitos autorais. Mas temos um programa de afiliadas incrível! Você pode indicar amigas e ganhar comissão por cada venda.',
    },
    {
      question: 'Tem garantia?',
      answer: 'Sim! Oferecemos 7 dias de garantia incondicional. Se por qualquer motivo você não gostar do planner, devolvemos 100% do seu dinheiro, sem perguntas. Queremos que você fique completamente satisfeita!',
    },
    {
      question: 'O planner é em português?',
      answer: 'Sim! Todos os nossos planners são 100% em português do Brasil, com datas, meses, dias da semana e tudo mais no nosso idioma. Feito por brasileiras, para brasileiras!',
    },
    {
      question: 'Qual o tamanho do arquivo?',
      answer: 'O tamanho varia de acordo com o planner, mas geralmente fica entre 50MB e 200MB. É um arquivo leve que não vai ocupar muito espaço no seu dispositivo.',
    },
    {
      question: 'Posso personalizar as cores e fontes?',
      answer: 'Você pode personalizar suas anotações com as cores e canetas do seu app de anotações. O layout do planner vem pronto, mas você tem total liberdade para escrever, desenhar, adicionar adesivos digitais e fazer suas personalizações!',
    },
    {
      question: 'Como faço para virar cliente afiliada?',
      answer: 'É muito simples! Acesse nossa página de Afiliadas, faça seu cadastro e comece a divulgar. Você ganha comissão por cada venda realizada através do seu link exclusivo. É uma ótima forma de ganhar uma renda extra!',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4" style={{ backgroundColor: '#FFF5F8' }}>
        <div className="max-w-4xl mx-auto text-center">
          <HelpCircle className="w-16 h-16 mx-auto mb-6" style={{ color: '#E89BB9' }} />
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: '#2C1840' }}>
            Dúvidas <span style={{ color: '#E89BB9' }}>Frequentes</span>
          </h1>
          <p className="text-xl" style={{ color: '#2C1840', opacity: 0.8 }}>
            Encontre respostas para as perguntas mais comuns sobre nossos planners digitais
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-2 rounded-2xl overflow-hidden transition-all"
                style={{ borderColor: openIndex === index ? '#E89BB9' : '#FFF5F8' }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-opacity-50 transition-colors"
                  style={{ backgroundColor: openIndex === index ? '#FFF5F8' : 'white' }}
                >
                  <span className="text-lg font-bold pr-4" style={{ color: '#2C1840' }}>
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 flex-shrink-0" style={{ color: '#E89BB9' }} />
                  ) : (
                    <ChevronDown className="w-6 h-6 flex-shrink-0" style={{ color: '#E89BB9' }} />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-base leading-relaxed" style={{ color: '#2C1840', opacity: 0.8 }}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4" style={{ backgroundColor: '#FFF5F8' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#2C1840' }}>
            Não encontrou sua dúvida?
          </h2>
          <p className="text-xl mb-10" style={{ color: '#2C1840', opacity: 0.8 }}>
            Entre em contato conosco! Nossa equipe está pronta para ajudar você.
          </p>
          <a
            href="/contato"
            className="inline-block px-10 py-5 rounded-full font-bold text-xl text-white transition-all hover:scale-105 shadow-2xl"
            style={{ backgroundColor: '#E89BB9' }}
          >
            Falar com o Suporte
          </a>
        </div>
      </section>
    </div>
  );
};
