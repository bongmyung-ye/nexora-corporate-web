import { investmentLinks } from "../data/site";

export function InvestmentSection() {
    return (
        <section
            className="section investment-section reveal"
            id="investment"
            data-reveal
        >
            <div className="investment-header">
                <span className="eyebrow">Investment</span>
                <h2>Transparent information architecture for business growth.</h2>
            </div>

            <div className="investment-grid">
                {investmentLinks.map((item) => (
                    <article className="investment-card" key={item.title}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <span>View more</span>
                    </article>
                ))}
            </div>
        </section>
    );
}