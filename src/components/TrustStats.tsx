import React from 'react';
import { motion } from 'framer-motion';
import { Award, Sparkles, MapPin } from 'lucide-react';

export const TrustStats: React.FC = () => {
  const stats = [
    {
      icon: Award,
      value: '15+',
      label: 'Years Experience',
    },
    {
      icon: Sparkles,
      value: '7',
      label: 'Specialized Services',
    },
    {
      icon: MapPin,
      value: 'Hyderabad',
      label: 'Based in Hyderabad',
    },
  ];

  return (
    <div className="w-full bg-[#3A0710]/90 backdrop-blur-md border-y border-[#D4A84F]/30 py-6 sm:py-8 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 items-center text-center divide-y sm:divide-y-0 sm:divide-x divide-[#D4A84F]/20">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="pt-4 sm:pt-0 flex flex-col items-center justify-center gap-2 group"
              >
                <div className="p-2.5 rounded-full bg-[#650D16]/60 border border-[#D4A84F]/30 group-hover:border-[#F2C766] group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-6 h-6 text-[#F2C766]" />
                </div>
                <div className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F2C766] tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-[#FFF8E8]/80 tracking-wide uppercase">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
