import type { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import {
    footerLinks,
    footerNavigationGroups,
    relatedSites,
} from "../data/site";
import { FooterNetworkMap } from "./FooterNetworkMap";

export function Footer() {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    const handleBackToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const handleRelatedSiteChange = (
        event: ChangeEvent<HTMLSelectElement>,
    ) => {
        const selectedUrl = event.currentTarget.value;

        if (!selectedUrl) {
            return;
        }

        window.open(
            selectedUrl,
            "_blank",
            "noopener,noreferrer",
        );

        event.currentTarget.value = "";
    };

    return (
        <footer className="site-footer" id="contact">
            <FooterNetworkMap />

            <div className="footer-shell">
                <div className="footer-top">
                    <div className="footer-brand">
                        <strong className="footer-wordmark">
                            Nexora
                        </strong>

                        <p className="footer-statement">
                            {t("footer.brandTitle")}
                        </p>

                        <p className="footer-description">
                            {t("footer.description")}
                        </p>
                    </div>

                    <button
                        type="button"
                        className="footer-top-button"
                        onClick={handleBackToTop}
                        aria-label={t("footer.backToTop")}
                    >
                        <span>{t("footer.backToTop")}</span>

                        <span
                            className="footer-top-button-icon"
                            aria-hidden="true"
                        >
                            ↑
                        </span>
                    </button>
                </div>

                <nav
                    className="footer-navigation"
                    aria-label={t("footer.navigationLabel")}
                >
                    {footerNavigationGroups.map((group) => (
                        <div
                            className="footer-navigation-group"
                            key={group.id}
                        >
                            <span className="footer-navigation-title">
                                {t(
                                    `footer.navigation.${group.id}.title`,
                                )}
                            </span>

                            <div className="footer-navigation-links">
                                {group.items.map((item) => (
                                    <a
                                        href={item.href}
                                        key={item.id}
                                    >
                                        {t(
                                            `footer.navigation.${group.id}.${item.id}`,
                                        )}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </nav>

                <div className="footer-utility">
                    <nav
                        className="footer-policy"
                        aria-label={t("footer.policyLabel")}
                    >
                        {footerLinks.map((item) => (
                            <a
                                href={item.href}
                                className={
                                    item.id === "privacyPolicy"
                                        ? "is-emphasized"
                                        : undefined
                                }
                                key={item.id}
                            >
                                {t(`footer.links.${item.id}`)}
                            </a>
                        ))}
                    </nav>

                    <label className="footer-related-sites">
                        <span>{t("footer.relatedSite")}</span>

                        <select
                            defaultValue=""
                            onChange={handleRelatedSiteChange}
                            aria-label={t("footer.relatedSite")}
                        >
                            <option value="" disabled>
                                {t("footer.selectSite")}
                            </option>

                            {relatedSites.map((site) => (
                                <option
                                    value={site.href}
                                    key={site.id}
                                >
                                    {t(
                                        `footer.relatedSites.${site.id}`,
                                    )}
                                </option>
                            ))}
                        </select>
                    </label>
                </div>

                <div className="footer-bottom">
                    <div className="footer-company">
                        <span className="footer-company-label">
                            {t("footer.companyInfoLabel")}
                        </span>

                        <address>
                            <span>{t("footer.location")}</span>

                            <a href="mailto:crawl@nexora.dev">
                                crawl@nexora.dev
                            </a>
                        </address>
                    </div>

                    <p className="footer-copyright">
                        {t("footer.copyright", {
                            year: currentYear,
                        })}
                    </p>
                </div>
            </div>
        </footer>
    );
}