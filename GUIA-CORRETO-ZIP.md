# 🔧 COMO CRIAR O ZIP CORRETAMENTE

## ❌ PROBLEMA QUE VOCÊ TEVE:

Você provavelmente fez assim:
1. Clicou com botão direito na pasta `wordpress-theme`
2. Selecionou "Comprimir" ou "Zipar"
3. Criou um arquivo `wordpress-theme.zip`

**Isso está ERRADO!** ❌

O WordPress procura o arquivo `style.css` na raiz do ZIP, mas ele está dentro de uma pasta!

---

## ✅ FORMA CORRETA (3 MÉTODOS):

### **MÉTODO 1: Manualmente (RECOMENDADO)**

#### **Windows:**
1. **ABRA** a pasta `wordpress-theme`
2. **SELECIONE TODOS os arquivos** dentro (Ctrl+A):
   - style.css
   - functions.php
   - index.php
   - header.php
   - footer.php
   - page.php
   - single.php
   - readme.txt
   - screenshot.png
   - pasta `js/`
   - pasta `template-parts/`
3. Clique com botão direito → **Enviar para → Pasta compactada (zipada)**
4. Renomeie para: `planner-fluxo.zip`

#### **Mac:**
1. **ABRA** a pasta `wordpress-theme`
2. **SELECIONE TODOS os arquivos** dentro (Cmd+A)
3. Clique com botão direito → **Comprimir 11 itens**
4. Renomeie para: `planner-fluxo.zip`

#### **Linux:**
```bash
cd wordpress-theme
zip -r ../planner-fluxo.zip .
```

---

### **MÉTODO 2: Arrastar e Soltar**

1. Crie uma NOVA pasta vazia: `planner-fluxo`
2. **COPIE** todos os arquivos de `wordpress-theme` para `planner-fluxo`:
   - style.css
   - functions.php
   - index.php
   - header.php
   - footer.php
   - page.php
   - single.php
   - readme.txt
   - screenshot.png
   - pasta `js/`
   - pasta `template-parts/`
3. Agora zipe a pasta `planner-fluxo`
4. Renomeie para: `planner-fluxo.zip`

---

### **MÉTODO 3: Ferramenta Online**

1. Vá em: https://www.ezyzip.com/
2. Clique em "Select files to archive"
3. Selecione TODOS os arquivos dentro de `wordpress-theme`
4. Clique em "Zip Files"
5. Download do arquivo ZIP

---

## 🔍 COMO VERIFICAR SE ESTÁ CORRETO:

Depois de criar o ZIP, **ABRA ELE** (não extraia, apenas visualize):

### ✅ CORRETO:
```
planner-fluxo.zip
├── style.css          ← DEVE estar na raiz!
├── functions.php
├── index.php
├── header.php
├── footer.php
├── page.php
├── single.php
├── readme.txt
├── screenshot.png
├── js/
│   ├── navigation.js
│   └── smooth-scroll.js
└── template-parts/
    ├── content.php
    └── content-none.php
```

### ❌ ERRADO:
```
wordpress-theme.zip
└── wordpress-theme/        ← Pasta extra! ERRADO!
    ├── style.css
    ├── functions.php
    └── ...
```

---

## 📦 FAZER UPLOAD NO WORDPRESS:

Agora que o ZIP está correto:

1. **WordPress Admin** → **Aparência** → **Temas**
2. Clique em **"Adicionar Novo"**
3. Clique em **"Enviar Tema"**
4. Clique em **"Escolher arquivo"**
5. Selecione: **planner-fluxo.zip**
6. Clique em **"Instalar Agora"**
7. Aguarde... ✅ **"Tema instalado com sucesso!"**
8. Clique em **"Ativar"**

---

## 🎯 SE VOCÊ JÁ FEZ UPLOAD ERRADO:

### **Solução Rápida:**

1. **Desativar e deletar** o tema atual (não vai perder dados)
2. **Criar o ZIP CORRETO** seguindo o método acima
3. **Fazer upload** novamente
4. **Ativar**

---

## ✅ DEPOIS DE ATIVAR:

Seu site deve mostrar:

