import {
    useEffect,
    useRef,
    useState,
} from "react";
import { useTranslation } from "react-i18next";
import type { SupportedLanguage } from "../i18n";

const languageOptions = [
    {
        code: "ko",
        shortLabel: "KO",
        name: "한국어",
    },
    {
        code: "en",
        shortLabel: "EN",
        name: "English",
    },
    {
        code: "ja",
        shortLabel: "JA",
        name: "日本語",
    },
] satisfies readonly {
    code: SupportedLanguage;
    shortLabel: string;
    name: string;
}[];

function resolveLanguage(language?: string): SupportedLanguage {
    if (language?.startsWith("ko")) {
        return "ko";
    }

    if (language?.startsWith("ja")) {
        return "ja";
    }

    return "en";
}

export function LanguageSelector() {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const selectorRef = useRef<HTMLDivElement | null>(null);

    const currentLanguage = resolveLanguage(
        i18n.resolvedLanguage ?? i18n.language,
    );

    const currentOption =
        languageOptions.find(
            (option) => option.code === currentLanguage,
        ) ?? languageOptions[1];

    useEffect(() => {
        const handlePointerDown = (event: PointerEvent) => {
            const target = event.target;

            if (
                target instanceof Node &&
                !selectorRef.current?.contains(target)
            ) {
                setIsOpen(false);
            }
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        };

        document.addEventListener("pointerdown", handlePointerDown);
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener(
                "pointerdown",
                handlePointerDown,
            );
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    const changeLanguage = async (
        language: SupportedLanguage,
    ) => {
        await i18n.changeLanguage(language);
        setIsOpen(false);
    };

    return (
        <div
            ref={selectorRef}
            className={`language-selector ${isOpen ? "is-open" : ""
                }`}
        >
            <button
                className="language-trigger"
                type="button"
                aria-label={t("language.current", {
                    language: currentOption.name,
                })}
                aria-haspopup="menu"
                aria-expanded={isOpen}
                onClick={() => {
                    setIsOpen((currentState) => !currentState);
                }}
            >
                <span>{currentOption.shortLabel}</span>
                <span
                    className="language-trigger-chevron"
                    aria-hidden="true"
                />
            </button>

            <div
                className="language-menu"
                role="menu"
                aria-label={t("language.selectorLabel")}
            >
                {languageOptions.map((option) => {
                    const isActive = option.code === currentLanguage;

                    return (
                        <button
                            key={option.code}
                            className={`language-option ${isActive ? "is-active" : ""
                                }`}
                            type="button"
                            role="menuitemradio"
                            aria-checked={isActive}
                            aria-label={t("language.changeTo", {
                                language: option.name,
                            })}
                            onClick={() => {
                                void changeLanguage(option.code);
                            }}
                        >
                            <span className="language-option-code">
                                {option.shortLabel}
                            </span>
                            <span className="language-option-name">
                                {option.name}
                            </span>
                            <span
                                className="language-option-check"
                                aria-hidden="true"
                            />
                        </button>
                    );
                })}
            </div>
        </div>
    );
}