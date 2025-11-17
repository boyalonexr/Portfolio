import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="
        relative flex flex-col items-center justify-center 
        py-20 px-6 md:px-16 lg:px-32 
        background-lower h-screen z-0
      "
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* CONTENT WRAPPER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-3xl flex flex-col items-center gap-6"
      >
        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
          About <span className="text-purple-400">Me</span>
        </h2>


        {/* PARAGRAPH 1 */}
        <p className="text-gray-300 leading-relaxed text-center">
          I’m a passionate frontend developer focused on building clean, responsive,
          and user-friendly interfaces using tools like React, Tailwind CSS, and
          Framer Motion.
        </p>

        {/* PARAGRAPH 2 */}
        <p className="text-gray-300 leading-relaxed text-center">
          Outside of coding, I explore UI/UX design, prototype in Figma, and
          enjoy creating digital experiences that blend design with development.
        </p>
      </motion.div>
    </section>
  );
}

export default About;
