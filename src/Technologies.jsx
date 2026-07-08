import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { 
  RiReactjsLine, 
  RiTailwindCssLine, 
  RiJavaLine, 
  RiJavascriptLine, 
  RiBarChartLine 
} from 'react-icons/ri';
import { SiCplusplus, SiMysql, SiPhp, SiPostgresql, SiScala, SiDocker } from 'react-icons/si';
import { FaPython } from "react-icons/fa";
import { Brain, Database, Server, Cpu, Terminal, Sparkles } from 'lucide-react';

const coreTechs = [
  { name: 'Python', icon: <FaPython />, color: '#3776AB' },
  { name: 'React', icon: <RiReactjsLine />, color: '#61DAFB' },
  { name: 'Java', icon: <RiJavaLine />, color: '#F89820' },
  { name: 'C/C++', icon: <SiCplusplus />, color: '#00599C' },
  { name: 'Scala', icon: <SiScala />, color: '#DC322F' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791' },
  { name: 'Docker', icon: <SiDocker />, color: '#2496ED' },
  { name: 'Power BI', icon: <RiBarChartLine />, color: '#F2C811' },
  { name: 'Tailwind CSS', icon: <RiTailwindCssLine />, color: '#06B6D4' },
  { name: 'JavaScript', icon: <RiJavascriptLine />, color: '#F7DF1E' },
];

const skillCategories = [
  {
    title: 'Languages & Databases',
    icon: <Terminal className="w-6 h-6 text-lime-400" />,
    skills: ['Python', 'Java', 'C/C++', 'Scala', 'SQL', 'PostgreSQL', 'JavaScript', 'PHP'],
  },
  {
    title: 'Data Science & AI',
    icon: <Brain className="w-6 h-6 text-lime-400" />,
    skills: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Reinforcement Learning', 'Time-Series Forecasting', 'Clustering', 'Predictive Modeling'],
  },
  {
    title: 'Data Engineering & Analytics',
    icon: <Database className="w-6 h-6 text-lime-400" />,
    skills: ['ETL Pipelines', 'Data Quality', 'Metadata Management', 'Data Governance', 'Dashboarding', 'Power BI', 'Apache Spark', 'Hadoop'],
  },
  {
    title: 'Web, Full-Stack & Tools',
    icon: <Server className="w-6 h-6 text-lime-400" />,
    skills: ['ReactJS', 'Django', 'Flask', 'REST APIs', 'Git', 'Docker', 'DevOps', 'Tailwind CSS'],
  },
];

function Technologies() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
    arrows: false,
  };

  return (
    <div id="Skills" className="relative py-16 px-6 md:px-12 flex flex-col items-center justify-center mb-16 z-10">
      {/* Decorative grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          backgroundImage:
            'linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(180deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          opacity: 0.2,
        }}
      />
      
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-gilroy flex items-center gap-3">
        Skills & Technologies
      </h1>
      <p className="text-gray-400 text-center max-w-xl mb-12 font-gilroy font-light text-sm md:text-base">
        My technical arsenal spanning programming languages, artificial intelligence, data pipelines, and full-stack development tools.
      </p>

      {/* Ticker Slider */}
      <div className="w-full max-w-5xl mb-16 bg-green-950/20 backdrop-blur-md rounded-2xl py-6 px-4 border border-lime-500/10">
        <Slider {...settings}>
          {coreTechs.map((tech, index) => (
            <div key={index} className="flex flex-col items-center justify-center text-center group outline-none">
              <div
                style={{ color: tech.color }}
                className="text-4xl md:text-5xl transition-transform duration-300 transform group-hover:scale-110 flex justify-center mb-2"
              >
                {tech.icon}
              </div>
              <span className="text-xs text-gray-400 group-hover:text-lime-400 transition-colors font-gilroy font-medium">
                {tech.name}
              </span>
            </div>
          ))}
        </Slider>
      </div>

      {/* Categorized Skills Grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <div 
            key={index} 
            className="p-[1px] bg-gradient-to-r from-lime-500/20 to-emerald-800/20 hover:from-lime-400 hover:to-emerald-600 rounded-2xl transition-all duration-500 shadow-md"
          >
            <div className="bg-black/90 hover:bg-green-950/20 rounded-2xl p-6 h-full transition-colors duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-green-950/80 rounded-lg border border-lime-500/20">
                  {category.icon}
                </div>
                <h2 className="text-xl font-bold text-white font-gilroy">
                  {category.title}
                </h2>
              </div>
              
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-3 py-1.5 text-sm font-medium bg-green-950/40 text-gray-200 border border-lime-500/10 hover:border-lime-400 hover:text-lime-300 transition-all duration-300 rounded-lg cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Technologies;
