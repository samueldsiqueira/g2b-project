# Redesign Moderno G2B

## Branch: redesign-modern

Este redesign foi inspirado em sites modernos como o [trentim.com](https://www.trentim.com/), com foco em:

## 🎨 Características do Novo Design

### 1. **Navegação com Scroll Suave**
- Header fixo que muda de estilo ao scrollar
- Navegação por tópicos que leva suavemente às seções
- Efeito de parallax no hero
- Indicador de scroll animado

### 2. **Carrosséis Interativos**
- Carousel de serviços usando Swiper.js
- Carousel de depoimentos de clientes
- Navegação por setas e paginação com bullets
- Autoplay configurável
- Responsivo em todos os dispositivos

### 3. **Animações Modernas**
- Animações com Framer Motion
- Efeitos de hover nos cards
- Transições suaves entre seções
- Elementos que aparecem ao scrollar (scroll reveal)

### 4. **Design Responsivo**
- Mobile-first approach
- Breakpoints otimizados
- Menu hambúrguer animado
- Cards que se adaptam ao tamanho da tela

## 🛠️ Tecnologias Adicionadas

- **Swiper.js** - Carrosséis modernos e responsivos
- **Framer Motion** - Animações fluidas e profissionais
- **React Icons** - Ícones vetoriais de alta qualidade
- **Inter Font** - Tipografia moderna e legível

## 📦 Componentes Criados

### ModernHeader.tsx
Header moderno com:
- Background transparente que muda ao scrollar
- Navegação por scroll suave
- Menu mobile animado
- Botões de CTA destacados

### ServicesCarousel.tsx
Carousel de serviços com:
- Cards animados
- Navegação por setas
- Paginação com bullets
- Autoplay
- Responsivo (1-3 slides por vez)

### TestimonialCarousel.tsx
Carousel de depoimentos com:
- Layout centralizado
- Fotos dos clientes (opcional)
- Citações destacadas
- Transições suaves

## 🎯 Seções da Nova Home

1. **Hero com Parallax**
   - Gradiente animado
   - Textos grandes e impactantes
   - 2 CTAs principais
   - Scroll indicator

2. **Stats Section**
   - 4 estatísticas principais
   - Números em destaque
   - Animação ao aparecer

3. **About Section**
   - Layout em 2 colunas
   - Imagens dos parceiros
   - Destaque para o motto
   - Animação de entrada

4. **Solutions Carousel**
   - Cards de serviços
   - Ícones personalizados
   - Cores diferentes por serviço
   - Links para páginas específicas

5. **Training Section**
   - Background gradient
   - Lista de benefícios
   - Visual moderno
   - CTA para capacitação

6. **Consulting Section**
   - Layout invertido
   - Lista de serviços
   - Cards interativos
   - CTA para assessoria

7. **Testimonials Carousel**
   - Depoimentos de clientes
   - Navegação automática
   - Design elegante

8. **Contact CTA**
   - Background gradient
   - Múltiplos CTAs (email e WhatsApp)
   - Botões animados

## 🚀 Como Visualizar

1. Certifique-se de estar na branch `redesign-modern`:
```bash
git branch
```

2. Instale as dependências (se necessário):
```bash
npm install
```

3. Execute em modo desenvolvimento:
```bash
npm run dev
```

4. Acesse: http://localhost:3000

## 📱 Responsividade

O design foi testado e otimizado para:
- Mobile (< 640px)
- Tablet (640px - 1024px)
- Desktop (> 1024px)

## 🎨 Paleta de Cores Mantida

- **Purple**: #6B46C1
- **Dark Purple**: #553C9A
- **Light Purple**: #9333EA
- **Yellow**: #F59E0B
- **Gray**: #535355

## 📝 Próximos Passos Sugeridos

1. **Adicionar imagens reais** nos carrosséis
2. **Criar depoimentos reais** de clientes
3. **Otimizar imagens** para web
4. **Adicionar mais animações** nas seções internas
5. **Implementar lazy loading** para melhor performance
6. **Adicionar Google Analytics** para tracking
7. **Testar em diferentes navegadores**

## 🔄 Para Voltar ao Design Antigo

Se precisar voltar ao design anterior:

```bash
# Trocar os arquivos
mv app/page.tsx app/page-modern.tsx
mv app/page-old.tsx app/page.tsx
```

## ⚙️ Build de Produção

Para gerar a build de produção:

```bash
npm run build
npm start
```

## 📄 Arquivos Modificados

- `app/page.tsx` - Nova home page
- `app/globals.css` - Estilos globais atualizados
- `components/ModernHeader.tsx` - Novo header
- `components/ServicesCarousel.tsx` - Carousel de serviços
- `components/TestimonialCarousel.tsx` - Carousel de depoimentos
- `package.json` - Novas dependências

## 🐛 Troubleshooting

Se encontrar problemas:

1. Limpe o cache do Next.js:
```bash
rm -rf .next
```

2. Reinstale as dependências:
```bash
rm -rf node_modules package-lock.json
npm install
```

3. Verifique se todas as imagens existem em `/public/images/`

---

**Desenvolvido com ❤️ para G2B**
