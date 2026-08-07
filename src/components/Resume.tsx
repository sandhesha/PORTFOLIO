import { motion } from "framer-motion";
import {
  FaDownload,
  FaEye,
  FaFilePdf,
} from "react-icons/fa";

function Resume() {
  return (
    <section id="resume" className="py-24">
      <div className="container mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="text-5xl font-bold text-center mb-4"
        >
          My <span className="gradient-text">Resume</span>
        </motion.h2>

        <p className="text-center text-gray-400 mb-16">
          Download or preview my latest resume.
        </p>

        <motion.div
          initial={{ opacity:0, y:60 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:.7 }}
          className="card rounded-3xl p-10"
        >

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left */}

            <div>

              <FaFilePdf
                className="text-red-500 text-8xl mb-8"
              />

              <h3 className="text-4xl font-bold mb-5">
                Resume
              </h3>

              <p className="text-gray-400 leading-8 mb-10">

                My resume contains my education,
                technical skills, projects,
                certifications and experience.

              </p>

              <div className="flex flex-wrap gap-5">

                <a
                  href="/sandhesha_resume.pdf"
                  download
                  className="primary-btn flex items-center gap-3"
                >
                  <FaDownload />
                  Download
                </a>

                <a
                  href="/sandhesha_resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-btn flex items-center gap-3"
                >
                  <FaEye />
                  View Resume
                </a>

              </div>

            </div>

            {/* Right */}

            <iframe
              src="/sandhesha_resume.pdf"
              title="Resume"
              className="w-full h-[650px] rounded-2xl border border-gray-700"
            />

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Resume;