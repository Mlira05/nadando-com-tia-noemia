import React, { useState, useEffect } from 'react';
import { Download, X, Smartphone, Sparkles } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export const PwaInstallBanner: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isIos, setIsIos] = useState(false);
  const [showIosGuide, setShowIosGuide] = useState(false);

  useEffect(() => {
    // Check if user is on iOS
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIosDevice = /iphone|ipad|ipod/.test(userAgent);
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;

    if (isIosDevice && !isStandalone) {
      setIsIos(true);
      // Show banner after 3 seconds if not already installed
      const timer = setTimeout(() => setIsVisible(true), 3000);
      return () => clearTimeout(timer);
    }

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setIsVisible(true);
    };

    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstallClick = async () => {
    if (isIos) {
      setShowIosGuide(true);
      return;
    }

    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setIsVisible(false);
    }
    setDeferredPrompt(null);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 left-4 md:left-auto md:w-96 z-50 animate-bounce-subtle">
      <div className="bg-white rounded-2xl p-4 shadow-2xl border-2 border-sun-400 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <img
            src={getAssetUrl('images/app-icon.jpg')}
            alt="App Tia Noêmia"
            className="w-11 h-11 rounded-xl object-cover border border-ocean-200 shrink-0 shadow-sm"
          />
          <div>
            <h5 className="font-display font-black text-xs sm:text-sm text-ocean-950 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-sun-500 fill-sun-400" />
              <span>Instalar Aplicativo PWA</span>
            </h5>
            <p className="text-[11px] text-slate-500 leading-tight mt-0.5">
              Tenha a Tia Noêmia na sua tela inicial para acesso rápido offline!
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={handleInstallClick}
            className="px-3 py-2 rounded-xl bg-sun-400 hover:bg-sun-300 text-ocean-950 font-black text-xs shadow-sm transition-colors flex items-center gap-1"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Instalar</span>
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* iOS Instructions Sheet */}
      {showIosGuide && (
        <div className="mt-2 bg-ocean-900 text-white rounded-2xl p-4 text-xs shadow-xl space-y-2">
          <div className="font-bold text-sun-300 flex items-center gap-1.5">
            <Smartphone className="w-4 h-4" /> Para instalar no iPhone / iPad:
          </div>
          <ol className="list-decimal pl-4 space-y-1 text-slate-200 text-[11px]">
            <li>Toque no botão de <strong>Compartilhar</strong> (ícone do quadrado com seta) no Safari.</li>
            <li>Role para baixo e selecione <strong>"Adicionar à Tela de Início"</strong>.</li>
            <li>Toque em <strong>Adicionar</strong> no canto superior direito.</li>
          </ol>
          <button
            onClick={() => setShowIosGuide(false)}
            className="w-full text-center text-[10px] text-sun-300 hover:underline pt-1"
          >
            Fechar instruções
          </button>
        </div>
      )}
    </div>
  );
};
