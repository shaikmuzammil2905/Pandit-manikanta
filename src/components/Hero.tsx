import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Calendar, Sparkles, MapPin } from 'lucide-react';
import { TrustStats } from './TrustStats';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen pt-24 sm:pt-28 pb-12 flex flex-col justify-between overflow-hidden bg-[#210308]">
      
      {/* Hero Background Picture from image copy 2.png - Brightened and clearly visible */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transition-all duration-500 scale-102 filter brightness-110 contrast-105"
        style={{ backgroundImage: `url('/assets/hero-bg.jpg')` }}
      />

      {/* Subtle Warm Overlay Gradient to maintain text contrast while keeping BG bright & vivid */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#210308]/90 via-[#210308]/70 to-[#210308]/40 z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#210308] via-transparent to-transparent z-0 pointer-events-none" />

      {/* Decorative Golden Rays & Light Flares */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F2C766]/20 rounded-full filter blur-3xl animate-pulse-glow pointer-events-none z-0" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto py-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Hero Content (lg:col-span-7) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left drop-shadow-md"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3A0710]/90 border border-[#D4A84F] shadow-lg mb-6 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-[#F2C766]" />
              <span className="text-xs sm:text-sm font-bold tracking-wider text-[#F2C766] uppercase">
                15 Years of Spiritual Guidance
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#FFF8E8] leading-[1.15] mb-4 tracking-tight drop-shadow-lg">
              Find Guidance When <br className="hidden sm:inline" />
              <span className="gold-gradient-text">Life Feels Uncertain</span>
            </h1>

            {/* Subheading */}
            <h2 className="text-xl sm:text-2xl font-cinzel font-semibold text-[#F2C766] mb-3 drop-shadow">
              Sri Kanaka Durga Devi Astrology
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#FFF8E8] max-w-xl mb-6 leading-relaxed font-normal drop-shadow-md bg-[#210308]/60 p-4 rounded-2xl border-l-4 border-[#D4A84F] backdrop-blur-sm">
              Traditional spiritual and astrological guidance for people seeking clarity through life's difficult moments in Hyderabad.
            </p>

            {/* Location Tag */}
            <div className="flex items-center gap-2 text-sm text-[#F2C766] font-semibold mb-8 drop-shadow">
              <MapPin className="w-4 h-4 text-[#F2C766]" />
              <span>Hyderabad, Telangana, India</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-6">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#F2C766] via-[#D4A84F] to-[#B8860B] text-[#210308] font-extrabold px-8 py-4 rounded-full shadow-xl shadow-[#D4A84F]/30 hover:scale-105 transition-all text-base"
              >
                <Calendar className="w-5 h-5 text-[#210308]" />
                <span>Book a Consultation</span>
              </a>
              
              <a
                href="https://wa.me/919951597968"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold px-8 py-4 rounded-full shadow-xl shadow-green-900/40 hover:scale-105 transition-all text-base"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Grand Pandit Portrait (lg:col-span-5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center z-10 w-full"
          >
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-full">
              
              {/* Divine Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#D4A84F]/40 via-[#F2C766]/30 to-[#650D16]/50 rounded-3xl filter blur-2xl transform scale-105 animate-pulse-glow" />

              {/* Ornamental Gold Frame */}
              <div className="relative rounded-2xl p-1.5 bg-gradient-to-b from-[#F2C766] via-[#D4A84F] to-[#3A0710] shadow-2xl gold-glow">
                <div className="relative rounded-xl overflow-hidden bg-[#210308] border border-[#D4A84F]/50">
                  
                  {/* Astrologer Portrait Image from image copy 7.png */}
                  <img
                    src="/assets/pandit-grand.jpg"
                    alt="Astrologer Manikanta"
                    className="w-full h-[390px] sm:h-[460px] lg:h-[490px] object-cover object-top hover:scale-102 transition-transform duration-700"
                  />

                  {/* Dark Gradient Overlay at base */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#210308] via-transparent to-transparent opacity-80" />

                  {/* Badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#3A0710]/95 backdrop-blur-md border border-[#D4A84F] p-3 rounded-xl text-center shadow-2xl">
                    <span className="block font-cinzel font-bold text-base sm:text-lg text-[#F2C766]">
                      Astrologer Manikanta
                    </span>
                    <span className="block text-xs text-[#FFF8E8]/90 font-medium">
                      15 Years of Experienced Spiritual Guidance
                    </span>
                  </div>

                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Hero Bottom Trust Stats */}
      <div className="w-full mt-6 z-10">
        <TrustStats />
      </div>

    </section>
  );
};
