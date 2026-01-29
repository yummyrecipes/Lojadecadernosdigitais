# 💳 Guia Completo - Configuração Mercado Pago com WooCommerce

## 🎯 Visão Geral

O sistema está 100% integrado! Agora você só precisa:
1. Adicionar a URL do seu WordPress no `.env`
2. O Mercado Pago já está configurado no WooCommerce
3. Testar e pronto!

---

## 📝 Passo 1: Atualizar arquivo .env

**Abra o arquivo `.env` na raiz do projeto** e substitua:

```env
VITE_WORDPRESS_URL=https://SEU-DOMINIO-WORDPRESS.com.br
VITE_WOOCOMMERCE_KEY=ck_0ca7afe4860326917d97a1ac0f05dd51fe342831
VITE_WOOCOMMERCE_SECRET=cs_52676cc107ba49374bc3868d1744c1365550b599
```

**⚠️ IMPORTANTE:**
- Substitua `https://SEU-DOMINIO-WORDPRESS.com.br` pela URL REAL do seu WordPress
- As chaves já estão configuradas (você me forneceu)
- NÃO adicione barra `/` no final da URL

**Exemplos corretos:**
```env
✅ VITE_WORDPRESS_URL=https://plannerfluxo.com.br
✅ VITE_WORDPRESS_URL=https://meusite.hospedagem.com.br
```

**Exemplos incorretos:**
```env
❌ VITE_WORDPRESS_URL=https://plannerfluxo.com.br/
❌ VITE_WORDPRESS_URL=http://localhost/wordpress (usar em produção)
```

---

## 🔧 Passo 2: Verificar Plugin Mercado Pago no WordPress

### 2.1 Instalar Plugin (se ainda não instalou)

1. Acesse: `WordPress Admin → Plugins → Adicionar Novo`
2. Pesquise: **"WooCommerce Mercado Pago"**
3. Instale o plugin oficial: **Mercado Pago payments for WooCommerce**
4. Clique em **Ativar**

### 2.2 Configurar Credenciais do Mercado Pago

1. Acesse: `WooCommerce → Configurações → Pagamentos → Mercado Pago`
2. Clique em **Configurar** ou **Manage**
3. Você verá opções para:
   - **Checkout Pro** (recomendado)
   - **PIX**
   - **Cartão de Crédito**

### 2.3 Obter Credenciais do Mercado Pago

**Para PRODUÇÃO (vendas reais):**

1. Acesse: https://www.mercadopago.com.br/developers/
2. Faça login na sua conta Mercado Pago
3. Vá em: **Suas integrações → Credenciais**
4. Copie:
   - **Public Key** (começa com APP_USR-...)
   - **Access Token** (começa com APP_USR-...)

**Para TESTES (modo sandbox):**

1. No mesmo painel: **Suas integrações → Credenciais**
2. Alterne para **Credenciais de teste**
3. Copie as credenciais de teste

### 2.4 Adicionar Credenciais no WooCommerce

```
WooCommerce → Configurações → Pagamentos → Mercado Pago

1. Cole a Public Key
2. Cole o Access Token
3. Marque "Ativar modo de teste" (apenas para testar)
4. Salve as alterações
```

---

## 🛍️ Passo 3: Configurar Métodos de Pagamento

### Opção 1: Checkout Pro (Recomendado - Mais Fácil)

**Vantagens:**
- ✅ Cliente é redirecionado para página segura do Mercado Pago
- ✅ Aceita PIX, Cartão, Boleto automaticamente
- ✅ Menos configuração
- ✅ Mercado Pago cuida da segurança

**Configuração:**
```
WooCommerce → Configurações → Pagamentos → Checkout Pro Mercado Pago
- Ativar: ✅ Sim
- Título: "Pagar com Mercado Pago"
- Descrição: "PIX, Cartão de Crédito ou Boleto"
- Modo de teste: ✅ (apenas para testar)
- Salvar
```

### Opção 2: PIX Separado

**Para oferecer PIX direto:**
```
WooCommerce → Configurações → Pagamentos → PIX Mercado Pago
- Ativar: ✅ Sim
- Título: "PIX"
- Descrição: "Pague instantaneamente com PIX"
- Desconto: 5% (opcional)
- Salvar
```

### Opção 3: Cartão de Crédito Direto

