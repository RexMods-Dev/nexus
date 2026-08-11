import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stages = [
  { num: "01", title: "CONCEPT", desc: "Establishing the core vision, aesthetic pillars, and fundamental mechanics of the experience." },
  { num: "02", title: "PROTOTYPE", desc: "Proving the fun. Rapid iteration on core gameplay loops before committing to full production." },
  { num: "03", title: "PRE-PRODUCTION", desc: "Building the pipeline, defining scope, and creating the vertical slice that sets the standard." },
  { num: "04", title: "PRODUCTION", desc: "The longest phase. Creating all content, systems, and assets to realize the full scope of the world." },
  { num: "05", title: "ALPHA", desc: "Feature complete. All major mechanics and content are playable from start to finish." },
  { num: "06", title: "POLISH", desc: "Fixing bugs, balancing systems, and refining the experience until it feels seamless." },
  { num: "07", title: "LAUNCH", desc: "Releasing the world to players. But launch is only the beginning of the journey." },
];

export default function Process() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    // Only apply horizontal scroll on desktop
    const matchMedia = gsap.matchMedia();

    matchMedia.add("(min-width: 1024px)", () => {
      const track = trackRef.current;
      
      gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${track.scrollWidth - window.innerWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1
        }
      });
    });

    return () => matchMedia.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-white text-background overflow-hidden">
      <div className="pt-24 px-6 md:px-12 max-w-7xl mx-auto mb-12">
        <h2 className="font-display font-bold text-5xl md:text-7xl leading-none uppercase">
          FROM IDEA <br/>
          TO PLAYABLE WORLD.
        </h2>
      </div>

      {/* Horizontal Track */}
      <div ref={trackRef} className="flex flex-col lg:flex-row px-6 md:px-12 pb-24 lg:pb-32 gap-12 lg:gap-0 lg:w-[350vw] flex-nowrap">
        {stages.map((stage, idx) => (
          <div key={idx} className="flex-shrink-0 w-full lg:w-[50vw] pr-12 lg:pr-24 flex flex-col relative group">
            
            {/* Connecting Line */}
            <div className="absolute top-8 left-0 w-full h-[2px] bg-background/10 hidden lg:block z-0"></div>
            {/* Timeline Dot */}
            <div className="w-4 h-4 bg-background rounded-full relative z-10 mb-8 mt-6 hidden lg:block group-hover:scale-150 transition-transform duration-300"></div>
            
            <div className="font-display font-bold text-6xl text-background/20 mb-4">{stage.num}</div>
            <h3 className="font-display font-bold text-3xl mb-4 uppercase">{stage.title}</h3>
            <p className="font-body text-background/70 leading-relaxed text-lg max-w-md">
              {stage.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
