function Cv() {
    
  
    return (
<div id="CV" 
      
      className=" flex items-center justify-center py-5 px-4  h-600 mb-[10%]"
    >
      <div className="w-[35%] hover:scale-15 mx-auto  backdrop-blur-md rounded-3xl hover:border hover: border-lime-400  md:p-12 text-center bg-green-900/50 p-8 r shadow-2xl transition-opacity duration-1000">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          My CV
        </h1>

        <a
          href="/CV_Hakhathon1.pdf"
          download
          className="inline-block px-6 py-3 bg-transparent border border-lime-400 text-lime-400 rounded-full hover:bg-lime-400 hover:text-black transition-all duration-300"
        >
          Download CV
        </a>
      </div>
    </div>
    )
  }
  
  export default Cv