import React, { useRef, useEffect } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import gsap from 'gsap';

export default function NoticesTestimonials() {
  const container = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".nt-item", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
      });
    }, container);
    return () => ctx.revert();
  }, []);

  const notices = [
    { date: "Oct 15", title: "MBBS Admission Circular 2025-26", type: "Admission" },
    { date: "Oct 10", title: "Final Prof. Exam Routine Published", type: "Academic" },
    { date: "Sep 28", title: "Inauguration of New Cardiac Center", type: "Hospital" },
  ];

  const testimonials = [
    { name: "Dr. Farhana Akter", img: "/images/testimonial-1.png", quote: "The rigorous clinical training and state-of-the-art labs gave me the confidence to excel globally." },
    { name: "Dr. Rakib Hasan", img: "/images/testimonial-2.png", quote: "KCMC didn't just teach me medicine; they nurtured compassion. The faculty support is unparalleled." }
  ];

  return (
    <section ref={container} className="py-24 px-6 md:px-16 w-full max-w-7xl mx-auto border-t border-white/5 pt-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        
        {/* Notices */}
        <div>
          <h2 className="text-3xl font-heading font-bold mb-10 pb-4 border-b border-white/10">Latest News & Notices</h2>
          <div className="flex flex-col gap-6">
            {notices.map((n, i) => (
              <div key={i} className="nt-item group flex gap-6 items-center p-4 rounded-2xl hover:bg-white/5 transition-colors cursor-pointer">
                <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#1A1A24] border border-white/5 min-w-[70px]">
                  <span className="text-accent font-data text-xs uppercase tracking-widest">{n.date.split(' ')[0]}</span>
                  <span className="font-bold text-xl">{n.date.split(' ')[1]}</span>
                </div>
                <div className="flex-1">
                  <span className="text-xs text-white/40 uppercase tracking-wider mb-1 block">{n.type}</span>
                  <h4 className="text-lg font-medium group-hover:text-accent transition-colors">{n.title}</h4>
                </div>
                <ArrowRight className="text-white/20 group-hover:text-accent group-hover:translate-x-1 transition-all" />
              </div>
            ))}
          </div>
          <button className="nt-item mt-8 text-sm font-semibold text-accent hover:text-white transition-colors flex items-center gap-2">View All Notices <ArrowRight size={16}/></button>
        </div>

        {/* Testimonials */}
        <div>
          <h2 className="text-3xl font-heading font-bold mb-10 pb-4 border-b border-white/10">Student Voices</h2>
          <div className="flex flex-col gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="nt-item flex flex-col sm:flex-row gap-4 sm:gap-6 bg-[#111118] border border-white/5 rounded-3xl p-5 md:p-6">
                <div className="w-20 h-20 shrink-0 rounded-2xl overflow-hidden relative">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-primary/20 flex items-center justify-center"><Play size={20} className="text-white/50" fill="currentColor" /></div>
                </div>
                <div>
                  <p className="font-drama italic text-lg text-white/80 mb-3">"{t.quote}"</p>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-accent uppercase tracking-widest mt-1">Alumni, KCMC</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
