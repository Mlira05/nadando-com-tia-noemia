import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { KeyRound, Compass, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { getAssetUrl } from '../utils/assets';

export const AccessPage: React.FC = () => {
  const navigate = useNavigate();
  const { loginWithCode, isStudent, studentSession } = useApp();
  const [studentCodeInput, setStudentCodeInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleStudentLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    const res = loginWithCode(studentCodeInput);
    if (res.success) {
      navigate('/explorar');
    } else {
      setErrorMessage(res.message);
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-6 sm:py-10 animate-fade-in">
      {/* Title */}
      <div className="text-center mb-6">
        <span className="text-xs font-extrabold uppercase tracking-wider text-ocean-600 bg-ocean-100 px-3 py-1 rounded-full">
          Área de Acesso
        </span>
        <h2 className="font-display font-black text-2xl sm:text-3xl text-ocean-950 mt-2">
          Como deseja entrar?
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Acesse com sua matrícula de aluno ou conheça a plataforma como visitante.
        </p>
      </div>

      {/* Welcoming Family Card Illustration */}
      <div className="relative rounded-3xl overflow-hidden border-2 border-white shadow-card-soft bg-ocean-50 mb-6 aspect-[4/3]">
        <picture>
          <source srcSet={getAssetUrl('images/familia.webp')} type="image/webp" />
          <img
            src={getAssetUrl('images/familia.jpg')}
            alt="Família acolhedora na piscina"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/60 via-transparent to-transparent flex items-end p-4">
          <div className="text-white text-xs font-bold flex items-center gap-1.5 drop-shadow">
            <ShieldCheck className="w-4 h-4 text-sun-300" />
            <span>Aprendendo e nadando juntos em família</span>
          </div>
        </div>
      </div>

      {/* Already logged in banner if applicable */}
      {isStudent && studentSession && (
        <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-center justify-between">
          <div>
            <div className="font-bold flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Conectado como Aluno:
            </div>
            <div className="text-[11px] text-emerald-800 mt-0.5">{studentSession.studentName}</div>
          </div>
          <button
            onClick={() => navigate('/explorar')}
            className="px-3 py-1.5 rounded-full bg-emerald-600 text-white font-bold text-[11px] hover:bg-emerald-700"
          >
            Ir ao App
          </button>
        </div>
      )}

      {/* Option 1: Entrar com código do aluno */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border-2 border-ocean-100 shadow-card-soft mb-4">
        <div className="flex items-center gap-2.5 mb-2">
          <div className="w-8 h-8 rounded-xl bg-sun-100 text-sun-700 flex items-center justify-center shrink-0">
            <KeyRound className="w-4 h-4" />
          </div>
          <h3 className="font-display font-black text-base text-ocean-950">
            Entrar com código do aluno
          </h3>
        </div>

        <p className="text-xs text-slate-500 leading-relaxed mb-4">
          Alunos com acesso à plataforma recebem um código exclusivo fornecido pela Tia Noêmia no momento da matrícula.
        </p>

        <form onSubmit={handleStudentLogin} className="space-y-3">
          <div>
            <input
              type="text"
              value={studentCodeInput}
              onChange={(e) => setStudentCodeInput(e.target.value.toUpperCase())}
              placeholder="Digite o código do aluno"
              className="w-full px-4 py-3 rounded-2xl border-2 border-slate-200 text-sm font-mono tracking-wider focus:outline-none focus:border-ocean-500 uppercase placeholder:normal-case placeholder:font-sans placeholder:text-slate-400"
            />
            {errorMessage && (
              <p className="text-xs font-semibold text-rose-500 mt-1.5">{errorMessage}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3.5 px-6 rounded-full font-display font-black text-sm bg-sun-400 hover:bg-sun-300 active:bg-sun-500 text-ocean-950 shadow-btn-yellow hover:shadow-btn-yellow-active transition-all flex items-center justify-center gap-2"
          >
            <span>Entrar com Código</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>

      {/* Option 2: Explorar o app (Visitante) */}
      <div className="bg-gradient-to-br from-ocean-50 to-sky-100/60 rounded-3xl p-5 sm:p-6 border-2 border-ocean-200 shadow-sm mb-6 text-center">
        <div className="w-10 h-10 rounded-2xl bg-ocean-600 text-white flex items-center justify-center mx-auto mb-2.5 shadow-sm">
          <Compass className="w-5 h-5" />
        </div>
        <h3 className="font-display font-black text-base text-ocean-950 mb-1">
          Explorar o app
        </h3>
        <p className="text-xs text-slate-600 leading-relaxed mb-4 max-w-xs mx-auto">
          Conheça as historinhas, os conteúdos educativos e a proposta da plataforma sem precisar criar uma conta.
        </p>

        <button
          onClick={() => navigate('/explorar')}
          className="w-full py-3 px-6 rounded-full font-display font-bold text-sm bg-white hover:bg-slate-50 border-2 border-ocean-200 text-ocean-800 shadow-sm transition-all flex items-center justify-center gap-2"
        >
          <span>Explorar como Visitante</span>
          <ArrowRight className="w-4 h-4 text-ocean-600" />
        </button>
      </div>

      {/* Option 3: Adquirir um plano (Discrete Underlined Link at Bottom) */}
      <div className="text-center pt-2">
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
