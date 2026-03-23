import TopNavBar from "@/components/TopNavBar";
import HeroSection from "@/components/sections/HeroSection";
import EventDetailsSection from "@/components/sections/EventDetailsSection";
import GlobalCommunitySection from "@/components/sections/GlobalCommunitySection";
import Section4 from "@/components/sections/Section4";
import Section5 from "@/components/sections/Section5";
import Section6 from "@/components/sections/Section6";
import Section7 from "@/components/sections/Section7";
import Section8 from "@/components/sections/Section8";
import Section9 from "@/components/sections/Section9";
import Section10 from "@/components/sections/Section10";
import Section11 from "@/components/sections/Section11";
import Section12 from "@/components/sections/Section12";
import Section13 from "@/components/sections/Section13";
import Section14 from "@/components/sections/Section14";
import Section15 from "@/components/sections/Section15";
import Section16 from "@/components/sections/Section16";
import Section17 from "@/components/sections/Section17";

export default function Home() {
  return (
    <main className="flex flex-col w-full bg-[#050505] min-h-screen text-white">
      <TopNavBar />
      {/* Hand-coded Bespoke Sections matching Exact Layouts & Typography */}
      <HeroSection />
      <EventDetailsSection />
      <GlobalCommunitySection />
      <Section4 />
      <Section5 />
      <Section6 />
      
      {/* ScrollSpy Anchorage points customized per User Request */}
      <div id="exhibition">
        <Section7 />
        <Section8 />
      </div>
      <div id="main-hall"><Section9 /></div>
      <div id="venue-branding">
        <Section10 />
        <Section11 />
        <Section12 />
      </div>
      
      <div id="media"><Section13 /></div>
      <div id="tickets"><Section14 /></div>
      <div id="digital-branding"><Section15 /></div>
      <div id="others"><Section16 /></div>
      <Section17 />

      <footer className="w-full py-12 text-center text-white/30 text-sm font-light border-t border-white/5 bg-[#141414]">
        © 2026 WaytoAGI / Linkloud / Asu Capital Partners. All rights reserved.
      </footer>
    </main>
  );
}
