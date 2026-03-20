
import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Features from './components/Features.tsx';
import DashboardPreview from './components/DashboardPreview.tsx';
import WhyUs from './components/WhyUs.tsx';
import Pricing from './components/Pricing.tsx';
import FAQ from './components/FAQ.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-cyan-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <DashboardPreview />
        <WhyUs />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
