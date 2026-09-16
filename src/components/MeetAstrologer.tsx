import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, Sparkles } from 'lucide-react';

export const MeetAstrologer: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#210308] text-[#FFF8E8] relative overflow-hidden border-t border-[#D4A84F]/30">
      
      {/* Background glow & mandala ambiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#650D16]/25 rounded-full filter blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#650D16]/80 border border-[#D4A84F]/40 mb-4">
            <Sparkles className="w-4 h-4 text-[#F2C766]" />
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#F2C766] uppercase">
              Meet Your Astrologer
            </span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FFF8E8] leading-tight">
            Guidance With Experience & <span className="gold-gradient-text">Personal Attention</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: Pandit Portrait in Luxury Frame (lg:col-span-5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Radial Divine Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#F2C766]/20 via-[#D4A84F]/30 to-[#650D16]/40 rounded-3xl filter blur-xl animate-pulse-glow" />

              {/* Luxury Frame */}
              <div className="relative rounded-2xl p-1.5 bg-gradient-to-b from-[#F2C766] via-[#D4A84F] to-[#3A0710] shadow-2xl gold-glow">
                <div className="relative rounded-xl overflow-hidden bg-[#210308] border border-[#D4A84F]/30">
                  <img
                    src="/assets/pandit-portrait.jpg"
                    alt="Official Pandit Portrait - Sri Kanaka Durga Devi Astrology"
                    className="w-full h-[400px] sm:h-[460px] object-cover object-top hover:scale-103 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#210308] via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <span className="font-cinzel text-lg font-bold text-[#F2C766] block">
                      Sri Kanaka Durga Devi Astrology
                    </span>
                    <span className="text-xs text-[#FFF8E8]/80 font-medium">
                      Hyderabad, Telangana
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right: Personal Guidance Narrative (lg:col-span-7) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#F2C766] mb-4">
              Sri Kanaka Durga Devi Astrology
            </h3>

            <p className="text-base sm:text-lg text-[#FFF8E8]/90 mb-4 leading-relaxed">
              With <strong>15 years of experience</strong>, the practice is dedicated to helping people who are facing difficulties and seeking personal spiritual and astrological guidance.
            </p>

            <p className="text-base sm:text-lg text-[#FFF8E8]/90 mb-6 leading-relaxed">
              Every consultation is conducted with strict confidentiality, deep respect, and individual focus on your specific life concerns.
            </p>

            {/* Vision Callout Box */}
            <div className="w-full card-dark-glass p-5 rounded-2xl mb-8 border border-[#D4A84F]/40 shadow-inner">
              <span className="text-xs text-[#D4A84F] uppercase tracking-widest font-semibold block mb-1">
                Guiding Purpose
              </span>
              <p className="font-cinzel font-bold text-xl text-[#F2C766] italic">
                "To Help Who Are In Problems"
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a
                href="https://wa.me/919951597968"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-7 py-3.5 rounded-full shadow-lg hover:scale-105 transition-all text-base"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Speak on WhatsApp</span>
              </a>

              <a
                href="tel:+919951597968"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 border-2 border-[#D4A84F] text-[#F2C766] hover:bg-[#D4A84F]/10 font-bold px-7 py-3.5 rounded-full transition-all text-base"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
