import fs from 'fs';
import path from 'path';

const d = 'src/components/sections';
let updated = 0;

const processFile = (file, replacements) => {
    const p = path.join(d, file);
    if (!fs.existsSync(p)) return;
    
    let c = fs.readFileSync(p, 'utf8');
    
    if (!c.includes('useLanguage')) {
        let lines = c.split('\n');
        let importIdx = lines.findIndex(l => l.startsWith('import '));
        if(importIdx > -1) lines.splice(importIdx, 0, 'import { useLanguage } from "@/i18n/LanguageContext";');
        c = lines.join('\n');
    }
    
    if (!c.includes('const { t } = useLanguage();')) {
        c = c.replace(/export default function \w+\([^)]*\)\s*\{/, match => match + '\n  const { t } = useLanguage();');
    }

    for (let r of replacements) {
        c = c.replace(r[0], r[1]);
    }
    
    fs.writeFileSync(p, c);
    updated++;
    console.log("Updated", file);
};

processFile('EventDetailsSection.tsx', [
    [/>APRIL 8</g, '>{t("s2.date")}<'],
    [/>1 DAY EVENT</g, '>{t("s2.event")}<'],
    [/>HAPPO-EN, TOKYO_</g, '>{t("s2.title")}<'],
    [/>JAPAN TO GLOBAL\.</g, '>{t("s2.japanToGlobal")}<']
]);

processFile('GlobalCommunitySection.tsx', [
    [/>WAYTOAGI IS A GLOBAL COMMUNITY OF AGI CREATORS AND AI NATIVES WITH OVER 100K\+ MEMBERS WORLDWIDE\.</g, '>{t("s3.title1")}<'],
    [/>JOINING US WILL GIVE YOU THE OPPORTUNITY TO CONNECT DIRECTLY WITH OVER 500\+ CORE AI FOUNDERS AND MORE THAN 100\+ TOP VC INVESTORS\.</g, '>{t("s3.title2")}<']
]);

