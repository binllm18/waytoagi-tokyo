"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Section17() {
    const { t } = useLanguage();
    const history = [
        { year: "2026", event: t("s17.e26"), loc: t("s17.l26") },
        { year: "2025", event: t("s17.e25"), loc: t("s17.l25") },
        { year: "2024", event: t("s17.e24"), loc: t("s17.l24") },
        { year: "2023", event: t("s17.e23"), loc: t("s17.l23") }
    ];

    return (
        <section className="relative w-full min-h-screen bg-[#111111] py-32 flex flex-col justify-center overflow-hidden border-t border-white/5">
            <div className="relative z-10 w-full max-w-[1500px] mx-auto px-6 md:px-12 xl:px-24 flex flex-col items-center pb-24">

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center"
                >
                    <p className="text-white/50 font-mono tracking-[0.4em] uppercase text-xs md:text-sm font-semibold mb-2">
                        {t("s17.edition")}
                    </p>
                    <div className="h-px w-24 bg-white/20 mx-auto" />
                </motion.div>

                {/* Refined Timeline Layout with Elegant Borders */}
                <div className="grid grid-cols-1 md:grid-cols-4 w-full mb-32 border-t border-white/10">
                    {history.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="flex flex-col border-b md:border-b-0 md:border-r border-white/10 last:border-b-0 last:border-r-0 pb-12 pt-10 md:pb-0 px-4 group hover:bg-white/[0.02] transition-colors duration-500"
                        >
                            <h3 className="text-4xl md:text-5xl font-light text-white/50 group-hover:text-white transition-colors duration-500 font-mono mb-6">
                                {item.year}
                            </h3>
                            <h4 className="text-xl md:text-2xl lg:text-[28px] font-black text-white leading-[1.2] whitespace-pre-line tracking-tight h-24 flex items-start">
                                {item.event}
                            </h4>
                            <p className="mt-auto pt-16 text-xs font-bold tracking-[0.4em] uppercase text-white/30 group-hover:text-white/80 transition-colors duration-500 border-t border-white/5 w-1/2">
                                {item.loc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative h-6 w-64 md:h-10 md:w-96 cursor-pointer hover:opacity-80 transition-opacity"
                >
                    <Image src="/WaytoAGI/page17_pic1.png" alt="Empowered by AI" fill className="object-contain" />
                </motion.div>

            </div>
            
            {/* Subtle Gradient Floor */}
            <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
        </section>
    );
}
