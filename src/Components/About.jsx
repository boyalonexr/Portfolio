import { motion } from "framer-motion";

function About() {
  const experiences = [
    {
      role: "FRONTEND DEVELOPER",
      company: "Taacodeep Technologies",
      location: "Nsukka, Enugu State",
      date: "2022 - 2024",
      points: [
        "Developed responsive website layouts using HTML, CSS, and JavaScript.",
        "Created user-centered UI mockups and prototypes following design best practices.",
      ],
    },
    {
      role: "FRONTEND DEVELOPER INTERN",
      company: "Scrimba",
      location: "Remote",
      date: "2024 - Present",
      points: [
        "Worked on real-world projects using HTML, CSS, JavaScript, and React.",
        "Gained hands-on experience building applications and collaborating within the Scrimba community.",
      ],
    },
  ];

  return (
    <section
      id="about"
      className="
        relative min-h-screen flex items-center justify-center 
        py-20 px-6 md:px-16 lg:px-32 
        background-lower z-0
      "
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
          relative z-10 max-w-6xl 
          flex flex-col lg:flex-row 
          items-center lg:items-start 
          gap-12 lg:gap-20
        "
      >
        {/* LEFT — ABOUT TEXT */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            About <span className="text-[#3B82F6]">Me</span>
          </h2>

          <p className="text-gray-300 leading-relaxed">
            I'm a frontend developer passionate about creating clean, responsive,
            and user-friendly interfaces. I specialize in React, Tailwind CSS,
            and crafting smooth UI animations with Framer Motion.
          </p>

          <p className="text-gray-300 leading-relaxed">
            I also explore UI/UX design, color systems, layout balance, and
            crafting seamless digital experiences that blend design with code.
          </p>
        </div>

        {/* RIGHT — PROFESSIONAL EXPERIENCE */}
        <div className="flex-1 w-full">
          <h3 className="text-2xl font-bold text-white text-center lg:text-left mb-6">
            Professional <span className="text-[#3B82F6]">Experience</span>
          </h3>

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="border-l-4 border-[#3B82F6] pl-6 space-y-2"
              >
                <h4 className="text-white text-xl font-semibold">
                  {exp.role}
                </h4>

                <p className="text-[#3B82F6] font-medium">
                  {exp.company} • {exp.location}
                </p>

                <p className="text-gray-400 text-sm">{exp.date}</p>

                <ul className="text-gray-300 space-y-1 list-disc ml-4">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
