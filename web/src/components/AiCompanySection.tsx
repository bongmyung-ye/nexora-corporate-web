import { aiStatements } from "../data/site";

export function AiCompanySection() {
    return (
        <section className="section ai-company-section reveal" data-reveal>
            <div className="ai-company-inner">
                <span className="eyebrow">AI Company</span>

                <div className="statement-lines">
                    {aiStatements.map((line) => (
                        <p key={line}>{line}</p>
                    ))}
                </div>

                <div className="ai-company-description">
                    <h2>AI 중심의 비즈니스 모델로 변화하는 기업형 플랫폼</h2>
                    <p>
                        Nexora는 정적인 소개 페이지를 넘어, 구조화된 콘텐츠와 부드러운
                        인터랙션을 통해 실제 기업 사이트에 가까운 사용자 경험을 구현합니다.
                    </p>
                </div>
            </div>
        </section>
    );
}