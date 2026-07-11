import {
    useCallback,
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
} from "react";
import { useTranslation } from "react-i18next";
import { navigationItems } from "../data/site";
import { useHeaderNavigation } from "../hooks/useHeaderNavigation";
import { LanguageSelector } from "./LanguageSelector";
import { ThemeToggle } from "./ThemeToggle";

const trackedSectionIds = navigationItems.flatMap((item) => [
    ...item.sectionIds,
]);

interface IndicatorTarget {
    x: number;
    width: number;
}

export function Header() {
    const { t, i18n } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isIndicatorVisible, setIsIndicatorVisible] =
        useState(false);

    const navRef = useRef<HTMLElement | null>(null);
    const indicatorRef = useRef<HTMLSpanElement | null>(null);
    const indicatorAnimationRef = useRef<Animation | null>(null);
    const indicatorFrameRef = useRef<number | null>(null);
    const indicatorVisibleRef = useRef(false);
    const previousActiveNavigationIdRef = useRef<string | null>(
        null,
    );

    const linkRefs = useRef<
        Record<string, HTMLAnchorElement | null>
    >({});

    const { isScrolled, activeSection } =
        useHeaderNavigation(trackedSectionIds);

    const activeNavigationItem = navigationItems.find((item) =>
        item.sectionIds.some(
            (sectionId) => sectionId === activeSection,
        ),
    );

    const activeNavigationId =
        activeNavigationItem?.id ?? navigationItems[0].id;

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const updateIndicator = useCallback(() => {
        if (indicatorFrameRef.current !== null) {
            window.cancelAnimationFrame(
                indicatorFrameRef.current,
            );
        }

        indicatorFrameRef.current =
            window.requestAnimationFrame(() => {
                const nav = navRef.current;
                const indicatorElement = indicatorRef.current;
                const activeLink =
                    linkRefs.current[activeNavigationId];

                const activeNavigationChanged =
                    previousActiveNavigationIdRef.current !== null &&
                    previousActiveNavigationIdRef.current !==
                    activeNavigationId;

                previousActiveNavigationIdRef.current =
                    activeNavigationId;

                if (
                    !nav ||
                    !indicatorElement ||
                    !activeLink ||
                    window.innerWidth <= 900
                ) {
                    indicatorAnimationRef.current?.cancel();
                    indicatorAnimationRef.current = null;

                    indicatorElement?.classList.remove("is-moving");

                    if (indicatorElement) {
                        delete indicatorElement.dataset.direction;
                    }

                    indicatorVisibleRef.current = false;
                    setIsIndicatorVisible(false);
                    return;
                }

                const navRect = nav.getBoundingClientRect();
                const linkRect = activeLink.getBoundingClientRect();

                if (linkRect.width <= 0 || navRect.width <= 0) {
                    indicatorVisibleRef.current = false;
                    setIsIndicatorVisible(false);
                    return;
                }

                const target: IndicatorTarget = {
                    x: linkRect.left - navRect.left,
                    width: linkRect.width,
                };

                const indicatorRect =
                    indicatorElement.getBoundingClientRect();

                const hasCurrentPosition =
                    indicatorVisibleRef.current &&
                    indicatorRect.width > 0;

                indicatorVisibleRef.current = true;
                setIsIndicatorVisible(true);

                const applyTarget = () => {
                    indicatorElement.style.width =
                        `${target.width}px`;
                    indicatorElement.style.transform =
                        `translate3d(${target.x}px, -50%, 0)`;
                };

                const finishAnimation = (
                    animation: Animation,
                ) => {
                    if (
                        indicatorAnimationRef.current !== animation
                    ) {
                        return;
                    }

                    applyTarget();
                    indicatorElement.classList.remove("is-moving");
                    delete indicatorElement.dataset.direction;

                    indicatorAnimationRef.current = null;
                    animation.cancel();
                };

                const reducedMotion = window.matchMedia(
                    "(prefers-reduced-motion: reduce)",
                ).matches;

                if (!hasCurrentPosition || reducedMotion) {
                    indicatorAnimationRef.current?.cancel();
                    indicatorAnimationRef.current = null;

                    indicatorElement.classList.remove("is-moving");
                    delete indicatorElement.dataset.direction;

                    applyTarget();
                    return;
                }

                const currentX =
                    indicatorRect.left - navRect.left;
                const currentWidth = indicatorRect.width;

                const positionIsUnchanged =
                    Math.abs(currentX - target.x) < 0.5 &&
                    Math.abs(currentWidth - target.width) < 0.5;

                if (positionIsUnchanged) {
                    applyTarget();
                    return;
                }

                indicatorAnimationRef.current?.cancel();

                const currentCenter =
                    currentX + currentWidth / 2;
                const targetCenter =
                    target.x + target.width / 2;

                if (!activeNavigationChanged) {
                    const animation = indicatorElement.animate(
                        [
                            {
                                width: `${currentWidth}px`,
                                transform: `translate3d(${currentX}px, -50%, 0)`,
                            },
                            {
                                width: `${target.width}px`,
                                transform: `translate3d(${target.x}px, -50%, 0)`,
                            },
                        ],
                        {
                            duration: 260,
                            easing:
                                "cubic-bezier(0.22, 1, 0.36, 1)",
                            fill: "both",
                        },
                    );

                    indicatorAnimationRef.current = animation;

                    animation.onfinish = () => {
                        finishAnimation(animation);
                    };

                    return;
                }

                const direction =
                    targetCenter >= currentCenter
                        ? "right"
                        : "left";

                const stretchPadding = 5;
                const stretchStart =
                    Math.min(currentX, target.x) -
                    (direction === "left"
                        ? stretchPadding
                        : 0);

                const stretchEnd =
                    Math.max(
                        currentX + currentWidth,
                        target.x + target.width,
                    ) +
                    (direction === "right"
                        ? stretchPadding
                        : 0);

                const stretchWidth =
                    stretchEnd - stretchStart;

                indicatorElement.classList.remove("is-moving");
                void indicatorElement.offsetWidth;

                indicatorElement.dataset.direction = direction;
                indicatorElement.classList.add("is-moving");

                const animation = indicatorElement.animate(
                    [
                        {
                            width: `${currentWidth}px`,
                            transform: `translate3d(${currentX}px, -50%, 0)`,
                            offset: 0,
                            easing:
                                "cubic-bezier(0.22, 1, 0.36, 1)",
                        },
                        {
                            width: `${stretchWidth}px`,
                            transform: `translate3d(${stretchStart}px, -50%, 0)`,
                            offset: 0.54,
                            easing:
                                "cubic-bezier(0.65, 0, 0.35, 1)",
                        },
                        {
                            width: `${target.width}px`,
                            transform: `translate3d(${target.x}px, -50%, 0)`,
                            offset: 1,
                        },
                    ],
                    {
                        duration: 460,
                        fill: "both",
                    },
                );

                indicatorAnimationRef.current = animation;

                animation.onfinish = () => {
                    finishAnimation(animation);
                };
            });
    }, [activeNavigationId]);

    useLayoutEffect(() => {
        updateIndicator();

        const resizeObserver = new ResizeObserver(() => {
            updateIndicator();
        });

        if (navRef.current) {
            resizeObserver.observe(navRef.current);
        }

        window.addEventListener("resize", updateIndicator);

        return () => {
            if (indicatorFrameRef.current !== null) {
                window.cancelAnimationFrame(
                    indicatorFrameRef.current,
                );
            }

            resizeObserver.disconnect();
            window.removeEventListener(
                "resize",
                updateIndicator,
            );
        };
    }, [
        i18n.resolvedLanguage,
        isMenuOpen,
        isScrolled,
        updateIndicator,
    ]);

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
        window.addEventListener(
            "resize",
            handleDesktopResize,
        );

        return () => {
            window.removeEventListener(
                "keydown",
                handleKeyDown,
            );
            window.removeEventListener(
                "resize",
                handleDesktopResize,
            );
        };
    }, []);

    useEffect(() => {
        return () => {
            indicatorAnimationRef.current?.cancel();

            if (indicatorFrameRef.current !== null) {
                window.cancelAnimationFrame(
                    indicatorFrameRef.current,
                );
            }
        };
    }, []);

    return (
        <header
            className={`site-header ${isScrolled ? "is-scrolled" : "is-at-top"
                }`}
        >
            <div className="header-shell">
                <div className="header-inner">
                    <a
                        className="brand"
                        href="#company"
                        onClick={closeMenu}
                    >
                        Nexora
                    </a>

                    <nav
                        ref={navRef}
                        id="main-navigation"
                        className={`desktop-nav ${isMenuOpen ? "is-open" : ""
                            }`}
                        aria-label={t("navigation.mainLabel")}
                    >
                        <span
                            ref={indicatorRef}
                            className={`nav-active-indicator ${isIndicatorVisible ? "is-visible" : ""
                                }`}
                            aria-hidden="true"
                        />

                        {navigationItems.map((item) => {
                            const isActive =
                                activeNavigationId === item.id;

                            return (
                                <a
                                    ref={(element) => {
                                        linkRefs.current[item.id] = element;
                                    }}
                                    key={item.id}
                                    className={
                                        isActive ? "is-active" : undefined
                                    }
                                    href={item.href}
                                    aria-current={
                                        isActive ? "location" : undefined
                                    }
                                    onClick={closeMenu}
                                >
                                    {t(`navigation.items.${item.id}`)}
                                </a>
                            );
                        })}
                    </nav>

                    <div className="header-tools">
                        <LanguageSelector />
                        <ThemeToggle />

                        <a
                            className="header-action"
                            href="#contact"
                            onClick={closeMenu}
                        >
                            {t("navigation.contact")}
                        </a>

                        <button
                            className="menu-button"
                            type="button"
                            aria-label={
                                isMenuOpen
                                    ? t("navigation.closeMenu")
                                    : t("navigation.openMenu")
                            }
                            aria-controls="main-navigation"
                            aria-expanded={isMenuOpen}
                            onClick={() => {
                                setIsMenuOpen(
                                    (currentState) => !currentState,
                                );
                            }}
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