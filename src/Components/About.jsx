import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="relative flex justify-center bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-black py-20 px-6 md:px-16 lg:px-32"
    >
        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center w-full md:text-left max-w-md md:max-w-2xl "
        >
          <h2 className="text-3xl text-center md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            About <span className="text-purple-500">Me</span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-center">
            I’m a passionate <span className="font-semibold text-purple-500">Frontend Developer</span> who loves turning ideas into 
            beautiful, functional web experiences. My focus is on crafting 
            clean, responsive interfaces using technologies like React, TailwindCSS, and Framer Motion.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-center">
            Beyond coding, I explore UI/UX design, prototyping in Figma, and 
            building creative digital solutions that bridge design and 
            development. I’m constantly learning and experimenting to bring 
            innovative ideas to life.
          </p>
        </motion.div>
    </section>
  );
}

export default About;
