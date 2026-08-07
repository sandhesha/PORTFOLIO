import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaBriefcase,
} from "react-icons/fa";

const experience = [
  {
    year: "2023",
    title: "Started Programming",
    icon: <FaLaptopCode />,
    description:
      "Started learning C, Python, HTML, CSS and JavaScript while building small web applications.",
  },
  {
    year: "2024",
    title: "Frontend Development",
    icon: <FaGraduationCap />,
    description:
      "Focused on React, TypeScript, Tailwind CSS and responsive web development.",
  },
  {
    year: "2025",
    title: "AI & Machine Learning",
    icon: <FaBriefcase />,
    description:
      "Built AI/ML projects including Face Recognition Attendance System, ClientX and other modern applications.",
  },
];

function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="text-5xl font-bold text-center mb-4"
        >
          My <span className="gradient-text">Journey</span>
        </motion.h2>

        <p className="text-center text-gray-400 mb-20">
          My learning journey and career growth.
        </p>

        <div className="relative max-w-4xl mx-auto">

          <div className="absolute left-6 top-0 bottom-0 w-1 bg-cyan-500"></div>

          {experience.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity:0, x:-60 }}
              whileInView={{ opacity:1, x:0 }}
              transition={{
                duration:.6,
                delay:index*0.2
              }}
              className="relative pl-20 mb-16"
            >

              <div className="absolute left-0 w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center text-white text-xl shadow-lg">

                {item.icon}

              </div>

              <div className="card p-6">

                <span className="text-cyan-400 font-semibold">
                  {item.year}
                </span>

                <h3 className="text-2xl font-bold mt-2">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-4 leading-7">
                  {item.description}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;