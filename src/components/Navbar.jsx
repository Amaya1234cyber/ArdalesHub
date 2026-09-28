import { useState } from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Journal", to: "/blog" },
  { label: "Categories", to: "/categories" },
  { label: "Author", to: "/author" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="navbar">
        {/* BRAND */}
        <NavLink to="/" className="brand" onClick={closeMenu}>
          <span className="brand-mark">A</span>

          <span className="brand-text">
            <strong>ArdalesHub</strong>
            <small>Plant & Wellbeing</small>
          </span>
        </NavLink>

        {/* DESKTOP NAVIGATION */}
        <div className="desktop-nav">
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* DESKTOP ACTIONS */}
        <div className="nav-actions">
          <NavLink to="/contact" className="nav-contact">
            Contact
          </NavLink>

          <NavLink to="/enquiry" className="nav-button">
            Start a Conversation
          </NavLink>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((current) => !current)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* MOBILE NAVIGATION */}
      <div className={`mobile-nav ${menuOpen ? "open" : ""}`}>
        <div className="mobile-nav-inner">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "mobile-nav-link active" : "mobile-nav-link"
              }
            >
              <span>{item.label}</span>
              <span>→</span>
            </NavLink>
          ))}

          <div className="mobile-nav-actions">
            <NavLink to="/contact" onClick={closeMenu}>
              Contact
            </NavLink>

            <NavLink
              to="/enquiry"
              onClick={closeMenu}
              className="mobile-cta"
            >
              Start a Conversation
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}