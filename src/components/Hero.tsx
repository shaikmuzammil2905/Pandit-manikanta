import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Calendar, Sparkles, MapPin } from 'lucide-react';
import { TrustStats } from './TrustStats';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen pt-24 sm:pt-28 pb-12 flex flex-col justify-between overflow-hidden bg-[#210308]">
      
      {/* Layer 1: Atmospheric Background Gradient & Glows */}
      <div className="absolute inset-0 bg-radial from-[#650D16]/40 via-[#210308]/90 to-[#210308] pointer-events-none" />
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#D4A84F]/10 rounded-full filter blur-3xl animate-pulse-glow pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#650D16]/30 rounded-full filter blur-3xl pointer-events-none" />
      
      {/* Decorative Zodiac & Temple Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url('/assets/goddess-durga.jpg')` }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Hero Copy & Actions (lg:col-span-7) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-10"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#650D16]/80 border border-[#D4A84F]/40 shadow-sm mb-6">
              <Sparkles className="w-4 h-4 text-[#F2C766]" />
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#F2C766] uppercase">
                15 Years of Spiritual Guidance
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#FFF8E8] leading-[1.15] mb-4 tracking-tight">
              Find Guidance When <br className="hidden sm:inline" />
              <span className="gold-gradient-text">Life Feels Uncertain</span>
            </h1>

            {/* Subheading */}
            <h2 className="text-xl sm:text-2xl font-cinzel font-semibold text-[#F2C766] mb-3">
              Sri Kanaka Durga Devi Astrology
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#FFF8E8]/85 max-w-xl mb-6 leading-relaxed">
              Traditional spiritual and astrological guidance for people seeking clarity through life's difficult moments in Hyderabad.
            </p>

            {/* Location Tag */}
            <div className="flex items-center gap-2 text-sm text-[#D4A84F] font-medium mb-8">
              <MapPin className="w-4 h-4 text-[#F2C766]" />
              <span>Hyderabad, Telangana, India</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-8">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#F2C766] via-[#D4A84F] to-[#B8860B] text-[#210308] font-bold px-7 py-3.5 rounded-full shadow-lg shadow-[#D4A84F]/25 hover:shadow-[#D4A84F]/40 hover:scale-105 transition-all duration-300 text-base"
              >
                <Calendar className="w-5 h-5 text-[#210308]" />
                <span>Book a Consultation</span>
              </a>
              
              <a
                href="https://wa.me/919951597968"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-7 py-3.5 rounded-full shadow-lg shadow-green-900/30 hover:scale-105 transition-all duration-300 text-base"
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
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center items-center z-10 w-full"
          >
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-full">
              
              {/* Divine Halo Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#D4A84F]/30 via-[#650D16]/50 to-transparent rounded-3xl filter blur-2xl transform scale-105 animate-pulse-glow" />

              {/* Ornamental Frame Container */}
              <div className="relative rounded-2xl p-1.5 bg-gradient-to-b from-[#F2C766] via-[#D4A84F] to-[#650D16] shadow-2xl gold-glow">
                <div className="relative rounded-xl overflow-hidden bg-[#210308] border border-[#D4A84F]/40">
                  
                  {/* Pandit Portrait Image */}
                  <img
                    src="/assets/pandit-portrait.jpg"
                    alt="Pandit Sri Kanaka Durga Devi Astrology"
                    className="w-full h-[380px] sm:h-[450px] lg:h-[480px] object-cover object-top hover:scale-102 transition-transform duration-700"
                  />

                  {/* Soft Vignette / Lighting Overlay at base */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#210308] via-transparent to-transparent opacity-70" />

                  {/* Pandit Name Pill Badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#3A0710]/90 backdrop-blur-md border border-[#D4A84F]/50 p-3 rounded-xl text-center shadow-xl">
                    <span className="block font-cinzel font-bold text-base sm:text-lg text-[#F2C766]">
                      Astrologer Manikanta
                    </span>
                    <span className="block text-xs text-[#FFF8E8]/80">
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
      <div className="w-full mt-8 z-10">
        <TrustStats />
      </div>

    </section>
  );
};
