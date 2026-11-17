import { Plan } from '../types';
import { getAssetUrl } from '../utils/assets';

export const PLANS_DATA: Plan[] = [
  {
    id: 'familia',
    name: 'Nadando em Família',
    tagline: 'Ideal para pais que desejam guiar os primeiros passos na água em casa ou no clube.',
    mascot: 'tartaruga',
    mascotName: 'Tatty, a Tartaruguinha',
    mascotImage: getAssetUrl('images/tartaruga.jpg'),
    highlight: false,
    prices: {
      mensal: {
        total: 39.90,
        monthlyEquivalent: 39.90,
        discountPercent: 0,
      },
      semestral: {
        total: 227.43,
        monthlyEquivalent: 37.91,
        discountPercent: 5,
        savingsLabel: 'Economize 5% (R$ 11,97)',
      },
      anual: {
        total: 430.92,
        monthlyEquivalent: 35.91,
        discountPercent: 10,
        savingsLabel: 'Economize 10% (R$ 47,88)',
      },
    },
    features: [
      'Acesso completo e ilimitado ao aplicativo PWA',
      'Todas as 6 historinhas e jornadas educativas',
      'Orientações pedagógicas detalhadas para pais e responsáveis',
      'Acompanhamento do progresso e conquistas da criança',
      'Acesso garantido a novos conteúdos e atualizações futuras',
      'Suporte a dúvidas através da comunidade da Tia Noêmia'
    ],
    inPersonClassesPerWeek: 0,
    availabilityNote: 'Acesso 100% digital liberado imediatamente em qualquer dispositivo.'
  },
  {
    id: 'pequeno-nadador',
    name: 'Pequeno Nadador',
    tagline: 'Combinação perfeita: orientação digital em família + aula presencial semanal.',
    mascot: 'peixinho',
    mascotName: 'Peixinho Dourado',
    mascotImage: getAssetUrl('images/peixinho.jpg'),
    highlight: false,
    prices: {
      mensal: {
        total: 400.00,
        monthlyEquivalent: 400.00,
        discountPercent: 0,
      },
      semestral: {
        total: 2280.00,
        monthlyEquivalent: 380.00,
        discountPercent: 5,
        savingsLabel: 'Economize 5% (R$ 120,00)',
      },
      anual: {
        total: 4320.00,
        monthlyEquivalent: 360.00,
        discountPercent: 10,
        savingsLabel: 'Economize 10% (R$ 480,00)',
      },
    },
    features: [
      'Todos os benefícios do aplicativo e historinhas inclusos',
      '1 aula presencial de natação por semana com a Tia Noêmia',
      'Acompanhamento profissional individualizado e carinhoso',
      'Aprendizagem respeitando o ritmo e desenvolvimento da criança',
      'Relatórios mensais de evolução psicomotora na água',
      'Kit de boas-vindas com touca oficial da Tia Noêmia'
    ],
    inPersonClassesPerWeek: 1,
    availabilityNote: 'Aulas presenciais sujeitas à disponibilidade de horários e regiões atendidas.'
  },
  {
    id: 'super-nadador',
    name: 'Super Nadador',
    tagline: 'Maior frequência e rápida evolução com duas aulas presenciais por semana!',
    mascot: 'golfinho',
    mascotName: 'Delfi, o Golfinho',
    mascotImage: getAssetUrl('images/golfinho.jpg'),
    highlight: true,
    highlightLabel: 'Maior frequência de aulas',
    prices: {
      mensal: {
        total: 600.00,
        monthlyEquivalent: 600.00,
        discountPercent: 0,
      },
      semestral: {
        total: 3420.00,
        monthlyEquivalent: 570.00,
        discountPercent: 5,
        savingsLabel: 'Economize 5% (R$ 180,00)',
      },
      anual: {
        total: 6480.00,
        monthlyEquivalent: 540.00,
        discountPercent: 10,
        savingsLabel: 'Economize 10% (R$ 720,00)',
      },
    },
    features: [
      'Todos os benefícios do aplicativo e historinhas inclusos',
      '2 aulas presenciais de natação por semana com a Tia Noêmia',
      'Acompanhamento profissional intensivo e personalizado',
      'Maior frequência de prática para consolidação motora rápida',
      'Avaliações contínuas de segurança e respiração aquática',
      'Prioridade na escolha de horários e reposições',
      'Kit completo com touca e mochila da Tia Noêmia'
    ],
    inPersonClassesPerWeek: 2,
    availabilityNote: 'Aulas presenciais sujeitas à disponibilidade de horários e regiões atendidas.'
  }
];
