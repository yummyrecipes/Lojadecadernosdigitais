# 🎨 Guia: Header e Footer - Elementor

## ⚠️ IMPORTANTE: Você tem Elementor Gratuito

Como você **NÃO tem Elementor Pro**, o Theme Builder (Header/Footer customizados) **não está disponível**.

Mas não se preocupe! Vou te dar **2 soluções**:

---

## ✅ SOLUÇÃO 1: Usar Tema Compatível (RECOMENDADO)

Use um tema gratuito que permite customização de header/footer:

### **Opção A: Tema Astra (Recomendado)**

1. **Aparência → Temas → Adicionar Novo**
2. Buscar: **"Astra"**
3. **Instalar** e **Ativar**
4. Ir em: **Aparência → Personalizar**
5. Configurar:
   - **Header Builder** (arrastar logo, menu)
   - **Footer Builder** (adicionar widgets)

### **Opção B: Tema Hello Elementor**

1. Buscar: **"Hello Elementor"**
2. Instalar e ativar
3. Usar junto com plugin: **Header Footer Elementor** (gratuito)

---

## ✅ SOLUÇÃO 2: Plugin Header Footer Elementor (GRÁTIS)

Este plugin permite criar header/footer com Elementor GRATUITO!

### **Passo 1: Instalar Plugin**

1. **Plugins → Adicionar Novo**
2. Buscar: **"Header Footer Elementor"**
3. **Instalar Agora** → **Ativar**

### **Passo 2: Criar Header**

1. **Aparência → Header Footer Builder → Add New**
2. Título: **"Header Planner Fluxo"**
3. Type: **Header**
4. Display On: **Entire Website**
5. Clique em: **"Edit with Elementor"**

### **Passo 3: Construir Header**

#### **Estrutura:**

1. Adicionar seção, **2 colunas** (30% / 70%)
2. Configurar seção:
   - Background: **#FFFFFF**
   - Border Bottom: **2px solid #E89BB9**
   - Padding: **20px** (todos os lados)

#### **Coluna 1 - Logo:**

3. Widget **"Image"**
4. Upload sua logo
5. Width: **150px** (desktop), **100px** (mobile)
6. Link: `/`

#### **Coluna 2 - Menu:**

7. Widget **"HTML"**
8. **COPIE E COLE este código:**

```html
<style>
.planner-menu {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 35px;
  list-style: none;
  margin: 0;
  padding: 0;
}
.planner-menu li {
  margin: 0;
  padding: 0;
}
.planner-menu a {
  color: #2C1840;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s ease;
  position: relative;
}
.planner-menu a:hover {
  color: #E89BB9;
}
.planner-menu a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: #F5A962;
  transition: width 0.3s ease;
}
.planner-menu a:hover::after {
  width: 100%;
}

/* Mobile Menu */
.planner-menu-toggle {
  display: none;
  background: #E89BB9;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  float: right;
}
.planner-menu-toggle span {
  display: block;
  width: 25px;
  height: 3px;
  background: white;
  margin: 5px 0;
  border-radius: 2px;
}

@media (max-width: 768px) {
  .planner-menu {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    right: 20px;
    background: white;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    padding: 20px;
    border-radius: 10px;
    min-width: 200px;
    z-index: 1000;
  }
  .planner-menu.active {
    display: flex;
  }
  .planner-menu-toggle {
    display: block;
  }
  .planner-menu a::after {
    display: none;
  }
}
</style>

<button class="planner-menu-toggle" onclick="toggleMenu()">
  <span></span>
  <span></span>
  <span></span>
</button>

<ul class="planner-menu" id="plannerMenu">
  <li><a href="/#como-funciona">Como Funciona</a></li>
  <li><a href="/#relatos">Relatos</a></li>
  <li><a href="/#duvidas">Dúvidas</a></li>
  <li><a href="/loja">Loja</a></li>
  <li><a href="/quem-somos">Quem Somos</a></li>
  <li><a href="/blog">Blog</a></li>
  <li><a href="/contato">Contato</a></li>
</ul>

<script>
function toggleMenu() {
  var menu = document.getElementById('plannerMenu');
  menu.classList.toggle('active');
}

// Fechar menu ao clicar em um link
document.querySelectorAll('.planner-menu a').forEach(function(link) {
  link.addEventListener('click', function() {
    document.getElementById('plannerMenu').classList.remove('active');
  });
});

// Smooth scroll para links âncora
document.querySelectorAll('a[href^="/#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = this.getAttribute('href').substring(2);
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
</script>
```

