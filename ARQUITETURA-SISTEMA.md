# 🏗️ ARQUITETURA DO SISTEMA: Planner Fluxo

## 📐 VISÃO GERAL

```
┌─────────────────────────────────────────────────────────────────┐
│                         CLIENTE/VISITANTE                        │
│                    (Navegador Web / Mobile)                      │
└───────────────────────────┬─────────────────────────────────────┘
                            │
                            │ HTTPS
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│                  SITE REACT (FRONTEND)                           │
│                  plannerfluxo.com.br                             │
│                  Hospedado na Vercel                             │
│                                                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │   Homepage   │  │     Loja     │  │  Quem Somos  │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
│                                                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │   Carrinho   │  │   Checkout   │  │   Contato    │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
│                                                                  │
│         📱 React Router | 🎨 Tailwind CSS                       │
└───────────────────────────┬─────────────────────────────────────┘
                            │
                            │ API REST
                            │ (WooCommerce API)
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│              WORDPRESS + WOOCOMMERCE (BACKEND)                   │
│              plannerfluxo.com.br/wp-admin                        │
│              Hospedado no seu servidor                           │
│                                                                  │
│  ┌────────────────────────────────────────────────────┐         │
│  │  📦 PRODUTOS                                        │         │
│  │  - Nome, preço, descrição                          │         │
│  │  - Imagens, categorias                             │         │
│  │  - Arquivos PDF para download                      │         │
│  │  - Estoque, variações                              │         │
│  └────────────────────────────────────────────────────┘         │
│                                                                  │
│  ┌────────────────────────────────────────────────────┐         │
│  │  🛒 PEDIDOS                                         │         │
│  │  - Histórico de compras                            │         │
│  │  - Status de pagamento                             │         │
│  │  - Informações do cliente                          │         │
│  │  - Downloads entregues                             │         │
│  └────────────────────────────────────────────────────┘         │
│                                                                  │
│  ┌────────────────────────────────────────────────────┐         │
│  │  👥 CLIENTES                                        │         │
│  │  - Cadastro automático                             │         │
│  │  - Histórico de compras                            │         │
│  │  - Endereços salvos                                │         │
│  │  - Preferências                                    │         │
│  └────────────────────────────────────────────────────┘         │
│                                                                  │
│  ┌────────────────────────────────────────────────────┐         │
│  │  💳 PAGAMENTOS                                      │         │
│  │  - PIX (WooCommerce PIX)                           │         │
│  │  - Cartão de crédito (Mercado Pago)               │         │
│  │  - Parcelamento 4x sem juros                       │         │
│  └────────────────────────────────────────────────────┘         │
│                                                                  │
│  ┌────────────────────────────────────────────────────┐         │
│  │  📊 RELATÓRIOS                                      │         │
│  │  - Vendas por período                              │         │
│  │  - Produtos mais vendidos                          │         │
│  │  - Receita total                                   │         │
│  │  - Cupons utilizados                               │         │
│  └────────────────────────────────────────────────────┘         │
└───────────────────────────┬─────────────────────────────────────┘
                            │
                            │
              ┌─────────────┴─────────────┐
              │                           │
              ▼                           ▼
    ┌──────────────────┐        ┌──────────────────┐
    │  GATEWAY PAGO    │        │   EMAIL SERVICE  │
    │                  │        │                  │
    │  • Mercado Pago  │        │  • SMTP          │
    │  • PagSeguro     │        │  • SendGrid      │
    │  • PayPal        │        │  • Mailgun       │
    └──────────────────┘        └──────────────────┘
```

---

## 🔄 FLUXO DE DADOS

### **1. CARREGAMENTO INICIAL DA LOJA**

```
┌──────────┐     GET /products     ┌────────────┐
│          │ ───────────────────► │            │
│  REACT   │                      │ WORDPRESS  │
│  (Loja)  │ ◄─────────────────── │ WooCommerce│
│          │   JSON (produtos)    │            │
└──────────┘                      └────────────┘

Dados retornados:
{
  "id": 1,
  "name": "Planner Mensal Rosa",
  "price": "49.90",
  "images": [...],
  "categories": [...]
}
```

### **2. ADICIONAR AO CARRINHO**

```
Cliente clica "Adicionar ao Carrinho"
           ▼
React salva no localStorage
           ▼
Carrinho atualizado (badge +1)
           ▼
Produto adicionado com sucesso!
```

