import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink, GraduationCap } from 'lucide-react';

const experiences = [
  {
    type: 'job',
    role: 'AI & Legacy R&D Engineer',
    company: 'Perrenix',
    period: '2026',
    description: 'Designed a secure COBOL-to-Python migration pipeline using EnterpriseCobolAirlock, featuring deterministic and reversible PII masking, custom recognizers for COBOL/CICS/DB2, and LLM-assisted translation with full preservation of business logic.',
    tags: ['R&D', 'Python', 'LLMs', 'Compilers', 'PII Masking', 'Security'],
    linkType: 'Research section',
    linkHref: '#Research'
  },
  {
    type: 'program',
    role: 'HealthTech Innovation Member',
    company: 'ICT Summit Africa HealthTech Convergence Lab',
    period: '2026',
    description: 'Collaborative lab organized by ICT and the Ministry of Health (Algeria). Focused on bridging healthcare and technology to design digital solutions that optimize and improve the patient journey.',
    tags: ['HealthTech', 'Digital Health', 'Product Strategy', 'UI/UX'],
  },
  {
    type: 'job',
    role: 'Data Science & Analytics Intern',
    company: 'Holcim El-Djazaïr (ex-Lafarge)',
    period: '2026',
    description: 'Developed a Spend Analytics dashboard and supplier decision-support tool using SAP data. Built and optimized an end-to-end data pipeline.',
    tags: ['Python', 'Pandas', 'Plotly', 'Streamlit', 'SAP Data', 'ETL'],
  },
  {
    type: 'job',
    role: 'Data Science Intern',
    company: 'Djezzy',
    period: '2025',
    description: 'Developed Machine Learning models to analyze customer usage and successfully identify high-potential prepaid clients for postpaid migration.',
    tags: ['Machine Learning', 'Python', 'Data Quality', 'Postpaid Migration'],
  },
  {
    type: 'program',
    role: 'DSIP 3 Program Member',
    company: 'Djezzy, Huawei & MajestEYE',
    period: '2025 (2-month)',
    description: 'Collaborative program focused on intelligent segmentation for DjezzyApp users. Built data quality pipelines, data governance frameworks, metadata management systems, and analytical dashboards.',
    tags: ['Preprocessing', 'Clustering', 'Data Governance', 'Metadata Management', 'Dashboarding'],
  },
  {
    type: 'freelance',
    role: 'Freelance Full-Stack Developer',
    company: 'Various Startups & Projects',
    period: '2024 – 2025',
    description: 'Delivered customized software solutions including risk management portals and educational institution systems. Key highlights:\n- APSEC Startup: Improved and maintained a full-stack risk and accident management dashboard.\n- ENP Rebranding Project (ENP-916 Studio): Rebuilt the Ecole Nationale Polytechnique official website for its 100th anniversary.',
    tags: ['WordPress', 'PHP', 'ReactJS', 'Flask', 'REST APIs', 'Full-Stack'],
  },
  {
    type: 'job',
    role: 'Machine Learning Intern',
    company: 'Kabas Startup',
    period: '2025',
    description: 'Developed predictive modeling algorithms for drilling fluids, incorporating Machine Learning, NLP classification on log data, PyTorch, and robust ETL pipelines.',
    tags: ['Machine Learning', 'NLP', 'PyTorch', 'ETL Pipelines', 'Drilling Analytics'],
  },
  {
    type: 'job',
    role: 'Data Analyst & ML Intern',
    company: 'ATM Mobilis',
    period: '2025',
    description: 'Built interactive corporate Power BI dashboards to track performance metrics and developed a customer churn prediction model.',
    tags: ['Power BI', 'Customer Churn', 'Predictive Modeling', 'Dashboards'],
  },

  {
    type: 'job',
    role: 'Work experience internship',
    company: 'Heetch DZ',
    period: '2024',
    description: 'Gained hands-on exposure to industry workflows, agile team collaboration, software testing, and production deployment practices.',
    tags: ['Software Engineering', 'Agile', 'Git', 'API Workflows'],
  }
];

function Experience() {
  return (
    <div id="Experience" className="relative py-20 px-6 md:px-12 flex flex-col items-center justify-center z-10">
      {/* Decorative vertical grid line */}
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
        Experience & Programs
      </h1>
      <p className="text-gray-400 text-center max-w-2xl mb-16 font-gilroy font-light text-sm md:text-base">
        A timeline of my professional experience, engineering internships, and specialized tech accelerators.
      </p>

      {/* Vertical Timeline container */}
      <div className="relative w-full max-w-4xl border-l-2 border-lime-500/20 pl-6 md:pl-10 space-y-12 ml-4 md:mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: Math.min(index * 0.08, 0.4) }}
            className="relative"
          >
            {/* Timeline Node / Circle */}
            <div className="absolute -left-[35px] md:-left-[51px] top-1.5 w-6 h-6 rounded-full bg-black border-2 border-lime-400 flex items-center justify-center shadow-[0_0_10px_rgba(102,255,0,0.4)] z-20">
              <div className="w-2.5 h-2.5 rounded-full bg-lime-400" />
            </div>

            {/* Experience Card */}
            <div className="p-[1px] bg-gradient-to-r from-lime-500/10 to-transparent hover:from-lime-400 hover:to-green-700/20 rounded-xl transition-all duration-300">
              <div className="bg-black/90 hover:bg-green-950/10 rounded-xl p-5 md:p-6 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-white font-gilroy">
                      {exp.role}
                    </h2>
                    <p className="text-lime-400 font-gilroy font-semibold text-sm">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-xs md:text-sm font-gilroy font-light shrink-0">
                    <Calendar className="w-4 h-4 text-lime-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4 font-gilroy font-light whitespace-pre-line">
                  {exp.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {exp.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="px-2.5 py-0.5 text-xs font-semibold bg-green-950/60 text-lime-400/90 border border-lime-500/15 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Optional R&D Crosspoint Link */}
                {exp.linkHref && (
                  <a 
                    href={exp.linkHref}
                    className="inline-flex items-center gap-1 text-xs font-bold text-lime-400 hover:text-lime-300 transition-colors mt-2"
                  >
                    <span>View detailed research notes in {exp.linkType}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
