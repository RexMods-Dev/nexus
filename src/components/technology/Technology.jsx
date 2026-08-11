import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const nodes = [
  { id: 'ai', label: 'AI', x: 20, y: 20, desc: 'Advanced behavioral trees and emergent logic.' },
  { id: 'physics', label: 'PHYSICS', x: 80, y: 15, desc: 'Real-time rigid body and soft body simulation.' },
  { id: 'weather', label: 'WEATHER', x: 50, y: 40, desc: 'Volumetric clouds and dynamic climate shifts.' },
  { id: 'npc', label: 'NPC', x: 15, y: 70, desc: 'Memory-driven non-player character states.' },
  { id: 'economy', label: 'ECONOMY', x: 85, y: 65, desc: 'Systemic supply and demand macro-simulation.' },
  { id: 'world', label: 'WORLD STATE', x: 50, y: 85, desc: 'Persistent global variables affecting narrative.' }
];

const connections = [
  ['ai', 'npc'],
  ['weather', 'physics'],
  ['weather', 'world'],
  ['npc', 'world'],
  ['npc', 'economy'],
  ['world', 'economy'],
  ['ai', 'weather']
];

export default function SystemVisualization() {
  const containerRef = useRef(null);
  const [activeNode, setActiveNode] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".tech-header",
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: "power3.out",
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
    <section id="technology" className="bg-background py-32 px-6 md:px-12 border-t border-white/5" ref={containerRef}>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        
        <div className="lg:w-1/3 tech-header">
          <div className="font-display text-sm tracking-[0.2em] text-bronze uppercase mb-8">
            03 / TECHNOLOGY
          </div>
          <h2 className="font-display font-bold text-5xl md:text-6xl text-white mb-6 uppercase">
            THE AEGIS ENGINE <br/>
            <span className="text-gray-400">OUR PROPRIETARY CORE.</span>
          </h2>
          <p className="font-body text-gray-400 leading-relaxed mb-4">
            Powering our most ambitious worlds is the <strong>A.E.G.I.S.</strong> Engine — our proprietary <strong>A</strong>daptive <strong>E</strong>nvironment &amp; <strong>G</strong>lobal <strong>I</strong>mmersion <strong>S</strong>ystem.
          </p>
          <p className="font-body text-gray-400 leading-relaxed mb-8">
            Designed in-house to seamlessly blend emergent AI, real-time physics, and systemic world simulation without loading screens or compromises.
          </p>
          <div className="flex flex-wrap gap-4 font-display text-xs tracking-widest text-gray-300">
            {['Adaptive Environment', 'Global Immersion', 'Systemic AI', 'Real-time Physics'].map(tag => (
              <span key={tag} className="border border-white/10 px-3 py-1 rounded-sm">{tag}</span>
            ))}
          </div>
        </div>

        <div className="lg:w-2/3 w-full h-[500px] relative border border-white/10 bg-black/20 rounded-sm overflow-hidden tech-header">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          
          {/* Connections */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {connections.map(([a, b], idx) => {
              const nodeA = nodes.find(n => n.id === a);
              const nodeB = nodes.find(n => n.id === b);
              const isActive = activeNode === a || activeNode === b;
              return (
                <line 
                  key={idx}
                  x1={`${nodeA.x}%`} y1={`${nodeA.y}%`}
                  x2={`${nodeB.x}%`} y2={`${nodeB.y}%`}
                  stroke={isActive ? "#B89775" : "rgba(255,255,255,0.1)"}
                  strokeWidth={isActive ? 2 : 1}
                  className="transition-all duration-500"
                />
              );
            })}
          </svg>

          {/* Nodes */}
          {nodes.map((node) => (
            <div 
              key={node.id}
              className="absolute group transform -translate-x-1/2 -translate-y-1/2 cursor-crosshair"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              onMouseEnter={() => setActiveNode(node.id)}
              onMouseLeave={() => setActiveNode(null)}
            >
              <div className={`w-3 h-3 rounded-full transition-all duration-300 ${activeNode === node.id ? 'bg-bronze scale-150 shadow-[0_0_15px_rgba(184,151,117,0.5)]' : 'bg-white'}`}></div>
              <div className="absolute top-4 left-1/2 -translate-x-1/2 font-display text-xs tracking-widest text-white whitespace-nowrap bg-background/80 px-2 py-1 backdrop-blur-sm border border-white/10">
                {node.label}
              </div>
              
              <div className={`absolute top-12 left-1/2 -translate-x-1/2 w-48 bg-background border border-bronze/50 p-3 text-xs font-body text-gray-300 transition-all duration-300 ${activeNode === node.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                {node.desc}
              </div>
            </div>
          ))}

          <div className="absolute bottom-4 left-4 text-[10px] font-display text-gray-500 tracking-widest">
            SIMULATION SUB-ROUTINE // ACTIVE
          </div>
        </div>

      </div>
    </section>
  );
}
