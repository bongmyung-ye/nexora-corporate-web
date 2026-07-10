import { pressItems, snsItems } from "../data/site";

export function MediaSection() {
    return (
        <section className="section media-section reveal" id="media" data-reveal>
            <div className="media-layout">
                <div className="press-panel">
                    <div className="section-heading">
                        <span className="eyebrow">Press Media</span>
                        <h2>Latest stories from Nexora</h2>
                        <p>
                            기업형 웹 플랫폼의 개선 과정과 기술 실험, 서비스 운영 경험을
                            가상의 보도자료 형태로 정리했습니다.
                        </p>
                    </div>

                    <div className="press-list">
                        {pressItems.map((item) => (
                            <article className="press-item" key={item.title}>
                                <span>{item.category}</span>
                                <h3>{item.title}</h3>
                                <time>{item.date}</time>
                            </article>
                        ))}
                    </div>
                </div>

                <div className="sns-panel">
                    <div className="section-heading compact-heading">
                        <span className="eyebrow">SNS Media</span>
                        <h2>Inside the build</h2>
                    </div>

                    <div className="sns-card-list">
                        {snsItems.map((item) => (
                            <article className="sns-card" key={item.title}>
                                <span>{item.type}</span>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}