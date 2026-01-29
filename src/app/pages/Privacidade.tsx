import React from 'react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

export const Privacidade: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-purple-300 to-pink-300 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <Shield className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-5xl font-bold mb-4">Política de Privacidade</h1>
          <p className="text-xl">
            Sua privacidade é importante para nós
          </p>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          
          {/* Última atualização */}
          <div className="mb-8 pb-8 border-b border-gray-200">
            <p className="text-gray-600">
              <strong>Última atualização:</strong> 28 de janeiro de 2026
            </p>
          </div>

          {/* Introdução */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#E89BB9' }}>
              1. Introdução
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A <strong>Planner Fluxo</strong> ("nós", "nosso" ou "empresa") está comprometida em proteger 
              a privacidade e segurança dos dados pessoais de nossos clientes e visitantes do site.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos 
              suas informações pessoais de acordo com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
            </p>
          </section>

          {/* Informações coletadas */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-8 h-8" style={{ color: '#F5A962' }} />
              <h2 className="text-3xl font-bold" style={{ color: '#E89BB9' }}>
                2. Informações que Coletamos
              </h2>
            </div>
            
            <h3 className="text-xl font-semibold mb-3 mt-6" style={{ color: '#E89BB9' }}>
              2.1. Informações fornecidas por você:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-6">
              <li><strong>Dados de cadastro:</strong> Nome completo, e-mail, CPF</li>
              <li><strong>Dados de pagamento:</strong> Informações de cartão de crédito, PIX</li>
              <li><strong>Endereço:</strong> CEP, cidade, estado (se aplicável)</li>
              <li><strong>Comunicação:</strong> Mensagens enviadas através do formulário de contato</li>
              <li><strong>Newsletter:</strong> E-mail para receber novidades</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3" style={{ color: '#E89BB9' }}>
              2.2. Informações coletadas automaticamente:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Dados de navegação:</strong> Endereço IP, tipo de navegador, páginas visitadas</li>
              <li><strong>Cookies:</strong> Cookies técnicos e analíticos para melhorar sua experiência</li>
              <li><strong>Dispositivo:</strong> Tipo de dispositivo, sistema operacional</li>
            </ul>
          </section>

          {/* Como usamos */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-8 h-8" style={{ color: '#F5A962' }} />
              <h2 className="text-3xl font-bold" style={{ color: '#E89BB9' }}>
                3. Como Usamos Suas Informações
              </h2>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              Utilizamos suas informações pessoais para:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Processar e entregar seus pedidos de planners digitais</li>
              <li>Enviar confirmações de compra e links de download</li>
              <li>Processar pagamentos de forma segura</li>
              <li>Responder suas dúvidas e solicitações de suporte</li>
              <li>Enviar newsletters e ofertas (apenas se você consentir)</li>
              <li>Melhorar nossos produtos e serviços</li>
              <li>Prevenir fraudes e atividades ilegais</li>
              <li>Cumprir obrigações legais e regulatórias</li>
            </ul>
          </section>

          {/* Compartilhamento */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#E89BB9' }}>
              4. Compartilhamento de Dados
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Não vendemos</strong> suas informações pessoais para terceiros. 
              Compartilhamos seus dados apenas nas seguintes situações:
            </p>

            <div className="bg-pink-50 rounded-lg p-6 mb-4">
              <h3 className="font-semibold mb-3" style={{ color: '#E89BB9' }}>
                4.1. Prestadores de Serviço:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Processadores de pagamento:</strong> Mercado Pago, PagSeguro (para processar transações)</li>
                <li><strong>Hospedagem:</strong> Servidores para armazenar dados do site</li>
                <li><strong>E-mail:</strong> Serviços de envio de e-mails transacionais</li>
                <li><strong>Analytics:</strong> Google Analytics (dados anônimos)</li>
              </ul>
            </div>

            <div className="bg-amber-50 rounded-lg p-6">
              <h3 className="font-semibold mb-3" style={{ color: '#E89BB9' }}>
                4.2. Exigências Legais:
              </h3>
              <p className="text-gray-700">
                Podemos divulgar suas informações quando exigido por lei, ordem judicial, 
                ou para proteger nossos direitos e propriedade.
              </p>
            </div>
          </section>

          {/* Segurança */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-8 h-8" style={{ color: '#F5A962' }} />
              <h2 className="text-3xl font-bold" style={{ color: '#E89BB9' }}>
                5. Segurança dos Dados
              </h2>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              Implementamos medidas de segurança técnicas e organizacionais para proteger 
              suas informações pessoais contra acesso não autorizado, perda ou destruição:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>✓ Criptografia SSL/TLS (HTTPS) em todo o site</li>
              <li>✓ Armazenamento seguro em servidores protegidos</li>
              <li>✓ Dados de pagamento processados por gateways PCI-DSS compliance</li>
              <li>✓ Acesso restrito aos dados apenas para funcionários autorizados</li>
              <li>✓ Backups regulares e recuperação de desastres</li>
              <li>✓ Monitoramento contínuo de segurança</li>
            </ul>
          </section>

          {/* Seus direitos */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#E89BB9' }}>
              6. Seus Direitos (LGPD)
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              De acordo com a LGPD, você tem os seguintes direitos sobre seus dados pessoais:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold mb-2" style={{ color: '#E89BB9' }}>
                  ✓ Confirmação
                </h3>
                <p className="text-sm text-gray-700">
                  Confirmar se tratamos seus dados pessoais
                </p>
              </div>

              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold mb-2" style={{ color: '#E89BB9' }}>
                  ✓ Acesso
                </h3>
                <p className="text-sm text-gray-700">
                  Acessar seus dados pessoais que mantemos
                </p>
              </div>

              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold mb-2" style={{ color: '#E89BB9' }}>
                  ✓ Correção
                </h3>
                <p className="text-sm text-gray-700">
                  Corrigir dados incompletos ou desatualizados
                </p>
              </div>

              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold mb-2" style={{ color: '#E89BB9' }}>
                  ✓ Anonimização
                </h3>
                <p className="text-sm text-gray-700">
                  Solicitar anonimização de dados desnecessários
                </p>
              </div>

              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold mb-2" style={{ color: '#E89BB9' }}>
                  ✓ Portabilidade
                </h3>
                <p className="text-sm text-gray-700">
                  Receber seus dados em formato estruturado
                </p>
              </div>

              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold mb-2" style={{ color: '#E89BB9' }}>
                  ✓ Eliminação
                </h3>
                <p className="text-sm text-gray-700">
                  Solicitar exclusão de dados desnecessários
                </p>
              </div>

              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold mb-2" style={{ color: '#E89BB9' }}>
                  ✓ Revogação
                </h3>
                <p className="text-sm text-gray-700">
                  Revogar consentimento a qualquer momento
                </p>
              </div>

              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold mb-2" style={{ color: '#E89BB9' }}>
                  ✓ Oposição
                </h3>
                <p className="text-sm text-gray-700">
                  Opor-se ao tratamento de dados em certas situações
                </p>
              </div>
            </div>

            <div className="mt-6 bg-pink-50 rounded-lg p-6">
              <h3 className="font-semibold mb-2" style={{ color: '#E89BB9' }}>
                Como exercer seus direitos:
              </h3>
              <p className="text-gray-700 mb-2">
                Entre em contato conosco através de:
              </p>
              <ul className="text-gray-700 space-y-1">
                <li>📧 E-mail: <a href="mailto:privacidade@plannerfluxo.com.br" className="text-pink-500 hover:underline">privacidade@plannerfluxo.com.br</a></li>
                <li>📱 WhatsApp: (11) 99999-9999</li>
                <li>📝 Formulário: <a href="/contato" className="text-pink-500 hover:underline">Página de Contato</a></li>
              </ul>
              <p className="text-sm text-gray-600 mt-3">
                Responderemos sua solicitação em até 15 dias.
              </p>
            </div>
          </section>

          {/* Cookies */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#E89BB9' }}>
              7. Cookies
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              Utilizamos cookies para melhorar sua experiência no site:
            </p>

            <div className="space-y-4">
              <div className="border-l-4 border-pink-400 pl-4">
                <h3 className="font-semibold mb-1" style={{ color: '#E89BB9' }}>
                  Cookies Essenciais (Obrigatórios)
                </h3>
                <p className="text-sm text-gray-700">
                  Necessários para o funcionamento básico do site (carrinho, login, segurança)
                </p>
              </div>

              <div className="border-l-4 border-yellow-400 pl-4">
                <h3 className="font-semibold mb-1" style={{ color: '#E89BB9' }}>
                  Cookies Analíticos (Opcionais)
                </h3>
                <p className="text-sm text-gray-700">
                  Ajudam a entender como você usa o site (Google Analytics)
                </p>
              </div>

              <div className="border-l-4 border-purple-400 pl-4">
                <h3 className="font-semibold mb-1" style={{ color: '#E89BB9' }}>
                  Cookies de Marketing (Opcionais)
                </h3>
                <p className="text-sm text-gray-700">
                  Permitem mostrar anúncios relevantes (Facebook Pixel)
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-600 mt-4">
              Você pode gerenciar cookies nas configurações do seu navegador.
            </p>
          </section>

          {/* Retenção */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#E89BB9' }}>
              8. Retenção de Dados
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              Mantemos suas informações pessoais apenas pelo tempo necessário:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Dados de compra:</strong> 5 anos (conforme legislação fiscal)</li>
              <li><strong>Dados de cadastro:</strong> Enquanto sua conta estiver ativa</li>
              <li><strong>Newsletter:</strong> Até você cancelar a assinatura</li>
              <li><strong>Cookies:</strong> Conforme configurado (geralmente 1-2 anos)</li>
            </ul>
          </section>

          {/* Menores */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#E89BB9' }}>
              9. Menores de Idade
            </h2>
            
            <p className="text-gray-700 leading-relaxed">
              Nossos serviços são destinados a pessoas com 18 anos ou mais. Não coletamos 
              intencionalmente informações de menores de 18 anos sem consentimento dos pais/responsáveis.
            </p>
          </section>

          {/* Links externos */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#E89BB9' }}>
              10. Links para Sites de Terceiros
            </h2>
            
            <p className="text-gray-700 leading-relaxed">
              Nosso site pode conter links para sites de terceiros. Não somos responsáveis 
              pelas práticas de privacidade desses sites. Recomendamos ler as políticas de 
              privacidade de cada site que você visitar.
            </p>
          </section>

          {/* Atualizações */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#E89BB9' }}>
              11. Atualizações desta Política
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos 
              você sobre mudanças significativas através de:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>E-mail cadastrado</li>
              <li>Aviso no site</li>
              <li>Atualização da data no topo desta página</li>
            </ul>
          </section>

          {/* Contato */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#E89BB9' }}>
              12. Fale Conosco
            </h2>
            
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
              <p className="text-gray-700 mb-4">
                Se você tiver dúvidas sobre esta Política de Privacidade ou sobre como 
                tratamos seus dados pessoais, entre em contato:
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-white rounded-full p-2">
                    <FileText className="w-5 h-5" style={{ color: '#E89BB9' }} />
                  </div>
                  <div>
                    <p className="font-semibold" style={{ color: '#E89BB9' }}>Razão Social:</p>
                    <p className="text-gray-700">Planner Fluxo LTDA</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-white rounded-full p-2">
                    <FileText className="w-5 h-5" style={{ color: '#E89BB9' }} />
                  </div>
                  <div>
                    <p className="font-semibold" style={{ color: '#E89BB9' }}>CNPJ:</p>
                    <p className="text-gray-700">00.000.000/0001-00</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-white rounded-full p-2">
                    <FileText className="w-5 h-5" style={{ color: '#E89BB9' }} />
                  </div>
                  <div>
                    <p className="font-semibold" style={{ color: '#E89BB9' }}>E-mail (DPO):</p>
                    <p className="text-gray-700">
                      <a href="mailto:privacidade@plannerfluxo.com.br" className="text-pink-500 hover:underline">
                        privacidade@plannerfluxo.com.br
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-white rounded-full p-2">
                    <FileText className="w-5 h-5" style={{ color: '#E89BB9' }} />
                  </div>
                  <div>
                    <p className="font-semibold" style={{ color: '#E89BB9' }}>Telefone:</p>
                    <p className="text-gray-700">(11) 99999-9999</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-white rounded-full p-2">
                    <FileText className="w-5 h-5" style={{ color: '#E89BB9' }} />
                  </div>
                  <div>
                    <p className="font-semibold" style={{ color: '#E89BB9' }}>Endereço:</p>
                    <p className="text-gray-700">São Paulo - SP, Brasil</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Aceite */}
          <section className="border-t pt-8">
            <div className="bg-pink-100 rounded-lg p-6 text-center">
              <Shield className="w-12 h-12 mx-auto mb-4" style={{ color: '#E89BB9' }} />
              <p className="text-gray-700 leading-relaxed">
                Ao utilizar nosso site e serviços, você concorda com esta Política de Privacidade 
                e com o tratamento de seus dados pessoais conforme descrito.
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};
