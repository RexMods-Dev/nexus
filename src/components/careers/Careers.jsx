import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { jobs } from '@/data/jobs';

gsap.registerPlugin(ScrollTrigger);

export default function Careers() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".careers-elem",
        { y: 30, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="careers" className="bg-background py-32 px-6 md:px-12 border-t border-white/5" ref={containerRef}>
      <div className="max-w-4xl mx-auto">
        <div className="careers-elem text-center mb-16">
          <h2 className="font-display font-bold text-5xl md:text-7xl leading-[1.1] text-white uppercase mb-8">
            MAKE SOMETHING <br/>
            <span className="text-bronze">WORTH PLAYING.</span>
          </h2>
          <p className="font-body text-gray-400 text-lg md:text-xl leading-relaxed">
            We're looking for designers, engineers, artists, writers, producers and technical specialists who want to build ambitious interactive worlds.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8 font-display text-xs tracking-widest text-gray-300 uppercase">
            <span className="px-3 py-1 border border-white/10">Remote-Friendly</span>
            <span className="px-3 py-1 border border-white/10">Global Team</span>
            <span className="px-3 py-1 border border-white/10">Creative Culture</span>
          </div>
        </div>

        <div className="careers-elem">
          <Accordion type="single" collapsible className="w-full">
            {jobs.map((job) => (
              <AccordionItem key={job.id} value={`item-${job.id}`} className="border-white/10 border-b">
                <AccordionTrigger className="hover:no-underline hover:bg-white/5 px-4 transition-colors group">
                  <div className="flex flex-col md:flex-row md:items-center text-left gap-2 md:gap-8 w-full">
                    <span className="font-display font-bold text-xl md:text-2xl text-white uppercase group-hover:text-bronze transition-colors flex-1">
                      {job.title}
                    </span>
                    <div className="flex items-center gap-4 font-display text-xs tracking-widest text-gray-400 uppercase">
                      <span>{job.department}</span>
                      <span className="w-1 h-1 bg-white/30 rounded-full"></span>
                      <span>{job.location}</span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 py-6 font-body text-gray-300">
                  <p className="mb-6 leading-relaxed text-base">{job.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="font-display text-sm tracking-widest text-white uppercase mb-4">Responsibilities</h4>
                      <ul className="space-y-2">
                        {job.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex gap-2 text-sm text-gray-400">
                            <span className="text-bronze">-</span> {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-display text-sm tracking-widest text-white uppercase mb-4">Requirements</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="flex gap-2 text-sm text-gray-400">
                            <span className="text-bronze">-</span> {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <a 
                    href="#apply" 
                    className="inline-flex items-center gap-4 group/btn bg-white/10 hover:bg-white text-white hover:text-background px-6 py-3 font-display font-bold text-sm tracking-widest transition-all duration-300 border border-white/20 uppercase"
                  >
                    APPLY FOR THIS ROLE
                    <span className="transition-transform group-hover/btn:translate-x-1">→</span>
                  </a>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
