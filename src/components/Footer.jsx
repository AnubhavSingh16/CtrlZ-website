import {
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden text-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-black" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-10">
        {/* TOP DIVIDER */}
        <div className="mb-14 border-t border-white" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* BRAND */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-5">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center font-bold">
                Z
              </div>
              <h2 className="text-xl font-semibold">Ctrl Zs</h2>
            </Link>

            <p className="text-gray-300 text-md leading-relaxed mb-6">
              AI-powered digital marketing agency crafting experiences that
              rank, convert, and scale globally.
            </p>

            <div className="flex gap-3">
              <IconWrap href="https://www.linkedin.com">
                <FaLinkedinIn />
              </IconWrap>
              <IconWrap href="https://www.instagram.com">
                <FaInstagram />
              </IconWrap>
              <IconWrap href="https://www.twitter.com">
                <FaTwitter />
              </IconWrap>
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-lg font-semibold tracking-widest mb-5">
              SERVICES
            </h3>
            <ul className="space-y-3 text-gray-300 text-md">
              <li>
                <Link
                  to="/web-development"
                  className="hover:text-white transition"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  to="/ui-development"
                  className="hover:text-white transition"
                >
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link to="/graphic-design" className="hover:text-white transition">
                  Graphic Design
                </Link>
              </li>
              <li>
                <Link
                  to="/video-editing"
                  className="hover:text-white transition"
                >
                  Video Editing
                </Link>
              </li>
              <li>
                <Link
                  to="/ai-marketing"
                  className="hover:text-white transition"
                >
                  AI Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-semibold tracking-widest mb-5">
              QUICK LINKS
            </h3>
            <ul className="space-y-3 text-gray-300 text-md">
              <li>
                <Link to="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:text-white transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-and-conditions"
                  className="hover:text-white transition"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* GET IN TOUCH */}
          <div>
            <h3 className="text-lg font-semibold tracking-widest mb-5">
              GET IN TOUCH
            </h3>

            <div className="flex items-center gap-3 text-gray-300 text-md mb-3">
              <FaEnvelope className="text-purple-400" />
              hello@ctrlzs.com
            </div>

            <p className="text-gray-300 text-md">Launching January 2026</p>
          </div>
        </div>

        {/* BOTTOM DIVIDER */}
        <div className="mt-14 border-t border-white/50" />

        {/* FOOTER BAR */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-3">
          <p>© 2025 Ctrl Zs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

/* ICON */
function IconWrap({ children, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        h-9 w-9 rounded-lg
        border border-white/10
        flex items-center justify-center
        text-gray-300
        hover:text-white hover:border-white/30
        transition
      "
    >
      {children}
    </a>
  );
}
