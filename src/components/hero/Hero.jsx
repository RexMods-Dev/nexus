import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Hero() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);
  const eyebrowRef = useRef(null);
  const loaderRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Intro Sequence
    tl.to(loaderRef.current, {
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: "power2.inOut",
      onComplete: () => {
        if(loaderRef.current) loaderRef.current.style.display = 'none';
      }
    })
    .fromTo(lineRef.current, 
      { width: "0%" }, 
      { width: "100%", duration: 1.5, ease: "expo.inOut" }, 
      "-=0.5"
    )
    .fromTo(imageRef.current, 
      { scale: 1.1, opacity: 0 }, 
      { scale: 1, opacity: 1, duration: 2.5, ease: "power3.out" }, 
      "-=1"
    )
    .fromTo(eyebrowRef.current, 
      { y: 20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, 
      "-=1.5"
    );

    // Title reveal line by line
    const titleLines = titleRef.current.querySelectorAll('.reveal-text');
    tl.fromTo(titleLines, 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power4.out" },
      "-=1.2"
    )
    .fromTo(descRef.current, 
      { y: 20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=1"
    )
    .fromTo(ctaRef.current, 
      { y: 20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.8"
    );

    // Continuous slow zoom for the background
    gsap.to(imageRef.current, {
      scale: 1.05,
      duration: 20,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-[100svh] overflow-hidden bg-background">
      
      {/* Loading Screen Overlay */}
      <div ref={loaderRef} className="absolute inset-0 z-50 bg-background flex flex-col items-center justify-center">
        <div className="font-display text-white tracking-[0.5em] text-sm mb-4">AEON IMMERSION</div>
        <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden">
          <div ref={lineRef} className="absolute top-0 left-0 h-full bg-bronze w-0"></div>
        </div>
      </div>

      {/* Background Artwork */}
      <div className="absolute inset-0 z-0">
        <img 
          ref={imageRef}
          src="/images/echoes_of_orion.png" 
          alt="Cinematic Hero" 
          className="w-full h-full object-cover opacity-0 scale-110"
        />
        {/* Layered atmospheric effects */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/20 to-transparent"></div>
        <div className="absolute inset-0 bg-noise opacity-[0.04]"></div>
        {/* Subtle scanline texture */}
        <div className="absolute inset-0 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAFElEQVQIW2NkYGD4z8DAwMgAI0AMDA4BGwv8oQAAAABJRU5ErkJggg==')] opacity-20 mix-blend-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <div ref={eyebrowRef} className="opacity-0 flex items-center gap-4 mb-6">
            <span className="text-[10px] md:text-xs font-display tracking-[0.2em] text-bronze uppercase">Independent Game Development Studio</span>
            <div className="h-px bg-bronze/40 w-12 hidden md:block"></div>
          </div>
          
          <h1 ref={titleRef} className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-white mb-8">
            <div className="overflow-hidden pb-2"><div className="reveal-text translate-y-12 opacity-0">WE BUILD</div></div>
            <div className="overflow-hidden pb-2"><div className="reveal-text translate-y-12 opacity-0 text-gray-300">WORLDS</div></div>
            <div className="overflow-hidden pb-2"><div className="reveal-text translate-y-12 opacity-0">WORTH</div></div>
            <div className="overflow-hidden pb-2"><div className="reveal-text translate-y-12 opacity-0 text-gray-400">GETTING LOST IN.</div></div>
          </h1>
          
          <p ref={descRef} className="opacity-0 font-body text-gray-300 text-lg md:text-xl max-w-xl mb-12 leading-relaxed">
            From first concept to final frame, we create games where technology, art and storytelling become one experience.
          </p>
          
          <div ref={ctaRef} className="opacity-0 flex flex-col sm:flex-row gap-6">
            <a href="#games" className="group flex items-center gap-3 bg-white text-background px-8 py-4 font-display font-bold text-sm tracking-widest hover:bg-bronze transition-colors" data-cursor="explore">
              EXPLORE OUR GAMES
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#studio" className="group flex items-center gap-3 px-8 py-4 font-display font-bold text-sm tracking-widest text-white border border-white/20 hover:border-white transition-colors" data-cursor="explore">
              MEET THE STUDIO
            </a>
          </div>
        </div>

        {/* HUD Detail - Bottom Right */}
        <div className="absolute bottom-12 right-12 hidden lg:flex flex-col items-end gap-2 text-[10px] font-body text-gray-500 tracking-widest">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-bronze rounded-full animate-pulse"></span>
            SYSTEM / ONLINE
          </div>
          <div>BUILD 0.8.24</div>
          <div className="mt-4 flex flex-col items-center">
            <span className="text-white mb-2">SCROLL TO EXPLORE</span>
            <span className="text-bronze animate-bounce">↓</span>
          </div>
        </div>
      </div>
    </section>
  );
}
