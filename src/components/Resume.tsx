import { motion } from "framer-motion";
import {
  FaFilePdf,
  FaDownload,
  FaEye,
  FaArrowRight,
} from "react-icons/fa";

function Resume() {
  return (
    <section
      id="resume"
      className="relative z-10 bg-[#080808] text-white py-28 px-6 lg:px-16"
    >
      <div className="container-main">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <p className="section-label mb-4">
            My Resume
          </p>

          <h2 className="section-title max-w-4xl">
            A little more
            <span> about me.</span>
          </h2>

          <p className="text-gray-500 max-w-xl mt-6 leading-7">
            Want to know more about my education, technical skills,
            projects and experience? Take a look at my resume.
          </p>
        </motion.div>

        {/* Resume Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            relative
            overflow-hidden
            bg-[#111111]
            border
            border-[#252525]
            rounded-[2rem]
            p-8
            md:p-12
          "
        >
          {/* Background glow */}
          <div
            className="
              absolute
              -right-32
              -top-32
              w-80
              h-80
              rounded-full
              bg-[#ff3b30]/10
              blur-[100px]
            "
          />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">

            {/* Left */}
            <div>

              <div
                className="
                  w-20
                  h-20
                  rounded-2xl
                  bg-[#ff3b30]/10
                  border
                  border-[#ff3b30]/20
                  flex
                  items-center
                  justify-center
                  text-[#ff3b30]
                  mb-7
                "
              >
                <FaFilePdf size={32} />
              </div>

              <p className="text-[#ff3b30] text-sm uppercase tracking-[0.2em] mb-3">
                Resume
              </p>

              <h3 className="text-3xl md:text-4xl font-bold">
                Sandhesha
              </h3>

              <p className="text-gray-500 mt-3">
                Frontend Developer · AI/ML Enthusiast · CSE Student
              </p>

              <p className="text-gray-500 leading-7 mt-6 max-w-lg">
                My resume contains my educational background,
                technical skills, projects, certifications and
                experience.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mt-8">

                <a
                  href="/sandhesha_resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="orange-button"
                >
                  <FaEye size={13} />
                  View Resume
                </a>

                <a
                  href="/sandhesha_resume.pdf"
                  download="Sandhesha-Resume.pdf"
                  className="outline-button"
                >
                  <FaDownload size={13} />
                  Download
                </a>

              </div>

            </div>

            {/* Right - Resume Preview */}
            <div className="relative">

              <div
                className="
                  relative
                  bg-[#181818]
                  border
                  border-[#292929]
                  rounded-2xl
                  p-4
                  rotate-2
                  hover:rotate-0
                  transition-transform
                  duration-500
                "
              >

                <div className="bg-white rounded-xl overflow-hidden">

                  <iframe
                    src="/sandhesha_resume.pdf"
                    title="Sandhesha Resume"
                    className="w-full h-[420px] md:h-[500px]"
                  />

                </div>

              </div>

              {/* Decorative card */}
              <div
                className="
                  absolute
                  -bottom-5
                  -left-5
                  bg-[#ff3b30]
                  text-white
                  px-5
                  py-3
                  rounded-xl
                  text-sm
                  font-semibold
                  shadow-xl
                "
              >
                Updated Resume
              </div>

            </div>

          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            mt-8
            flex
            flex-col
            md:flex-row
            md:items-center
            md:justify-between
            gap-5
            border
            border-[#252525]
            rounded-3xl
            p-7
            md:p-8
          "
        >

          <div>
            <p className="text-gray-600 text-sm">
              Interested in working together?
            </p>

            <h3 className="text-xl font-bold mt-1">
              Let's talk about your next project.
            </h3>
          </div>

          <a
            href="#contact"
            className="orange-button w-fit"
          >
            Contact Me
            <FaArrowRight size={12} />
          </a>

        </motion.div>

      </div>
    </section>
  );
}

export default Resume;