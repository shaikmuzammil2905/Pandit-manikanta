import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Compass } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#FFF8E8] text-[#210308] relative overflow-hidden">
      
      {/* Decorative Top & Bottom Borders */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3A0710] via-[#D4A84F] to-[#3A0710]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: South Indian Temple Visual (lg:col-span-5) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md group">
              {/* Outer Decorative Frame */}
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-[#D4A84F]/40 via-[#650D16]/20 to-[#D4A84F]/40 transform rotate-1 group-hover:rotate-0 transition-transform duration-500" />
              
              <div className="relative rounded-xl overflow-hidden shadow-2xl border-2 border-[#D4A84F]">
                <img
                  src="/assets/temple-about.jpg"
                  alt="South Indian Temple - Sri Kanaka Durga Devi Astrology"
                  className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#210308]/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <span className="font-cinzel text-sm sm:text-base font-semibold text-[#F2C766] tracking-wide">
                    Spiritual Haven & Devotional Legacy
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: About Content (lg:col-span-7) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-3">
              <Compass className="w-5 h-5 text-[#650D16]" />
              <span className="text-xs sm:text-sm font-bold tracking-widest text-[#650D16] uppercase">
                About Us
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#3A0710] mb-6 leading-tight">
              Guidance for Life's Difficult Moments
            </h2>

            {/* Paragraphs */}
            <p className="text-base sm:text-lg text-[#210308]/85 mb-4 leading-relaxed font-normal">
              Sri Kanaka Durga Devi Astrology is dedicated to helping people who are facing problems in their life. With <strong>15 years of experience</strong>, we provide spiritual and astrological guidance to bring peace, clarity, and positive direction.
            </p>

            <p className="text-base sm:text-lg text-[#210308]/85 mb-6 leading-relaxed font-normal">
              Whether it's about relationships, health, marriage, career or any other concern, we are here to support you with dedicated and sincere guidance based on traditional astrological principles.
            </p>

            {/* Vision Highlight */}
            <div className="w-full bg-[#3A0710] text-[#FFF8E8] p-5 sm:p-6 rounded-2xl border-l-4 border-[#D4A84F] mb-8 shadow-md">
              <span className="block text-xs uppercase tracking-widest text-[#F2C766] mb-1 font-semibold">
                Our Core Vision
              </span>
              <p className="font-cinzel font-bold text-lg sm:text-xl text-[#F2C766] italic">
                "To Help Who Are In Problems"
              </p>
            </div>

            {/* Know More CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 bg-[#3A0710] hover:bg-[#650D16] text-[#FFF8E8] font-bold px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-base group"
            >
              <span>Know More & Connect</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-[#F2C766]" />
            </a>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
