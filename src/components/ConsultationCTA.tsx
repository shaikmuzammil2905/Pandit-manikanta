import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Sparkles } from 'lucide-react';

export const ConsultationCTA: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-r from-[#650D16] via-[#3A0710] to-[#650D16] text-[#FFF8E8] overflow-hidden border-y-2 border-[#F2C766]">
      
      {/* Brightened Background glow & Diya image overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: `url('/assets/diya-cta.jpg')` }}
      />

      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#F2C766]/30 rounded-full filter blur-3xl animate-pulse-glow pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-8 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF8E8]/10 border border-[#F2C766]/40 mb-3">
              <Sparkles className="w-4 h-4 text-[#F2C766]" />
              <span className="text-xs font-bold text-[#F2C766] uppercase tracking-wider">
                Direct Astrological Assistance
              </span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F2C766] mb-4 drop-shadow-md">
              Looking for Guidance?
            </h2>
            <p className="text-base sm:text-xl text-[#FFF8E8] max-w-2xl font-medium leading-relaxed drop-shadow">
              Share your concern and connect with Sri Kanaka Durga Devi Astrology for compassionate and confidential advice.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 justify-center"
          >
            <a
              href="tel:+919951597968"
              className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#F2C766] to-[#D4A84F] text-[#210308] font-extrabold px-8 py-4 rounded-full shadow-2xl hover:scale-105 transition-all text-base"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now (+91 9951597968)</span>
            </a>

            <a
              href="https://wa.me/919951597968"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold px-8 py-4 rounded-full shadow-2xl hover:scale-105 transition-all text-base"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>WhatsApp Now</span>
            </a>
          </motion.div>

        </div>
      </div>

    </section>
  );
};
