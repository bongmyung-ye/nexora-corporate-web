import { sustainabilityHighlights } from "../data/site";

export function SustainabilityPreviewSection() {
    return (
        <section
            className="section sustainability-preview reveal"
            id="sustainability"
            data-reveal
        >
            <div className="sustainability-copy">
                <span className="eyebrow">Sustainability</span>
                <h2>Responsibility for a more sustainable digital future.</h2>
                <p>
                    Nexora는 AI 기반 서비스가 더 오래, 더 안정적으로 운영될 수 있도록
                    기술적 책임과 사용자 경험을 함께 고려합니다.
                </p>
                <a href="#business" className="light-button">
                    Explore Our Approach
                </a>
            </div>

            <div className="sustainability-cards">
                {sustainabilityHighlights.map((item, index) => (
                    <article className="sustainability-card" key={item.title}>
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}