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
        title: "Global Investment",
        description:
            "미래 성장 가능성이 높은 기술과 서비스 영역을 중심으로 디지털 포트폴리오를 확장합니다.",
        tag: "Investment",
    },
    {
        id: "ictSolutions",
        title: "ICT Solutions",
        description:
            "기업과 사용자를 연결하는 디바이스, 플랫폼, 서비스 운영 경험을 설계합니다.",
        tag: "ICT",
    },
    {
        id: "hospitalityPlatform",
        title: "Hospitality Platform",
        description:
            "프리미엄 라이프스타일 경험을 디지털 서비스와 연결하는 브랜드 경험을 구축합니다.",
        tag: "Lifestyle",
    },
    {
        id: "wellnessTechnology",
        title: "Wellness Technology",
        description:
            "사용자의 일상 데이터를 기반으로 더 편리하고 건강한 생활 환경을 제안합니다.",
        tag: "Wellness",
    },
    {
        id: "mobilityService",
        title: "Mobility Service",
        description:
            "운영 데이터와 사용자 접점을 연결해 더 효율적인 이동 경험을 제공합니다.",
        tag: "Mobility",
    },
    {
        id: "dataManagement",
        title: "Data Management",
        description:
            "분산된 데이터를 정리하고 분석 가능한 구조로 전환해 비즈니스 의사결정을 지원합니다.",
        tag: "Data",
    },
    {
        id: "aiExperience",
        title: "AI Experience",
        description:
            "AI 기능을 제품 안에 자연스럽게 녹여 실제 사용자가 체감할 수 있는 경험을 만듭니다.",
        tag: "AI",
    },
    {
        id: "digitalMarketing",
        title: "Digital Marketing",
        description:
            "브랜드와 고객 접점을 데이터 기반으로 분석하고 더 정교한 커뮤니케이션을 설계합니다.",
        tag: "Marketing",
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
        type: "Blog",
        title: "Designing a corporate website with motion and structure",
        description:
            "기업형 웹사이트에서 레이아웃, 콘텐츠 흐름, 인터랙션을 함께 설계하는 과정을 정리했습니다.",
    },
    {
        id: "motionUi",
        type: "Video",
        title: "Building motion-ready UI sections with React",
        description:
            "스크롤 reveal, floating card, responsive grid를 활용한 메인 페이지 구현 과정을 소개합니다.",
    },
    {
        id: "structuredContent",
        type: "Story",
        title: "How structured content improves portfolio projects",
        description:
            "데이터 기반 렌더링과 컴포넌트 분리가 포트폴리오 품질에 주는 영향을 다룹니다.",
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

export const businessAreas = businessPortfolio
    .slice(0, 3)
    .map(({ title, description }) => ({
        title,
        description,
    }));

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