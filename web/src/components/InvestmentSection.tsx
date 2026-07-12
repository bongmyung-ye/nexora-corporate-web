import {
    useEffect,
    useMemo,
    useRef,
    useState,
    type KeyboardEvent,
} from "react";
import { useTranslation } from "react-i18next";
import {
    investmentChart,
    investmentLinks,
} from "../data/site";

type ChartPoint = {
    x: number;
    y: number;
    value: number;
};

const CHART_WIDTH = 760;
const CHART_HEIGHT = 360;

const CHART_PADDING = {
    top: 28,
    right: 38,
    bottom: 44,
    left: 52,
};

const investmentProfileMap = {
    stockInformation: {
        score: 94,
        changeRate: "+16.0%",
        series: [
            {
                id: "serviceStability",
                values: [
                    0, 0, 3, 9, 18, 12, 5, 3,
                    8, 5, 7, 14, 10, 5, 4, 11,
                    24, 12, 6, 4, 7, 16, 36, 19,
                    8, 5, 9, 5, 7, 22, 52, 31,
                    12, 7, 5, 14, 9, 6, 12, 29,
                    18, 9, 7, 11, 38, 66, 24, 0,
                ],
            },
            {
                id: "investmentMomentum",
                values: [
                    0, 2, 12, 7, 4, 9, 3, 15,
                    6, 8, 21, 11, 7, 4, 12, 6,
                    16, 34, 23, 8, 5, 10, 5, 8,
                    15, 9, 11, 31, 21, 7, 4, 10,
                    18, 12, 7, 25, 15, 9, 34, 19,
                    10, 14, 41, 27, 72, 26, 9, 0,
                ],
            },
        ],
    },
    financialReports: {
        score: 86,
        changeRate: "+11.4%",
        series: [
            {
                id: "serviceStability",
                values: [
                    0, 0, 5, 13, 8, 4, 10, 6,
                    16, 9, 5, 7, 18, 28, 13, 6,
                    4, 11, 8, 21, 14, 7, 5, 12,
                    33, 17, 8, 6, 15, 10, 24, 44,
                    20, 9, 7, 13, 29, 18, 8, 6,
                    16, 11, 37, 22, 12, 9, 16, 11,
                ],
            },
            {
                id: "investmentMomentum",
                values: [
                    0, 3, 8, 5, 14, 7, 4, 11,
                    20, 12, 6, 4, 9, 17, 31, 15,
                    7, 5, 13, 9, 27, 16, 8, 6,
                    18, 11, 7, 14, 36, 19, 9, 5,
                    12, 26, 15, 8, 6, 21, 13, 7,
                    32, 18, 10, 46, 24, 13, 19, 14,
                ],
            },
        ],
    },
    irArchive: {
        score: 90,
        changeRate: "+18.2%",
        series: [
            {
                id: "serviceStability",
                values: [
                    0, 0, 4, 11, 7, 3, 9, 5,
                    13, 8, 4, 6, 17, 10, 5, 4,
                    12, 26, 14, 6, 5, 8, 19, 11,
                    6, 4, 15, 34, 16, 7, 5, 11,
                    23, 13, 6, 4, 18, 9, 5, 28,
                    16, 8, 6, 22, 48, 19, 6, 0,
                ],
            },
            {
                id: "investmentMomentum",
                values: [
                    0, 2, 9, 5, 3, 7, 14, 6,
                    4, 10, 18, 9, 5, 3, 8, 21,
                    12, 6, 4, 11, 7, 16, 29, 13,
                    6, 5, 14, 8, 24, 14, 7, 4,
                    10, 31, 17, 8, 5, 13, 9, 20,
                    12, 7, 35, 18, 57, 21, 7, 0,
                ],
            },
        ],
    },
} as const;

function clamp(
    value: number,
    minimum: number,
    maximum: number,
) {
    return Math.min(
        Math.max(value, minimum),
        maximum,
    );
}

