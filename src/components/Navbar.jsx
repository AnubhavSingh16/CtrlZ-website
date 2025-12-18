import React, { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const timeoutRef = useRef(null);

  const handleEnter = () => {
    clearTimeout(timeoutRef.current);
    setOpenDropdown(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(false);
    }, 150); // fade delay
  };

  const location = useLocation();
  const isUiPage = location.pathname === "/ui-development";
  const isHomePage = location.pathname === "/";

  return (
    <div className="">
      <nav
        className={`navbar-container ${isUiPage ? "text-black" : "text-white"}`}
      >
        <div className="navbar-inner">
          {/* Logo */}
          <div className="nav-logo">
            <span className="logo-icon">CtrlZs</span>
          </div>

          {/* Links */}
          <div className={`nav-links ${isUiPage ? "nav-links-ui" : ""}`}>
            <Link to="/">Home</Link>

            {/* SERVICES DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
            >
              <button className="cursor-pointer flex items-center gap-1">
                Services ▾
              </button>

              {/* DROPDOWN MENU */}
              <div className={`dropdown-menu ${openDropdown ? "show" : ""}`}>
                <Link to="/web-development" className="dropdown-item">
                  Web Development
                </Link>
                <Link to="/ui-development" className="dropdown-item">
                  UI Development
                </Link>
                <Link to="/video-editing" className="dropdown-item">
                  Video Editing
                </Link>
                <Link to="/logo-design" className="dropdown-item">
                  Logo Design
                </Link>
              </div>
            </div>

            <Link to="/portfolio">Portfolio</Link>
            <Link to="/about">About</Link>
            <Link to="/blogs">Blogs</Link>
          </div>

          {/* Contact button */}
          <button className={`contact-btn ${isUiPage ? "contact-btn-ui" : ""}`}>
            {isHomePage ? "Contact" : "Let’s Connect"}
          </button>
        </div>
      </nav>
    </div>
  );
}