9. **Publicar** o header

✅ **Header pronto com menu responsivo!**

---

### **Passo 4: Criar Footer**

1. **Aparência → Header Footer Builder → Add New**
2. Título: **"Footer Planner Fluxo"**
3. Type: **Footer**
4. Display On: **Entire Website**
5. Clique em: **"Edit with Elementor"**

### **Passo 5: Construir Footer**

#### **Seção 1 - Footer Principal:**

1. Nova seção, **4 colunas** (25% cada)
2. Background: **#E89BB9**
3. Padding: **60px** (top), **40px** (outros)

#### **COLUNA 1 - Logo + Descrição:**

4. Widget **"Image"**
   - Logo: **160px** width
   - **Margin Bottom: 0px** (IMPORTANTE!)

5. Widget **"Text Editor"**
   - Texto: `Transforme sua rotina com planners digitais elegantes e funcionais. Organização com estilo para mulheres que querem mais!`
   - Cor: **#FFFFFF**
   - Tamanho: **14px**
   - **Margin Top: 0px**

6. Widget **"HTML"** (Redes Sociais)

```html
<style>
.footer-social {
  display: flex;
  gap: 15px;
  margin-top: 15px;
}
.footer-social a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 50%;
  color: #E89BB9;
  font-size: 18px;
  transition: all 0.3s ease;
  text-decoration: none;
}
.footer-social a:hover {
  background: #F5A962;
  color: white;
  transform: translateY(-3px);
}
</style>

<div class="footer-social">
  <a href="https://instagram.com/seuinstagram" target="_blank" title="Instagram">
    <i class="fab fa-instagram"></i>
  </a>
  <a href="https://facebook.com/seufacebook" target="_blank" title="Facebook">
    <i class="fab fa-facebook-f"></i>
  </a>
  <a href="https://pinterest.com/seupinterest" target="_blank" title="Pinterest">
    <i class="fab fa-pinterest-p"></i>
  </a>
  <a href="https://wa.me/5511999999999" target="_blank" title="WhatsApp">
    <i class="fab fa-whatsapp"></i>
  </a>
</div>
```

#### **COLUNA 2 - Links Rápidos:**

7. Widget **"Heading"**
   - Texto: `Links Rápidos`
   - Cor: **#FFFFFF**
   - Tamanho: **18px**

8. Widget **"HTML"**

```html
<style>
.footer-menu {
  list-style: none;
  padding: 0;
  margin: 0;
}
.footer-menu li {
  margin-bottom: 12px;
}
.footer-menu a {
  color: white;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.3s ease;
  display: inline-block;
}
.footer-menu a:hover {
  color: #F5A962;
  padding-left: 5px;
}
</style>

<ul class="footer-menu">
  <li><a href="/">Início</a></li>
  <li><a href="/loja">Loja</a></li>
  <li><a href="/clube-freebies">Clube de Freebies</a></li>
  <li><a href="/afiliados">Programa de Afiliados</a></li>
  <li><a href="/blog">Blog</a></li>
</ul>
```

#### **COLUNA 3 - Institucional:**

9. Widget **"Heading"**
   - Texto: `Institucional`
   - Cor: **#FFFFFF**

10. Widget **"HTML"**

```html
<ul class="footer-menu">
  <li><a href="/quem-somos">Quem Somos</a></li>
  <li><a href="/contato">Contato</a></li>
  <li><a href="/#duvidas">Dúvidas Frequentes</a></li>
  <li><a href="/politica-privacidade">Política de Privacidade</a></li>
  <li><a href="/termos-uso">Termos de Uso</a></li>
</ul>
```

#### **COLUNA 4 - Contato:**

11. Widget **"Heading"**
    - Texto: `Fale Conosco`
    - Cor: **#FFFFFF**

12. Widget **"HTML"**

