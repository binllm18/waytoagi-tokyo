"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";

const speakers = [
    { name: "Yujia Zhao", title: "Co-founder of Funda AI" },
    { name: "Hiroaki", title: "AiHUB founder" },
    { name: "Matty Shimura", title: "ElevenLabs Creator Contest, Chroma Award EP" },
    { name: "Will Wang", title: "CEO of Even Realities" },
    { name: "Qiu Shi", title: "Founder of Recho" },
    { name: "Queena Qiu", title: "Co-Founder and CEO of Polyverse" },
    { name: "Koki", title: "Head of the Asia-Pacific Region, Silicon Valley Legal Technology Frontier Community" },
    { name: "Elliot", title: "Head of EverMind Community" },
    { name: "Joe Guo", title: "Founder and CEO of ACE Studio" },
    { name: "Yves Dalbiez", title: "Engaged in film creation for 20 years" },
    { name: "Juan Gabriel Perez", title: "Head of Product Planning, ProductHunt" },
    { name: "Jane Zhang", title: "MeDo Operations Supervisor" },
    { name: "Sae", title: "Initiator of MeltingHack" },
    { name: "Suguru Sato", title: "Uravation CEO" },
    { name: "AJ", title: "WaytoAGI Community Initiator" },
    { name: "Koki", title: "Anthropic Japan" },
    { name: "Ring Hyacinth", title: "AI Artist" },
    { name: "Simon Lee", title: "AI Artist" },
    { name: "Luke", title: "Founder of Asu Capital" },
    { name: "Gao Ning", title: "Co-founder of Linkloud" }
];

export default function Section5() {
  const { t } = useLanguage();
    return (
        <section className="relative w-full min-h-screen bg-[#1c1c1c] py-24 flex items-center overflow-hidden border-t border-white/5">
            <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 xl:px-16">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                        {t("s5.title")}
                    </h2>
                    <div className="w-full h-px bg-white/10" />
                </motion.div>

                {/* 10-Column Grid wrapped in flexible rows (Matching the 16-20 speaker layout) */}
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 xl:grid-cols-10 gap-x-4 gap-y-6">
                    {speakers.map((speaker, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "0px" }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="flex flex-col items-center flex-1 bg-white/[0.03] backdrop-blur-md rounded-2xl border border-white/[0.08] p-4 text-center hover:bg-white/[0.05] transition-colors"
                        >
                            {/* Avatar Placeholder (Since slices aren't present for avatars, using an abstract representation with CSS to sample the original image or fallback) */}
                            <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden mb-4 border-2 border-white/10 relative bg-black/50 shadow-inner flex items-center justify-center">
                                {/* CSS Background offset trick could be used if we had exact coordinates, otherwise default fallback */}
                                <span className="text-2xl font-bold text-white/20 uppercase tracking-widest">{speaker.name.charAt(0)}</span>
                            </div>

                            <h3 className="text-sm md:text-base font-bold text-white leading-tight mb-2">
                                {speaker.name}
                            </h3>
                            <p className="text-[10px] md:text-xs text-white/40 leading-snug font-medium line-clamp-4">
                                {speaker.title}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Removed fine print disclaimer per user request */}
            </div>
        </section>
    );
}
