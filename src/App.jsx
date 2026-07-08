import { motion } from 'framer-motion';
import './App.css';
import './fonts.css';
import Navbar from './Navbar';
import About from './About';
import Cv from './Cv';
import Experience from './Experience';
import Research from './Research';
import Technologies from './Technologies';
import Card from './Card';
import Footer from './Footer';
import Contact from './Contact';

function App() {
  const projects = [
    {
      title: "Autonomous Vacuum Cleaner Robot",
      description: "Developed a ROS 2-based cleaning system on TurtleBot3 with real-time dirt detection (HSV → YOLOv8). Trained on a hybrid dataset (Roboflow + Gazebo) and explored diffusion policy-based imitation learning for adaptive navigation.",
      tags: ["ROS 2", "YOLOv8", "TurtleBot3", "Imitation Learning", "Gazebo", "Python"],
      challengeLink: null
    },
    {
      title: "NLP Platform for Pharmaceutical Supply Chain",
      description: "Built a full NLP pipeline including Speech-to-Text, NER for report generation, Next-word prediction, RAG system, sentiment analysis, text summarization, and spell checker. Deployed using Docker and Hugging Face Spaces (MLOps).",
      tags: ["NLP", "RAG", "Docker", "Hugging Face", "MLOps", "Python"],
      challengeLink: null
    },
    {
      title: "Retail Intelligence Platform (Big Data & BI)",
      description: "Built a retail analytics solution using Hadoop, Spark, SSIS, SSAS, and Power BI, including ETL pipelines, a star-schema data warehouse, OLAP cubes, interactive dashboards, and RFM-based customer segmentation.",
      tags: ["Hadoop", "Apache Spark", "Power BI", "ETL", "SSAS", "Data Warehouse"],
      challengeLink: null
    },
    {
      title: "Adaptive Learning System",
      description: "Implemented an intelligent training simulator using Supervised Learning (SL) for initial classification and Reinforcement Learning (RL) for adaptive question selection. Built an API to integrate models and database.",
      tags: ["Machine Learning", "Reinforcement Learning", "Random Forest", "Python", "API"],
      challengeLink: "https://github.com/manarb881/Adapatative-quiz-learning-system"
    },
    {
      title: "Face Recognition Web App",
      description: "Developed a web-based face recognition system using machine learning and computer vision. Users can upload an image of a face and find the closest match within a database via similarity search.",
      tags: ["Computer Vision", "Flask", "OpenCV", "FaceNet", "Keras"],
      challengeLink: "https://github.com/manarb881/final-PROJECT-ML"
    },
    {
      title: "Lung Nodule Detection",
      description: "Developed a CNN-based medical imaging classification model to identify lung nodules on CT scans, assisting in early clinical diagnosis and screening.",
      tags: ["Deep Learning", "CNN", "Medical Imaging", "TensorFlow", "Keras"],
      challengeLink: null
    },
    {
      title: "Cryptography File Security App",
      description: "Designed and built a local desktop application to encrypt and decrypt sensitive files securely using AES, RSA, and DES cryptographic algorithms.",
      tags: ["Cryptography", "AES / RSA / DES", "Python", "Security"],
      challengeLink: "https://github.com/manarb881/cryptography--APP"
    },
    {
      title: "Full-Stack AI Website for Hackathon",
      description: "Created a full-stack web application integrating multiple machine learning models and an interactive analytics dashboard for a live hackathon event.",
      tags: ["ReactJS", "Flask", "Machine Learning", "Dashboard", "Full-Stack"],
      challengeLink:"https://github.com/manarb881/devcampFront-end"
    }
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
        
        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <About />
        </motion.div>
        
        {/* CV Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Cv />
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Experience />
        </motion.div>

        {/* Research Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Research />
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Technologies />
        </motion.div>

        {/* Projects Section */}
        <div id="Projects" className="relative flex flex-col items-center justify-center py-16 px-6 md:px-12 z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-gilroy text-center">
            Side Projects
          </h1>
          <p className="text-gray-400 text-center max-w-xl mb-12 font-gilroy font-light text-sm md:text-base">
            A showcase of software developments, full-stack tools, and engineering side projects.
          </p>

          <motion.div
            className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            {projects.map((project, index) => (
              <Card
                key={index}
                title={project.title}
                description={project.description}
                challengeLink={project.challengeLink}
                tags={project.tags}
              />
            ))}
          </motion.div>
        </div>

        {/* Contact & Footer */}
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;