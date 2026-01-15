
import React from 'react';
import { Wrench, FileText, Anchor, Truck } from 'lucide-react';
import { Skill } from '../types';

const skills: Skill[] = [
  {
    name: "지게차 기능사",
    level: "전문가",
    description: "안전한 자재 운반 및 적재 관리 능력을 보유하고 있습니다.",
    icon: "Truck"
  },
  {
    name: "엑셀 (Excel)",
    level: "중급",
    description: "데이터 분석, 대시보드 관리 및 보고서 자동화가 가능합니다.",
    icon: "FileText"
  },
  {
    name: "용접 (TIG 가용)",
    level: "전문가",
    description: "정밀한 비철 및 특수강 용접 기술을 실무에 적용해왔습니다.",
    icon: "Wrench"
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">보유 기술 및 도구</h2>
          <p className="text-slate-500">현장에서 검증된 저만의 전문 역량입니다.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all border border-slate-100 flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-6">
                {skill.icon === "Truck" && <Truck size={28} />}
                {skill.icon === "FileText" && <FileText size={28} />}
                {skill.icon === "Wrench" && <Wrench size={28} />}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{skill.name}</h3>
              <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full mb-4">
                {skill.level}
              </span>
              <p className="text-slate-500 leading-relaxed text-sm">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 glass-dark p-8 rounded-3xl border border-green-100 flex flex-wrap items-center justify-around gap-8 text-green-800">
           <div className="flex flex-col items-center">
              <span className="text-3xl font-black mb-1">6+</span>
              <span className="text-sm font-medium">총 경력 (년)</span>
           </div>
           <div className="flex flex-col items-center">
              <span className="text-3xl font-black mb-1">100%</span>
              <span className="text-sm font-medium">안전 규정 준수</span>
           </div>
           <div className="flex flex-col items-center">
              <span className="text-3xl font-black mb-1">Multi</span>
              <span className="text-sm font-medium">다양한 직무 스킬</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
