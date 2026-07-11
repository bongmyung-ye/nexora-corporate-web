import { useTranslation } from "react-i18next";
import {
    developmentPartners,
    infrastructurePartners,
    type TechnologyPartner,
} from "../data/partners";

interface PartnerCardProps {
    partner: TechnologyPartner;
    duplicate?: boolean;
}

function PartnerCard({
    partner,
    duplicate = false,
}: PartnerCardProps) {
    const { t } = useTranslation();
    const Icon = partner.icon;

    return (
        <a
            className="partner-card"
            href={partner.href}
            target="_blank"
            rel="noreferrer"
            tabIndex={duplicate ? -1 : undefined}
            aria-label={t("partners.openWebsite", {
                name: partner.name,
            })}
        >
            <span
                className="partner-card-icon"
                aria-hidden="true"
            >
                <Icon />
            </span>

            <span className="partner-card-copy">
                <strong>{partner.name}</strong>
                <small>
                    {t(`partners.categories.${partner.category}`)}
                </small>
            </span>
        </a>
    );
}

interface PartnerMarqueeProps {
    partners: readonly TechnologyPartner[];
    direction: "left" | "right";
}

function PartnerMarquee({
    partners,
    direction,
}: PartnerMarqueeProps) {
    return (
        <div className="partner-lane">
            <div
                className="partner-marquee"
                data-direction={direction}
            >
                <div className="partner-track">
                    <div className="partner-group">
                        {partners.map((partner) => (
                            <PartnerCard
                                partner={partner}
                                key={partner.name}
                            />
                        ))}
                    </div>

                    <div
                        className="partner-group"
                        aria-hidden="true"
                    >
                        {partners.map((partner) => (
                            <PartnerCard
                                partner={partner}
                                duplicate
                                key={`${partner.name}-duplicate`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export function AiCompanySection() {
    const { t, i18n } = useTranslation();

    const languageCode = (
        i18n.resolvedLanguage ?? i18n.language
    ).split("-")[0];

    const titleSeparator =
        languageCode === "ja" ? "" : " ";

    return (
        <section
            className="section ai-company-section reveal"
            id="partners"
            data-reveal
        >
            <div className="ai-company-inner">
                <div className="ai-company-heading">
                    <div className="heading-block ai-company-title-block">
                        <span className="eyebrow">
                            {t("partners.eyebrow")}
                        </span>

                        <h2 className="display-heading display-heading-section display-heading-partners">
                            {t("partners.title.lineOne")}
                            {titleSeparator}
                            {t("partners.title.lineTwo")}
                        </h2>
                    </div>

                    <p>{t("partners.description")}</p>
                </div>

                <div className="partner-ecosystem-label">
                    <span>{t("partners.label")}</span>
                </div>

                <div className="partner-marquee-stack">
                    <PartnerMarquee
                        partners={infrastructurePartners}
                        direction="left"
                    />

                    <PartnerMarquee
                        partners={developmentPartners}
                        direction="right"
                    />
                </div>
            </div>
        </section>
    );
}