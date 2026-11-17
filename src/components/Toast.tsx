import React from 'react';
import { useApp } from '../context/AppContext';
import { Sparkles } from 'lucide-react';

export const Toast: React.FC = () => {
  const { toastMessage } = useApp();

  if (!toastMessage) return null;

  return (
    <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 px-4 w-full max-w-sm pointer-events-none animate-bounce-subtle">
      <div className="bg-ocean-900 text-white px-4 py-3 rounded-2xl shadow-2xl border-2 border-sun-400 flex items-center gap-3 text-xs sm:text-sm font-bold">
        <Sparkles className="w-5 h-5 text-sun-400 shrink-0 fill-sun-400" />
        <span className="flex-1 leading-snug">{toastMessage}</span>
      </div>
    </div>
  );
};
