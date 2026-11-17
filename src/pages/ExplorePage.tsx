import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Star, ChevronRight, Lock, CheckCircle2, Sparkles, Droplets } from 'lucide-react';
import { STORIES_DATA } from '../data/stories';
import { useApp } from '../context/AppContext';

export const ExplorePage: React.FC = () => {
  const navigate = useNavigate();
  const { isStudent, studentSession, completedStories } = useApp();

  const totalStories = STORIES_DATA.length;
  const completedCount = completedStories.filter((s) =>
    STORIES_DATA.some((st) => st.slug === s)
  ).length;
  const progressPercent = Math.round((completedCount / totalStories) * 100);

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 sm:py-10 animate-fade-in">
      {/* User Greeting & Header (matching screen 3 of reference image) */}
      <div className="bg-gradient-to-r from-ocean-500 via-ocean-600 to-sky-600 rounded-3xl p-6 text-white shadow-bubble mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="relative">
              <img
                src="./images/app-icon.jpg"
                alt="Tia Noêmia"
                className="w-14 h-14 rounded-full object-cover border-2 border-sun-400 shadow-md"
              />
              <span className="absolute -bottom-1 -right-1 text-base">👋</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display font-black text-xl sm:text-2xl text-white">
                  {isStudent && studentSession
                    ? `Olá, ${studentSession.studentName.split(' ')[0]}!`
                    : 'Olá, Família!'}
                </h3>
                {isStudent && (
                  <span className="bg-sun-400 text-ocean-950 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider">
                    Plano Ativo
                  </span>
                )}
              </div>
              <p className="text-xs sm:text-sm text-ocean-100 font-medium">
                Vamos nadar e aprender juntos hoje?
              </p>
            </div>
          </div>

          {/* Student Status or Access Button */}
          <div>
            {isStudent ? (
              <div className="bg-white/15 backdrop-blur-md rounded-2xl px-4 py-2 border border-white/20 text-right">
                <span className="text-[11px] text-sun-300 font-bold block">Acesso Liberado</span>
                <span className="text-xs text-white font-medium">Todas as historinhas desbloqueadas</span>
              </div>
            ) : (
              <button
                onClick={() => navigate('/acesso')}
                className="px-4 py-2 rounded-full bg-sun-400 hover:bg-sun-300 text-ocean-950 text-xs font-black transition-all shadow-sm"
              >
                Tenho Código de Aluno
              </button>
            )}
          </div>
        </div>

        {/* Journey Progress Bar (Screen 3 style) */}
        <div className="mt-5 pt-4 border-t border-white/20">
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="flex items-center gap-1.5 font-bold text-sun-300">
              <Star className="w-4 h-4 fill-sun-400 text-sun-400" />
              <span>Sua jornada • Natação Infantil Nível 1</span>
            </span>
            <span className="text-ocean-100 font-semibold text-[11px]">
              {completedCount} de {totalStories} atividades concluídas
            </span>
          </div>
          <div className="w-full h-3 bg-ocean-800/60 rounded-full overflow-hidden p-0.5">
            <div
              className="h-full bg-gradient-to-r from-sun-400 to-amber-400 rounded-full transition-all duration-700"
              style={{ width: `${Math.max(progressPercent, 12)}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Section Title & Subtitle (from prompt requirement 6) */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <Droplets className="w-5 h-5 text-ocean-600" />
          <h2 className="font-display font-black text-2xl sm:text-3xl text-ocean-950">
            Explore o app
          </h2>
        </div>
        <p className="text-sm sm:text-base text-slate-600">
          Conheça as historinhas que vão ajudar você e seu filho nessa jornada.
        </p>
      </div>

      {/* Free preview notice */}
      <div className="mb-6 p-4 rounded-2xl bg-sky-50 border border-sky-200 text-xs text-ocean-900 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Sparkles className="w-4 h-4 text-ocean-600 shrink-0" />
          <span>
            Todas as apresentações, objetivos e orientações das historinhas podem ser visualizadas gratuitamente!
          </span>
        </div>
      </div>

      {/* Story Cards Grid (Requirement 6: 6 cards illustrated and navigable) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        {STORIES_DATA.map((story) => {
          const isDone = completedStories.includes(story.slug);

          return (
            <div
              key={story.slug}
              className="bg-white rounded-3xl overflow-hidden border-2 border-ocean-100 shadow-card-soft hover:shadow-bubble hover:-translate-y-1 transition-all duration-300 flex flex-col group"
            >
              {/* Card Illustration */}
              <div className="relative aspect-[16/10] bg-ocean-50 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Level badge */}
                <div className="absolute top-3 left-3 bg-ocean-900/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-white flex items-center gap-1">
                  <span>{story.number}.</span>
                  <span>{story.duration}</span>
                </div>

                {/* Completed badge or Lock badge */}
                <div className="absolute top-3 right-3">
                  {isDone ? (
                    <span className="bg-emerald-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                      <CheckCircle2 className="w-3 h-3" /> Concluído
                    </span>
                  ) : !isStudent ? (
                    <span className="bg-slate-900/70 text-slate-200 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 backdrop-blur-sm">
                      <Lock className="w-3 h-3 text-sun-300" /> Prévia Grátis
                    </span>
                  ) : null}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-bold text-ocean-600 mb-1">
                    Historinha {story.number}
                  </div>
                  <h3 className="font-display font-black text-lg text-ocean-950 mb-2 leading-snug group-hover:text-ocean-600 transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-4">
                    {story.shortDescription}
                  </p>
                </div>

                {/* Link to individual story page */}
                <Link
                  to={`/historias/${story.slug}`}
                  className="w-full py-2.5 px-4 rounded-2xl bg-ocean-50 hover:bg-ocean-100 text-ocean-800 text-xs font-black transition-colors flex items-center justify-between group-hover:bg-sun-400 group-hover:text-ocean-950"
                >
                  <span>Ver apresentação</span>
                  <ChevronRight className="w-4 h-4 text-ocean-600 group-hover:text-ocean-950 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Discrete Underlined Link at Bottom (Requirement 6) */}
      <div className="text-center pt-4 pb-2">
        <Link
          to="/planos"
          className="text-xs font-bold text-ocean-700 hover:text-ocean-900 underline underline-offset-4 transition-colors"
        >
          Adquirir um plano
        </Link>
      </div>
    </div>
  );
};
