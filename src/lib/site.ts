// ─────────────────────────────────────────────────────────────
// Publiciart — dados centrais do site (conteúdo + navegação)
// ─────────────────────────────────────────────────────────────

export const WA = "5511910199514";
export const EMAIL = "japynhaproducoes@gmail.com";
export const INSTAGRAM = "https://instagram.com/publiciart"; // [A CONFIRMAR]

export function waLink(msg?: string) {
  return `https://wa.me/${WA}${msg ? `?text=${encodeURIComponent(msg)}` : ""}`;
}

export const NAV = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/servicos", label: "Serviços" },
  { href: "/portfolio", label: "Portfólio" },
  { href: "/planos", label: "Planos" },
  { href: "/contato", label: "Contato" },
];

// Frases do ticker (tema megafone / comunicação da marca)
export const MARQUEE = [
  "Sites que vendem",
  "Design premium",
  "Entrega rápida",
  "Hospedagem própria",
  "Suporte humano",
  "Feito à mão",
];

export type Service = {
  icon: string;
  title: string;
  short: string;
  long: string;
  bullets: string[];
};

export const SERVICES: Service[] = [
  {
    icon: "Globe",
    title: "Criação de Sites",
    short: "Sites institucionais sob medida, com estrutura de páginas e navegação de verdade.",
    long: "Do conceito ao ar: sites institucionais completos, com múltiplas páginas, identidade própria e uma arquitetura pensada para o seu cliente encontrar o que precisa e agir.",
    bullets: ["Múltiplas páginas e menu", "Design exclusivo por projeto", "100% responsivo", "Otimizado para conversão"],
  },
  {
    icon: "Rocket",
    title: "Landing Pages de Conversão",
    short: "Páginas de alta performance para transformar visitantes em clientes.",
    long: "Uma página, um objetivo. Landing pages construídas com copy persuasiva e design direcionado para um único resultado: o clique que vira venda.",
    bullets: ["Foco em um objetivo", "Copy que convence", "Carregamento veloz", "Integração com WhatsApp"],
  },
  {
    icon: "Palette",
    title: "Identidade Visual & Design",
    short: "A cara do seu negócio, do logo às cores que constroem confiança.",
    long: "Marca não é só logo. Desenho um sistema visual coerente — cores, tipografia e composição — para que cada ponto de contato pareça parte da mesma história.",
    bullets: ["Direção de arte", "Paleta e tipografia", "Aplicações de marca", "Padrão premium"],
  },
  {
    icon: "Server",
    title: "Hospedagem & Suporte",
    short: "Infraestrutura própria em VPS, com backups e suporte direto.",
    long: "Seu site no ar com estabilidade, velocidade e SSL. Hospedagem em servidor próprio, backups periódicos e suporte humano quando você precisar — sem fila, sem robô.",
    bullets: ["VPS dedicada", "SSL e backups", "Uptime monitorado", "Suporte via WhatsApp"],
  },
  {
    icon: "Gauge",
    title: "SEO & Performance",
    short: "Para o Google encontrar e o visitante não esperar.",
    long: "Sites rápidos e bem estruturados sobem no Google e convertem mais. Otimizo carregamento, semântica e boas práticas para o seu site trabalhar por você.",
    bullets: ["Velocidade de carregamento", "Estrutura semântica", "Meta tags e Open Graph", "Boas práticas de ranking"],
  },
  {
    icon: "RefreshCw",
    title: "Manutenção & Evolução",
    short: "Seu site vivo: atualizações, ajustes e melhorias contínuas.",
    long: "Um site não é entrega única — é um ativo que evolui. Cuido de atualizações, novas seções e ajustes para o site acompanhar o crescimento do seu negócio.",
    bullets: ["Atualizações de conteúdo", "Novas seções e páginas", "Correções e melhorias", "Acompanhamento contínuo"],
  },
];

export type Project = {
  name: string;
  segment: string;
  location: string;
  year: string;
  concept: string;
  description: string;
  accent: string; // cor de destaque do case
};

// PLACEHOLDER — segmentos que a Publiciart atende.
// Substituir por cases reais (com autorização do cliente) quando disponíveis.
export const PROJECTS: Project[] = [
  {
    name: "Clínicas & Saúde",
    segment: "Odontologia · Estética · Consultórios",
    location: "Credibilidade que agenda",
    year: "",
    concept: "Confiança",
    description:
      "Sites para clínicas e consultórios que transmitem credibilidade, destacam os serviços e levam o paciente direto ao agendamento pelo WhatsApp.",
    accent: "#8b5cf6",
  },
  {
    name: "Comércio & Varejo",
    segment: "Lojas · Restaurantes · Negócios locais",
    location: "Do bairro para a internet",
    year: "",
    concept: "Vitrine",
    description:
      "Vitrines digitais para negócios locais: catálogo, localização, horários e um caminho curto e claro para o cliente comprar ou chamar no WhatsApp.",
    accent: "#ec4899",
  },
  {
    name: "Serviços & Profissionais",
    segment: "Advogados · Consultores · Autônomos",
    location: "Autoridade em uma página",
    year: "",
    concept: "Autoridade",
    description:
      "Sites e landing pages que posicionam o profissional como autoridade, apresentam o trabalho com clareza e transformam visitas em contatos qualificados.",
    accent: "#22d3ee",
  },
];

export type Plan = {
  name: string;
  tagline: string;
  price: string;
  note: string;
  features: string[];
  featured?: boolean;
  cta: string;
};

export const PLANS: Plan[] = [
  {
    name: "Essencial",
    tagline: "Para começar com uma presença forte.",
    price: "Sob consulta",
    note: "Entrega em até 7 dias",
    features: [
      "Landing page de alta conversão",
      "Design responsivo",
      "WhatsApp integrado",
      "Formulário de contato",
      "30 dias de suporte",
    ],
    cta: "Quero o Essencial",
  },
  {
    name: "Premium 180 Dias",
    tagline: "O pacote completo para dominar seu mercado.",
    price: "Sob consulta",
    note: "6 meses de hospedagem + suporte inclusos",
    features: [
      "Site completo multi-páginas",
      "Design premium sob medida",
      "Hospedagem própria (VPS) + SSL",
      "SEO e performance",
      "180 dias de suporte e manutenção",
      "Backups periódicos",
    ],
    featured: true,
    cta: "Quero o Premium",
  },
  {
    name: "Sob Medida",
    tagline: "Projetos especiais, sem limite de ambição.",
    price: "Orçamento",
    note: "Escopo e prazo personalizados",
    features: [
      "E-commerce e catálogos",
      "Sistemas e áreas logadas",
      "Identidade visual completa",
      "Integrações personalizadas",
      "Prioridade no suporte",
    ],
    cta: "Vamos conversar",
  },
];

export const STATS = [
  { value: "100%", label: "Feito à mão, sem template" },
  { value: "7 dias", label: "Entrega a partir de" },
  { value: "VPS", label: "Hospedagem própria" },
  { value: "1:1", label: "Suporte humano direto" },
];
