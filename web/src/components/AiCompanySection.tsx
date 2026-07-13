import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
    developmentPartners,
    infrastructurePartners,
    type TechnologyPartner,
} from "../data/partners";

const partnerCategories = [
    "cloud",
    "infrastructure",
    "database",
    "development",
] as const;

const categoryPositions = [
    "top",
    "left",
    "right",
] as const;

type PartnerCategory =
    (typeof partnerCategories)[number];

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
                    {t(
                        `partners.categories.${partner.category}`,
                    )}
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
    const [activeCategory, setActiveCategory] =
        useState<PartnerCategory>("infrastructure");
    const [categoryHubOpen, setCategoryHubOpen] =
        useState(false);

    const languageCode = (
        i18n.resolvedLanguage ?? i18n.language
    ).split("-")[0];

    const titleSeparator =
        languageCode === "ja" ? "" : " ";

    const surroundingCategories =
        partnerCategories.filter(
            (category) => category !== activeCategory,
        );

    const handleCategorySelect = (
        category: PartnerCategory,
    ) => {
        setActiveCategory(category);
        setCategoryHubOpen(true);
    };

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

                <ul
                    className="partner-category-grid"
                    aria-label={t(
                        "partners.categoryLabel",
                    )}
                >
                    {partnerCategories.map((category) => (
                        <li
                            className="partner-category-item"
                            key={category}
                        >
                            {t(
                                `partners.categoryItems.${category}`,
                            )}
                        </li>
                    ))}
                </ul>

                <div
                    className="partner-category-hub"
                    data-expanded={categoryHubOpen}
                    aria-label={t(
                        "partners.categoryLabel",
                    )}
                >
                    <div className="partner-category-orbit">
                        <svg
                            className="partner-category-connectors"
                            viewBox="0 0 320 200"
                            preserveAspectRatio="none"
                            aria-hidden="true"
                        >
                            <path d="M160 100 L160 38" />
                            <path d="M160 100 L68 154" />
                            <path d="M160 100 L252 154" />
                        </svg>

                        {surroundingCategories.map(
                            (category, index) => (
                                <button
                                    type="button"
                                    className={`partner-category-node is-${categoryPositions[index]}`}
                                    onClick={() =>
                                        handleCategorySelect(category)
                                    }
                                    tabIndex={
                                        categoryHubOpen ? 0 : -1
                                    }
                                    aria-hidden={!categoryHubOpen}
                                    key={category}
                                >
                                    {t(
                                        `partners.categoryItems.${category}`,
                                    )}
                                </button>
                            ),
                        )}

                        <button
                            type="button"
                            className="partner-category-center"
                            onClick={() =>
                                setCategoryHubOpen(
                                    (current) => !current,
                                )
                            }
                            aria-expanded={categoryHubOpen}
                        >
                            <span
                                className="partner-category-center-label"
                                aria-live="polite"
                            >
                                {t(
                                    `partners.categoryItems.${activeCategory}`,
                                )}
                            </span>

                            <span
                                className="partner-category-center-icon"
                                aria-hidden="true"
                            >
                                {categoryHubOpen ? "−" : "+"}
                            </span>
                        </button>
                    </div>
                </div>

                <div
                    className="partner-marquee-stack"
                    data-active-category={activeCategory}
                >
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