function createSmoothPath(points: ChartPoint[]) {
    if (points.length === 0) {
        return "";
    }

    if (points.length === 1) {
        return `M ${points[0].x} ${points[0].y}`;
    }

    const tension = 0.52;
    const minimumY = CHART_PADDING.top;
    const maximumY =
        CHART_HEIGHT - CHART_PADDING.bottom;

    return points.reduce((path, point, index, array) => {
        if (index === 0) {
            return `M ${point.x} ${point.y}`;
        }

        const previousPreviousPoint =
            array[index - 2] ?? array[index - 1];

        const previousPoint = array[index - 1];
        const nextPoint = array[index + 1] ?? point;

        const firstControlX =
            previousPoint.x +
            ((point.x - previousPreviousPoint.x) / 6) *
            tension;

        const firstControlY = clamp(
            previousPoint.y +
            ((point.y - previousPreviousPoint.y) / 6) *
            tension,
            minimumY,
            maximumY,
        );

        const secondControlX =
            point.x -
            ((nextPoint.x - previousPoint.x) / 6) *
            tension;

        const secondControlY = clamp(
            point.y -
            ((nextPoint.y - previousPoint.y) / 6) *
            tension,
            minimumY,
            maximumY,
        );

        return [
            path,
            "C",
            firstControlX.toFixed(2),
            firstControlY.toFixed(2),
            secondControlX.toFixed(2),
            secondControlY.toFixed(2),
            point.x.toFixed(2),
            point.y.toFixed(2),
        ].join(" ");
    }, "");
}

function createAreaPath(points: ChartPoint[]) {
    if (points.length === 0) {
        return "";
    }

    const baselineY =
        CHART_HEIGHT - CHART_PADDING.bottom;

    const linePath = createSmoothPath(points);
    const firstPoint = points[0];
    const lastPoint = points[points.length - 1];

    return [
        linePath,
        `L ${lastPoint.x} ${baselineY}`,
        `L ${firstPoint.x} ${baselineY}`,
        "Z",
    ].join(" ");
}

function buildPoints(
    values: readonly number[],
    minValue: number,
    maxValue: number,
): ChartPoint[] {
    const usableWidth =
        CHART_WIDTH -
        CHART_PADDING.left -
        CHART_PADDING.right;

    const usableHeight =
        CHART_HEIGHT -
        CHART_PADDING.top -
        CHART_PADDING.bottom;

    const lastIndex = Math.max(values.length - 1, 1);

    return values.map((value, index) => {
        const ratioX = index / lastIndex;

        const ratioY =
            (value - minValue) /
            (maxValue - minValue || 1);

        return {
            x:
                CHART_PADDING.left +
                usableWidth * ratioX,
            y:
                CHART_HEIGHT -
                CHART_PADDING.bottom -
                usableHeight * ratioY,
            value,
        };
    });
}

