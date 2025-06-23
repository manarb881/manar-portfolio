import { FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { FaKaggle, FaStackOverflow } from 'react-icons/fa';
import AnimatedText from './AnimatedText';

function About() {
  return (
    <>
      <div
        className="relative mt-[-10%] md:mt-[5%] mb-[10%] w-full flex flex-col md:flex-row justify-between text-white items-center p-1"
      >
        {/* Decorative grid patches */}

        <div className="font-gilroy w-[85%] md:w-[50%] ml-[10%] flex flex-col">
          <AnimatedText className="" />
          <div className="h-auto">
            <h2 className="font-gilroy font-extrabold text-3xl md:text-5xl mb-5">I'm Manar</h2>
            <p className="font-gilroy font-light text-lg md:text-xl mb-10 w-80 md:w-auto">
              I'm a{' '}
              <span className="bg-gradient-to-r from-lime-400 to-green-400 bg-clip-text text-transparent font-bold">
                Data Science and Artificial Intelligence student
              </span>{' '}
              at the National Polytechnic School of Algiers, deeply passionate about Machine Learning,
              Data Analysis, and Web dev. I'm eager to explore this vast domain, continually learn, and
              improve every day. If you're interested in collaborating, feel free to reach out I'm
              always open to new opportunities and connections!
            </p>
          </div>
          <div className="flex justify-center space-x-4 mb-5 mr-[70%] md:mr-[81%]">
            <a
              href="https://www.linkedin.com/in/manar-bouras-aba26126a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lime-400 hover:text-lime-300 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:manar.bouras@g.enp.edu.dz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lime-400 hover:text-lime-300 transition-colors"
            >
              <FiMail size={24} />
            </a>
            <a
              href="https://www.kaggle.com/your-kaggle-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lime-400 hover:text-lime-300 transition-colors"
            >
              <FaKaggle size={24} />
            </a>
            <a
              href="https://stackoverflow.com/users/your-stackoverflow-id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lime-400 hover:text-lime-300 transition-colors"
            >
              <FaStackOverflow size={24} />
            </a>
          </div>
          <a
            className="block z-10 font-gilroy font-extrabold text-2xl w-[50%] md:w-[30%] mt-10 text-white rounded-md p-2 transition-all duration-300 from-[#66FF00] to-[#004d00] bg-opacity-90 hover:scale-105 !bg-gradient-to-r !ring-4 !ring-[#66FF00] hover:ring-6 focus:outline-none"
            href="#CV"
          >
            DOWNLOAD CV
          </a>
        </div>
        {/* Image with fade-in effect */}
        <img
          className="w-[50%] md:w-[30%] relative z-10"
          src="/Manar_bouras.png"
          alt="Manar Bouras"
        />
      </div>
    </>
  );
}

export default About;