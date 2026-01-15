
import React from 'react';
import { Mail, Phone, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-slate-900 text-white rounded-t-[60px] relative overflow-hidden">
      {/* Visual background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-[100px]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              더 안전한 내일을 <br />
              <span className="text-green-400">함께 만들어가고 싶습니다.</span>
            </h2>
            <p className="text-slate-400 text-lg">
              제 기술력과 성실함이 귀사의 성장에 보탬이 될 것이라 확신합니다. <br />
              궁금하신 점이 있다면 언제든 아래 연락처로 문의해 주세요.
            </p>
          </div>

          <div className="space-y-6">
            <a 
              href="mailto:lrw2619@wooyang.co.kr"
              className="flex items-center gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
            >
              <div className="w-14 h-14 bg-green-500/20 text-green-400 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-green-500 group-hover:text-white transition-colors">
                <Mail size={28} />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-500 mb-1 font-medium">Email Address</p>
                <p className="text-xl font-bold">lrw2619@wooyang.co.kr</p>
              </div>
              <ExternalLink className="text-slate-600 group-hover:text-green-400" size={20} />
            </a>

            <a 
              href="tel:01035549439"
              className="flex items-center gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
            >
              <div className="w-14 h-14 bg-green-500/20 text-green-400 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-green-500 group-hover:text-white transition-colors">
                <Phone size={28} />
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-500 mb-1 font-medium">Phone Number</p>
                <p className="text-xl font-bold">010-3554-9439</p>
              </div>
              <ExternalLink className="text-slate-600 group-hover:text-green-400" size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
