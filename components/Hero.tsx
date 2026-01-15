
import React from 'react';
import { ShieldCheck, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-50/50 via-transparent to-transparent"></div>
      
      <div className="text-center max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-1000">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-green-700 font-medium text-sm mb-4">
          <ShieldCheck size={18} />
          <span>안전과 신뢰를 가치로 삼는 전문가</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
          사고없이 <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">안전한</span><br /> 
          회사 생활을 만듭니다
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          안녕하세요, 공감과 대인관계를 중시하며 <br className="hidden sm:block" />
          풍부한 잡학다식 지식을 바탕으로 현장을 리드하는 이로운입니다.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-2xl shadow-lg shadow-green-200 transition-all hover:scale-105 active:scale-95"
          >
            함께 일하기
          </button>
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 glass hover:bg-slate-50 text-slate-700 font-bold rounded-2xl transition-all hover:scale-105 active:scale-95"
          >
            경험 보기
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-400">
        <ArrowDown size={32} />
      </div>
    </section>
  );
};

export default Hero;