```html
<style>
.footer-contact {
  color: white;
  font-size: 14px;
  line-height: 1.8;
}
.footer-contact p {
  margin-bottom: 12px;
  display: flex;
  align-items: flex-start;
  gap: 10px;
}
.footer-contact i {
  color: #F5A962;
  margin-top: 3px;
  font-size: 16px;
}
.footer-contact a {
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
}
.footer-contact a:hover {
  color: #F5A962;
}
</style>

<div class="footer-contact">
  <p>
    <i class="fas fa-envelope"></i>
    <a href="mailto:contato@plannerfluxo.com.br">contato@plannerfluxo.com.br</a>
  </p>
  <p>
    <i class="fab fa-whatsapp"></i>
    <a href="https://wa.me/5511999999999" target="_blank">(11) 99999-9999</a>
  </p>
  <p>
    <i class="fab fa-instagram"></i>
    <a href="https://instagram.com/plannerfluxo" target="_blank">@plannerfluxo</a>
  </p>
  <p>
    <i class="fas fa-clock"></i>
    Seg-Sex: 9h às 18h
  </p>
</div>
```

#### **Seção 2 - Copyright:**

13. Nova seção, **1 coluna**
14. Background: **#2C1840**
15. Padding: **25px**

16. Widget **"Text Editor"**

```html
<p style="margin: 0; color: white; font-size: 14px; text-align: center;">
  © 2026 <strong>Planner Fluxo</strong>. Todos os direitos reservados. | Desenvolvido com 💖 para mulheres que querem organização com estilo.
</p>
```

17. **Publicar** o footer

✅ **Footer completo criado!**

---

## 📝 SUBSTITUIR INFORMAÇÕES

**No Header:**
- Logo (fazer upload da sua logo)

**No Footer:**
- Logo (mesma logo do header)
- Links das redes sociais
- E-mail de contato
- Número do WhatsApp
- Horário de atendimento

---

## 🎨 IMPORTANTE: Logo sem Espaço

**Para remover espaço entre logo e texto no footer:**

1. Editar widget da **Logo**
2. Aba **"Avançado"**
3. **Margin:**
   - Bottom: **0px**

4. Editar widget do **Texto** (abaixo da logo)
5. Aba **"Avançado"**
6. **Margin:**
   - Top: **0px**

✅ Agora não há espaço entre logo e texto!

---

## 🔧 STICKY HEADER (Header Fixo)

Se quiser que o header fique fixo ao rolar a página:

1. Editar seção do header
2. Aba **"Avançado"**
3. **Position:** Fixed
4. **Z-Index:** 999

⚠️ Atenção: Adicione padding-top na primeira seção da homepage para compensar!

---

## ✅ CHECKLIST

**Header:**
- [ ] Plugin "Header Footer Elementor" instalado
- [ ] Header criado e publicado
- [ ] Logo adicionada (150px)
- [ ] Menu com 7 links funcionando
- [ ] Menu mobile responsivo testado
- [ ] Links âncora funcionando (/#como-funciona)

**Footer:**
- [ ] Footer criado e publicado
- [ ] Logo sem espaço embaixo (margin: 0)
- [ ] 4 colunas configuradas
- [ ] Redes sociais funcionando
- [ ] Links de contato atualizados
- [ ] Copyright personalizado

---

## 📱 TESTAR RESPONSIVIDADE

No Elementor, clique nos ícones:
- 🖥️ Desktop
- 📱 Tablet
- 📱 Mobile

Ajuste conforme necessário!

---

## 🆘 ALTERNATIVA SIMPLES

Se tudo isso parecer complicado, use:

**Tema Astra** (gratuito) que já tem:
- Header builder visual
- Footer builder visual
- Compatível com Elementor
- Fácil de customizar

1. Instalar tema Astra
2. Ir em **Aparência → Personalizar**
3. Usar os builders visuais de Header/Footer

---

## 📦 RESUMO

**Você TEM Elementor Pro?** → Use os arquivos JSON que criei

**Você NÃO TEM Elementor Pro?** → Use:
1. Plugin "Header Footer Elementor" (gratuito) + seguir este guia
2. OU tema Astra (gratuito) com builder integrado

**Mais fácil:** Tema Astra ✅
**Mais customizável:** Plugin Header Footer Elementor + este guia ✅

---

Boa sorte! Qualquer dúvida, me chama! 🚀
