import { useCallback, useEffect, useRef, useState } from "react";
import {
    applyTheme,
    readStoredTheme,
    resolveInitialTheme,
    storeTheme,
    type Theme,
} from "../lib/theme";

export function useTheme() {
    const [theme, setThemeState] = useState<Theme>(() => resolveInitialTheme());
    const transitionTimer = useRef<number | null>(null);

    useEffect(() => {
        applyTheme(theme);
    }, [theme]);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

        const handleSystemThemeChange = (event: MediaQueryListEvent) => {
            if (readStoredTheme()) {
                return;
            }

            const nextTheme: Theme = event.matches ? "dark" : "light";

            applyTheme(nextTheme);
            setThemeState(nextTheme);
        };

        mediaQuery.addEventListener("change", handleSystemThemeChange);

        return () => {
            mediaQuery.removeEventListener("change", handleSystemThemeChange);
        };
    }, []);

    useEffect(() => {
        return () => {
            if (transitionTimer.current !== null) {
                window.clearTimeout(transitionTimer.current);
            }
        };
    }, []);

    const selectTheme = useCallback((nextTheme: Theme) => {
        const root = document.documentElement;

        if (transitionTimer.current !== null) {
            window.clearTimeout(transitionTimer.current);
        }

        root.classList.add("is-theme-changing");

        applyTheme(nextTheme);
        storeTheme(nextTheme);
        setThemeState(nextTheme);

        transitionTimer.current = window.setTimeout(() => {
            root.classList.remove("is-theme-changing");
            transitionTimer.current = null;
        }, 320);
    }, []);

    const toggleTheme = useCallback(() => {
        selectTheme(theme === "dark" ? "light" : "dark");
    }, [selectTheme, theme]);

    return {
        theme,
        toggleTheme,
    };
}