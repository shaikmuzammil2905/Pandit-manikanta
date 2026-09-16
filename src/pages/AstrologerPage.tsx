import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Award, Sparkles, MapPin, ShieldCheck, Phone, MessageCircle, Clock, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FloatingActionButtons } from '../components/FloatingActionButtons';

export const AstrologerPage: React.FC = () => {
  const [yearsCount, setYearsCount] = useState(0);
  const [servicesCount, setServicesCount] = useState(0);
  const [confidentialCount, setConfidentialCount] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Animated counting logic
    const timer1 = setInterval(() => {
      setYearsCount((prev) => (prev < 15 ? prev + 1 : 15));
    }, 80);

    const timer2 = setInterval(() => {
      setServicesCount((prev) => (prev < 7 ? prev + 1 : 7));
    }, 150);

    const timer3 = setInterval(() => {
      setConfidentialCount((prev) => (prev < 100 ? prev + 4 : 100));
    }, 30);

    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
      clearInterval(timer3);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#210308] text-[#FFF8E8] relative">
      <Header />

      <main className="pt-24 sm:pt-28 pb-16">
        
        {/* Back Link */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#F2C766] hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Main Page</span>
          </Link>
        </div>

        {/* Grand Hero Section for Pandit */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left: Pandit Grand Portrait (lg:col-span-5) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="relative w-full max-w-sm sm:max-w-md">
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#F2C766]/30 via-[#D4A84F]/30 to-[#650D16]/50 rounded-3xl filter blur-2xl animate-pulse-glow" />
                
                <div className="relative rounded-2xl p-1.5 bg-gradient-to-b from-[#F2C766] via-[#D4A84F] to-[#3A0710] shadow-2xl gold-glow">
                  <div className="relative rounded-xl overflow-hidden bg-[#210308] border border-[#D4A84F]/40">
                    <img
                      src="/assets/pandit-grand.jpg"
                      alt="Astrologer Manikanta"
                      className="w-full h-[450px] sm:h-[500px] object-cover object-top hover:scale-103 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#210308] via-transparent to-transparent opacity-80" />
                    
                    <div className="absolute bottom-4 left-4 right-4 text-center">
                      <span className="font-cinzel text-xl font-bold text-[#F2C766] block">
                        Astrologer Manikanta
                      </span>
                      <span className="text-xs text-[#FFF8E8]/90 font-semibold">
                        Sri Kanaka Durga Devi Astrology • Hyderabad
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Detailed Biography & Purpose (lg:col-span-7) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-7 flex flex-col items-start"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#650D16]/90 border border-[#F2C766] mb-4">
                <Sparkles className="w-4 h-4 text-[#F2C766]" />
                <span className="text-xs font-bold text-[#F2C766] uppercase tracking-wider">
                  Official Profile
                </span>
              </div>

              <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F2C766] mb-4 leading-tight">
                Astrologer Manikanta
              </h1>

              <h2 className="text-lg sm:text-xl font-cinzel text-[#FFF8E8]/90 mb-6 font-semibold">
                Sri Kanaka Durga Devi Astrology — 15 Years of Experienced Guidance
              </h2>

              <p className="text-base sm:text-lg text-[#FFF8E8]/85 mb-4 leading-relaxed">
                With <strong>15 years of continuous experience</strong> in Hyderabad, Astrologer Manikanta provides devoted, compassionate, and traditional astrological consultations for individuals and families seeking clarity through difficult moments in life.
              </p>

              <p className="text-base sm:text-lg text-[#FFF8E8]/85 mb-8 leading-relaxed">
                Every concern — whether regarding vasikaranam, health worries, love & marriage friction, court stress, or negative energy removal — is examined with deep horoscope analysis and individualized remedies.
              </p>

              {/* Vision Banner */}
              <div className="w-full card-dark-glass p-6 rounded-2xl border border-[#D4A84F] mb-8 shadow-xl">
                <span className="text-xs text-[#D4A84F] uppercase font-bold tracking-widest block mb-1">
                  Guiding Philosophy
                </span>
                <p className="font-cinzel font-bold text-2xl text-[#F2C766] italic">
                  "To Help Who Are In Problems"
                </p>
              </div>

              {/* Direct Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <a
                  href="https://wa.me/919951597968"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-all text-base"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>WhatsApp (+91 9951597968)</span>
                </a>

                <a
                  href="tel:+919951597968"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 border-2 border-[#D4A84F] text-[#F2C766] hover:bg-[#D4A84F]/10 font-extrabold px-8 py-4 rounded-full transition-all text-base"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Directly</span>
                </a>
              </div>

            </motion.div>

          </div>
        </div>

        {/* Animated Counter Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-[#3A0710] border-2 border-[#D4A84F] rounded-3xl p-8 sm:p-12 shadow-2xl gold-glow">
            <h3 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-[#F2C766] text-center mb-8">
              Experience & Dedicated Credentials
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              
              {/* Stat 1 */}
              <div className="p-4 rounded-2xl bg-[#210308]/80 border border-[#D4A84F]/30 flex flex-col items-center">
                <Clock className="w-8 h-8 text-[#F2C766] mb-2" />
                <div className="font-cinzel text-4xl sm:text-5xl font-extrabold text-[#F2C766] mb-1">
                  {yearsCount}+
                </div>
                <div className="text-xs text-[#FFF8E8]/80 font-bold uppercase tracking-wider">
                  Years Experience
                </div>
              </div>

              {/* Stat 2 */}
              <div className="p-4 rounded-2xl bg-[#210308]/80 border border-[#D4A84F]/30 flex flex-col items-center">
                <Award className="w-8 h-8 text-[#F2C766] mb-2" />
                <div className="font-cinzel text-4xl sm:text-5xl font-extrabold text-[#F2C766] mb-1">
                  {servicesCount}
                </div>
                <div className="text-xs text-[#FFF8E8]/80 font-bold uppercase tracking-wider">
                  Specialized Services
                </div>
              </div>

              {/* Stat 3 */}
              <div className="p-4 rounded-2xl bg-[#210308]/80 border border-[#D4A84F]/30 flex flex-col items-center">
                <ShieldCheck className="w-8 h-8 text-[#F2C766] mb-2" />
                <div className="font-cinzel text-4xl sm:text-5xl font-extrabold text-[#F2C766] mb-1">
                  {confidentialCount}%
                </div>
                <div className="text-xs text-[#FFF8E8]/80 font-bold uppercase tracking-wider">
                  Confidential Guidance
                </div>
              </div>

              {/* Stat 4 */}
              <div className="p-4 rounded-2xl bg-[#210308]/80 border border-[#D4A84F]/30 flex flex-col items-center">
                <MapPin className="w-8 h-8 text-[#F2C766] mb-2" />
                <div className="font-cinzel text-2xl sm:text-3xl font-extrabold text-[#F2C766] mb-1 py-2">
                  Hyderabad
                </div>
                <div className="text-xs text-[#FFF8E8]/80 font-bold uppercase tracking-wider">
                  Based Location
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Experience Details List */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#3A0710]/70 p-6 sm:p-8 rounded-3xl border border-[#D4A84F]/40 space-y-4">
            <div className="flex items-center gap-3 text-[#F2C766] font-cinzel text-xl font-bold">
              <HeartHandshake className="w-6 h-6 text-[#F2C766]" />
              <span>Consultation Philosophy & Principles</span>
            </div>
            <p className="text-sm sm:text-base text-[#FFF8E8]/90 leading-relaxed">
              Astrologer Manikanta approaches every visitor's concerns with strict confidentiality, traditional reverence, and individual devotion. Consultations are structured to identify root planetary factors and provide spiritual remedies focused on peace and mental resilience.
            </p>
          </div>
        </div>

      </main>

      <Footer />
      <FloatingActionButtons />
    </div>
  );
};
