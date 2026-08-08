import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCode,
  FaBrain,
  FaLaptopCode,
  FaArrowRight,
} from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="relative z-10 bg-[#050505] text-white py-28 px-6 lg:px-16"
    >
      <div className="container-main">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="section-label mb-4">
            About Me
          </p>

          <h2 className="section-title max-w-4xl">
            Turning ideas into
            <span> digital experiences.</span>
          </h2>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* Left - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="dark-panel rounded-3xl p-8 md:p-10"
          >
            <div className="flex items-center gap-4 mb-7">

              <div className="w-12 h-12 rounded-full bg-[#ff3b30] flex items-center justify-center">
                <FaGraduationCap size={20} />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Currently
                </p>

                <h3 className="text-xl font-bold">
                  CSE (AI/ML) Student
                </h3>
              </div>

            </div>

            <p className="text-gray-400 leading-8 text-base md:text-lg">
              I'm Sandhesha, a Computer Science student specializing
              in Artificial Intelligence and Machine Learning. I enjoy
              building modern web applications and exploring how
              artificial intelligence can be used to solve real-world
              problems.
            </p>

            <p className="text-gray-400 leading-8 text-base md:text-lg mt-5">
              My main focus is frontend development with React and
              TypeScript, while continuously improving my skills in
              AI, machine learning and full-stack application
              development.
            </p>

            <a
              href="#contact"
              className="orange-button mt-8"
            >
              Let's Work Together
              <FaArrowRight size={12} />
            </a>
          </motion.div>

          {/* Right - Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-5">

            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="dark-panel rounded-3xl p-7 transition-all duration-300 hover:border-[#ff3b30]"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#ff3b30]/10 text-[#ff3b30] flex items-center justify-center mb-7">
                <FaCode size={20} />
              </div>

              <h3 className="text-xl font-bold mb-3">
                Frontend Development
              </h3>

              <p className="text-gray-500 leading-7 text-sm">
                Building responsive and interactive interfaces
                using React, TypeScript, Tailwind CSS and modern
                frontend technologies.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -8 }}
              className="dark-panel rounded-3xl p-7 transition-all duration-300 hover:border-[#ff3b30]"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#ff3b30]/10 text-[#ff3b30] flex items-center justify-center mb-7">
                <FaBrain size={20} />
              </div>

              <h3 className="text-xl font-bold mb-3">
                AI / Machine Learning
              </h3>

              <p className="text-gray-500 leading-7 text-sm">
                Exploring machine learning, generative AI,
                intelligent assistants and practical AI-powered
                applications.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -8 }}
              className="dark-panel rounded-3xl p-7 transition-all duration-300 hover:border-[#ff3b30]"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#ff3b30]/10 text-[#ff3b30] flex items-center justify-center mb-7">
                <FaLaptopCode size={20} />
              </div>

              <h3 className="text-xl font-bold mb-3">
                Modern Web Apps
              </h3>

              <p className="text-gray-500 leading-7 text-sm">
                Creating complete applications with clean UI,
                APIs, databases, authentication and responsive
                layouts.
              </p>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -8 }}
              className="dark-panel rounded-3xl p-7 transition-all duration-300 hover:border-[#ff3b30]"
            >
              <div className="flex items-center justify-between mb-7">

                <span className="text-5xl font-extrabold text-[#ff3b30]">
                  10+
                </span>

                <span className="text-gray-600 text-sm">
                  Projects
                </span>

              </div>

              <h3 className="text-xl font-bold mb-3">
                Building & Learning
              </h3>

              <p className="text-gray-500 leading-7 text-sm">
                Constantly experimenting with new technologies and
                turning ideas into practical projects.
              </p>
            </motion.div>

          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 border border-[#252525] rounded-3xl mt-8 overflow-hidden"
        >

          <div className="p-7 border-b md:border-b-0 md:border-r border-[#252525]">
            <p className="text-3xl font-bold">
              React
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Frontend
            </p>
          </div>

          <div className="p-7 border-b md:border-b-0 md:border-r border-[#252525]">
            <p className="text-3xl font-bold">
              TS
            </p>
            <p className="text-sm text-gray-600 mt-2">
              TypeScript
            </p>
          </div>

          <div className="p-7 border-r border-[#252525]">
            <p className="text-3xl font-bold">
              AI
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Artificial Intelligence
            </p>
          </div>

          <div className="p-7">
            <p className="text-3xl font-bold">
              ML
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Machine Learning
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default About;