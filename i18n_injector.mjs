import fs from 'fs';
import path from 'path';

const dir = 'src/components/sections';

const components = [
    'HeroSection.tsx', 'EventDetailsSection.tsx', 'GlobalCommunitySection.tsx', 
    'Section4.tsx', 'Section5.tsx', 'Section6.tsx', 'Section7.tsx', 'Section8.tsx',
    'Section9.tsx', 'Section10.tsx', 'Section11.tsx', 'Section12.tsx', 'Section13.tsx',
    'Section14.tsx', 'Section15.tsx', 'Section16.tsx'
];

components.forEach(file => {
   const p = path.join(dir, file);
   if (fs.existsSync(p)) {
      let c = fs.readFileSync(p, 'utf8');
      
      // Inject Import
      if (!c.includes('useLanguage')) {
          c = c.replace(/(import .*?;\n)(?!import)/, match => match + 'import { useLanguage } from "@/i18n/LanguageContext";\n');
      }
      
      // Inject Hook
      if (!c.includes('const { t } = useLanguage();')) {
          c = c.replace(/(export default function \w+\(\) \{)/, '$1\n  const { t } = useLanguage();');
      }
      
      // Hero
      c = c.replace('APR 8, 2026<span className="mx-2 text-white/30">•</span>HAPPO-EN TOKYO', '{t("hero.date")}<span className="mx-2 text-white/30">•</span>{t("hero.location")}');
      c = c.replace('&quot;You&apos;ve got to start with the customer experience and work back toward the technology - not the other way around.&quot;', '{t("hero.quote")}');
      c = c.replace('- Steve Jobs, Worldwide Developers Conference, 1997', '{t("hero.quoteAuthor")}');
      
      // S2
      c = c.replace(/>APRIL 8</g, '>{t("s2.date")}<');
      c = c.replace(/>1 DAY EVENT</g, '>{t("s2.event")}<');
      c = c.replace(/>HAPPO-EN, TOKYO_</g, '>{t("s2.title")}<');
      c = c.replace(/>JAPAN TO GLOBAL\.</g, '>{t("s2.japanToGlobal")}<');
      
      // S3
      c = c.replace(/WAYTOAGI IS A GLOBAL COMMUNITY OF AGI CREATORS AND AI NATIVES WITH OVER 100K\+ MEMBERS WORLDWIDE\./g, '{t("s3.title1")}');
      c = c.replace(/JOINING US WILL GIVE YOU THE OPPORTUNITY TO CONNECT DIRECTLY WITH OVER 500\+ CORE AI FOUNDERS AND MORE THAN 100\+ TOP VC INVESTORS\./g, '{t("s3.title2")}');
      
      // S4
      c = c.replace(/Linkloud is an innovative Asia-wide community that connects founders and entrepreneurs in SaaS and AI\. We provide support for over hundreds of members in gaining a comprehensive understanding of overseas business, and breaking into local markets through continuous in-depth local meetups and professional services including Growth & Marketing Workshops, Business Acceleration Programs, and specific consulting projects, etc\./g, '{t("s4.linkloud")}');
      c = c.replace(/About Asu Capital Partners \(asu\.vc\)/g, '{t("s4.asuTitle")}');
      c = c.replace(/Asu Capital Partners is a Tokyo-based venture capital firm with the theme of "Japan to Global"\. We aim to become the capital partners of tomorrow's \(明日, Asu\) innovators, by supporting seed stage founders who aim "Day 1 Global" – to branch out their products to the global market from Day 1 of its establishment\./g, '{t("s4.asuDesc")}');
      
      // S5
      c = c.replace(/Building the largest AGI innovation community in Asia with the top-tier AGI tech companies from China and global industry connections\./g, '{t("s5.title")}');
      c = c.replace(/Connecting the absolute best technical talent, entrepreneurs, and global capital together to inspire innovation and share the latest breakthroughs. Witness the cutting-edge collision of Japan's hardware supply chain excellence and China's software ecosystem speed!/g, '{t("s5.desc")}');
      
      // S6
      c = c.replace(/>Featured Partners</g, '>{t("s6.title")}<');
      c = c.replace(/>Participants, such as sponsors, VC partners, community partners, and media, will meet in Happo-en\. This gathering of influential stakeholders is a place to promote collaboration, innovation, and growth, and provides an unrivaled opportunity for networking and interaction\.</g, '>{t("s6.desc")}<');
      c = c.replace(/"FEATURED SPONSORS"/g, 't("s6.cat1")');
      c = c.replace(/"FEATURED COMMUNITY PARTNERS"/g, 't("s6.cat2")');
      c = c.replace(/"FEATURED MEDIA PARTNERS"/g, 't("s6.cat3")');
      
      // S7
      c = c.replace(/>The Venue</g, '>{t("s7.title")}<');
      c = c.replace(/>Happo-en</g, '>{t("s7.sub")}<');
      c = c.replace(/>Situated in the heart of Tokyo, Happo-en is an expansive traditional Japanese estate that beautifully marries historical elegance with modern functionality\. Known for its breathtaking 400-year-old bonsai trees and serene koi ponds, this venue provides a majestic backdrop for the AGI Horizon Summit\. The fusion of nature and innovation here perfectly symbolizes the harmony of human history with the future of AGI and Web3 technologies\.</g, '>{t("s7.desc")}<');
      
      // S8
      c = c.replace(/>Schedule</g, '>{t("s8.title")}<');
      c = c.replace(/>General Session</g, '>{t("s8.generalSession")}<');
      c = c.replace(/>Check-in & Registration Starts</g, '>{t("s8.m1")}<');
      c = c.replace(/>Opening Remarks: The Future of AGI in Japan & Asia</g, '>{t("s8.m2")}<');
      c = c.replace(/>Keynote 1: Next-Generation Foundational Models</g, '>{t("s8.m3")}<');
      c = c.replace(/>Panel Discussion: Investment Ecosystem for AI & Web3</g, '>{t("s8.m4")}<');
      c = c.replace(/>Keynote 2: Real-world Applications of AGI</g, '>{t("s8.m5")}<');
      c = c.replace(/>Networking Lunch Break & Exhibition Tour</g, '>{t("s8.m6")}<');
      c = c.replace(/>Afternoon Session</g, '>{t("s8.afternoonSession")}<');
      c = c.replace(/>Interactive Workshops \(Tracks A & B\)</g, '>{t("s8.a1")}<');
      c = c.replace(/>Pitch Sessions for Seed Startups</g, '>{t("s8.a2")}<');
      c = c.replace(/>Panel Discussion: Building the AI Talent Pool</g, '>{t("s8.a3")}<');
      c = c.replace(/>Keynote 3: Scaling Asian Startups Globally</g, '>{t("s8.a4")}<');
      c = c.replace(/>Closing Ceremony & Awards Presentation</g, '>{t("s8.a5")}<');
      c = c.replace(/>VIP Dinner & Final Networking</g, '>{t("s8.a6")}<');
      
      // S9-S15 Basic Headers
      c = c.replace(/>EXHIBITION</g, '>{t("s9.title")}<');
      c = c.replace(/>Experience cutting-edge tech in our expansive interactive showroom\.</g, '>{t("s9.desc")}<');
      
      c = c.replace(/>MAIN HALL</g, '>{t("s10.title")}<');
      c = c.replace(/>Keynote speeches and thought leadership panels covering global macro trends and deeply technical founder stories\.</g, '>{t("s10.desc")}<');
      
      c = c.replace(/>VENUE BRANDING</g, '>{t("s11.title")}<');
      c = c.replace(/>Expose your brand footprint physically across the 400-year-old traditional venue architecture\.</g, '>{t("s11.desc")}<');
      
      c = c.replace(/>VIP AREA & VIP DINNER</g, '>{t("s12.title")}<');
      c = c.replace(/>Exclusive private salons gathering the absolute forefront of venture capital and visionary creators\.</g, '>{t("s12.desc")}<');
      
      c = c.replace(/>MEDIA</g, '>{t("s13.title")}<');
      c = c.replace(/>Promote your brand through top-tier media outlets capturing global digital trends and high-density information arrays\.</g, '>{t("s13.desc")}<');
      
      // S14 specific
      c = c.replace(/>TICKETS</g, '>{t("s14.title")}<');
      c = c.replace(/>GENERAL PASS</g, '>{t("s14.generalPass")}<');
      c = c.replace(/>1 DAYS</g, '>{t("s14.days")}<');
      c = c.replace(/>Main Building: Exhibition, Speakers, Performance, Terrace, Tea House, Lake, Bonsai Spot, Oval, Side Events\.</g, '>{t("s14.desc")}<');
      
      // S15 specific
      c = c.replace(/>DIGITAL BRANDING</g, '>{t("s15.title")}<');
      c = c.replace(/>Maximize online reach through our highly curated social ecosystem and premium digital exposure packages\.</g, '>{t("s15.desc")}<');
      
      // S16 specific
      c = c.replace(/>OTHERS</g, '>{t("s16.title")}<');
      c = c.replace(/>FLYER IN WELCOME BAG</g, '>{t("s16.flyer")}<');
      c = c.replace(/>Your promotional flyer will be included in the official welcome bag given to all attendees, ensuring direct exposure to every participant from the moment they arrive\.</g, '>{t("s16.flyerDesc")}<');
      c = c.replace(/>COMPANY INFO ON PAMPHLET</g, '>{t("s16.pamphlet")}<');
      c = c.replace(/>Your company logo and profile will be featured in the official Summit pamphlet, providing attendees with essential information about your brand and offerings\.</g, '>{t("s16.pamphletDesc")}<');

      fs.writeFileSync(p, c);
   }
});

console.log("i18n injection complete!");
