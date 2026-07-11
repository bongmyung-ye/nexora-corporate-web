import { useTranslation } from "react-i18next";
import { companyStats } from "../data/site";

export function HeroSection() {
    const { t } = useTranslation();

    return (
        <section className="hero" id="company">
            <div className="hero-background" aria-hidden="true">
                <span className="hero-orb hero-orb-large" />
                <span className="hero-orb hero-orb-medium" />
                <span className="hero-orb hero-orb-small" />
                <span className="hero-line hero-line-one" />
                <span className="hero-line hero-line-two" />
                <span className="hero-grid-pattern" />
            </div>

            <div className="hero-content">
                <div className="heading-block hero-heading">
                    <span className="eyebrow">
                        {t("hero.eyebrow")}
                    </span>

                    <h1 className="display-heading display-heading-hero">
                        {t("hero.title")}
                    </h1>
                </div>

                <p>{t("hero.description")}</p>

                <div className="hero-actions">
                    <a
                        href="#business"
                        className="primary-button"
                    >
                        {t("hero.actions.business")}
                    </a>

                    <a
                        href="#sustainability"
                        className="secondary-button"
                    >
                        {t("hero.actions.values")}
                    </a>
                </div>
            </div>

            <div
                className="hero-visual"
                aria-label={t("hero.visualLabel")}
            >
                <div className="hero-panel">
                    <div className="panel-label">
                        {t("hero.panelLabel")}
                    </div>

                    <div className="stat-grid">
                        {companyStats.map((item) => (
                            <div
                                key={item.id}
                                className="stat-card"
                            >
                                <strong>{item.value}</strong>
                                <span>
                                    {t(`hero.stats.${item.id}`)}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="floating-card floating-card-primary">
                    <span>
                        {t("hero.floatingCards.aiModel.label")}
                    </span>
                    <strong>
                        {t("hero.floatingCards.aiModel.value")}
                    </strong>
                </div>

                <div className="floating-card floating-card-secondary">
                    <span>
                        {t("hero.floatingCards.cloud.label")}
                    </span>
                    <strong>
                        {t("hero.floatingCards.cloud.value")}
                    </strong>
                </div>

                <div className="floating-card floating-card-tertiary">
                    <span>
                        {t("hero.floatingCards.dataFlow.label")}
                    </span>
                    <strong>
                        {t("hero.floatingCards.dataFlow.value")}
                    </strong>
                </div>
            </div>
        </section>
    );
}