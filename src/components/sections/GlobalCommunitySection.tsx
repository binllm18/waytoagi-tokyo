"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import Image from "next/image";

export default function GlobalCommunitySection() {
  const { t } = useLanguage();
  return (
    <section className="relative w-full min-h-[85vh] flex flex-col md:flex-row items-center bg-[#1c1c1e] py-16 md:py-24 overflow-hidden border-t-0 md:border-t border-black/50">
      <div className="relative z-10 w-full max-w-[1600px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 px-6 md:px-12 xl:px-24 h-full">
        
        {/* Left Copy Block - Solid White Header, Full Body Text */}
        <motion.div 
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="w-full lg:w-[45%] xl:w-[40%] flex flex-col justify-center z-10 mt-12 lg:mt-0"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl border-l-[3px] border-white/0 font-bold text-white tracking-tight leading-tight md:leading-[1.4]">
            {t("s3.title1")}
          </h2>
          <p className="mt-8 text-sm md:text-base lg:text-[17px] text-white/70 leading-relaxed font-medium">
            {t("s3.title2")}
          </p>
        </motion.div>

        {/* Right Map Graphic - Unconstrained Container */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 1.2, delay: 0.2 }}
           className="w-full lg:w-[55%] xl:w-[60%] h-[40vh] md:h-[60vh] lg:h-[750px] relative pointer-events-none"
        >
          {/* using object-contain to absolutely guarantee no cropping off the sides, origin-right stretches it optimally to the viewport edge */}
          <Image 
            src="/WaytoAGI/page3_pic1.png" 
            alt="Global Map Statistics" 
            fill 
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-contain object-center lg:object-right lg:scale-125 lg:origin-right"
          />
        </motion.div>
        
      </div>
    </section>
  );
}
