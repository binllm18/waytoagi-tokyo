"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import Image from "next/image";
import BottomTabs from "@/components/BottomTabs";

export default function Section9() {
  const { t } = useLanguage();
    return (
        <section className="relative w-full bg-white py-2 md:py-16 flex items-center overflow-hidden">
            <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 xl:px-16 flex flex-col pt-2 md:pt-8 pb-16">

                {/* Header (Black text for light mode) */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-12 flex flex-col items-start gap-2"
                >
                    <div className="flex items-center gap-4">
                        <div className="bg-black text-white px-3 py-1 font-bold text-xl md:text-3xl rounded-md tracking-tighter">
                            {t("s9.f1")}
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-black tracking-tighter">
                            {t("s9.pics")}
                        </h2>
                    </div>
                    <h3 className="text-2xl md:text-4xl font-bold text-black/80 tracking-tight mt-2">
                        {t("s9.mb")}
                    </h3>
                </motion.div>

                {/* Gallery Image Blob */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.9, delay: 0.2 }}
                    className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[2/1] mt-8"
                >
                    <Image
                        src="/WaytoAGI/page9_pic1.png"
                        alt="1F Pictures Exhibition Flow"
                        fill
                        sizes="100vw"
                        className="object-contain object-top"
                    />
                </motion.div>
            </div>

            <BottomTabs activeTab="EXHIBITION" />
        </section>
    );
}
