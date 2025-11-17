import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import Typewriter from "./Typewriter";

function Hero() {
  const socials = [
    { id: 1, name: "GitHub", icon: <FaGithub />, href: "https://github.com/boyalonexr", color: "#3B82F6" },
    { id: 2, name: "Twitter", icon: <FaTwitter />, href: "https://twitter.com/yourhandle", color: "#1DA1F2" },
    { id: 3, name: "LinkedIn", icon: <FaLinkedin />, href: "https://www.linkedin.com/in/chidubem-victor-969443305", color: "#0A66C2" },
  ];

  const profileImg = "https://res.cloudinary.com/dmg0ohw7r/image/upload/v1763367492/rsz_hero_xzktzu_uem3ly.png"

  return (
    <section
      id="home"
      className="
        relative min-h-screen flex flex-col-reverse lg:flex-row 
        items-center justify-center lg:justify-between
        px-6 sm:px-10 lg:px-20 py-16 gap-6 
        text-white bg-white overflow-hidden background
      "
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* RIGHT — TEXT */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 max-w-xl text-center lg:text-left space-y-4 w-full lg:w-1/2"
      >
        <p className="text-gray-300 text-lg">Hi, I am</p>

        <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Chidubem Victor
        </h1>

        <div className="flex justify-center lg:justify-start">
          <Typewriter
            phrases={[
              "Frontend Developer",
              "React • Tailwind • Performance",
              "Design-minded • Accessibility-first",
            ]}
          />
        </div>

        <p className="text-gray-300 leading-relaxed max-w-md mx-auto lg:mx-0">
          I build modern, interactive, and accessible frontend experiences using React, Tailwind, and creative UI engineering.
        </p>

        {/* CTA BUTTONS */}
        <div className="flex flex-wrap gap-6 justify-center lg:justify-start mt-4">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-xl bg-[#3B82F6] text-white font-semibold shadow-lg transition"
          >
            View Projects
          </motion.a>

          <motion.a
            href="/resume.docx"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-xl border-2 border-[#3B82F6] text-[#3B82F6] font-semibold hover:bg-[#3B82F6]/10 transition"
          >
            Resume
          </motion.a>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex items-center py-3 pt-3 gap-6 justify-center lg:justify-start">
          {socials.map((social) => (
            <motion.a
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.3,
                rotate: 8,
                color: social.color,
              }}
              whileTap={{ scale: 0.95 }}
              className="text-2xl text-gray-400 transition-all duration-300"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* LEFT — IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="relative flex z-10 justify-center w-full lg:w-1/2"
      >
        <div className="relative w-64 h-64 sm:w-60 sm:h-60 lg:w-[22rem] lg:h-[22rem] 
          rounded-full p-1 mt-10 lg:mt-0 bg-gray-900/50"
        >
          <img
            src={profileImg}
            loading="lazy"
            className="w-full h-full object-cover rounded-full border-2 border-gray-400"
          />
        </div>
      </motion.div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20">
        {/* Desktop Mouse Scroll */}
        <div className="hidden md:flex flex-col items-center space-y-2">
          <div className="w-6 h-10 rounded-full border-2 border-gray-400 flex justify-center items-start p-1">
            <motion.div
              className="w-1.5 h-2 bg-[#3B82F6] rounded-full"
              animate={{ y: [0, 6, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>

        {/* Mobile Arrow */}
        <motion.div
          className="block md:hidden text-[#3B82F6]"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
               strokeWidth={1.6} stroke="currentColor"
               className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