### **3. PROCESSO DE CHECKOUT**

```
┌─────────────────────────────────────────────────────────┐
│ 1. Cliente finaliza carrinho                            │
│    ▼                                                     │
│ 2. React envia dados para WordPress                     │
│    POST /orders                                          │
│    {                                                     │
│      "billing": {...},                                   │
│      "line_items": [{...}],                             │
│      "payment_method": "pix"                            │
│    }                                                     │
│    ▼                                                     │
│ 3. WordPress cria pedido                                │
│    ▼                                                     │
│ 4. Gateway de pagamento processa                        │
│    ▼                                                     │
│ 5. Webhook confirma pagamento                           │
│    ▼                                                     │
│ 6. WordPress marca como "Concluído"                     │
│    ▼                                                     │
│ 7. Email enviado com link de download                   │
│    ▼                                                     │
│ 8. Cliente baixa produtos                               │
└─────────────────────────────────────────────────────────┘
```

### **4. ATUALIZAÇÃO DE PRODUTO**

```
┌────────────────────────────────────────────────────────┐
│ Admin edita produto no WordPress                       │
│    ▼                                                    │
│ Salva alterações                                        │
│    ▼                                                    │
│ Cliente acessa loja no React                           │
│    ▼                                                    │
│ React faz GET /products                                │
│    ▼                                                    │
│ Recebe dados atualizados                               │
│    ▼                                                    │
│ Produto atualizado aparece na loja                     │
│    (sem precisar atualizar React!)                     │
└────────────────────────────────────────────────────────┘
```

---

## 🔐 SEGURANÇA

### **Autenticação API**

```
Todas as requisições incluem:

Headers:
  Authorization: Consumer Key + Consumer Secret
  
Exemplo:
GET /wp-json/wc/v3/products?
    consumer_key=ck_xxxxx&
    consumer_secret=cs_xxxxx
```

### **HTTPS Obrigatório**

```
✓ Vercel: SSL automático (grátis)
✓ WordPress: Let's Encrypt (grátis)
✓ Certificados renovam automaticamente
```

### **Proteção de Dados**

```
✓ Senhas: bcrypt hash
✓ Cartões: PCI compliance (gateway)
✓ PIX: tokenizado
✓ Arquivos: download com token único
```

---

## 📦 ESTRUTURA DE ARQUIVOS

### **React (Frontend)**

```
src/
├── app/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ProductCard.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Loja.tsx        ← Usa API WooCommerce
│   │   ├── Produto.tsx      ← Usa API WooCommerce
│   │   ├── Carrinho.tsx
│   │   └── Checkout.tsx     ← Envia para WooCommerce
│   ├── services/
│   │   └── woocommerce.ts   ← Integração API
│   ├── context/
│   │   └── CartContext.tsx
│   └── App.tsx
└── styles/
    └── theme.css
```

### **WordPress (Backend)**

```
wp-content/
├── plugins/
│   ├── woocommerce/           ← Core WooCommerce
│   ├── woocommerce-pix/       ← Pagamento PIX
│   └── mercadopago/           ← Cartão crédito
├── uploads/
│   ├── products/              ← Imagens de produtos
│   └── downloads/             ← PDFs para download
└── themes/
    └── planner-fluxo/         ← Tema (opcional)
```

---

## 🚀 DEPLOY E HOSPEDAGEM

### **Frontend (React)**

```
Vercel:
┌────────────────────────────────────┐
│  Deploy automático                 │
│  SSL grátis                        │
│  CDN global                        │
│  Zero configuração                 │
│                                    │
│  Custo: R$ 0/mês (grátis)         │
└────────────────────────────────────┘
```

### **Backend (WordPress)**

```
Opções de hospedagem:

1. HostGator:
   - R$ 15-30/mês
   - WooCommerce otimizado
   - Suporte BR

2. Hostinger:
   - R$ 20-40/mês
   - Performance boa
   - Barato

3. SiteGround:
   - R$ 35-70/mês
   - Melhor performance
   - Caro mas vale
```

---

## 📊 PERFORMANCE

### **React (Frontend)**

```
Velocidade:
┌────────────────────────────────┐
│ Carregamento inicial: < 1s     │
│ Navegação entre páginas: < 0.2s│
│ Busca produtos: < 0.5s        │
│ Lighthouse Score: 95+          │
└────────────────────────────────┘

Otimizações:
✓ Code splitting
✓ Lazy loading
✓ CDN global (Vercel)
✓ Caching agressivo
```

