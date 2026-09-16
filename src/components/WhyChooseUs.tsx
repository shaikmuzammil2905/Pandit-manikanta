import React from 'react';
import { motion } from 'framer-motion';
import { Award, UserCheck, MapPin, Lock, Layers, Sparkles } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      icon: Award,
      title: '15 Years Experience',
      desc: 'With 15 years of trusted guidance serving people across Hyderabad.',
    },
    {
      icon: UserCheck,
      title: 'Personal Consultation',
      desc: 'Respectful and focused attention devoted to your unique concerns.',
    },
    {
      icon: MapPin,
      title: 'Hyderabad Based',
      desc: 'Conveniently accessible for individuals and families in and around Hyderabad.',
    },
    {
      icon: Lock,
      title: 'Confidential Conversations',
      desc: 'Your privacy, trust, and sensitive matters are completely safe with us.',
    },
    {
      icon: Layers,
      title: 'Guidance for Different Life Concerns',
      desc: 'Solutions and remedies across love, marriage, health, legal, and family issues.',
    },
  ];

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
            Dedicated to helping individuals find peace, clarity, and remedies
          </p>
        </div>

        {/* 5 Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <motion.div
                key={pt.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-[#D4A84F]/30 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FFF8E8] border border-[#D4A84F] flex items-center justify-center mb-4 group-hover:bg-[#3A0710] transition-colors duration-300">
                  <Icon className="w-6 h-6 text-[#650D16] group-hover:text-[#F2C766] transition-colors duration-300" />
                </div>
                <h3 className="font-cinzel font-bold text-base text-[#3A0710] mb-2 leading-snug">
                  {pt.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#210308]/75 leading-relaxed">
                  {pt.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
