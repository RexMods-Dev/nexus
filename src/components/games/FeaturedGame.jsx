import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Play } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedGame() {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      });

      tl.fromTo(contentRef.current.children,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out" }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-[100svh] min-h-[600px] flex items-center justify-center overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/echoes_of_orion.png" 
          alt="Featured Game" 
          className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-background/50"></div>
        <div className="absolute inset-0 bg-noise opacity-[0.03]"></div>
      </div>

      <div ref={contentRef} className="relative z-10 text-center flex flex-col items-center">
        <div className="text-xs font-display tracking-[0.3em] text-bronze uppercase mb-6">
          OUR LATEST WORLD
        </div>
        
        <h2 className="font-display font-bold text-6xl md:text-8xl lg:text-[10rem] leading-none text-white mb-4 uppercase tracking-tighter mix-blend-overlay">
          ECHOES <br/> OF ORION
        </h2>
        
        <div className="text-sm font-display tracking-widest text-gray-300 uppercase mb-12">
          A SCI-FI ACTION RPG
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-6">
          <Dialog>
            <DialogTrigger asChild>
              <button 
                className="group flex items-center gap-4 bg-white/10 hover:bg-white text-white hover:text-background px-8 py-4 font-display font-bold text-sm tracking-widest backdrop-blur-sm transition-all duration-300 border border-white/20"
                data-cursor="play"
              >
                <Play size={16} className="fill-current" />
                WATCH TRAILER
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[900px] bg-background/95 border-white/10 p-1 backdrop-blur-xl">
              <div className="aspect-video w-full">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                  title="Game Trailer" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </DialogContent>
          </Dialog>

          <a 
            href="#games" 
            className="font-display font-bold text-sm tracking-widest text-white hover:text-bronze transition-colors uppercase"
            data-cursor="explore"
          >
            EXPLORE GAME
          </a>
        </div>
      </div>
    </section>
  );
}