### **WordPress (Backend)**

```
Otimizações:
┌────────────────────────────────┐
│ ✓ Plugin de cache (WP Rocket)  │
│ ✓ CDN (Cloudflare - grátis)   │
│ ✓ Otimização de imagens        │
│ ✓ Minificação CSS/JS           │
│ ✓ Database cleanup semanal     │
└────────────────────────────────┘
```

---

## 🔄 SINCRONIZAÇÃO

### **Tempo Real**

```
┌──────────────────────────────────────┐
│  Ação no WordPress                   │
│    ▼                                 │
│  Salvar produto                      │
│    ▼                                 │
│  1-5 segundos                        │
│    ▼                                 │
│  Aparece no React                    │
│  (próxima vez que carregar)          │
└──────────────────────────────────────┘

Não é instantâneo, mas é rápido!
```

### **Cache Inteligente**

```
React armazena em cache por:
- 5 minutos: lista de produtos
- 30 minutos: produto individual
- Até limpar: carrinho

Pode forçar atualização:
- Refresh da página (F5)
- Limpar cache do navegador
```

---

## 💡 VANTAGENS DESTA ARQUITETURA

### **Separação de Responsabilidades**

```
React:               WordPress:
✓ Visual bonito      ✓ Gerenciar produtos
✓ Performance        ✓ Processar pagamentos
✓ UX moderna         ✓ Enviar e-mails
✓ SEO otimizado      ✓ Backup de dados
                     ✓ Relatórios
```

### **Escalabilidade**

```
Pode crescer facilmente:

Pequeno:
- 10-50 produtos
- 100 visitas/dia
- Custo: R$ 20/mês

Médio:
- 100-500 produtos
- 1000 visitas/dia
- Custo: R$ 50/mês

Grande:
- 1000+ produtos
- 10000+ visitas/dia
- Custo: R$ 200/mês
```

### **Manutenção**

```
Facilidade:
┌────────────────────────────────┐
│  Adicionar produto: 2 min      │
│  Editar produto: 1 min         │
│  Processar pedido: automático  │
│  Backup: automático            │
│  Atualizações: 1 clique        │
└────────────────────────────────┘
```

---

## 🎯 CASOS DE USO

### **Cliente Faz Compra**

```
1. Cliente acessa plannerfluxo.com.br
2. Vê produtos (vindo do WordPress)
3. Adiciona ao carrinho (salvo no React)
4. Vai para checkout
5. Preenche dados
6. Escolhe PIX
7. React envia para WordPress
8. WordPress gera QR Code PIX
9. Cliente paga
10. Webhook confirma
11. E-mail com download enviado
12. Cliente baixa planner
✅ Processo completo!
```

### **Admin Adiciona Produto**

```
1. Login wp-admin
2. Produtos → Adicionar Novo
3. Preencher:
   - Nome: Planner X
   - Preço: R$ 49,90
   - Imagem
   - Arquivo PDF
4. Publicar
5. ✅ Produto aparece na loja React!
```

### **Admin Vê Relatório**

```
1. Login wp-admin
2. WooCommerce → Relatórios
3. Ver:
   - Vendas de hoje: R$ 1.247,80
   - Pedidos: 25
   - Produto mais vendido: Planner Mensal
   - Taxa de conversão: 3.2%
   - Ticket médio: R$ 49,91
```

---

## 🔮 FUTURAS EXPANSÕES

### **Fase 2 - Membership**

```
Adicionar:
- Área de membros
- Assinatura mensal
- Conteúdo exclusivo
- Planners gratuitos mensais

Plugin: MemberPress ou Paid Memberships Pro
```

### **Fase 3 - Afiliados**

```
Adicionar:
- Programa de afiliados
- Cupons personalizados
- Dashboard para afiliados
- Comissão automática

Plugin: AffiliateWP
```

### **Fase 4 - Mobile App**

```
Criar app nativo:
- React Native
- Mesma API WordPress
- Push notifications
- Download offline

Custo: R$ 5.000-15.000 (dev)
```

---

## ✅ CONCLUSÃO

Esta arquitetura é:

```
✅ Escalável
✅ Segura
✅ Fácil de manter
✅ Performance alta
✅ Custos baixos
✅ Profissional

= Perfeita para e-commerce de produtos digitais! 🚀
```

---

_Diagrama criado em 28 de Janeiro de 2026_
