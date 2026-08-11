import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function StudioIntro() {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          end: "bottom 80%",
          toggleActions: "play none none reverse"
        }
      });

      tl.fromTo(lineRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        { scaleX: 1, duration: 1, ease: "power3.inOut" }
      )
      .fromTo(".intro-label",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.5"
      );

      const headingLines = headingRef.current.querySelectorAll('.reveal-line');
      tl.fromTo(headingLines,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power4.out" },
        "-=0.6"
      )
      .fromTo(textRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.8"
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="studio" ref={containerRef} className="bg-background text-white py-32 md:py-48 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24">
        <div className="md:w-1/4">
          <div ref={lineRef} className="h-px bg-bronze w-full mb-8"></div>
          <div className="intro-label font-display text-sm tracking-[0.2em] text-bronze uppercase">
            01 / THE STUDIO
          </div>
        </div>
        
        <div className="md:w-3/4">
          <h2 ref={headingRef} className="font-display font-bold text-4xl md:text-5xl lg:text-7xl leading-[1.1] mb-12">
            <div className="overflow-hidden pb-2"><div className="reveal-line">WE DON'T JUST</div></div>
            <div className="overflow-hidden pb-2"><div className="reveal-line text-gray-400">MAKE GAMES.</div></div>
            <div className="overflow-hidden pb-2"><div className="reveal-line">WE BUILD EXPERIENCES</div></div>
            <div className="overflow-hidden pb-2"><div className="reveal-line">PEOPLE REMEMBER.</div></div>
          </h2>
          
          <p ref={textRef} className="font-body text-gray-300 text-lg md:text-2xl max-w-2xl leading-relaxed">
            We combine game design, engineering, art, animation, sound and storytelling to create interactive worlds that reward curiosity.
          </p>
        </div>
      </div>
    </section>
  );
}
