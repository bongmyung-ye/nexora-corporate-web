import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import en from "./locales/en";
import ja from "./locales/ja";
import ko from "./locales/ko";

export const supportedLanguages = ["ko", "en", "ja"] as const;

export type SupportedLanguage =
    (typeof supportedLanguages)[number];

function resolveLanguage(language?: string): SupportedLanguage {
    const normalizedLanguage = language?.split("-")[0];

    if (normalizedLanguage === "ko") {
        return "ko";
    }

    if (normalizedLanguage === "ja") {
        return "ja";
    }

    return "en";
}

function updateDocumentLanguage(language?: string) {
    document.documentElement.lang = resolveLanguage(language);
}

i18n.on("languageChanged", updateDocumentLanguage);

void i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            ko: {
                translation: ko,
            },
            en: {
                translation: en,
            },
            ja: {
                translation: ja,
            },
        },
        fallbackLng: "en",
        supportedLngs: supportedLanguages,
        nonExplicitSupportedLngs: true,
        load: "languageOnly",
        detection: {
            order: ["localStorage", "navigator"],
            caches: ["localStorage"],
            lookupLocalStorage: "nexora-language",
        },
        interpolation: {
            escapeValue: false,
        },
        returnNull: false,
    })
    .then(() => {
        updateDocumentLanguage(
            i18n.resolvedLanguage ?? i18n.language,
        );
    });

export default i18n;