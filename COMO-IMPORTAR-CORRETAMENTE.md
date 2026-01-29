# ⚠️ IMPORTANTE: Como Importar os Templates CORRETAMENTE

## ❌ ERRO COMUM

**NÃO faça upload em:** Aparência → Temas
**Motivo:** Os arquivos JSON NÃO são temas WordPress, são templates do Elementor!

---

## ✅ CAMINHO CORRETO

### **Pré-requisitos OBRIGATÓRIOS:**

Antes de importar, você PRECISA ter instalado:

1. ✅ **WordPress** (já tem ✓)
2. ✅ **Elementor** (plugin gratuito)
3. ✅ **Elementor Pro** (versão paga - NECESSÁRIO)
4. ✅ **WooCommerce** (para loja)

---

## 📥 PASSO A PASSO CORRETO

### **Opção 1: Importar Template JSON (Elementor Pro)**

1. **Vá em:** WordPress Admin
2. **Clique em:** Páginas → Adicionar Nova
3. **Título:** "Início" (ou nome da página)
4. **Clique em:** "Editar com Elementor" (botão azul)
5. **No Elementor:** Clique no ícone de **pasta 📁** (canto superior esquerdo)
6. **Clique em:** "Importar Template"
7. **Escolha o arquivo:** `elementor-homepage-template.json`
8. **Clique em:** "Importar Agora"
9. **Pronto!** O template será carregado

### **Opção 2: Criar Páginas Manualmente (se não tiver Elementor Pro)**

Se você **NÃO tem Elementor Pro**, siga este caminho:

1. **Páginas → Adicionar Nova**
2. **Clique em:** "Editar com Elementor"
3. **Crie as seções manualmente** seguindo o guia abaixo

---

## 🛠️ INSTALAR ELEMENTOR (se ainda não tiver)

### **1. Instalar Elementor (Gratuito)**

1. WordPress Admin → **Plugins → Adicionar Novo**
2. Buscar: **"Elementor"**
3. Clicar em **"Instalar Agora"**
4. Clicar em **"Ativar"**

### **2. Instalar Elementor Pro (Pago)**

**Opção A - Se você tem licença:**
1. Baixe o plugin no site do Elementor
2. WordPress Admin → **Plugins → Adicionar Novo → Enviar Plugin**
3. Faça upload do arquivo `.zip`
4. Ative o plugin

**Opção B - Se NÃO tem licença:**
- Compre em: https://elementor.com/pricing/
- OU use a Opção 2 (criação manual)

---

## 📋 GUIA DE CRIAÇÃO MANUAL (SEM ELEMENTOR PRO)

Se você não tem Elementor Pro, vou te ensinar a recriar cada página manualmente:

### **HOMEPAGE - Seção por Seção**

#### **Seção 1: Promo Bar**

1. No Elementor, clique em **"+"** (adicionar seção)
2. Escolha **1 coluna**
3. **Configurações da Seção:**
   - Background: `#2C1840` (roxo escuro)
   - Padding: 12px (top/bottom)
