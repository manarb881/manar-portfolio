import { FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import AnimatedText from './AnimatedText';


function About() {


  return (
    <>
      <div
        
        className="mt-[15%] md:mt-[10%]  mb-[10%] w-full flex flex-row justify-between text-white  items-center   p-1 border border-green-600"
      >
        <div className="font-gilroy w-[50%] ml-10 flex flex-col border border-red-700 ">
         <AnimatedText  className="ml-[20%] "/>
         <div  className='border border-red-700 '>
           <h2 className='font-gilroy font-extrabold text-3xl md:text-5xl mb-5'>I'm Manar</h2>
          <p className="font-gilroy font-light text-lg md:text-xl mb-10">I’m a Data Science and Artificial Intelligence student at the National Polytechnic School of Algiers, deeply passionate about Machine Learning, Data Analysis, and Web dev. I’m eager to explore this vast domain, continually learn, and improve every day.  If you’re interested in collaborating, feel free to reach out I’m always open to new opportunities and connections!</p>
          </div>
          <div className="flex justify-center md:justify-start space-x-4 mb-5">
            <a
              href="https://www.linkedin.com/in/manar-bouras-aba26126a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lime-400 hover:text-lime-300 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>

            <a
              href="manar.bouras@g.enp.edu.dz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lime-400 hover:text-lime-300 transition-colors"
            >
              <FiMail size={24} />
            </a>
          </div>

          <a
            className="block font-gilroy font-extrabold text-4l w-[90%] md:w-[20%] mt-10 text-white rounded-md p-2 transition-all duration-900 bg-gradient-to-r from-[#66FF00] to-[#004d00] bg-opacity-90 hover:scale-105"
            href="#CV"
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Image with fade-in effect */}
        <img
          className=" opacity-0 md:opacity-100 w-[50%] md:w-[30%]
          "
          src="/Manar_bouras.png"
          alt="Manar Bouras"
        />
      </div>
    </>
  );
}

export default About;