export const SERVICES = [
  {
    n: '01',
    title: 'Teto Solar',
    text: 'Vazamento, travamento, ruído, cortina, motor, lubrificação e revisão.',
    image: '/img/servico-teto-solar.webp',
    alt: 'Interior de Jetta visto de cima, com teto solar aberto, em conserto na Fallcar',
    cta: 'Fale sobre teto solar',
    origem: 'servico-teto-solar',
    waMsg: 'Olá, Fallcar! Quero orçamento de conserto de teto solar. Meu carro é:'
  },
  {
    n: '02',
    title: 'Tapeçaria',
    text: 'Estofamento em couro ou tecido, forro de teto caindo, bancos, fitas de cinto e capota de conversível.',
    image: '/img/servico-tapecaria.webp',
    alt: 'Fusca azul com bancos e laterais em couro caramelo, tapeçaria Fallcar',
    cta: 'Fale sobre tapeçaria',
    origem: 'servico-tapecaria',
    waMsg: 'Olá, Fallcar! Quero orçamento de tapeçaria/estofamento. Meu carro é:'
  },
  {
    n: '03',
    title: 'Higienização',
    text: 'Limpeza profunda, remoção de odor e mofo. Recuperação de interior de carro atingido por enchente, do carpete ao forro.',
    image: '/img/servico-higienizacao.webp',
    alt: 'Higienização de interior automotivo',
    video: '/video/higienizacao.mp4',
    cta: 'Fale sobre higienização',
    origem: 'servico-higienizacao',
    waMsg: 'Olá, Fallcar! Quero orçamento de higienização/recuperação de interior. Meu carro é:'
  }
];

// kind: 'video' (vídeo em loop, rótulo troca em splitAt) | 'split' (uma foto com os dois lados) | 'pair' (duas fotos empilhadas)
export const CASES = [
  { kind: 'video', title: 'Couro bege do Jetta', meta: 'Higienização', src: '/video/jetta-antes-depois.mp4', poster: '/img/antes-depois/jetta-bege-poster.webp', splitAt: 2.6, alt: 'Banco de couro bege de Jetta antes e depois da higienização' },
  { kind: 'split', title: 'Bancos Recaro', meta: 'Tapeçaria', image: '/img/antes-depois/recaro.webp', afterSide: 'right', alt: 'Dois bancos Recaro lado a lado: antes e depois' },
  { kind: 'split', title: 'Bancos de couro preto', meta: 'Higienização', image: '/img/antes-depois/jetta-preto.webp', afterSide: 'left', alt: 'Dois bancos de couro preto lado a lado: antes e depois' },
  { kind: 'pair', title: 'Banco com fibra de carbono', meta: 'Tapeçaria', before: '/img/antes-depois/carbono-antes.webp', after: '/img/antes-depois/carbono-depois.webp', alt: 'Banco rasgado e o mesmo banco refeito com detalhe em fibra de carbono' }
];

export const BRANDS = ['Speedster', 'Fusca', 'Brasília', 'Jetta', 'Recaro'];

export const GALLERY = [
  { image: '/img/galeria/speedster-prata-couro.webp', cat: 'Speedster', alt: 'Speedster prata com bancos de couro vermelho matelassê', w: 1200, h: 898 },
  { image: '/img/galeria/speedster-bordo.webp', cat: 'Speedster', alt: 'Interior de Speedster em couro bordô', w: 1200, h: 675 },
  { image: '/img/galeria/speedster-prata-bancos.webp', cat: 'Speedster', alt: 'Speedster prata com bancos pretos matelassê', w: 1200, h: 675 },
  { image: '/img/galeria/speedster-bege.webp', cat: 'Speedster', alt: 'Speedster com bancos de couro marrom matelassê', w: 1200, h: 675 },
  { image: '/img/galeria/speedster-areia.webp', cat: 'Speedster', alt: 'Speedster areia com interior caramelo e volante claro', w: 1200, h: 898 },
  { image: '/img/galeria/speedster-pied-de-poule.webp', cat: 'Speedster', alt: 'Banco com tecido pied-de-poule em Speedster', w: 750, h: 1000 },
  { image: '/img/galeria/speedster-porta-malas.webp', cat: 'Speedster', alt: 'Porta-malas dianteiro de Speedster forrado em couro caramelo', w: 748, h: 1000 },
  { image: '/img/galeria/fusca-azul.webp', cat: 'Fusca', alt: 'Fusca azul com bancos e laterais em couro caramelo', w: 750, h: 1000 },
  { image: '/img/galeria/fusca-porta.webp', cat: 'Fusca', alt: 'Forro de porta de Fusca em couro caramelo', w: 750, h: 1000 },
  { image: '/img/galeria/fusca-teto.webp', cat: 'Fusca', alt: 'Interior de Fusca com forro de teto e bancos refeitos', w: 687, h: 1000 },
  { image: '/img/galeria/brasilia-marrom.webp', cat: 'Brasília', alt: 'Brasília com bancos em couro marrom', w: 506, h: 900 },
  { image: '/img/galeria/brasilia-amarela.webp', cat: 'Brasília', alt: 'Interior de Brasília amarela com bancos em couro', w: 506, h: 900 }
];

