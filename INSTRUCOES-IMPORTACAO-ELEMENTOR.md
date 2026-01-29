# 📋 Instruções para Importar Template no Elementor

## ✅ Pré-requisitos

1. **WordPress instalado** (via UIChemy)
2. **Elementor Pro** (versão 3.0+)
3. **WooCommerce** ativado
4. **Tema compatível** (Astra, Hello, OceanWP, etc.)

---

## 📥 Como Importar o Template JSON

### **Método 1: Importação Direta (Elementor Pro)**

1. Acesse seu **WordPress Admin**
2. Vá em: **Templates → Theme Builder → Adicionar Novo**
3. Escolha **"Importar Template"**
4. Clique em **"Escolher arquivo"**
5. Selecione o arquivo: `elementor-homepage-template.json`
6. Clique em **"Importar Agora"**

### **Método 2: Criar Página Manualmente**

Se a importação JSON não funcionar (algumas versões têm restrições), siga este guia:

1. **Crie uma Nova Página**
   - WordPress Admin → Páginas → Adicionar Nova
   - Título: "Home"
   - Clique em **"Editar com Elementor"**

2. **Configure Cores Globais**
   - No Elementor, clique no ☰ (menu hamburger)
   - Vá em: **Site Settings → Global Colors**
   - Adicione as cores:
     - **Rosa Principal**: `#E89BB9`
     - **Ouro**: `#F5A962`
     - **Roxo Escuro**: `#2C1840`
     - **Rosa Claro**: `#FFF5F8`

---

## 🎨 Seções da Homepage (Ordem de Criação)

### **1. Promo Bar (Topo)**
```
Tipo: Seção
Background: #2C1840
Padding: 12px (top/bottom)
Conteúdo: Heading com texto da oferta
Cor do texto: Branco (#FFFFFF)
Alinhamento: Centro
```

### **2. Header**
```
Tipo: Seção
Background: Branco (#FFFFFF)
Border Bottom: 2px solid #E89BB9
Position: Fixed (sticky)
Z-index: 999

Widgets:
- Image (Logo) - altura 150px
- Nav Menu (widget do Elementor Pro)
```

### **3. Hero Section**
```
Background: #FFF5F8
Padding: 100px (top/bottom), 20px (sides)

Widgets:
1. Heading: "Transforme sua rotina..."
   - Tamanho: 56px
   - Cor: #2C1840
   - Peso: Bold
   - Alinhamento: Centro

2. Text Editor: Subtítulo
   - Tamanho: 20px
   - Cor: #2C1840

3. Button: "Explorar Planners"
   - Background: #E89BB9
   - Texto: Branco
   - Border Radius: 50px
   - Padding: 20px 50px
   - Link: /loja
```

### **4. Como Funciona**
```
Background: Branco
ID da Seção: como-funciona (importante para links âncora!)
3 Colunas (33.33% cada)

Cada coluna:
- Icon Widget (Shopping Cart / Download / Tablet)
- Heading (título do passo)
- Text Editor (descrição)

Cores alternadas: #E89BB9 e #F5A962
```

### **5. Produtos Destaque**
```
Background: #FFF5F8

Widget especial:
- WooCommerce Products
- Configurações:
  * Columns: 4
  * Rows: 1
  * Order by: Popularity
  * Posts per page: 4
```

### **6. Relatos (WhatsApp)**
```
Background: #FFF5F8
ID da Seção: relatos

Widget: HTML
Cole o código HTML/CSS fornecido no JSON
(está na seção "relatos-html")

IMPORTANTE: O código CSS já está incluído!
```

### **7. Garantia**
```
Background: Branco
Padding: 80px

Widgets:
- Icon: Shield (#F5A962, 80px)
- Heading: "Garantia de 7 Dias"
- Text Editor: Descrição
```

### **8. FAQ/Dúvidas**
```
Background: #FFF5F8
ID da Seção: duvidas

Widget: Accordion
- 5 perguntas (fornecidas no JSON)
- Cor do título: #2C1840
- Cor ativa: #E89BB9
- Border: #E89BB9
```

