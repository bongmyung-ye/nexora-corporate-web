import { useEffect } from "react";

export function useScrollProgress() {
    useEffect(() => {
        const updateScrollProgress = () => {
            const scrollTop = window.scrollY;
            const documentHeight =
                document.documentElement.scrollHeight - window.innerHeight;

            const progress = documentHeight > 0 ? scrollTop / documentHeight : 0;

            document.documentElement.style.setProperty(
                "--scroll-progress",
                String(progress),
            );
        };

        updateScrollProgress();

        window.addEventListener("scroll", updateScrollProgress, { passive: true });
        window.addEventListener("resize", updateScrollProgress);

        return () => {
            window.removeEventListener("scroll", updateScrollProgress);
            window.removeEventListener("resize", updateScrollProgress);
        };
    }, []);
}