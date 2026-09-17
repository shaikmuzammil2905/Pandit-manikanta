import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageCircle, Calendar, Sparkles, MapPin } from 'lucide-react';
import { TrustStats } from './TrustStats';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative w-full overflow-hidden bg-[#210308]">
      
      {/* =========================================================================
          1. MOBILE-ONLY HERO (< 768px / md:hidden)
          Strictly mobile: shows 100% COMPLETE original image with zero cropping.
          Arch, hanging lamps, sunset sky, temple, river, Goddess, tiger, trident,
          lotus, and bottom lamps & flowers are completely visible.
         ========================================================================= */}
      <div className="md:hidden relative w-full min-h-[calc(100vw*1.7768)] flex flex-col justify-between pt-20 pb-4 px-4 overflow-hidden">
        
        {/* Dedicated Mobile Background Layer with Animation */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#210308]">
          <motion.img
            src="/assets/hero-bg-mobile.jpg"
            alt="Sri Kanaka Durga Devi Full Portrait"
            initial={{ scale: 1, filter: 'brightness(1.1) contrast(1.05)' }}
            animate={{ 
              scale: [1, 1.05, 1],
              filter: [
                'brightness(1.1) contrast(1.05)',
                'brightness(1.22) contrast(1.1)',
                'brightness(1.1) contrast(1.05)'
              ]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity, 
              ease: 'easeInOut' 
            }}
            className="w-full h-full object-fill object-center pointer-events-none"
          />
          {/* Radiant Glow Effect */}
          <div className="absolute inset-0 bg-[#F2C766]/10 animate-pulse pointer-events-none" />
          {/* Layered Gradient Overlay: Dark behind top text and bottom buttons, transparent in center */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#210308]/90 via-transparent to-[#210308]/90 pointer-events-none" />
        </div>

        {/* Mobile Top Content (Eyebrow & Heading) */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 flex flex-col items-center text-center"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3A0710]/90 border border-[#F2C766] shadow-md mb-2 backdrop-blur-sm">
            <Sparkles className="w-3 h-3 text-[#F2C766]" />
            <span className="text-[10px] font-extrabold tracking-wider text-[#F2C766] uppercase">
              15 Years of Spiritual Guidance
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-cinzel text-2xl font-black text-white leading-tight mb-1 tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
            Astrologer in Hyderabad for <br />
            <span className="gold-gradient-text">Spiritual & Astrology Guidance</span>
          </h1>

          {/* Subheading */}
          <h2 className="text-xs font-cinzel font-bold text-[#F2C766] drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)]">
            Sri Kanaka Durga Devi Astrology
          </h2>
        </motion.div>

        {/* Clear Middle Space: Allows Goddess Durga Devi, Tiger, Lotus & Temple to shine through unobstructed */}
        <div className="w-full min-h-[140px] pointer-events-none" />

        {/* Mobile Bottom Content (Description, Location & CTAs) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative z-10 flex flex-col items-center text-center w-full"
        >
          {/* Description Box */}
          <p className="text-xs text-white font-medium leading-relaxed bg-[#210308]/85 p-3 rounded-xl border-l-4 border-[#F2C766] shadow-2xl backdrop-blur-md mb-2 max-w-sm">
            Traditional spiritual and astrological guidance for people seeking clarity through life's difficult moments in Hyderabad.
          </p>

          {/* Location Badge */}
          <div className="flex items-center justify-center gap-1 text-[11px] text-[#F2C766] font-bold mb-3 drop-shadow bg-[#3A0710]/90 px-3 py-1 rounded-full border border-[#D4A84F]/50">
            <MapPin className="w-3.5 h-3.5 text-[#F2C766]" />
            <span>Hyderabad, Telangana, India</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-row items-center justify-center gap-2.5 w-full max-w-sm">
            <Link
              to="/contact"
              className="flex-1 inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-[#F2C766] via-[#D4A84F] to-[#B8860B] text-[#210308] font-black px-3 py-2.5 rounded-full shadow-xl shadow-[#D4A84F]/30 active:scale-95 transition-all text-xs text-center"
            >
              <Calendar className="w-3.5 h-3.5 text-[#210308] shrink-0" />
              <span>Book Consultation</span>
            </Link>
            
            <a
              href="https://wa.me/919951597968"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-black px-3 py-2.5 rounded-full shadow-xl shadow-green-900/40 active:scale-95 transition-all text-xs text-center"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white shrink-0" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </motion.div>

      </div>

      {/* =========================================================================
          2. DESKTOP-ONLY HERO (>= 768px / hidden md:flex)
          100% UNTOUCHED. Retains exact layout, background, position, animations.
         ========================================================================= */}
      <div className="hidden md:flex min-h-[85vh] sm:min-h-screen pt-24 sm:pt-28 pb-10 flex-col justify-between overflow-hidden relative">
        
        {/* Desktop Animated Hero Background Picture (image copy 12.png) */}
        <motion.div 
          initial={{ scale: 1, filter: 'brightness(1.1) contrast(1.05)' }}
          animate={{ 
            scale: [1, 1.04, 1],
            filter: [
              'brightness(1.1) contrast(1.05)',
              'brightness(1.2) contrast(1.1)',
              'brightness(1.1) contrast(1.05)'
            ]
          }}
          transition={{ 
            duration: 16, 
            repeat: Infinity, 
            ease: 'easeInOut' 
          }}
          className="absolute inset-0 bg-cover bg-[75%_center] bg-no-repeat z-0"
          style={{ backgroundImage: `url('/assets/hero-bg.jpg')` }}
        />

        {/* Soft gradient overlay on left for text legibility while keeping right side (Goddess Durga) bright & clear */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#210308]/95 via-[#210308]/50 to-transparent z-0 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#210308] via-transparent to-transparent z-0 pointer-events-none" />

        {/* Radiant Floating Sparkle Glows */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#F2C766]/20 rounded-full filter blur-3xl animate-pulse-glow pointer-events-none z-0" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#650D16]/30 rounded-full filter blur-3xl pointer-events-none z-0" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto py-8 z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Hero Content & CTAs (lg:col-span-7) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3A0710]/95 border border-[#F2C766] shadow-xl mb-6 backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-[#F2C766]" />
                <span className="text-xs sm:text-sm font-extrabold tracking-wider text-[#F2C766] uppercase">
                  15 Years of Spiritual Guidance
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.15] mb-4 tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                Astrologer in Hyderabad for <br className="hidden sm:inline" />
                <span className="gold-gradient-text">Spiritual & Astrology Guidance</span>
              </h1>

              {/* Subheading */}
              <h2 className="text-xl sm:text-2xl font-cinzel font-bold text-[#F2C766] mb-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                Sri Kanaka Durga Devi Astrology
              </h2>

              {/* Description */}
              <p className="text-base sm:text-lg text-white font-medium max-w-xl mb-6 leading-relaxed bg-[#210308]/80 p-4 sm:p-5 rounded-2xl border-l-4 border-[#F2C766] shadow-2xl backdrop-blur-md">
                Traditional spiritual and astrological guidance for people seeking clarity through life's difficult moments in Hyderabad.
              </p>

              {/* Location Tag */}
              <div className="flex items-center gap-2 text-sm text-[#F2C766] font-bold mb-8 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] bg-[#3A0710]/90 px-4 py-1.5 rounded-full border border-[#D4A84F]">
                <MapPin className="w-4 h-4 text-[#F2C766]" />
                <span>Hyderabad, Telangana, India</span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-4">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#F2C766] via-[#D4A84F] to-[#B8860B] text-[#210308] font-black px-8 py-4 rounded-full shadow-2xl shadow-[#D4A84F]/40 hover:scale-105 transition-all text-base"
                >
                  <Calendar className="w-5 h-5 text-[#210308]" />
                  <span>Book a Consultation</span>
                </Link>
                
                <a
                  href="https://wa.me/919951597968"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-black px-8 py-4 rounded-full shadow-2xl shadow-green-900/50 hover:scale-105 transition-all text-base"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </motion.div>

            {/* Right Column (lg:col-span-5) - Leaves Goddess Durga Devi background clearly visible */}
            <div className="hidden lg:block lg:col-span-5 min-h-[350px]" />

          </div>
        </div>

      </div>

      {/* Trust Stats: Renders below the Hero visual for both Mobile and Desktop */}
      <div className="w-full relative z-20">
        <TrustStats />
      </div>

    </section>
  );
};
