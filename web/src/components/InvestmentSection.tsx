import { useTranslation } from "react-i18next";
import { investmentLinks } from "../data/site";

export function InvestmentSection() {
    const { t } = useTranslation();

    return (
        <section
            className="section investment-section reveal"
            id="investment"
            data-reveal
        >
            <div className="investment-header">
                <span className="eyebrow">
                    {t("investment.eyebrow")}
                </span>

                <h2>{t("investment.title")}</h2>
            </div>

            <div className="investment-grid">
                {investmentLinks.map((item) => (
                    <article
                        className="investment-card"
                        key={item.id}
                    >
                        <h3>
                            {t(`investment.items.${item.id}.title`)}
                        </h3>

                        <p>
                            {t(
                                `investment.items.${item.id}.description`,
                            )}
                        </p>

                        <span>{t("investment.viewMore")}</span>
                    </article>
                ))}
            </div>
        </section>
    );
}