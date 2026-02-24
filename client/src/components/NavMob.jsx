import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";

function Navbar({ theme, setTheme }) {
  const isDark = theme === "dark";

  return (
    <header className="mobile-topbar">
      <NavLink to="/" className="brand">
        <span>INFIX</span> MEDIA
      </NavLink>

      <button
        type="button"
        id="navtheme"
        className="theme-toggle icon-toggle"
        onClick={() => setTheme(isDark ? "light" : "dark")}
        aria-label="Toggle theme"
      >
        {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
      </button>
    </header>
  );
}

export default Navbar;
