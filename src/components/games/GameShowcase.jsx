import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { games } from '@/data/games';
import GameCard from './GameCard';

gsap.registerPlugin(ScrollTrigger);

export default function GameShowcase() {
  const headerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="games" className="bg-background pt-32 pb-0">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <div ref={headerRef}>
          <div className="font-display text-sm tracking-[0.2em] text-bronze uppercase mb-8">
            02 / OUR GAMES
          </div>
          <h2 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-white">
            WORLDS <br className="hidden md:block" />
            <span className="text-gray-400">WE'VE BUILT.</span>
          </h2>
        </div>
      </div>

      <div className="flex flex-col w-full">
        {games.map((game, index) => (
          <GameCard key={game.id} game={game} index={index} />
        ))}
      </div>
    </section>
  );
}
