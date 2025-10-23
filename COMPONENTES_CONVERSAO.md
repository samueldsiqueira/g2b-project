# 🚀 Guia de Componentes de Conversão - G2B

Este documento explica como usar os novos componentes criados para aumentar a conversão do site.

## 📊 1. StatsSection - Números com Contador Animado

Mostra estatísticas impressionantes com contador animado.

### Como Usar:

```tsx
import StatsSection from '../components/StatsSection';

const stats = [
  { value: 15, label: 'Anos de Experiência', suffix: '+' },
  { value: 200, label: 'Empresas Atendidas', suffix: '+' },
  { value: 5000, label: 'Profissionais Capacitados', suffix: '+' },
  { value: 98, label: 'Satisfação', suffix: '%' },
];

<StatsSection stats={stats} />
```

### Onde Adicionar:
- Logo após o Hero Section
- Antes da seção de serviços

---

## 🎯 2. ResultsSection - Cases de Sucesso

Mostra resultados reais com imagens e métricas.

### Como Usar:

```tsx
import ResultsSection from '../components/ResultsSection';

const results = [
  {
    title: 'Compliance em Indústria Farmacêutica',
    description: 'Implementação completa de governança corporativa com redução de 80% em não conformidades',
    image: '/images/trabalhos.jpeg',
    metric: '80% Redução',
    ctaText: 'Ver Detalhes',
    ctaLink: 'https://wa.me/5511999999999?text=Quero saber mais sobre este case'
  },
  {
    title: 'Capacitação de Equipe Executiva',
    description: 'Treinamento customizado resultando em aumento de 50% na eficiência de processos',
    image: '/images/trabalhos2.jpeg',
    metric: '+50% Eficiência',
    ctaText: 'Saiba Mais',
    ctaLink: 'https://wa.me/5511999999999?text=Gostaria de uma capacitação similar'
  },
  {
    title: 'Auditoria e Adequação LGPD',
    description: 'Adequação completa à LGPD com certificação em tempo recorde',
    image: '/images/trabalho3.jpeg',
    metric: '100% Adequado',
    ctaText: 'Consultar',
    ctaLink: 'https://wa.me/5511999999999?text=Preciso adequar minha empresa à LGPD'
  }
];

<ResultsSection results={results} />
```

### Onde Adicionar:
- Após a seção de serviços
- Antes dos depoimentos

**💡 Dica:** Use fotos reais dos trabalhos. As imagens podem ser trocadas facilmente!

---

## 🎥 3. VideoSection - Vídeo do YouTube Integrado

Incorpora vídeos do YouTube com design elegante.

### Como Usar:

```tsx
import VideoSection from '../components/VideoSection';

<VideoSection 
  videoUrl="https://www.youtube.com/shorts/uUfLRVSZVlo?feature=share"
  title="Veja Como Transformamos Empresas"
  description="Depoimento real de cliente satisfeito com nossos serviços"
/>
```

### Onde Adicionar:
- Após a seção de resultados
- Antes do FAQ

**Formatos de URL aceitos:**
- `https://www.youtube.com/watch?v=VIDEO_ID`
- `https://youtu.be/VIDEO_ID`
- `https://www.youtube.com/shorts/VIDEO_ID`
- `https://www.youtube.com/embed/VIDEO_ID`

---

## ❓ 4. FAQSection - Perguntas Frequentes

FAQ com acordeão e botão WhatsApp em cada resposta.

### Como Usar:

```tsx
import FAQSection from '../components/FAQSection';

const faqs = [
  {
    question: 'Quanto tempo dura o processo de consultoria?',
    answer: 'O tempo varia conforme a complexidade do projeto, mas geralmente entre 3 a 6 meses. Fazemos um diagnóstico inicial gratuito para estimar o prazo específico para sua empresa.',
    whatsappMessage: 'Olá! Gostaria de saber mais sobre o prazo de consultoria para minha empresa'
  },
  {
    question: 'Qual o investimento necessário?',
    answer: 'Cada projeto é único e personalizado. Após o diagnóstico inicial (gratuito), apresentamos uma proposta sob medida para suas necessidades e orçamento. Entre em contato para agendar uma conversa sem compromisso.',
    whatsappMessage: 'Quero saber mais sobre investimento e valores'
  },
  {
    question: 'Atendem empresas do meu segmento?',
    answer: 'Atendemos empresas de diversos segmentos: indústria, serviços, tecnologia, saúde, educação, entre outros. Nossa experiência de mais de 15 anos nos permite adaptar as melhores práticas para cada realidade.',
    whatsappMessage: 'Gostaria de saber se atendem o segmento [DIGITE SEU SEGMENTO]'
  },
  {
    question: 'Os treinamentos são presenciais ou online?',
    answer: 'Oferecemos ambas as modalidades! Você escolhe o formato que melhor se adapta à sua realidade: presencial, online ao vivo ou híbrido. Todos os formatos mantêm a mesma qualidade e interatividade.',
    whatsappMessage: 'Tenho interesse em treinamentos. Vamos conversar?'
  },
  {
    question: 'Vocês oferecem suporte pós-implementação?',
    answer: 'Sim! Nosso compromisso não termina com a entrega do projeto. Oferecemos acompanhamento e suporte contínuo para garantir que os resultados sejam sustentáveis a longo prazo.',
    whatsappMessage: 'Quero saber mais sobre o suporte oferecido'
  }
];

<FAQSection faqs={faqs} />
```

