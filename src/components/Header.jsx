import { useState } from "react";

const navItems = [
  ["About", "about"],
  ["Projects", "projects"],
  ["Resume", "resume"],
  ["Contact", "contact"],
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Sanah Tatla, home">
        ST<span>.</span>
      </a>

      <button
        className="menu-button"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>

      <nav className={`site-nav ${menuOpen ? "site-nav--open" : ""}`} aria-label="Main navigation">
        {navItems.map(([label, id]) => (
          <a href={`#${id}`} onClick={closeMenu} key={id}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
