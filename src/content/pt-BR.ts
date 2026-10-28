/**
 * CONTEÚDO pt-BR — Todas as strings visíveis do site.
 *
 * Centralizar o texto aqui mantém os componentes limpos e prepara o site para
 * outros idiomas no futuro (basta criar en-US.ts com o mesmo formato e registrar
 * em ./index.ts). Nenhum componente deve ter texto fixo: tudo passa por aqui.
 *
 * Regras de escrita da marca: sem travessão, sem a palavra "planilha" como termo
 * preferido (a copy oficial usa "planilha" de forma proposital em alguns pontos
 * de contraste, mantida aqui conforme aprovado), frases curtas, tom de autoridade
 * tranquila.
 */

export const ptBR = {
  meta: {
    title: "Método Polegatch de Treinamento Inteligente",
    description:
      "Método validado em 23 anos de alto rendimento, aplicado à sua realidade. Treino personalizado, feedback avançado e ajuste fino.",
  },

  nav: {
    method: "Metodologia",
    plans: "Planos",
    about: "A Mentora",
    faq: "FAQ",
    cta: "Escolher meu plano",
  },

  hero: {
    badge: "CIÊNCIA E EXPERIÊNCIA, LADO A LADO",
    title: "Método Polegatch de Treinamento Inteligente",
    subtitles: [
      "Método validado em 23 anos de alto rendimento aplicado à sua realidade.",
      "Treino personalizado, feedback avançado e ajuste fino.",
      "Treine com propósito, não com planilha.",
    ],
    primaryCta: "ESCOLHER MEU PLANO",
    secondaryCta: "VER METODOLOGIA",
  },

  problem: {
    title: "Você treina regularmente, mas algo não está funcionando",
    pains: [
      "Treina no 'feeling' sem saber se está evoluindo de verdade",
      "Fica para trás do grupo nas subidas",
      "Não sabe como periodizar para as provas importantes",
      "Sente que treina muito mas os resultados não aparecem",
      "Tem receio de se lesionar ou entrar em overtraining",
      "Não consegue conciliar treino eficiente com rotina",
    ],
    highlight: "O problema nunca foi falta de dedicação. E sim, falta de método.",
  },

  methodology: {
    badge: "O PROCESSO DE TREINAMENTO",
    title: "Treinar inteligente é diferente de treinar forte",
    subtitle:
      "O nosso Método de Treinamento Inteligente não trabalha com planilhas genéricas. Trabalhamos com estratégia personalizada que evolui continuamente, junto com você.",
    steps: [
      {
        label: "Etapa 1",
        title: "Diagnóstico",
        text: "Analisamos o seu histórico e mapeamos seu nível atual.",
      },
      {
        label: "Etapa 2",
        title: "Objetivo",
        text: "Definimos, junto com você, quais são as suas metas reais.",
      },
      {
        label: "Etapa 3",
        title: "Estratégia",
        text: "Plano personalizado respeitando seu nível e rotina semanal.",
      },
      {
        label: "Etapa 4",
        title: "Feedback Constante",
        text: "Treinos corrigidos para você saber exatamente onde melhorar.",
      },
      {
        label: "Etapa 5",
        title: "Ajuste Contínuo",
        text: "Escuta ativa para garantir que você consiga executar cada treino.",
      },
    ],
    callout: {
      icon: "🔬",
      title: "Ciência e Experiência",
      text: "Cada estratégia, cada treino planejado tem embasamento científico e foi testado no alto rendimento antes de ser aplicada para você. Validado no pelotão profissional, ajustado para a sua rotina.",
    },
    cta: "VER PLANOS",
  },

  plans: {
    title: "ESCOLHA SEU NÍVEL DE ACOMPANHAMENTO",
    platformNote: "UTILIZAMOS A PLATAFORMA TRAININGPEAKS",
    items: [
      {
        id: "pr-smart",
        name: "PR SMART",
        price: "R$ 247",
        period: "/mês",
        billingNote: "Cobrado R$ 741 trimestralmente",
        featured: false,
        tagline: "Estrutura e autonomia",
        description:
          "Para ciclistas com rotina fixa de treinos e querem evoluir com método validado. Planejamento trimestral inteligente que respeita sua autonomia.",
        benefits: [
          "Plano individualizado por rotina e objetivo",
          "Controle de carga (TSS | Form | Fatigue)",
          "Aplicação completa do Método",
          "Periodização trimestral estruturada",
          "Ajuste de periodização a cada 3 meses",
          "Relatório mensal de desempenho",
          "Análise de dados consolidados do ciclo",
          "Orientação estratégica para o próximo período",
        ],
        cta: "QUERO O PR SMART",
      },
      {
        id: "expert",
        name: "EXPERT",
        price: "R$ 497",
        period: "/mês",
        billingNote: null,
        featured: true,
        badge: "MAIS VENDIDO",
        tagline: "Acompanhamento próximo",
        description:
          "Para quem busca atenção nos mínimos detalhes, ajustes constante de rotina, feedback de cada treino executado.",
        benefits: [
          "Plano de treinamento individualizado por rotina e objetivo",
          "Planejado conforme objetivo e disponibilidade",
          "Feedback via TrainingPeaks, WhatsApp e E-mail",
          "Periodização para prova-alvo ou objetivo",
          "Feedback de cada treino executado",
          "Controle de carga (TSS, Form, Fatigue)",
        ],
        cta: "QUERO O EXPERT",
      },
      {
        id: "advanced",
        name: "ADVANCED",
        price: "R$ 947",
        period: "/mês",
        billingNote: null,
        featured: false,
        tagline: "Performance de alto nível",
        description:
          "Para ciclistas que querem potencializar o resultado, com atenção máxima.",
        benefitsLead: "Tudo do Expert, mais:",
        benefits: [
          "Feedback Semanal Direto com Ana Polegatch",
          "Mentoria mensal via vídeo com a Polegatch",
          "Trabalho de descoberta de habilidade principal",
          "Monitoramento de carga, sono e stress",
          "Relatórios de performance semanais",
          "Estratégias de competição e ganhos marginais",
        ],
        cta: "QUERO O ADVANCED",
      },
    ],
  },

  consulting: {
    title: "Ainda não sabe qual plano escolher?",
    subtitle: "Agende uma conversa com o nosso time.",
    cta: "APLICAR PARA CONSULTORIA",
  },

  about: {
    floatingBadge: "+600 Ciclistas Treinados",
    stars: "★★★★★",
    highlight: "Criadora do Método Polegatch de Treinamento Inteligente",
    categoryBadge: "A SUA MENTORA",
    name: "Ana Polegatch",
    credentials: "CREF: 200285-G/SP | Pós-graduada em Fisiologia",
    experience: "Ciclista Profissional há 23 anos | Treinadora há 6 anos",
    achievements: [
      "Atual Campeã Brasileira de Perseguição Equipes",
      "5x Campeã Brasileira de Contrarrelógio Elite",
      "Campeã Brasileira de Estrada 2021 Elite",
      "16x Campeã Brasileira Elite",
      "Bronze Jogos Sulamericanos 2022",
      "Seleção Brasileira desde 2012",
      "Vice-campeã Mundial Militar Coréia 2015",
      "Hexacampeã Volta Feminina do Brasil",
      "Campeã GP Juma Bélgica 2018",
      "3x Eleita melhor ciclista do Brasil - Guidão de Ouro",
      "3º Lugar Chabany Race Ucrânia 2019",
      "Atual Recordista Brasileira de Perseguição Individual",
      "Vice Campeã do Tour do Uruguay",
      "3º Lugar Tour de San Luis Argentina",
      "12 anos de Seleção Brasileira",
      "Bicampeã da Clássica 1º de Maio",
      "Giro D'Itália 2016",
      "Tour de France 2016",
      "2x Jogos Pan-Americanos (2015 - 2023)",
    ],
    quote:
      "Meu compromisso é levar a experiência das maiores provas do mundo para dentro do seu plano de treino, transformando esforço em resultado real.",
  },

  faq: {
    title: "PERGUNTAS FREQUENTES",
    items: [
      {
        question: "Preciso ter TrainingPeaks?",
        answer:
          "Sim, todos os planos utilizam TrainingPeaks para entrega e acompanhamento dos treinos.",
      },
      {
        question: "Posso treinar com frequência cardíaca ao invés de potência?",
        answer:
          "Sim, os planos são compatíveis com ambos os métodos de monitoramento.",
      },
    ],
  },

  app: {
    badge: "DENTRO DA PLATAFORMA",
    title: "Sua performance, em tempo real",
    dashboard: {
      chartTitle: "Carga de Treino Semanal",
      metrics: [
        { label: "Intensidade Média", value: "82%" },
        { label: "Fadiga Acumulada", value: "64%" },
        { label: "Status de Performance", value: "Rumo ao Pódio 🚀" },
      ],
      statusFootnote: "Você está 12% acima da sua meta de VO2 Max.",
      // Alturas relativas das barras do gráfico (apenas ilustrativo).
      chartBars: [45, 62, 50, 78, 70, 88, 60],
      chartDays: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
    },
    chat: {
      headerTitle: "Estrategista Polegatch 2.0",
      liveIndicator: "LIVE_FEED_ON",
      systemMessage:
        "Saudações, atleta. Sou seu estrategista Polegatch. Qual o desafio de hoje na busca pelo pódio?",
      inputPlaceholder: "Fale com o estrategista...",
      sendButton: "Enviar",
      loadingIndicator: "Analisando táticas...",
    },
  },

  // Página de captura (/guia). Título, descrição e arquivo são PLACEHOLDER
  // até o material definitivo ficar pronto.
  leadMagnet: {
    meta: {
      title: "Guia do Ciclista Master | Polegatch Ride",
      description:
        "23 anos de pelotão profissional condensados em princípios curtos para treinar com inteligência.",
    },
    logoAlt: "Polegatch Ride",
    title: "GUIA DO CICLISTA MASTER.",
    subtitle: "Método Polegatch de Treinamento Inteligente®",
    description:
      "23 anos de pelotão profissional e 16 títulos nacionais, condensados em princípios curtos para você treinar com inteligência e continuar quebrando seus recordes.",
    fields: {
      firstName: "Nome",
      lastName: "Sobrenome",
      email: "E-mail",
    },
    consent:
      "Ao enviar, você aceita receber e-mails do Polegatch Ride. Você pode sair quando quiser.",
    submit: "RECEBER O GUIA.",
    submitting: "ENVIANDO...",
    success: {
      title: "Pronto. O guia está a caminho.",
      text: "Confira sua caixa de entrada em alguns minutos. Se não aparecer, olhe o spam ou a aba Promoções.",
    },
    errors: {
      required: "Preencha nome e e-mail.",
      email: "Esse e-mail parece incompleto.",
      generic: "Não conseguimos enviar agora. Tente de novo em instantes.",
    },
    // Dois links discretos abaixo do formulário, no mesmo estilo do rodapé
    // do e-mail de entrega. Sem WhatsApp, por decisão da Pole.
    follow: {
      instagramLabel: "Siga no Instagram",
      instagramHandle: "@polegatchride",
      siteLabel: "Conheça o Polegatch Ride",
      siteText: "polegatchride.com →",
    },
  },

  footer: {
    copyright: "© 2026 Polegatch Ride. Todos os direitos reservados.",
  },

  // Links de ação. Atualize aqui quando os destinos reais estiverem definidos.
  links: {
    site: "https://www.polegatchride.com",
    instagram: "https://www.instagram.com/polegatchride",
    whatsapp: "https://wa.me/5511999999999",
    trainingPeaks: "https://www.trainingpeaks.com/",
  },
} as const;

export type Dictionary = typeof ptBR;
