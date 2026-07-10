import { useEffect, useState } from "react";

interface HeaderNavigationState {
    isScrolled: boolean;
    activeSection: string;
}

export function useHeaderNavigation(
    sectionIds: readonly string[],
): HeaderNavigationState {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState(
        sectionIds.at(0) ?? "",
    );

    useEffect(() => {
        let animationFrame = 0;

        const updateNavigationState = () => {
            window.cancelAnimationFrame(animationFrame);

            animationFrame = window.requestAnimationFrame(() => {
                setIsScrolled(window.scrollY > 28);

                if (sectionIds.length === 0) {
                    return;
                }

                const documentBottom =
                    window.scrollY + window.innerHeight >=
                    document.documentElement.scrollHeight - 8;

                if (documentBottom) {
                    const lastSection = sectionIds.at(-1);

                    if (lastSection) {
                        setActiveSection(lastSection);
                    }

                    return;
                }

                const activationPoint = Math.min(
                    window.innerHeight * 0.34,
                    320,
                );

                let nextSection = sectionIds[0];
                let closestDistance = Number.POSITIVE_INFINITY;

                for (const sectionId of sectionIds) {
                    const section = document.getElementById(sectionId);

                    if (!section) {
                        continue;
                    }

                    const rect = section.getBoundingClientRect();

                    if (
                        rect.top <= activationPoint &&
                        rect.bottom > activationPoint
                    ) {
                        nextSection = sectionId;
                        break;
                    }

                    const distance = Math.abs(rect.top - activationPoint);

                    if (distance < closestDistance) {
                        closestDistance = distance;
                        nextSection = sectionId;
                    }
                }

                setActiveSection((currentSection) =>
                    currentSection === nextSection
                        ? currentSection
                        : nextSection,
                );
            });
        };

        updateNavigationState();

        window.addEventListener("scroll", updateNavigationState, {
            passive: true,
        });
        window.addEventListener("resize", updateNavigationState);

        return () => {
            window.cancelAnimationFrame(animationFrame);
            window.removeEventListener("scroll", updateNavigationState);
            window.removeEventListener("resize", updateNavigationState);
        };
    }, [sectionIds]);

    return {
        isScrolled,
        activeSection,
    };
}