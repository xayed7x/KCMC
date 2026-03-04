import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Layers, Zap, Crosshair } from 'lucide-react';

export default function Protocol() {
  const container = useRef(null);
  
  const steps = [
    {
      num: "01",
      title: "Apply Online",
      desc: "Our digital admission portal makes enrollment seamless.",
      icon: Layers
    },
    {
      num: "02",
      title: "Learn & Excel",
      desc: "World-class curriculum with hands-on lab and clinical training.",
      icon: Zap
    },
    {
      num: "03",
      title: "Heal the Nation",
      desc: "Graduate as a certified MBBS physician, ready for impact.",
      icon: Crosshair
    }
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();
      
      mm.add("(min-width: 768px)", () => {
        const cards = gsap.utils.toArray('.protocol-card');
        
        cards.forEach((card, i) => {
          if(i === cards.length - 1) return; // Top card doesn't pin its parent
          
          ScrollTrigger.create({
            trigger: card,
            start: "top 100px",
            endTrigger: container.current,
            end: `bottom bottom`,
            pin: true,
            pinSpacing: false,
          });

          gsap.to(card, {
            scrollTrigger: {
              trigger: cards[i + 1],
              start: "top 80%",
              end: "top 20%",
              scrub: true,
            },
            scale: 0.9,
            opacity: 0.3,
            filter: "blur(10px)"
          });
        });
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="py-24 px-6 md:px-16 w-full max-w-5xl mx-auto relative pb-64">
      <div className="mb-24 text-center">
        <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4">The Protocol.</h2>
        <p className="text-white/60 text-lg">A structured path from aspiration to clinical mastery.</p>
      </div>

      <div className="relative flex flex-col items-center">
        {steps.map((step, i) => (
          <div 
            key={i} 
            className="protocol-card w-full h-[60vh] md:h-[70vh] min-h-[500px] mb-8 lg:mb-24 flex rounded-[3rem] overflow-hidden bg-[#111118] border border-white/10 shadow-2xl relative"
            style={{ zIndex: i }}
          >
            {/* Visual Abstract side */}
            <div className="hidden md:flex w-1/2 bg-[#0A0A0F] border-r border-white/5 relative items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent"></div>
              {i === 0 && <div className="w-64 h-64 border border-accent/20 rounded-full flex items-center justify-center animate-[spin_30s_linear_infinite]"><div className="w-48 h-48 border border-white/10 rounded-full flex items-center justify-center animate-[spin_20s_linear_infinite_reverse]"><div className="w-32 h-32 border-2 border-dashed border-accent/40 rounded-full animate-[spin_10s_linear_infinite]"></div></div></div>}
              {i === 1 && <div className="w-full h-full relative"><div className="absolute top-0 left-0 w-full h-1 bg-accent/50 shadow-[0_0_20px_rgba(201,168,76,0.8)] animate-[scan_3s_linear_infinite]"></div><div className="grid grid-cols-12 gap-2 p-12 opacity-20">{[...Array(144)].map((_,j)=><div key={j} className="w-2 h-2 bg-white rounded-full"></div>)}</div><style>{`@keyframes scan { 0% { top: 0; } 100% { top: 100%; } }`}</style></div>}
              {i === 2 && <svg className="w-full h-32 opacity-50" viewBox="0 0 500 100"><path className="animate-[dash_5s_linear_infinite]" d="M0,50 L150,50 L170,10 L200,90 L220,50 L500,50" fill="none" stroke="#C9A84C" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="1000" strokeDashoffset="1000" /><style>{`@keyframes dash { to { stroke-dashoffset: 0; } }`}</style></svg>}
            </div>
            
            {/* Content side */}
            <div className="w-full md:w-1/2 p-8 md:p-20 flex flex-col justify-center relative">
              <div className="font-data text-accent text-[48px] md:text-8xl font-black mb-8 opacity-20 absolute top-8 right-8 md:top-12 md:right-12">{step.num}</div>
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent mb-8">
                <step.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl md:text-5xl font-bold font-heading mb-6">{step.title}</h3>
              <p className="text-white/60 text-lg md:text-xl leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
