import { useState } from "react";

function Cv() {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = () => {
    setIsLoading(true); // Show spinner
    setTimeout(() => {
      setIsLoading(false); // Hide spinner after a delay
      const link = document.createElement("a");
      link.href = "/CV_Hakhathon1.pdf";
      link.download = "CV_Hakhathon1.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 2000); // Simulating a 2-second download delay
  };

  return (
    <div
      id="CV"
      className="flex items-center justify-center py-5 px-4 h-600 mb-[10%] relative"
    >
      {/* Grid pattern background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: `repeating-linear-gradient(
            0deg,
            rgba(255, 255, 255, 0.05) 0,
            rgba(255, 255, 255, 0.05) 1px,
            transparent 1px,
            transparent 10px
          ), repeating-linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.05) 0,
            rgba(255, 255, 255, 0.05) 1px,
            transparent 1px,
            transparent 10px
          )`,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div className="w-[55%] md:w-[35%] hover:scale-15 mx-auto backdrop-blur-md rounded-3xl hover:border hover:border-lime-400 md:p-12 text-center bg-green-900/50 p-8 shadow-2xl transition-opacity duration-1000">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          My CV
        </h1>
        <p className="text-white mb-6 text-lg font-gilroy">
          Find details about my <span className="font-bold text-lime-400">skills</span>, <span className="font-bold text-lime-400">projects</span>, and <span className="font-bold text-lime-400">education</span> in my CV!
        </p>

        {isLoading ? (
          <div className="flex items-center justify-center">
            {/* Spinner */}
            <div className="w-6 h-6 border-4 border-lime-400 border-t-transparent rounded-full animate-spin"></div>
            <span className="ml-3 text-lime-400">Preparing download...</span>
          </div>
        ) : (
          <button
            onClick={handleDownload}
            className="inline-block px-6 py-3 bg-transparent border border-lime-400 text-lime-400 rounded-full hover:bg-lime-400 hover:text-black transition-all duration-300"
          >
            Download CV
          </button>
        )}
      </div>
    </div>
  );
}

export default Cv;