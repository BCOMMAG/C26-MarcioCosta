export interface OfficeInfo {
  name: string;
  shortName: string;
  lawyer: string;
  role: string;
  tagline: string;
  slogan: string;
  phone: string;
  whatsapp: string;
  whatsappNumber: string;
  whatsappFormatted: string;
  whatsappUrl: string;
  instagramUrl: string;
  instagramHandle: string;
  linkedinUrl: string;
  linkedinHandle: string;
  address: string;
  addressShort: string;
  city: string;
  state: string;
  mapsDirectionsUrl: string;
  mapsEmbedUrl: string;
  schedule: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
}

export const OFFICE_INFO: OfficeInfo = {
  name: "Advocacia Márcio Wagner Costa",
  shortName: "Márcio Wagner Costa Advocacia",
  lawyer: "Márcio Wagner Costa",
  role: "Advogado Criminalista • Membro da Comissão de Prerrogativas OAB",
  tagline: "Defesa criminal combativa, estratégica e técnica em defesa da sua liberdade.",
  slogan: "Prontidão investigatória, rigor probatório e atuação intransigente na garantia das prerrogativas constitucionais.",
  phone: "(41) 99533-5191",
  whatsapp: "5541995335191",
  whatsappNumber: "5541995335191",
  whatsappFormatted: "(41) 99533-5191",
  whatsappUrl:
    "https://wa.me/5541995335191?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Advocacia%20M%C3%A1rcio%20Wagner%20Costa%20e%20preciso%20de%20orienta%C3%A7%C3%A3o%20jur%C3%ADdica.",
  instagramUrl: "https://www.instagram.com/mwcostaadv/",
  instagramHandle: "@mwcostaadv",
  linkedinUrl: "https://www.linkedin.com/in/marcio-costa-0070a6195/",
  linkedinHandle: "marcio-costa-0070a6195",
  address: "R. Francisco Derosso, 2065 - Sl 12 - Xaxim, Curitiba - PR, 81720-000",
  addressShort: "R. Francisco Derosso, 2065 - Sl 12 - Xaxim, Curitiba/PR",
  city: "Curitiba",
  state: "PR",
  mapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=R.+Francisco+Derosso,+2065+-+Sl+12+-+Xaxim,+Curitiba+-+PR,+81720-000",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=R.+Francisco+Derosso,+2065+-+Sl+12+-+Xaxim,+Curitiba+-+PR,+81720-000&output=embed",
  schedule: {
    weekdays: "Segunda a Sexta: 09:00 às 18:00 (Plantão 24h para Flagrantes)",
    saturday: "Fechado (Atendimento Emergencial para Flagrantes)",
    sunday: "Fechado (Atendimento Emergencial para Flagrantes)",
  },
};

export interface LawyerProfile {
  name: string;
  role: string;
  graduation: string;
  bio: string[];
  careerHighlights: string[];
  personalNotes: string[];
  differentials: string[];
}

export const LAWYER_PROFILE: LawyerProfile = {
  name: "Márcio Wagner Costa",
  role: "Advogado Titular • Advocacia Criminal & Prerrogativas",
  graduation: "Bacharel em Direito pela Universidade Positivo (UP)",
  bio: [
    "Márcio Wagner Costa dedica sua prática jurídica à advocacia criminal combativa, estratégica e estritamente técnica, assegurando a defesa intransigente das garantias constitucionais e dos direitos de quem enfrenta a persecução penal.",
    "Graduado em Direito pela conceituada Universidade Positivo (UP) e Membro da Comissão de Prerrogativas da OAB, destaca-se pela atuação firme perante delegacias de polícia, varas criminais, Tribunal do Júri e Tribunais Superiores.",
    "Com escritório estruturado no bairro Xaxim em Curitiba/PR e atendimento especializado em todo o Estado do Paraná, presta assistência jurídica imediata em casos de prisão em flagrante, audiências de custódia, investigações defensivas e pedidos de liberdade.",
  ],
  careerHighlights: [
    "Bacharel em Direito pela Universidade Positivo (UP).",
    "Membro da Comissão de Prerrogativas da OAB, zelando pela inviolabilidade da defesa.",
    "Atuação dedicada ao Direito Criminal, Tribunal do Júri e Execução Penal.",
    "Sede física estruturada na R. Francisco Derosso, Xaxim, Curitiba/PR.",
    "Conformidade ética estrita com o Provimento nº 205/2021 do Conselho Federal da OAB.",
  ],
  personalNotes: [
    "Compromisso incondicional com a presunção de inocência e a legalidade estrita do processo penal.",
    "Agilidade e presença combativa desde o primeiro momento da abordagem policial e interrogatório.",
    "Comunicação direta, transparente e acolhedora com os familiares em momentos de angústia.",
  ],
  differentials: [
    "Prontidão em Prisões em Flagrante: assistência ágil nas primeiras 24 horas cruciais.",
    "Atuação Especializada no Tribunal do Júri: técnica apurada perante o Conselho de Sentença.",
    "Membro de Prerrogativas OAB: proteção integral da inviolabilidade da defesa e garantias do cliente.",
    "Sede Física & Consultoria Online: estrutura presencial no Xaxim e atendimento seguro em todo o Paraná.",
  ],
};

