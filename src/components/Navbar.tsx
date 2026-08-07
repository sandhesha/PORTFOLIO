import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 glass">
      <div className="container flex justify-between items-center py-5">

        <a href="#home" className="text-3xl font-bold gradient-text">
          Sandhesha
        </a>

        <nav className="hidden md:flex gap-8">

          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-cyan-400 duration-300"
            >
              {link.name}
            </a>
          ))}

        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {open && (

        <div className="md:hidden glass p-6">

          {links.map((link) => (

            <a
              key={link.name}
              href={link.href}
              className="block py-3"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>

          ))}

        </div>

      )}

    </header>
  );
}

export default Navbar;