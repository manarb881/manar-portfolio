import { motion } from 'framer-motion';
import './App.css';
import './fonts.css';
import Navbar from './Navbar';
import About from './About';
import Cv from './Cv';
import Technologies from './Technologies';
import Card from './Card';
import Footer from './Footer';
import Contact from './Contact';

function App() {
  const challenges = [
    {
      title: "AI-POWERED ADAPTIVE QUIZ PLATFORM USING SL & RL",
      description:
        "Developed an intelligent employee training simulator using Supervised Learning (SL) for initial skill classification and Reinforcement Learning (RL) for adaptive question selection. Built an API to integrate AI models, a question database, and the simulator for a dynamic, personalized learning experience.",
      challengeLink: "https://github.com/manarb881/Adapatative-quiz-learning-system",
    },
    {
      title: "FACE DETECTION USING KERAS FACENET MODEL",
      description:
        "This project implements a web-based face recognition system using machine learning techniques and open-source tools. It allows users to upload an image of a face and find the closest match within a pre-existing dataset of known individuals, it's based on similarity search and computer Vision principles.",
      challengeLink: "https://github.com/manarb881/final-PROJECT-ML",
    },
  ];

  return (
    <>
      {/* Magical lighting effect at the top */}
      <div className="magic-light-top" />
      <div className="w-full bg-gradient-to-br from-green-950 to-black flex flex-col gap-6 min-h-screen relative">
        {/* Grid pattern applied to the entire background */}
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
        <Navbar />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <About id="About" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Cv />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Technologies id="Skills" className="m-5" />
        </motion.div>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 font-gilroy text-center">Projects</h1>
        <motion.div
          id="Projects"
          className="relative grid grid-cols-1 md:grid-cols-2 gap-10 m-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Decorative grid patch (optional, can be removed if not needed) */}
          <div className="grid-patch" style={{ top: '-30px', left: '80%', transform: 'rotate(6deg) scale(0.8)' }} />
          {challenges.map((challenge, index) => (
            <Card
              key={index}
              title={challenge.title}
              description={challenge.description}
              challengeLink={challenge.challengeLink}
            />
          ))}
        </motion.div>
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;