export interface PracticeArea {
  id: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  description: string;
  iconName: string;
  featured: boolean;
  highlightText: string;
  coverageList: string[];
  casesSummary: string;
}

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "flagrante-custodia",
    title: "Flagrante & Audiência de Custódia",
    subtitle: "Atuação imediata nas primeiras 24 horas para relaxamento de prisão ou concessão de liberdade",
    shortDesc:
      "Assistência jurídica urgente em delegacias e acompanhamento presencial em audiência de custódia para restabelecimento da liberdade.",
    description:
      "A audiência de custódia deve ocorrer em até 24 horas após a prisão em flagrante. Nossa atuação técnica examina a estrita legalidade do ato policial, apura eventuais nulidades de busca pessoal ou domiciliar, coíbe abusos de autoridade e requer o imediato relaxamento da prisão ilegal ou a concessão de liberdade provisória com ou sem fiança e aplicação de medidas cautelares alternativas.",
    iconName: "ShieldCheck",
    featured: true,
    highlightText: "Combate contundente a ilegalidades na prisão e busca incansável pela liberdade provisória.",
    coverageList: [
      "Acompanhamento Imediato do Interrogatório em Delegacias de Polícia",
      "Defesa Técnica em Audiência de Custódia (Prazo Legal de 24 horas)",
      "Pedido de Relaxamento de Prisão por Ilegalidade ou Abuso de Autoridade",
      "Requerimento de Liberdade Provisória com ou sem Fiança Arbitrada",
      "Substituição de Prisão Preventiva por Medidas Cautelares Diversas (Art. 319 do CPP)",
      "Arguição de Nulidade em Busca Pessoal e Violação Ilegal de Domicílio sem Mandado",
      "Prisão Domiciliar Humanizada para Mães de Menores e Pessoas Acometidas de Enfermidade Grave",
    ],
    casesSummary:
      "Intervimos imediatamente após a lavratura do auto de prisão em flagrante, assegurando que o custodiado não sofra coação e tenha seu direito de defesa exercido com excelência técnica.",
  },
  {
    id: "tribunal-do-juri",
    title: "Tribunal do Júri (Crimes Dolosos)",
    subtitle: "Oratória persuasiva, técnica probatória e defesa estratégica perante o Conselho de Sentença",
    shortDesc:
      "Defesa especializada na instrução e plenário do Júri em casos de homicídio, feminicídio e crimes conexos.",
    description:
      "O Tribunal do Júri julga os crimes dolosos contra a vida (homicídios tentados e consumados, feminicídio, infanticídio e auxílio ao suicídio). Nossa atuação abrange desde a fase instrutória preliminar (judicium accusationis) até a sustentação oral perante os jurados no plenário, sustentando teses de legítima defesa, inexigibilidade de conduta diversa, ausência de dolo e desclassificação de qualificadoras.",
    iconName: "Scale",
    featured: true,
    highlightText: "Preparação meticulosa dos autos, análise pericial balística e sustentação oral combativa.",
    coverageList: [
      "Defesa Completa em Processos de Homicídio Simples e Qualificado",
      "Atuação Estratégica em Casos de Feminicídio e Violência Doméstica Grave",
      "Sustentação de Legítima Defesa Real, Putativa e Estrito Cumprimento do Dever",
      "Pleito de Impronúncia, Absolvição Sumária e Desclassificação de Crime Doloso",
      "Combate Técnico a Qualificadoras Desproporcionais e Motivos Fúteis/Torpes",
      "Reconstituição Simulada dos Fatos e Perícias Balísticas Independentes",
      "Recursos Cabíveis perante o Tribunal de Justiça e Cortes Superiores (STJ e STF)",
    ],
    casesSummary:
      "Estudo detalhado de cada página do processo penal, laudos necroscópicos e oitivas para construir uma narrativa coerente, humana e irrefutável perante os sete jurados.",
  },
  {
    id: "habeas-corpus",
    title: "Habeas Corpus & Recursos Superiores",
    subtitle: "Medida constitucional urgente contra coação ilegal e excesso de prazo em prisões preventivas",
    shortDesc:
      "Impetração célere de Habeas Corpus perante o TJPR, Superior Tribunal de Justiça (STJ) e Supremo Tribunal Federal (STF).",
    description:
      "O Habeas Corpus é o remédio constitucional prioritário para tutelar a liberdade de locomoção violada por decisão ilegal ou abuso de poder. Atuamos com extrema agilidade técnica na formulação de pedidos liminares contra prisões preventivas genéricas, carência de fundamentação jurídica idônea, excesso de prazo na instrução e violações às prerrogativas funcionais da advocacia.",
    iconName: "Award",
    featured: true,
    highlightText: "Combate incansável às prisões preventivas desprovidas de fundamentação legal contemporânea.",
    coverageList: [
      "Habeas Corpus com Pedido Liminar Urgente no Tribunal de Justiça do Paraná (TJPR)",
      "Recurso em Habeas Corpus (RHC) e HC Originário perante o Superior Tribunal de Justiça (STJ)",
      "Impetração e Agravo Regimental no Supremo Tribunal Federal (STF)",
      "Trancamento de Inquérito Policial ou Ação Penal por Ausência de Justa Causa",
      "Arguição de Excesso Desproporcional de Prazo na Conclusão da Instrução Processual",
      "Nulidade de Provas Obtidas por Meios Ilícitos (Quebra Telefônica sem Autorização)",
      "Revogação de Medidas Cautelares Restritivas Desproporcionais e Suspensão de Passaporte",
    ],
    casesSummary:
      "Apresentamos teses sólidas amparadas na jurisprudência mais recente das Turmas Criminais do STJ e STF, buscando o imediato alvará de soltura para o paciente.",
  },
  {
    id: "execucao-penal",
    title: "Execução Penal & Benefícios da LEP",
    subtitle: "Cálculo exato de liquidação de penas pós-Pacote Anticrime e cumprimento digno de direitos",
    shortDesc:
      "Acompanhamento contínuo da execução penal para progressão de regime, livramento condicional e remição de pena.",
    description:
      "A execução da pena não pode extrapolar os limites fixados na condenação. Realizamos a auditoria minuciosa da guia de recolhimento de pena com as novas porcentagens do Pacote Anticrime (Lei 13.964/2019), requerendo progressão para regime semiaberto ou aberto, livramento condicional, indulto humanitário, remição por trabalho ou estudo e transferência prisional.",
    iconName: "Briefcase",
    featured: true,
    highlightText: "Auditoria matemática de frações para antecipar progressões e garantir a reinserção social.",
    coverageList: [
      "Pedido de Progressão de Regime (Fechado para Semiaberto / Aberto Harmonizado)",
      "Concessão de Livramento Condicional e Saídas Temporárias Monitoradas",
      "Remição de Pena por Dias Trabalhados, Estudos Formais e Leitura Certificada",
      "Revisão Criminal para Desconstituição de Sentença Condenatória Transitada em Julgado",
      "Pedido de Prisão Domiciliar Humanizada com Tornozeleira Eletrônica",
      "Defesa Técnica em Procedimento Administrativo Disciplinar (PAD por Falta Grave)",
      "Unificação e Soma de Penas com Detração do Tempo de Prisão Provisória",
    ],
    casesSummary:
      "Fiscalizamos ativamente cada dia cumprido, impedindo que o apenado permaneça no cárcere por tempo superior ao que a legislação estritamente determina.",
  },
];

