# Guia Rápido - Tradução Completa

## Arquivo criado: locales/pt.ts ✅
Todas as traduções em português foram adicionadas.

## TODO: Criar locales/en.ts com traduções em inglês

Copie a estrutura do pt.ts e traduza os textos.

## Páginas que precisam ser atualizadas:

### 1. app/sobre/page.tsx
Adicione no início: 
```typescript
'use client';
import { useLanguage } from '@/locales/LanguageContext';
```

No component:
```typescript
const { t } = useLanguage();
```

Use: t.about.hero.title, t.about.content.text1, etc.

### 2. app/solucoes/page.tsx
Use: t.solutions.*

### 3. app/capacitacao/page.tsx  
Use: t.training.*

### 4. app/assessoria/page.tsx
Use: t.consulting.*

### 5. app/biblioteca/page.tsx
Use: t.library.*

## Status Atual:
✅ Home - Traduzida
✅ Header - Traduzido
✅ Footer - Traduzido  
✅ WhatsApp - Traduzido
⏳ Sobre - Precisa atualizar
⏳ Soluções - Precisa atualizar
⏳ Capacitação - Precisa atualizar
⏳ Assessoria - Precisa atualizar
⏳ Biblioteca - Precisa atualizar
