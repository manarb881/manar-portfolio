import { motion } from "framer-motion";
import './App.css';
import './fonts.css';
import Navbar from './Navbar';
import About from './About';
import Cv from './Cv';
import Technologies from './Technologies';
import Card from './Card';
import Footer from './Footer';

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
      <div className="w-full bg-gradient-to-br from-green-950 to-black flex flex-col gap-6">
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
          className="grid grid-cols-1 md:grid-cols-2 gap-10 m-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {challenges.map((challenge, index) => (
            <Card
              key={index}
              title={challenge.title}
              description={challenge.description}
              challengeLink={challenge.challengeLink}
            />
          ))}
        </motion.div>
        <Footer />
      </div>
    </>
  );
}

export default App;