**Para processar cartão sem redirecionar:**
```
WooCommerce → Configurações → Pagamentos → Cartão de Crédito Mercado Pago
- Ativar: ✅ Sim
- Título: "Cartão de Crédito"
- Parcelamento: até 4x sem juros
- Salvar
```

---

## 🎨 Passo 4: Configurar Códigos de Pagamento no React

O código React já está configurado para usar:

```typescript
// /src/app/pages/Checkout.tsx (já configurado!)

payment_method: paymentMethod === 'pix' 
  ? 'woo-mercado-pago-pix'        // PIX
  : 'woo-mercado-pago-custom',    // Cartão

payment_method_title: paymentMethod === 'pix' 
  ? 'PIX - Mercado Pago' 
  : 'Cartão de Crédito - Mercado Pago'
```

**⚠️ IMPORTANTE:** Se você ativou o **Checkout Pro**, use:
```typescript
payment_method: 'woo-mercado-pago-basic'
payment_method_title: 'Mercado Pago'
```

---

## 🧪 Passo 5: Testar a Integração

### Teste 1: Verificar Conexão API

1. Abra o console do navegador (F12)
2. Acesse: `http://localhost:5173` (ou sua URL)
3. Vá para `/loja`
4. Veja se os produtos aparecem

**Se aparecerem produtos mock:**
- ✅ Normal! Significa que ainda não configurou a URL no `.env`

**Se aparecerem produtos do WooCommerce:**
- ✅ Perfeito! API funcionando!

### Teste 2: Criar Pedido de Teste

1. Adicione produtos ao carrinho
2. Vá para checkout
3. Preencha os dados:
   ```
   Nome: João Silva
   Email: teste@example.com
   Telefone: (11) 99999-9999
   CPF: 123.456.789-00
   ```
4. Escolha **PIX** ou **Cartão**
5. Clique em **Confirmar Pedido**

**O que deve acontecer:**

✅ **Se tudo funcionar:**
- Pedido criado no WooCommerce
- Redireciona para página de pagamento do Mercado Pago
- Após pagar, volta para página de "Obrigado"

❌ **Se der erro:**
- Verifica console do navegador (F12)
- Verifica se URL no `.env` está correta
- Verifica se credenciais do Mercado Pago estão corretas no WordPress

### Teste 3: Verificar Pedido no WordPress

1. Acesse: `WordPress Admin → WooCommerce → Pedidos`
2. Veja se o pedido apareceu
3. Status deve ser: **Aguardando Pagamento**
4. Após pagar no Mercado Pago, status muda para: **Processando** ou **Concluído**

---

## 🔄 Fluxo Completo de Pagamento

### PIX:

```
1. Cliente clica "Confirmar Pedido" (React)
   ↓
2. React cria pedido no WooCommerce via API
   ↓
3. WooCommerce retorna payment_url
   ↓
4. React redireciona para payment_url (Mercado Pago)
   ↓
5. Cliente vê QR Code do PIX
   ↓
6. Cliente paga no app do banco
   ↓
7. Mercado Pago confirma pagamento (webhook)
   ↓
8. WooCommerce atualiza status do pedido
   ↓
9. WooCommerce envia e-mail com link de download
   ↓
10. Cliente acessa /area-membros para baixar planners
```

### Cartão de Crédito:

```
1. Cliente clica "Confirmar Pedido" (React)
   ↓
2. React cria pedido no WooCommerce via API
   ↓
3. WooCommerce retorna payment_url
   ↓
4. React redireciona para payment_url (Mercado Pago)
   ↓
5. Cliente preenche dados do cartão
   ↓
6. Mercado Pago processa pagamento
   ↓
7. Se aprovado: webhook confirma para WooCommerce
   ↓
8. WooCommerce atualiza status do pedido
   ↓
9. WooCommerce envia e-mail com link de download
   ↓
10. Cliente acessa /area-membros para baixar planners
```

---

## 📧 Passo 6: Configurar E-mails Automáticos

### E-mail de Confirmação

```
WooCommerce → Configurações → E-mails

1. "Pedido Completo" → Ativar
2. Assunto: "Seu pedido foi confirmado! 🎉"
3. Cabeçalho: "Obrigada pela compra!"
4. Template: Personalize com sua identidade visual
```

### E-mail com Link de Download

