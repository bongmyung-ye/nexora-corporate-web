export const THEME_STORAGE_KEY = "nexora-theme";

export type Theme = "light" | "dark";

const themeColors: Record<Theme, string> = {
    light: "#f8fafc",
    dark: "#070b14",
};

export function isTheme(value: unknown): value is Theme {
    return value === "light" || value === "dark";
}

export function readStoredTheme(): Theme | null {
    try {
        const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

        return isTheme(storedTheme) ? storedTheme : null;
    } catch {
        return null;
    }
}

export function getSystemTheme(): Theme {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
}

export function resolveInitialTheme(): Theme {
    const documentTheme = document.documentElement.dataset.theme;

    if (isTheme(documentTheme)) {
        return documentTheme;
    }

    return readStoredTheme() ?? getSystemTheme();
}

export function applyTheme(theme: Theme) {
    const root = document.documentElement;
    const themeColorMeta = document.querySelector<HTMLMetaElement>(
        'meta[name="theme-color"]',
    );

    root.dataset.theme = theme;
    root.style.colorScheme = theme;

    if (themeColorMeta) {
        themeColorMeta.content = themeColors[theme];
    }
}

export function storeTheme(theme: Theme) {
    try {
        window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
        // The selected theme still works for the current session.
    }
}