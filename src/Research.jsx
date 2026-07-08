import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Cpu, Brain, Network, Award, ShieldAlert } from 'lucide-react';

const researchWorks = [
  {
    title: "Secure COBOL-to-Python LLM Migration Pipeline",
    institution: "Perrenix",
    role: "AI & Legacy R&D Engineer",
    period: "2026",
    focus: "LLMs, Compilers, Information Security",
    icon: <Cpu className="w-6 h-6 text-lime-400" />,
    description: "Designed and engineered an automated, secure pipeline to convert legacy COBOL systems to modern Python. Conducted R&D into LLM translation consistency and code validation systems.",
    bullets: [
      "Built custom recognizers, lexers, and parsers for legacy COBOL, CICS, and DB2 dialects to map structural schemas.",
      "Developed a deterministic and mathematically reversible PII masking module (EnterpriseCobolAirlock) to process sensitive financial data securely before sending to language models.",
      "Researched prompt architectures and code representation layers for LLM-assisted translation, ensuring full preservation of business logic and system-wide state invariants."
    ]
  },
  {
    title: "Medical Image Registration & CBIR",
    institution: "Center of Advanced Technologies (CDTA)",
    role: "Research Intern",
    period: "2026",
    focus: "Computer Vision, Deep Learning, Medical AI",
    icon: <Brain className="w-6 h-6 text-lime-400" />,
    description: "Conducted AI research on clinical medical images, focusing on matching and alignment algorithms to facilitate clinical diagnostic systems.",
    bullets: [
      "Conducted an extensive academic literature review covering CNN and Transformer-based structures in multi-modal medical image registration.",
      "Developed and implemented deep learning models to address 3D medical image registration challenges, achieving high voxel overlap and spatial alignment accuracy.",
      "Researched and built similarity representation algorithms for Content-Based Image Retrieval (CBIR), allowing rapid query of similar clinical cases from historical image archives."
    ]
  },
  {
    title: "Neuro-Symbolic AI for Supply Chain Shortage Management",
    institution: "Academic Research Initiative",
    role: "Lead Researcher",
    period: "2025",
    focus: "Neuro-Symbolic AI, Time-Series, Optimization",
    icon: <Network className="w-6 h-6 text-lime-400" />,
    description: "Researched a hybrid AI solution combining deep neural modeling with symbolic systems to resolve discrete supply optimization tasks under uncertain parameters.",
    bullets: [
      "Integrated deep time-series forecasting networks (evaluating future demand variance) with symbolic optimization frameworks.",
      "Created a robust constraint model representing inventory constraints, production boundaries, and storage limits.",
      "Demonstrated that combining gradient-based forecasting with symbolic constraint reasoning computes significantly more robust reorder points compared to pure statistical heuristics."
    ]
  }
];

function Research() {
  return (
    <div id="Research" className="relative py-20 px-6 md:px-12 flex flex-col items-center justify-center z-10">
      {/* Grid background matching theme */}
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          backgroundImage:
            'linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(180deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          opacity: 0.15,
        }}
      />

      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-gilroy flex items-center gap-3">
        Research & R&D Work
      </h1>
      <p className="text-gray-400 text-center max-w-2xl mb-16 font-gilroy font-light text-sm md:text-base">
        Highlighting my research, clinical internships, and R&D engineering work. These initiatives bridge the gap between theoretical AI models and deterministic software guarantees, aimed toward a future PhD.
      </p>

      <div className="w-full max-w-5xl flex flex-col gap-12">
        {researchWorks.map((work, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="p-[1px] bg-gradient-to-r from-lime-500/10 to-transparent hover:from-lime-400 hover:to-green-600/30 rounded-2xl transition-all duration-500 shadow-xl"
          >
            <div className="bg-black/90 hover:bg-green-950/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 transition-colors duration-300">
              
              {/* Left Column - Icon & Metadata */}
              <div className="flex flex-row md:flex-col items-start gap-4 md:w-1/4 shrink-0 border-b md:border-b-0 md:border-r border-lime-500/10 pb-4 md:pb-0 md:pr-6">
                <div className="p-3.5 bg-green-950/60 rounded-xl border border-lime-500/20 shadow-[0_0_15px_rgba(102,255,0,0.1)]">
                  {work.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-gilroy mt-2">
                    {work.institution}
                  </h3>
                  <p className="text-lime-400 font-gilroy font-semibold text-sm">
                    {work.role}
                  </p>
                  <span className="inline-block mt-2 px-2 py-0.5 text-xs font-semibold bg-green-950 text-lime-400 rounded-md border border-lime-500/25">
                    {work.period}
                  </span>
                </div>
              </div>

              {/* Right Column - Project description & detailed bullets */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                    <h2 className="text-2xl font-bold text-white font-gilroy leading-tight">
                      {work.title}
                    </h2>
                  </div>
                  
                  {/* Focus Field Badge */}
                  <div className="mb-4 text-xs font-gilroy font-semibold tracking-wider uppercase text-lime-400/80">
                    <span className="text-gray-400 lowercase italic">focus:</span> {work.focus}
                  </div>

                  <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 font-gilroy font-light">
                    {work.description}
                  </p>

                  <h4 className="text-sm font-semibold text-white font-gilroy mb-3 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-lime-400" /> Key Research Contributions:
                  </h4>
                  <ul className="list-none space-y-2.5 pl-1">
                    {work.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="text-sm text-gray-400 font-gilroy font-light flex items-start gap-2.5">
                        <span className="text-lime-400 mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-lime-400" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Research;
