import { useTranslation } from "react-i18next";
import { footerLinks } from "../data/site";

export function Footer() {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="site-footer" id="contact">
            <div className="footer-brand">
                <strong>Nexora</strong>
                <p>{t("footer.description")}</p>
            </div>

            <div className="footer-links">
                <span>{t("footer.sections.links")}</span>

                {footerLinks.map((item) => (
                    <a href={item.href} key={item.id}>
                        {t(`footer.links.${item.id}`)}
                    </a>
                ))}
            </div>

            <div className="footer-info">
                <span>{t("footer.sections.company")}</span>
                <p>{t("footer.location")}</p>
                <p>crawl@nexora.dev</p>
                <p>
                    {t("footer.copyright", {
                        year: currentYear,
                    })}
                </p>
            </div>
        </footer>
    );
}