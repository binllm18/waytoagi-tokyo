"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import Image from "next/image";
import BottomTabs from "@/components/BottomTabs";

export default function Section10() {
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
                            {t("s10.title")}
                        </h2>
                        <div className="border border-black rounded px-3 py-1 text-lg font-bold text-black mt-2">
                            {t("s10.step")}
                        </div>
                    </div>
                    <div className="mt-8 max-w-3xl">
                        <h3 className="text-xl md:text-2xl font-black text-black tracking-tight uppercase mb-2">
                            {t("s10.sub")}
                        </h3>
                        <p className="text-black/80 font-medium leading-snug">
                            {t("s10.desc")}
                        </p>
                    </div>
                </motion.div>

                {/* Content Flow */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-start justify-between w-full h-full pb-16">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 rounded-[2rem] overflow-hidden relative aspect-[4/3] lg:aspect-auto lg:h-[500px]"
                    >
                        <Image
                            src="/WaytoAGI/page10_pic1.png"
                            alt="Bonsai Path"
                            fill
                            className="object-cover"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full lg:w-1/2 flex flex-col items-center justify-center pt-2 md:pt-8"
                    >
                        <div className="text-center mb-8">
                            <span className="text-2xl font-bold text-black">{t("s10.total")}</span>
                            <span className="bg-black text-white px-2 py-1 rounded text-2xl font-bold mx-1">{t("s10.num")}</span>
                            <span className="text-2xl font-bold text-black">{t("s10.set")}</span>
                            <p className="text-sm font-medium text-black mt-2">{t("s10.note")}</p>
                        </div>
                        <div className="relative w-full aspect-[4/3] max-w-md mx-auto">
                            <Image
                                src="/WaytoAGI/page10_pic2.png"
                                alt="Bonsai Map Locations"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>

            <BottomTabs activeTab="VENUE BRANDING" />
        </section>
    );
}
