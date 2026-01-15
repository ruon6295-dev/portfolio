
import React from 'react';
import { Activity } from '../types';

const activities: Activity[] = [
  {
    period: "3년",
    title: "조달팀 외주 Part",
    department: "구매 및 조달 본부",
    details: [
      "외주 가공 업체 선정 및 단가 협의",
      "공급망 리스크 관리 및 안전 규정 심사",
      "자재 수급 최적화를 통한 원가 절감 기여"
    ]
  },
  {
    period: "1년 6개월",
    title: "품질관리",
    department: "품질경영팀",
    details: [
      "제품 출하 전 규격 및 품질 검수",
      "부적합 보고서 작성 및 공정 개선 제안",
      "ISO 품질 인증 유지 및 현장 오차 범위 최소화"
    ]
  },
  {
    period: "1년 6개월",
    title: "용접반 기술직",
    department: "생산기술부",
    details: [
      "TIG 및 특수 용접 수행 (비철 금속 등)",
      "제품 도면 분석 및 현장 시공",
      "현장 안전 지침 준수 및 무사고 달성"
    ]
  }
];

const Activities: React.FC = () => {
  return (
    <section id="activities" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">활동 및 성과</h2>
          <p className="text-slate-500">지금까지 쌓아온 실전 경험의 발자취입니다.</p>
        </div>

        <div className="space-y-12">
          {activities.map((act, idx) => (
            <div key={idx} className="relative pl-8 md:pl-0">
              {/* Timeline Line */}
              <div className="absolute left-0 top-0 bottom-[-48px] w-px bg-slate-200 hidden md:block" style={{ left: '50%' }}></div>
              
              <div className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1 w-full">
                  <div className={`glass p-8 rounded-[32px] shadow-sm hover:shadow-md transition-shadow border border-slate-100 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <span className="text-green-600 font-black text-xl mb-2 block">{act.period}</span>
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">{act.title}</h3>
                    <p className="text-slate-500 text-sm mb-4">{act.department}</p>
                    <ul className={`space-y-2 text-slate-600 inline-block ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      {act.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-2">
                          {idx % 2 === 1 && <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0"></span>}
                          <span>{detail}</span>
                          {idx % 2 === 0 && <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0 hidden md:block"></span>}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="w-12 h-12 rounded-full bg-white border-4 border-green-500 absolute left-[-22px] md:left-1/2 md:-translate-x-1/2 flex items-center justify-center z-10 shadow-sm">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>

                <div className="flex-1 hidden md:block"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
