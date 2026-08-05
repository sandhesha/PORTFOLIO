import { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaDownload,
} from "react-icons/fa";

const navLinks = [
  { name: "Home", id: "hero" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Certificates", id: "certificates" },
  { name: "Contact", id: "contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((item) =>
        document.getElementById(item.id)
      );

      sections.forEach((section) => {
        if (!section) return;

        const top = section.offsetTop - 150;
        const bottom = top + section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }

    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/70 backdrop-blur-lg border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}

        <h1 className="text-3xl font-bold text-cyan-400 cursor-pointer">
          Sandesh
        </h1>

        {/* Desktop */}

        <ul className="hidden lg:flex gap-8 text-sm font-medium">

          {navLinks.map((link) => (

            <li
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`cursor-pointer duration-300 hover:text-cyan-400 ${
                active === link.id
                  ? "text-cyan-400"
                  : "text-white"
              }`}
            >
              {link.name}
            </li>

          ))}

        </ul>

        {/* Resume */}

        <a
          href="/resume.pdf"
          download
          className="hidden lg:flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-full duration-300"
        >
          <FaDownload />

          Resume
        </a>

        {/* Mobile Button */}

        <button
          className="lg:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}

      {open && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-700">

          <ul className="flex flex-col py-5">

            {navLinks.map((link) => (

              <li
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="px-6 py-4 hover:bg-slate-800 cursor-pointer"
              >
                {link.name}
              </li>

            ))}

            <a
              href="/resume.pdf"
              download
              className="mx-6 mt-4 bg-cyan-500 text-center py-3 rounded-lg"
            >
              Download Resume
            </a>

          </ul>

        </div>
      )}

    </nav>
  );
}

export default Navbar;