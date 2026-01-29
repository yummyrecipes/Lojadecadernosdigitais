# 🛒 Fluxo Completo de Vendas - React + WooCommerce

## 📊 Arquitetura Headless

### Como funciona:

```
┌─────────────┐      API REST      ┌──────────────┐
│   REACT     │ ◄─────────────────► │  WORDPRESS   │
│  (Vercel)   │    WooCommerce     │ (Seu Server) │
└─────────────┘                    └──────────────┘
     ↓                                      ↓
  Frontend                             Backend
  Público                          Admin/Gestão
```

---

## ✅ O QUE VOCÊ PRECISA NO WOOCOMMERCE:

### ❌ **NÃO PRECISA:**
- ❌ Tema do WooCommerce configurado
- ❌ Páginas de Loja/Carrinho/Checkout do WordPress
- ❌ Personalizar templates PHP
- ❌ Plugins de frontend

### ✅ **PRECISA:**
- ✅ WordPress + WooCommerce instalado
- ✅ Produtos cadastrados no WooCommerce
- ✅ Chaves da API (Consumer Key/Secret)
- ✅ Gateway de pagamento configurado
- ✅ Plugin de e-mail transacional (opcional)

---

## 🔄 Fluxo de Compra Completo

### 1️⃣ **Cliente navega no React** (seu-site.vercel.app)
```
- Página Inicial (/loja)
- Ver produtos
- Clicar em produto
```

### 2️⃣ **Adicionar ao Carrinho** (React - LocalStorage)
```javascript
// Gerenciado 100% no React
const handleAddToCart = () => {
  addToCart(product);
  // Armazenado em localStorage
};
```

### 3️⃣ **Ir para Checkout** (/checkout)
```
- Cliente preenche dados
- Escolhe forma de pagamento (PIX ou Cartão)
- Clica em "Confirmar Pedido"
```

### 4️⃣ **Criar Pedido no WooCommerce** (Via API)
```javascript
// /src/app/services/woocommerce.ts
export const createOrder = async (orderData) => {
  const response = await axios.post(
    `${WORDPRESS_URL}/wp-json/wc/v3/orders`,
    {
      line_items: [...],
      billing: {...},
      payment_method: 'pix' ou 'mercadopago'
    },
    { auth: { username: KEY, password: SECRET } }
  );
  return response.data;
};
```

### 5️⃣ **Gateway de Pagamento Processa**
```
PIX:
- WooCommerce gera QR Code
- Envia para o React
- Cliente paga
- Webhook confirma pagamento

Cartão:
- Redireciona para Mercado Pago/PagSeguro
- Cliente paga
- Retorna para o site
- Webhook confirma pagamento
```

### 6️⃣ **Página de Obrigado** (/obrigado?order_id=123&email=...)
```
✅ Confirma pagamento
✅ Mostra número do pedido
✅ Link para download
✅ Acesso à Área de Membros
```

### 7️⃣ **E-mail Automático** (WooCommerce)
```
WooCommerce envia automaticamente:
- ✅ Confirmação de pedido
- ✅ Link de download
- ✅ Nota fiscal (se configurado)
```

---

## 📦 Configuração do WooCommerce

### Passo 1: Criar Produtos

1. WordPress Admin → WooCommerce → Produtos → Adicionar Novo
2. Configurar:
   - ✅ Nome
   - ✅ Preço
   - ✅ Imagem
   - ✅ SKU
   - ✅ **Produto Virtual** (marcar) ← IMPORTANTE para digitais
   - ✅ **Produto para Download** (marcar)
   - ✅ Upload do arquivo PDF do planner

### Passo 2: Gerar Chaves da API

```
WordPress Admin → WooCommerce → Configurações → Avançado → REST API
→ Adicionar Chave

Nome: React Frontend
Permissões: Leitura/Gravação
Usuário: Seu usuário admin

✅ Copie a Consumer Key e Secret
```

### Passo 3: Configurar Gateway de Pagamento

**Opção A - Mercado Pago:**
```
WooCommerce → Configurações → Pagamentos → Mercado Pago
- Instalar plugin: WooCommerce Mercado Pago
- Adicionar Public Key e Access Token
- Ativar PIX e Cartão de Crédito
```

**Opção B - PagSeguro:**
```
WooCommerce → Configurações → Pagamentos → PagSeguro
- Instalar plugin oficial
- Configurar credenciais
```

### Passo 4: Configurar E-mails

```
WooCommerce → Configurações → E-mails
- ✅ Ativar "Pedido Completo"
- ✅ Ativar "Nota de Pedido para Cliente"
- ✅ Personalizar templates (opcional)
```

