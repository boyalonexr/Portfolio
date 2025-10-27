import { motion } from "framer-motion";
import "../App.css";

const rippleVariants = {
  animate: {
    scale: [1, 1.8],
    opacity: [1, 0],
    transition: {
      duration: 1.4,
      repeat: Infinity,
      ease: "easeOut",
    },
  },
};

const LoadingScreen = () => {
  return (
    <div className="loading-container">
      <div className="ripple-wrapper">
        <motion.span className="ripple" variants={rippleVariants} animate="animate" />
        <motion.span
          className="ripple"
          variants={rippleVariants}
          animate="animate"
          transition={{ delay: 0.7 }}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
