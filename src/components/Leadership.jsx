import React from 'react';

export default function Leadership() {
  const leaders = [
    {
      name: "Dr. Sayed Abu Asfar",
      role: "Chairman",
      image: "/images/chairman.png"
    },
    {
      name: "Prof. Dr. Bidhan Chandra Goswami",
      role: "Principal",
      image: "/images/principal.png"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-16 w-full max-w-7xl mx-auto relative z-10">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Leadership.</h2>
        <p className="text-white/60 text-lg max-w-xl">Guided by visionaries dedicated to advancing medical science in Bangladesh.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {leaders.map((leader, i) => (
          <div key={i} className="group relative rounded-[2rem] overflow-hidden bg-[#111118] border border-white/5 flex flex-col sm:flex-row h-full">
            <div className="w-full h-[250px] sm:h-auto sm:w-2/5 overflow-hidden relative">
              <img 
                src={leader.image} 
                alt={leader.name} 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" 
              />
            </div>
            <div className="p-8 flex flex-col justify-center sm:w-3/5">
              <div className="w-10 h-1 bg-accent/20 mb-6 group-hover:w-full transition-all duration-700"></div>
              <h3 className="text-2xl font-bold font-heading mb-1">{leader.name}</h3>
              <p className="text-accent font-data text-xs uppercase tracking-widest mb-6">{leader.role}</p>
              <p className="text-white/50 text-sm leading-relaxed">
                Driving our mission of excellence, compassion, and innovation in healthcare education.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
