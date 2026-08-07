import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPython,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

const skills = [
  {
    icon: <FaReact className="text-cyan-400 text-5xl" />,
    name: "React",
    level: 95,
  },
  {
    icon: <SiTypescript className="text-blue-500 text-5xl" />,
    name: "TypeScript",
    level: 90,
  },
  {
    icon: <FaJsSquare className="text-yellow-400 text-5xl" />,
    name: "JavaScript",
    level: 92,
  },
  {
    icon: <SiTailwindcss className="text-cyan-500 text-5xl" />,
    name: "Tailwind CSS",
    level: 94,
  },
  {
    icon: <FaHtml5 className="text-orange-500 text-5xl" />,
    name: "HTML",
    level: 96,
  },
  {
    icon: <FaCss3Alt className="text-blue-400 text-5xl" />,
    name: "CSS",
    level: 95,
  },
  {
    icon: <FaPython className="text-yellow-300 text-5xl" />,
    name: "Python",
    level: 88,
  },
  {
    icon: <FaNodeJs className="text-green-500 text-5xl" />,
    name: "Node.js",
    level: 82,
  },
  {
    icon: <SiMongodb className="text-green-400 text-5xl" />,
    name: "MongoDB",
    level: 85,
  },
  {
    icon: <SiMysql className="text-blue-500 text-5xl" />,
    name: "MySQL",
    level: 84,
  },
  {
    icon: <FaDatabase className="text-purple-500 text-5xl" />,
    name: "SQL",
    level: 90,
  },
  {
    icon: <FaGitAlt className="text-red-500 text-5xl" />,
    name: "Git",
    level: 88,
  },
];

function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="text-center text-5xl font-bold mb-5"
        >
          My <span className="gradient-text">Skills</span>
        </motion.h2>

        <p className="text-center text-gray-400 mb-20">
          Technologies I use to build modern applications.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

          {skills.map((skill, index) => (

            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .5,
                delay: index * .05,
              }}
              className="card p-7 hover:scale-105 duration-300"
            >

              <div className="mb-6">
                {skill.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {skill.name}
              </h3>

              <div className="mt-6 h-3 bg-gray-700 rounded-full overflow-hidden">

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{
                    width: `${skill.level}%`,
                  }}
                  transition={{
                    duration: 1,
                  }}
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                />

              </div>

              <p className="mt-3 text-cyan-400 font-semibold">
                {skill.level}%
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;