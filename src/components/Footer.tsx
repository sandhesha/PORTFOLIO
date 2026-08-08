import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowUp,
  FaHeart,
} from "react-icons/fa";

const footerLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative z-10 bg-[#050505] text-white">

      {/* Main Footer */}
      <div className="border-t border-[#202020]">

        <div className="container-main px-6 lg:px-16 py-16">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* Brand */}
            <div className="lg:col-span-2">

              <a
                href="#home"
                className="inline-block text-3xl font-extrabold tracking-tight"
              >
                Sandhesha
                <span className="text-[#ff3b30]">.</span>
              </a>

              <p className="text-gray-500 max-w-md leading-7 mt-5">
                Frontend Developer, AI/ML enthusiast and CSE student
                building modern, useful and interactive digital
                experiences.
              </p>

              {/* Social Links */}
              <div className="flex gap-3 mt-7">

                <a
                  href="https://github.com/sandhesha"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="
                    w-11
                    h-11
                    rounded-full
                    border
                    border-[#292929]
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

                <a
                  href="https://www.linkedin.com/in/sandhesha"
                  aria-label="LinkedIn"
                  className="
                    w-11
                    h-11
                    rounded-full
                    border
                    border-[#292929]
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
                  <FaLinkedin />
                </a>

                <a
                  href="https://www.linkedin.com/in/sandhesha"
                  aria-label="Instagram"
                  className="
                    w-11
                    h-11
                    rounded-full
                    border
                    border-[#292929]
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
                  <FaInstagram />
                </a>

              </div>

            </div>

            {/* Navigation */}
            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-300 mb-6">
                Navigation
              </p>

              <div className="flex flex-col gap-3">

                {footerLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="
                      w-fit
                      text-gray-500
                      hover:text-[#ff3b30]
                      transition
                      text-sm
                    "
                  >
                    {link.name}
                  </a>
                ))}

              </div>

            </div>

            {/* Let's Talk */}
            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-300 mb-6">
                Let's Talk
              </p>

              <p className="text-gray-500 text-sm leading-6 mb-5">
                Have an idea or project in mind? Let's create
                something meaningful together.
              </p>

              <a
                href="#contact"
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-[#ff3b30]
                  text-sm
                  font-semibold
                  hover:text-white
                  transition
                "
              >
                Get in touch
                <span>→</span>
              </a>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#202020]">

        <div className="container-main px-6 lg:px-16 py-6">

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            <p className="text-gray-600 text-xs text-center md:text-left">
              © {new Date().getFullYear()} Sandhesha. All rights
              reserved.
            </p>

            <p className="text-gray-600 text-xs flex items-center gap-1">
              Built with
              <FaHeart className="text-[#ff3b30] text-[10px]" />
              React & TypeScript
            </p>

            {/* Back to Top */}
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="
                w-10
                h-10
                rounded-full
                border
                border-[#292929]
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
              <FaArrowUp size={13} />
            </button>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;