---

## 🔧 Variáveis de Ambiente (.env)

### No desenvolvimento local:
```env
VITE_WORDPRESS_URL=http://localhost/wordpress
VITE_WOOCOMMERCE_KEY=ck_xxxxxxxxxxxxxxxxxxxxx
VITE_WOOCOMMERCE_SECRET=cs_xxxxxxxxxxxxxxxxxxxxx
```

### Na Vercel (Produção):
```env
VITE_WORDPRESS_URL=https://meusite.com.br
VITE_WOOCOMMERCE_KEY=ck_xxxxxxxxxxxxxxxxxxxxx
VITE_WOOCOMMERCE_SECRET=cs_xxxxxxxxxxxxxxxxxxxxx
```

---

## 🎯 Páginas do React vs WooCommerce

| Funcionalidade | Onde fica? | Gerenciado por |
|---------------|-----------|----------------|
| **Listagem de Produtos** | React (/loja) | API do WooCommerce |
| **Página de Produto** | React (/produto/:id) | API do WooCommerce |
| **Carrinho** | React (/carrinho) | LocalStorage + React |
| **Checkout** | React (/checkout) | React → API WooCommerce |
| **Pagamento** | Gateway Externo | Mercado Pago/PagSeguro |
| **Página de Obrigado** | React (/obrigado) | React |
| **Área de Membros** | React (/area-membros) | React → API WooCommerce |
| **Gestão de Pedidos** | WordPress Admin | WooCommerce Dashboard |
| **Gestão de Produtos** | WordPress Admin | WooCommerce Dashboard |
| **Relatórios** | WordPress Admin | WooCommerce Analytics |

---

## 🚀 Deploy

### 1. Frontend (React → Vercel)
```bash
vercel
# Adicione as variáveis de ambiente no painel da Vercel
```

### 2. Backend (WordPress → Seu servidor)
```
- WordPress já deve estar rodando
- WooCommerce configurado
- SSL ativo (HTTPS)
```

---

## 📱 Links Importantes

### Para seus clientes:
- 🌐 **https://planner-fluxo.vercel.app** ← Site principal (React)
- 📦 **https://planner-fluxo.vercel.app/loja** ← Loja
- 🎁 **https://planner-fluxo.vercel.app/area-membros** ← Downloads

### Para você (Admin):
- ⚙️ **https://seu-wordpress.com.br/wp-admin** ← Painel WordPress
- 📊 **https://seu-wordpress.com.br/wp-admin/admin.php?page=wc-admin** ← WooCommerce Dashboard

---

## 🔐 Segurança

### ✅ Boas práticas:

1. **NUNCA exponha as chaves**
   - Não faça commit do arquivo `.env`
   - Use variáveis de ambiente na Vercel

2. **Use HTTPS**
   - WordPress deve ter SSL
   - Vercel já tem HTTPS automático

3. **Proteja o WordPress**
   - Use senhas fortes
   - Instale plugin de segurança (Wordfence)
   - Limite tentativas de login

4. **Validação de dados**
   - Sanitize inputs no React
   - WooCommerce já valida no backend

---

## 🎉 Resumo Final

### O que o cliente vê:
```
seu-site.vercel.app (React bonito e rápido)
```

### O que você gerencia:
```
wordpress.com.br/wp-admin (Produtos, pedidos, relatórios)
```

### Como conectam:
```
API REST do WooCommerce (invisível para o cliente)
```

---

## 💡 Perguntas Frequentes

**P: Preciso personalizar o tema do WordPress?**
R: NÃO! O WordPress fica escondido. Apenas o React aparece.

**P: Os clientes vão acessar o WordPress?**
R: NÃO! Eles só veem o React.

**P: Preciso criar páginas de carrinho no WooCommerce?**
R: NÃO! O carrinho é 100% React.

**P: Como os produtos aparecem no React?**
R: Via API. Você cadastra no WordPress e aparecem automaticamente no React.

**P: E os pagamentos?**
R: Gateway (Mercado Pago) processa. WooCommerce recebe confirmação.

**P: Preciso de hospedagem para o React?**
R: SIM, mas a Vercel é grátis! Deploy com um comando.

**P: E para o WordPress?**
R: SIM, precisa de hospedagem própria (já tem).

---

## 🆘 Suporte

Se tiver dúvidas, é só perguntar! 💖

---

**Criado em:** 29 de janeiro de 2026
**Última atualização:** 29 de janeiro de 2026
