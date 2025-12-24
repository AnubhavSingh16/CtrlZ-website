import React, { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const timeoutRef = useRef(null);

  const location = useLocation();
  const isUiPage = location.pathname === "/ui-development";
  const isHomePage = location.pathname === "/";

  /* ===== DESKTOP DROPDOWN ===== */
  const handleEnter = () => {
    clearTimeout(timeoutRef.current);
    setOpenDropdown(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(false);
    }, 150);
  };

  return (
    <nav
      className={`navbar-container ${
        isUiPage ? "text-black" : "text-white"
      }`}
    >
      <div className="navbar-inner">
        {/* LOGO */}
        <div className="nav-logo">
          <span className="logo-icon">CtrlZs</span>
        </div>

        {/* ===== DESKTOP LINKS ===== */}
        <div
          className={`nav-links ${
            isUiPage ? "nav-links-ui" : ""
          } hidden md:flex`}
        >
          <Link to="/">Home</Link>

          {/* SERVICES (DESKTOP) */}
          <div
            className="relative"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          >
            <button className="cursor-pointer flex items-center gap-1">
              Services ▾
            </button>

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
              <Link to="/ai-marketing" className="dropdown-item">
                AI Marketing
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

        {/* CONTACT BUTTON (DESKTOP) */}
        <button
          className={`contact-btn hidden md:block ${
            isUiPage ? "contact-btn-ui" : ""
          }`}
        >
          {isHomePage ? "Contact" : "Let’s Connect"}
        </button>

        {/* ===== HAMBURGER (MOBILE) ===== */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* ===== MOBILE MENU ===== */}
      {mobileMenuOpen && (
        <div className="md:hidden mobile-menu">
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>

          {/* SERVICES (MOBILE CLICK) */}
          <button
            className="mobile-dropdown-btn"
            onClick={() => setOpenDropdown(!openDropdown)}
          >
            Services ▾
          </button>

          {openDropdown && (
            <div className="mobile-dropdown">
              <Link to="/web-development">Web Development</Link>
              <Link to="/ui-development">UI Development</Link>
              <Link to="/video-editing">Video Editing</Link>
              <Link to="/ai-marketing">AI Marketing</Link>
              <Link to="/logo-design">Logo Design</Link>
            </div>
          )}

          <Link to="/portfolio">Portfolio</Link>
          <Link to="/about">About</Link>
          <Link to="/blogs">Blogs</Link>

          <button
            className={`contact-btn w-full mt-4 ${
              isUiPage ? "contact-btn-ui" : ""
            }`}
          >
            {isHomePage ? "Contact" : "Let’s Connect"}
          </button>
        </div>
      )}
    </nav>
  );
}
