import { motion } from "framer-motion";
import {
  FaReact,
  FaPython,
  FaDatabase,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBrain,
} from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiMongodb, SiFigma } from "react-icons/si";

const skills = [
  {
    name: "React",
    icon: <FaReact />,
    level: "Advanced",
    category: "Frontend",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    level: "Advanced",
    category: "Frontend",
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
    level: "Advanced",
    category: "Frontend",
  },
  {
    name: "HTML & CSS",
    icon: <FaHtml5 />,
    level: "Advanced",
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    level: "Advanced",
    category: "Frontend",
  },
  {
    name: "Python",
    icon: <FaPython />,
    level: "Intermediate",
    category: "AI / ML",
  },
  {
    name: "AI / ML",
    icon: <FaBrain />,
    level: "Intermediate",
    category: "AI / ML",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    level: "Intermediate",
    category: "Database",
  },
  {
    name: "SQL",
    icon: <FaDatabase />,
    level: "Intermediate",
    category: "Database",
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
    level: "Intermediate",
    category: "Tools",
  },
  {
    name: "Figma",
    icon: <SiFigma />,
    level: "Intermediate",
    category: "Tools",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />,
    level: "Advanced",
    category: "Frontend",
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative z-10 bg-[#080808] text-white py-28 px-6 lg:px-16"
    >
      <div className="container-main">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="section-label mb-4">
            My Skills
          </p>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">

            <h2 className="section-title max-w-3xl">
              Tools I use to
              <span> build things.</span>
            </h2>

            <p className="text-gray-500 max-w-md leading-7">
              A combination of frontend development, AI/ML,
              databases and development tools that I use to
              turn ideas into working applications.
            </p>

          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              whileHover={{
                y: -8,
              }}
              className="
                group
                relative
                bg-[#111111]
                border
                border-[#252525]
                rounded-2xl
                p-6
                min-h-[180px]
                flex
                flex-col
                justify-between
                overflow-hidden
                transition-all
                duration-300
                hover:border-[#ff3b30]
              "
            >

              {/* Glow */}
              <div
                className="
                  absolute
                  -right-10
                  -top-10
                  w-28
                  h-28
                  rounded-full
                  bg-[#ff3b30]/10
                  blur-2xl
                  opacity-0
                  group-hover:opacity-100
                  transition
                "
              />

              {/* Icon */}
              <div
                className="
                  relative
                  w-12
                  h-12
                  rounded-xl
                  bg-[#1c1c1c]
                  border
                  border-[#303030]
                  flex
                  items-center
                  justify-center
                  text-xl
                  text-[#ff3b30]
                  group-hover:bg-[#ff3b30]
                  group-hover:text-white
                  group-hover:border-[#ff3b30]
                  transition-all
                  duration-300
                "
              >
                {skill.icon}
              </div>

              {/* Content */}
              <div className="relative mt-8">

                <h3 className="font-bold text-lg">
                  {skill.name}
                </h3>

                <div className="flex items-center justify-between mt-2">

                  <span className="text-xs text-gray-600">
                    {skill.category}
                  </span>

                  <span className="text-xs text-[#ff3b30]">
                    {skill.level}
                  </span>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            mt-8
            rounded-3xl
            border
            border-[#252525]
            bg-[#111111]
            p-8
            md:p-10
            flex
            flex-col
            md:flex-row
            md:items-center
            md:justify-between
            gap-6
          "
        >

          <div>
            <p className="text-gray-500 text-sm mb-2">
              Always learning
            </p>

            <h3 className="text-2xl md:text-3xl font-bold">
              Currently exploring{" "}
              <span className="text-[#ff3b30]">
                Generative AI
              </span>
            </h3>
          </div>

          <a
            href="#projects"
            className="orange-button w-fit"
          >
            See My Projects
          </a>

        </motion.div>

      </div>
    </section>
  );
}

export default Skills;