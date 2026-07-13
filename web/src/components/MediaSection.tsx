import { useState } from "react";
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
    const [activePressIndex, setActivePressIndex] =
        useState(0);

    const currentLanguage =
        i18n.resolvedLanguage ?? i18n.language;

    const activePress = pressItems[activePressIndex];
    const activeNumber = String(
        activePressIndex + 1,
    ).padStart(2, "0");
    const totalNumber = String(
        pressItems.length,
    ).padStart(2, "0");

    const [
        featuredSocialItem,
        ...supportingSocialItems
    ] = snsItems;

    return (
        <section
            className="section media-section media-showcase-section reveal"
            id="media"
            aria-labelledby="media-title"
            data-reveal
        >
            <div className="media-section-intro">
                <div className="section-heading media-heading heading-block">
                    <span className="eyebrow">
                        {t("media.press.eyebrow")}
                    </span>

                    <h2
                        className="display-heading display-heading-section"
                        id="media-title"
                    >
                        {t("media.press.title")}
                    </h2>

                    <p>{t("media.press.description")}</p>
                </div>

                <div
                    className="media-section-counter"
                    aria-hidden="true"
                >
                    <span>{activeNumber}</span>
                    <i />
                    <small>{totalNumber}</small>
                </div>
            </div>

            <div className="media-editorial-layout">
                <article
                    className={`media-featured media-featured-tone-${activePressIndex % 4
                        }`}
                    aria-live="polite"
                >
                    <div
                        className="media-featured-visual"
                        aria-hidden="true"
                    >
                        <span className="media-featured-grid" />
                        <span className="media-featured-orbit media-featured-orbit-outer" />
                        <span className="media-featured-orbit media-featured-orbit-inner" />
                        <strong>{activeNumber}</strong>
                    </div>

                    <div
                        className="media-featured-content"
                        key={activePress.id}
                    >
                        <div className="media-featured-meta">
                            <span>{t("media.press.category")}</span>

                            <time dateTime={activePress.publishedAt}>
                                {formatPublishedDate(
                                    activePress.publishedAt,
                                    currentLanguage,
                                )}
                            </time>
                        </div>

                        <div className="media-featured-copy">
                            <small>{t("media.press.eyebrow")}</small>

                            <h3>
                                {t(
                                    `media.press.items.${activePress.id}.title`,
                                )}
                            </h3>
                        </div>

                        <div className="media-featured-footer">
                            <span>NEXORA MEDIA</span>
                            <strong aria-hidden="true">↗</strong>
                        </div>
                    </div>
                </article>

                <div
                    className="media-press-selector"
                    aria-label={t("media.press.title")}
                >
                    {pressItems.map((item, index) => {
                        const isActive =
                            index === activePressIndex;
                        const itemNumber = String(
                            index + 1,
                        ).padStart(2, "0");

                        return (
                            <button
                                className={`media-press-item ${isActive ? "is-active" : ""
                                    }`}
                                type="button"
                                key={item.id}
                                aria-pressed={isActive}
                                onClick={() => {
                                    setActivePressIndex(index);
                                }}
                                onFocus={() => {
                                    setActivePressIndex(index);
                                }}
                                onMouseEnter={() => {
                                    setActivePressIndex(index);
                                }}
                            >
                                <span className="media-press-number">
                                    {itemNumber}
                                </span>

                                <span className="media-press-copy">
                                    <span className="media-press-meta">
                                        <small>
                                            {t("media.press.category")}
                                        </small>

                                        <time dateTime={item.publishedAt}>
                                            {formatPublishedDate(
                                                item.publishedAt,
                                                currentLanguage,
                                            )}
                                        </time>
                                    </span>

                                    <strong>
                                        {t(
                                            `media.press.items.${item.id}.title`,
                                        )}
                                    </strong>
                                </span>

                                <span
                                    className="media-press-arrow"
                                    aria-hidden="true"
                                >
                                    ↗
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className="sns-media-section">
                <div className="sns-media-heading">
                    <div className="section-heading compact-heading heading-block">
                        <span className="eyebrow">
                            {t("media.sns.eyebrow")}
                        </span>

                        <h2 className="display-heading display-heading-section">
                            {t("media.sns.title")}
                        </h2>
                    </div>

                    <a
                        className="sns-media-view-all"
                        href={featuredSocialItem.href}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span>{t("media.sns.viewAll")}</span>
                        <strong aria-hidden="true">↗</strong>
                    </a>
                </div>

                <div className="sns-media-layout">
                    <a
                        className="sns-media-featured"
                        href={featuredSocialItem.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={t(
                            `media.sns.items.${featuredSocialItem.id}.title`,
                        )}
                    >
                        <span
                            className="sns-media-featured-visual"
                            aria-hidden="true"
                        >
                            <i className="sns-media-featured-grid" />
                            <i className="sns-media-featured-glow" />
                            <i className="sns-media-featured-ring sns-media-featured-ring-large" />
                            <i className="sns-media-featured-ring sns-media-featured-ring-small" />
                            <b>01</b>
                        </span>

                        <span className="sns-media-featured-body">
                            <span className="sns-media-featured-meta">
                                <small>
                                    {t(
                                        `media.sns.items.${featuredSocialItem.id}.type`,
                                    )}
                                </small>
                                <i>NEXORA STORY</i>
                            </span>

                            <span className="sns-media-featured-copy">
                                <strong>
                                    {t(
                                        `media.sns.items.${featuredSocialItem.id}.title`,
                                    )}
                                </strong>

                                <p>
                                    {t(
                                        `media.sns.items.${featuredSocialItem.id}.description`,
                                    )}
                                </p>
                            </span>

                            <span className="sns-media-featured-footer">
                                <small>
                                    {t("media.sns.openContent")}
                                </small>
                                <strong aria-hidden="true">↗</strong>
                            </span>
                        </span>
                    </a>

                    <div className="sns-media-support-list">
                        {supportingSocialItems.map(
                            (item, index) => (
                                <a
                                    className="sns-media-support-item"
                                    href={item.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    key={item.id}
                                    aria-label={t(
                                        `media.sns.items.${item.id}.title`,
                                    )}
                                >
                                    <span className="sns-media-support-number">
                                        {String(index + 2).padStart(
                                            2,
                                            "0",
                                        )}
                                    </span>

                                    <span className="sns-media-support-copy">
                                        <small>
                                            {t(
                                                `media.sns.items.${item.id}.type`,
                                            )}
                                        </small>

                                        <strong>
                                            {t(
                                                `media.sns.items.${item.id}.title`,
                                            )}
                                        </strong>

                                        <p>
                                            {t(
                                                `media.sns.items.${item.id}.description`,
                                            )}
                                        </p>
                                    </span>

                                    <span
                                        className="sns-media-support-arrow"
                                        aria-hidden="true"
                                    >
                                        ↗
                                    </span>
                                </a>
                            ),
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}