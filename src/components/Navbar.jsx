import React from "react";

export default function Navbar() {
  return (
    <div className="mb-20">
    <nav className="navbar-container">
      <div className="navbar-inner">
        {/* Logo */}
        <div className="nav-logo">
          <span className="logo-icon">CtrlZs</span>
        </div>

        {/* Links */}
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Services ▾</a>
          <a href="#">Portfolio</a>
          <a href="#">About</a>
          <a href="#">Blogs</a>
        </div>

        {/* Contact Button */}
        <button className="contact-btn">Contact</button>
      </div>
    </nav>
    </div>
  );
}
