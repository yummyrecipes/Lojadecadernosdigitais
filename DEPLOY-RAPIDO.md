# ⚡ Deploy Rápido - 5 Minutos

## 🎯 Passo a Passo Simplificado

### **1️⃣ Criar conta na Vercel**
👉 https://vercel.com/signup  
✅ Use sua conta do GitHub

### **2️⃣ Criar repositório no GitHub**
👉 https://github.com/new  
```
Nome: planner-fluxo-loja
Visibilidade: Privado
```

### **3️⃣ Enviar código para GitHub**

Abra o terminal na pasta do projeto:

```bash
git init
git add .
git commit -m "Deploy inicial"
git remote add origin https://github.com/SEU-USUARIO/planner-fluxo-loja.git
git branch -M main
git push -u origin main
```

**⚠️ Substitua `SEU-USUARIO` pelo seu username do GitHub!**

### **4️⃣ Importar na Vercel**

1. Acesse: https://vercel.com/new
2. Clique em: `Import Git Repository`
3. Selecione: `planner-fluxo-loja`
4. Clique em: `Import`

### **5️⃣ Adicionar Variáveis de Ambiente**

**ANTES de clicar em Deploy, adicione:**

```
Name: VITE_WORDPRESS_URL
Value: https://SEU-WORDPRESS.com.br
Environment: Production, Preview, Development
```

```
Name: VITE_WOOCOMMERCE_KEY
Value: ck_0ca7afe4860326917d97a1ac0f05dd51fe342831
Environment: Production, Preview, Development
```

```
Name: VITE_WOOCOMMERCE_SECRET
Value: cs_52676cc107ba49374bc3868d1744c1365550b599
Environment: Production, Preview, Development
```

**⚠️ Substitua a URL do WordPress pela sua URL real!**

### **6️⃣ Deploy!**

Clique em: **Deploy**

Aguarde 2-3 minutos... 🚀

### **7️⃣ Testar**

Acesse: `https://seu-projeto.vercel.app/teste-conexao`

Se tudo estiver ✅ verde = **Sucesso!** 🎉

---

## 🔄 Como Atualizar Depois

```bash
git add .
git commit -m "Atualização"
git push
```

**Vercel faz deploy automático!** ✨

---

## ❓ Deu Erro?

### Produtos não aparecem?

1. Vá em: `Settings → Environment Variables` na Vercel
2. Verifique se as 3 variáveis estão lá
3. Clique em: `Redeploy`

### Site não abre?

Aguarde 1-2 minutos. Deploy pode demorar um pouco.

### Outra coisa?

Veja o guia completo: `/GUIA-DEPLOY-VERCEL.md`

---

## ✅ Checklist

- [ ] Conta Vercel criada
- [ ] Conta GitHub criada
- [ ] Código enviado para GitHub
- [ ] Projeto importado na Vercel
- [ ] 3 variáveis adicionadas
- [ ] Deploy concluído
- [ ] Site abre corretamente
- [ ] Teste de conexão passou

**Pronto!** Sua loja está no ar! 🎊
