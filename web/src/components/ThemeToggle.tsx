import { useTheme } from "../hooks/useTheme";

function SunIcon() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="3.8" />
            <path d="M12 2.5v2.2M12 19.3v2.2M4.7 12H2.5M21.5 12h-2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M18.7 5.3l-1.6 1.6M6.9 17.1l-1.6 1.6" />
        </svg>
    );
}

function MoonIcon() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.4 15.1A8.5 8.5 0 0 1 8.9 3.6a8.7 8.7 0 1 0 11.5 11.5Z" />
        </svg>
    );
}

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === "dark";

    return (
        <button
            className="theme-toggle"
            type="button"
            data-theme={theme}
            aria-label={isDark ? "라이트 모드로 전환" : "다크 모드로 전환"}
            title={isDark ? "라이트 모드로 전환" : "다크 모드로 전환"}
            onClick={toggleTheme}
        >
            <span className="theme-toggle-symbol" key={theme}>
                {isDark ? <MoonIcon /> : <SunIcon />}
            </span>
        </button>
    );
}