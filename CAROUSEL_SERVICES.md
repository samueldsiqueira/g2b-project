# Carrossel de Serviços - Como Usar

O componente `ServicesCarousel` agora suporta dois formatos de cards:

## 1. Card com Cor de Fundo (Formato Antigo)
```typescript
{
  id: 1,
  title: 'Capacitação',
  description: 'Cursos e treinamentos especializados.',
  icon: <svg>...</svg>,
  sectionId: 'training',
  color: 'bg-g2b-purple',
}
```

## 2. Card com Imagem de Fundo (Novo Formato)
```typescript
{
  id: 1,
  title: 'Capacitação',
  description: 'Cursos e treinamentos especializados para sua equipe.',
  image: '/images/capacitacao.jpg', // Caminho da imagem
  sectionId: 'training',
  buttonText: 'Saiba mais', // Opcional, padrão é "Saiba mais"
  // icon é opcional quando há imagem
}
```

## Características dos Cards com Imagem

- **Altura fixa**: 450px para consistência visual
- **Imagem de fundo**: Preenche todo o card
- **Overlay gradient**: Garante legibilidade do texto sobre a imagem
- **Texto branco**: Título e descrição em branco para contraste
- **Botão destacado**: Botão amarelo (g2b-yellow) com texto roxo escuro
- **Ícone opcional**: Pode ter ou não ícone no topo

## Exemplo Completo com Imagens

```typescript
const services = [
  {
    id: 1,
    title: 'Capacitação em Gestão',
    description: 'Cursos e treinamentos especializados para sua equipe crescer e se desenvolver com excelência.',
    image: '/images/capacitacao.jpg',
    sectionId: 'training',
    buttonText: 'Conhecer cursos',
  },
  {
    id: 2,
    title: 'Assessoria Empresarial',
    description: 'Consultoria especializada para governança corporativa e compliance.',
    image: '/images/assessoria.jpg',
    sectionId: 'consulting',
  },
  {
    id: 3,
    title: 'Consultoria em Projetos',
    description: 'Apoio especializado para gestão e execução de projetos estratégicos.',
    image: '/images/projetos.jpg',
    sectionId: 'projects',
    buttonText: 'Saiba como',
  },
];
```

## Adicionando Imagens

1. Coloque suas imagens na pasta `public/images/`
2. Use imagens em formato JPG, PNG ou WebP
3. Tamanho recomendado: 800x600px ou maior
4. Certifique-se que as imagens tenham boa qualidade e contraste

## Comportamento

- **Hover**: Card sobe levemente e ganha borda roxa
- **Click**: Rola suavemente para a seção indicada em `sectionId`
- **Autoplay**: 4 segundos entre slides
- **Responsivo**: 
  - Mobile: 1 card
  - Tablet: 2 cards
  - Desktop: 3 cards

## Misturando Formatos

Você pode misturar cards com imagem e cards com cor de fundo no mesmo carrossel:

```typescript
const services = [
  {
    id: 1,
    title: 'Com Imagem',
    description: 'Card com foto de fundo',
    image: '/images/foto.jpg',
    sectionId: 'section1',
  },
  {
    id: 2,
    title: 'Com Cor',
    description: 'Card com cor sólida',
    icon: <svg>...</svg>,
    color: 'bg-g2b-purple',
    sectionId: 'section2',
  },
];
```
