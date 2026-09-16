import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, Phone } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#3A0710]/95 backdrop-blur-md shadow-2xl border-b border-[#D4A84F]/30 py-3'
          : 'bg-gradient-to-b from-[#210308]/90 via-[#210308]/40 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <a href="#home" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full p-0.5 bg-gradient-to-tr from-[#D4A84F] via-[#F2C766] to-[#650D16] shadow-md group-hover:scale-105 transition-transform duration-300">
              <img
                src="/assets/logo.png"
                alt="Sri Kanaka Durga Devi Logo"
                className="w-full h-full object-cover rounded-full bg-[#210308]"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-cinzel font-bold text-base sm:text-lg lg:text-xl text-[#FFF8E8] tracking-wide leading-tight group-hover:text-[#F2C766] transition-colors">
                Sri Kanaka Durga Devi
              </span>
              <span className="text-[10px] sm:text-xs text-[#D4A84F] font-medium tracking-widest uppercase">
                — Astrology —
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#FFF8E8]/90 hover:text-[#F2C766] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#D4A84F] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action & WhatsApp Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+919951597968"
              className="hidden lg:flex items-center gap-2 text-xs font-semibold text-[#D4A84F] border border-[#D4A84F]/40 px-3 py-2 rounded-full hover:bg-[#D4A84F]/10 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+91 9951597968</span>
            </a>
            <a
              href="https://wa.me/919951597968"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-2 rounded-full font-medium text-sm shadow-lg hover:shadow-green-500/20 hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href="https://wa.me/919951597968"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#25D366] rounded-full text-white shadow-md hover:scale-105 transition-transform"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#F2C766] hover:text-white rounded-lg focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#210308]/98 backdrop-blur-xl border-b border-[#D4A84F]/30 px-4 pt-4 pb-6 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#FFF8E8] hover:text-[#F2C766] py-2 border-b border-[#3A0710] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-2">
              <a
                href="https://wa.me/919951597968"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl font-semibold shadow-md"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>WhatsApp Us (+91 9951597968)</span>
              </a>
              <a
                href="tel:+919951597968"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 border border-[#D4A84F] text-[#F2C766] py-3 rounded-xl font-semibold hover:bg-[#D4A84F]/10 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now (+91 9951597968)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
