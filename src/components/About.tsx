import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaCode,
  FaDownload,
} from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="py-24"
    >
      <div className="container mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="text-center text-5xl font-bold mb-4"
        >
          About <span className="gradient-text">Me</span>
        </motion.h2>

        <p className="text-center text-gray-400 mb-20">
          Know more about me and my journey.
        </p>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Image */}

          <motion.div
            initial={{ opacity:0,x:-100 }}
            whileInView={{ opacity:1,x:0 }}
            transition={{ duration:.8 }}
          >

            <div className="relative">

              <div className="absolute -inset-5 rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 blur-2xl opacity-20"></div>

              <img
                src="/pic.png"
                className="relative rounded-3xl shadow-2xl"
                alt=""
              />

            </div>

          </motion.div>

          {/* Content */}

          <motion.div
            initial={{ opacity:0,x:100 }}
            whileInView={{ opacity:1,x:0 }}
            transition={{ duration:.8 }}
          >

            <h3 className="text-4xl font-bold mb-6">
              Frontend Developer &
              <span className="gradient-text">
                {" "}AI Enthusiast
              </span>
            </h3>

            <p className="text-gray-400 leading-8 text-lg">

              I'm a Computer Science student specializing in
              Artificial Intelligence & Machine Learning.

              I enjoy building modern websites using React,
              TypeScript and Tailwind CSS while exploring AI,
              Machine Learning and Cloud Technologies.

              I always love solving real-world problems through
              technology and continuously improving my skills.

            </p>

            {/* Cards */}

            <div className="grid sm:grid-cols-2 gap-5 mt-10">

              <div className="card p-6">

                <FaGraduationCap
                  className="text-4xl text-cyan-400 mb-4"
                />

                <h4 className="font-bold text-xl">
                  Education
                </h4>

                <p className="text-gray-400 mt-2">
                  B.E CSE (AI & ML)
                  <br />
                  AJIET
                </p>

              </div>

              <div className="card p-6">

                <FaLaptopCode
                  className="text-4xl text-purple-400 mb-4"
                />

                <h4 className="font-bold text-xl">
                  Experience
                </h4>

                <p className="text-gray-400 mt-2">
                  React
                  <br />
                  TypeScript
                  <br />
                  AI Projects
                </p>

              </div>

              <div className="card p-6">

                <FaCode
                  className="text-4xl text-blue-400 mb-4"
                />

                <h4 className="font-bold text-xl">
                  Projects
                </h4>

                <h2 className="text-4xl font-bold mt-2">
                  10+
                </h2>

              </div>

              <div className="card p-6">

                <FaDownload
                  className="text-4xl text-cyan-400 mb-4"
                />

                <a
                  href="/resume.pdf"
                  download
                  className="primary-btn inline-block mt-3"
                >
                  Download Resume
                </a>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;