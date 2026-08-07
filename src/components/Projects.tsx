import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaStar } from "react-icons/fa";

const projects = [
  {
    title: "Face Recognition Attendance System",
    image: "/images/projects/attendance.png",
    description:
      "An AI-powered attendance system using facial recognition to automatically detect users and mark attendance accurately. Built with computer vision and modern web technologies.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Python",
      "OpenCV",
    ],
    github:
      "https://github.com/sandhesha/face-recognition-attendance-system",
    demo: "#",
    featured: true,
  },

  {
    title: "ClientX CRM",
    image: "/images/projects/clientx.png",
    description:
      "A modern CRM platform with Google Authentication, Project Management, Workspace Collaboration, AI Assistant, Analytics Dashboard and Role-based Access Control.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "TypeScript",
    ],
    github: "https://github.com/sandhesha/clientx",
    demo: "https://clientx.tech",
    featured: true,
  },

  {
    title: "E-Commerce Website",
    image: "/images/projects/ecommerce.png",
    description:
      "Responsive online shopping platform with authentication, product management, shopping cart and beautiful modern UI.",
    technologies: [
      "React",
      "Tailwind",
      "Node.js",
      "MongoDB",
    ],
    github: "https://github.com/sandhesha",
    demo: "#",
    featured: false,
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="text-5xl font-bold text-center mb-4"
        >
          Featured{" "}
          <span className="gradient-text">
            Projects
          </span>
        </motion.h2>

        <p className="text-center text-gray-400 text-lg mb-16">
          Some of my best projects built with modern technologies.
        </p>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">

          {projects.map((project, index) => (

            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .5,
                delay: index * .15,
              }}
              whileHover={{
                y: -12,
              }}
              className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-700 shadow-xl"
            >

              {project.featured && (

                <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-2">

                  <FaStar />

                  Featured

                </div>

              )}

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-7">

                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-7 mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">

                  {project.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                <div className="flex gap-4">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex justify-center items-center gap-3 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 duration-300"
                  >
                    <FaGithub />

                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex justify-center items-center gap-3 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105 duration-300"
                  >
                    <FaExternalLinkAlt />

                    Live Demo
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;