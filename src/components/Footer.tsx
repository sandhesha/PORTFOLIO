import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">

      <div className="container mx-auto py-12">

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          <div>
            <h2 className="text-3xl font-bold gradient-text">
              Sandhesha
            </h2>

            <p className="text-gray-400 mt-2">
              Frontend Developer • AI/ML Enthusiast
            </p>
          </div>

          <div className="flex gap-6 text-2xl">

            <a
              href="https://github.com/sandhesha"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-500 duration-300"
            >
              <FaInstagram />
            </a>

          </div>

        </div>

        <hr className="my-8 border-slate-800" />

        <div className="flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500">
            © 2026 Sandhesha. All Rights Reserved.
          </p>

          <a
            href="#home"
            className="mt-6 md:mt-0 p-3 rounded-full bg-cyan-500 hover:bg-cyan-600 duration-300"
          >
            <FaArrowUp />
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;