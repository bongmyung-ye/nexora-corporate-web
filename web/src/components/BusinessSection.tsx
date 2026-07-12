import { useTranslation } from "react-i18next";
import { businessAreas } from "../data/site";

export function BusinessSection() {
    const { t } = useTranslation();

    return (
        <section
            className="section reveal"
            id="business"
            data-reveal
        >
            <div className="section-heading">
                <span className="eyebrow">
                    {t("business.eyebrow")}
                </span>

                <h2>{t("business.title")}</h2>

                <p>{t("business.description")}</p>
            </div>

            <div className="business-grid">
                {businessAreas.map((item, index) => (
                    <article
                        className="business-card"
                        key={item.id}
                    >
                        <span>
                            {String(index + 1).padStart(2, "0")}
                        </span>

                        <h3>
                            {t(`business.items.${item.id}.title`)}
                        </h3>

                        <p>
                            {t(`business.items.${item.id}.description`)}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
}