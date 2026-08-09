import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowRight,
} from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "Face Recognition Attendance System",
    description:
      "A smart attendance management system that uses facial recognition to identify users and automatically record attendance.",
    image: "/images/projects/aiface.png",
    technologies: [
      "React",
      "TypeScript",
      "Python",
      "Machine Learning",
    ],
    github:
      "https://github.com/sandhesha/face-recognition-attendance-system",
    demo: "https://github.com/sandhesha/face-recognition-attendance-system",
  },

  {
    title: "ClientX",
    description:
      "A modern CRM platform for freelancers and small agencies with client management, projects, tasks, authentication and analytics.",
    image: "/images/projects/clientx1.png",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    github:
      "https://github.com/sandhesha/clientx",
    demo: "https://clientx.tech",
  },

  {
    title: "Speech Recognization System",
    description:
      "Here is a very simple version: **Speech recognition** is a technology that lets a computer **listen to your voice and turn what you say into text**. It helps in things like voice typing, voice assistants, and voice commands.",
    image: "/images/projects/speech1.png",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
    ],
    github:
      "https://github.com/sandhesha/speech-recognitation",
    demo: "https://github.com/sandhesha/speech-recognitation",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="relative z-10 bg-[#080808] text-white py-28 px-6 lg:px-16"
    >
      <div className="container-main">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="section-label mb-4">
            My Projects
          </p>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">

            <h2 className="section-title max-w-3xl">
              Things I've
              <span> built.</span>
            </h2>

            <p className="text-gray-500 max-w-md leading-7">
              A selection of projects where I experiment with
              frontend development, AI/ML and full-stack
              technologies.
            </p>

          </div>
        </motion.div>

        {/* ================= PROJECTS ================= */}

        <div className="grid lg:grid-cols-2 gap-6">

          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className={`
                group
                bg-[#111111]
                border
                border-[#252525]
                rounded-3xl
                overflow-hidden
                hover:border-[#ff3b30]
                transition-all
                duration-500
                ${
                  index === 0
                    ? "lg:col-span-2"
                    : ""
                }
              `}
            >

              {/* ================= IMAGE ================= */}

              <div
                className={`
                  relative
                  overflow-hidden
                  bg-[#171717]
                  ${
                    index === 0
                      ? "h-[300px] md:h-[420px]"
                      : "h-[240px]"
                  }
                `}
              >

                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />

                {/* Overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#111111]
                    via-transparent
                    to-transparent
                    opacity-80
                  "
                />

                {/* Project Number */}

                <div
                  className="
                    absolute
                    top-5
                    left-5
                    w-10
                    h-10
                    rounded-full
                    bg-black/70
                    backdrop-blur-md
                    border
                    border-white/10
                    flex
                    items-center
                    justify-center
                    text-sm
                    font-semibold
                  "
                >
                  0{index + 1}
                </div>

              </div>

              {/* ================= CONTENT ================= */}

              <div className="p-7 md:p-9">

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5">

                  <div>

                    <p className="text-[#ff3b30] text-xs uppercase tracking-[0.2em] mb-3">
                      Project
                    </p>

                    <h3 className="text-2xl md:text-3xl font-bold">
                      {project.title}
                    </h3>

                  </div>

                  {/* Links */}

                  <div className="flex gap-2">

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} GitHub`}
                        className="
                          w-10
                          h-10
                          rounded-full
                          border
                          border-[#303030]
                          flex
                          items-center
                          justify-center
                          text-gray-400
                          hover:bg-[#ff3b30]
                          hover:border-[#ff3b30]
                          hover:text-white
                          transition
                        "
                      >
                        <FaGithub />
                      </a>
                    )}

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} Live Demo`}
                        className="
                          w-10
                          h-10
                          rounded-full
                          border
                          border-[#303030]
                          flex
                          items-center
                          justify-center
                          text-gray-400
                          hover:bg-[#ff3b30]
                          hover:border-[#ff3b30]
                          hover:text-white
                          transition
                        "
                      >
                        <FaExternalLinkAlt size={13} />
                      </a>
                    )}

                  </div>

                </div>

                {/* Description */}

                <p className="text-gray-500 leading-7 mt-5 max-w-3xl">
                  {project.description}
                </p>

                {/* Technologies */}

                <div className="flex flex-wrap gap-2 mt-6">

                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="
                        px-3
                        py-1.5
                        rounded-full
                        bg-[#191919]
                        border
                        border-[#292929]
                        text-gray-400
                        text-xs
                        hover:border-[#ff3b30]/50
                        hover:text-[#ff3b30]
                        transition
                      "
                    >
                      {technology}
                    </span>
                  ))}

                </div>

                {/* Bottom */}

                <div className="mt-8 pt-6 border-t border-[#252525]">

                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        text-sm
                        font-semibold
                        text-white
                        hover:text-[#ff3b30]
                        transition
                      "
                    >
                      View Live Project
                      <FaArrowRight
                        size={12}
                        className="
                          transition-transform
                          group-hover:translate-x-1
                        "
                      />
                    </a>
                  ) : (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        text-sm
                        font-semibold
                        text-white
                        hover:text-[#ff3b30]
                        transition
                      "
                    >
                      View Source Code
                      <FaArrowRight
                        size={12}
                        className="
                          transition-transform
                          group-hover:translate-x-1
                        "
                      />
                    </a>
                  )}

                </div>

              </div>

            </motion.article>
          ))}

        </div>

        {/* ================= BOTTOM ================= */}

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
            <p className="text-gray-600 text-sm mb-2">
              More on GitHub
            </p>

            <h3 className="text-2xl font-bold">
              Want to see
              <span className="text-[#ff3b30]">
                {" "}more?
              </span>
            </h3>
          </div>

          <a
            href="https://github.com/sandhesha"
            target="_blank"
            rel="noreferrer"
            className="orange-button"
          >
            GitHub Profile
            <FaGithub />
          </a>

        </motion.div>

      </div>
    </section>
  );
}

export default Projects;