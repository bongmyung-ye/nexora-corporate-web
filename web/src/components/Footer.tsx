import { footerLinks } from "../data/site";

export function Footer() {
    return (
        <footer className="site-footer" id="contact">
            <div className="footer-brand">
                <strong>Nexora</strong>
                <p>
                    Fictional AI corporate website built with React, TypeScript, and
                    original motion-focused UI implementation.
                </p>
            </div>

            <div className="footer-links">
                <span>Operations</span>
                {footerLinks.map((item) => (
                    <a href="#company" key={item}>
                        {item}
                    </a>
                ))}
            </div>

            <div className="footer-info">
                <span>Company Info</span>
                <p>Digital Strategy Lab, Seoul</p>
                <p>hello@nexora.example</p>
                <p>© 2026 Nexora Labs. All rights reserved.</p>
            </div>
        </footer>
    );
}