import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function GameCard({ game, index }) {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  const isEven = index % 2 === 0;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Professional Zoom instead of Y shift for parallax
      gsap.fromTo(imageRef.current, 
        { scale: 1.15 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        }
      );

      // Content Reveal
      gsap.fromTo(contentRef.current,
        { y: 60, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 1.2, ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full py-24 md:py-32 border-b border-white/5 relative">
      <div className={`max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 lg:gap-24 ${isEven ? '' : 'md:flex-row-reverse'}`}>
        
        {/* Image Side */}
        <div className="w-full md:w-1/2 relative h-[50vh] md:h-[70vh] overflow-hidden group rounded-sm">
          <div className="absolute inset-0 z-10 bg-background/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
          <img 
            ref={imageRef}
            src={game.heroImage} 
            alt={game.title} 
            className="w-full h-full object-cover transform-gpu"
          />
        </div>

        {/* Content Side */}
        <div ref={contentRef} className="w-full md:w-1/2 flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-display tracking-[0.2em] text-gray-500 uppercase">0{index + 1} / {game.status}</span>
            <div className="h-px bg-white/20 flex-grow"></div>
          </div>

          <h3 className="font-display font-bold text-5xl lg:text-7xl text-white mb-6 uppercase leading-[0.9]">
            {game.title}
          </h3>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-8 text-xs font-display tracking-widest text-bronze uppercase">
            <span>{game.genre}</span>
            <span className="w-1 h-1 rounded-full bg-white/30"></span>
            <span>{game.platforms}</span>
          </div>

          <p className="font-body text-gray-400 text-lg mb-12 leading-relaxed">
            {game.description}
          </p>

          <a 
            href="#" 
            className="inline-flex items-center gap-4 group/btn w-fit"
            data-cursor="explore"
          >
            <span className="font-display font-bold text-sm tracking-widest text-white uppercase">
              DISCOVER MORE
            </span>
            <div className="w-12 h-px bg-white/30 relative overflow-hidden group-hover/btn:w-24 transition-all duration-500">
              <div className="absolute top-0 left-0 h-full bg-white w-full -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500"></div>
            </div>
            <span className="text-white transition-transform group-hover/btn:translate-x-2">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
