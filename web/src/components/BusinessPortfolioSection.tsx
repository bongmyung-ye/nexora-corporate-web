import {
    useRef,
    useState,
    type KeyboardEvent,
} from "react";
import { useTranslation } from "react-i18next";
import { businessPortfolio } from "../data/site";

export function BusinessPortfolioSection() {
    const { t } = useTranslation();
    const [activeIndex, setActiveIndex] = useState(0);

    const itemRefs = useRef<
        Array<HTMLButtonElement | null>
    >([]);

    const activeBusiness = businessPortfolio[activeIndex];
    const activeNumber = String(activeIndex + 1).padStart(
        2,
        "0",
    );
    const totalNumber = String(
        businessPortfolio.length,
    ).padStart(2, "0");

    const focusBusiness = (index: number) => {
        const normalizedIndex =
            (index + businessPortfolio.length) %
            businessPortfolio.length;

        setActiveIndex(normalizedIndex);
        itemRefs.current[normalizedIndex]?.focus();
    };

    const handleBusinessKeyDown = (
        event: KeyboardEvent<HTMLButtonElement>,
        index: number,
    ) => {
        switch (event.key) {
            case "ArrowDown":
            case "ArrowRight":
                event.preventDefault();
                focusBusiness(index + 1);
                break;

            case "ArrowUp":
            case "ArrowLeft":
                event.preventDefault();
                focusBusiness(index - 1);
                break;

            case "Home":
                event.preventDefault();
                focusBusiness(0);
                break;

            case "End":
                event.preventDefault();
                focusBusiness(businessPortfolio.length - 1);
                break;
        }
    };

    return (
        <section
            className="section business-portfolio-section reveal"
            id="business"
            aria-labelledby="business-title"
            data-reveal
        >
            <div className="section-heading portfolio-heading">
                <span className="eyebrow">
                    {t("business.eyebrow")}
                </span>

                <h2 id="business-title">
                    {t("business.title")}
                </h2>

                <p>{t("business.description")}</p>
            </div>

            <div className="business-showcase-layout">
                <div
                    className="business-selector"
                    aria-label={t("business.title")}
                >
                    {businessPortfolio.map((item, index) => {
                        const isActive = index === activeIndex;
                        const itemNumber = String(index + 1).padStart(
                            2,
                            "0",
                        );

                        return (
                            <button
                                ref={(element) => {
                                    itemRefs.current[index] = element;
                                }}
                                className={`business-selector-item ${isActive ? "is-active" : ""
                                    }`}
                                type="button"
                                key={item.id}
                                aria-pressed={isActive}
                                onClick={() => {
                                    setActiveIndex(index);
                                }}
                                onFocus={() => {
                                    setActiveIndex(index);
                                }}
                                onMouseEnter={() => {
                                    setActiveIndex(index);
                                }}
                                onKeyDown={(event) => {
                                    handleBusinessKeyDown(event, index);
                                }}
                            >
                                <span className="business-selector-number">
                                    {itemNumber}
                                </span>

                                <span className="business-selector-copy">
                                    <small>
                                        {t(`business.items.${item.id}.tag`)}
                                    </small>

                                    <strong>
                                        {t(`business.items.${item.id}.title`)}
                                    </strong>
                                </span>

                                <span
                                    className="business-selector-arrow"
                                    aria-hidden="true"
                                >
                                    ↗
                                </span>
                            </button>
                        );
                    })}
                </div>

                <article
                    className={`business-stage business-stage-tone-${activeIndex % 4
                        }`}
                    aria-live="polite"
                >
                    <div
                        className="business-stage-visual"
                        aria-hidden="true"
                    >
                        <span className="business-stage-orbit business-stage-orbit-outer" />
                        <span className="business-stage-orbit business-stage-orbit-inner" />
                        <span className="business-stage-axis" />
                        <span className="business-stage-number">
                            {activeNumber}
                        </span>
                    </div>

                    <div
                        className="business-stage-content"
                        key={activeBusiness.id}
                    >
                        <div className="business-stage-top">
                            <span>
                                {t(
                                    `business.items.${activeBusiness.id}.tag`,
                                )}
                            </span>

                            <small>
                                {t("business.featured.portfolio")}
                            </small>
                        </div>

                        <div className="business-stage-copy">
                            <h3>
                                {t(
                                    `business.items.${activeBusiness.id}.title`,
                                )}
                            </h3>

                            <p>
                                {t(
                                    `business.items.${activeBusiness.id}.description`,
                                )}
                            </p>
                        </div>

                        <div className="business-stage-footer">
                            <span>{t("business.featured.core")}</span>

                            <strong>
                                {activeNumber} / {totalNumber}
                            </strong>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
}