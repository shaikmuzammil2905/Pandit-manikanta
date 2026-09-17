import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, Sparkles, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const MeetAstrologer: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#210308] text-[#FFF8E8] relative overflow-hidden border-t border-[#D4A84F]/40">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#650D16]/30 rounded-full filter blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#650D16]/90 border border-[#D4A84F]/50 mb-4 shadow-md">
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
          
          {/* Left Column: Pandit Portrait from image copy 7.png (lg:col-span-5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Radial Divine Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#F2C766]/30 via-[#D4A84F]/30 to-[#650D16]/50 rounded-3xl filter blur-2xl animate-pulse-glow" />

              {/* Grand Luxury Frame */}
              <div className="relative rounded-2xl p-1.5 bg-gradient-to-b from-[#F2C766] via-[#D4A84F] to-[#3A0710] shadow-2xl gold-glow">
                <div className="relative rounded-xl overflow-hidden bg-[#210308] border border-[#D4A84F]/40">
                  
                  {/* Image from image copy 7.png */}
                  <img
                    src="/assets/pandit-grand.jpg"
                    alt="Grand Astrologer Manikanta Portrait"
                    className="w-full h-[420px] sm:h-[480px] object-cover object-top hover:scale-103 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#210308] via-transparent to-transparent opacity-85" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <span className="font-cinzel text-xl font-bold text-[#F2C766] block">
                      Astrologer Manikanta
                    </span>
                    <span className="text-xs text-[#FFF8E8]/90 font-medium">
                      15 Years Experience • Hyderabad, Telangana
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Astrologer Profile & Detailed Page Link (lg:col-span-7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col items-start min-w-0 w-full"
          >
            <div className="flex items-center gap-2 text-[#D4A84F] font-bold text-sm uppercase tracking-wider mb-2">
              <Award className="w-5 h-5 text-[#F2C766]" />
              <span>Sri Kanaka Durga Devi Astrology</span>
            </div>

            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#F2C766] mb-4 w-full break-words">
              Dedicated Spiritual Guidance for Every Concern
            </h3>

            <p className="text-base sm:text-lg text-[#FFF8E8]/90 mb-4 leading-relaxed w-full break-words">
              With <strong>15 years of experience</strong>, the practice is dedicated to helping people who are facing difficulties and seeking personal spiritual and astrological guidance in Hyderabad.
            </p>

            <p className="text-base sm:text-lg text-[#FFF8E8]/90 mb-6 leading-relaxed w-full break-words">
              Every consultation is handled with strict privacy, individual attention, and traditional horoscope principles to help you navigate life's uncertainty.
            </p>

            {/* Vision Callout */}
            <div className="w-full max-w-full card-dark-glass p-4 sm:p-5 rounded-2xl mb-8 border border-[#D4A84F]/50 shadow-inner box-border">
              <span className="text-xs text-[#D4A84F] uppercase tracking-widest font-bold block mb-1">
                Guiding Principle
              </span>
              <p className="font-cinzel font-bold text-xl text-[#F2C766] italic">
                "To Help Who Are In Problems"
              </p>
            </div>

            {/* Action Buttons including Dedicated Page Link */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto box-border">
              <Link
                to="/astrologer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#F2C766] via-[#D4A84F] to-[#B8860B] text-[#210308] font-extrabold px-4 sm:px-7 py-3 sm:py-3.5 rounded-full shadow-lg hover:scale-105 transition-all text-sm sm:text-base box-border"
              >
                <span className="whitespace-normal text-center">View Complete Profile & Stats</span>
                <ArrowRight className="w-4 h-4 text-[#210308] shrink-0" />
              </Link>

              <a
                href="https://wa.me/919951597968"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold px-4 sm:px-7 py-3 sm:py-3.5 rounded-full shadow-lg hover:scale-105 transition-all text-sm sm:text-base box-border"
              >
                <MessageCircle className="w-5 h-5 fill-white shrink-0" />
                <span className="whitespace-normal text-center">Speak on WhatsApp</span>
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
