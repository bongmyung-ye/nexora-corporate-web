import {
    type CSSProperties,
    useCallback,
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
} from "react";
import { navigationItems } from "../data/site";
import { useHeaderNavigation } from "../hooks/useHeaderNavigation";
import { ThemeToggle } from "./ThemeToggle";

const navigationSectionIds = navigationItems.map((item) =>
    item.href.replace(/^#/, ""),
);

interface IndicatorPosition {
    x: number;
    width: number;
    visible: boolean;
}

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [indicator, setIndicator] = useState<IndicatorPosition>({
        x: 0,
        width: 0,
        visible: false,
    });

    const navRef = useRef<HTMLElement | null>(null);
    const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>(
        {},
    );

    const { isScrolled, activeSection } = useHeaderNavigation(
        navigationSectionIds,
    );

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const updateIndicator = useCallback(() => {
        const nav = navRef.current;
        const activeLink = linkRefs.current[activeSection];

        if (!nav || !activeLink) {
            setIndicator((current) => ({
                ...current,
                visible: false,
            }));
            return;
        }

        const navRect = nav.getBoundingClientRect();
        const linkRect = activeLink.getBoundingClientRect();

        setIndicator({
            x: linkRect.left - navRect.left,
            width: linkRect.width,
            visible: true,
        });
    }, [activeSection]);

    useLayoutEffect(() => {
        const animationFrame =
            window.requestAnimationFrame(updateIndicator);

        const resizeObserver = new ResizeObserver(updateIndicator);

        if (navRef.current) {
            resizeObserver.observe(navRef.current);
        }

        window.addEventListener("resize", updateIndicator);

        return () => {
            window.cancelAnimationFrame(animationFrame);
            resizeObserver.disconnect();
            window.removeEventListener("resize", updateIndicator);
        };
    }, [isMenuOpen, isScrolled, updateIndicator]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                closeMenu();
            }
        };

        const handleDesktopResize = () => {
            if (window.innerWidth > 900) {
                closeMenu();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("resize", handleDesktopResize);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("resize", handleDesktopResize);
        };
    }, []);

    const navigationStyle = {
        "--nav-pill-x": `${indicator.x}px`,
        "--nav-pill-width": `${indicator.width}px`,
        "--nav-pill-opacity": indicator.visible ? "1" : "0",
    } as CSSProperties;

    return (
        <header
            className={`site-header ${isScrolled ? "is-scrolled" : "is-at-top"
                }`}
        >
            <div className="header-shell">
                <div className="header-inner">
                    <a className="brand" href="#company" onClick={closeMenu}>
                        Nexora
                    </a>

                    <nav
                        ref={navRef}
                        id="main-navigation"
                        className={`desktop-nav ${isMenuOpen ? "is-open" : ""
                            }`}
                        style={navigationStyle}
                        aria-label="Main navigation"
                    >
                        <span className="nav-active-pill" aria-hidden="true" />

                        {navigationItems.map((item) => {
                            const sectionId = item.href.replace(/^#/, "");
                            const isActive = activeSection === sectionId;

                            return (
                                <a
                                    ref={(element) => {
                                        linkRefs.current[sectionId] = element;
                                    }}
                                    key={item.href}
                                    className={isActive ? "is-active" : undefined}
                                    href={item.href}
                                    aria-current={isActive ? "page" : undefined}
                                    onClick={closeMenu}
                                >
                                    {item.label}
                                </a>
                            );
                        })}
                    </nav>

                    <div className="header-tools">
                        <ThemeToggle />

                        <a
                            className="header-action"
                            href="#contact"
                            onClick={closeMenu}
                        >
                            Contact
                        </a>

                        <button
                            className="menu-button"
                            type="button"
                            aria-label={
                                isMenuOpen
                                    ? "Close navigation menu"
                                    : "Open navigation menu"
                            }
                            aria-controls="main-navigation"
                            aria-expanded={isMenuOpen}
                            onClick={() =>
                                setIsMenuOpen((currentState) => !currentState)
                            }
                        >
                            <span />
                            <span />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}