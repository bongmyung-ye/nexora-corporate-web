import { navigationItems } from "../data/site";

export function Header() {
    return (
        <header className="site-header">
            <a className="brand" href="/">
                Nexora
            </a>

            <nav className="desktop-nav" aria-label="Main navigation">
                {navigationItems.map((item) => (
                    <a key={item.href} href={item.href}>
                        {item.label}
                    </a>
                ))}
            </nav>

            <a className="header-action" href="#contact">
                Contact
            </a>
        </header>
    );
}