```
WooCommerce → Configurações → Produtos → Produtos para Download

- Conceder acesso para downloads após: "Pagamento"
- Limite de downloads: Ilimitado (ou 5 downloads)
- Expiração: Nunca (ou 365 dias)
```

---

## 🚀 Passo 7: Deploy para Produção

### Vercel (Frontend React)

1. Faça commit do código:
   ```bash
   git add .
   git commit -m "Integração WooCommerce + Mercado Pago"
   git push
   ```

2. No painel da Vercel:
   ```
   Settings → Environment Variables

   Adicione:
   VITE_WORDPRESS_URL = https://seu-wordpress.com.br
   VITE_WOOCOMMERCE_KEY = ck_0ca7afe4860326917d97a1ac0f05dd51fe342831
   VITE_WOOCOMMERCE_SECRET = cs_52676cc107ba49374bc3868d1744c1365550b599
   ```

3. Redeploy

### WordPress (Backend)

1. Desative "Modo de Teste" do Mercado Pago:
   ```
   WooCommerce → Configurações → Pagamentos → Mercado Pago
   - Modo de teste: ❌ Desativado
   - Usar credenciais de produção
   - Salvar
   ```

2. Configure SSL (HTTPS):
   ```
   Seu WordPress DEVE ter HTTPS ativo
   Verifique com sua hospedagem
   ```

---

## 🔐 Segurança

### ✅ Boas Práticas:

1. **NUNCA compartilhe:**
   - Consumer Key
   - Consumer Secret
   - Access Token do Mercado Pago

2. **Use HTTPS:**
   - WordPress: `https://seu-site.com.br`
   - React (Vercel): Automático ✅

3. **Proteja o arquivo .env:**
   ```
   .gitignore deve conter:
   .env
   .env.local
   .env.production
   ```

4. **Crie chaves específicas:**
   - Uma chave para desenvolvimento
   - Outra para produção
   - Revogue chaves antigas

---

## 🐛 Solução de Problemas

### Erro: "Erro ao buscar produtos"

**Causa:** URL do WordPress incorreta

**Solução:**
```env
# Verifique o arquivo .env
VITE_WORDPRESS_URL=https://seu-wordpress.com.br
# Sem barra no final!
```

### Erro: "401 Unauthorized"

**Causa:** Chaves da API incorretas

**Solução:**
```
1. WordPress Admin → WooCommerce → Configurações → Avançado → REST API
2. Verifique as chaves
3. Se necessário, gere novas chaves
4. Atualize o .env
```

### Erro: "Payment method not found"

**Causa:** Nome do método de pagamento incorreto

**Solução:**
```typescript
// Verifique em WooCommerce → Configurações → Pagamentos
// O "ID" do método deve corresponder ao usado no código

// Exemplos:
'woo-mercado-pago-basic'  // Checkout Pro
'woo-mercado-pago-pix'    // PIX
'woo-mercado-pago-custom' // Cartão
```

### Produtos não aparecem

**Causa:** Nenhum produto cadastrado no WooCommerce

**Solução:**
```
1. WordPress Admin → Produtos → Adicionar Novo
2. Crie pelo menos 1 produto de teste
3. Marque como "Produto Virtual" e "Para Download"
4. Publique
5. Recarregue a página /loja
```

---

## ✅ Checklist Final

Antes de colocar no ar, verifique:

- [ ] ✅ Arquivo `.env` configurado com URL do WordPress
- [ ] ✅ Plugin Mercado Pago instalado e ativado
- [ ] ✅ Credenciais do Mercado Pago configuradas
- [ ] ✅ Pelo menos 1 produto cadastrado
- [ ] ✅ Teste de compra realizado com sucesso
- [ ] ✅ E-mail de confirmação funcionando
- [ ] ✅ Downloads configurados
- [ ] ✅ SSL (HTTPS) ativo no WordPress
- [ ] ✅ Modo de teste desativado (produção)
- [ ] ✅ Variáveis de ambiente na Vercel configuradas

---

## 📞 Suporte

Se tiver dúvidas, é só me chamar! 💖

**Documentação Oficial:**
- WooCommerce API: https://woocommerce.github.io/woocommerce-rest-api-docs/
- Mercado Pago: https://www.mercadopago.com.br/developers/

---

**Criado em:** 29 de janeiro de 2026  
**Última atualização:** 29 de janeiro de 2026
