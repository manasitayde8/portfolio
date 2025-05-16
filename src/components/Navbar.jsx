import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  const { pathname } = useLocation();
  const [isMobile, setIsMobile] = useState(false); // Mobile menu state

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  const closeMenu = () => {
    setIsMobile(false); // Close the menu on link click (optional but useful UX)
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">Manasi Tayde</h1>

        <div className={`navbar-links ${isMobile ? 'mobile' : ''}`}>
          <ul>
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`navbar-link ${pathname === item.path ? 'navbar-link-active' : ''}`}
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className="navbar-icon">{isMobile ? '✖' : '☰'}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
