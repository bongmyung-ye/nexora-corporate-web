import { useTranslation } from "react-i18next";
import {
    corporateHighlights,
    highlightMetrics,
} from "../data/site";

export function CorporateHighlightsSection() {
    const { t } = useTranslation();

    return (
        <section
            className="section corporate-highlights reveal"
            id="highlights"
            data-reveal
        >
            <div className="highlight-layout">
                <div className="highlight-panel">
                    <span className="eyebrow">
                        {t("highlights.eyebrow")}
                    </span>

                    <h2>{t("highlights.title")}</h2>

                    <p>{t("highlights.description")}</p>

                    <div className="metric-list">
                        {highlightMetrics.map((item) => (
                            <div
                                className="metric-row"
                                key={item.id}
                            >
                                <strong>{item.value}</strong>
                                <span>
                                    {t(`highlights.metrics.${item.id}`)}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="highlight-grid">
                    {corporateHighlights.map((item, index) => (
                        <article
                            className="highlight-card"
                            key={item.id}
                        >
                            <span>
                                {String(index + 1).padStart(2, "0")}
                            </span>

                            <h3>
                                {t(`highlights.items.${item.id}.title`)}
                            </h3>

                            <p>
                                {t(
                                    `highlights.items.${item.id}.description`,
                                )}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}