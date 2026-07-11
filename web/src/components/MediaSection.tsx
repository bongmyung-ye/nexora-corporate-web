import { useTranslation } from "react-i18next";
import { pressItems, snsItems } from "../data/site";

const languageLocales = {
    ko: "ko-KR",
    en: "en-US",
    ja: "ja-JP",
} as const;

function formatPublishedDate(
    publishedAt: string,
    language: string,
) {
    const [year, month, day] = publishedAt
        .split("-")
        .map(Number);

    const languageCode = language.split("-")[0] as
        keyof typeof languageLocales;

    const locale =
        languageLocales[languageCode] ?? languageLocales.en;

    return new Intl.DateTimeFormat(locale, {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        timeZone: "UTC",
    }).format(
        new Date(Date.UTC(year, month - 1, day)),
    );
}

export function MediaSection() {
    const { t, i18n } = useTranslation();

    const currentLanguage =
        i18n.resolvedLanguage ?? i18n.language;

    return (
        <section
            className="section media-section reveal"
            id="media"
            data-reveal
        >
            <div className="media-layout">
                <div className="press-panel">
                    <div className="section-heading">
                        <span className="eyebrow">
                            {t("media.press.eyebrow")}
                        </span>

                        <h2>{t("media.press.title")}</h2>

                        <p>{t("media.press.description")}</p>
                    </div>

                    <div className="press-list">
                        {pressItems.map((item) => (
                            <article
                                className="press-item"
                                key={item.id}
                            >
                                <span>
                                    {t("media.press.category")}
                                </span>

                                <h3>
                                    {t(
                                        `media.press.items.${item.id}.title`,
                                    )}
                                </h3>

                                <time dateTime={item.publishedAt}>
                                    {formatPublishedDate(
                                        item.publishedAt,
                                        currentLanguage,
                                    )}
                                </time>
                            </article>
                        ))}
                    </div>
                </div>

                <div className="sns-panel">
                    <div className="section-heading compact-heading">
                        <span className="eyebrow">
                            {t("media.sns.eyebrow")}
                        </span>

                        <h2>{t("media.sns.title")}</h2>
                    </div>

                    <div className="sns-card-list">
                        {snsItems.map((item) => (
                            <article
                                className="sns-card"
                                key={item.id}
                            >
                                <span>
                                    {t(
                                        `media.sns.items.${item.id}.type`,
                                    )}
                                </span>

                                <h3>
                                    {t(
                                        `media.sns.items.${item.id}.title`,
                                    )}
                                </h3>

                                <p>
                                    {t(
                                        `media.sns.items.${item.id}.description`,
                                    )}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}