import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Sparkles, MapPin } from 'lucide-react';

export const TrustStats: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const [yearsCount, setYearsCount] = useState(0);
  const [servicesCount, setServicesCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      // Animate Years count up to 15
      const timer1 = setInterval(() => {
        setYearsCount((prev) => (prev < 15 ? prev + 1 : 15));
      }, 70);

      // Animate Services count up to 7
      const timer2 = setInterval(() => {
        setServicesCount((prev) => (prev < 7 ? prev + 1 : 7));
      }, 140);

      return () => {
        clearInterval(timer1);
        clearInterval(timer2);
      };
    }
  }, [isInView]);

  return (
    <div ref={ref} className="w-full bg-[#3A0710]/95 backdrop-blur-md border-y-2 border-[#D4A84F]/40 py-6 sm:py-8 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 items-center text-center divide-y sm:divide-y-0 sm:divide-x divide-[#D4A84F]/30">
          
          {/* Stat 1: 15+ Years Experience */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="pt-4 sm:pt-0 flex flex-col items-center justify-center gap-2 group"
          >
            <div className="p-3 rounded-full bg-[#650D16]/80 border border-[#D4A84F]/50 group-hover:border-[#F2C766] group-hover:scale-110 transition-all duration-300">
              <Award className="w-6 h-6 text-[#F2C766]" />
            </div>
            <div className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F2C766] tracking-tight">
              {yearsCount}+
            </div>
            <div className="text-xs sm:text-sm font-bold text-[#FFF8E8]/90 tracking-wider uppercase">
              Years Experience
            </div>
          </motion.div>

          {/* Stat 2: 7 Specialized Services */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="pt-4 sm:pt-0 flex flex-col items-center justify-center gap-2 group"
          >
            <div className="p-3 rounded-full bg-[#650D16]/80 border border-[#D4A84F]/50 group-hover:border-[#F2C766] group-hover:scale-110 transition-all duration-300">
              <Sparkles className="w-6 h-6 text-[#F2C766]" />
            </div>
            <div className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F2C766] tracking-tight">
              {servicesCount}
            </div>
            <div className="text-xs sm:text-sm font-bold text-[#FFF8E8]/90 tracking-wider uppercase">
              Specialized Services
            </div>
          </motion.div>

          {/* Stat 3: Hyderabad Based */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-4 sm:pt-0 flex flex-col items-center justify-center gap-2 group"
          >
            <div className="p-3 rounded-full bg-[#650D16]/80 border border-[#D4A84F]/50 group-hover:border-[#F2C766] group-hover:scale-110 transition-all duration-300">
              <MapPin className="w-6 h-6 text-[#F2C766]" />
            </div>
            <div className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F2C766] tracking-tight py-1">
              Hyderabad
            </div>
            <div className="text-xs sm:text-sm font-bold text-[#FFF8E8]/90 tracking-wider uppercase">
              Based in Hyderabad
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};
