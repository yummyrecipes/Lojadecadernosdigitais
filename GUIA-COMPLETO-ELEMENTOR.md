# 🎨 Guia Completo: Planner Fluxo - Elementor Templates

## 📦 Pacote Completo de Templates

Este pacote contém **7 templates JSON do Elementor** prontos para importação no WordPress/UIChemy:

### ✅ Templates Incluídos:

1. **elementor-homepage-template.json** - Página Inicial Completa
2. **elementor-loja-template.json** - Página da Loja com Filtros
3. **elementor-quem-somos-template.json** - Página Sobre/Quem Somos
4. **elementor-contato-template.json** - Página de Contato com Formulário
5. **elementor-clube-freebies-template.json** - Clube de Freebies
6. **elementor-afiliados-template.json** - Programa de Afiliados
7. **elementor-blog-template.json** - Blog/Listagem de Posts

---

## 🎨 Paleta de Cores do Projeto

Configure estas cores como **Global Colors** no Elementor:

```
Rosa Principal: #E89BB9
Ouro/Laranja: #F5A962
Roxo Escuro (Texto): #2C1840
Rosa Claro (Background): #FFF5F8
Branco: #FFFFFF

WhatsApp Verde: #075E54
WhatsApp Balão: #DCF8C6
WhatsApp Fundo: #E5DDD5
```

---

## 📥 Como Importar os Templates

### **Opção 1: Importação Automática (Recomendado)**

1. Acesse **WordPress Admin**
2. Vá em: **Templates → Theme Builder → Adicionar Novo**
3. Clique em **"Importar Template"**
4. Escolha o arquivo JSON
5. Clique em **"Importar Agora"**

### **Opção 2: Criação Manual de Página**

Se a importação JSON não funcionar:

1. **Páginas → Adicionar Nova**
2. Título da página (ex: "Início")
3. Clique em **"Editar com Elementor"**
4. Recrie as seções seguindo o guia de cada template

---

## 📄 Resumo de Cada Template

### 1️⃣ **Homepage** (elementor-homepage-template.json)

**Seções incluídas:**
- ✅ Promo Bar (oferta especial no topo)
- ✅ Header com logo grande (150px) + menu
- ✅ Hero Section com CTA
- ✅ Como Funciona (3 passos com ícones)
- ✅ Produtos Destaque (WooCommerce Grid)
- ✅ Relatos WhatsApp (HTML/CSS customizado)
- ✅ Garantia 7 dias
- ✅ FAQ/Dúvidas (Accordion)
- ✅ CTA Final (gradient rosa/ouro)

**IDs importantes para links âncora:**
- `#como-funciona`
- `#relatos`
- `#duvidas`

---

### 2️⃣ **Loja** (elementor-loja-template.json)

**Seções incluídas:**
- ✅ Hero com título da loja
- ✅ Filtros por categoria (pills interativos)
- ✅ Grid de produtos WooCommerce (12 produtos, 4 colunas)
- ✅ Benefícios da loja (4 ícones)

**Widgets especiais:**
- WooCommerce Products (configurado)
- Filtros customizados em HTML

---

### 3️⃣ **Quem Somos** (elementor-quem-somos-template.json)

**Seções incluídas:**
- ✅ Hero com ícone de coração
- ✅ Fundadora (foto + história pessoal)
- ✅ Missão, Visão e Valores (3 colunas)
- ✅ Números da empresa (4 estatísticas)
- ✅ CTA para a loja

**Substitua:**
- Imagem da fundadora
- Nome e história da fundadora
- Assinatura (opcional)

---

### 4️⃣ **Contato** (elementor-contato-template.json)

**Seções incluídas:**
- ✅ Hero com ícone de envelope
- ✅ Formulário de contato completo
- ✅ Informações de contato (WhatsApp, E-mail, Instagram)
- ✅ Box de Central de Ajuda
- ✅ Horário de atendimento

**Substitua:**
- E-mail de destino no formulário
- Número de WhatsApp
- Instagram handle
- Horários de atendimento

---

### 5️⃣ **Clube de Freebies** (elementor-clube-freebies-template.json)

**Seções incluídas:**
- ✅ Hero com gradient e ícone de presente
- ✅ Benefícios do clube (3 colunas)
- ✅ Formulário de cadastro
- ✅ Freebies disponíveis (grid de 3)
- ✅ FAQ do clube

**Configure:**
- E-mail para receber cadastros
- Links de download dos freebies
- Imagens dos freebies

---

### 6️⃣ **Afiliados** (elementor-afiliados-template.json)

**Seções incluídas:**
- ✅ Hero com gradient e handshake
- ✅ Estrutura de comissões (3 níveis: 20%, 25%, 30%)
- ✅ Vantagens de ser afiliada (6 benefícios)
- ✅ Como funciona (4 passos)
- ✅ Formulário de cadastro de afiliadas
- ✅ FAQ

