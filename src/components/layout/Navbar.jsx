import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function Navbar() {
  const navRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 50 && !isScrolled) {
        setIsScrolled(true);
        gsap.to(navRef.current, {
          backgroundColor: 'rgba(11, 27, 61, 0.85)', // Deep Sapphire with opacity
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(184, 151, 117, 0.2)', // Bronze border
          paddingTop: '1rem',
          paddingBottom: '1rem',
          duration: 0.4,
          ease: 'power2.out'
        });
      } else if (scrollY <= 50 && isScrolled) {
        setIsScrolled(false);
        gsap.to(navRef.current, {
          backgroundColor: 'transparent',
          backdropFilter: 'blur(0px)',
          borderBottom: '1px solid rgba(184, 151, 117, 0)',
          paddingTop: '1.5rem',
          paddingBottom: '1.5rem',
          duration: 0.4,
          ease: 'power2.out'
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  return (
    <nav 
      ref={navRef} 
      className="fixed top-0 left-0 w-full z-40 transition-colors py-6 px-6 md:px-12 flex items-center justify-between"
    >
      <div className="flex-1">
        <a href="#" className="font-display font-bold text-2xl tracking-widest text-white flex items-center gap-2" data-cursor="open">
          <span className="w-4 h-4 bg-bronze block rounded-sm"></span>
          AEON IMMERSION
        </a>
      </div>
      
      <div className="hidden md:flex flex-1 justify-center gap-8">
        {['Games', 'Studio', 'Technology', 'Journal', 'Careers'].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`}
            className="text-sm font-body text-gray-300 hover:text-white transition-colors relative group"
            data-cursor="open"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-bronze transition-all group-hover:w-full"></span>
          </a>
        ))}
      </div>

      <div className="flex-1 flex justify-end">
        <a 
          href="#play" 
          className="text-sm font-display font-bold tracking-widest text-white flex items-center gap-2 group"
          data-cursor="play"
        >
          PLAY WITH US 
          <span className="text-bronze transition-transform group-hover:translate-x-1">→</span>
        </a>
      </div>
    </nav>
  );
}
