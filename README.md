# G2B - Site Institucional

Site institucional da G2B Treinamento Executivo e Assessoria Empresarial, desenvolvido com Next.js 14, TypeScript e Tailwind CSS.

## 🚀 Sobre o Projeto

Este é o site modernizado da G2B, empresa especializada em Gestão de Projetos, oferecendo serviços de capacitação e assessoria empresarial.

## 💻 Tecnologias

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utility-first
- **React 18** - Biblioteca JavaScript

## 📦 Instalação

```bash
# Clone o repositório
git clone <seu-repositorio>

# Entre na pasta
cd g2b-nextjs

# Instale as dependências
npm install
```

## 🔧 Como Executar

### Ambiente de Desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

### Build para Produção

```bash
npm run build
```

### Executar Versão de Produção

```bash
npm start
```

## 🌐 Deploy na Vercel

Este projeto está otimizado para deploy na Vercel:

1. Faça push do código para um repositório Git (GitHub, GitLab ou Bitbucket)
2. Importe o projeto na [Vercel](https://vercel.com)
3. A Vercel detectará automaticamente Next.js e fará o deploy

### Deploy via CLI

```bash
# Instale a CLI da Vercel
npm i -g vercel

# Faça o deploy
vercel
```

## 📁 Estrutura do Projeto

```
g2b-nextjs/
├── app/                    # App Router do Next.js
│   ├── page.tsx           # Página inicial
│   ├── sobre/             # Página Sobre
│   ├── solucoes/          # Página Soluções
│   ├── capacitacao/       # Página Capacitação
│   ├── assessoria/        # Página Assessoria
│   ├── biblioteca/        # Página Biblioteca
│   ├── layout.tsx         # Layout raiz
│   └── globals.css        # Estilos globais
├── components/            # Componentes React
│   ├── Header.tsx        # Cabeçalho
│   ├── Footer.tsx        # Rodapé
│   └── Layout.tsx        # Layout wrapper
├── public/               # Arquivos estáticos
│   ├── images/          # Imagens
│   └── favicon.ico      # Favicon
├── next.config.js       # Configuração Next.js
├── tailwind.config.ts   # Configuração Tailwind
└── tsconfig.json        # Configuração TypeScript
```

## 📄 Páginas

- **Home** (`/`) - Apresentação da empresa
- **Sobre G2B** (`/sobre`) - História e informações sobre a fundadora
- **Soluções** (`/solucoes`) - Visão geral dos serviços
- **Capacitação** (`/capacitacao`) - Treinamentos oferecidos
- **Assessoria** (`/assessoria`) - Serviços de consultoria
- **Biblioteca** (`/biblioteca`) - Recursos e materiais

## 🎨 Personalização

As cores principais estão definidas no `tailwind.config.ts`:

```typescript
colors: {
  g2b: {
    orange: '#f7931e',
    gray: '#666666',
    lightgray: '#f5f5f5',
  }
}
```

## 📧 Contato

- **E-mail:** contato@g2b.com.br
- **RH:** rh@g2b.com.br
- **Blog:** [g2blog2b.wordpress.com](http://g2blog2b.wordpress.com)

## 📝 Licença

© 2024 G2B - Treinamento Executivo e Assessoria Empresarial

---

Desenvolvido com ❤️ para a G2B
