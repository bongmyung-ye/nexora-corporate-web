import { businessAreas } from "../data/site";

export function BusinessSection() {
    return (
        <section className="section" id="business">
            <div className="section-heading">
                <span className="eyebrow">Business</span>
                <h2>기술과 비즈니스를 연결하는 핵심 영역</h2>
                <p>
                    Nexora는 기업의 디지털 전환에 필요한 플랫폼, 인프라, 사용자 경험을
                    하나의 흐름으로 설계합니다.
                </p>
            </div>

            <div className="business-grid">
                {businessAreas.map((item, index) => (
                    <article className="business-card" key={item.title}>
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}