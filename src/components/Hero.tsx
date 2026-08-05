import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaDownload,
  FaEnvelope,
} from "react-icons/fa";

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-slate-950 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-cyan-400 text-xl mb-4">
            👋 Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Sandesh
          </h1>

          <h2 className="mt-5 text-3xl text-slate-300 font-semibold">
            Frontend Developer
          </h2>

          <h3 className="text-cyan-400 text-2xl mt-2">
            AI / ML Enthusiast
          </h3>

          <p className="mt-8 text-slate-400 leading-8 max-w-xl">
            I build beautiful, responsive and modern web
            applications using React, TypeScript and
            Tailwind CSS. I am passionate about Artificial
            Intelligence, Machine Learning and solving
            real-world problems through technology.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="/sandhesha_resume.pdf"
              download
              className="bg-cyan-500 hover:bg-cyan-600 px-7 py-4 rounded-xl font-semibold flex items-center gap-3 transition"
            >
              <FaDownload />
              Download Resume
            </a>

            <a
              href="#contact"
              className="border border-cyan-500 px-7 py-4 rounded-xl hover:bg-cyan-500 transition flex items-center gap-3"
            >
              <FaEnvelope />
              Contact Me
            </a>

          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-10 text-3xl">

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 duration-300"
            >
              <FaInstagram />
            </a>

          </div>

        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-cyan-500 blur-3xl opacity-30 animate-pulse"></div>

            <img
              src="/pic.png"
              alt="Profile"
              className="relative w-80 h-80 md:w-[430px] md:h-[430px] object-cover rounded-full border-[6px] border-cyan-500 shadow-2xl"
            />

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;