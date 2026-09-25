'use client';

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedWork from './components/FeaturedWork';
import WhatWeDo from './components/WhatWeDo';
import HowWeWork from './components/HowWeWork';
import ThewebApproach from './components/ThewebApproach';
import AboutTheweb from './components/AboutTheweb';
import Founder from './components/Founder';
import Technology from './components/Technology';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';
import Insights from './components/Insights';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import Modals from './components/Modals';

export default function Home() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [founderModalOpen, setFounderModalOpen] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [selectedInsight, setSelectedInsight] = useState(null);

  const handleOpenContact = () => setContactModalOpen(true);
  const handleCloseContact = () => setContactModalOpen(false);

  const handleOpenFounder = () => setFounderModalOpen(true);
  const handleCloseFounder = () => setFounderModalOpen(false);

  const handleSelectCaseStudy = (study) => setSelectedCaseStudy(study);
  const handleCloseCaseStudy = () => setSelectedCaseStudy(null);

  const handleSelectInsight = (insight) => setSelectedInsight(insight);
  const handleCloseInsight = () => setSelectedInsight(null);

  return (
    <main style={{ minHeight: '100vh', position: 'relative' }}>
      {/* 1. Header with white text logo */}
      <Header onOpenContact={handleOpenContact} />

      {/* 2. Hero with workflow canvas and metrics */}
      <Hero onOpenContact={handleOpenContact} />

      {/* 3. Featured work & Case studies */}
      <FeaturedWork onSelectCaseStudy={handleSelectCaseStudy} />

      {/* 4. What We Do (Digital Products, Websites, Brand & Experience) */}
      <WhatWeDo onOpenContact={handleOpenContact} />

      {/* 5. How We Work (01 to 05 Process) */}
      <HowWeWork onOpenContact={handleOpenContact} />

      {/* 6. Theweb Approach (Core Philosophy & 5 Principles) */}
      <ThewebApproach />

      {/* 7. About Theweb (Origin Story & Milestone Timeline) */}
      <AboutTheweb />

      {/* 8. Founder (Description + Read more CTA) */}
      <Founder
        onOpenFounderModal={handleOpenFounder}
        onOpenContact={handleOpenContact}
      />

      {/* 9. Technology Stack */}
      <Technology />

      {/* 10. Partners */}
      <Partners />

      {/* 11. Testimonials */}
      <Testimonials />

      {/* 12. Insights */}
      <Insights onSelectInsight={handleSelectInsight} />

      {/* 13. CTA: Have something in mind? Let's build it. */}
      <CtaBanner />

      {/* 14. Footer with white text logo and comprehensive links */}
      <Footer onOpenContact={handleOpenContact} />

      {/* Modals for Contact, Founder Narrative, Case Study, and Insights */}
      <Modals
        contactOpen={contactModalOpen}
        onCloseContact={handleCloseContact}
        founderOpen={founderModalOpen}
        onCloseFounder={handleCloseFounder}
        selectedCaseStudy={selectedCaseStudy}
        onCloseCaseStudy={handleCloseCaseStudy}
        selectedInsight={selectedInsight}
        onCloseInsight={handleCloseInsight}
      />
    </main>
  );
}
