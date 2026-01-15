
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-500 py-12 px-6 border-t border-white/5 text-center">
      <div className="max-w-7xl mx-auto space-y-4">
        <div className="text-2xl font-bold text-green-500 mb-2">이로운</div>
        <p className="text-sm">© {new Date().getFullYear()} Lee Roun. All rights reserved.</p>
        <p className="text-xs max-w-md mx-auto opacity-50">
          본 웹사이트는 이로운의 포트폴리오 용도로 제작되었으며, <br />
          사용된 모든 이미지는 저작권 규정을 준수합니다.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
