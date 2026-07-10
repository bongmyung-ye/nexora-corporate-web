import "./App.css";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { SustainabilityPreviewSection } from "./components/SustainabilityPreviewSection";
import { AiCompanySection } from "./components/AiCompanySection";
import { BusinessPortfolioSection } from "./components/BusinessPortfolioSection";
import { MediaSection } from "./components/MediaSection";
import { InvestmentSection } from "./components/InvestmentSection";
import { Footer } from "./components/Footer";
import { useScrollReveal } from "./hooks/useScrollReveal";

function App() {
  useScrollReveal();

  return (
    <>
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