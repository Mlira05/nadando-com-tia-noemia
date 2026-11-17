export type Periodicity = 'mensal' | 'semestral' | 'anual';

export interface InteractiveStep {
  stepNumber: number;
  title: string;
  instruction: string;
  parentTip: string;
  durationSeconds?: number;
  badgeName?: string;
}

export interface Story {
  slug: string;
  number: number;
  title: string;
  subtitle: string;
  shortDescription: string;
  image: string;
  iconName: string;
  duration: string;
  level: string;
  sinopse: string;
  learningObjectives: string[];
  skills: string[];
  parentGuidance: {
    step: number;
    title: string;
    instruction: string;
    importantTip?: string;
  }[];
  safetyWarning: string;
  practiceSteps: InteractiveStep[];
}

export interface Plan {
  id: 'familia' | 'pequeno-nadador' | 'super-nadador';
  name: string;
  tagline: string;
  mascot: 'tartaruga' | 'peixinho' | 'golfinho';
  mascotName: string;
  mascotImage: string;
  highlight: boolean;
  highlightLabel?: string;
  prices: {
    mensal: {
      total: number;
      monthlyEquivalent: number;
      discountPercent: number;
      savingsLabel?: string;
    };
    semestral: {
      total: number;
      monthlyEquivalent: number;
      discountPercent: number;
      savingsLabel: string;
    };
    anual: {
      total: number;
      monthlyEquivalent: number;
      discountPercent: number;
      savingsLabel: string;
    };
  };
  features: string[];
  inPersonClassesPerWeek: number;
  availabilityNote: string;
}

export interface StudentSession {
  isStudent: boolean;
  studentCode: string;
  studentName: string;
  planName: string;
  loginDate: string;
}
