import React, { createContext, useContext, useState } from 'react';
import confetti from 'canvas-confetti';
import { Plan, Periodicity, Story, StudentSession } from '../types';
import { PLANS_DATA } from '../data/plans';

interface AppContextType {
  isStudent: boolean;
  studentSession: StudentSession | null;
  completedStories: string[];
  loginWithCode: (code: string) => { success: boolean; message: string };
  logout: () => void;
  markStoryCompleted: (slug: string) => void;
  
  // Plan Modal
  isPlanModalOpen: boolean;
  selectedPlan: Plan | null;
  selectedPeriodicity: Periodicity;
  openPlanModal: (plan: Plan, periodicity: Periodicity) => void;
  closePlanModal: () => void;
  
  // Safety Modal
  isSafetyModalOpen: boolean;
  openSafetyModal: () => void;
  closeSafetyModal: () => void;

  // Story Player Modal (for unlocked practice)
  activeStoryForPlayer: Story | null;
  openStoryPlayer: (story: Story) => void;
  closeStoryPlayer: () => void;

  // Notification Toast
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const LOCAL_STORAGE_SESSION_KEY = 'tia_noemia_student_session';
const LOCAL_STORAGE_COMPLETED_KEY = 'tia_noemia_completed_stories';

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [studentSession, setStudentSession] = useState<StudentSession | null>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_SESSION_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [completedStories, setCompletedStories] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_COMPLETED_KEY);
      return saved ? JSON.parse(saved) : ['aprendendo-a-nadar'];
    } catch {
      return ['aprendendo-a-nadar'];
    }
  });

  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(PLANS_DATA[0]);
  const [selectedPeriodicity, setSelectedPeriodicity] = useState<Periodicity>('mensal');

  const [isSafetyModalOpen, setIsSafetyModalOpen] = useState(false);
  const [activeStoryForPlayer, setActiveStoryForPlayer] = useState<Story | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((curr) => (curr === msg ? null : curr));
    }, 4000);
  };

  const loginWithCode = (rawCode: string) => {
    const code = rawCode.trim().toUpperCase();
    if (!code) {
      return { success: false, message: 'Por favor, insira o código fornecido pela Tia Noêmia.' };
    }

    let studentName = 'Família Nadadora';
    let planName = 'Nadando em Família';

    if (code === 'NOEMIA2025' || code.includes('SUPER')) {
      studentName = 'Família do Gabriel (Aluno Presencial)';
      planName = 'Super Nadador (2x por semana)';
    } else if (code === 'NADAR123' || code.includes('PEQUENO')) {
      studentName = 'Família da Clara (Aluna Presencial)';
      planName = 'Pequeno Nadador (1x por semana)';
    } else {
      studentName = `Aluno Convidado (${code})`;
      planName = 'Nadando em Família (Acesso Completo)';
    }

    const session: StudentSession = {
      isStudent: true,
      studentCode: code,
      studentName,
      planName,
      loginDate: new Date().toISOString()
    };

    try {
      localStorage.setItem(LOCAL_STORAGE_SESSION_KEY, JSON.stringify(session));
    } catch (e) {
      console.error(e);
    }

    setStudentSession(session);

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }

    showToast(`Bem-vindo, ${studentName}! Todas as historinhas estão desbloqueadas.`);
    return { success: true, message: `Acesso liberado com sucesso!` };
  };

  const logout = () => {
    try {
      localStorage.removeItem(LOCAL_STORAGE_SESSION_KEY);
    } catch (e) {
      console.error(e);
    }
    setStudentSession(null);
    showToast('Você está navegando no modo visitante.');
  };

  const markStoryCompleted = (slug: string) => {
    setCompletedStories((prev) => {
      if (prev.includes(slug)) return prev;
      const updated = [...prev, slug];
      try {
        localStorage.setItem(LOCAL_STORAGE_COMPLETED_KEY, JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });

    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5 },
        colors: ['#0284c7', '#38bdf8', '#facc15', '#2dd4bf']
      });
    } catch {
      // ignore
    }

    showToast('🎉 Parabéns! Atividade concluída com sucesso!');
  };

  const openPlanModal = (plan: Plan, periodicity: Periodicity) => {
    setSelectedPlan(plan);
    setSelectedPeriodicity(periodicity);
    setIsPlanModalOpen(true);
  };

  const closePlanModal = () => {
    setIsPlanModalOpen(false);
  };

  const openSafetyModal = () => setIsSafetyModalOpen(true);
  const closeSafetyModal = () => setIsSafetyModalOpen(false);

  const openStoryPlayer = (story: Story) => setActiveStoryForPlayer(story);
  const closeStoryPlayer = () => setActiveStoryForPlayer(null);

  return (
    <AppContext.Provider
      value={{
        isStudent: Boolean(studentSession?.isStudent),
        studentSession,
        completedStories,
        loginWithCode,
        logout,
        markStoryCompleted,
        isPlanModalOpen,
        selectedPlan,
        selectedPeriodicity,
        openPlanModal,
        closePlanModal,
        isSafetyModalOpen,
        openSafetyModal,
        closeSafetyModal,
        activeStoryForPlayer,
        openStoryPlayer,
        closeStoryPlayer,
        toastMessage,
        showToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
