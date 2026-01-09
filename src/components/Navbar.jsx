import React, { useState, useRef } from "react";
import { Link, Navigate, useLocation,  useNavigate  } from "react-router-dom";
import logoNav from "../assets/logoNav.png";

export default function Navbar({ onContactClick }) {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const timeoutRef = useRef(null);

    const navigate = useNavigate();


  const location = useLocation();
  const isUiPage = location.pathname === "/ui-development";
  const isHomePage = location.pathname === "/";

  const closeDropdown = () => {
    setOpenDropdown(false);
  };

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
      className={`navbar-container ${isUiPage ? "text-black" : "text-white"}`}
    >
      <div className="navbar-inner">
        {/* LOGO */}
        <div className="nav-logo flex items-center">
          <img
            src={logoNav}
            onClick={() => navigate("/")}
            alt="CtrlZs"
            className="h-12 w-auto object-contain drop-shadow-[0_0_12px_rgba(0,0,0,2)]"
          />
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
            <button className="cursor-pointer flex items-center">
              Services ▾
            </button>

            <div className={`dropdown-menu ${openDropdown ? "show" : ""}`}>
              <Link
                to="/web-development"
                className="dropdown-item"
                onClick={closeDropdown}
              >
                Web Development
              </Link>
              <Link
                to="/ui-development"
                className="dropdown-item"
                onClick={closeDropdown}
              >
                UI Development
              </Link>
              <Link
                to="/video-editing"
                className="dropdown-item"
                onClick={closeDropdown}
              >
                Video Editing
              </Link>
              <Link
                to="/ai-marketing"
                className="dropdown-item"
                onClick={closeDropdown}
              >
                AI Marketing
              </Link>
              <Link
                to="/graphic-design"
                className="dropdown-item"
                onClick={closeDropdown}
              >
                Graphic Design
              </Link>
            </div>
          </div>

          <Link to="/portfolio">Portfolio</Link>
          <Link to="/about">About</Link>
          <Link to="/blogs">Blogs</Link>
        </div>

        {/* CONTACT BUTTON (DESKTOP) */}
        <button
          onClick={onContactClick}
          className={`contact-btn hidden md:block ${
            isUiPage ? "contact-btn-ui" : ""
          }`}
        >
          {isHomePage ? "Contact" : "Let’s Connect"}
        </button>

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
              <Link to="/graphic-design">Graphic Design</Link>
            </div>
          )}

          <Link to="/portfolio">Portfolio</Link>
          <Link to="/about">About</Link>
          <Link to="/blogs">Blogs</Link>

          <button
            onClick={() => {
              onContactClick();
              setMobileMenuOpen(false);
            }}
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
