import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { team } from '@/data/team';

gsap.registerPlugin(ScrollTrigger);

export default function Team() {
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

      tl.fromTo(".team-header",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      )
      .fromTo(".team-member",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" },
        "-=0.5"
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-background text-white py-32 px-6 md:px-12 border-t border-white/5" ref={containerRef}>
      <div className="max-w-7xl mx-auto mb-24 team-header">
        <h2 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-none uppercase mb-8">
          THE PEOPLE <br/>
          <span className="text-gray-400">BEHIND THE WORLDS.</span>
        </h2>
        <p className="font-body text-gray-400 leading-relaxed text-lg md:text-xl max-w-2xl">
          Great games are built by teams who care deeply about every frame, mechanic and moment.
        </p>
      </div>

      <div className="max-w-7xl mx-auto overflow-x-auto pb-12 no-scrollbar">
        <div className="flex gap-6 md:gap-8 w-max">
          {team.map((member) => (
            <div key={member.id} className="team-member w-72 md:w-96 group relative overflow-hidden bg-white/5 aspect-[3/4] cursor-pointer">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover opacity-50 mix-blend-luminosity transition-all duration-700 group-hover:opacity-100 group-hover:mix-blend-normal group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <div className="text-[10px] font-display tracking-widest text-bronze uppercase mb-2">
                  {member.department}
                </div>
                <h3 className="font-display font-bold text-2xl text-white uppercase mb-1">
                  {member.name}
                </h3>
                <div className="text-sm font-display tracking-widest text-gray-300 uppercase mb-4">
                  {member.role}
                </div>
                <p className="font-body text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
