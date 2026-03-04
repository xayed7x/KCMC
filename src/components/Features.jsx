import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { MousePointer2, Cpu, Stethoscope, Microscope, Beaker, Terminal } from 'lucide-react';

export default function Features() {
  const container = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".feature-card", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out"
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="py-32 px-6 md:px-16 w-full max-w-7xl mx-auto relative z-10">
      <div className="mb-20">
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Functional Excellence.</h2>
        <p className="text-white/60 text-lg max-w-xl">Every capability is designed as a focused digital instrument to accelerate clinical mastery.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">
        <DiagnosticShuffler />
        <TelemetryTypewriter />
        <CursorProtocolScheduler />
      </div>
    </section>
  );
}

function DiagnosticShuffler() {
  // Uses direct CSS animation bounds for the requested visual overlapping cards.
  const cards = [
    { title: "MBBS Program", icon: <Stethoscope size={20}/>, label: "Internationally Aligned" },
    { title: "Expert Faculty", icon: <Users size={20}/>, label: "120+ Specialists" },
    { title: "Modern Labs", icon: <Microscope size={20}/>, label: "State-of-the-art" }
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % cards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="feature-card bg-[#111118] border border-white/5 rounded-[2rem] p-6 md:p-8 flex flex-col h-[400px] shadow-2xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-[50px] -translate-y-10 translate-x-10 group-hover:bg-accent/10 transition-colors"></div>
      <div className="mb-auto z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
            <Beaker size={20} />
          </div>
          <h3 className="text-2xl font-bold">Academic Excellence</h3>
        </div>
        <p className="text-white/50 text-sm leading-relaxed">MBBS program with internationally aligned curriculum, state-of-the-art labs, and expert faculty.</p>
      </div>
      
      <div className="relative h-48 w-full mt-8 z-10 perspective-1000">
        {cards.map((card, idx) => {
          let pos = (idx - activeIndex + cards.length) % cards.length;
          return (
            <div 
              key={idx}
              className="absolute w-full bg-[#1A1A24] border border-white/5 p-4 rounded-2xl flex items-center justify-between transition-all duration-700 ease-out shadow-lg"
              style={{
                transform: `translateY(${pos * 20}px) scale(${1 - pos * 0.05})`,
                zIndex: cards.length - pos,
                opacity: 1 - pos * 0.3,
                filter: pos > 0 ? `blur(${pos * 2}px)` : 'blur(0)',
              }}
            >
              <div className="flex items-center gap-3">
                <div className="text-white/40">{card.icon}</div>
                <div className="font-medium">{card.title}</div>
              </div>
              <div className="text-[10px] uppercase tracking-wider text-accent font-data">{card.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Just a quick icon patch for DiagnosticShuffler
function Users({size}) { return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> }

function TelemetryTypewriter() {
  const [text, setText] = useState("");
  const [msgIdx, setMsgIdx] = useState(0);
  const msgs = [
    "Student attendance synced...",
    "Exam results published...",
    "Appointment booked: Dr. Rahman...",
    "New notice: Admission open..."
  ];

  useEffect(() => {
    let currentText = "";
    let charIdx = 0;
    
    const typeWriter = setInterval(() => {
      const targetMsg = msgs[msgIdx];
      if (charIdx < targetMsg.length) {
        currentText += targetMsg.charAt(charIdx);
        setText(currentText);
        charIdx++;
      } else {
        clearInterval(typeWriter);
        setTimeout(() => {
          setMsgIdx((prev) => (prev + 1) % msgs.length);
        }, 2000); // pause before next message
      }
    }, 60); // typing speed
    
    return () => clearInterval(typeWriter);
  }, [msgIdx]);

  return (
    <div className="feature-card bg-[#111118] border border-white/5 rounded-[2rem] p-6 md:p-8 flex flex-col h-[400px] shadow-2xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-[50px] -translate-y-10 translate-x-10 group-hover:bg-accent/10 transition-colors"></div>
      <div className="mb-auto z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
            <Cpu size={20} />
          </div>
          <h3 className="text-2xl font-bold">Smart Digital Ecosystem</h3>
        </div>
        <p className="text-white/50 text-sm leading-relaxed">Integrated Smart Campus platform: attendance, results, and appointments — all in one app.</p>
      </div>
      
      <div className="bg-[#0A0A0F] border border-white/10 rounded-xl p-4 mt-8 font-data text-xs h-40 flex flex-col font-medium text-white/70 relative z-10 shadow-inner">
        <div className="flex items-center gap-2 mb-3 pb-3 border-b border-white/5 text-[10px] text-white/40 uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
          Live Feed / System.Log
        </div>
        <div className="flex gap-2">
          <span className="text-accent/50">{">_"}</span>
          <span>{text}<span className="inline-block w-2.5 h-3.5 ml-1 bg-accent animate-pulse"></span></span>
        </div>
      </div>
    </div>
  );
}

function CursorProtocolScheduler() {
  const container = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
      
      // Initial Entry
      tl.set(".cursor-svg", { x: 150, y: 150, opacity: 0 })
        .to(".cursor-svg", { opacity: 1, duration: 0.3 })
        // Move to Wed
        .to(".cursor-svg", { x: 96, y: 48, duration: 1, ease: "power2.inOut" })
        // Click
        .to(".cursor-svg", { scale: 0.8, duration: 0.1 })
        .to(".cell-wed", { backgroundColor: "#C9A84C", color: "#0D0D12", duration: 0.1 }, "<")
        .to(".cursor-svg", { scale: 1, duration: 0.1 })
        // Move to Save
        .to(".cursor-svg", { x: 120, y: 110, duration: 0.8, ease: "power2.inOut", delay: 0.5 })
        // Click save
        .to(".cursor-svg", { scale: 0.8, duration: 0.1 })
        .to(".btn-save", { scale: 0.95, duration: 0.1 }, "<")
        .to(".cursor-svg", { scale: 1, duration: 0.1 })
        .to(".btn-save", { scale: 1, duration: 0.1 }, "<")
        .to(".cursor-svg", { opacity: 0, duration: 0.3, delay: 0.5 })
        // Reset cell
        .set(".cell-wed", { backgroundColor: "transparent", color: "inherit", delay: 0.1 });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className="feature-card bg-[#111118] border border-white/5 rounded-[2rem] p-6 md:p-8 flex flex-col h-[400px] shadow-2xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-[50px] -translate-y-10 translate-x-10 group-hover:bg-accent/10 transition-colors"></div>
      <div className="mb-auto z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
            <Terminal size={20} />
          </div>
          <h3 className="text-2xl font-bold">Clinical Training</h3>
        </div>
        <p className="text-white/50 text-sm leading-relaxed">Real patient exposure across 15+ departments. Hands-on internship at our fully-equipped hospital.</p>
      </div>
      
      <div className="mt-8 relative z-10 select-none">
        <div className="grid grid-cols-7 gap-1.5 text-center font-data text-xs font-semibold text-white/40 mb-2">
          {['S','M','T','W','T','F','S'].map((d,i) => <div key={i}>{d}</div>)}
        </div>
        <div className="grid grid-cols-7 gap-1.5 font-data text-xs relative">
          {[...Array(14)].map((_, i) => (
            <div key={i} className={`h-8 rounded-md border border-white/10 flex items-center justify-center transition-colors ${i===10 ? 'cell-wed' : ''} ${i===9 || i===11 ? 'bg-white/5' : ''}`}>
              {i+10}
            </div>
          ))}
          
          <MousePointer2 className="cursor-svg absolute z-20 text-white drop-shadow-md w-6 h-6" style={{ top: 0, left: 0}} fill="white"/>
        </div>
        <div className="mt-4 flex gap-2">
          {['Anatomy Lab', 'Ward Rounds', 'Clinical Hours'].map(l => (
            <div key={l} className="px-2 py-1 rounded border border-white/10 text-[9px] uppercase tracking-wider text-accent bg-accent/5">{l}</div>
          ))}
        </div>
        <button className="btn-save mt-3 w-full bg-white/5 border border-white/10 py-2 rounded-lg text-xs font-medium text-white/70">
          Book Schedule
        </button>
      </div>
    </div>
  );
}
