import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { MeetAstrologer } from './components/MeetAstrologer';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ConsultationCTA } from './components/ConsultationCTA';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActionButtons } from './components/FloatingActionButtons';
import { Popups } from './components/Popups';

export function App() {
  return (
    <div className="min-h-screen bg-[#210308] text-[#FFF8E8] relative selection:bg-[#D4A84F] selection:text-[#210308]">
      {/* Sticky Navigation Header */}
      <Header />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <MeetAstrologer />
        <Services />
        <WhyChooseUs />
        <ConsultationCTA />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Mobile & Desktop Floating Actions */}
      <FloatingActionButtons />

      {/* Conversion & Exit Popups */}
      <Popups />
    </div>
  );
}

export default App;
