import React, { useState, useEffect } from "react";
import { FaBars, FaGithub, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import LoadingOverlay from "./LoadingOverlay";
import { GoHome } from "react-icons/go";
import { FaAppStore } from "react-icons/fa";
import { MdInstallDesktop } from "react-icons/md";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  // Show loading on route change
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 200);
    return () => clearTimeout(timer);
  }, [location]);

  // Active route checker
  const isActive = (path) => location.pathname === path;

  return (
    <>
      {loading && <LoadingOverlay />}

      <nav className="bg-white shadow-sm fixed w-full top-0 left-0 z-50">
        <div className="container mx-auto px-4 md:px-8 py-3 flex justify-between items-center">
          {/* Logo */}
          <div>
            <Link to="/" className="flex items-center gap-2">
              <img src="/src/assets/logo.png" alt="logo" className="w-8 h-8" />
              <h1 className="font-bold text-lg text-purple-600">HERO.IO</h1>
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-6">
            <Link to="/">
              <li
                className={`relative flex items-center gap-2 font-medium transition-all duration-300 
                  ${
                    isActive("/")
                      ? "text-purple-600 after:w-full"
                      : "text-gray-700 hover:text-purple-600"
                  }
                  hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-[2px]
                  after:bg-gradient-to-r after:from-indigo-500 after:to-purple-500 after:left-0 after:-bottom-1
                  after:transition-all after:duration-300`}
              >
                <GoHome /> Home
              </li>
            </Link>

            <Link to="/apps">
              <li
                className={`relative  flex items-center gap-2 font-medium transition-all duration-300 
                  ${
                    isActive("/apps")
                      ? "text-purple-600 after:w-full"
                      : "text-gray-700 hover:text-purple-600"
                  }
                  hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-[2px]
                  after:bg-gradient-to-r after:from-indigo-500 after:to-purple-500 after:left-0 after:-bottom-1
                  after:transition-all after:duration-300`}
              >
                <FaAppStore /> Apps
              </li>
            </Link>

            <Link to="/installation">
              <li
                className={`relative font-medium flex items-center gap-2  transition-all duration-300 
                  ${
                    isActive("/installation")
                      ? "text-purple-600 after:w-full"
                      : "text-gray-700 hover:text-purple-600"
                  }
                  hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-[2px]
                  after:bg-gradient-to-r after:from-indigo-500 after:to-purple-500 after:left-0 after:-bottom-1
                  after:transition-all after:duration-300`}
              >
                <MdInstallDesktop /> Installation
              </li>
            </Link>
          </ul>

          {/* Button */}
          <a
            target="_blank"
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
              <Link to="/" onClick={() => setOpen(false)}>
                <li
                  className={`relative flex items-center gap-2 font-medium transition-all duration-300 
                    ${
                      isActive("/")
                        ? "text-purple-600 after:w-full"
                        : "text-gray-700 hover:text-purple-600"
                    }
                    hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-[2px]
                    after:bg-gradient-to-r after:from-indigo-500 after:to-purple-500 after:left-0 after:-bottom-1
                    after:transition-all after:duration-300`}
                >
                  <GoHome /> Home
                </li>
              </Link>

              <Link to="/apps" onClick={() => setOpen(false)}>
                <li
                  className={`relative flex items-center gap-2 font-medium transition-all duration-300 
                    ${
                      isActive("/apps")
                        ? "text-purple-600 after:w-full"
                        : "text-gray-700 hover:text-purple-600"
                    }
                    hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-[2px]
                    after:bg-gradient-to-r after:from-indigo-500 after:to-purple-500 after:left-0 after:-bottom-1
                    after:transition-all after:duration-300`}
                >
                  <FaAppStore /> Apps
                </li>
              </Link>

              <Link to="/installation" onClick={() => setOpen(false)}>
                <li
                  className={`relative flex items-center gap-2 font-medium transition-all duration-300 
                    ${
                      isActive("/installation")
                        ? "text-purple-600 after:w-full"
                        : "text-gray-700 hover:text-purple-600"
                    }
                    hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-[2px]
                    after:bg-gradient-to-r after:from-indigo-500 after:to-purple-500 after:left-0 after:-bottom-1
                    after:transition-all after:duration-300`}
                >
                  <MdInstallDesktop /> Installation
                </li>
              </Link>

              <li>
                <a
                  target="_blank"
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
    </>
  );
}
