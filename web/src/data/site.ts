export const navigationItems = [
    { label: "Company", href: "#company" },
    { label: "Business", href: "#business" },
    { label: "Sustainability", href: "#sustainability" },
    { label: "Media", href: "#media" },
    { label: "Investment", href: "#investment" },
];

export const companyStats = [
    { label: "Business Areas", value: "08" },
    { label: "Digital Products", value: "12+" },
    { label: "Service Uptime", value: "99.9%" },
];

export const sustainabilityHighlights = [
    {
        title: "Responsible AI",
        description:
            "AI 기술이 실제 사용자와 비즈니스에 신뢰할 수 있는 방식으로 적용되도록 설계합니다.",
    },
    {
        title: "Operational Efficiency",
        description:
            "반복 업무를 줄이고 서비스 운영 흐름을 개선해 지속 가능한 성장 기반을 만듭니다.",
    },
    {
        title: "Long-term Value",
        description:
            "단기적인 화면 구현을 넘어 확장 가능한 구조와 유지보수성을 함께 고려합니다.",
    },
];

export const aiStatements = [
    "AI를 통해 더 나은 의사결정을 돕고",
    "데이터와 서비스를 하나의 흐름으로 연결하며",
    "지속 가능한 디지털 비즈니스를 만들어갑니다.",
];

export const businessPortfolio = [
    {
        title: "Global Investment",
        description:
            "미래 성장 가능성이 높은 기술과 서비스 영역을 중심으로 디지털 포트폴리오를 확장합니다.",
        tag: "Investment",
    },
    {
        title: "ICT Solutions",
        description:
            "기업과 사용자를 연결하는 디바이스, 플랫폼, 서비스 운영 경험을 설계합니다.",
        tag: "ICT",
    },
    {
        title: "Hospitality Platform",
        description:
            "프리미엄 라이프스타일 경험을 디지털 서비스와 연결하는 브랜드 경험을 구축합니다.",
        tag: "Lifestyle",
    },
    {
        title: "Wellness Technology",
        description:
            "사용자의 일상 데이터를 기반으로 더 편리하고 건강한 생활 환경을 제안합니다.",
        tag: "Wellness",
    },
    {
        title: "Mobility Service",
        description:
            "운영 데이터와 사용자 접점을 연결해 더 효율적인 이동 경험을 제공합니다.",
        tag: "Mobility",
    },
    {
        title: "Data Management",
        description:
            "분산된 데이터를 정리하고 분석 가능한 구조로 전환해 비즈니스 의사결정을 지원합니다.",
        tag: "Data",
    },
    {
        title: "AI Experience",
        description:
            "AI 기능을 제품 안에 자연스럽게 녹여 실제 사용자가 체감할 수 있는 경험을 만듭니다.",
        tag: "AI",
    },
    {
        title: "Digital Marketing",
        description:
            "브랜드와 고객 접점을 데이터 기반으로 분석하고 더 정교한 커뮤니케이션을 설계합니다.",
        tag: "Marketing",
    },
];

export const pressItems = [
    {
        category: "Press",
        title: "Nexora launches a new AI workflow prototype for enterprise teams",
        date: "2026.07.10",
    },
    {
        category: "Press",
        title: "Nexora improves cloud operation standards for corporate services",
        date: "2026.07.08",
    },
    {
        category: "Press",
        title: "Nexora expands digital experience research for service platforms",
        date: "2026.07.04",
    },
    {
        category: "Press",
        title: "Nexora publishes frontend architecture notes for product teams",
        date: "2026.07.01",
    },
];

export const snsItems = [
    {
        type: "Blog",
        title: "Designing a corporate website with motion and structure",
        description:
            "기업형 웹사이트에서 레이아웃, 콘텐츠 흐름, 인터랙션을 함께 설계하는 과정을 정리했습니다.",
    },
    {
        type: "Video",
        title: "Building motion-ready UI sections with React",
        description:
            "스크롤 reveal, floating card, responsive grid를 활용한 메인 페이지 구현 과정을 소개합니다.",
    },
    {
        type: "Story",
        title: "How structured content improves portfolio projects",
        description:
            "데이터 기반 렌더링과 컴포넌트 분리가 포트폴리오 품질에 주는 영향을 다룹니다.",
    },
];

export const investmentLinks = [
    {
        title: "Stock Information",
        description: "기업의 성장 지표와 주요 투자 정보를 한눈에 확인할 수 있도록 구성합니다.",
    },
    {
        title: "Financial Reports",
        description: "실적, 보고서, 운영 성과를 체계적으로 정리하는 정보 구조를 설계합니다.",
    },
    {
        title: "IR Archive",
        description: "투자자 관점에서 필요한 주요 자료를 접근하기 쉽게 배치합니다.",
    },
];

export const footerLinks = [
    "Privacy Policy",
    "Sitemap",
    "Contact",
    "Ethics Report",
];

export const businessAreas = businessPortfolio.slice(0, 3).map((item) => ({
    title: item.title,
    description: item.description,
}));

export const corporateHighlights = sustainabilityHighlights;

export const highlightMetrics = [
    { label: "Reusable Components", value: "12+" },
    { label: "Responsive Sections", value: "08" },
    { label: "Structured Data Groups", value: "07" },
];

export const newsroomItems = pressItems.slice(0, 3).map((item) => ({
    category: item.category,
    date: item.date,
    title: item.title,
    description:
        "제품 개선, 기술 실험, 서비스 운영 경험을 바탕으로 꾸준히 성장하는 기업형 웹 플랫폼을 만들어갑니다.",
}));