export interface Review {
  author: string;
  rating: number;
  timeAgo: string;
  text: string;
  source: string;
  details?: string;
}

export const REVIEWS: Review[] = [
  {
    author: "Bruno Lucca",
    rating: 5,
    timeAgo: "um ano atrás",
    text: "Atendimento sensacional, é meu advogado a mais de 4 anos, guerreiro, advogado que vc sabe que vai trabalhar em cima da situação, eu super indico.",
    source: "Google Reviews",
    details: "Local Guide • 39 avaliações • 18 fotos",
  },
  {
    author: "ale ahmad youssef youssef",
    rating: 5,
    timeAgo: "um ano atrás",
    text: "Excelência no atendimento um profissional atencioso comprometido com cliente e seu trabalho muito Obrigado Dr. Marcio. Recomendo!",
    source: "Google Reviews",
    details: "1 avaliação",
  },
  {
    author: "Netto Toyofuku",
    rating: 5,
    timeAgo: "um ano atrás",
    text: "Um ótimo atendimento e orientação. Eu recomendo a quem precisar! Tirou todas as dúvidas explicando as situações e qual caminho tomar. Recomendo sem dúvidas!",
    source: "Google Reviews",
    details: "Local Guide • 14 avaliações • 4 fotos",
  },
  {
    author: "Sander Johnston",
    rating: 5,
    timeAgo: "um ano atrás",
    text: "Me tirou da cadeia! Excelente profissional, deveras competente ao exercer a função de defensor.",
    source: "Google Reviews",
    details: "5 avaliações",
  },
  {
    author: "Denise Bogasz",
    rating: 5,
    timeAgo: "um ano atrás",
    text: "Excelente advogado, muito competente, ótimo atendimento.",
    source: "Google Reviews",
    details: "1 avaliação",
  },
  {
    author: "Felipe Rasera",
    rating: 5,
    timeAgo: "um ano atrás",
    text: "Um Advogado exemplo de competência e determinação!! Parabéns pelo sucesso Dr. Marcio.",
    source: "Google Reviews",
    details: "1 avaliação",
  },
  {
    author: "Alexandre Oliveira swieca",
    rating: 5,
    timeAgo: "um ano atrás",
    text: "Recomendo, ótimo advogado criminalista, serviço de qualidade.",
    source: "Google Reviews",
    details: "1 avaliação",
  },
  {
    author: "Elton Torres",
    rating: 5,
    timeAgo: "um ano atrás",
    text: "Profissional Estudioso especialista em Juri e espaço Acadêmico.",
    source: "Google Reviews",
    details: "18 avaliações",
  },
  {
    author: "Marilene Pereira lima",
    rating: 5,
    timeAgo: "um ano atrás",
    text: "Excelente trabalho, recomendo.",
    source: "Google Reviews",
    details: "1 avaliação",
  },
  {
    author: "filipe caldonazzo",
    rating: 5,
    timeAgo: "um ano atrás",
    text: "Excelente profissional!!! Recomendo!!!",
    source: "Google Reviews",
    details: "7 avaliações • 1 foto",
  },
];

