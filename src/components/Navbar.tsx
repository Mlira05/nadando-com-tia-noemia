import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Compass, Sparkles, Shield, User, LogOut, CheckCircle2 } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const { isStudent, studentSession, logout, openSafetyModal } = useApp();

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-ocean-100 shadow-sm safe-top">
        <div className="max-w-5xl mx-auto px-4 h-16 sm:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative">
              <img
                src="./images/app-icon.jpg"
                alt="Tia Noêmia Avatar"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-sun-400 shadow-md group-hover:scale-105 transition-transform"
              />
              <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"></span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-ocean-600 font-display">
                  Natação Infantil
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-extrabold bg-sun-100 text-sun-800">
                  MVP
                </span>
              </div>
              <h1 className="text-base sm:text-xl font-display font-black text-ocean-900 tracking-tight leading-tight group-hover:text-ocean-600 transition-colors">
                Nadando com a Tia Noêmia
              </h1>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1.5">
            <Link
              to="/"
              className={`px-3 py-2 rounded-xl text-sm font-bold transition-all ${
                isActive('/')
                  ? 'bg-ocean-100 text-ocean-800 font-extrabold'
                  : 'text-slate-600 hover:text-ocean-700 hover:bg-ocean-50'
              }`}
            >
              Início
            </Link>
            <Link
              to="/explorar"
              className={`px-3 py-2 rounded-xl text-sm font-bold transition-all ${
                isActive('/explorar') || isActive('/historias')
                  ? 'bg-ocean-100 text-ocean-800 font-extrabold'
                  : 'text-slate-600 hover:text-ocean-700 hover:bg-ocean-50'
              }`}
            >
              Explorar Historinhas
            </Link>
            <Link
              to="/planos"
              className={`px-3 py-2 rounded-xl text-sm font-bold transition-all ${
                isActive('/planos')
                  ? 'bg-ocean-100 text-ocean-800 font-extrabold'
                  : 'text-slate-600 hover:text-ocean-700 hover:bg-ocean-50'
              }`}
            >
              Planos & Aulas
            </Link>

            {/* Safety modal button */}
            <button
              onClick={openSafetyModal}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-bold text-amber-700 bg-amber-50 hover:bg-amber-100 transition-colors ml-1"
              title="Guia de Segurança Infantil"
            >
              <Shield className="w-4 h-4 text-amber-600" />
              <span>Segurança</span>
            </button>
          </nav>

          {/* User Status / Action button */}
          <div className="flex items-center gap-2">
            {isStudent && studentSession ? (
              <div className="flex items-center gap-2">
                <div className="hidden sm:flex flex-col text-right">
                  <span className="text-xs font-extrabold text-emerald-700 flex items-center justify-end gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Aluno Ativo
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium truncate max-w-[130px]">
                    {studentSession.studentName}
                  </span>
                </div>
                <button
                  onClick={logout}
                  title="Sair do modo aluno"
                  className="p-2 text-slate-500 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <Link
                to="/acesso"
                className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-black bg-sun-400 hover:bg-sun-300 active:bg-sun-500 text-ocean-950 shadow-sm transition-all"
              >
                <User className="w-3.5 h-3.5" />
                <span>Entrar</span>
              </Link>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation Bar (like reference image screen 3) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-ocean-100 shadow-[0_-4px_16px_rgba(0,0,0,0.05)] safe-bottom">
        <div className="grid grid-cols-4 max-w-md mx-auto">
          <Link
            to="/"
            className={`flex flex-col items-center justify-center py-2.5 text-[11px] font-bold transition-colors ${
              isActive('/') ? 'text-ocean-600' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            <Home className="w-5 h-5 mb-0.5" />
            <span>Início</span>
          </Link>
          <Link
            to="/explorar"
            className={`flex flex-col items-center justify-center py-2.5 text-[11px] font-bold transition-colors ${
              isActive('/explorar') || isActive('/historias')
                ? 'text-ocean-600'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            <Compass className="w-5 h-5 mb-0.5" />
            <span>Historinhas</span>
          </Link>
          <Link
            to="/planos"
            className={`flex flex-col items-center justify-center py-2.5 text-[11px] font-bold transition-colors ${
              isActive('/planos') ? 'text-ocean-600' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            <Sparkles className="w-5 h-5 mb-0.5" />
            <span>Planos</span>
          </Link>
          <button
            onClick={openSafetyModal}
            className="flex flex-col items-center justify-center py-2.5 text-[11px] font-bold text-slate-500 hover:text-amber-600 transition-colors"
          >
            <Shield className="w-5 h-5 mb-0.5 text-amber-500" />
            <span>Segurança</span>
          </button>
        </div>
      </nav>
    </>
  );
};
