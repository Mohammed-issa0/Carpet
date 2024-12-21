import { motion } from 'framer-motion';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Specifications from './components/Specifications';
import PriceSection from './components/PriceSection';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import CarpetSlider from './components/CarpetSlider';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <CarpetSlider/>
      <Features />
      <Testimonials />
      <Specifications />
      <PriceSection />
      <FAQ />
      <CTA />
    </div>
  );
}

export default App;