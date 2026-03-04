import React from 'react';
import { Bell } from 'lucide-react';

export default function Ticker() {
  return (
    <div className="w-full bg-accent border-y border-white/5 py-3 overflow-hidden flex whitespace-nowrap relative z-20">
      <div className="flex gap-12 sm:gap-24 font-data text-xs sm:text-sm font-bold text-primary uppercase tracking-[0.2em] items-center" 
           style={{ animation: 'marquee 80s linear infinite' }}>
        {[...Array(6)].map((_, i) => (
          <React.Fragment key={i}>
            <span className="flex items-center gap-2">
              <Bell size={14} className="animate-pulse" /> 
              Admission open 2025-26
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>
            <span>Orientation Class Schedule Published</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>
            <span>Hospital Outpatient Dept. Now Fully Digital</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>
          </React.Fragment>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