**Configure:**
- E-mail para receber cadastros de afiliadas
- Plataforma de afiliados (se usar Hotmart, Eduzz, etc)

---

### 7️⃣ **Blog** (elementor-blog-template.json)

**Seções incluídas:**
- ✅ Hero do blog
- ✅ Categorias (filtros em pills)
- ✅ Grid de posts (6 posts, 3 colunas)
- ✅ Newsletter signup (formulário)

**Widgets usados:**
- Posts Widget (nativo do Elementor)
- Form Widget para newsletter

---

## 🔧 Configurações Globais

### **1. Cores Globais**

No Elementor:
1. Menu ☰ → **Site Settings → Global Colors**
2. Adicione as cores da paleta (veja início deste guia)

### **2. Tipografia Global**

Recomendado:
- **Headings**: Montserrat ou Poppins (Bold)
- **Body**: Open Sans ou Inter (Regular)

### **3. Header & Footer**

**Header:**
- Elementor Pro → Theme Builder → Header
- Logo: 120-150px (desktop), 100px (mobile)
- Menu: Como Funciona, Relatos, Dúvidas (links âncora)
- Sticky: Sim
- Background: Branco (#FFFFFF)
- Border bottom: 2px #E89BB9

**Footer:**
- Elementor Pro → Theme Builder → Footer
- Logo: 160px
- Background: #E89BB9
- Texto: Branco
- 4 Colunas: Logo+Descrição, Links Rápidos, Páginas, Redes Sociais

---

## 🛒 Configuração WooCommerce

### **Produtos Digitais:**

1. **WooCommerce → Produtos → Adicionar Produto**
2. **Tipo:** Produto Digital
3. **Preço:** Em BRL (R$)
4. **Arquivo para Download:** Upload do PDF do planner
5. **Categorias:** Criar categorias (Diários, Semanais, Mensais, etc)

### **Gateways de Pagamento:**

Configure em **WooCommerce → Configurações → Pagamentos**:

1. **Mercado Pago** (parcelamento 4x sem juros)
   - Plugin: Mercado Pago for WooCommerce
   
2. **PIX** (desconto especial)
   - Plugin: PIX para WooCommerce
   
3. **Cartão de Crédito** (opcional: outros gateways)

### **E-mails Transacionais:**

Configure templates de e-mail em:
- WooCommerce → Configurações → E-mails
- Personalize com as cores do site

---

## 📱 Responsividade

Teste TODAS as páginas em:
- **Desktop**: 1920px
- **Tablet**: 768px
- **Mobile**: 360px

**Ajustes comuns no mobile:**
- Colunas: 100% width
- Font-size: reduzir 20-30%
- Padding: reduzir pela metade
- Logo: altura menor (100px)

---

## ✨ Elementos Customizados (HTML/CSS)

### **Relatos WhatsApp**

Os relatos usam HTML/CSS customizado para simular interface do WhatsApp.

**Código está em:** `elementor-homepage-template.json` → seção `relatos-html`

**Elementos:**
- Header verde (#075E54)
- Balões de mensagem (#DCF8C6)
- Fundo bege (#E5DDD5)
- Avatar circular
- Status "online"

### **Filtros da Loja**

Pills interativos para filtrar produtos.

**Código está em:** `elementor-loja-template.json` → seção `filtros`

### **Cards de Comissão (Afiliados)**

Cards com hover effect e gradients.

**Código está em:** `elementor-afiliados-template.json` → seção `comissoes`

---

## 🔗 Menu e Navegação

### **Menu Principal:**

Criar em: **Aparência → Menus**

**Itens:**
1. Como Funciona → `/#como-funciona`
2. Relatos → `/#relatos`
3. Dúvidas → `/#duvidas`

**Importante:** Links com `#` funcionam como âncoras (scroll suave)

### **Footer Menu:**

**Links Rápidos:**
- Início
- Loja
- Clube de Freebies
- Blog

**Páginas:**
- Quem Somos
- Contato
- Afiliados
- Política de Privacidade

---

## 📋 Checklist de Implementação

### **Antes de Começar:**
- [ ] WordPress instalado (UIChemy)
- [ ] Elementor Pro ativado (mínimo v3.0)
- [ ] WooCommerce instalado e configurado
- [ ] Tema compatível (Astra, Hello, OceanWP)

### **Configurações Globais:**
- [ ] Cores globais configuradas
- [ ] Tipografia global definida
- [ ] Logo importada (PNG com fundo transparente)

### **Templates:**
- [ ] Homepage importada
- [ ] Loja importada
- [ ] Quem Somos importada
- [ ] Contato importado
- [ ] Clube de Freebies importado
- [ ] Afiliados importado
- [ ] Blog importado

### **Header & Footer:**
- [ ] Header criado (logo 120-150px)
- [ ] Menu configurado com links âncora
- [ ] Footer criado (logo 160px)
- [ ] Footer sem espaço entre logo e texto

### **WooCommerce:**
- [ ] Produtos cadastrados
- [ ] Categorias criadas
- [ ] Gateway Mercado Pago configurado
- [ ] Gateway PIX configurado
- [ ] E-mails personalizados

### **Páginas Especiais:**
- [ ] Definir homepage como página inicial
- [ ] Definir página de blog para posts
- [ ] Página 404 customizada
- [ ] Política de Privacidade
- [ ] Termos de Uso

### **Formulários:**
- [ ] Formulário de contato testado
- [ ] Formulário de freebies testado
- [ ] Formulário de afiliadas testado
- [ ] Newsletter testada
- [ ] E-mails de destino configurados

### **SEO & Performance:**
- [ ] Plugin de SEO instalado (Yoast ou Rank Math)
- [ ] Meta títulos e descrições
- [ ] Cache configurado (WP Rocket ou similar)
- [ ] Imagens otimizadas
- [ ] Sitemap XML gerado

### **Responsividade:**
- [ ] Testado em desktop (1920px)
- [ ] Testado em tablet (768px)
- [ ] Testado em mobile (360px)
- [ ] Menu mobile funcionando
- [ ] Todos os botões clicáveis

### **Links e Navegação:**
- [ ] Todos os links internos funcionam
- [ ] Links âncora (#como-funciona, etc) funcionam
- [ ] Botões de redes sociais configurados
- [ ] Links de WhatsApp funcionando

### **Conteúdo:**
- [ ] Textos revisados (sem lorem ipsum)
- [ ] Imagens substituídas (sem Unsplash)
- [ ] Vídeos (se houver) funcionando
- [ ] Depoimentos reais
- [ ] Preços atualizados

---

## 🚀 Próximos Passos

### **Depois da Implementação:**

1. **Testes de Compra**
   - Fazer uma compra teste
   - Verificar e-mails transacionais
   - Testar download do produto

2. **Analytics**
   - Instalar Google Analytics
   - Configurar Google Tag Manager
   - Pixel do Facebook/Instagram
   - Conversões de e-commerce

3. **Marketing**
   - Integrar com e-mail marketing (MailChimp, ActiveCampaign)
   - Criar automações de e-mail
   - Pop-ups de conversão
   - Chat online (WhatsApp, Tidio)

4. **Segurança**
   - SSL configurado (HTTPS)
   - Backup automático
   - Firewall (Cloudflare, Wordfence)
   - Atualizações regulares

5. **Legal**
   - LGPD compliance
   - Cookie consent banner
   - Política de Privacidade
   - Termos de Uso
   - Política de Reembolso

---

## 🆘 Troubleshooting

### **Problema: JSON não importa**
**Solução:** Recrie manualmente seguindo as instruções em cada template

### **Problema: WooCommerce não aparece**
**Solução:** Ative o WooCommerce e configure ao menos 1 produto

### **Problema: Cores não aplicam**
**Solução:** Configure Global Colors no Elementor

### **Problema: Formulários não enviam**
**Solução:** 
- Verifique SMTP configurado
- Teste com plugin WP Mail SMTP
- Verifique e-mail de destino

### **Problema: Links âncora não funcionam**
**Solução:**
- Adicione IDs nas seções (como-funciona, relatos, duvidas)
- Use formato: `/#nome-da-secao`

### **Problema: Imagens não carregam**
**Solução:**
- Faça upload na Biblioteca de Mídia
- Substitua URLs no código HTML/CSS

---

## 📧 Suporte

**Dúvidas sobre os templates?**

1. Verifique este guia completo
2. Consulte documentação do Elementor
3. Teste em ambiente de staging primeiro
4. Mantenha backups regulares

---

## 🎯 Resultado Final

Ao concluir todos os passos, você terá:

✅ Site completo de planners digitais
✅ Loja WooCommerce funcional
✅ Sistema de pagamento configurado (Mercado Pago + PIX)
✅ Blog para conteúdo
✅ Clube de freebies para captura de leads
✅ Programa de afiliados
✅ Formulários de contato
✅ Design 100% responsivo
✅ Cores e branding consistentes
✅ SEO otimizado

**Tempo estimado de implementação:** 8-12 horas

---

## 📝 Notas Importantes

1. **Backup sempre** antes de importar templates
2. **Teste em staging** antes de publicar
3. **Otimize imagens** antes do upload (TinyPNG, ShortPixel)
4. **Revise textos** para evitar erros de português
5. **Teste todos os formulários** antes de lançar
6. **Configure e-mails transacionais** corretamente
7. **Ative SSL** (HTTPS) antes de aceitar pagamentos

---

## 🌟 Boa Sorte!

Seus templates estão prontos para transformar seu site em uma loja profissional de planners digitais! 

**Lembre-se:** A chave do sucesso está nos detalhes. Teste tudo, otimize sempre, e foque na experiência do usuário! 💖

---

**Versão:** 1.0
**Data:** 2026
**Compatibilidade:** Elementor Pro 3.0+, WooCommerce 5.0+, WordPress 5.8+
