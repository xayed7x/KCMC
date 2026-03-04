import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Philosophy() {
  const container = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Parallax bg
      gsap.to(".philosophy-bg", {
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        },
        y: 80,
      });

      // Text reveal
      const lines = gsap.utils.toArray(".philosophy-line");
      lines.forEach((line) => {
        gsap.from(line, {
          scrollTrigger: {
            trigger: line,
            start: "top 85%",
          },
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
        });
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative py-40 md:py-56 px-6 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[#0A0A0F]">
        <img src="/images/texture.png" alt="Microscopy texture" className="philosophy-bg w-full h-[120%] object-cover opacity-30 -top-10 absolute grayscale mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-transparent to-primary opacity-90"></div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        <p className="philosophy-line text-lg md:text-2xl font-light text-white/50 mb-8 max-w-xl">
          Most medical colleges focus on: <br className="hidden md:block"/>
          <span className="text-white/80 font-medium">theory alone.</span>
        </p>
        
        <h2 className="philosophy-line font-drama italic text-[38px] md:text-7xl lg:text-8xl leading-[1.1] md:leading-none text-white max-w-4xl tracking-tight">
          We focus on Producing physicians who <span className="text-accent underline decoration-1 underline-offset-8">heal</span> with knowledge AND heart.
        </h2>
      </div>
    </section>
  );
}
