import { useTranslation } from "react-i18next";
import { businessPortfolio } from "../data/site";

export function BusinessPortfolioSection() {
    const { t } = useTranslation();
    const [featuredBusiness, ...supportingBusinesses] =
        businessPortfolio;

    return (
        <section
            className="section business-portfolio-section reveal"
            id="business"
            data-reveal
        >
            <div className="section-heading portfolio-heading">
                <span className="eyebrow">
                    {t("business.eyebrow")}
                </span>

                <h2>{t("business.title")}</h2>

                <p>{t("business.description")}</p>
            </div>

            <div className="portfolio-showcase">
                <article className="portfolio-card portfolio-card-featured">
                    <div className="portfolio-card-top">
                        <span>
                            {t(
                                `business.items.${featuredBusiness.id}.tag`,
                            )}
                        </span>
                        <strong>01</strong>
                    </div>

                    <div className="featured-business-copy">
                        <h3>
                            {t(
                                `business.items.${featuredBusiness.id}.title`,
                            )}
                        </h3>

                        <p>
                            {t(
                                `business.items.${featuredBusiness.id}.description`,
                            )}
                        </p>
                    </div>

                    <div className="featured-business-footer">
                        <span>{t("business.featured.core")}</span>
                        <small>
                            {t("business.featured.portfolio")}
                        </small>
                    </div>
                </article>

                <div className="portfolio-grid portfolio-support-grid">
                    {supportingBusinesses.map((item, index) => (
                        <article
                            className="portfolio-card portfolio-card-compact"
                            key={item.id}
                        >
                            <div className="portfolio-card-top">
                                <span>
                                    {t(`business.items.${item.id}.tag`)}
                                </span>
                                <strong>
                                    {String(index + 2).padStart(2, "0")}
                                </strong>
                            </div>

                            <h3>
                                {t(`business.items.${item.id}.title`)}
                            </h3>

                            <p>
                                {t(
                                    `business.items.${item.id}.description`,
                                )}
                            </p>

                            <div className="portfolio-card-link">
                                {t("business.viewBusiness")}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}