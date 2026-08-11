import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Only run on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const cursor = cursorRef.current;
    const text = textRef.current;
    
    // Initial setup
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power2.out"
      });
    };

    window.addEventListener('mousemove', moveCursor);

    // Handle hover states
    const handleMouseOver = (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        const cursorType = target.getAttribute('data-cursor');
        text.innerText = cursorType.toUpperCase();
        
        gsap.to(cursor, {
          scale: 4,
          backgroundColor: "rgba(11, 27, 61, 0.9)", // Deep Sapphire
          border: "1px solid rgba(184, 151, 117, 0.5)", // Bronze
          duration: 0.3,
          ease: "expo.out"
        });
        gsap.to(text, {
          opacity: 1,
          scale: 0.25, // Reverse scale to keep text small
          duration: 0.3
        });
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        gsap.to(cursor, {
          scale: 1,
          backgroundColor: "#F0F2F5", // Ice Gray
          border: "none",
          duration: 0.3,
          ease: "expo.out"
        });
        gsap.to(text, {
          opacity: 0,
          duration: 0.2
        });
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <div 
      ref={cursorRef} 
      className="fixed top-0 left-0 w-3 h-3 bg-foreground rounded-full pointer-events-none z-[100] flex items-center justify-center mix-blend-difference hidden md:flex"
      style={{ transform: 'translate(-50%, -50%)' }}
    >
      <span ref={textRef} className="text-white text-[8px] font-display opacity-0 tracking-widest whitespace-nowrap"></span>
    </div>
  );
}
