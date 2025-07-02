const skills = [
  "HTML", "CSS", "JavaScript", "React.js", "Node.js",
  "Express.js", "MongoDB", "Tailwind", "Material UI", "Redux", "JWT", "Socket.IO","Core Java"
];

const Skills = () => (
  <section
    id="skills"
    className="py-24 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white"
  >
    <div className="container mx-auto max-w-6xl px-6">
      <h2 className="text-4xl font-bold text-center text-accent mb-4">Skills</h2>
      <p className="text-center text-gray-400 mb-10 text-3xl sm:text-base max-w-2xl mx-auto">
        These are the technologies and tools I use to craft seamless, responsive, and scalable web applications.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="px-5 py-2 bg-[#1f2937] text-accent text-sm sm:text-base font-semibold rounded-full border border-accent shadow-md hover:scale-105 hover:shadow-[0_0_12px_#22d3ee] transition duration-300"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
