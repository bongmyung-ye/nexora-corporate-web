import { useTranslation } from "react-i18next";
import { sustainabilityHighlights } from "../data/site";

export function SustainabilityPreviewSection() {
    const { t } = useTranslation();

    return (
        <section
            className="section sustainability-preview reveal"
            id="sustainability"
            data-reveal
        >
            <div className="sustainability-copy">
                <div className="heading-block sustainability-heading">
                    <span className="eyebrow">
                        {t("sustainability.eyebrow")}
                    </span>

                    <h2 className="display-heading display-heading-section">
                        {t("sustainability.title")}
                    </h2>
                </div>

                <p>{t("sustainability.description")}</p>

                <a href="#business" className="light-button">
                    {t("sustainability.action")}
                </a>
            </div>

            <div className="sustainability-cards">
                {sustainabilityHighlights.map((item, index) => (
                    <article
                        className="sustainability-card"
                        key={item.id}
                    >
                        <span>
                            {String(index + 1).padStart(2, "0")}
                        </span>

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
                    </article>
                ))}
            </div>
        </section>
    );
}