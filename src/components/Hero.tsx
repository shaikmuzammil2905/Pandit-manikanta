import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Calendar, Sparkles, MapPin } from 'lucide-react';
import { TrustStats } from './TrustStats';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[85vh] sm:min-h-screen pt-24 sm:pt-28 pb-10 flex flex-col justify-between overflow-hidden bg-[#210308]">
      
      {/* Hero Background Picture (image copy 12.png) - Luminous & Clearly Visible with Goddess Durga Devi */}
      <div 
        className="absolute inset-0 bg-cover bg-right lg:bg-center bg-no-repeat z-0 filter brightness-110 contrast-105"
        style={{ backgroundImage: `url('/assets/hero-bg.jpg')` }}
      />

      {/* Soft gradient overlay on left for text legibility while leaving right side (Goddess Durga) bright & clear */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#210308]/90 via-[#210308]/60 to-transparent z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#210308] via-transparent to-transparent z-0 pointer-events-none" />

      {/* Soft Glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#F2C766]/15 rounded-full filter blur-3xl animate-pulse-glow pointer-events-none z-0" />

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
              Find Guidance When <br className="hidden sm:inline" />
              <span className="gold-gradient-text">Life Feels Uncertain</span>
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
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#F2C766] via-[#D4A84F] to-[#B8860B] text-[#210308] font-black px-8 py-4 rounded-full shadow-2xl shadow-[#D4A84F]/40 hover:scale-105 transition-all text-base"
              >
                <Calendar className="w-5 h-5 text-[#210308]" />
                <span>Book a Consultation</span>
              </a>
              
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

      {/* Hero Bottom Trust Stats */}
      <div className="w-full mt-6 z-10">
        <TrustStats />
      </div>

    </section>
  );
};
