import { newsroomItems } from "../data/site";

export function NewsroomSection() {
    return (
        <section className="section newsroom-section" id="newsroom">
            <div className="section-heading">
                <span className="eyebrow">Newsroom</span>
                <h2>Latest updates from Nexora</h2>
                <p>
                    제품 개선, 기술 실험, 서비스 운영 경험을 바탕으로 꾸준히 성장하는
                    기업형 웹 플랫폼을 만들어갑니다.
                </p>
            </div>

            <div className="newsroom-grid">
                {newsroomItems.map((item) => (
                    <article className="news-card" key={item.title}>
                        <div className="news-meta">
                            <span>{item.category}</span>
                            <time>{item.date}</time>
                        </div>

                        <h3>{item.title}</h3>
                        <p>{item.description}</p>

                        <a href="#newsroom" aria-label={`${item.title} 자세히 보기`}>
                            Read more
                        </a>
                    </article>
                ))}
            </div>
        </section>
    );
}