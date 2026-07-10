import "./App.css";
import "./styles/theme.css";
import "./styles/interface.css";
import "./styles/header.css";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { SustainabilityPreviewSection } from "./components/SustainabilityPreviewSection";
import { AiCompanySection } from "./components/AiCompanySection";
import { BusinessPortfolioSection } from "./components/BusinessPortfolioSection";
import { MediaSection } from "./components/MediaSection";
import { InvestmentSection } from "./components/InvestmentSection";
import { Footer } from "./components/Footer";
import { useScrollReveal } from "./hooks/useScrollReveal";
import { useScrollProgress } from "./hooks/useScrollProgress";

function App() {
  useScrollReveal();
  useScrollProgress();

  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <Header />

      <main>
        <HeroSection />
        <SustainabilityPreviewSection />
        <AiCompanySection />
        <BusinessPortfolioSection />
        <MediaSection />
        <InvestmentSection />
      </main>

      <Footer />
    </>
  );
}

export default App;