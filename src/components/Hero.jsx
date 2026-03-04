import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, Activity, Users, Award, Building } from 'lucide-react';

export default function Hero() {
  const container = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".hero-reveal", {
        y: 60,
        opacity: 0,
        duration: 1.4,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.2
      });
      gsap.from(".hero-stat", {
        y: 20,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power2.out",
        delay: 1.4
      });
      // Parallax image
      gsap.to(".hero-bg", {
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        },
        y: 150,
        scale: 1.05
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative min-h-[100dvh] w-full flex flex-col justify-end pt-32 pb-16 md:pb-24 px-6 md:px-16 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-primary">
        <img src="/images/hero.png" alt="Khulna City Medical College" className="hero-bg w-full h-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-transparent to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl w-full mx-auto">
        <h1 className="flex flex-col gap-0 md:gap-2 mb-6 pointer-events-none">
          <span className="hero-reveal font-heading font-bold text-[48px] md:text-7xl lg:text-[5.5rem] tracking-tight text-white leading-tight">
            Excellence meets
          </span>
          <span className="hero-reveal font-drama italic text-[64px] md:text-9xl lg:text-[11rem] text-accent leading-[0.8] pr-0 md:pr-8 block mt-2 md:mt-0">
            Compassion.
          </span>
        </h1>
        
        <p className="hero-reveal max-w-2xl text-base md:text-xl text-white/80 mb-10 leading-relaxed font-light">
          Khulna City Medical College & Hospital — Where world-class medical education transforms lives in the heart of Bangladesh.
        </p>

        <div className="hero-reveal flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-16 md:mb-24">
          <button className="w-full sm:w-auto magnetic-btn bg-accent text-primary px-8 py-4 md:py-5 rounded-full font-bold md:text-lg flex justify-center items-center gap-3 hover:text-white group">
            <span className="hover-bg"></span>
            <span className="content flex items-center gap-2">Apply for MBBS Admission 2025–26 <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></span>
          </button>
          <button className="w-full sm:w-auto magnetic-btn border border-white/20 px-8 py-4 md:py-5 rounded-full font-semibold md:text-lg hover:border-white/50 text-white transition-colors flex justify-center items-center group">
            <span className="content">Explore Smart Campus</span>
          </button>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 border-t border-white/10 pt-8 mt-auto">
          {[
            { label: "Faculty", value: 120, suffix: "+", icon: Users },
            { label: "Students", value: 1000, suffix: "+", icon: Activity },
            { label: "MBBS Graduates", value: 50, suffix: "+", icon: Award },
            { label: "Departments", value: 15, suffix: "+", icon: Building }
          ].map((stat, i) => {
            const numRef = useRef(null);
            
            useEffect(() => {
              let ctx = gsap.context(() => {
                const proxy = { val: 0 };
                gsap.to(proxy, {
                  val: stat.value,
                  duration: 2,
                  ease: "power3.out",
                  delay: 1.4 + (i * 0.1),
                  scrollTrigger: {
                    trigger: container.current,
                    start: "top 80%",
                  },
                  onUpdate: () => {
                    if (numRef.current) {
                      numRef.current.innerText = Math.floor(proxy.val) + stat.suffix;
                    }
                  }
                });
              }, container);
              return () => ctx.revert();
            }, []);

            return (
              <div key={i} className="hero-stat flex flex-col gap-3 group">
                <stat.icon className="text-accent group-hover:-translate-y-1 transition-transform" size={26} />
                <div ref={numRef} className="font-data text-3xl md:text-4xl lg:text-5xl text-white font-medium tracking-tight">0{stat.suffix}</div>
                <div className="text-xs md:text-sm font-semibold tracking-widest text-white/40 uppercase">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
