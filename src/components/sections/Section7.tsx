"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Section7() {
  const { t } = useLanguage();
    return (
        <section className="relative w-full min-h-screen bg-[#1c1c1e] py-24 flex items-center overflow-hidden border-t border-white/5">
            <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 xl:px-16 flex flex-col items-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="w-full text-left max-w-7xl mx-auto mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
                        {t("s7.title")}
                    </h2>
                    <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed max-w-5xl">
                        {t("s7.desc")}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98, filter: "blur(5px)" }}
                    whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="w-full max-w-7xl relative aspect-video md:aspect-[21/9] lg:aspect-[2.35/1] overflow-hidden rounded-md border border-white/5"
                >
                    <Image
                        src="/WaytoAGI/page7_pic1.png"
                        alt="Happo-en Venue Images Collage"
                        fill
                        sizes="100vw"
                        className="object-cover md:object-contain object-center"
                    />
                </motion.div>
            </div>
        </section>
    );
}
