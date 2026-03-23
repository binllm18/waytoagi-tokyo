"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import Image from "next/image";
import BottomTabs from "@/components/BottomTabs";

export default function Section11() {
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
                    className="mb-12 flex flex-col items-start gap-4"
                >
                    <div className="flex items-center gap-4">
                        <h2 className="text-5xl md:text-6xl font-black text-black tracking-tighter uppercase">
                            {t("s11.title")}
                        </h2>
                        <div className="border border-black rounded px-3 py-1 text-lg font-bold text-black mt-2">
                            {t("s11.step")}
                        </div>
                    </div>
                    <div className="mt-8 max-w-3xl">
                        <h3 className="text-xl md:text-2xl font-black text-black tracking-tight uppercase mb-2">
                            {t("s11.sub")}
                        </h3>
                        <p className="text-black/80 font-medium leading-snug">
                            {t("s11.desc")}
                        </p>
                    </div>
                </motion.div>

                {/* Content Flow */}
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 items-center justify-between w-full h-full pb-16">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-7/12 rounded-[1rem] overflow-hidden relative aspect-[16/10] md:aspect-[16/9] lg:aspect-[4/3] shadow-lg border border-gray-200"
                    >
                        <Image
                            src="/WaytoAGI/page11_pic1.png"
                            alt="Reception Photo Banner"
                            fill
                            className="object-cover"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full lg:w-5/12 flex flex-col gap-8 justify-center min-h-[400px]"
                    >
                        {/* The Text Tier Lines */}
                        {["PLATINUM", "GOLD", "SILVER", "SUPPORTERS"].map((tier, idx) => (
                            <div key={idx} className="w-full flex flex-col items-center">
                                <div className="w-full border-t border-dashed border-black/40 mb-4" />
                                <h4 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tight py-4">{tier}</h4>
                                <div className="w-full border-b border-dashed border-black/40 mt-4" />
                            </div>
                        ))}
                    </motion.div>

                </div>
            </div>

            <BottomTabs activeTab="VENUE BRANDING" />
        </section>
    );
}
