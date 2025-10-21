import { motion } from "framer-motion";
import "../App.css";

const LoadingScreen = () => {

  return (
    <div className="loading-container">
      <motion.div
        className="loader"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
          boxShadow: [
            "0 0 10px #8b5cf6",
            "0 0 30px #8b5cf6",
            "0 0 10px #8b5cf6",
          ],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>
    </div>
  );
};

export default LoadingScreen;
