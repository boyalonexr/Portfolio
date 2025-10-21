import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiVite, SiExpress, } from "react-icons/si";

function Skill() {
  const skills = [
    { id: 1, name: "HTML5", color: "#E44D26", icon: <FaHtml5 /> },
    { id: 2, name: "CSS3", color: "#1572B6", icon: <FaCss3Alt /> },
    { id: 3, name: "JavaScript", color: "#F7DF1E", icon: <SiJavascript /> },
    { id: 4, name: "React", color: "#61DAFB", icon: <FaReact /> },
    { id: 5, name: "Tailwind CSS", color: "#38BDF8", icon: <SiTailwindcss /> },
    { id: 6, name: "Git", color: "#F1502F", icon: <FaGitAlt /> },
    { id: 7, name: "GitHub", color: "#ffffff", icon: <FaGithub /> },
    { id: 8, name: "Vite", color: "#646CFF", icon: <SiVite /> },
    { id: 9, name: "Figma", color: "#F24E1E", icon: <FaFigma /> },
    { id: 10, name: "Express.js", color: "#68A063", icon: <SiExpress /> },
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col bg-black text-white px-6 py-20 md:px-20  items-center justify-center overflow-hidden"
    >
      {/* === Section Heading === */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        className="max-w-6xl"
      >
        {/* === Section Heading === */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          My <span className="text-[#8b5cf6]">Skills</span>
        </h2>

          {/* === Description === */}
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            I specialize in crafting responsive, user-focused web interfaces with clean
            and maintainable code. My experience spans front-end technologies like 
            <span className="text-[#8b5cf6] font-medium"> React</span> and 
            <span className="text-[#8b5cf6] font-medium"> Tailwind CSS</span>, 
            as well as back-end tools like 
            <span className="text-[#8b5cf6] font-medium"> Express.js</span>. 
            I’m passionate about bringing ideas to life through modern web technologies.
          </p>

      {/* === Skills Grid === */}
      <div className="relative z-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 md:gap-10">
        {skills.map((skill) => (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2}}
            whileHover={{
              scale: 1.15,
              rotate: 2,
              boxShadow: `0px 0px 30px ${skill.color}40`,
            }}
            className="relative flex flex-col items-center justify-center p-5 md:p-10 rounded-xl bg-[#8b5cf6]/10 shadow-lg transition-all duration-300 cursor-pointer"
          >
            <motion.div
              whileHover={{
                scale: 1.2,
                textShadow: `0px 0px 12px ${skill.color}`,
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-5xl  mb-2"
              style={{ color: skill.color }}
            >
              {skill.icon}
            </motion.div>
            <p className="text-sm font-medium text-gray-300 group-hover:text-[#8b5cf6] transition-colors duration-300">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>

      {/* === Subtle Background Glow === */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-transparent to-transparent" />
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#8b5cf6]/20 rounded-full blur-[120px]" />
    </motion.div>
  </section>

  );
}

export default Skill;
