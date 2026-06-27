import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Awards from '@/components/Awards';
import AthleticsDashboard from '@/components/athletics/AthleticsDashboard';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full flex flex-col relative z-10">
        <Hero />
        <Experience />
        <Education />
        <Skills />
        <Awards />
        <AthleticsDashboard />
      </main>
      <Footer />
    </>
  );
}
