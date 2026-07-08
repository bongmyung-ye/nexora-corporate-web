import "./App.css";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { BusinessSection } from "./components/BusinessSection";
import { NewsroomSection } from "./components/NewsroomSection";
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

        <NewsroomSection />
      </main>
      <Footer />
    </>
  );
}

export default App;