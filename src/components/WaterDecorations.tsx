import React from 'react';

export const WaterDecorations: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Soft gradient ambient glow */}
      <div className="absolute top-10 -left-20 w-72 h-72 bg-sky-200/40 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-cyan-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-ocean-200/30 rounded-full blur-3xl"></div>

      {/* Floating animated bubbles */}
      <div className="absolute top-24 left-[15%] w-6 h-6 rounded-full border-2 border-white/60 bg-white/20 backdrop-blur-[1px] animate-float-slow shadow-sm">
        <div className="w-1.5 h-1.5 bg-white rounded-full mt-1 ml-1 opacity-80"></div>
      </div>
      <div className="absolute top-48 right-[12%] w-4 h-4 rounded-full border border-white/50 bg-white/20 backdrop-blur-[1px] animate-float-reverse shadow-sm">
        <div className="w-1 h-1 bg-white rounded-full mt-0.5 ml-0.5 opacity-80"></div>
      </div>
      <div className="absolute top-2/3 left-[8%] w-8 h-8 rounded-full border-2 border-white/60 bg-white/15 backdrop-blur-[1px] animate-float-slow shadow-sm">
        <div className="w-2 h-2 bg-white rounded-full mt-1.5 ml-1.5 opacity-80"></div>
      </div>
      <div className="absolute bottom-40 right-[15%] w-5 h-5 rounded-full border border-white/50 bg-white/20 backdrop-blur-[1px] animate-float-reverse shadow-sm">
        <div className="w-1.5 h-1.5 bg-white rounded-full mt-1 ml-1 opacity-80"></div>
      </div>
    </div>
  );
};

export const WaveDivider: React.FC<{ flip?: boolean; className?: string }> = ({
  flip = false,
  className = ''
}) => {
  return (
    <div
      className={`w-full overflow-hidden leading-none ${flip ? 'rotate-180' : ''} ${className}`}
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block w-full h-8 sm:h-12 text-white fill-current"
      >
        <path d="M0,0 C150,90 350,-40 500,40 C650,120 900,20 1200,60 L1200,120 L0,120 Z"></path>
      </svg>
    </div>
  );
};
