import Features from "@/components/module/Homepage/Features";
import Hero from "@/components/module/Homepage/Hero";
import Services from "@/components/module/Homepage/Services";
import HowItWorks from "./HowItWorks";

export default function HomePage() {
  return (
    <div className="w-11/12 mx-auto">
      <Hero></Hero>
      <Features></Features>
      <Services></Services>
      <HowItWorks></HowItWorks>
    </div>
  );
}
