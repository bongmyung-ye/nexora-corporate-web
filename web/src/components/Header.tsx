import { useState } from "react";
import { navigationItems } from "../data/site";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="site-header">
            <div className="header-inner">
                <a className="brand" href="/" onClick={closeMenu}>
                    Nexora
                </a>

                <button
                    className="menu-button"
                    type="button"
                    aria-label="Toggle navigation menu"
                    aria-controls="main-navigation"
                    aria-expanded={isMenuOpen}
                    onClick={() => setIsMenuOpen((current) => !current)}
                >
                    <span />
                    <span />
                </button>

                <nav
                    id="main-navigation"
                    className={`desktop-nav ${isMenuOpen ? "is-open" : ""}`}
                    aria-label="Main navigation"
                >
                    {navigationItems.map((item) => (
                        <a key={item.href} href={item.href} onClick={closeMenu}>
                            {item.label}
                        </a>
                    ))}
                </nav>

                <a className="header-action" href="#contact" onClick={closeMenu}>
                    Contact
                </a>
            </div>
        </header>
    );
}