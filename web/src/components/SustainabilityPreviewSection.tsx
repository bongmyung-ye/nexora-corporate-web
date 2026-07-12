import { useTranslation } from "react-i18next";
import { sustainabilityHighlights } from "../data/site";

export function SustainabilityPreviewSection() {
    const { t } = useTranslation();

    return (
        <section
            className="section sustainability-preview reveal"
            id="sustainability"
            aria-labelledby="sustainability-title"
            data-reveal
        >
            <div
                className="sustainability-atmosphere"
                aria-hidden="true"
            >
                <span className="sustainability-glow sustainability-glow-primary" />
                <span className="sustainability-glow sustainability-glow-secondary" />
                <span className="sustainability-arc" />
                <span className="sustainability-grid-pattern" />
            </div>

            <div className="sustainability-copy">
                <div className="heading-block sustainability-heading">
                    <span className="eyebrow">
                        {t("sustainability.eyebrow")}
                    </span>

                    <h2
                        className="display-heading display-heading-section"
                        id="sustainability-title"
                    >
                        {t("sustainability.title")}
                    </h2>
                </div>

                <p>{t("sustainability.description")}</p>

                <a
                    className="light-button sustainability-action"
                    href="#business"
                >
                    <span>{t("sustainability.action")}</span>
                    <span
                        className="sustainability-action-icon"
                        aria-hidden="true"
                    >
                        ↗
                    </span>
                </a>
            </div>

            <div className="sustainability-cards">
                {sustainabilityHighlights.map((item, index) => (
                    <article
                        className="sustainability-card"
                        key={item.id}
                    >
                        <div className="sustainability-card-top">
                            <span className="sustainability-card-index">
                                {String(index + 1).padStart(2, "0")}
                            </span>

                            <span
                                className="sustainability-card-mark"
                                aria-hidden="true"
                            />
                        </div>

                        <div className="sustainability-card-copy">
                            <h3>
                                {t(
                                    `sustainability.items.${item.id}.title`,
                                )}
                            </h3>

                            <p>
                                {t(
                                    `sustainability.items.${item.id}.description`,
                                )}
                            </p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}