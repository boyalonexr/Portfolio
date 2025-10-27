import { motion } from "framer-motion";
import heroDesImg from "../assets/hero.png";
import Typewriter from './Typewriter'

function Hero() {
  return (
    <section
      id="home"
      className="
        relative min-h-screen flex flex-col md:flex-row 
        items-center z-0 justify-center gap-20 px-6 md:px-20 
        bg-black text-white overflow-hidden 
        background 
      "
    >

      {/* === DARK OVERLAY ON TOP OF BACKGROUND === */}
      <div className="absolute inset-0 bg-black/50" />

      {/* === LEFT: Profile Picture === */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="relative flex items-center justify-center z-10"
      >
        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-tr from-[#8b5cf6] to-[#6d28d9] p-1">
          <img
            src={heroDesImg}
            alt="Chidubem Victor"
            className="w-full h-full object-cover rounded-full border-4 border-black"
          />
        </div>

        {/* Floating glow animation */}
        <motion.div
          className="absolute w-16 h-16 bg-[#8b5cf6]/20 rounded-full blur-2xl"
          animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* === RIGHT: Introduction Text === */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center md:text-left max-w-md z-10 space-y-3"
      >
        <p className="text-lg text-gray-300">Hi, I am</p>
        <h1 className="text-4xl md:text-5xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 font-extrabold">
            Chidubem Victor
          </span>
        </h1>

        <span className="flex justify-center md:justify-start">
          <Typewriter
            phrases={[
              "Frontend Developer",
              "React • Tailwind • Performance",
              "Design-minded • Accessibility-first",
            ]}
          />
        </span>

        <p className="text-gray-400 leading-relaxed">
          A passionate <span className="text-[#8b5cf6]">Frontend Developer</span> who loves building
          modern, interactive, and responsive user experiences with React, Tailwind, and creative UI
          design.
        </p>

        {/* CTA Buttons */}
        <div className="mt-9 flex flex-wrap gap-4 justify-center md:justify-start">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium shadow-glow-lg hover:scale-105 transition transform"
          >
            View Projects
          </motion.a>

          <motion.a
            href="/resume.docx"
            
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 border border-[#8b5cf6] text-[#8b5cf6] font-medium rounded-xl hover:bg-[#8b5cf6]/10 transition-all"
          >
            Resume
          </motion.a>
        </div>
      </motion.div>

      {/* === Scroll Indicator (Mouse for Desktop / Arrow for Mobile) === */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center z-20">
          {/* Desktop Mouse Scroll Indicator */}
          <div className="hidden md:flex flex-col items-center space-y-2">
            <div className="w-6 h-10 rounded-full border-2 border-gray-400 flex justify-center items-start p-1">
              <motion.div
                className="w-1.5 h-2 bg-[#8b5cf6] rounded-full"
                animate={{ y: [0, 6, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <span className="text-gray-500 text-xs uppercase tracking-widest">Scroll</span>
          </div>

          {/* Mobile Down Arrow */}
          <motion.div
            className="block md:hidden text-[#8b5cf6]"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.6}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </motion.div>
        </div>
    </section>
  );
}

export default Hero;