export interface EducationalArticle {
  id: string;
  number: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  content: string[];
  oabDisclaimer: string;
}

export const ARTICLES: EducationalArticle[] = [
  {
    id: "artigo-audiencia-custodia",
    number: "01",
    title: "Audiência de Custódia em 24h: Como Funciona e Por Que é Decisiva",
    category: "Direito Criminal",
    readTime: "4 min de leitura",
    summary:
      "Entenda o rito legal estabelecido pelo Código de Processo Penal e as hipóteses de relaxamento de prisão ou liberdade provisória com advogado.",
    content: [
      "Instituída com base no Pacto de San José da Costa Rica e positivada pelo Pacote Anticrime no art. 310 do CPP, a audiência de custódia impõe que toda pessoa presa em flagrante seja apresentada a um juiz em até 24 horas.",
      "O ato não se destina a julgar o mérito da acusação ou apurar a culpa, mas sim a averiguar a legalidade estrita do flagrante, a ocorrência de maus-tratos ou tortura e a real necessidade da manutenção da custódia cautelar.",
      "A presença ativa de um advogado criminalista na audiência é indispensável para demonstrar condições pessoais favoráveis (residência fixa, ocupação lícita e primariedade) e pleitear a liberdade provisória com aplicação de medidas cautelares alternativas à prisão.",
    ],
    oabDisclaimer:
      "Conteúdo puramente educativo com finalidade de orientação pública, em estrita observância ao Provimento 205/2021 da OAB.",
  },
  {
    id: "artigo-tribunal-juri",
    number: "02",
    title: "O Tribunal do Júri no Brasil: As Duas Fases do Processo por Crime Doloso",
    category: "Tribunal do Júri",
    readTime: "5 min de leitura",
    summary:
      "Saiba como se divide o procedimento do Júri (fase da pronúncia e julgamento popular) e quais são as principais garantias do acusado.",
    content: [
      "O Tribunal do Júri é garantia fundamental prevista no art. 5º, XXXVIII da Constituição Federal, detendo competência exclusiva para julgar os crimes dolosos contra a vida, consumados ou tentados.",
      "O procedimento é escalonado em duas fases distintas: a primeira (judicium accusationis), perante o juiz togado, que decide se há indícios suficientes para a pronúncia; e a segunda (judicium causae), quando sete cidadãos jurados formam o Conselho de Sentença para proferir o veredito por íntima convicção.",
      "A preparação técnica probatória e a combatividade do advogado defensor são vitais para demonstrar teses como legítima defesa, falta de provas ou afastar qualificadoras desarrazoadas.",
    ],
    oabDisclaimer:
      "Artigo informativo e de interesse social, elaborado nos termos do Provimento 205/2021 do Conselho Federal da OAB.",
  },
  {
    id: "artigo-trafico-usuario",
    number: "03",
    title: "Tráfico de Drogas x Porte para Uso: Critérios Legais e STF",
    category: "Legislação Penal Especial",
    readTime: "4 min de leitura",
    summary:
      "A distinção entre o art. 28 e o art. 33 da Lei 11.343/2006, os critérios objetivos do STF e a figura do tráfico privilegiado.",
    content: [
      "A Lei de Drogas tipifica o crime de tráfico no art. 33 com pena de 5 a 15 anos de reclusão, enquanto a posse para consumo pessoal (art. 28) é conduta despenalizada, não sujeita à privação de liberdade.",
      "O Supremo Tribunal Federal, no julgamento do RE 635.659, fixou parâmetros objetivos para a presunção relativa de porte pessoal de cannabis (até 40 gramas ou 6 pés fêmeas), afastando a capitulação automática como traficante com base apenas no relato policial.",
      "Além disso, quando preenchidos os requisitos do tráfico privilegiado (primariedade, bons antecedentes e ausência de ligação com organização criminosa), a pena pode ser reduzida em até 2/3, permitindo a fixação de regime aberto.",
    ],
    oabDisclaimer:
      "Material didático elaborado em conformidade com as diretrizes do Provimento 205/2021 do Conselho Federal da OAB.",
  },
  {
    id: "artigo-habeas-corpus-requisitos",
    number: "04",
    title: "Habeas Corpus: Quando Cabe e Como Atua na Defesa da Liberdade",
    category: "Direito Criminal",
    readTime: "4 min de leitura",
    summary:
      "A ação constitucional que combate prisões preventivas desprovidas de fundamentação legal concreta ou excesso de prazo.",
    content: [
      "O Habeas Corpus tem assento constitucional no art. 5º, LXVIII da CF/88, sendo cabível sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder.",
      "Uma das causas mais recorrentes de concessão de HC é a decretação de prisão preventiva fundamentada exclusivamente na gravidade abstrata do delito, sem apontar elementos fáticos contemporâneos e concretos do caso.",
      "A impetração com pedido de medida liminar aos Tribunais de Justiça e Tribunais Superiores busca fazer cessar o constrangimento ilegal de imediato, expedindo o devido alvará de soltura.",
    ],
    oabDisclaimer:
      "Conteúdo com finalidade estritamente pedagógica e informativa, em cumprimento às normas éticas da OAB.",
  },
  {
    id: "artigo-execucao-pacote-anticrime",
    number: "05",
    title: "Progressão de Regime Pós-Pacote Anticrime: Novas Porcentagens da LEP",
    category: "Execução Penal",
    readTime: "4 min de leitura",
    summary:
      "Entenda como a Lei 13.964/2019 alterou as frações de cumprimento de pena para progressão ao semiaberto e aberto.",
    content: [
      "O Pacote Anticrime revogou as antigas frações da Lei de Execução Penal (1/6, 2/5 e 3/5) e instituiu um sistema de porcentagens variáveis (de 16% a 70%) com base na primariedade, reincidência e natureza do crime (com ou sem violência, hediondo ou comum).",
      "Essa modificação exige cálculo de liquidação de pena rigoroso para evitar que apenados permaneçam em regime mais gravoso por erro de cálculo da secretaria da vara de execuções.",
      "A contagem de remição por trabalho e cursos de estudo formal deve ser requerida periodicamente para abreviar o tempo de cumprimento de pena e garantir a ressocialização digna.",
    ],
    oabDisclaimer:
      "Texto puramente informativo com finalidade de esclarecimento público, em cumprimento ao Provimento 205/2021 da OAB.",
  },
];

