import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { MessageCircle, Menu, X, Phone, ChevronDown, User, Sparkles } from 'lucide-react';
import { servicesData } from '../data/servicesData';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  const handleNavClick = (href: string) => {
    if (href.startsWith('/#')) {
      const sectionId = href.replace('/#', '');
      if (location.pathname !== '/') {
        navigate('/', { state: { scrollTo: sectionId } });
      } else {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#3A0710]/95 backdrop-blur-md shadow-2xl border-b border-[#D4A84F]/40 py-2.5'
          : 'bg-gradient-to-b from-[#210308]/95 via-[#210308]/60 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand using image copy 8.png logo */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative w-11 h-11 sm:w-13 sm:h-13 rounded-full p-0.5 bg-gradient-to-tr from-[#D4A84F] via-[#F2C766] to-[#650D16] shadow-lg group-hover:scale-105 transition-transform duration-300">
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
              <span className="text-[10px] sm:text-xs text-[#D4A84F] font-semibold tracking-widest uppercase">
                — Astrology —
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            <button
              onClick={() => handleNavClick('/')}
              className="text-sm font-medium text-[#FFF8E8]/90 hover:text-[#F2C766] transition-colors cursor-pointer py-1"
            >
              Home
            </button>

            <button
              onClick={() => handleNavClick('/#about')}
              className="text-sm font-medium text-[#FFF8E8]/90 hover:text-[#F2C766] transition-colors cursor-pointer py-1"
            >
              About
            </button>

            {/* Services Dropdown */}
            <div
              className="relative py-1"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className="flex items-center gap-1.5 text-sm font-medium text-[#FFF8E8]/90 hover:text-[#F2C766] transition-colors cursor-pointer"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 text-[#D4A84F] transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-[#3A0710] border-2 border-[#D4A84F]/50 rounded-2xl p-3 shadow-2xl backdrop-blur-xl animate-in fade-in duration-200 z-50">
                  <div className="text-[11px] font-bold text-[#D4A84F] uppercase tracking-wider px-3 py-1 mb-1 border-b border-[#D4A84F]/20">
                    Astrological Services
                  </div>
                  <div className="flex flex-col gap-1">
                    {servicesData.map((svc) => (
                      <Link
                        key={svc.id}
                        to={`/services/${svc.id}`}
                        onClick={() => setServicesDropdownOpen(false)}
                        className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-[#FFF8E8]/90 hover:text-[#F2C766] hover:bg-[#650D16]/60 transition-colors"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-[#F2C766] shrink-0" />
                        <span>{svc.title}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Pandit Astrologer Dedicated Page Link */}
            <Link
              to="/astrologer"
              className="flex items-center gap-1.5 text-sm font-semibold text-[#F2C766] hover:text-white transition-colors py-1"
            >
              <User className="w-4 h-4 text-[#F2C766]" />
              <span>Astrologer Manikanta</span>
            </Link>

            <button
              onClick={() => handleNavClick('/#contact')}
              className="text-sm font-medium text-[#FFF8E8]/90 hover:text-[#F2C766] transition-colors cursor-pointer py-1"
            >
              Contact
            </button>
          </nav>

          {/* Right Action & WhatsApp Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+919951597968"
              className="flex items-center gap-2 text-xs font-semibold text-[#D4A84F] border border-[#D4A84F]/40 px-3 py-2 rounded-full hover:bg-[#D4A84F]/10 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#F2C766]" />
              <span>+91 9951597968</span>
            </a>
            <a
              href="https://wa.me/919951597968"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg hover:shadow-green-500/20 hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile Hamburger & WhatsApp Button */}
          <div className="flex lg:hidden items-center gap-3">
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
        <div className="lg:hidden bg-[#210308]/98 backdrop-blur-2xl border-b border-[#D4A84F]/40 px-5 pt-4 pb-6 shadow-2xl animate-in slide-in-from-top duration-300 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col gap-3">
            <button
              onClick={() => handleNavClick('/')}
              className="text-left text-base font-semibold text-[#FFF8E8] hover:text-[#F2C766] py-2 border-b border-[#3A0710]"
            >
              Home
            </button>

            <button
              onClick={() => handleNavClick('/#about')}
              className="text-left text-base font-semibold text-[#FFF8E8] hover:text-[#F2C766] py-2 border-b border-[#3A0710]"
            >
              About Us
            </button>

            {/* Mobile Services Accordion */}
            <div className="border-b border-[#3A0710] py-2">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between text-base font-semibold text-[#F2C766]"
              >
                <span>Our Services</span>
                <ChevronDown className={`w-5 h-5 text-[#F2C766] transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {mobileServicesOpen && (
                <div className="mt-2 pl-3 flex flex-col gap-2 border-l-2 border-[#D4A84F]">
                  {servicesData.map((svc) => (
                    <Link
                      key={svc.id}
                      to={`/services/${svc.id}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-sm font-medium text-[#FFF8E8]/85 hover:text-[#F2C766] py-1"
                    >
                      • {svc.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/astrologer"
              onClick={() => setMobileMenuOpen(false)}
              className="text-left text-base font-semibold text-[#F2C766] py-2 border-b border-[#3A0710] flex items-center gap-2"
            >
              <User className="w-5 h-5" />
              <span>Astrologer Manikanta</span>
            </Link>

            <button
              onClick={() => handleNavClick('/#contact')}
              className="text-left text-base font-semibold text-[#FFF8E8] hover:text-[#F2C766] py-2 border-b border-[#3A0710]"
            >
              Contact
            </button>

            <div className="flex flex-col gap-3 pt-3">
              <a
                href="https://wa.me/919951597968"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl font-bold shadow-md"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>WhatsApp (+91 9951597968)</span>
              </a>

              <a
                href="tel:+919951597968"
                className="flex items-center justify-center gap-2 border-2 border-[#D4A84F] text-[#F2C766] py-3 rounded-xl font-bold"
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
