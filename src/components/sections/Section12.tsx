"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import Image from "next/image";
import BottomTabs from "@/components/BottomTabs";

export default function Section12() {
  const { t } = useLanguage();
    return (
        <section className="relative w-full bg-white py-2 md:py-16 flex items-center overflow-hidden">
            <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 xl:px-16 flex flex-col pt-2 md:pt-8 pb-20">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-8"
                >
                    <h2 className="text-5xl md:text-6xl font-black text-black tracking-tighter uppercase">
                        {t("s12.title")}
                    </h2>
                </motion.div>

                {/* Content Flow (Massive Group Photo) */}
                <div className="flex flex-col w-full h-full pb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98, filter: "blur(5px)" }}
                        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full rounded-[2rem] overflow-hidden relative aspect-video md:aspect-[21/9] shadow-xl border border-gray-200"
                    >
                        <Image
                            src="/WaytoAGI/page12_pic1.png"
                            alt="Global AI Conference Main Stage Photo"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </div>
            </div>

            <BottomTabs activeTab="VENUE BRANDING" />
        </section>
    );
}
