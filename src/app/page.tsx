import HeroSection from './_components/HeroSection';
import ExcellentSection from './_components/Excellent';
import ProductSection from './_components/ProductSection';
import CTASection from './_components/Cta';
import ProductAdvantage from './_components/ProductAdvantage';
import WaToggle from './_components/WaToggle';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProductSection />
      <ExcellentSection />
      <CTASection />
      <ProductAdvantage />
      <WaToggle />
    </main>
  );
}