export const EDUCATIONAL_TOPICS = ARTICLES;

export interface Step {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export const WORK_PROCESS_STEPS: Step[] = [
  {
    number: "01",
    title: "Contato Urgente & Plantão",
    subtitle: "Atendimento imediato via WhatsApp ou presencial",
    description:
      "Você ou a família entra em contato imediatamente. Coletamos dados da ocorrência, delegacia ou vara criminal para intervenção urgente.",
  },
  {
    number: "02",
    title: "Análise dos Autos & Diligências",
    subtitle: "Presença em delegacia e conferência do inquérito",
    description:
      "Acompanhamos oitivas, examinamos o auto de prisão em flagrante e identificamos eventuais nulidades de procedimento policial.",
  },
  {
    number: "03",
    title: "Estratégia Defensiva & Liberdade",
    subtitle: "Audiência de custódia, pedidos de soltura e HC",
    description:
      "Atuamos perante o juízo para relaxamento da prisão ilegal, revogação de preventiva ou impetração célere de Habeas Corpus no Tribunal.",
  },
  {
    number: "04",
    title: "Acompanhamento Combate & Família",
    subtitle: "Transparência total até a conclusão do processo",
    description:
      "Comunicação contínua e acolhedora com os familiares, com defesa combativa em todas as fases da instrução até a sentença ou Júri.",
  },
];

export const WORK_STEPS = WORK_PROCESS_STEPS;

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqCategory {
  id: string;
  label: string;
  iconName: string;
  items: FaqItem[];
}

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: "flagrante-custodia",
    label: "Flagrante & Custódia",
    iconName: "ShieldCheck",
    items: [
      {
        id: "faq-flag-1",
        question: "Meu familiar foi preso em flagrante agora. Ele sai na Audiência de Custódia?",
        answer:
          "A audiência de custódia deve ocorrer em até 24 horas. O juiz avalia a legalidade da prisão e a real necessidade de mantê-la. Se o preso for primário, tiver bons antecedentes, residência fixa e trabalho, o advogado demonstra a ausência dos requisitos da prisão preventiva (art. 312 do CPP), viabilizando a concessão de liberdade provisória com ou sem fiança e aplicação de medidas cautelares alternativas.",
      },
      {
        id: "faq-flag-2",
        question: "A polícia pode invadir a residência sem mandado judicial?",
        answer:
          "Não. O domicílio é asilo inviolável (art. 5º, XI da CF). A entrada forçada sem mandado só é lícita em flagrante delito amparado em fundadas razões prévias (justa causa) devidamente comprovadas a posteriori pelo STF e STJ. Denúncia anônima ou fuga isolada não autorizam a invasão. Provas obtidas com invasão ilícita são nulas, gerando o trancamento do processo e a soltura do acusado.",
      },
      {
        id: "faq-flag-3",
        question: "O investigado é obrigado a responder perguntas no interrogatório policial?",
        answer:
          "Não. Ninguém é obrigado a produzir prova contra si mesmo (princípio do nemo tenetur se detegere). O direito ao silêncio é garantia constitucional fundamental e não pode ser interpretado como presunção de culpa ou prejuízo para a defesa.",
      },
      {
        id: "faq-flag-4",
        question: "Como funciona a fiança e quem pode arbitrá-la?",
        answer:
          "Para infrações cuja pena máxima privativa de liberdade não ultrapasse 4 anos, a fiança pode ser arbitrada diretamente pelo Delegado de Polícia. Nos demais casos, compete exclusivamente ao Juiz de Direito examinar e arbitrar o valor da fiança ou dispensá-la em caso de hipossuficiência financeira.",
      },
    ],
  },
  {
    id: "tribunal-juri",
    label: "Tribunal do Júri & Crimes Graves",
    iconName: "Scale",
    items: [
      {
        id: "faq-juri-1",
        question: "Quem julga no Tribunal do Júri e como funciona o veredito?",
        answer:
          "No Tribunal do Júri, o julgamento é feito por sete cidadãos comuns que compõem o Conselho de Sentença. Eles respondem a quesitos sigilosos e decidem por maioria de votos sobre a materialidade, a autoria, a absolvição do réu e a aplicação de qualificadoras.",
      },
      {
        id: "faq-juri-2",
        question: "O que é legítima defesa e como ela afasta a condenação?",
        answer:
          "A legítima defesa ocorre quando alguém repele agressão injusta, atual ou iminente, a direito seu ou de outrem, usando moderadamente dos meios necessários. Quando demonstrada nos autos, pode levar à absolvição sumária do réu pelo juiz togado ou à absolvição pelo Conselho de Sentença no plenário do Júri.",
      },
      {
        id: "faq-juri-3",
        question: "Qual a diferença entre porte de drogas para uso e tráfico?",
        answer:
          "O porte para consumo pessoal (art. 28 da Lei 11.343/2006) é conduta despenalizada que não prevê prisão. Já o tráfico (art. 33) comina pena de 5 a 15 anos de reclusão. O STF estabeleceu a presunção relativa de até 40g ou 6 plantas fêmeas para consumo próprio, sendo imprescindível a análise técnica das circunstâncias da apreensão para afastar imputações indevidas.",
      },
    ],
  },
  {
    id: "execucao-recursos",
    label: "Execução Penal & Habeas Corpus",
    iconName: "Award",
    items: [
      {
        id: "faq-exec-1",
        question: "Quando cabe impetrar um Habeas Corpus?",
        answer:
          "O Habeas Corpus é cabível sempre que houver violência ou ameaça de coação ilegal na liberdade de locomoção. É amplamente utilizado contra prisões preventivas abusivas, falta de fundamentação em decisões judiciais, excesso desarrazoado de prazo na instrução e nulidades absolutas do processo.",
      },
      {
        id: "faq-exec-2",
        question: "Como funciona a progressão de regime na Execução Penal?",
        answer:
          "A progressão de regime (fechado para semiaberto, e semiaberto para aberto) exige o cumprimento de percentuais da pena fixados pelo Pacote Anticrime (de 16% a 70%, conforme a natureza do crime e primariedade) somado ao bom comportamento carcerário atestado pela direção prisional.",
      },
      {
        id: "faq-exec-3",
        question: "Como os dias trabalhados e estudos abatem a pena (remição)?",
        answer:
          "A Lei de Execução Penal assegura que a cada 3 dias de trabalho formal o apenado abate 1 dia de sua pena. Da mesma forma, a cada 12 horas de frequência escolar ou leitura comprovada e avaliada de obras literárias há a remição proporcional de dias de cumprimento de pena.",
      },
    ],
  },
  {
    id: "atendimento",
    label: "Atendimento & Prerrogativas",
    iconName: "Clock",
    items: [
      {
        id: "faq-atend-1",
        question: "Como funciona o atendimento emergencial para prisões em flagrante?",
        answer:
          "Mantemos canal direto via WhatsApp com plantão para casos de prisão em flagrante e audiências de custódia em Curitiba e Região Metropolitana, viabilizando o deslocamento imediato até a delegacia de polícia competente.",
      },
      {
        id: "faq-atend-2",
        question: "Onde fica localizado o escritório em Curitiba?",
        answer:
          "Nossa sede física está localizada na R. Francisco Derosso, 2065 - Sala 12 - Xaxim, Curitiba/PR (CEP 81720-000), com ambiente reservado para consultoria presencial e infraestrutura segura para atendimento online para todo o Estado do Paraná.",
      },
      {
        id: "faq-atend-3",
        question: "O que significa ser Membro da Comissão de Prerrogativas da OAB?",
        answer:
          "As prerrogativas da advocacia constituem garantias legais (Lei 8.906/1994) destinadas a assegurar a ampla e plena defesa do cidadão sem submissão a arbitrariedades de autoridades policiais ou judiciais. Como membro da Comissão, Márcio Wagner Costa zela pela inviolabilidade do sigilo profissional, acesso irrestrito aos autos e respeito às garantias do acusado.",
      },
    ],
  },
];

export const FAQ_DATA = FAQ_CATEGORIES;