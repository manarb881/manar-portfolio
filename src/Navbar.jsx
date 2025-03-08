function Navbar() {
    
  
    return (
      <>
        <div className="flex flex-row w-[100%] justify-around  mt-[2%]   fixed top-0 p-5   backdrop-blur-md shadow-md z-50 text-white">
         <h1 className="tracking-widest text-4xl"><span className="text-[#66FF00] font-gilroy font-extrabold text-5xl">M</span>anar</h1>
         <div className="flex flex-row justify-between   w-[40%] font-gilroy font-extrabold">
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
         
        </div>
      </>
    )
  }
  
  export default Navbar