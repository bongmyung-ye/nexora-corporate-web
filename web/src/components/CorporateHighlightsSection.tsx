import { corporateHighlights, highlightMetrics } from "../data/site";

export function CorporateHighlightsSection() {
    return (
        <section
            className="section corporate-highlights reveal"
            id="highlights"
            data-reveal
        >
            <div className="highlight-layout">
                <div className="highlight-panel">
                    <span className="eyebrow">Highlights</span>
                    <h2>Building with structure, reliability, and product quality.</h2>
                    <p>
                        Nexora Corporate Web은 단순한 랜딩 페이지가 아니라, 실제 기업형
                        웹사이트에 필요한 컴포넌트 구조와 콘텐츠 흐름을 연습하기 위한
                        프로젝트입니다.
                    </p>

                    <div className="metric-list">
                        {highlightMetrics.map((item) => (
                            <div className="metric-row" key={item.label}>
                                <strong>{item.value}</strong>
                                <span>{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="highlight-grid">
                    {corporateHighlights.map((item, index) => (
                        <article className="highlight-card" key={item.title}>
                            <span>{String(index + 1).padStart(2, "0")}</span>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}