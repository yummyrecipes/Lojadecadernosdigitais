# 🚀 Guia Completo - Deploy na Vercel

## 📋 Pré-requisitos

Antes de começar, você precisa:

- ✅ Conta no GitHub (gratuita)
- ✅ Conta na Vercel (gratuita)
- ✅ Projeto funcionando localmente
- ✅ WordPress com WooCommerce configurado

---

## 🎯 OPÇÃO 1: Deploy Automático (Recomendado)

### **Passo 1: Criar Repositório no GitHub**

1. **Acesse:** https://github.com/new

2. **Configure:**
   ```
   Nome do repositório: planner-fluxo-loja
   Descrição: Loja de Planners Digitais
   Visibilidade: Privado (recomendado)
   ```

3. **Clique em:** `Create repository`

### **Passo 2: Conectar Projeto ao GitHub**

**No terminal, dentro da pasta do projeto:**

```bash
# Inicializar Git (se ainda não fez)
git init

# Adicionar todos os arquivos
git add .

# Fazer primeiro commit
git commit -m "Deploy inicial - Loja Planner Fluxo"

# Adicionar repositório remoto (SUBSTITUA pela sua URL)
git remote add origin https://github.com/SEU-USUARIO/planner-fluxo-loja.git

# Enviar para GitHub
git branch -M main
git push -u origin main
```

**⚠️ IMPORTANTE:** Substitua `SEU-USUARIO` pelo seu username do GitHub!

**Exemplo:**
```bash
git remote add origin https://github.com/maria123/planner-fluxo-loja.git
```

### **Passo 3: Importar na Vercel**

1. **Acesse:** https://vercel.com/login

2. **Faça login** (pode usar conta do GitHub)

3. **Clique em:** `Add New... → Project`

4. **Importe o repositório:**
   - Procure: `planner-fluxo-loja`
   - Clique em: `Import`

5. **Configure o projeto:**
   ```
   Framework Preset: Vite
   Root Directory: ./
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```

6. **NÃO clique em Deploy ainda!** → Vá para o Passo 4 primeiro

### **Passo 4: Adicionar Variáveis de Ambiente**

**ANTES de fazer deploy, adicione as variáveis:**

1. **Na tela de configuração da Vercel, role para baixo até:**
   ```
   Environment Variables
   ```

2. **Adicione as 3 variáveis:**

   **Variável 1:**
   ```
   Name: VITE_WORDPRESS_URL
   Value: https://SEU-WORDPRESS.com.br
   ```
   ✅ Marque: `Production`, `Preview`, `Development`

   **Variável 2:**
   ```
   Name: VITE_WOOCOMMERCE_KEY
   Value: ck_0ca7afe4860326917d97a1ac0f05dd51fe342831
   ```
   ✅ Marque: `Production`, `Preview`, `Development`

   **Variável 3:**
   ```
   Name: VITE_WOOCOMMERCE_SECRET
   Value: cs_52676cc107ba49374bc3868d1744c1365550b599
   ```
   ✅ Marque: `Production`, `Preview`, `Development`

3. **⚠️ IMPORTANTE:** Substitua `https://SEU-WORDPRESS.com.br` pela URL REAL do seu WordPress!

### **Passo 5: Deploy!**

1. **Clique em:** `Deploy`

2. **Aguarde** (2-3 minutos)

3. **Quando aparecer:** 🎉 **Congratulations!**

4. **Clique em:** `Visit` ou copie a URL

**Sua loja está no ar!** 🚀

---

## 🎯 OPÇÃO 2: Deploy Manual (CLI)

### **Passo 1: Instalar Vercel CLI**

```bash
npm install -g vercel
```

### **Passo 2: Login na Vercel**

```bash
vercel login
```

### **Passo 3: Deploy**

```bash
# Deploy para produção
vercel --prod
```

### **Passo 4: Adicionar Variáveis**

```bash
# Adicionar cada variável
vercel env add VITE_WORDPRESS_URL production
vercel env add VITE_WOOCOMMERCE_KEY production
vercel env add VITE_WOOCOMMERCE_SECRET production
```

### **Passo 5: Redeploy**

```bash
vercel --prod
```

---

## 🔧 Configuração das Variáveis de Ambiente

### **Suas credenciais:**

```env
VITE_WORDPRESS_URL=https://SEU-WORDPRESS.com.br
VITE_WOOCOMMERCE_KEY=ck_0ca7afe4860326917d97a1ac0f05dd51fe342831
VITE_WOOCOMMERCE_SECRET=cs_52676cc107ba49374bc3868d1744c1365550b599
```

### **Como adicionar depois do deploy:**

1. **Acesse:** https://vercel.com/dashboard

2. **Clique no projeto:** `planner-fluxo-loja`

3. **Vá em:** `Settings → Environment Variables`

4. **Clique em:** `Add New`

5. **Adicione as 3 variáveis** (veja Passo 4 da Opção 1)

6. **Redeploy:**
   - Vá em: `Deployments`
   - Clique nos `...` do último deploy
   - Clique em: `Redeploy`

---

## ✅ Verificar se Funcionou

### **Teste 1: Acessar o Site**

```
https://seu-projeto.vercel.app
```

**Deve abrir a home page** 🏠

### **Teste 2: Verificar Produtos**

```
https://seu-projeto.vercel.app/loja
```

**Se aparecer:**
- ✅ Banner verde: "Conectado ao WooCommerce" = **Funcionou!**
- ⚠️ Banner amarelo: "Modo demonstração" = **Faltou configurar variáveis**

### **Teste 3: Página de Teste**

