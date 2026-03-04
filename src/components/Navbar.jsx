import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const navRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(navRef.current, {
        scrollTrigger: {
          trigger: "body",
          start: "top -50",
          end: "top -300",
          scrub: true,
        },
        backgroundColor: "rgba(13, 13, 18, 0.7)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.05)",
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem",
        width: "90%",
        maxWidth: "1100px"
      });
    });
    return () => ctx.revert();
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const links = ['Home', 'About', 'Academics', 'Departments', 'Smart Campus', 'Hospital', 'Contact'];

  return (
    <>
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <nav ref={navRef} className="flex items-center justify-between w-full max-w-7xl px-6 md:px-8 py-4 rounded-[2rem] transition-all duration-300 transform-gpu">
          <div className="text-xl font-bold tracking-tight z-50">KCMC<span className="text-accent">.</span></div>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex gap-8 text-sm font-medium text-white/80">
            {links.map(link => (
              <a key={link} href="#" className="hover:text-white transition-colors relative group">
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>
          
          <div className="hidden lg:block z-50">
            <button className="magnetic-btn bg-white text-primary px-6 py-2.5 rounded-full font-semibold text-sm hover:text-white">
              <span className="hover-bg"></span>
              <span className="content">Apply Now</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={toggleMenu} className="lg:hidden z-50 text-accent p-2 flex items-center justify-center min-h-[44px] min-w-[44px]">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </div>

      {/* Mobile Full Screen Menu */}
      <div className={`fixed inset-0 z-40 bg-primary flex flex-col items-center justify-center transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}>
        <div className="flex flex-col items-center gap-8 w-full px-6">
          {links.map((link, i) => (
            <a 
              key={link} 
              href="#" 
              onClick={() => setIsOpen(false)}
              className="text-2xl font-semibold text-white/90 hover:text-accent transition-colors"
              style={{ transitionDelay: isOpen ? `${i * 50}ms` : '0ms' }}
            >
              {link}
            </a>
          ))}
          <button className="w-full max-w-xs mt-4 bg-accent text-primary px-8 py-4 rounded-full font-bold text-lg">
            Apply Now
          </button>
        </div>
      </div>
    </>
  );
}
