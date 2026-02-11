

import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home", color: "hover:text-white" },
    { name: "About", href: "#about", color: "hover:text-blue-400" },
    { name: "Projects", href: "#projects", color: "hover:text-red-400" },
    { name: "Contact", href: "#contact", color: "hover:text-yellow-400" },
    
  ];

  return (
    <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur border-b border-gray-700 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold text-blue-500">
          <span className="text-red-500">M</span>
          <span className="text-green-400">y</span> Portfolio
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-gray-300">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`${link.color} transition`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl focus:outline-none"
          aria-label="Toggle Menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-60" : "max-h-0"
        } bg-gray-900`}
      >
        <ul className="flex flex-col px-6 py-4 space-y-4 text-gray-300">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block hover:text-white transition"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
