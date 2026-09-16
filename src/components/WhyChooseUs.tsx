import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, UserCheck, MapPin, Lock, Layers, Sparkles, X, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { whyChooseData } from '../data/servicesData';
import { WhyChoosePoint } from '../types';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Award,
  UserCheck,
  MapPin,
  Lock,
  Layers,
};

export const WhyChooseUs: React.FC = () => {
  const [selectedPoint, setSelectedPoint] = useState<WhyChoosePoint | null>(null);

  return (
    <section className="py-16 sm:py-24 bg-[#FFF8E8] text-[#210308] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3A0710]/10 border border-[#3A0710]/30 mb-3">
            <Sparkles className="w-4 h-4 text-[#650D16]" />
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#650D16] uppercase">
              Why Choose Us
            </span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3A0710] mb-3">
            Your Trusted Spiritual Guide
          </h2>
          <p className="text-base sm:text-lg text-[#210308]/80 font-medium">
            Click any pillar to view detailed information & guidance
          </p>
        </div>

        {/* 5 Points Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {whyChooseData.map((pt, idx) => {
            const IconComponent = iconMap[pt.iconName] || Sparkles;
            return (
              <motion.div
                key={pt.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setSelectedPoint(pt)}
                className="bg-white p-6 rounded-2xl border border-[#D4A84F]/40 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between items-center text-center cursor-pointer group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-2xl bg-[#FFF8E8] border-2 border-[#D4A84F] flex items-center justify-center mb-4 group-hover:bg-[#3A0710] group-hover:border-[#F2C766] transition-all duration-300">
                    <IconComponent className="w-7 h-7 text-[#650D16] group-hover:text-[#F2C766] transition-colors duration-300" />
                  </div>
                  <h3 className="font-cinzel font-bold text-base text-[#3A0710] mb-2 leading-snug group-hover:text-[#650D16] transition-colors">
                    {pt.title}
                  </h3>
                  <p className="text-xs text-[#210308]/75 leading-relaxed mb-4">
                    {pt.shortDesc}
                  </p>
                </div>

                <div className="inline-flex items-center gap-1 text-xs font-bold text-[#650D16] group-hover:text-[#3A0710]">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Clean Text-Only Popup Modal without header picture (as requested in image copy 25.png) */}
      <AnimatePresence>
        {selectedPoint && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPoint(null)}
              className="fixed inset-0 bg-[#210308]/85 backdrop-blur-md"
            />

            {/* Modal Window: Clean Text & Content Only */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-lg bg-[#3A0710] border-2 border-[#F2C766] rounded-3xl p-6 sm:p-8 text-[#FFF8E8] shadow-2xl z-10 my-8 overflow-hidden gold-glow"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPoint(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#210308]/80 text-[#F2C766] hover:bg-[#650D16] transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Title Header */}
              <div className="mb-4 pr-8">
                <span className="text-xs font-bold text-[#F2C766] uppercase tracking-widest block mb-1">
                  Why Choose Sri Kanaka Durga Devi Astrology
                </span>
                <h3 className="font-cinzel text-2xl font-extrabold text-[#FFF8E8]">
                  {selectedPoint.title}
                </h3>
              </div>

              {/* Short Summary Highlight */}
              <p className="text-sm font-semibold text-[#F2C766] bg-[#650D16]/60 p-3.5 rounded-xl border-l-4 border-[#F2C766] mb-5">
                "{selectedPoint.shortDesc}"
              </p>

              {/* Full Description Content */}
              <p className="text-sm sm:text-base text-[#FFF8E8]/90 leading-relaxed mb-6 font-normal">
                {selectedPoint.fullDesc}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#D4A84F]/30">
                <a
                  href="https://wa.me/919951597968"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-3 rounded-xl shadow-md text-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp Us</span>
                </a>

                <a
                  href="tel:+919951597968"
                  className="flex-1 flex items-center justify-center gap-2 border border-[#D4A84F] text-[#F2C766] font-bold py-3 rounded-xl hover:bg-[#D4A84F]/10 text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
