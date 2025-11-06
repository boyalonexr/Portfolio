import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projects from "./Projects";

function Projects() {
  const [page, setPage] = useState(0);
  const projectsPerPage = 3;
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const start = page * projectsPerPage;
  const currentProjects = projects.slice(start, start + projectsPerPage);

  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 md:px-20 py-20 overflow-hidden"
    >
      {/* === Section Heading === */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-6 text-center"
      >
        My <span className="text-[#8b5cf6]">Projects</span>
      </motion.div>

      {/* === Description === */}
      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
        Each project reflects my ability to design and build responsive, functional, and
        user-centered web applications.
      </p>

      {/* === Project Grid with Animation === */}
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl"
        >
          {currentProjects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 20px rgba(139,92,246,0.25)",
              }}
              className="relative z-10 bg-[#111]/50 rounded-2xl overflow-hidden shadow-md transition-all duration-300 border border-[rgba(139,92,246,0.1)]"
            >
              <div className="overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col justify-between h-60">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#8b5cf6]">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 line-clamp-3 text-sm mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs bg-[#8b5cf6]/20 text-[#8b5cf6] px-2 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-4 flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm hover:text-[#8b5cf6] transition-colors"
                  >
                    <FaGithub /> Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm hover:text-[#8b5cf6] transition-colors"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* === Pagination Dots === */}
      <div className="absolute z-10 bottom-10 flex gap-4">
        {Array.from({ length: totalPages }).map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setPage(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === page
                ? "bg-[#8b5cf6] shadow-[0_0_10px_#8b5cf6]"
                : "bg-gray-600 hover:bg-[#8b5cf6]/60"
            }`}
          />
        ))}
      </div>

      {/* === Background Glow === */}
      <div className="absolute inset-0 -z-1 bg-gradient-to-t from-black via-transparent to-transparent" />
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#8b5cf6]/20 rounded-full blur-[140px]" />
    </section>
  );
}

export default Projects;