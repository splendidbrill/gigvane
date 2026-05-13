import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Comparison from "@/components/comparison";
import HowItWorks from "@/components/how-it-works";
import WaitlistCTA from "@/components/waitlist";

export default function Home() {
  return (
    <div style={{ background: "var(--bone)" }}>
      <Navbar />
      <Hero />
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
        <div className="section-rule" />
      </div>
      <Comparison />
      <HowItWorks />
      <WaitlistCTA />
    </div>
  );
}
