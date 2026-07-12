import { useTranslation } from "react-i18next";
import { companyStats } from "../data/site";

export function HeroSection() {
    const { t } = useTranslation();

    return (
        <section
            className="hero"
            id="company"
            aria-labelledby="hero-title"
        >
            <div className="hero-stage" aria-hidden="true">
                <span className="hero-stage-glow hero-stage-glow-primary" />
                <span className="hero-stage-glow hero-stage-glow-secondary" />
                <span className="hero-stage-grid" />
                <span className="hero-stage-line hero-stage-line-primary" />
                <span className="hero-stage-line hero-stage-line-secondary" />
            </div>

            <div className="hero-shell">
                <div className="hero-copy">
                    <span className="eyebrow hero-eyebrow">
                        {t("hero.eyebrow")}
                    </span>

                    <h1
                        className="display-heading display-heading-hero"
                        id="hero-title"
                    >
                        {t("hero.title")}
                    </h1>

                    <p className="hero-description">
                        {t("hero.description")}
                    </p>

                    <div className="hero-actions">
                        <a
                            className="primary-button"
                            href="#business"
                        >
                            {t("hero.actions.business")}
                        </a>

                        <a
                            className="secondary-button"
                            href="#sustainability"
                        >
                            {t("hero.actions.values")}
                        </a>
                    </div>
                </div>

                <div className="hero-footer">
                    <a
                        className="hero-scroll-cue"
                        href="#sustainability"
                        aria-label={t("hero.scrollLabel")}
                    >
                        <span>{t("hero.scrollLabel")}</span>

                        <span
                            className="hero-scroll-line"
                            aria-hidden="true"
                        >
                            <span />
                        </span>
                    </a>

                    <dl
                        className="hero-metrics"
                        aria-label={t("hero.visualLabel")}
                    >
                        {companyStats.map((item) => (
                            <div
                                className="hero-metric"
                                key={item.id}
                            >
                                <dt>{t(`hero.stats.${item.id}`)}</dt>
                                <dd>{item.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
}