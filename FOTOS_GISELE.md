# Como Adicionar Fotos da Gisele na Página Sobre

A página "Sobre" (`/sobre`) foi atualizada para incluir uma seção especial sobre a Gisele Blak Bernat, com espaços para fotos.

## 📸 Fotos Necessárias

### 1. Foto Principal (Obrigatória)
- **Local**: `/public/images/gisele-principal.jpg`
- **Tamanho recomendado**: 400x533px (proporção 3:4)
- **Tipo**: Foto profissional de retrato
- **Descrição**: Foto principal para a seção de biografia

### 2. Galeria (4 fotos adicionais)
- **Local**: `/public/images/gisele-1.jpg` até `/public/images/gisele-4.jpg`
- **Tamanho recomendado**: 300x300px (quadrado)
- **Tipo**: Fotos de eventos, palestras, treinamentos, etc.
- **Descrição**: Galeria mostrando a Gisele em ação

### 3. Foto para a Seção de Contato (Opcional)
- **Local**: `/public/images/gisele-contato.jpg`
- **Tamanho recomendado**: 400x400px (quadrado)
- **Tipo**: Foto profissional
- **Descrição**: Usado na seção lateral de contato

## 🔧 Como Adicionar as Fotos

### Passo 1: Prepare as Imagens
1. Redimensione as fotos para os tamanhos recomendados
2. Otimize para web (use JPG com qualidade 80-90%)
3. Renomeie conforme especificado acima

### Passo 2: Faça Upload
Coloque as imagens na pasta `/public/images/` do projeto:

```bash
/public/images/
├── gisele-principal.jpg  # Foto principal (3:4)
├── gisele-1.jpg          # Galeria foto 1
├── gisele-2.jpg          # Galeria foto 2
├── gisele-3.jpg          # Galeria foto 3
└── gisele-4.jpg          # Galeria foto 4
```

### Passo 3: Ative as Imagens no Código
No arquivo `/app/sobre/page.tsx`, as imagens já estão configuradas mas comentadas. 

**Foto Principal (linha ~77):**
Descomente o código:
```tsx
<Image 
  src="/images/gisele-principal.jpg" 
  alt="Gisele Blak Bernat"
  width={400}
  height={533}
  className="w-full h-auto"
/>
```

**Galeria (linha ~161):**
Descomente o código:
```tsx
<Image 
  src={`/images/gisele-${i}.jpg`}
  alt={`Gisele Blak Bernat - Foto ${i}`}
  width={300}
  height={300}
  className="w-full h-full object-cover"
/>
```

E comente ou remova os placeholders (as divs com os ícones).

## 📝 Personalizando o Conteúdo

Além das fotos, você pode personalizar:

### Biografia (linhas 95-108)
Edite os parágrafos com a história e experiência da Gisele.

### Certificações (linhas 113-133)
Adicione ou remova itens da lista de certificações:
```tsx
<li className="flex items-start">
  <svg className="w-5 h-5 text-g2b-yellow mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
  <span>Nome da Certificação</span>
</li>
```

### Links de Redes Sociais (linhas 236-281)
Atualize os links do LinkedIn, Instagram, WhatsApp e email:
```tsx
href="https://www.linkedin.com/in/gisele-blak-bernat"  // Atualizar
href="https://www.instagram.com/g2b.treinamento"       // Atualizar
href="https://wa.me/5521999999999"                     // Atualizar com número real
```

## ✅ Checklist Final

- [ ] Upload da foto principal (`gisele-principal.jpg`)
- [ ] Upload das 4 fotos da galeria (`gisele-1.jpg` a `gisele-4.jpg`)
- [ ] Descomentar o código de imagem da foto principal
- [ ] Descomentar o código de imagem da galeria
- [ ] Remover/comentar os placeholders
- [ ] Atualizar biografia conforme necessário
- [ ] Verificar links das redes sociais
- [ ] Adicionar/remover certificações conforme necessário
- [ ] Testar a página em diferentes dispositivos

## 🎨 Dicas de Fotos

**Foto Principal:**
- Use uma foto profissional com fundo neutro
- A Gisele deve estar olhando para a câmera
- Boa iluminação e foco
- Roupas profissionais

**Galeria:**
- Mostre diversidade: palestras, treinamentos, reuniões
- Ação é melhor que poses estáticas
- Mix de fotos individuais e com clientes/alunos
- Boa qualidade de imagem

## 🔄 Após Adicionar as Fotos

1. Faça commit das imagens:
```bash
git add public/images/gisele-*.jpg
git commit -m "feat: Adiciona fotos da Gisele na página Sobre"
```

2. Faça commit das alterações no código (se modificou):
```bash
git add app/sobre/page.tsx
git commit -m "feat: Ativa exibição das fotos da Gisele"
```

3. Teste localmente:
```bash
npm run dev
# Acesse http://localhost:3000/sobre
```

4. Faça o build de produção:
```bash
npm run build
```

---

**Dúvidas?** Verifique se:
- As fotos estão no formato JPG ou PNG
- Os nomes dos arquivos estão exatamente como especificado (minúsculas)
- As fotos estão na pasta `/public/images/`
- O código foi descomentado corretamente
