import React, { useState } from "react";
import { FaBars, FaGithub, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto px-4 md:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/src/assets/logo.png" alt="logo" className="w-8 h-8" />
          <h1 className="font-bold text-lg text-purple-600">HERO.IO</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6">
          <li>
            <a
              href="#"
              className="relative text-purple-600 font-medium after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-indigo-500 after:to-purple-500 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="relative hover:text-purple-600 font-medium after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-indigo-500 after:to-purple-500 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
            >
              Apps
            </a>
          </li>
          <li>
            <a
              href="#"
              className="relative hover:text-purple-600 font-medium after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-indigo-500 after:to-purple-500 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
            >
              Installation
            </a>
          </li>
        </ul>

        {/* Button */}
        <a
          target="blank"
          href="https://github.com/abu-tal-ha"
          className="hidden md:flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition"
        >
          <FaGithub size={18} />
          <span>Contribute</span>
        </a>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-sm">
          <ul className="flex flex-col items-center gap-4 py-4">
            <li>
              <a
                href="#"
                className="relative  text-purple-600 font-medium after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-indigo-500 after:to-purple-500 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative hover:text-purple-600 font-medium after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-indigo-500 after:to-purple-500 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
              >
                Apps
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative hover:text-purple-600 font-medium after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-indigo-500 after:to-purple-500 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
              >
                Installation
              </a>
            </li>
            <li>
              <a
                target="blank"
                href="https://github.com/abu-tal-ha"
                className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition"
              >
                <FaGithub size={18} />
                <span>Contribute</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
