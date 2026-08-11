import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const containerRef = useRef(null);

  const concepts = [
    {
      num: "01",
      title: "MEANINGFUL CHOICES",
      desc: "Every decision should change something. From narrative consequences to emergent gameplay mechanics, choices must echo throughout the experience."
    },
    {
      num: "02",
      title: "SYSTEMS THAT INTERACT",
      desc: "Gameplay mechanics should create unexpected possibilities. We build overlapping simulations that allow players to find creative solutions."
    },
    {
      num: "03",
      title: "WORLDS THAT RESPOND",
      desc: "The environment should feel alive rather than decorative. Our worlds react to player presence, weather systems, and systemic events."
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      });

      tl.fromTo(".phil-heading",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      )
      .fromTo(".phil-item",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" },
        "-=0.5"
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-background py-32 px-6 md:px-12 border-t border-white/5" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <h2 className="phil-heading font-display font-bold text-5xl md:text-7xl lg:text-8xl text-white mb-24 max-w-4xl">
          GAMEPLAY <br/>
          <span className="text-bronze">COMES FIRST.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {concepts.map((concept, i) => (
            <div key={i} className="phil-item group cursor-pointer border-t border-white/10 pt-8 transition-colors hover:border-bronze">
              <div className="font-display font-bold text-7xl text-white/10 group-hover:text-white/20 transition-colors mb-6">
                {concept.num}
              </div>
              <h3 className="font-display font-bold text-2xl text-white mb-4 uppercase tracking-wider">
                {concept.title}
              </h3>
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                <div className="overflow-hidden">
                  <p className="font-body text-gray-400 leading-relaxed pt-2 pb-4">
                    {concept.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