export function InvestmentSection() {
    const { t } = useTranslation();

    const sectionRef =
        useRef<HTMLElement | null>(null);

    const cardRefs =
        useRef<Array<HTMLButtonElement | null>>([]);

    const hasEnteredRef = useRef(false);

    const [activeIndex, setActiveIndex] =
        useState(0);

    const [isVisible, setIsVisible] =
        useState(false);

    const [animationCycle, setAnimationCycle] =
        useState(0);

    const [displayScore, setDisplayScore] =
        useState(0);

    const activeItem =
        investmentLinks[activeIndex];

    const activeProfile =
        investmentProfileMap[activeItem.id];

    const [
        primarySeries,
        secondarySeries,
    ] = activeProfile.series;

    const chartValues = [
        ...primarySeries.values,
        ...secondarySeries.values,
    ];

    const minValue = 0;

    const maxValue =
        Math.ceil(
            Math.max(...chartValues) / 10,
        ) *
        10 +
        10;

    const primaryPoints = useMemo(
        () =>
            buildPoints(
                primarySeries.values,
                minValue,
                maxValue,
            ),
        [
            primarySeries.values,
            minValue,
            maxValue,
        ],
    );

    const secondaryPoints = useMemo(
        () =>
            buildPoints(
                secondarySeries.values,
                minValue,
                maxValue,
            ),
        [
            secondarySeries.values,
            minValue,
            maxValue,
        ],
    );

    const primaryLinePath = useMemo(
        () => createSmoothPath(primaryPoints),
        [primaryPoints],
    );

    const secondaryLinePath = useMemo(
        () => createSmoothPath(secondaryPoints),
        [secondaryPoints],
    );

    const primaryAreaPath = useMemo(
        () => createAreaPath(primaryPoints),
        [primaryPoints],
    );

    const secondaryAreaPath = useMemo(
        () => createAreaPath(secondaryPoints),
        [secondaryPoints],
    );

    const gridLines = Array.from(
        {
            length: 5,
        },
        (_, index) => {
            const usableHeight =
                CHART_HEIGHT -
                CHART_PADDING.top -
                CHART_PADDING.bottom;

            return (
                CHART_PADDING.top +
                (usableHeight / 4) * index
            );
        },
    );

    const axisValues = Array.from(
        {
            length: 5,
        },
        (_, index) =>
            Math.round(
                maxValue -
                ((maxValue - minValue) / 4) *
                index,
            ),
    );

    const yearTicks =
        investmentChart.labels.map(
            (label, index) => {
                const usableWidth =
                    CHART_WIDTH -
                    CHART_PADDING.left -
                    CHART_PADDING.right;

                const ratio =
                    index /
                    Math.max(
                        investmentChart.labels.length - 1,
                        1,
                    );

                return {
                    label,
                    x:
                        CHART_PADDING.left +
                        usableWidth * ratio,
                };
            },
        );

    useEffect(() => {
        const sectionElement = sectionRef.current;

        if (!sectionElement) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (
                    entry.isIntersecting &&
                    entry.intersectionRatio >= 0.32
                ) {
                    if (!hasEnteredRef.current) {
                        hasEnteredRef.current = true;
                        setIsVisible(true);
                        setAnimationCycle(
                            (cycle) => cycle + 1,
                        );
                    }

                    return;
                }

                if (entry.intersectionRatio <= 0.08) {
                    hasEnteredRef.current = false;
                    setIsVisible(false);
                }
            },
            {
                threshold: [
                    0,
                    0.08,
                    0.32,
                    0.6,
                ],
                rootMargin: "0px 0px -4% 0px",
            },
        );

        observer.observe(sectionElement);

        return () => {
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        const handleVisibilityChange = () => {
            if (
                document.visibilityState !== "visible" ||
                !hasEnteredRef.current
            ) {
                return;
            }

            setAnimationCycle(
                (cycle) => cycle + 1,
            );
        };

        document.addEventListener(
            "visibilitychange",
            handleVisibilityChange,
        );

        return () => {
            document.removeEventListener(
                "visibilitychange",
                handleVisibilityChange,
            );
        };
    }, []);

    useEffect(() => {
        if (!isVisible) {
            setDisplayScore(0);
            return;
        }

        const reducedMotion =
            window.matchMedia(
                "(prefers-reduced-motion: reduce)",
            ).matches;

        if (reducedMotion) {
            setDisplayScore(activeProfile.score);
            return;
        }

        let animationFrame = 0;

        const startedAt = performance.now();
        const duration = 1100;

        const animateScore = (
            currentTime: number,
        ) => {
            const elapsed =
                currentTime - startedAt;

            const progress = Math.min(
                elapsed / duration,
                1,
            );

            const easedProgress =
                1 - Math.pow(1 - progress, 4);

            setDisplayScore(
                Math.round(
                    activeProfile.score *
                    easedProgress,
                ),
            );

            if (progress < 1) {
                animationFrame =
                    requestAnimationFrame(
                        animateScore,
                    );
            }
        };

        animationFrame =
            requestAnimationFrame(
                animateScore,
            );

        return () => {
            cancelAnimationFrame(
                animationFrame,
            );
        };
    }, [
        activeProfile.score,
        isVisible,
        animationCycle,
    ]);

    const activateProfile = (
        index: number,
    ) => {
        setActiveIndex(index);

        setAnimationCycle(
            (cycle) => cycle + 1,
        );
    };

    const focusProfile = (
        index: number,
    ) => {
        const normalizedIndex =
            (
                index +
                investmentLinks.length
            ) %
            investmentLinks.length;

        activateProfile(normalizedIndex);

        requestAnimationFrame(() => {
            cardRefs.current[
                normalizedIndex
            ]?.focus();
        });
    };

    const handleCardKeyDown = (
        event: KeyboardEvent<HTMLButtonElement>,
        index: number,
    ) => {
        switch (event.key) {
            case "ArrowDown":
            case "ArrowRight":
                event.preventDefault();
                focusProfile(index + 1);
                break;

            case "ArrowUp":
            case "ArrowLeft":
                event.preventDefault();
                focusProfile(index - 1);
                break;

            case "Home":
                event.preventDefault();
                focusProfile(0);
                break;

            case "End":
                event.preventDefault();
                focusProfile(
                    investmentLinks.length - 1,
                );
                break;
        }
    };

    return (
        <section
            ref={sectionRef}
            className={`section investment-section investment-motion-section ${isVisible
                ? "is-investment-visible"
                : ""
                }`}
            id="investment"
            aria-labelledby="investment-title"
        >
            <div className="investment-intro">
                <div className="heading-block investment-heading">
                    <span className="eyebrow">
                        {t("investment.eyebrow")}
                    </span>

                    <h2
                        className="display-heading display-heading-section"
                        id="investment-title"
                    >
                        {t("investment.title")}
                    </h2>
                </div>

                <p>
                    {t("investment.description")}
                </p>

                <div className="investment-meta">
                    <span>IR / 2026</span>
                </div>
            </div>

            <div className="investment-dashboard">
                <div
                    className="investment-chart-panel"
                    id="investment-chart-panel"
                    role="tabpanel"
                    aria-labelledby={`investment-tab-${activeItem.id}`}
                    aria-live="polite"
                >
                    <div className="investment-chart-top">
                        <div className="investment-score-block">
                            <span className="investment-chart-context">
                                {t(
                                    `investment.items.${activeItem.id}.title`,
                                )}
                            </span>

                            <span className="investment-chart-label">
                                {t(
                                    "investment.chart.scoreLabel",
                                )}
                            </span>

                            <strong>
                                {displayScore}

                                <small>
                                    /{investmentChart.scoreMax}
                                </small>
                            </strong>
                        </div>

                        <div className="investment-score-change">
                            <span>
                                {t(
                                    "investment.chart.changeLabel",
                                )}
                            </span>

                            <strong>
                                {activeProfile.changeRate}
                            </strong>
                        </div>
                    </div>

                    <div className="investment-chart-legend">
                        <div className="investment-legend-item">
                            <span className="legend-line legend-line-primary" />

                            <span>
                                {t(
                                    `investment.chart.series.${primarySeries.id}`,
                                )}
                            </span>
                        </div>

                        <div className="investment-legend-item">
                            <span className="legend-line legend-line-secondary" />

                            <span>
                                {t(
                                    `investment.chart.series.${secondarySeries.id}`,
                                )}
                            </span>
                        </div>
                    </div>

                    <div className="investment-chart-surface">
                        <svg
                            className="investment-chart-svg"
                            viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`}
                            role="img"
                            aria-label={t(
                                `investment.items.${activeItem.id}.title`,
                            )}
                            preserveAspectRatio="none"
                        >
                            <defs>
                                <linearGradient
                                    id="investment-chart-background"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                >
                                    <stop
                                        offset="0%"
                                        stopColor="#2563eb"
                                        stopOpacity="0.01"
                                    />

                                    <stop
                                        offset="100%"
                                        stopColor="#2563eb"
                                        stopOpacity="0.22"
                                    />
                                </linearGradient>

                                <linearGradient
                                    id="investment-gradient-primary"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                >
                                    <stop
                                        offset="0%"
                                        stopColor="#38bdf8"
                                        stopOpacity="0.46"
                                    />

                                    <stop
                                        offset="68%"
                                        stopColor="#38bdf8"
                                        stopOpacity="0.17"
                                    />

                                    <stop
                                        offset="100%"
                                        stopColor="#38bdf8"
                                        stopOpacity="0.08"
                                    />
                                </linearGradient>

                                <linearGradient
                                    id="investment-gradient-secondary"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                >
                                    <stop
                                        offset="0%"
                                        stopColor="#818cf8"
                                        stopOpacity="0.34"
                                    />

                                    <stop
                                        offset="68%"
                                        stopColor="#818cf8"
                                        stopOpacity="0.13"
                                    />

                                    <stop
                                        offset="100%"
                                        stopColor="#818cf8"
                                        stopOpacity="0.06"
                                    />
                                </linearGradient>

                                <clipPath id="investment-chart-clip">
                                    <rect
                                        x={CHART_PADDING.left}
                                        y={CHART_PADDING.top}
                                        width={
                                            CHART_WIDTH -
                                            CHART_PADDING.left -
                                            CHART_PADDING.right
                                        }
                                        height={
                                            CHART_HEIGHT -
                                            CHART_PADDING.top -
                                            CHART_PADDING.bottom
                                        }
                                        rx="18"
                                    />
                                </clipPath>
                            </defs>

                            <rect
                                className="investment-chart-underlay"
                                x={CHART_PADDING.left}
                                y={CHART_PADDING.top}
                                width={
                                    CHART_WIDTH -
                                    CHART_PADDING.left -
                                    CHART_PADDING.right
                                }
                                height={
                                    CHART_HEIGHT -
                                    CHART_PADDING.top -
                                    CHART_PADDING.bottom
                                }
                                rx="18"
                                fill="url(#investment-chart-background)"
                            />

                            {gridLines.map((y, index) => (
                                <g key={y}>
                                    <line
                                        className="investment-grid-line"
                                        x1={CHART_PADDING.left}
                                        y1={y}
                                        x2={
                                            CHART_WIDTH -
                                            CHART_PADDING.right
                                        }
                                        y2={y}
                                    />

                                    <text
                                        className="investment-axis-value"
                                        x={CHART_PADDING.left - 12}
                                        y={y + 4}
                                        textAnchor="end"
                                    >
                                        {axisValues[index]}
                                    </text>
                                </g>
                            ))}

                            {yearTicks.map((tick) => (
                                <line
                                    key={tick.label}
                                    className="investment-grid-line investment-grid-line-vertical"
                                    x1={tick.x}
                                    y1={CHART_PADDING.top}
                                    x2={tick.x}
                                    y2={
                                        CHART_HEIGHT -
                                        CHART_PADDING.bottom
                                    }
                                />
                            ))}

                            <g
                                clipPath="url(#investment-chart-clip)"
                                className="investment-chart-series"
                                key={`${activeItem.id}-${animationCycle}`}
                            >
                                <path
                                    className="investment-area investment-area-secondary"
                                    d={secondaryAreaPath}
                                />

                                <path
                                    className="investment-area investment-area-primary"
                                    d={primaryAreaPath}
                                />

                                <path
                                    className="investment-line investment-line-secondary"
                                    d={secondaryLinePath}
                                    pathLength="1"
                                />

                                <path
                                    className="investment-line investment-line-primary"
                                    d={primaryLinePath}
                                    pathLength="1"
                                />
                            </g>

                            {yearTicks.map((tick, index) => (
                                <text
                                    key={`label-${tick.label}`}
                                    className="investment-axis-label"
                                    x={tick.x}
                                    y={CHART_HEIGHT - 14}
                                    textAnchor={
                                        index === 0
                                            ? "start"
                                            : index ===
                                                yearTicks.length - 1
                                                ? "end"
                                                : "middle"
                                    }
                                >
                                    {tick.label}
                                </text>
                            ))}
                        </svg>
                    </div>

                    <div className="investment-chart-footer">
                        <div className="investment-chart-updated">
                            <span>
                                {t(
                                    "investment.chart.updatedLabel",
                                )}
                            </span>

                            <strong>
                                {investmentChart.updatedAt}
                            </strong>
                        </div>

                        <p>
                            {t(
                                "investment.chart.caption",
                            )}
                        </p>
                    </div>
                </div>

                <div
                    className="investment-grid"
                    role="tablist"
                    aria-label={t(
                        "investment.title",
                    )}
                >
                    {investmentLinks.map(
                        (item, index) => {
                            const isActive =
                                index === activeIndex;

                            return (
                                <button
                                    ref={(element) => {
                                        cardRefs.current[index] =
                                            element;
                                    }}
                                    className={`investment-card ${isActive
                                        ? "is-active"
                                        : ""
                                        }`}
                                    id={`investment-tab-${item.id}`}
                                    type="button"
                                    role="tab"
                                    key={item.id}
                                    aria-selected={isActive}
                                    aria-controls="investment-chart-panel"
                                    onClick={() => {
                                        activateProfile(index);
                                    }}
                                    onKeyDown={(event) => {
                                        handleCardKeyDown(
                                            event,
                                            index,
                                        );
                                    }}
                                >
                                    <span className="investment-card-number">
                                        {String(
                                            index + 1,
                                        ).padStart(2, "0")}
                                    </span>

                                    <h3>
                                        {t(
                                            `investment.items.${item.id}.title`,
                                        )}
                                    </h3>

                                    <p>
                                        {t(
                                            `investment.items.${item.id}.description`,
                                        )}
                                    </p>

                                    <span className="investment-card-link">
                                        {t(
                                            "investment.viewMore",
                                        )}
                                    </span>
                                </button>
                            );
                        },
                    )}
                </div>
            </div>
        </section>
    );
}