### **Header:**
- Nome do site "Planner Fluxo" (em rosa, clicável)
- Menu: Início | Loja | Quem Somos | Blog | Contato
- Fundo branco com borda rosa embaixo

### **Footer:**
- Fundo rosa (#E89BB9)
- 4 colunas com:
  - Coluna 1: Logo + descrição + redes sociais
  - Coluna 2: Links rápidos
  - Coluna 3: Institucional
  - Coluna 4: Contato
- Copyright embaixo (fundo roxo escuro)

### **Conteúdo:**
- Se não tiver posts/páginas: Mensagem "Nada Encontrado"
- Se tiver posts: Lista de posts com imagem + título + excerpt

---

## 🔧 PRÓXIMOS PASSOS:

Depois que o tema estiver ativado corretamente:

### **1. Adicionar Logo:**
1. **Aparência → Personalizar**
2. **Identidade do Site → Logo**
3. Fazer upload da sua logo (PNG 400x150px)
4. **Publicar**

### **2. Criar Menu:**
1. **Aparência → Menus**
2. Criar novo: **"Menu Principal"**
3. Adicionar páginas/links customizados
4. Marcar: **"Primary Menu"**
5. Salvar

### **3. Criar Páginas:**
1. **Páginas → Adicionar Nova**
2. Criar: Início, Loja, Quem Somos, Blog, Contato
3. Usar **Elementor** para construir as páginas

### **4. Definir Página Inicial:**
1. **Configurações → Leitura**
2. Marcar: **"Uma página estática"**
3. **Página inicial:** Selecionar "Início"
4. **Página de posts:** Selecionar "Blog"
5. Salvar

---

## 🆘 AINDA COM PROBLEMA?

Se depois de fazer o upload correto ainda aparecer tela branca:

### **Checklist:**

- [ ] ZIP contém `style.css` na raiz?
- [ ] ZIP contém `functions.php` na raiz?
- [ ] Ativou o tema depois de instalar?
- [ ] Tem pelo menos 1 página ou post criado?
- [ ] Está usando WordPress 5.8 ou superior?
- [ ] Está usando PHP 7.4 ou superior?

### **Ver Erros:**

1. **Ferramentas → Saúde do site**
2. Ver se tem algum erro

### **Cache:**

1. Limpar cache do navegador (Ctrl+Shift+Delete)
2. Se tiver plugin de cache, limpar também
3. Tentar em navegação anônima

---

## 📁 LISTA COMPLETA DE ARQUIVOS:

Seu ZIP deve conter exatamente:

```
✅ style.css (OBRIGATÓRIO - info do tema + CSS)
✅ functions.php (OBRIGATÓRIO - funcionalidades)
✅ index.php (OBRIGATÓRIO - template principal)
✅ header.php (cabeçalho)
✅ footer.php (rodapé)
✅ page.php (páginas)
✅ single.php (posts)
✅ readme.txt (documentação)
✅ screenshot.png (preview do tema)
✅ js/navigation.js (menu mobile)
✅ js/smooth-scroll.js (scroll suave)
✅ template-parts/content.php (loop posts)
✅ template-parts/content-none.php (sem resultados)
```

Total: **12 arquivos**

---

## 💡 DICA FINAL:

Se estiver com muita dificuldade para criar o ZIP:

**Use WinRAR ou 7-Zip:**

1. Baixar: https://www.7-zip.org/
2. Instalar
3. Entrar na pasta `wordpress-theme`
4. Selecionar todos os arquivos
5. Botão direito → **7-Zip → Adicionar ao arquivo...**
6. Nome: `planner-fluxo.zip`
7. Formato: **ZIP**
8. OK

✅ **Pronto!**

---

## 🎉 RESUMO:

1. ✅ **ABRIR** a pasta `wordpress-theme`
2. ✅ **SELECIONAR TUDO** dentro (Ctrl+A ou Cmd+A)
3. ✅ **ZIPAR** os arquivos selecionados
4. ✅ **VERIFICAR** se style.css está na raiz do ZIP
5. ✅ **FAZER UPLOAD** no WordPress
6. ✅ **ATIVAR** o tema

**NÃO zipe a pasta inteira! Apenas os arquivos dentro!**

---

Agora sim vai funcionar! 🚀💖
