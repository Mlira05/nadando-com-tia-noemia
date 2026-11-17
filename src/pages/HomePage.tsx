import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, Shield, Heart, Sparkles, Droplets, CheckCircle } from 'lucide-react';
import { WaveDivider } from '../components/WaterDecorations';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-between overflow-hidden">
      {/* Hero Container */}
      <main className="max-w-4xl mx-auto px-4 pt-4 sm:pt-8 pb-12 flex-1 flex flex-col items-center text-center">
        {/* Top Floating Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-ocean-200 text-ocean-800 text-xs sm:text-sm font-bold shadow-sm mb-4 animate-float-slow backdrop-blur-sm">
          <Droplets className="w-4 h-4 text-ocean-500 fill-ocean-400" />
          <span>Natação Infantil Pedagógica Guiada por Pais</span>
        </div>

        {/* Brand Title (matching reference image style) */}
        <div className="mb-4">
          <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-ocean-900 tracking-tight leading-tight">
            Nadando com a{' '}
            <span className="relative inline-block text-ocean-600 drop-shadow-sm">
              Tia Noêmia
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-sun-400 -z-10"
                viewBox="0 0 100 12"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,7 Q50,0 100,7"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>
        </div>

        {/* Hero Illustration Card */}
        <div className="relative w-full max-w-md mx-auto my-3 group">
          {/* Subtle water splash aura behind */}
          <div className="absolute -inset-3 bg-gradient-to-r from-ocean-300 via-sky-200 to-aqua-300 rounded-[2.5rem] blur-xl opacity-60 group-hover:opacity-80 transition-opacity"></div>
          
          <div className="relative rounded-[2rem] overflow-hidden border-4 border-white shadow-bubble bg-ocean-50 aspect-square">
            <img
              src="./images/hero.jpg"
              alt="Tia Noêmia na piscina com uma criança sorrindo"
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
            />
            
            {/* Soft decorative bottom badge */}
            <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-md rounded-2xl p-2.5 border border-white/80 shadow-md flex items-center justify-center gap-2 text-xs font-black text-ocean-900">
              <Sparkles className="w-4 h-4 text-sun-500 fill-sun-400" />
              <span>Aprenda a nadar com afeto, técnica e segurança</span>
            </div>
          </div>
        </div>

        {/* Suggested Text from Prompt */}
        <div className="max-w-xl mx-auto my-5">
          <p className="text-base sm:text-lg text-slate-700 font-semibold leading-relaxed">
            Descubra como ajudar seu filho a aprender a nadar de forma divertida, respeitando seu ritmo e priorizando a segurança.
          </p>
        </div>

        {/* Main Yellow Call to Action Button */}
        <div className="w-full max-w-xs mx-auto mt-2 mb-6">
          <button
            onClick={() => navigate('/acesso')}
            className="w-full py-4 px-8 rounded-full font-display font-black text-lg sm:text-xl bg-sun-400 hover:bg-sun-300 active:bg-sun-500 text-ocean-950 shadow-btn-yellow hover:shadow-btn-yellow-active active:translate-y-1 transition-all flex items-center justify-center gap-3 group"
          >
            <Play className="w-5 h-5 fill-ocean-950 text-ocean-950 group-hover:scale-110 transition-transform" />
            <span>Começar</span>
          </button>
        </div>

        {/* Three Value Pillars (inspired by screen 2 in reference image) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl mt-4 text-left">
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-ocean-100 shadow-sm flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-ocean-100 text-ocean-700 flex items-center justify-center shrink-0">
              <Shield className="w-5 h-5 text-ocean-600" />
            </div>
            <div>
              <h4 className="font-bold text-xs sm:text-sm text-ocean-950">Mais segurança</h4>
              <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                Supervisão 100% ativa em cada atividade.
              </p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-ocean-100 shadow-sm flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-aqua-100 text-aqua-700 flex items-center justify-center shrink-0">
              <Heart className="w-5 h-5 text-aqua-600" />
            </div>
            <div>
              <h4 className="font-bold text-xs sm:text-sm text-ocean-950">Mais confiança</h4>
              <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                Apoio e incentivo no ritmo próprio da criança.
              </p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-ocean-100 shadow-sm flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-sun-100 text-sun-800 flex items-center justify-center shrink-0">
              <CheckCircle className="w-5 h-5 text-sun-600" />
            </div>
            <div>
              <h4 className="font-bold text-xs sm:text-sm text-ocean-950">Mais aprendizado</h4>
              <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                Habilidades motoras de forma lúdica.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Decorative Wave Divider at bottom */}
      <WaveDivider className="mt-8" />
    </div>
  );
};
