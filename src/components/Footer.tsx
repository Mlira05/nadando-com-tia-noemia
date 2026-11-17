import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, Heart, Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { getAssetUrl } from '../utils/assets';

export const Footer: React.FC = () => {
  const { openSafetyModal } = useApp();

  return (
    <footer className="relative bg-gradient-to-b from-ocean-800 to-ocean-950 text-white pt-12 pb-24 md:pb-12 mt-16 overflow-hidden">
      {/* Decorative Wave Top */}
      <div className="absolute top-0 left-0 right-0 h-6 overflow-hidden leading-none rotate-180">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-8 text-ocean-100 fill-current opacity-20"
        >
          <path d="M0,0 C150,90 350,-40 500,40 C650,120 900,20 1200,60 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-4">
        {/* Child Safety Gold Banner */}
        <div className="bg-amber-400/10 border-2 border-amber-400/30 rounded-2xl p-5 mb-10 flex flex-col sm:flex-row items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h4 className="font-display font-black text-amber-300 text-base">
              Compromisso Inegociável com a Segurança Infantil
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
              A criança nunca deve entrar na água desacompanhada. Supervisão de um adulto deve ser ativa, contínua e ao alcance imediato dos braços a todo instante. Este app educa os responsáveis e não substitui aulas presenciais.
            </p>
          </div>
          <button
            onClick={openSafetyModal}
            className="px-4 py-2 rounded-full text-xs font-black bg-amber-400 hover:bg-amber-300 text-ocean-950 transition-all shrink-0 shadow-sm"
          >
            Ver Regras de Ouro
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-ocean-700/60">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <img
                src={getAssetUrl('images/app-icon.jpg')}
                alt="Logo Tia Noêmia"
                className="w-10 h-10 rounded-full border-2 border-sun-400 object-cover"
                loading="lazy"
              />
              <span className="font-display font-black text-lg text-white">
                Nadando com a Tia Noêmia
              </span>
            </div>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-md">
              Plataforma pedagógica de natação infantil. Ensinamos pais, mães e cuidadores a conduzirem seus pequenos na água com amor, respeito ao ritmo individual e máxima segurança preventiva.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-ocean-200">
              <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
              <span>Desenvolvido com carinho para famílias nadadoras.</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h5 className="font-display font-bold text-sm text-sun-300 mb-3 uppercase tracking-wider">
              Navegação
            </h5>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <Link to="/" className="hover:text-sun-300 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/explorar" className="hover:text-sun-300 transition-colors">
                  Biblioteca de Historinhas
                </Link>
              </li>
              <li>
                <Link to="/planos" className="hover:text-sun-300 transition-colors">
                  Planos e Aulas Presenciais
                </Link>
              </li>
              <li>
                <Link to="/acesso" className="hover:text-sun-300 transition-colors">
                  Área de Acesso do Aluno
                </Link>
              </li>
              <li>
                <button
                  onClick={openSafetyModal}
                  className="hover:text-sun-300 transition-colors text-left"
                >
                  Diretrizes de Segurança Infantil
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Attendance */}
          <div>
            <h5 className="font-display font-bold text-sm text-sun-300 mb-3 uppercase tracking-wider">
              Atendimento
            </h5>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-sun-400 shrink-0 mt-0.5" />
                <span>Segunda a Sábado, das 8h às 18h</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sun-400 shrink-0 mt-0.5" />
                <span>Aulas presenciais em piscinas parceiras credenciadas</span>
              </div>
              <div className="pt-1">
                <Link
                  to="/planos"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold hover:bg-emerald-500/30 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Falar com a Tia Noêmia</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Nadando com a Tia Noêmia. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1 text-slate-400">
              <Phone className="w-3 h-3" /> Suporte aos Pais
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">PWA Offline Pronto</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
