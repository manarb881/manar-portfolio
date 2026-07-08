

function Card({ title, description, challengeLink, tags = [] }) {
  const handleButtonClick = () => {
    if (challengeLink) {
      window.open(challengeLink, "_blank", "noopener,noreferrer");
    } else {
      alert("No link provided for this project!");
    }
  };

  return (
    <div className="p-[1px] bg-gradient-to-r from-[#66FF00]/50 to-[#004d00]/50 hover:from-[#66FF00] hover:to-[#004d00] rounded-xl transition-all duration-500 shadow-lg hover:shadow-[0_0_20px_rgba(102,255,0,0.2)]">
      <div className="bg-black/80 hover:bg-green-950/60 rounded-xl p-5 h-full flex flex-col justify-between transition-colors duration-300">
        <div>
          {/* Title */}
          <h1 className="text-xl md:text-2xl font-bold mb-3 text-lime-400 font-gilroy">
            {title}
          </h1>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag, i) => (
                <span 
                  key={i} 
                  className="px-2 py-0.5 text-xs font-medium bg-green-950/80 text-lime-400 border border-lime-500/30 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Description */}
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 font-gilroy font-light">
            {description}
          </p>
        </div>

        {/* Footer */}
        <div className="flex flex-row justify-start items-center">
          {challengeLink ? (
            <button
              className="font-gilroy font-extrabold text-sm bg-gradient-to-r from-[#66FF00] to-[#004d00] text-white px-5 py-2.5 rounded-lg hover:scale-105 active:scale-95 transition-all duration-300 hover:shadow-[0_0_10px_rgba(102,255,0,0.3)]"
              onClick={handleButtonClick}
            >
              View Code / Demo
            </button>
          ) : (
            <span className="text-xs text-gray-500 italic">Internal / Enterprise Project</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;