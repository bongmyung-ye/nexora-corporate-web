import { companyStats } from "../data/site";

export function HeroSection() {
    return (
        <section className="hero" id="company">
            <div className="hero-background" aria-hidden="true">
                <span className="hero-orb hero-orb-large" />
                <span className="hero-orb hero-orb-small" />
                <span className="hero-line hero-line-one" />
                <span className="hero-line hero-line-two" />
            </div>

            <div className="hero-content">
                <span className="eyebrow">AI-driven corporate platform</span>

                <h1>
                    Building intelligent digital experiences for tomorrow’s businesses.
                </h1>

                <p>
                    Nexora는 데이터, 클라우드, 사용자 경험을 연결해 기업이 더 빠르게
                    성장할 수 있는 디지털 기반을 설계합니다.
                </p>

                <div className="hero-actions">
                    <a href="#business" className="primary-button">
                        Explore Business
                    </a>
                    <a href="#sustainability" className="secondary-button">
                        Our Values
                    </a>
                </div>
            </div>

            <div className="hero-visual" aria-label="Company motion summary">
                <div className="hero-panel">
                    <div className="panel-label">Company Overview</div>

                    <div className="stat-grid">
                        {companyStats.map((item) => (
                            <div key={item.label} className="stat-card">
                                <strong>{item.value}</strong>
                                <span>{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="floating-card floating-card-primary">
                    <span>AI Model</span>
                    <strong>Connected</strong>
                </div>

                <div className="floating-card floating-card-secondary">
                    <span>Cloud</span>
                    <strong>Stable</strong>
                </div>
            </div>
        </section>
    );
}