### Onde Adicionar:
- Após a seção de vídeo
- Antes da seção de contato final

---

## 🎨 Exemplo de Implementação Completa

Aqui está como adicionar tudo no `page.tsx`:

```tsx
// ... imports existentes
import StatsSection from '../components/StatsSection';
import ResultsSection from '../components/ResultsSection';
import VideoSection from '../components/VideoSection';
import FAQSection from '../components/FAQSection';

export default function ModernHome() {
  // ... código existente ...
  
  // Defina os dados
  const stats = [ /* dados aqui */ ];
  const results = [ /* dados aqui */ ];
  const faqs = [ /* dados aqui */ ];

  return (
    <div>
      <ModernHeader />
      <WhatsAppFloat />
      <ScrollToTop />

      {/* Hero Section - EXISTENTE */}
      <section id="hero">...</section>

      {/* ⭐ NOVO: Estatísticas */}
      <StatsSection stats={stats} />

      {/* About Section - EXISTENTE */}
      <section id="about">...</section>

      {/* Solutions Section - EXISTENTE */}
      <section id="solutions">...</section>

      {/* ⭐ NOVO: Resultados/Cases */}
      <ResultsSection results={results} />

      {/* Training Section - EXISTENTE */}
      <section id="training">...</section>

      {/* Consulting Section - EXISTENTE */}
      <section id="consulting">...</section>

      {/* ⭐ NOVO: Vídeo */}
      <VideoSection 
        videoUrl="https://www.youtube.com/shorts/uUfLRVSZVlo?feature=share"
        title="Depoimentos de Clientes"
        description="Veja o que nossos clientes têm a dizer"
      />

      {/* Testimonials - EXISTENTE */}
      <TestimonialCarousel />

      {/* ⭐ NOVO: FAQ */}
      <FAQSection faqs={faqs} />

      {/* Contact CTA - EXISTENTE */}
      <section id="contact">...</section>

      <Footer />
    </div>
  );
}
```

---

## 📱 WhatsApp CTAs Estratégicos

Cada componente tem CTAs de WhatsApp com mensagens personalizadas:

1. **StatsSection**: CTA após os números
2. **ResultsSection**: CTA em cada case + CTA geral
3. **VideoSection**: CTA após o vídeo
4. **FAQSection**: CTA em cada pergunta + CTA geral

### Personalize as Mensagens WhatsApp:

Troque `5511999999999` pelo número real em TODOS os componentes:
- StatsSection.tsx (linha ~)
- ResultsSection.tsx (linhas ~)
- VideoSection.tsx (linha ~)
- FAQSection.tsx (linhas ~)

---

## 🎯 Checklist de Implementação

- [ ] Adicionar StatsSection após o hero
- [ ] Definir estatísticas reais (anos, clientes, etc)
- [ ] Adicionar ResultsSection com fotos reais
- [ ] Escrever cases de sucesso concretos
- [ ] Adicionar VideoSection com vídeo do YouTube
- [ ] Criar lista de FAQs com objeções comuns
- [ ] Atualizar TODOS os números do WhatsApp
- [ ] Personalizar mensagens do WhatsApp
- [ ] Testar todos os CTAs no mobile
- [ ] Adicionar Google Analytics nos botões

---

## 🚀 Próximos Passos (Quando Tiver Mais Conteúdo)

1. **Certificações/Logos**: Criar seção com logos de parceiros
2. **Timeline**: Linha do tempo da empresa
3. **Lead Magnet**: E-book/Checklist downloadável
4. **Exit Intent**: Pop-up quando o usuário for sair
5. **Mais Vídeos**: Criar playlist de depoimentos
6. **Blog Integration**: Se quiser, posso criar seção de artigos

---

## 💡 Dicas de Conversão

1. **Fotos Reais**: Use fotos reais sempre que possível
2. **Números Concretos**: Métricas específicas convertem mais
3. **Urgência**: "Agenda limitada", "Últimas vagas"
4. **Prova Social**: Depoimentos com foto e nome completo
5. **Múltiplos CTAs**: Dê várias oportunidades de contato
6. **Mobile First**: Teste tudo no celular!

---

**Precisa de ajuda para implementar? Me chame! 🚀**
