import { useEffect, useState } from "react";

const navItems = [
  ["About", "about"],
  ["Projects", "projects"],
  ["Resume", "resume"],
  ["Contact", "contact"],
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeMenu();
    };

    document.body.classList.add("menu-open");
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Sanah Tatla, home">
        ST
      </a>

      <button
        className="menu-button"
        type="button"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-controls="main-navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>

      <nav
        id="main-navigation"
        className={`site-nav ${menuOpen ? "site-nav--open" : ""}`}
        aria-label="Main navigation"
      >
        {navItems.map(([label, id]) => (
          <a href={`#${id}`} onClick={closeMenu} key={id}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