processFile('Section4.tsx', [
    [/>Linkloud is an innovative Asia-wide community that connects founders and entrepreneurs in SaaS and AI\. We provide support for over hundreds of members in gaining a comprehensive understanding of overseas business, and breaking into local markets through continuous in-depth local meetups and professional services including Growth & Marketing Workshops, Business Acceleration Programs, and specific consulting projects, etc\.</g, '>{t("s4.linkloud")}<'],
    [/>About Asu Capital Partners \(asu\.vc\)</g, '>{t("s4.asuTitle")}<'],
    [/>Asu Capital Partners is a Tokyo-based venture capital firm with the theme of "Japan to Global"\. We aim to become the capital partners of tomorrow\'s \(明日, Asu\) innovators, by supporting seed stage founders who aim "Day 1 Global" – to branch out their products to the global market from Day 1 of its establishment\.</g, '>{t("s4.asuDesc")}<']
]);

processFile('Section5.tsx', [
    [/>Building the largest AGI innovation community in Asia with the top-tier AGI tech companies from China and global industry connections\.</g, '>{t("s5.title")}<'],
    [/>Connecting the absolute best technical talent, entrepreneurs, and global capital together to inspire innovation and share the latest breakthroughs\. Witness the cutting-edge collision of Japan\'s hardware supply chain excellence and China\'s software ecosystem speed!</g, '>{t("s5.desc")}<']
]);

processFile('Section6.tsx', [
    [/>Featured Partners</g, '>{t("s6.title")}<'],
    [/>Participants, such as sponsors, VC partners, community partners, and media, will meet in Happo-en\. This gathering of influential stakeholders is a place to promote collaboration, innovation, and growth, and provides an unrivaled opportunity for networking and interaction\.</g, '>{t("s6.desc")}<'],
    [/"FEATURED SPONSORS"/g, 't("s6.cat1")'],
    [/"FEATURED COMMUNITY PARTNERS"/g, 't("s6.cat2")'],
    [/"FEATURED MEDIA PARTNERS"/g, 't("s6.cat3")']
]);

processFile('Section7.tsx', [
    [/>The Venue</g, '>{t("s7.title")}<'],
    [/>Happo-en</g, '>{t("s7.sub")}<'],
    [/>Situated in the heart of Tokyo, Happo-en is an expansive traditional Japanese estate that beautifully marries historical elegance with modern functionality\. Known for its breathtaking 400-year-old bonsai trees and serene koi ponds, this venue provides a majestic backdrop for the AGI Horizon Summit\. The fusion of nature and innovation here perfectly symbolizes the harmony of human history with the future of AGI and Web3 technologies\.</g, '>{t("s7.desc")}<']
]);

const s8Reps = [
    [/>Schedule</g, '>{t("s8.title")}<'],
    [/>General Session</g, '>{t("s8.generalSession")}<'],
    [/>Check-in & Registration Starts</g, '>{t("s8.m1")}<'],
    [/>Opening Remarks: The Future of AGI in Japan & Asia</g, '>{t("s8.m2")}<'],
    [/>Keynote 1: Next-Generation Foundational Models</g, '>{t("s8.m3")}<'],
    [/>Panel Discussion: Investment Ecosystem for AI & Web3</g, '>{t("s8.m4")}<'],
    [/>Keynote 2: Real-world Applications of AGI</g, '>{t("s8.m5")}<'],
    [/>Networking Lunch Break & Exhibition Tour</g, '>{t("s8.m6")}<'],
    [/>Afternoon Session</g, '>{t("s8.afternoonSession")}<'],
    [/>Interactive Workshops \(Tracks A & B\)</g, '>{t("s8.a1")}<'],
    [/>Pitch Sessions for Seed Startups</g, '>{t("s8.a2")}<'],
    [/>Panel Discussion: Building the AI Talent Pool</g, '>{t("s8.a3")}<'],
    [/>Keynote 3: Scaling Asian Startups Globally</g, '>{t("s8.a4")}<'],
    [/>Closing Ceremony & Awards Presentation</g, '>{t("s8.a5")}<'],
    [/>VIP Dinner & Final Networking</g, '>{t("s8.a6")}<']
];
processFile('Section8.tsx', s8Reps);

processFile('Section9.tsx', [
    [/>EXHIBITION</g, '>{t("s9.title")}<'],
    [/>Experience cutting-edge tech in our expansive interactive showroom\.</g, '>{t("s9.desc")}<']
]);
processFile('Section10.tsx', [
    [/>MAIN HALL</g, '>{t("s10.title")}<'],
    [/>Keynote speeches and thought leadership panels covering global macro trends and deeply technical founder stories\.</g, '>{t("s10.desc")}<']
]);
processFile('Section11.tsx', [
    [/>VENUE BRANDING</g, '>{t("s11.title")}<'],
    [/>Expose your brand footprint physically across the 400-year-old traditional venue architecture\.</g, '>{t("s11.desc")}<']
]);
processFile('Section12.tsx', [
    [/>VIP AREA & VIP DINNER</g, '>{t("s12.title")}<'],
    [/>Exclusive private salons gathering the absolute forefront of venture capital and visionary creators\.</g, '>{t("s12.desc")}<']
]);
processFile('Section13.tsx', [
    [/>MEDIA</g, '>{t("s13.title")}<'],
    [/>Promote your brand through top-tier media outlets capturing global digital trends and high-density information arrays\.</g, '>{t("s13.desc")}<']
]);
processFile('Section14.tsx', [
    [/>TICKETS</g, '>{t("s14.title")}<'],
    [/>GENERAL PASS</g, '>{t("s14.generalPass")}<'],
    [/>1 DAYS</g, '>{t("s14.days")}<'],
    [/>Main Building: Exhibition, Speakers, Performance, Terrace, Tea House, Lake, Bonsai Spot, Oval, Side Events\.</g, '>{t("s14.desc")}<']
]);
processFile('Section15.tsx', [
    [/>DIGITAL BRANDING</g, '>{t("s15.title")}<'],
    [/>Maximize online reach through our highly curated social ecosystem and premium digital exposure packages\.</g, '>{t("s15.desc")}<']
]);
processFile('Section16.tsx', [
    [/>OTHERS</g, '>{t("s16.title")}<'],
    [/>FLYER IN WELCOME BAG</g, '>{t("s16.flyer")}<'],
    [/>Your promotional flyer will be included in the official welcome bag given to all attendees, ensuring direct exposure to every participant from the moment they arrive\.</g, '>{t("s16.flyerDesc")}<'],
    [/>COMPANY INFO ON PAMPHLET</g, '>{t("s16.pamphlet")}<'],
    [/>Your company logo and profile will be featured in the official Summit pamphlet, providing attendees with essential information about your brand and offerings\.</g, '>{t("s16.pamphletDesc")}<']
]);

console.log("Total updated:", updated);
