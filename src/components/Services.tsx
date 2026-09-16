import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, MessageCircle } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { ServiceItem } from '../types';
import { ServiceModal } from './ServiceModal';
import { Link } from 'react-router-dom';

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Row 1: Vasikaranam, Health Problems, Love Problems, Marriage Problems
  const row1Services = servicesData.slice(0, 4);

  // Row 2: Court Problems, Black Magic Removal, Wife and Husband Problems
  const row2Services = servicesData.slice(4, 7);

  const renderCard = (service: ServiceItem, idx: number) => (
    <motion.div
      key={service.id}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      className="group relative flex flex-col justify-between bg-[#210308]/90 rounded-2xl border border-[#D4A84F]/40 hover:border-[#F2C766] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#D4A84F]/20 overflow-hidden"
    >
      <div>
        {/* Exact Thumbnail Image from image copy 16 to 23 */}
        <div className="relative h-44 sm:h-48 w-full overflow-hidden border-b border-[#D4A84F]/30 bg-[#210308]">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#210308] via-transparent to-transparent opacity-80" />
          
          <div className="absolute top-3 left-3 bg-[#3A0710]/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#D4A84F]/40 text-[10px] font-bold text-[#F2C766] uppercase">
            Specialized Service
          </div>
        </div>

        <div className="p-5">
          <h3 className="font-cinzel font-bold text-lg text-[#F2C766] mb-2 group-hover:text-white transition-colors">
            {service.title}
          </h3>

          <p className="text-xs text-[#FFF8E8]/80 leading-relaxed mb-4">
            {service.shortDesc}
          </p>
        </div>
      </div>

      {/* Card Actions */}
      <div className="px-5 pb-5 pt-2 flex items-center justify-between gap-2 border-t border-[#D4A84F]/10">
        <Link
          to={`/services/${service.id}`}
          className="inline-flex items-center gap-1 text-xs font-bold text-[#F2C766] hover:text-white transition-colors"
        >
          <span>Learn More</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>

        <button
          onClick={() => setSelectedService(service)}
          className="inline-flex items-center gap-1 text-xs font-semibold text-[#25D366] hover:text-green-400 transition-colors focus:outline-none"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-[#25D366]" />
          <span>Quick Detail</span>
        </button>
      </div>
    </motion.div>
  );

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

        {/* Row 1 (4 Services: Vasikaranam, Health, Love, Marriage) */}
        <div className="mb-8">
          <div className="text-xs font-bold text-[#D4A84F] uppercase tracking-widest mb-4">
            Primary Guidance Categories
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {row1Services.map((svc, idx) => renderCard(svc, idx))}
          </div>
        </div>

        {/* Row 2 (3 Services: Court, Black Magic, Wife & Husband) */}
        <div>
          <div className="text-xs font-bold text-[#D4A84F] uppercase tracking-widest mb-4">
            Specialized Life Concern Solutions
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {row2Services.map((svc, idx) => renderCard(svc, idx + 4))}
          </div>
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
