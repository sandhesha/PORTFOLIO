import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#050505] text-white flex items-center overflow-hidden pt-28"
    >
      {/* Background glow */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#ff3b30]/10 rounded-full blur-[120px]" />

      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#ff5a00]/10 rounded-full blur-[140px]" />

      <div className="container-main relative z-10 w-full px-6 lg:px-20">

        <div className="grid lg:grid-cols-2 items-center gap-12 lg:gap-20">

          {/* ================= IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">

              {/* Red circle */}
              <div
                className="
                  absolute
                  w-[280px]
                  h-[280px]
                  md:w-[400px]
                  md:h-[400px]
                  rounded-full
                  bg-gradient-to-br
                  from-[#ff2b1a]
                  to-[#8b0000]
                  top-1/2
                  left-1/2
                  -translate-x-1/2
                  -translate-y-1/2
                "
              />

              {/* Profile image */}
              <div
                className="
                  relative
                  z-10
                  w-[300px]
                  h-[400px]
                  md:w-[430px]
                  md:h-[540px]
                  overflow-hidden
                  rounded-[45%_45%_35%_35%]
                "
              >
                <img
                  src="/pic.png"
                  alt="Sandhesha"
                  className="
                    w-full
                    h-full
                    object-cover
                    object-top
                    grayscale-[20%]
                  "
                />
              </div>

            </div>
          </motion.div>

          {/* ================= CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >

            {/* Small introduction */}
            <p className="text-gray-500 text-lg mb-3">
              Hello, I'm
            </p>

            {/* Name */}
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Sandhesha
              <span className="text-[#ff3b30]">.</span>
            </h1>

            {/* Role */}
            <h2 className="mt-4 text-2xl md:text-4xl font-bold">
              I'm a{" "}
              <span className="text-[#ff3b30]">
                Frontend Developer
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 text-gray-400 max-w-xl text-base md:text-lg leading-8">
              I build modern, responsive and interactive web
              applications using React, TypeScript and modern
              frontend technologies. I also explore Artificial
              Intelligence and Machine Learning to create smarter
              digital experiences.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-7">

              <a
                href="https://github.com/sandhesha"
                target="_blank"
                rel="noreferrer"
                className="
                  w-11
                  h-11
                  rounded-full
                  border
                  border-[#444]
                  flex
                  items-center
                  justify-center
                  text-gray-400
                  hover:text-white
                  hover:border-[#ff3b30]
                  hover:bg-[#ff3b30]
                  transition
                "
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/sandhesha/"
                className="
                  w-11
                  h-11
                  rounded-full
                  border
                  border-[#444]
                  flex
                  items-center
                  justify-center
                  text-gray-400
                  hover:text-white
                  hover:border-[#ff3b30]
                  hover:bg-[#ff3b30]
                  transition
                "
              >
                <FaLinkedin />
              </a>

              <a
                href="https://instagram.com/sandeshhhh._"
                className="
                  w-11
                  h-11
                  rounded-full
                  border
                  border-[#444]
                  flex
                  items-center
                  justify-center
                  text-gray-400
                  hover:text-white
                  hover:border-[#ff3b30]
                  hover:bg-[#ff3b30]
                  transition
                "
              >
                <FaInstagram />
              </a>

            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">

              <a
                href="#contact"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  border
                  border-[#ff3b30]
                  text-white
                  px-7
                  py-3
                  rounded-full
                  font-semibold
                  hover:bg-[#ff3b30]
                  transition
                "
              >
                Hire Me
                <FaArrowRight
                  className="group-hover:translate-x-1 transition"
                />
              </a>

              <a
                href="#projects"
                className="
                  inline-flex
                  items-center
                  gap-3
                  px-7
                  py-3
                  rounded-full
                  text-gray-400
                  hover:text-white
                  transition
                "
              >
                View Projects
              </a>

            </div>

            {/* Small stats */}
            <div className="flex flex-wrap gap-8 mt-12">

              <div>
                <p className="text-2xl font-bold">
                  10+
                </p>

                <p className="text-xs text-gray-600 uppercase tracking-wider">
                  Projects
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold">
                  CSE
                </p>

                <p className="text-xs text-gray-600 uppercase tracking-wider">
                  AI/ML
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold">
                  React
                </p>

                <p className="text-xs text-gray-600 uppercase tracking-wider">
                  Developer
                </p>
              </div>

            </div>

          </motion.div>

        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="
            absolute
            bottom-8
            left-1/2
            -translate-x-1/2
            text-gray-600
            text-xs
            tracking-[0.3em]
            uppercase
            hidden
            md:block
          "
        >
          Scroll
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;