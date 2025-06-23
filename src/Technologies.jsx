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
import { SiCplusplus, SiMysql, SiPhp, SiPostgresql } from 'react-icons/si';
import { FaPython } from "react-icons/fa";

const skills = [
  { name: 'React', icon: <RiReactjsLine />, color: '#61DAFB' }, // React cyan blue
  { name: 'Tailwind', icon: <RiTailwindCssLine />, color: '#06B6D4' }, // Tailwind teal
  { name: 'C/C++', icon: <SiCplusplus />, color: '#00599C' }, // C++ dark blue
  { name: 'Java', icon: <RiJavaLine />, color: '#F89820' }, // Java orange
  { name: 'django', icon: <FaPython />, color: '#3776AB' }, // Python blue
  { name: 'JavaScript', icon: <RiJavascriptLine />, color: '#F7DF1E' }, // JavaScript yellow
  { name: 'MySQL', icon: <SiMysql />, color: '#00758F' }, // MySQL teal
  { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791' }, // PostgreSQL blue
  { name: 'Power BI', icon: <RiBarChartLine />, color: '#4ADE80' }, // Chart green
  { name: 'PHP', icon: <SiPhp />, color: '#777BB4' }, // PHP purple
];

function Technologies() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    arrows: false,
  };

  return (
<div id='Skills'
  className="relative py-12 px-4 flex flex-col items-center justify-center mb-40">
  {/* Decorative grid overlay */}
  <div
    className="absolute inset-0 pointer-events-none -z-10"
    style={{
      backgroundImage:
        'linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(180deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
      backgroundSize: '20px 20px',
      opacity: 0.3,
    }}
  />
  <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 font-gilroy">
    Technologies
  </h1>
  <div className="w-full max-w-4xl">
    <Slider {...settings}>
      {skills.map((skill, index) => (
        <div key={index} className="flex flex-col items-center group py-8">
          <div
            style={{ color: skill.color }}
            className="text-5xl transition-transform duration-300"
          >
            {skill.icon}
          </div>
          <span className="absolute bottom-6px scale-0 group-hover:scale-100 transition-transform duration-300 bg-transparent text-sm font-semibold rounded-md px-2 py-1 w-20 text-lime-400">
            {skill.name}
          </span>
        </div>
      ))}
    </Slider>
  </div>
</div>
  );
}

export default Technologies;
