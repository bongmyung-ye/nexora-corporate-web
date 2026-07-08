import "./App.css";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { BusinessSection } from "./components/BusinessSection";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <BusinessSection />

        <section className="section muted-section" id="sustainability">
          <div className="section-heading">
            <span className="eyebrow">Sustainability</span>
            <h2>지속 가능한 성장을 위한 디지털 책임</h2>
            <p>
              기술이 실제 비즈니스와 사회에 긍정적인 영향을 만들 수 있도록,
              안정성·접근성·장기적인 운영 품질을 함께 고려합니다.
            </p>
          </div>
        </section>

        <section className="section" id="newsroom">
          <div className="section-heading">
            <span className="eyebrow">Newsroom</span>
            <h2>Latest updates</h2>
            <p>
              제품 개선, 기술 실험, 서비스 운영 경험을 바탕으로 꾸준히 성장하는
              기업형 웹 플랫폼을 만들어갑니다.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
