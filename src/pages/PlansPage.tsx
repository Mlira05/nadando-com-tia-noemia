import React, { useState } from 'react';
import { Check, Sparkles, Star, Calendar, ShieldCheck } from 'lucide-react';
import { PLANS_DATA } from '../data/plans';
import { Periodicity } from '../types';
import { useApp } from '../context/AppContext';

export const PlansPage: React.FC = () => {
  const [periodicity, setPeriodicity] = useState<Periodicity>('mensal');
  const { openPlanModal } = useApp();

  const formatCurrency = (val: number) => {
    return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 sm:py-12 animate-fade-in">
      {/* Title & Subtitle (Section 8) */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <span className="text-xs font-extrabold uppercase tracking-wider text-ocean-600 bg-ocean-100 px-3 py-1 rounded-full">
          Planos e Matrícula
        </span>
        <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-ocean-950 mt-2 mb-3">
          Cada mergulho, uma nova conquista!
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Escolha como você quer acompanhar o aprendizado do seu filho com a Tia Noêmia.
        </p>
      </div>

      {/* Interactive Periodicity & Discount Selector (Section 8) */}
      <div className="flex justify-center mb-10">
        <div className="bg-white p-1.5 rounded-full border-2 border-ocean-200 shadow-md inline-flex items-center gap-1">
          <button
            type="button"
            onClick={() => setPeriodicity('mensal')}
            className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-black transition-all ${
              periodicity === 'mensal'
                ? 'bg-sun-400 text-ocean-950 shadow-sm'
                : 'text-slate-600 hover:text-ocean-700'
            }`}
          >
            Mensal
          </button>

          <button
            type="button"
            onClick={() => setPeriodicity('semestral')}
            className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-black transition-all flex items-center gap-1.5 ${
              periodicity === 'semestral'
                ? 'bg-sun-400 text-ocean-950 shadow-sm'
                : 'text-slate-600 hover:text-ocean-700'
            }`}
          >
            <span>Semestral</span>
            <span className="text-[10px] font-black bg-emerald-500 text-white px-2 py-0.5 rounded-full">
              5% OFF
            </span>
          </button>

          <button
            type="button"
            onClick={() => setPeriodicity('anual')}
            className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-black transition-all flex items-center gap-1.5 ${
              periodicity === 'anual'
                ? 'bg-sun-400 text-ocean-950 shadow-sm'
                : 'text-slate-600 hover:text-ocean-700'
            }`}
          >
            <span>Anual</span>
            <span className="text-[10px] font-black bg-emerald-500 text-white px-2 py-0.5 rounded-full">
              10% OFF
            </span>
          </button>
        </div>
      </div>

      {/* Plans Comparison Cards (Section 8) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-12">
        {PLANS_DATA.map((plan) => {
          const pricing = plan.prices[periodicity];
          const isHighlight = plan.highlight;

          return (
            <div
              key={plan.id}
              className={`relative bg-white rounded-3xl overflow-hidden border-2 flex flex-col justify-between transition-all duration-300 ${
                isHighlight
                  ? 'border-sun-400 shadow-2xl scale-102 lg:-translate-y-2 ring-4 ring-sun-400/20 z-10'
                  : 'border-ocean-100 shadow-card-soft hover:shadow-bubble'
              }`}
            >
              {/* Highlight Badge */}
              {isHighlight && (
                <div className="bg-gradient-to-r from-sun-400 to-amber-500 text-ocean-950 text-xs font-black uppercase tracking-wider py-1.5 px-4 text-center flex items-center justify-center gap-1 shadow-sm">
                  <Star className="w-3.5 h-3.5 fill-ocean-950 text-ocean-950" />
                  <span>{plan.highlightLabel || 'Destaque Oficial'}</span>
                </div>
              )}

              {/* Plan Card Top & Mascot */}
              <div className="p-6">
                {/* Mascot Header */}
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-ocean-100 bg-ocean-50 shrink-0 shadow-sm">
                    <img
                      src={plan.mascotImage}
                      alt={plan.mascotName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-ocean-600">
                      Mascote: {plan.mascotName}
                    </span>
                    <h3 className="font-display font-black text-xl text-ocean-950 leading-tight">
                      {plan.name}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed min-h-[36px] mb-5">
                  {plan.tagline}
                </p>

                {/* Pricing Block with Dynamic Updating */}
                <div className="bg-ocean-50/70 rounded-2xl p-4 border border-ocean-100 mb-5">
                  {periodicity === 'mensal' ? (
                    <div>
                      <div className="text-[11px] font-bold text-slate-500">Valor Mensal:</div>
                      <div className="font-display font-black text-3xl text-ocean-900 mt-0.5">
                        {formatCurrency(pricing.total)}
                        <span className="text-xs font-bold text-slate-500"> /mês</span>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold text-slate-500">
                          Equivalente mensal:
                        </span>
                        <span className="text-[10px] font-black bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                          {pricing.savingsLabel}
                        </span>
                      </div>
                      <div className="font-display font-black text-3xl text-emerald-600 mt-0.5">
                        {formatCurrency(pricing.monthlyEquivalent)}
                        <span className="text-xs font-bold text-slate-500"> /mês</span>
                      </div>
                      <div className="text-xs text-slate-500 mt-1 font-medium">
                        Total do período: <strong>{formatCurrency(pricing.total)}</strong>
                      </div>
                    </div>
                  )}
                </div>

                {/* Features List */}
                <div className="space-y-2.5 mb-6">
                  <div className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                    O que está incluído:
                  </div>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span className="leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* In-person frequency tag */}
                {plan.inPersonClassesPerWeek > 0 && (
                  <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-[11px] text-amber-900 font-medium flex items-center gap-1.5 mb-4">
                    <Calendar className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>
                      {plan.inPersonClassesPerWeek === 1
                        ? '1 aula presencial por semana com a Tia Noêmia'
                        : '2 aulas presenciais por semana com a Tia Noêmia'}
                    </span>
                  </div>
                )}
              </div>

              {/* Action Button (Escolher plano) */}
              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={() => openPlanModal(plan, periodicity)}
                  className={`w-full py-3.5 px-6 rounded-full font-display font-black text-sm transition-all flex items-center justify-center gap-2 ${
                    isHighlight
                      ? 'bg-sun-400 hover:bg-sun-300 active:bg-sun-500 text-ocean-950 shadow-btn-yellow hover:shadow-btn-yellow-active'
                      : 'bg-ocean-600 hover:bg-ocean-700 active:bg-ocean-800 text-white shadow-sm'
                  }`}
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Escolher plano</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Disclaimers & Info Banner */}
      <div className="bg-white rounded-3xl p-6 border-2 border-ocean-100 shadow-sm text-center max-w-3xl mx-auto space-y-3">
        <div className="w-10 h-10 rounded-2xl bg-ocean-100 text-ocean-600 flex items-center justify-center mx-auto">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <h4 className="font-display font-black text-ocean-950 text-base">
          Informações Importantes sobre as Aulas e Matrícula
        </h4>
        <p className="text-xs text-slate-600 leading-relaxed max-w-xl mx-auto">
          As aulas presenciais com a Tia Noêmia estão sujeitas à disponibilidade de horários e atendimento em piscinas credenciadas. Neste MVP demonstrativo, você pode registrar o seu interesse gratuitamente sem qualquer cobrança no cartão.
        </p>
      </div>
    </div>
  );
};
