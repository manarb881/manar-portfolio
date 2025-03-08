import React from 'react';
import { FiArrowUp, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-green-950 py-6 text-center text-white">
      <div className="flex flex-col items-center justify-center space-y-4">
        {/* Back to Top Section */}
        <a href="#top" className="flex flex-col items-center hover:text-lime-400 transition duration-300">
          <FiArrowUp className="text-2xl" />
          <span className="text-sm font-semibold">Back to Top</span>
        </a>

        {/* Social Media Icons */}
        <div className="flex space-x-4">

          <a href="https://www.linkedin.com/in/manar-bouras-aba26126a/" target="_blank" rel="noopener noreferrer" className="hover:text-lime-400 transition duration-300">
            <FiLinkedin className="text-xl" />
          </a>

          <a href="manar.bouras@g.enp.edu.dz" className="hover:text-lime-400 transition duration-300">
            <FiMail className="text-xl" />
          </a>
        </div>

        {/* Copyright Notice */}
        <p className="text-xs">&copy; {new Date().getFullYear()} Manar BOURAS </p>
      </div>
    </footer>
  );
};

export default Footer;