import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FinalCTA() {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      });

      tl.fromTo(".cta-content",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full py-48 px-6 md:px-12 flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/project_aether.png" 
          alt="Dark Environment" 
          className="w-full h-full object-cover opacity-20 mix-blend-luminosity scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background"></div>
        <div className="absolute inset-0 bg-noise opacity-[0.03]"></div>
      </div>

      <div className="relative z-10 text-center cta-content">
        <h2 className="font-display font-bold text-6xl md:text-8xl lg:text-[9rem] leading-none text-white uppercase mb-8">
          YOUR NEXT <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">ADVENTURE</span> <br/>
          STARTS HERE.
        </h2>
        
        <p className="font-body text-gray-300 text-lg md:text-xl max-w-xl mx-auto mb-12">
          Follow the journey, explore our worlds, or come build them with us.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="#games" 
            className="group flex items-center gap-3 bg-white text-background px-8 py-4 font-display font-bold text-sm tracking-widest hover:bg-bronze transition-colors w-full sm:w-auto justify-center"
            data-cursor="explore"
          >
            EXPLORE OUR GAMES
          </a>
          <a 
            href="#careers" 
            className="group flex items-center gap-3 bg-transparent text-white border border-white/20 hover:border-white px-8 py-4 font-display font-bold text-sm tracking-widest transition-colors w-full sm:w-auto justify-center"
            data-cursor="open"
          >
            JOIN THE STUDIO
          </a>
        </div>
      </div>
    </section>
  );
}