### **9. CTA Final**
```
Background: Gradient
- Cor A: #E89BB9
- Cor B: #F5A962
- Ângulo: 135deg
Padding: 100px

Widgets:
- Heading (branco)
- Text Editor (branco)
- Button (branco com texto rosa)
```

---

## 🔧 Configurações Importantes

### **Header & Footer**

1. **Header**
   - Elementor Pro → Theme Builder → Header
   - Crie novo template de header
   - Logo grande: 120-150px
   - Menu: Como Funciona (/#como-funciona), Relatos (/#relatos), Dúvidas (/#duvidas)

2. **Footer**
   - Elementor Pro → Theme Builder → Footer
   - Logo grande: 160px
   - **SEM margin-bottom** entre logo e texto
   - Background: #E89BB9

### **Links Âncora (Scroll suave)**

Para os links do menu funcionarem (/#como-funciona, etc):

1. Cada seção deve ter um **ID HTML**:
   - Editar seção → Avançado → Atributos CSS → ID: `como-funciona`
   - Repetir para: `relatos`, `duvidas`

2. No menu, criar links:
   - `/#como-funciona`
   - `/#relatos`
   - `/#duvidas`

---

## 🖼️ Substituir Imagens

No código HTML dos relatos, substitua as URLs:
```
https://images.unsplash.com/photo-XXXX
```

Por suas próprias imagens (upload na Biblioteca de Mídia).

---

## 🛒 WooCommerce

### Configurar Produtos:

1. **WooCommerce → Produtos → Adicionar Produto**
2. Configurar como **Produto Digital**
3. Adicionar **Arquivo para Download** (PDF do planner)
4. Preço em **BRL (R$)**
5. Categorias: Planners, Agendas, etc.

### Gateway de Pagamento:

1. **WooCommerce → Configurações → Pagamentos**
2. Ativar:
   - **Mercado Pago** (parcelamento 4x)
   - **PIX** (via plugin)

---

## 📱 Responsividade

No Elementor, sempre testar em:
- Desktop (1920px)
- Tablet (768px)
- Mobile (360px)

Ajustar:
- Tamanhos de fonte
- Padding/margin
- Colunas (mobile = 100% width)

---

## ⚙️ Plugins Recomendados

1. **Elementor Pro** (obrigatório)
2. **WooCommerce**
3. **WooCommerce Digital Downloads**
4. **Mercado Pago for WooCommerce**
5. **PIX para WooCommerce**
6. **JWT Authentication** (área de membros)
7. **Elementor Custom Skin** (customizações)

---

## 🎯 Checklist Final

- [ ] Cores globais configuradas
- [ ] Logo importada (150px header, 160px footer)
- [ ] Menu com links âncora funcionando
- [ ] Seção WhatsApp com HTML/CSS correto
- [ ] WooCommerce produtos configurados
- [ ] Gateway de pagamento ativo
- [ ] Responsivo testado
- [ ] IDs das seções (como-funciona, relatos, duvidas)
- [ ] Promo bar no topo fixo
- [ ] Header sticky funcionando

---

## 🆘 Suporte

**Se algo não funcionar:**

1. Verifique versão do Elementor (mínimo 3.0)
2. Verifique tema compatível
3. Limpe cache (WP Rocket, Cloudflare, etc)
4. Recrie seções manualmente seguindo o guia

**Dúvidas sobre o JSON:**
- O arquivo JSON pode não funcionar em todas as versões do Elementor
- Neste caso, use o guia manual acima
- Cada seção está detalhada para recriação

---

## 📧 Próximos Passos

Após importar a Homepage, crie:
- Página de Loja (WooCommerce padrão)
- Página de Produto (Single Product)
- Página Quem Somos
- Página Blog
- Página Contato

Posso gerar templates JSON para essas também! 🚀
