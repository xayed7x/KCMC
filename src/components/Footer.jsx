import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-32 pt-24 pb-12 px-6 md:px-16 w-full bg-[#0A0A0F] rounded-t-[4rem] border-t border-white/5 relative overflow-hidden z-20">
      <div className="max-w-7xl mx-auto flex flex-col items-center md:items-start text-center md:text-left md:flex-row gap-16 md:gap-8 justify-between">
        
        <div className="max-w-xs flex flex-col items-center md:items-start">
          <div className="text-3xl font-bold tracking-tight mb-4">KCMC<span className="text-accent">.</span></div>
          <p className="text-white/50 text-sm leading-relaxed mb-8">
            Shaping Tomorrow's Healers. Bangladesh's premier institution shaping compassionate, world-class physicians.
          </p>
          <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 w-fit bg-[#111118]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-xs font-data text-white/80 uppercase tracking-widest">System Operational</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row flex-wrap gap-12 md:gap-24 w-full md:w-auto items-center md:items-start">
          <div className="flex flex-col gap-2 items-center md:items-start w-full md:w-auto">
            <h4 className="font-heading font-bold mb-2">Academics</h4>
            {['MBBS Program', 'Admission 2025', 'Curriculum', 'Faculty Library'].map(l => (
              <a key={l} href="#" className="text-white/50 text-[15px] py-2 hover:text-white transition-colors">{l}</a>
            ))}
          </div>
          <div className="flex flex-col gap-2 items-center md:items-start w-full md:w-auto">
            <h4 className="font-heading font-bold mb-2">Hospital</h4>
            {['Clinical Depts', 'Book Appointment', 'Lab Services', 'Emergency'].map(l => (
              <a key={l} href="#" className="text-white/50 text-[15px] py-2 hover:text-white transition-colors">{l}</a>
            ))}
          </div>
          <div className="flex flex-col gap-2 items-center md:items-start w-full md:w-auto">
            <h4 className="font-heading font-bold mb-2">Contact</h4>
            <div className="flex items-center justify-center md:justify-start gap-3 text-white/50 text-[15px] py-2 w-full">
              <Phone size={18} className="text-accent shrink-0" /> +8801858209392
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3 text-white/50 text-[15px] py-2 w-full">
              <Mail size={18} className="text-accent shrink-0" /> kcme.khulna@gmail.com
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3 text-white/50 text-[15px] py-2 w-full">
              <MapPin size={18} className="text-accent shrink-0" /> Khulna City, Bangladesh
            </div>
          </div>
        </div>

      </div>

      <div className="mt-24 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center max-w-7xl mx-auto text-[11px] sm:text-xs text-white/30 font-data uppercase tracking-wider text-center gap-6">
        <div>© 2025 KCMC. All Rights Reserved.</div>
        <div className="flex flex-wrap justify-center gap-6">
          <a href="#" className="py-2 hover:text-white/60">Privacy Policy</a>
          <a href="#" className="py-2 hover:text-white/60">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
