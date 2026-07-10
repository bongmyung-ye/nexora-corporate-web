import { useEffect } from "react";

export function useScrollReveal() {
    useEffect(() => {
        const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const target = entry.target as HTMLElement;

                    if (entry.isIntersecting) {
                        target.classList.add("is-visible");
                        observer.unobserve(target);
                    }
                });
            },
            {
                threshold: 0.16,
                rootMargin: "0px 0px -80px 0px",
            },
        );

        elements.forEach((element) => observer.observe(element));

        return () => {
            observer.disconnect();
        };
    }, []);
}