4. Adicionar widget **"Heading"**
   - Texto: "🎉 OFERTA ESPECIAL: 40% OFF em todos os planners digitais! Use o cupom: FLUXO40"
   - Cor: Branco (#FFFFFF)
   - Alinhamento: Centro
   - Tamanho: 14px

#### **Seção 2: Hero**

1. Adicionar nova seção, **1 coluna**
2. **Configurações da Seção:**
   - Background: `#FFF5F8` (rosa claro)
   - Padding: 100px (top/bottom)
3. Adicionar widget **"Heading"**
   - Texto: "Transforme sua rotina com planners digitais que realmente funcionam ✨"
   - Cor: `#2C1840`
   - Tamanho: 56px
   - Alinhamento: Centro
   - Peso: Bold
4. Adicionar widget **"Text Editor"**
   - Texto: "Planners digitais elegantes e funcionais para mulheres que querem organização com estilo. Use no iPad, tablet ou celular!"
   - Cor: `#2C1840`
   - Tamanho: 20px
   - Alinhamento: Centro
5. Adicionar widget **"Button"**
   - Texto: "Explorar Planners"
   - Link: /loja
   - Background: `#E89BB9`
   - Cor do texto: Branco
   - Border Radius: 50px
   - Padding: 20px 50px
   - Alinhamento: Centro

#### **Seção 3: Como Funciona**

1. Adicionar nova seção, **3 colunas**
2. **Configurações da Seção:**
   - Background: Branco
   - Padding: 80px (top/bottom)
   - **IMPORTANTE:** Em "Avançado → Atributos CSS", adicionar:
     - **ID CSS:** `como-funciona` (para links âncora funcionarem!)

**Header (acima das 3 colunas):**
3. Adicionar widget **"Heading"** na primeira linha
   - Texto: "Como Funciona"
   - Tamanho: 48px
   - Alinhamento: Centro
   - Cor: `#2C1840`

**Coluna 1:**
4. Widget **"Icon"**
   - Ícone: Shopping Cart (FontAwesome)
   - Cor: `#E89BB9`
   - Tamanho: 64px
   - Alinhamento: Centro
5. Widget **"Heading"**
   - Texto: "1. Escolha seu Planner"
   - Tamanho: 24px
   - Alinhamento: Centro
6. Widget **"Text Editor"**
   - Texto: "Navegue pela nossa coleção e escolha o planner perfeito para suas necessidades"
   - Alinhamento: Centro

**Coluna 2:**
7. Widget **"Icon"**
   - Ícone: Download
   - Cor: `#F5A962`
   - Tamanho: 64px
8. Widget **"Heading"**
   - Texto: "2. Baixe Instantaneamente"
9. Widget **"Text Editor"**
   - Texto: "Após a compra, receba o link de download imediatamente no seu e-mail"

**Coluna 3:**
10. Widget **"Icon"**
    - Ícone: Tablet
    - Cor: `#E89BB9`
    - Tamanho: 64px
11. Widget **"Heading"**
    - Texto: "3. Use e Personalize"
12. Widget **"Text Editor"**
    - Texto: "Abra no seu app favorito (GoodNotes, Notability, etc) e comece a organizar sua vida!"

#### **Seção 4: Produtos WooCommerce**

1. Adicionar nova seção, **1 coluna**
2. Background: `#FFF5F8`
3. Widget **"Heading"**
   - Texto: "Planners em Destaque"
   - Tamanho: 48px
   - Alinhamento: Centro
4. Widget **"Products"** (WooCommerce)
   - **IMPORTANTE:** Este widget só aparece se WooCommerce estiver instalado!
   - Columns: 4
   - Rows: 1
   - Order by: Popularity

#### **Seção 5: Relatos WhatsApp**

1. Adicionar nova seção, **1 coluna**
2. **ID CSS:** `relatos`
3. Background: `#FFF5F8`
4. Widget **"Heading"**
   - Texto: "Relatos de quem já transformou a rotina 💬"
5. Widget **"HTML"**
   - Cole o código completo que vou fornecer abaixo

**CÓDIGO HTML DOS RELATOS:**

```html
<style>
.whatsapp-card {
  background: white;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  border: 2px solid #E5DDD5;
  margin-bottom: 30px;
}
.whatsapp-header {
  background: #075E54;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  gap: 12px;
}
.whatsapp-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 2px solid white;
  object-fit: cover;
}
.whatsapp-name {
  color: white;
  font-weight: 700;
  font-size: 16px;
  margin: 0;
}
.whatsapp-status {
  color: rgba(255,255,255,0.8);
  font-size: 12px;
  margin: 0;
}
.whatsapp-messages {
  background: #E5DDD5;
  padding: 24px;
  min-height: 280px;
}
.whatsapp-bubble {
  background: #DCF8C6;
  padding: 12px 16px;
  border-radius: 16px;
  border-top-right-radius: 4px;
  margin-bottom: 12px;
  max-width: 85%;
  margin-left: auto;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
.whatsapp-text {
  color: #303030;
  font-size: 14px;
  line-height: 1.6;
  margin: 0;
}
.whatsapp-time {
  color: #667781;
  font-size: 11px;
  text-align: right;
  margin-top: 4px;
}
.whatsapp-role {
  background: white;
  padding: 12px 24px;
  border-top: 2px solid #E5DDD5;
  text-align: center;
  color: #E89BB9;
  font-weight: 600;
  font-size: 14px;
}
.relatos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}
</style>

<div class="relatos-grid">
  <div class="whatsapp-card">
    <div class="whatsapp-header">
      <img class="whatsapp-avatar" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" alt="Mariana">
      <div>
        <p class="whatsapp-name">Mariana Silva</p>
        <p class="whatsapp-status">online</p>
      </div>
    </div>
    <div class="whatsapp-messages">
      <div class="whatsapp-bubble">
        <p class="whatsapp-text">Melhor planner digital que já usei! 😍</p>
        <p class="whatsapp-time">14:32</p>
      </div>
      <div class="whatsapp-bubble">
        <p class="whatsapp-text">Mudou completamente minha organização. Consigo acompanhar metas de forma visual 📱✨</p>
        <p class="whatsapp-time">14:32</p>
      </div>
      <div class="whatsapp-bubble">
        <p class="whatsapp-text">Recomendo muito! 💕</p>
        <p class="whatsapp-time">14:33</p>
      </div>
    </div>
    <div class="whatsapp-role">Empresária</div>
  </div>

  <div class="whatsapp-card">
    <div class="whatsapp-header">
      <img class="whatsapp-avatar" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100" alt="Ana">
      <div>
        <p class="whatsapp-name">Ana Carolina</p>
        <p class="whatsapp-status">online</p>
      </div>
    </div>
    <div class="whatsapp-messages">
      <div class="whatsapp-bubble">
        <p class="whatsapp-text">As páginas são lindas e super funcionais! 🎉</p>
        <p class="whatsapp-time">16:45</p>
      </div>
      <div class="whatsapp-bubble">
        <p class="whatsapp-text">O design é impecável. Uso todos os dias no iPad! 📱</p>
        <p class="whatsapp-time">16:45</p>
      </div>
      <div class="whatsapp-bubble">
        <p class="whatsapp-text">Vale MUITO a pena! ❤️</p>
        <p class="whatsapp-time">16:46</p>
      </div>
    </div>
    <div class="whatsapp-role">Estudante de Medicina</div>
  </div>

  <div class="whatsapp-card">
    <div class="whatsapp-header">
      <img class="whatsapp-avatar" src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100" alt="Juliana">
      <div>
        <p class="whatsapp-name">Juliana Mendes</p>
        <p class="whatsapp-status">online</p>
      </div>
    </div>
    <div class="whatsapp-messages">
      <div class="whatsapp-bubble">
        <p class="whatsapp-text">Esse planner é PERFEITO! 😱</p>
        <p class="whatsapp-time">10:15</p>
      </div>
      <div class="whatsapp-bubble">
        <p class="whatsapp-text">Estou conseguindo alcançar minhas metas! 🎯</p>
        <p class="whatsapp-time">10:15</p>
      </div>
      <div class="whatsapp-bubble">
        <p class="whatsapp-text">Nunca fui tão produtiva! 💪✨</p>
        <p class="whatsapp-time">10:16</p>
      </div>
    </div>
    <div class="whatsapp-role">Designer Gráfica</div>
  </div>
</div>
```

#### **Seção 6: FAQ/Dúvidas**

1. Adicionar nova seção, **1 coluna**
2. **ID CSS:** `duvidas`
3. Background: `#FFF5F8`
4. Widget **"Heading"**
   - Texto: "Dúvidas Frequentes"
5. Widget **"Accordion"**
   - Adicionar 5 itens com as perguntas/respostas
   - Cores: Border `#E89BB9`, Ativo `#E89BB9`

#### **Seção 7: CTA Final**

1. Adicionar seção, **1 coluna**
2. Background: Gradient
   - Cor A: `#E89BB9`
   - Cor B: `#F5A962`
   - Ângulo: 135deg
3. Widget **"Heading"**
   - Texto: "Pronta para Transformar sua Rotina?"
   - Cor: Branco
   - Tamanho: 48px
4. Widget **"Text Editor"**
   - Texto: "Junte-se a milhares de mulheres..."
   - Cor: Branco
5. Widget **"Button"**
   - Texto: "Começar Agora"
   - Background: Branco
   - Cor do texto: `#E89BB9`

---

## 🎨 CONFIGURAR CORES GLOBAIS

Para facilitar, configure cores globais:

1. No Elementor, clique no **☰** (menu hamburger)
2. Vá em: **Site Settings → Global Colors**
3. Adicione:
   - **Primary:** `#E89BB9` (rosa)
   - **Secondary:** `#F5A962` (ouro)
   - **Text:** `#2C1840` (roxo escuro)
   - **Accent:** `#FFF5F8` (rosa claro)

Agora você pode usar "Primary" em vez de digitar o código hex!

---

## 🛒 INSTALAR WOOCOMMERCE

1. WordPress Admin → **Plugins → Adicionar Novo**
2. Buscar: **"WooCommerce"**
3. **Instalar Agora** → **Ativar**
4. Seguir o wizard de configuração
5. Configurar moeda: **BRL (R$)**
6. País: **Brasil**

---

## ✅ CHECKLIST RÁPIDO

Antes de começar:
- [ ] WordPress instalado
- [ ] Elementor instalado e ativado
- [ ] WooCommerce instalado (para loja)
- [ ] Cores globais configuradas

Para importar JSON:
- [ ] Elementor Pro instalado (necessário!)
- [ ] Ir em Páginas → Adicionar Nova
- [ ] Editar com Elementor
- [ ] Importar Template (ícone de pasta)

Para criar manual:
- [ ] Seguir guia seção por seção
- [ ] Copiar código HTML dos relatos
- [ ] Adicionar IDs nas seções (como-funciona, relatos, duvidas)

---

## 🎯 RESUMO

**SE VOCÊ TEM ELEMENTOR PRO:**
→ Páginas → Nova → Editar com Elementor → Importar Template → Escolher JSON

**SE VOCÊ NÃO TEM ELEMENTOR PRO:**
→ Páginas → Nova → Editar com Elementor → Criar seções manualmente seguindo este guia

**NUNCA:**
❌ Aparência → Temas (isso é para temas, não templates!)

---

## 📞 Próximos Passos

1. Instale Elementor (se não tiver)
2. Crie a primeira página (Homepage)
3. Teste se funcionou
4. Repita para as outras páginas
5. Configure WooCommerce
6. Adicione produtos

Boa sorte! 🚀
