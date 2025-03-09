import { Menu } from "lucide-react";
import React, { useState } from "react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false); // Track hamburger menu state
  
    return (
      <>
        <div className="flex flex-row w-[100%] justify-around  mt-[2%]   fixed top-0 p-5   backdrop-blur-md shadow-md z-50 text-white">
         <h1 className="tracking-widest text-4xl"><span className="text-[#66FF00] font-gilroy font-extrabold text-5xl">M</span>anar</h1>
                 {/* Hamburger Menu (small screens only) */}
        <button
          className="md:hidden block"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu className="text-white h-8 w-8" />
        </button>
         <div className="hidden md:flex md:flex-row md:justify-between   w-[40%] font-gilroy font-extrabold">
         <div className="relative group">
            <a
              className="block text-white rounded-md p-2 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#66FF00] group-hover:to-[#004d00] group-hover:bg-opacity-90"
              href="#top"
            >
              About
            </a>
          </div>

          <div className="relative group">
            <a
              className="block text-white rounded-md p-2  transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#66FF00] group-hover:to-[#004d00] group-hover:bg-opacity-90"
              href="#CV"
            >
              CV
            </a>
          </div>
          <div className="relative group">
            <a
              className="block text-white rounded-md p-2 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#66FF00] group-hover:to-[#004d00] group-hover:bg-opacity-90"
              href="#Skills"
            >
              Skills
            </a>
          </div>
          <div className="relative group">
            <a
              className="block text-white rounded-md p-2 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#66FF00] group-hover:to-[#004d00] group-hover:bg-opacity-90"
              href="#Projects"
            >
              Projects
            </a>
          </div>
         
         </div>
         {menuOpen && (
        <div className="absolute top-16 left-[50%] w-[35%] bg-white text-gray-800 p-4 space-y-4 shadow-md z-10">
          <a
            href="#top"
            className="block hover:text-pink-500 transition-all" 
             
            
            onClick={() => {
              
              setMenuOpen(false);
            }}
          >
            About
            
          </a>
          <a
            href="#CV"
            className="block hover:text-pink-500 transition-all 
              "
           
            onClick={() => {
              
              setMenuOpen(false);
            }}
          >
            CV
          </a>
          <a
            href="#Skills"
            className="block hover:text-pink-500 transition-all 
              "
           
            onClick={() => {
              
              setMenuOpen(false);
            }}
          >
            Technologies
          </a>
          <a
            href="#Projects"
            className="block hover:text-pink-500 transition-all 
              "
           
            onClick={() => {
              
              setMenuOpen(false);
            }}
          >
            Projects
          </a>                   
        </div>
      )}         
         
        </div>
      </>
    )
  }
  
  export default Navbar