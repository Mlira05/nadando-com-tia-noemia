import React, { useState, useEffect } from 'react';
import { X, ChevronRight, ChevronLeft, ShieldAlert, Award, Sparkles, Play, Pause, RotateCcw } from 'lucide-react';
import { useApp } from '../context/AppContext';
import confetti from 'canvas-confetti';

export const StoryPlayerModal: React.FC = () => {
  const { activeStoryForPlayer, closeStoryPlayer, markStoryCompleted } = useApp();
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(5);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (activeStoryForPlayer) {
      setCurrentStepIndex(0);
      setTimerSeconds(5);
      setIsTimerRunning(false);
      setIsCompleted(false);
    }
  }, [activeStoryForPlayer]);

  // Timer countdown
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (isTimerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev - 1);
      }, 1000);
    } else if (timerSeconds === 0 && isTimerRunning) {
      setIsTimerRunning(false);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning, timerSeconds]);

  if (!activeStoryForPlayer) return null;

  const steps = activeStoryForPlayer.practiceSteps || [];
  const totalSteps = steps.length;
  const currentStep = steps[currentStepIndex];

  const handleNext = () => {
    if (currentStepIndex < totalSteps - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    } else {
      setIsCompleted(true);
      markStoryCompleted(activeStoryForPlayer.slug);
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.5 },
          colors: ['#0284c7', '#38bdf8', '#facc15', '#2dd4bf']
        });
      } catch {
        // ignore
      }
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  const toggleTimer = () => {
    if (timerSeconds === 0) setTimerSeconds(5);
    setIsTimerRunning(!isTimerRunning);
  };

  const resetTimer = () => {
    setIsTimerRunning(false);
    setTimerSeconds(5);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-ocean-950/75 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border-2 border-ocean-200 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Top Header */}
        <div className="bg-gradient-to-r from-ocean-500 to-ocean-600 px-4 py-3 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <button
              onClick={closeStoryPlayer}
              className="p-1 hover:bg-white/20 rounded-lg transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div>
              <span className="text-[10px] uppercase tracking-wider font-extrabold text-sun-300">
                Atividade Interativa
              </span>
              <h4 className="text-sm font-display font-black truncate max-w-[220px]">
                {activeStoryForPlayer.title}
              </h4>
            </div>
          </div>
          <button
            onClick={closeStoryPlayer}
            className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 overflow-y-auto flex-1 flex flex-col justify-between">
          {isCompleted ? (
            /* Celebration Screen (Screen 8 of reference image) */
            <div className="text-center py-4 space-y-4 my-auto animate-fade-in">
              <div className="relative w-28 h-28 mx-auto flex items-center justify-center">
                <div className="absolute inset-0 bg-sun-300/30 rounded-full blur-xl animate-pulse"></div>
                {/* Shield badge */}
                <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-sun-400 via-amber-400 to-sun-500 p-1 shadow-lg transform rotate-1 flex items-center justify-center">
                  <div className="w-full h-full bg-ocean-600 rounded-xl flex flex-col items-center justify-center text-white p-2">
                    <Award className="w-8 h-8 text-sun-300 drop-shadow mb-0.5" />
                    <span className="text-[9px] font-black uppercase tracking-wider text-sun-200">
                      Amigo da Água
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-bold text-sun-600 uppercase tracking-wider flex items-center justify-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> Atividade concluída! 🎉
                </span>
                <h3 className="text-2xl font-display font-black text-ocean-950">
                  Parabéns, Nadadores!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-xs mx-auto">
                  Você e seu pequeno(a) deram mais um passo importante na jornada de confiança aquática! 🐬
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-ocean-50 border border-ocean-100 text-left text-xs">
                <div className="font-bold text-ocean-900 mb-1">Próximo Passo Recomendado:</div>
                <div className="text-slate-600">
                  Repita estes mesmos movimentos nos próximos 2 banhos de piscina para fixar o hábito com calma e segurança.
                </div>
              </div>

              <button
                onClick={closeStoryPlayer}
                className="w-full py-3.5 rounded-full font-display font-black text-sm bg-sun-400 hover:bg-sun-300 active:bg-sun-500 text-ocean-950 shadow-btn-yellow transition-all"
              >
                Continuar Jornada
              </button>
            </div>
          ) : (
            <>
              {/* Step counter */}
              <div className="flex items-center justify-between text-xs font-bold text-ocean-600 mb-3">
                <span className="bg-ocean-100 px-2.5 py-1 rounded-full">
                  Passo {currentStepIndex + 1} de {totalSteps}
                </span>
                <div className="flex gap-1.5">
                  {steps.map((_, idx) => (
                    <span
                      key={idx}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        idx === currentStepIndex
                          ? 'bg-ocean-600 w-5'
                          : idx < currentStepIndex
                          ? 'bg-emerald-500'
                          : 'bg-slate-200'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Step Image */}
              <div className="relative rounded-2xl overflow-hidden mb-4 border border-ocean-100 shadow-sm aspect-video bg-ocean-50">
                <img
                  src={activeStoryForPlayer.image}
                  alt={currentStep?.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-3">
                  <span className="text-white text-xs font-bold drop-shadow">
                    {currentStep?.title}
                  </span>
                </div>
              </div>

              {/* Step Content */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-2xl bg-ocean-50 border border-ocean-100">
                  <h5 className="font-display font-black text-ocean-950 text-sm mb-1">
                    Como guiar a atividade:
                  </h5>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {currentStep?.instruction}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs">
                  <strong className="font-bold">Dica da Tia Noêmia: </strong>
                  {currentStep?.parentTip}
                </div>

                {/* Optional interactive timer for practice (Screen 7 style) */}
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* Ring circular indicator */}
                    <div className="relative w-12 h-12 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full border-4 border-ocean-200 flex items-center justify-center font-display font-black text-ocean-700 text-base">
                        {timerSeconds}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-800">Prática Guiada</div>
                      <div className="text-[10px] text-slate-500">
                        {timerSeconds === 0 ? 'Concluído!' : 'Tempo sugerido de repetição'}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={toggleTimer}
                      className="p-2 rounded-xl bg-ocean-600 hover:bg-ocean-700 text-white transition-colors"
                      title={isTimerRunning ? 'Pausar' : 'Iniciar'}
                    >
                      {isTimerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </button>
                    <button
                      onClick={resetTimer}
                      className="p-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 transition-colors"
                      title="Reiniciar"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Safety reminder */}
                <div className="flex items-center gap-2 text-[10px] text-slate-500">
                  <ShieldAlert className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>Mantenha contato corporal contínuo durante toda a execução.</span>
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="flex items-center justify-between gap-3 pt-4 border-t border-slate-100 mt-4">
                <button
                  onClick={handlePrev}
                  disabled={currentStepIndex === 0}
                  className={`px-4 py-2.5 rounded-full text-xs font-bold flex items-center gap-1 ${
                    currentStepIndex === 0
                      ? 'text-slate-300 cursor-not-allowed'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Voltar</span>
                </button>

                <button
                  onClick={handleNext}
                  className="px-6 py-2.5 rounded-full text-xs font-black bg-sun-400 hover:bg-sun-300 active:bg-sun-500 text-ocean-950 shadow-btn-yellow transition-all flex items-center gap-1.5"
                >
                  <span>{currentStepIndex === totalSteps - 1 ? 'Concluir' : 'Próximo'}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
