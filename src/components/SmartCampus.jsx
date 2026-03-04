import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { CalendarCheck, FileText, Stethoscope, Laptop, BookOpen, BellRing } from 'lucide-react';

export default function SmartCampus() {
  const container = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 60%",
        }
      });

      tl.from(".sc-header", { y: 30, opacity: 0, duration: 0.8, stagger: 0.2 })
        .from(".sc-image", { scale: 0.9, opacity: 0, rotationY: 15, duration: 1.2, ease: "power3.out" }, "-=0.4")
        .from(".sc-feature", { x: 30, opacity: 0, duration: 0.6, stagger: 0.1 }, "-=0.8");
        
      // Continuous float animation for the image
      gsap.to(".sc-image-inner", {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, container);
    return () => ctx.revert();
  }, []);

  const features = [
    { text: "Digital Attendance & Class Schedule", icon: CalendarCheck },
    { text: "Online Results & Grade Portal", icon: FileText },
    { text: "Hospital Appointment Booking", icon: Stethoscope },
    { text: "Online Admission System", icon: Laptop },
    { text: "Faculty Resource Hub", icon: BookOpen },
    { text: "Real-time Push Notifications", icon: BellRing }
  ];

  return (
    <section ref={container} className="relative py-32 px-6 md:px-16 w-full max-w-7xl mx-auto overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
      
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div className="order-1 perspective-1000 sc-image relative">
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-primary to-transparent z-10"></div>
          <img src="/images/app.png" alt="Smart Campus UI" className="sc-image-inner w-full max-w-[320px] lg:max-w-md mx-auto drop-shadow-2xl rounded-[3rem] border border-white/5 relative z-0" />
        </div>

        <div className="order-2 text-center lg:text-left flex flex-col items-center lg:items-start">
          <div className="sc-header inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-data text-xs uppercase tracking-widest font-bold mb-8">
            Launching 2025
          </div>
          <h2 className="sc-header text-[36px] md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-white leading-tight">
            Introducing <br/><span className="text-accent">Smart KCMC</span>
          </h2>
          <p className="sc-header text-white/60 text-lg md:text-xl mb-12 max-w-md">
            A fully integrated digital ecosystem designed to streamline education, clinical practice, and administration.
          </p>

          <div className="flex flex-col gap-4">
            {features.map((feature, i) => (
              <div key={i} className="sc-feature flex items-center gap-4 bg-[#111118] border border-white/5 p-4 rounded-2xl w-full max-w-md hover:border-accent/30 transition-colors group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 group-hover:text-accent group-hover:bg-accent/10 transition-colors">
                  <feature.icon size={18} />
                </div>
                <span className="font-medium text-white/90">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