export const GALLERY_CATS = ['Speedster', 'Fusca', 'Brasília'];

export const STEPS = [
  { n: '01', t: 'Mande a foto', d: 'Pelo WhatsApp, com marca, modelo e ano. Sem formulário longo, sem cadastro.' },
  { n: '02', t: 'Receba o diagnóstico', d: 'Informamos o que provavelmente é, quanto custa e quantos dias leva.' },
  { n: '03', t: 'Agende na unidade mais próxima', d: 'Osasco ou Campos Elíseos, no horário que for melhor para você deixar o carro.' },
  { n: '04', t: 'Retire o carro', d: 'Serviço conferido com você na entrega.' }
];

export const RATING = { score: '4,5', count: 74, note: 'unidade Osasco' };

// Trechos de avaliações reais do Google (nota e total conferidos em 14/11/2026). Atualize de tempos em tempos.
export const REVIEWS = [
  { text: "Atendimento pelo WhatsApp super rápido e atencioso para fazer orçamento. Tenho certeza que o serviço será no mesmo nível de excelência.", name: "Victor S.", source: 'Avaliação no Google' },
  { text: "O Beto e sua equipe fazem um trabalho excepcional, atendimento de qualidade, tudo transparente e sem surpresas negativas. Arrumei o teto do carro lá…", name: "Leonardo A.", source: 'Avaliação no Google' },
  { text: "Ótimo atendimento e qualidade! O serviço e acabamento do novo revestimento do banco da minha moto…", name: "Ingrid F.", source: 'Avaliação no Google' },
  { text: "…fui muito bem atendido a execução do serviço combinado ficou excelente muito top…", name: "Geração IDE Ágape", source: 'Avaliação no Google' }
];

export const FAQS = [
  { q: 'Vazamento de teto solar tem conserto ou precisa trocar tudo?', a: 'Na maioria dos casos tem conserto. Vazamento quase sempre vem de dreno entupido, borracha ressecada ou trilho desalinhado. Trocar o conjunto inteiro é exceção, e só indicamos quando o mecanismo está realmente comprometido.' },
  { q: 'Quanto tempo o carro fica na oficina?', a: 'Depende do serviço e da peça. Mande fotos pelo WhatsApp e informamos o prazo junto com o orçamento.' },
  { q: 'Vocês atendem carro atingido por enchente?', a: 'Sim. Removemos bancos e carpete, secamos a estrutura, tratamos odor e mofo e recuperamos ou substituímos o que não voltar. Quanto antes o carro chegar, menos peças precisam ser trocadas.' },
  { q: 'Vocês trabalham com reforma e projetos de carros antigos?', a: 'Sim. Trabalhamos com carros antigos e clássicos, como Fusca, Brasília e Speedster, de diversos modelos. Assumimos o projeto para que o carro fique do jeito que você sempre sonhou.' },
  { q: 'Precisa agendar?', a: 'Recomendamos combinar antes. Mande uma foto e a placa pelo WhatsApp e orientamos o melhor dia e a unidade mais próxima.' }
];
