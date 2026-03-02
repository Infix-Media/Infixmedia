import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FiSun,
  FiMoon,
  FiHome,
  FiGrid,
  FiInfo,
  FiBriefcase,
  FiMail,
} from "react-icons/fi";

const links = [
  { to: "/", label: "Home", icon: <FiHome /> },
  { to: "/services", label: "Services", icon: <FiGrid /> },
  { to: "/about", label: "About", icon: <FiInfo /> },
  { to: "/case-studies", label: "Cases", icon: <FiBriefcase /> },
  { to: "/contact", label: "Contact", icon: <FiMail /> },
];

function Navbar({ theme, setTheme }) {
  const isDark = theme === "dark";

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <NavLink to="/" className="brand">
          <span>
            INF<span className="logo-i">i</span>X
          </span>{" "}
          MEDIA
        </NavLink>

        <nav>
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    isActive ? "active nav-item" : "nav-item"
                  }
                >
                  {link.icon}
                  <span>{link.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <button
          type="button"
          id="navtheme"
          className="theme-toggle icon-toggle"
          onClick={() => setTheme(isDark ? "light" : "dark")}
          aria-label="Toggle theme"
        >
          {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
