import { useState } from "react";
import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "Resume", href: "#resume" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 pt-4">
      <div className="container-main">

        <nav className="bg-[#151515]/95 backdrop-blur-md border border-[#292929] rounded-2xl px-5 md:px-7 py-4">

          <div className="flex items-center justify-between">

            {/* Logo */}
            <a
              href="#home"
              onClick={closeMenu}
              className="text-2xl md:text-3xl font-extrabold tracking-tight text-white"
            >
              Sandhesha
              <span className="text-[#ff5a00]">.</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-7">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-white transition duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Contact Button */}
            <a
              href="#contact"
              className="hidden lg:flex items-center gap-2 bg-[#ff5a00] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-white hover:text-black transition duration-300"
            >
              Let's Talk
              <FaArrowRight size={12} />
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-10 h-10 rounded-full bg-[#242424] text-white flex items-center justify-center hover:bg-[#ff5a00] transition"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

          </div>

          {/* Mobile Navigation */}
          {menuOpen && (
            <div className="lg:hidden border-t border-[#303030] mt-4 pt-4">

              <div className="flex flex-col gap-1">

                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={closeMenu}
                    className="px-4 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-[#222] transition"
                  >
                    {link.name}
                  </a>
                ))}

                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="mt-2 bg-[#ff5a00] text-white px-4 py-3 rounded-lg font-semibold flex items-center justify-between"
                >
                  Let's Talk
                  <FaArrowRight size={13} />
                </a>

              </div>

            </div>
          )}

        </nav>

      </div>
    </header>
  );
}

export default Navbar;