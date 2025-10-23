# Botão "Voltar ao Topo" (Scroll to Top)

## 📍 Localização

O botão "Voltar ao Topo" foi adicionado ao site e aparece em todas as páginas.

**Arquivo:** `/components/ScrollToTop.tsx`

## ✨ Características

### Comportamento
- ✅ **Aparece automaticamente** quando você rola mais de 300px para baixo
- ✅ **Desaparece suavemente** quando está no topo da página
- ✅ **Animação smooth** ao clicar para voltar ao topo
- ✅ **Efeitos hover** interativos

### Design
- 🎨 **Cores da marca**: Roxo G2B (`g2b-purple`)
- 🎯 **Posicionamento**: Canto inferior direito, acima do WhatsApp
- ⚡ **Animações**: Fade in/out com Framer Motion
- 💫 **Efeitos**: Pulso animado, scale no hover, seta que sobe

### Acessibilidade
- ♿ **ARIA label**: "Voltar ao topo"
- 🔍 **Title tooltip**: Mostra "Voltar ao topo" ao passar o mouse
- ⌨️ **Teclado**: Acessível via teclado

## 📐 Posicionamento

```
Tela:
┌─────────────────────────┐
│                         │
│      Conteúdo           │
│                         │
│                    ↑    │ <- Scroll to Top (bottom-24 right-6)
│                   💬    │ <- WhatsApp (bottom-6 right-6)
└─────────────────────────┘
```

O botão fica:
- **Vertical**: `bottom-24` (6rem do fundo) - acima do WhatsApp
- **Horizontal**: `right-6` (1.5rem da direita) - alinhado com o WhatsApp

## 🎨 Personalização

### Alterar quando o botão aparece
No arquivo `ScrollToTop.tsx`, linha 15:
```tsx
if (window.pageYOffset > 300) {  // Mude 300 para outro valor
```

### Alterar posição
Na linha 36:
```tsx
className="fixed bottom-24 right-6 ..."
```
- `bottom-24`: distância do fundo
- `right-6`: distância da direita

### Alterar cores
```tsx
// Cor de fundo
bg-g2b-purple          // Roxo padrão
hover:bg-g2b-darkpurple // Roxo escuro no hover

// Outras opções:
bg-g2b-yellow          // Amarelo
bg-g2b-lightpurple     // Roxo claro
```

### Alterar tamanho
```tsx
p-3              // Padding (tamanho do botão)
w-6 h-6          // Tamanho da seta
```

## 🔧 Onde está implementado

### 1. Layout Padrão
**Arquivo:** `/components/Layout.tsx`
```tsx
<ScrollToTop />
```
Aparece em todas as páginas que usam o Layout padrão:
- `/sobre`
- `/capacitacao`
- `/assessoria`
- `/biblioteca`
- `/solucoes`
- `/legado`

### 2. Home Moderna
**Arquivo:** `/app/page.tsx`
```tsx
<ScrollToTop />
```
Aparece na página inicial moderna.

## 🎬 Animações

### Entrada/Saída
```tsx
initial={{ opacity: 0, scale: 0.8, y: 20 }}  // Começa invisível, menor e abaixo
animate={{ opacity: 1, scale: 1, y: 0 }}     // Aparece, tamanho normal
exit={{ opacity: 0, scale: 0.8, y: 20 }}     // Desaparece
```

### Hover
- **Scale**: Cresce 10% (`hover:scale-110`)
- **Seta**: Move para cima (`group-hover:-translate-y-1`)
- **Background**: Amarelo com opacidade aparece

### Pulso
```tsx
<span className="absolute inset-0 rounded-full bg-g2b-purple animate-ping opacity-20" />
```
Efeito de pulso constante ao redor do botão.

## 🚀 Testes

### Teste Visual
1. Abra qualquer página do site
2. Role para baixo (mais de 300px)
3. O botão deve aparecer suavemente
4. Role de volta ao topo
5. O botão deve desaparecer

### Teste de Funcionalidade
1. Clique no botão
2. A página deve rolar suavemente até o topo
3. O botão deve desaparecer quando chegar ao topo

### Teste de Hover
1. Passe o mouse sobre o botão
2. Deve crescer levemente
3. A seta deve subir
4. Deve aparecer um círculo amarelo atrás

## 📱 Responsividade

O botão se adapta automaticamente a diferentes tamanhos de tela:
- **Mobile**: Posição ajustada para não cobrir conteúdo
- **Tablet**: Mesma posição
- **Desktop**: Mesma posição

## ♿ Acessibilidade

```tsx
aria-label="Voltar ao topo"  // Para leitores de tela
title="Voltar ao topo"        // Tooltip
```

Usuários de teclado podem:
1. Tab até o botão
2. Enter ou Space para ativar

## 🎯 Melhorias Futuras (Opcionais)

### 1. Mostrar progresso de scroll
Adicionar um círculo que preenche conforme você rola.

### 2. Smooth scroll customizado
Velocidade de scroll ajustável.

### 3. Diferentes ícones
Trocar a seta por outros ícones (foguete, chevron duplo, etc).

### 4. Posição alternativa
Esquerda ao invés de direita.

## 🐛 Troubleshooting

### Botão não aparece
- Verifique se rolou mais de 300px
- Verifique o console para erros JavaScript
- Confirme que Framer Motion está instalado

### Botão sobrepõe WhatsApp
- Ajuste o `bottom-24` para um valor maior
- Exemplo: `bottom-32` ou `bottom-28`

### Animação não funciona
- Verifique se Framer Motion está instalado: `npm list framer-motion`
- Reinstale se necessário: `npm install framer-motion`

---

**Implementado em:** 23 de Outubro de 2025  
**Versão:** 1.0  
**Status:** ✅ Funcionando perfeitamente
