export const navigationItems = [
    {
        id: "company",
        href: "#company",
        sectionIds: ["company"],
    },
    {
        id: "sustainability",
        href: "#sustainability",
        sectionIds: ["sustainability"],
    },
    {
        id: "business",
        href: "#business",
        sectionIds: ["partners", "business"],
    },
    {
        id: "media",
        href: "#media",
        sectionIds: ["media"],
    },
    {
        id: "investment",
        href: "#investment",
        sectionIds: ["investment"],
    },
] as const;

export const companyStats = [
    {
        id: "businessAreas",
        value: "08",
    },
    {
        id: "digitalProducts",
        value: "12+",
    },
    {
        id: "serviceUptime",
        value: "99.9%",
    },
] as const;

export const sustainabilityHighlights = [
    {
        id: "responsibleAi",
    },
    {
        id: "operationalEfficiency",
    },
    {
        id: "longTermValue",
    },
] as const;

export const aiStatements = [
    "AI를 통해 더 나은 의사결정을 돕고",
    "데이터와 서비스를 하나의 흐름으로 연결하며",
    "지속 가능한 디지털 비즈니스를 만들어갑니다.",
];

export const businessPortfolio = [
    {
        id: "globalInvestment",
    },
    {
        id: "ictSolutions",
    },
    {
        id: "hospitalityPlatform",
    },
    {
        id: "wellnessTechnology",
    },
    {
        id: "mobilityService",
    },
    {
        id: "dataManagement",
    },
    {
        id: "aiExperience",
    },
    {
        id: "digitalMarketing",
    },
] as const;


export const pressItems = [
    {
        id: "aiWorkflow",
        category: "Press",
        title:
            "Nexora launches a new AI workflow prototype for enterprise teams",
        date: "2026.07.10",
        publishedAt: "2026-07-10",
    },
    {
        id: "cloudOperations",
        category: "Press",
        title:
            "Nexora improves cloud operation standards for corporate services",
        date: "2026.07.08",
        publishedAt: "2026-07-08",
    },
    {
        id: "digitalExperience",
        category: "Press",
        title:
            "Nexora expands digital experience research for service platforms",
        date: "2026.07.04",
        publishedAt: "2026-07-04",
    },
    {
        id: "frontendArchitecture",
        category: "Press",
        title:
            "Nexora publishes frontend architecture notes for product teams",
        date: "2026.07.01",
        publishedAt: "2026-07-01",
    },
] as const;

export const snsItems = [
    {
        id: "corporateWebsite",
        href:
            "https://github.com/bongmyung-ye/nexora-corporate-web",
    },
    {
        id: "motionUi",
        href:
            "https://github.com/bongmyung-ye/nexora-corporate-web",
    },
    {
        id: "structuredContent",
        href:
            "https://github.com/bongmyung-ye/nexora-corporate-web",
    },
    {
        id: "productionWorkflow",
        href:
            "https://github.com/bongmyung-ye/nexora-corporate-web",
    },
] as const;

export const investmentLinks = [
    {
        id: "stockInformation",
    },
    {
        id: "financialReports",
    },
    {
        id: "irArchive",
    },
] as const;

export const investmentChart = {
    score: 94,
    scoreMax: 100,
    changeRate: "+16.0%",
    updatedAt: "2026.07",
    labels: [
        "2022.1",
        "2022.2",
        "2023.1",
        "2023.2",
        "2024.1",
        "2024.2",
        "2025.1",
        "2025.2",
        "2026.1",
        "2026.2",
    ],
    series: [
        {
            id: "serviceStability",
            values: [72, 118, 84, 146, 132, 168, 121, 194, 156, 208],
        },
        {
            id: "investmentMomentum",
            values: [58, 92, 76, 172, 108, 144, 96, 214, 138, 186],
        },
    ],
} as const;

export const footerLinks = [
    {
        id: "privacyPolicy",
        href: "#company",
    },
    {
        id: "sitemap",
        href: "#company",
    },
    {
        id: "contact",
        href: "#contact",
    },
    {
        id: "ethicsReport",
        href: "#contact",
    },
] as const;

export const footerNavigationGroups = [
    {
        id: "company",
        items: [
            {
                id: "overview",
                href: "#company",
            },
            {
                id: "business",
                href: "#business",
            },
        ],
    },
    {
        id: "responsibility",
        items: [
            {
                id: "sustainability",
                href: "#sustainability",
            },
            {
                id: "media",
                href: "#media",
            },
        ],
    },
    {
        id: "information",
        items: [
            {
                id: "investment",
                href: "#investment",
            },
            {
                id: "contact",
                href: "#contact",
            },
        ],
    },
] as const;

export const relatedSites = [
    {
        id: "project",
        href: "https://github.com/bongmyung-ye/nexora-corporate-web",
    },
    {
        id: "profile",
        href: "https://github.com/bongmyung-ye",
    },
    {
        id: "portfolio",
        href: "https://crawlblog.xyz",
    },
] as const;

export const businessAreas = businessPortfolio.slice(0, 3);

export const corporateHighlights = [
    {
        id: "componentArchitecture",
    },
    {
        id: "responsiveExperience",
    },
    {
        id: "maintainableStructure",
    },
] as const;

export const highlightMetrics = [
    {
        id: "reusableComponents",
        value: "12+",
    },
    {
        id: "responsiveSections",
        value: "08",
    },
    {
        id: "structuredDataGroups",
        value: "07",
    },
] as const;

export const newsroomItems = pressItems
    .slice(0, 3)
    .map(({ category, date, title }) => ({
        category,
        date,
        title,
        description:
            "제품 개선, 기술 실험, 서비스 운영 경험을 바탕으로 꾸준히 성장하는 기업형 웹 플랫폼을 만들어갑니다.",
    }));