import React, { useState } from 'react';
import { X, Check, MessageCircle, AlertCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import confetti from 'canvas-confetti';

export const PlanInterestModal: React.FC = () => {
  const { isPlanModalOpen, closePlanModal, selectedPlan, selectedPeriodicity } = useApp();
  const [confirmed, setConfirmed] = useState(false);
  const [parentName, setParentName] = useState('');
  const [childAge, setChildAge] = useState('');

  if (!isPlanModalOpen || !selectedPlan) return null;

  const priceDetails = selectedPlan.prices[selectedPeriodicity];
  const periodicityLabel =
    selectedPeriodicity === 'mensal'
      ? 'Mensal'
      : selectedPeriodicity === 'semestral'
      ? 'Semestral (5% OFF)'
      : 'Anual (10% OFF)';

  const formatCurrency = (val: number) => {
    return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const handleConfirmInterest = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }
  };

  const handleClose = () => {
    setConfirmed(false);
    setParentName('');
    setChildAge('');
    closePlanModal();
  };

  // Pre-formatted WhatsApp link for direct friendly contact with Tia Noêmia
  const whatsappMessage = encodeURIComponent(
    `Olá Tia Noêmia! Tenho interesse no Plano ${selectedPlan.name} (${periodicityLabel}) para o aprendizado de natação. Gostaria de saber mais informações e disponibilidade!`
  );
  const whatsappUrl = `https://wa.me/?text=${whatsappMessage}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ocean-950/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border-2 border-ocean-200 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-ocean-500 to-ocean-600 px-6 py-5 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <img
              src={selectedPlan.mascotImage}
              alt={selectedPlan.name}
              className="w-12 h-12 rounded-2xl object-cover border-2 border-sun-400 bg-white"
            />
            <div>
              <span className="text-[11px] uppercase tracking-wider font-extrabold text-sun-300">
                Confirmação de Interesse
              </span>
              <h3 className="text-lg sm:text-xl font-display font-black leading-tight">
                {selectedPlan.name}
              </h3>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5 text-slate-700 text-sm leading-relaxed">
          {confirmed ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-display font-black text-ocean-950">
                Interesse Registrado com Sucesso!
              </h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto">
                Ficamos muito felizes com a sua escolha pelo plano{' '}
                <strong>{selectedPlan.name}</strong> ({periodicityLabel}). A Tia Noêmia entrará em contato para agendar o primeiro contato e verificar disponibilidade.
              </p>
              
              <div className="p-4 rounded-2xl bg-ocean-50 border border-ocean-200 text-left space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">Plano Selecionado:</span>
                  <span className="font-bold text-ocean-900">{selectedPlan.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Periodicidade:</span>
                  <span className="font-bold text-ocean-900">{periodicityLabel}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Investimento Total:</span>
                  <span className="font-bold text-emerald-700 text-sm">{formatCurrency(priceDetails.total)}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-black text-sm bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Conversar Agora pelo WhatsApp</span>
                </a>
                <button
                  onClick={handleClose}
                  className="text-xs text-slate-500 hover:text-slate-700 py-2"
                >
                  Fechar janela
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Summary card */}
              <div className="p-4 rounded-2xl bg-ocean-50 border border-ocean-100 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500 font-medium">Ciclo de Pagamento:</span>
                  <div className="font-display font-bold text-ocean-900 text-base">
                    {periodicityLabel}
                  </div>
                  {priceDetails.savingsLabel && (
                    <span className="inline-block mt-0.5 text-[11px] font-black text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-full">
                      {priceDetails.savingsLabel}
                    </span>
                  )}
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-500 font-medium">Valor Total:</span>
                  <div className="font-display font-black text-ocean-900 text-xl sm:text-2xl text-emerald-600">
                    {formatCurrency(priceDetails.total)}
                  </div>
                  {selectedPeriodicity !== 'mensal' && (
                    <span className="text-[11px] text-slate-500 block">
                      Equivalente a {formatCurrency(priceDetails.monthlyEquivalent)}/mês
                    </span>
                  )}
                </div>
              </div>

              {/* In-person schedule availability note */}
              {selectedPlan.inPersonClassesPerWeek > 0 && (
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900">
                  <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold">Aviso sobre Aulas Presenciais:</strong> As aulas presenciais ({selectedPlan.inPersonClassesPerWeek}x por semana) são ministradas em piscinas parceiras e estão sujeitas à confirmação de horários vagos e proximidade de endereço.
                  </div>
                </div>
              )}

              {/* Included Benefits */}
              <div>
                <h5 className="font-display font-bold text-xs uppercase tracking-wider text-slate-500 mb-2.5">
                  Benefícios Inclusos no Plano:
                </h5>
                <ul className="space-y-2">
                  {selectedPlan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Form to express interest (No real payment / No card required) */}
              <form onSubmit={handleConfirmInterest} className="space-y-3 pt-2 border-t border-slate-100">
                <div className="text-xs text-slate-500">
                  Sem cobrança automática nem dados de cartão. Apenas demonstre seu interesse:
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Seu nome (Pai / Mãe / Responsável):
                  </label>
                  <input
                    type="text"
                    required
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    placeholder="Ex: Mariana Silva"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-ocean-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Idade aproximada da criança:
                  </label>
                  <input
                    type="text"
                    required
                    value={childAge}
                    onChange={(e) => setChildAge(e.target.value)}
                    placeholder="Ex: 3 anos"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-ocean-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full font-display font-black text-sm bg-sun-400 hover:bg-sun-300 active:bg-sun-500 text-ocean-950 shadow-btn-yellow hover:shadow-btn-yellow-active transition-all flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Confirmar Interesse no Plano</span>
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
