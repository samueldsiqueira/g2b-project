# 🚀 Guia de Deploy na Vercel

## Opção 1: Deploy via GitHub (Recomendado)

### 1. Criar repositório no GitHub

```bash
cd g2b-nextjs
git init
git add .
git commit -m "Initial commit - G2B Next.js site"
```

Crie um repositório no GitHub e faça push:

```bash
git remote add origin https://github.com/seu-usuario/g2b-nextjs.git
git branch -M main
git push -u origin main
```

### 2. Importar no Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Clique em **"Add New..."** → **"Project"**
3. Importe seu repositório do GitHub
4. A Vercel detectará automaticamente que é um projeto Next.js
5. Clique em **"Deploy"**

Pronto! Seu site estará no ar em poucos minutos.

---

## Opção 2: Deploy via CLI

### 1. Instalar Vercel CLI

```bash
npm i -g vercel
```

### 2. Fazer Deploy

```bash
cd g2b-nextjs
vercel
```

Siga as instruções na tela:
- Login com sua conta
- Confirme o projeto
- Aguarde o deploy

### 3. Deploy em Produção

```bash
vercel --prod
```

---

## ⚙️ Configurações Importantes

O projeto já está configurado com:

✅ **next.config.js** com `output: 'export'` para geração estática  
✅ **Imagens otimizadas** com `unoptimized: true`  
✅ **Todas as páginas são estáticas** (SSG)  

---

## 🌐 URL do Site

Após o deploy, você receberá uma URL como:
- **Produção:** `https://g2b-nextjs.vercel.app`
- **Preview:** URLs únicas para cada commit

---

## 🔄 Atualizações Automáticas

Com GitHub conectado:
- **Push no main** → Deploy automático em produção
- **Pull Requests** → Deploy de preview automático

---

## 📝 Domínio Personalizado

No painel da Vercel:
1. Vá em **Settings** → **Domains**
2. Adicione seu domínio (ex: `www.g2b.com.br`)
3. Siga as instruções para configurar DNS

---

## 🐛 Troubleshooting

### Build falha?
```bash
# Teste localmente primeiro
npm run build
```

### Imagens não aparecem?
- Verifique se estão em `/public/images`
- Confirme que `next.config.js` tem `unoptimized: true`

### Variáveis de ambiente?
- Crie arquivo `.env.local` localmente
- Adicione no Vercel em **Settings** → **Environment Variables**

---

## 📊 Analytics (Opcional)

Ative no painel da Vercel:
- **Analytics** → Métricas de performance
- **Speed Insights** → Core Web Vitals

---

## ✅ Checklist Pré-Deploy

- [ ] `npm run build` funcionando localmente
- [ ] Todas as imagens em `/public`
- [ ] Links internos funcionando
- [ ] E-mails de contato corretos
- [ ] Favicon presente
- [ ] README.md atualizado

---

**🎉 Seu site G2B estará no ar em minutos!**
