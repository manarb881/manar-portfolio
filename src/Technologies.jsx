import React from 'react';
import { 
  RiReactjsLine, 
  RiTailwindCssLine, 

  RiJavaLine, 
 
  RiJavascriptLine, 
  RiBarChartLine 
} from 'react-icons/ri';
import { SiCplusplus, SiMysql,SiPhp } from 'react-icons/si';
import { FaPython } from "react-icons/fa";


const skills = [
  { name: 'React', icon: <RiReactjsLine />, color: '#61DAFB' }, // React cyan blue
  { name: 'Tailwind', icon: <RiTailwindCssLine />, color: '#06B6D4' }, // Tailwind teal
  { name: 'C/C++', icon: <SiCplusplus />, color: '#00599C' }, // C++ dark blue
  { name: 'Java', icon: <RiJavaLine />, color: '#F89820' }, // Java orange
  { name: 'django', icon: <FaPython />, color: '#3776AB' }, // Python blue
  { name: 'JavaScript', icon: <RiJavascriptLine />, color: '#F7DF1E' }, // JavaScript yellow
  { name: 'MySQL', icon: <SiMysql />, color: '#00758F' }, // MySQL teal
  { name: 'Power BI', icon: <RiBarChartLine />, color: '#4ADE80' }, // Chart green
  { name: 'PHP', icon: <SiPhp />, color: '#777BB4' }, // PHP purple
  
];

function Technologies() {
  return (
    <div id='Skills'
      // Capitalized to match Navbar
      className="py-12 px-4  flex flex-col items-center justify-center mb-40"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 font-gilroy">
        Technologies
      </h1>
      <div className="grid grid-cols-3 md:grid-cols-9  gap-16 m-10 ">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center group"
          >
            <div
              style={{ color: skill.color }}
              className="text-5xl hover:scale-150 transition-transform duration-300"
            >
              {skill.icon}
              <span className="absolute bottom-[-2.5rem] scale-0 group-hover:scale-100 transition-transform duration-300 bg-charcoal text-sm font-semibold rounded-md px-2 py-1 w-40">
              {skill.name}
            </span>
            </div>
            </div>
        
        ))}
      </div>
    </div>
  );
}
export default Technologies;