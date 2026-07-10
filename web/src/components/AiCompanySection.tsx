import {
    developmentPartners,
    infrastructurePartners,
    type TechnologyPartner,
} from "../data/partners";

interface PartnerCardProps {
    partner: TechnologyPartner;
    duplicate?: boolean;
}

function PartnerCard({ partner, duplicate = false }: PartnerCardProps) {
    const Icon = partner.icon;

    return (
        <a
            className="partner-card"
            href={partner.href}
            target="_blank"
            rel="noreferrer"
            tabIndex={duplicate ? -1 : undefined}
        >
            <span className="partner-card-icon" aria-hidden="true">
                <Icon />
            </span>

            <span className="partner-card-copy">
                <strong>{partner.name}</strong>
                <small>{partner.category}</small>
            </span>

            <span className="partner-card-arrow" aria-hidden="true">
                ↗
            </span>
        </a>
    );
}

interface PartnerMarqueeProps {
    partners: TechnologyPartner[];
    direction: "left" | "right";
}

function PartnerMarquee({ partners, direction }: PartnerMarqueeProps) {
    return (
        <div className="partner-lane">
            <div className="partner-marquee" data-direction={direction}>
                <div className="partner-track">
                    <div className="partner-group">
                        {partners.map((partner) => (
                            <PartnerCard partner={partner} key={partner.name} />
                        ))}
                    </div>

                    <div className="partner-group" aria-hidden="true">
                        {partners.map((partner) => (
                            <PartnerCard
                                partner={partner}
                                duplicate
                                key={`${partner.name}-duplicate`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export function AiCompanySection() {
    return (
        <section
            className="section ai-company-section reveal"
            id="partners"
            data-reveal
        >
            <div className="ai-company-inner">
                <div className="ai-company-heading">
                    <div>
                        <span className="eyebrow">Technology Ecosystem</span>

                        <h2>
                            기술과 인프라를 연결해
                            <br />
                            안정적인 디지털 서비스를 만듭니다.
                        </h2>
                    </div>

                    <p>
                        Nexora는 클라우드, 배포, 데이터베이스, 개발 플랫폼을 하나의
                        서비스 흐름으로 연결합니다. 각 기술은 단순한 장식이 아니라 실제
                        제품 운영과 확장성을 고려해 선택됩니다.
                    </p>
                </div>

                <div className="partner-ecosystem-label">
                    <span>Partner ecosystem · Cloud · Infrastructure · Database · Development</span>
                </div>

                <div className="partner-marquee-stack">
                    <PartnerMarquee
                        partners={infrastructurePartners}
                        direction="left"
                    />

                    <PartnerMarquee
                        partners={developmentPartners}
                        direction="right"
                    />
                </div>
            </div>
        </section>
    );
}