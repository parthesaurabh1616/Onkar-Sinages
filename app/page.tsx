import { QuoteProvider } from "@/components/providers/QuoteProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/ui/FloatingActions";
import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { Services } from "@/components/sections/Services";
import { Products } from "@/components/sections/Products";
import { Showcase } from "@/components/sections/Showcase";
import { Process } from "@/components/sections/Process";
import { WhyUs } from "@/components/sections/WhyUs";
import { Estimator } from "@/components/sections/Estimator";
import { FAQ } from "@/components/sections/FAQ";
import { CTABanner } from "@/components/sections/CTABanner";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <QuoteProvider>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Ecosystem />
        <Services />
        <Products />
        <Showcase />
        <Process />
        <WhyUs />
        <Estimator />
        <FAQ />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </QuoteProvider>
  );
}
