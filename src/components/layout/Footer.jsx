import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-background text-white pt-24 pb-12 px-6 md:px-12 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16 mb-24 relative z-10">
        
        <div className="w-full md:w-1/3">
          <a href="#" className="font-display font-bold text-4xl tracking-widest text-white flex items-center gap-2 mb-8" data-cursor="open">
            <span className="w-6 h-6 bg-bronze block rounded-sm"></span>
            AEON IMMERSION
          </a>
          <p className="font-body text-gray-400 text-sm leading-relaxed max-w-sm">
            Independent game development studio creating immersive worlds, ambitious gameplay systems and unforgettable interactive experiences.
          </p>
        </div>

        <div className="w-full md:w-2/3 flex flex-col sm:flex-row justify-between gap-12 sm:gap-8">
          <div className="flex flex-col gap-4">
            <h4 className="font-display text-xs tracking-widest text-gray-500 uppercase mb-4">Studio</h4>
            {['Games', 'Studio', 'Technology', 'Journal', 'Careers'].map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} className="font-body text-sm text-gray-300 hover:text-white transition-colors" data-cursor="open">
                {link}
              </a>
            ))}
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="font-display text-xs tracking-widest text-gray-500 uppercase mb-4">Community</h4>
            {['Discord', 'YouTube', 'Instagram', 'X', 'LinkedIn'].map(link => (
              <a key={link} href="#" className="font-body text-sm text-gray-300 hover:text-white transition-colors" data-cursor="open">
                {link}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-display text-xs tracking-widest text-gray-500 uppercase mb-4">Contact</h4>
            <a href="mailto:hello@aeonimmersion.com" className="font-body text-sm text-gray-300 hover:text-bronze transition-colors" data-cursor="open">
              hello@aeonimmersion.com
            </a>
            <a href="mailto:press@aeonimmersion.com" className="font-body text-sm text-gray-300 hover:text-bronze transition-colors" data-cursor="open">
              press@aeonimmersion.com
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 relative z-10 pt-8 border-t border-white/10">
        <p className="font-display text-xs tracking-widest text-gray-500 uppercase">
          © 2026 AEON IMMERSION. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-6">
          <a href="#" className="font-display text-[10px] tracking-widest text-gray-500 hover:text-white uppercase transition-colors" data-cursor="open">Privacy</a>
          <a href="#" className="font-display text-[10px] tracking-widest text-gray-500 hover:text-white uppercase transition-colors" data-cursor="open">Terms</a>
          <a href="#" className="font-display text-[10px] tracking-widest text-gray-500 hover:text-white uppercase transition-colors" data-cursor="open">Cookies</a>
        </div>
      </div>

      {/* Tiny bronze line at the very bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-bronze/50"></div>
    </footer>
  );
}
