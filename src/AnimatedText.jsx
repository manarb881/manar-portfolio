
import { Typewriter } from "react-simple-typewriter";


function AnimatedText() {


  return (
    <div
      className="   text-white  w-[60%] mt-[40%] md:mt-[10%]"
      role="region"
      aria-label="Welcome Animation"
    >
      {/* Content container with red border, limited to content size */}
      <div className=" p-4 rounded-lg">
        {/* Typing Effect for "Welcome Operator!" */}
        <h1
          className="font-gilroy font-extrabold  text-4xl md:text-7xl mb-5"
          style={{ minHeight: "80px" }}
          aria-live="polite"
        >
          <Typewriter
            words={["Hello!"]}
            loop={false}
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>


      </div>

    </div>
  );
}

export default AnimatedText;