import React from 'react';
import { X, ShieldAlert, HeartHandshake, Eye, Hand, Ban, Sparkles, Check } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const SafetyModal: React.FC = () => {
  const { isSafetyModalOpen, closeSafetyModal } = useApp();

  if (!isSafetyModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ocean-950/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border-2 border-ocean-200 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header with Aquatic Graphic */}
        <div className="bg-gradient-to-r from-ocean-600 to-ocean-700 px-6 py-5 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-md">
              <ShieldAlert className="w-6 h-6 text-sun-300" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider font-extrabold text-sun-300">
                Prioridade Absoluta
              </span>
              <h3 className="text-lg sm:text-xl font-display font-black leading-tight">
                Regras de Ouro da Tia Noêmia
              </h3>
            </div>
          </div>
          <button
            onClick={closeSafetyModal}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-slate-700 text-sm leading-relaxed">
          <p className="text-xs text-ocean-900 bg-ocean-50 p-3 rounded-xl border border-ocean-100 font-medium">
            O aplicativo <strong>Nadando com a Tia Noêmia</strong> foi desenvolvido para educar os pais e responsáveis. Todas as orientações são dirigidas a você adulto. Siga estas diretrizes inegociáveis:
          </p>

          <div className="grid gap-3">
            {/* Rule 1 */}
            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-rose-50 border border-rose-100">
              <div className="w-7 h-7 rounded-xl bg-rose-500 text-white flex items-center justify-center shrink-0 font-black text-xs">
                1
              </div>
              <div>
                <h5 className="font-bold text-rose-950 text-sm flex items-center gap-1.5">
                  <Hand className="w-4 h-4 text-rose-600" /> Nunca na água desacompanhada
                </h5>
                <p className="text-xs text-rose-900/80 mt-0.5">
                  A criança jamais deve entrar, brincar ou permanecer próxima da piscina sem a presença física direta de um adulto responsável.
                </p>
              </div>
            </div>

            {/* Rule 2 */}
            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-amber-50 border border-amber-100">
              <div className="w-7 h-7 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 font-black text-xs">
                2
              </div>
              <div>
                <h5 className="font-bold text-amber-950 text-sm flex items-center gap-1.5">
                  <Eye className="w-4 h-4 text-amber-600" /> Supervisão 100% ativa e atenta
                </h5>
                <p className="text-xs text-amber-900/80 mt-0.5">
                  Não use celulares, redes sociais ou livros na borda. Acidentes aquáticos acontecem em silêncio absoluto e em frações de segundos.
                </p>
              </div>
            </div>

            {/* Rule 3 */}
            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-sky-50 border border-sky-100">
              <div className="w-7 h-7 rounded-xl bg-sky-600 text-white flex items-center justify-center shrink-0 font-black text-xs">
                3
              </div>
              <div>
                <h5 className="font-bold text-sky-950 text-sm flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-sky-600" /> A Regra do Toque (Alcance Imediato)
                </h5>
                <p className="text-xs text-sky-900/80 mt-0.5">
                  Durante todas as atividades na água, mantenha a criança a uma distância máxima de um braço esticado. Esteja sempre pronto para apoiar.
                </p>
              </div>
            </div>

            {/* Rule 4 */}
            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-emerald-50 border border-emerald-100">
              <div className="w-7 h-7 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 font-black text-xs">
                4
              </div>
              <div>
                <h5 className="font-bold text-emerald-950 text-sm flex items-center gap-1.5">
                  <HeartHandshake className="w-4 h-4 text-emerald-600" /> Respeito total ao ritmo e vontade
                </h5>
                <p className="text-xs text-emerald-900/80 mt-0.5">
                  Nenhuma atividade deve ser forçada contra a vontade da criança. O aprendizado da natação é afeto, paciência e diversão.
                </p>
              </div>
            </div>

            {/* Rule 5 */}
            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-indigo-50 border border-indigo-100">
              <div className="w-7 h-7 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 font-black text-xs">
                5
              </div>
              <div>
                <h5 className="font-bold text-indigo-950 text-sm flex items-center gap-1.5">
                  <Ban className="w-4 h-4 text-indigo-600" /> Sem desafios perigosos ou apneia
                </h5>
                <p className="text-xs text-indigo-900/80 mt-0.5">
                  Não utilize cronômetros de respiração, disputas de prender o ar ou jogos competitivos de tempo debaixo d’água.
                </p>
              </div>
            </div>

            {/* Rule 6 */}
            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-purple-50 border border-purple-100">
              <div className="w-7 h-7 rounded-xl bg-purple-600 text-white flex items-center justify-center shrink-0 font-black text-xs">
                6
              </div>
              <div>
                <h5 className="font-bold text-purple-950 text-sm flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-purple-600" /> Consulte antes de entrar na piscina
                </h5>
                <p className="text-xs text-purple-900/80 mt-0.5">
                  Leia as orientações no aplicativo enquanto estiver seco e relaxado. Ao entrar na piscina com a criança, guarde o telefone e viva o momento presente com ela!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-end shrink-0">
          <button
            onClick={closeSafetyModal}
            className="w-full sm:w-auto px-6 py-3 rounded-full text-sm font-black bg-sun-400 hover:bg-sun-300 active:bg-sun-500 text-ocean-950 shadow-btn-yellow hover:shadow-btn-yellow-active transition-all"
          >
            Entendi e estou comprometido(a)!
          </button>
        </div>
      </div>
    </div>
  );
};
