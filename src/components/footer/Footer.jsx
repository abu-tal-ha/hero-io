import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaArrowUp,
  FaGithub,
} from "react-icons/fa";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="relative bg-[#031B2D]  text-gray-300 pt-12 pb-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img
              src="https://i.ibb.co.com/BVhbL6fW/logo.png"
              alt="Hero.io Logo"
              className="w-8 h-8 rounded"
            />
            <h2 className="font-bold text-xl text-white">HERO.IO</h2>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            We build smart, scalable, and user-focused digital products that
            empower millions across the globe.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-purple-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/apps" className="hover:text-purple-400 transition">
                Apps
              </Link>
            </li>
            <li>
              <Link
                to="/installation"
                className="hover:text-purple-400 transition"
              >
                Installation
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-purple-400 transition">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400 transition">
                Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400 transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400 transition">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Social Links</h3>
          <div className="flex  gap-4">
            {[FaFacebookF, FaLinkedinIn, FaTwitter, FaGithub].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0E2C45] hover:bg-gradient-to-r from-indigo-500 to-purple-500 text-white transition"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700/40 my-6"></div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 text-center ">
        <p className="text-sm text-gray-400">
          Copyright © {new Date().getFullYear()} HERO.IO — All right reserved.
        </p>
      </div>

      {/* Scroll To Top */}
      {/* <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute right-6 bottom-6 bg-gradient-to-r from-purple-500 to-indigo-500 p-3 rounded-full shadow-lg hover:scale-105 transition"
      >
        <FaArrowUp className="text-white" />
      </button> */}
    </footer>
  );
}
