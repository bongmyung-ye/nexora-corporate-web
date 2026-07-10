import { businessPortfolio } from "../data/site";

export function BusinessPortfolioSection() {
    const [featuredBusiness, ...supportingBusinesses] = businessPortfolio;

    return (
        <section
            className="section business-portfolio-section reveal"
            id="business"
            data-reveal
        >
            <div className="section-heading portfolio-heading">
                <span className="eyebrow">Business</span>
                <h2>AI와 디지털 경험을 중심으로 확장되는 비즈니스 포트폴리오</h2>
                <p>
                    다양한 산업 영역을 하나의 디지털 흐름으로 연결하고, 각 서비스가
                    독립적으로 확장될 수 있는 구조를 설계합니다.
                </p>
            </div>

            <div className="portfolio-showcase">
                <article className="portfolio-card portfolio-card-featured">
                    <div className="portfolio-card-top">
                        <span>{featuredBusiness.tag}</span>
                        <strong>01</strong>
                    </div>

                    <div className="featured-business-copy">
                        <h3>{featuredBusiness.title}</h3>
                        <p>{featuredBusiness.description}</p>
                    </div>

                    <div className="featured-business-footer">
                        <span>Core Business</span>
                        <small>Strategic portfolio</small>
                    </div>
                </article>

                <div className="portfolio-grid portfolio-support-grid">
                    {supportingBusinesses.map((item, index) => (
                        <article className="portfolio-card portfolio-card-compact" key={item.title}>
                            <div className="portfolio-card-top">
                                <span>{item.tag}</span>
                                <strong>{String(index + 2).padStart(2, "0")}</strong>
                            </div>

                            <h3>{item.title}</h3>
                            <p>{item.description}</p>

                            <div className="portfolio-card-link">View business</div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}