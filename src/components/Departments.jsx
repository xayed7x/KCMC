import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { HeartPulse, Scissors, Baby, Stethoscope, Bone, Brain, Eye, Activity } from 'lucide-react';

export default function Departments() {
  const container = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(".dept-card", 
        { y: 40, opacity: 0 },
        {
          scrollTrigger: {
            trigger: container.current,
            start: "top 75%",
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out"
        }
      );
    }, container);
    return () => ctx.revert();
  }, []);

  const depts = [
    { name: "Medicine", icon: Stethoscope },
    { name: "Surgery", icon: Scissors },
    { name: "Gynecology", icon: Baby },
    { name: "Pediatrics", icon: Activity },
    { name: "Orthopedics", icon: Bone },
    { name: "Psychiatry", icon: Brain },
    { name: "Ophthalmology", icon: Eye },
    { name: "Dermatology", icon: HeartPulse }
  ];

  return (
    <section ref={container} className="py-24 px-6 md:px-16 w-full max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Clinical Departments.</h2>
          <p className="text-white/60 text-lg max-w-xl">15+ specialized departments providing hands-on exposure to our medical students.</p>
        </div>
        <button className="magnetic-btn px-6 py-3 rounded-full border border-white/20 text-sm font-semibold hover:border-white/50 transition-colors w-full md:w-max">
          <span className="content">View All Departments</span>
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {depts.map((dept, i) => (
          <div key={i} className="dept-card group bg-[#15151E] hover:bg-[#1A1A24] border border-white/5 hover:border-accent/30 p-4 md:p-8 rounded-[2rem] transition-all duration-300 flex flex-col items-center justify-center text-center gap-4 cursor-pointer">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white/40 group-hover:text-accent group-hover:scale-110 transition-all duration-300 shadow-inner">
              <dept.icon size={28} strokeWidth={1.5} />
            </div>
            <h3 className="font-semibold">{dept.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
