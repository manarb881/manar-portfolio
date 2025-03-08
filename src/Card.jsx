import React from "react";

function Card({ title, description,  challengeLink }) {
  const handleButtonClick = () => {
    if (challengeLink) {
      window.location.href = challengeLink; // Redirects to the challengeLink
    } else {
      alert("No link provided for this challenge!");
    }
  };

  return (
    <div  className="p-[1px] bg-gradient-to-r from-[#66FF00] to-[#004d00] bg-opacity-90 rounded-lg">
      <div className="bg-green-950 rounded-lg p-4 ">
        {/* Title */}
        <h1 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-[#66FF00]  bg-opacity-90">
          {title || "Challenge number 1"}
        </h1>

        {/* Description */}
        <p className="text-gray-300 mb-4">
          {description ||
            "Developed an intelligent employee training simulator using Supervised Learning (SL) for initial skill classification and Reinforcement Learning (RL) for adaptive question selection. Built an API to integrate AI models, a question database, and the simulator for a dynamic, personalized learning experience."}
        </p>

        {/* Footer */}
        <div className="flex flex-row justify-between items-center">
          {/* Start Button */}
          <button
            className="bg-gradient-to-r from-[#66FF00] to-[#004d00] bg-opacity-90 text-white px-4 py-2 rounded-lg hover:scale-105 transition-all duration-300"
            onClick={handleButtonClick}
          >
            Check project 
          </button>

    
 
        </div>
      </div>
    </div>
  );
}

export default Card;