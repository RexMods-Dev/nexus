import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Statistics() {
  const containerRef = useRef(null);
  
  const stats = [
    { value: "08", label: "Years Creating Worlds" },
    { value: "06", label: "Games & Major Projects" },
    { value: "42", label: "Developers & Creators" },
    { value: "14M+", label: "Players Reached" }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = containerRef.current.querySelectorAll('.stat-item');
      
      gsap.fromTo(items, 
        { y: 50, opacity: 0 },
        {
          y: 0, 
          opacity: 1, 
          duration: 1, 
          stagger: 0.1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-background text-white pb-32 px-6 md:px-12 border-b border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        {stats.map((stat, i) => (
          <div key={i} className="stat-item flex flex-col gap-2 relative group">
            <span className="font-display font-bold text-5xl md:text-6xl text-white group-hover:text-bronze transition-colors duration-500">
              {stat.value}
            </span>
            <span className="font-body text-sm md:text-base text-gray-400 uppercase tracking-wider">
              {stat.label}
            </span>
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-[2px] h-0 bg-bronze group-hover:h-full transition-all duration-500 hidden md:block"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
