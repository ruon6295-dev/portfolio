
import React from 'react';
import { MessageCircle, Users, BrainCircuit } from 'lucide-react';
import { Keyword } from '../types';

const keywords: Keyword[] = [
  {
    label: "공감능력",
    description: "동료의 어려움을 먼저 헤아리고, 원활한 소통의 가교 역할을 수행합니다.",
    icon: "MessageCircle"
  },
  {
    label: "대인관계",
    description: "다양한 부서와의 협업 경험을 통해 끈끈한 신뢰 관계를 구축합니다.",
    icon: "Users"
  },
  {
    label: "잡학다식",
    description: "용접부터 조달까지, 넓은 지식 스펙트럼으로 예상치 못한 상황을 유연하게 해결합니다.",
    icon: "BrainCircuit"
  }
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">핵심 키워드</h2>
        <p className="text-slate-500">저를 가장 잘 설명하는 세 가지 키워드입니다.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {keywords.map((kw, idx) => (
          <div key={idx} className="glass p-8 rounded-3xl group hover:shadow-xl transition-all duration-300 border border-slate-100">
            <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
              {kw.icon === "MessageCircle" && <MessageCircle size={32} />}
              {kw.icon === "Users" && <Users size={32} />}
              {kw.icon === "BrainCircuit" && <BrainCircuit size={32} />}
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-3">{kw.label}</h3>
            <p className="text-slate-600 leading-relaxed">
              {kw.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-20 glass p-8 md:p-12 rounded-[40px] flex flex-col md:flex-row items-center gap-10">
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-[32px] overflow-hidden flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl">
          <img src="https://picsum.photos/400/400" alt="이로운 프로필" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 space-y-6">
          <h3 className="text-3xl font-bold text-slate-900">
            "실무와 소통을 잇는 <span className="text-green-600">안전 전문가</span>"
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            저는 현장의 거친 용접 현장부터 세밀한 품질관리, 그리고 전략적인 조달 업무까지 두루 섭렵했습니다. 
            단순히 업무를 처리하는 것을 넘어, '사고 없는 안전한 환경'이 곧 기업의 경쟁력이라는 신념으로 
            동료들과 함께 성장하는 조직 문화를 지향합니다.
          </p>
          <div className="pt-4 border-t border-slate-200 grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-slate-400 mb-1">성명</p>
              <p className="font-semibold text-slate-800">이로운</p>
            </div>
            <div>
              <p className="text-sm text-slate-400 mb-1">전문 분야</p>
              <p className="font-semibold text-slate-800">조달 / 품질 / 기술</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
