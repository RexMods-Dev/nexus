import React from 'react';
import CustomCursor from './components/layout/CustomCursor';
import Navbar from './components/layout/Navbar';
import Hero from './components/hero/Hero';
import StudioIntro from './components/studio/StudioIntro';
import Statistics from './components/studio/Statistics';
import GameShowcase from './components/games/GameShowcase';
import FeaturedGame from './components/games/FeaturedGame';
import Philosophy from './components/studio/Philosophy';
import Technology from './components/technology/Technology';
import Process from './components/studio/Process';
import Team from './components/studio/Team';
import Careers from './components/careers/Careers';
import FinalCTA from './components/layout/FinalCTA';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-bronze selection:text-white">
      <CustomCursor />
      <Navbar />
      
      <main>
        <Hero />
        <StudioIntro />
        <Statistics />
        <GameShowcase />
        <FeaturedGame />
        <Philosophy />
        <Technology />
        <Process />
        <Team />
        <Careers />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;
