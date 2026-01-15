
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: '홈' },
    { id: 'about', label: '자기소개' },
    { id: 'skills', label: '기술' },
    { id: 'activities', label: '활동' },
    { id: 'contact', label: '연락처' },
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="glass rounded-full px-6 py-3 flex items-center justify-between shadow-sm">
          <div 
            className="text-2xl font-bold text-green-600 cursor-pointer flex items-center gap-2"
            onClick={() => scrollTo('hero')}
          >
            <span className="bg-green-600 text-white w-8 h-8 flex items-center justify-center rounded-lg text-lg">이</span>
            로운
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-sm font-medium transition-colors hover:text-green-600 ${
                  activeSection === item.id ? 'text-green-600' : 'text-slate-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-slate-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-6 right-6 glass rounded-2xl shadow-xl p-6 flex flex-col gap-4 animate-in fade-in zoom-in duration-300">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-lg font-semibold py-2 text-left px-4 rounded-xl transition-colors ${
                activeSection === item.id ? 'bg-green-600/10 text-green-600' : 'text-slate-600'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
