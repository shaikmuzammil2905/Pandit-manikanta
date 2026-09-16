import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Flame, 
  HeartPulse, 
  Heart, 
  Sparkles, 
  Scale, 
  ShieldAlert, 
  Users, 
  ArrowRight, 
  MessageCircle 
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { ServiceItem } from '../types';
import { ServiceModal } from './ServiceModal';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Flame,
  HeartPulse,
  Heart,
  Ring: Sparkles,
  Scale,
  ShieldAlert,
  Users,
};

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#3A0710] text-[#FFF8E8] relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#650D16]/40 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#210308]/60 rounded-full filter blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#650D16]/80 border border-[#D4A84F]/40 mb-3">
            <Sparkles className="w-4 h-4 text-[#F2C766]" />
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#F2C766] uppercase">
              Our Services
            </span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FFF8E8] mb-4">
            Services We Offer
          </h2>
          <p className="text-base sm:text-lg text-[#FFF8E8]/80 font-medium">
            Specialized solutions for your life's challenges based on 15 years of experience
          </p>
        </div>

        {/* 7 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {servicesData.map((service, idx) => {
            const IconComponent = iconMap[service.iconName] || Sparkles;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative flex flex-col justify-between bg-[#210308]/90 p-6 rounded-2xl border border-[#D4A84F]/30 hover:border-[#F2C766] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#D4A84F]/20"
              >
                <div>
                  {/* Icon Circle */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#650D16] to-[#3A0710] border border-[#D4A84F]/40 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-[#F2C766] transition-all duration-300">
                    <IconComponent className="w-7 h-7 text-[#F2C766]" />
                  </div>

                  {/* Service Title */}
                  <h3 className="font-cinzel font-bold text-xl text-[#F2C766] mb-3 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-[#FFF8E8]/80 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-[#D4A84F]/20 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F2C766] hover:text-white transition-colors focus:outline-none"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href={`https://wa.me/919951597968?text=${encodeURIComponent(`Hello Sri Kanaka Durga Devi Astrology, I need consultation regarding ${service.title}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#25D366] hover:text-green-400 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-[#25D366]" />
                    <span>Contact</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Service Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />

    </section>
  );
};
