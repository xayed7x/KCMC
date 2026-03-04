import React from 'react';

export default function OGImage() {
  return (
    <div className="w-[1200px] h-[630px] flex bg-[#0D0D12] overflow-hidden m-0 p-0 font-sans">
      
      {/* LEFT SIDE (60%) */}
      <div className="w-[60%] h-full relative">
        <img 
          src="/images/hero.png" 
          alt="KCMC Building" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Navy blue dramatic overlay + 60% dark */}
        <div className="absolute inset-0 bg-blue-900 mix-blend-multiply opacity-40"></div>
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Subtle gradient to blend into the right side */}
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0D0D12] to-transparent"></div>
      </div>

      {/* RIGHT SIDE (40%) */}
      <div className="w-[40%] h-full relative bg-[#0D0D12] p-12 pr-16 flex flex-col justify-center border-l-4 border-[#C9A84C]/20 shadow-[-20px_0_40px_rgba(0,0,0,0.5)]">
        {/* Subtle noise texture */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay"
          style={{ 
            backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" 
          }}
        ></div>

        <div className="relative z-10 flex flex-col h-full pl-6">
          <div className="mt-8">
            <h1 className="text-white font-bold text-6xl tracking-tight leading-none mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              KCMC<span className="text-[#C9A84C]">.</span>
            </h1>
            
            <div className="w-10 h-1 bg-[#C9A84C] mb-12"></div>
            
            <p className="text-white font-semibold text-[26px] leading-snug tracking-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
              Excellence meets
            </p>
            <p className="text-[#C9A84C] text-[44px] italic leading-tight" style={{ fontFamily: '"Playfair Display", serif' }}>
              Compassion.
            </p>
          </div>

          <p className="text-[#888888] text-[14px] mt-8 max-w-xs leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
            Khulna City Medical College & Hospital
          </p>

          <div className="mt-auto mb-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/10 text-[#C9A84C] text-[11px] font-bold uppercase tracking-widest" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              Smart Campus 2025
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
