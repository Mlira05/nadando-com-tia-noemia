import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ChevronLeft,
  Lock,
  Play,
  ShieldAlert,
  Target,
  Sparkles,
  HelpCircle,
  Clock,
  CheckCircle2
} from 'lucide-react';
import { STORIES_DATA } from '../data/stories';
import { useApp } from '../context/AppContext';

export const StoryDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { isStudent, openStoryPlayer } = useApp();

  const story = STORIES_DATA.find((s) => s.slug === slug);

  if (!story) {
    return (
      <div className="max-w-md mx-auto px-4 py-16 text-center">
        <h2 className="text-xl font-display font-black text-ocean-950 mb-2">
          Historinha não encontrada
        </h2>
        <p className="text-xs text-slate-500 mb-6">
          A historinha solicitada não existe ou foi movida.
        </p>
        <Link
          to="/explorar"
          className="px-6 py-2.5 rounded-full bg-sun-400 text-ocean-950 font-bold text-xs"
        >
          Voltar para Explorar
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 sm:py-8 animate-fade-in">
      {/* Top Navigation */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => navigate('/explorar')}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-ocean-50 text-ocean-800 text-xs font-bold border border-ocean-100 transition-colors shadow-sm"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Voltar para Explorar</span>
        </button>

        <span className="text-xs font-bold text-ocean-600 bg-ocean-100 px-3 py-1 rounded-full">
          Historinha {story.number} de {STORIES_DATA.length}
        </span>
      </div>

      {/* Main Presentation Header */}
      <div className="bg-white rounded-3xl overflow-hidden border-2 border-ocean-100 shadow-card-soft mb-6">
        {/* Thematic Illustration */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] bg-ocean-50 overflow-hidden">
          <img
            src={story.image}
            alt={story.title}
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4 sm:p-6">
            <div className="text-white space-y-1">
              <span className="inline-flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-wider text-sun-300 bg-black/40 backdrop-blur-md px-2.5 py-0.5 rounded-full">
                <Clock className="w-3 h-3" /> {story.duration} • {story.level}
              </span>
              <h1 className="font-display font-black text-2xl sm:text-4xl text-white drop-shadow-md">
                {story.title}
              </h1>
              <p className="text-xs sm:text-sm text-slate-200 drop-shadow line-clamp-1 max-w-xl">
                {story.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Synopsis & Learning Objectives */}
        <div className="p-5 sm:p-7 space-y-6">
          {/* Sinopse */}
          <div>
            <h3 className="font-display font-bold text-xs uppercase tracking-wider text-ocean-600 mb-2 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-sun-500" /> Sinopse da Historinha
            </h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              {story.sinopse}
            </p>
          </div>

          {/* Objetivos de Aprendizagem */}
          <div className="p-5 rounded-2xl bg-ocean-50/70 border border-ocean-100">
            <h3 className="font-display font-bold text-xs uppercase tracking-wider text-ocean-800 mb-3 flex items-center gap-2">
              <Target className="w-4 h-4 text-ocean-600" /> Objetivos de Aprendizagem
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {story.learningObjectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <div className="w-4 h-4 rounded-full bg-ocean-200 text-ocean-800 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
                    ✓
                  </div>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Habilidades Abordadas */}
          <div>
            <h3 className="font-display font-bold text-xs uppercase tracking-wider text-slate-500 mb-2.5 flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-slate-400" /> Habilidades Abordadas
            </h3>
            <div className="flex flex-wrap gap-2">
              {story.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 font-bold text-xs border border-slate-200 flex items-center gap-1"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-ocean-500"></span>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Orientações Gerais para os Responsáveis */}
          <div className="space-y-3 pt-2">
            <h3 className="font-display font-bold text-xs uppercase tracking-wider text-ocean-700 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Orientações Gerais para os Responsáveis
            </h3>
            <div className="space-y-3">
              {story.parentGuidance.map((guide) => (
                <div
                  key={guide.step}
                  className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3.5"
                >
                  <div className="w-8 h-8 rounded-xl bg-ocean-100 text-ocean-800 flex items-center justify-center font-display font-black text-sm shrink-0">
                    {guide.step}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-ocean-950 text-xs sm:text-sm">
                      {guide.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {guide.instruction}
                    </p>
                    {guide.importantTip && (
                      <div className="text-[11px] text-amber-800 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200 inline-block font-medium">
                        💡 {guide.importantTip}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Aviso de Segurança */}
          <div className="p-4 rounded-2xl bg-rose-50 border-2 border-rose-200 flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            <div className="space-y-1 text-xs text-rose-950">
              <strong className="font-bold block">Aviso Obrigatório de Segurança:</strong>
              <p className="leading-relaxed text-rose-900/90">{story.safetyWarning}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Restrição de Acesso / Botão Começar Historinha */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-ocean-100 shadow-card-soft text-center mb-8">
        {isStudent ? (
          /* Unlocked for active student */
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Plano Ativo • Conteúdo Liberado</span>
            </div>
            <h4 className="font-display font-black text-xl text-ocean-950">
              Prontos para praticar com a Tia Noêmia?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
              Clique abaixo para abrir o guia passo a passo interativo com temporizador de prática e celebração de conquista.
            </p>
            <div className="max-w-xs mx-auto pt-2">
              <button
                onClick={() => openStoryPlayer(story)}
                className="w-full py-4 px-6 rounded-full font-display font-black text-base bg-sun-400 hover:bg-sun-300 active:bg-sun-500 text-ocean-950 shadow-btn-yellow hover:shadow-btn-yellow-active transition-all flex items-center justify-center gap-2"
              >
                <Play className="w-5 h-5 fill-ocean-950 text-ocean-950" />
                <span>Começar historinha</span>
              </button>
            </div>
          </div>
        ) : (
          /* Visitor restriction strictly matching Section 7 */
          <div className="space-y-4">
            <div className="max-w-xs mx-auto">
              {/* Gray disabled button with lock icon */}
              <button
                disabled
                className="w-full py-4 px-6 rounded-full font-display font-bold text-sm bg-slate-200 text-slate-400 cursor-not-allowed flex items-center justify-center gap-2 shadow-none border border-slate-300"
              >
                <Lock className="w-4 h-4 text-slate-400" />
                <span>Começar historinha</span>
              </button>
            </div>

            {/* Subtitle text below button */}
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              Adquira um plano para desbloquear todas as historinhas.
            </p>

            {/* Discrete underlined link to /planos */}
            <div className="pt-1">
              <Link
                to="/planos"
                className="text-xs sm:text-sm font-bold text-ocean-700 hover:text-ocean-900 underline underline-offset-4 transition-colors"
              >
                Adquirir um plano
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