```
https://seu-projeto.vercel.app/teste-conexao
```

**Deve mostrar:**
- ✅ Configuração
- ✅ Conexão WordPress
- ✅ Buscar Produtos

**Se tudo estiver verde = Sucesso!** 🎉

---

## 🔄 Como Atualizar Depois

### **Sempre que fizer mudanças no código:**

```bash
# 1. Adicionar mudanças
git add .

# 2. Fazer commit
git commit -m "Descrição da mudança"

# 3. Enviar para GitHub
git push

# 4. Vercel faz deploy automático!
```

**A Vercel detecta o push e faz deploy sozinha!** 🚀

---

## 🌐 Domínio Personalizado

### **Usar seu próprio domínio:**

1. **Na Vercel, vá em:** `Settings → Domains`

2. **Adicione seu domínio:**
   ```
   plannerfluxo.com.br
   ```

3. **Configure DNS** (na sua hospedagem de domínio):

   **Se usar Registro.br:**
   ```
   Tipo: CNAME
   Nome: @
   Valor: cname.vercel-dns.com
   ```

   **Se usar outro registrador:**
   - Siga as instruções que a Vercel mostra na tela

4. **Aguarde propagação** (até 48h, geralmente 1-2 horas)

5. **Pronto!** Seu site estará em `https://plannerfluxo.com.br`

---

## 📊 Checklist Completo

### **Antes do Deploy:**

- [ ] ✅ Projeto funcionando localmente
- [ ] ✅ Arquivo `.env` configurado (local)
- [ ] ✅ WordPress/WooCommerce funcionando
- [ ] ✅ Produtos cadastrados no WooCommerce
- [ ] ✅ Mercado Pago configurado
- [ ] ✅ Conta GitHub criada
- [ ] ✅ Conta Vercel criada

### **Durante o Deploy:**

- [ ] ✅ Código enviado para GitHub
- [ ] ✅ Projeto importado na Vercel
- [ ] ✅ Variáveis de ambiente adicionadas
- [ ] ✅ Deploy concluído

### **Depois do Deploy:**

- [ ] ✅ Site abre corretamente
- [ ] ✅ Produtos aparecem na loja
- [ ] ✅ Teste de conexão passou
- [ ] ✅ Checkout funcionando
- [ ] ✅ Teste de compra realizado

---

## ❓ Problemas Comuns

### **Erro: "Cannot find module"**

**Causa:** Dependências não instaladas

**Solução:**
```bash
# Na Vercel, vá em: Settings → General
# Build Command: npm install && npm run build
```

### **Erro: "Produtos não aparecem"**

**Causa:** Variáveis de ambiente não configuradas

**Solução:**
1. Vá em: `Settings → Environment Variables`
2. Adicione as 3 variáveis
3. Redeploy

### **Erro: "404 Not Found" em rotas**

**Causa:** Falta configuração de SPA

**Solução:**
✅ Já resolvido! O arquivo `vercel.json` já está configurado.

### **Erro: "Build failed"**

**Causa:** Erro no código

**Solução:**
1. Veja os logs de build na Vercel
2. Corrija o erro localmente
3. Faça push novamente

---

## 🎯 URLs Importantes

| O que | URL |
|-------|-----|
| **Dashboard Vercel** | https://vercel.com/dashboard |
| **Seu Projeto** | https://seu-projeto.vercel.app |
| **Loja** | https://seu-projeto.vercel.app/loja |
| **Teste Conexão** | https://seu-projeto.vercel.app/teste-conexao |
| **GitHub Repo** | https://github.com/SEU-USUARIO/planner-fluxo-loja |

---

## 📈 Performance

### **Otimizações automáticas da Vercel:**

- ✅ **CDN Global** - Site rápido em todo mundo
- ✅ **HTTPS Automático** - Certificado SSL grátis
- ✅ **Compression** - Gzip/Brotli automático
- ✅ **Cache Inteligente** - Assets otimizados
- ✅ **Preview Deployments** - Teste antes de publicar

---

## 🔐 Segurança

### **Boas práticas:**

1. **Nunca commite o arquivo `.env`**
   - ✅ Já protegido pelo `.gitignore`

2. **Use variáveis de ambiente na Vercel**
   - ✅ Credenciais seguras

3. **Repositório privado no GitHub**
   - ✅ Código protegido

4. **HTTPS ativo**
   - ✅ Automático na Vercel

---

## 💰 Custos

### **Plano Free da Vercel inclui:**

- ✅ Deploy ilimitado
- ✅ Domínio `.vercel.app` grátis
- ✅ HTTPS automático
- ✅ 100GB bandwidth/mês
- ✅ 100 builds/dia

**Suficiente para começar a vender!** 🎉

**Upgrade necessário quando:**
- Mais de 100GB de tráfego/mês
- Múltiplos domínios personalizados
- Analytics avançado

---

## 🎊 Próximos Passos

Depois do deploy:

1. ✅ **Teste tudo** - Navegue pelo site
2. ✅ **Faça uma compra de teste** - Verifique fluxo completo
3. ✅ **Configure domínio personalizado** (opcional)
4. ✅ **Compartilhe o link** - Comece a divulgar!
5. ✅ **Configure Google Analytics** (opcional)
6. ✅ **Ative Pixel do Facebook** (opcional)

---

## 📞 Precisa de Ajuda?

**Documentação Vercel:**
- https://vercel.com/docs

**Suporte:**
- Discord da Vercel
- Twitter: @vercel

---

**Criado em:** 29 de janeiro de 2026  
**Status:** ✅ Pronto para Deploy  
**Tempo estimado:** 10-15 minutos
