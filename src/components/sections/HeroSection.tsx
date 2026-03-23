"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function HeroSection() {
  const containerRef = useRef(null);
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax effects
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={containerRef} className="relative w-full h-[100dvh] min-h-[600px] flex flex-col overflow-hidden bg-black">
      
      {/* 1) Top Black Mask Layer & Logos (Fixed height header) */}
      <div className="relative top-0 inset-x-0 h-[22vh] min-h-[140px] max-h-[180px] bg-[#1a1a1c] z-20 flex flex-col justify-center px-6 md:px-12 xl:px-24 border-b border-black/40 shadow-xl">
        <div className="max-w-[1400px] mx-auto w-full flex flex-col justify-center gap-3 md:gap-4 mt-2">
          
          <motion.div 
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
             className="flex flex-wrap gap-6 md:gap-10 items-center select-none"
          >
            {/* Colorful WaytoAGI Logo */}
            <div className="relative h-8 w-28 md:h-12 md:w-36 shrink-0">
              <Image src="/WaytoAGI/page1_logo3.png" alt="WaytoAGI" fill sizes="144px" className="object-contain object-left pointer-events-none" />
            </div>
            {/* White Linkloud Text Logo */}
            <div className="relative h-6 w-24 md:h-8 md:w-32 shrink-0">
              <Image src="/WaytoAGI/page1_logo1.png" alt="Linkloud" fill sizes="128px" className="object-contain object-left pointer-events-none" />
            </div>
            {/* White Rectangular Asu Capital Logo (No mix-blend-screen so the black text inside it stays visible!) */}
            <div className="relative h-6 w-28 md:h-10 md:w-36 shrink-0 bg-white">
              <Image src="/WaytoAGI/page1_logo2.png" alt="Asu Capital Partners" fill sizes="144px" className="object-contain object-left pointer-events-none filter invert" />
            </div>
          </motion.div>

          {/* Underneath Date Text */}
          <motion.p 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 1.2, delay: 0.2 }}
             className="text-white/80 text-xs md:text-sm font-medium tracking-tight mt-1"
          >
            {t("hero.date")}
          </motion.p>
        </div>
      </div>

      {/* 2) Background Image Wrapper (starts exactly underneath the top black mask) */}
      <motion.div style={{ y: bgY }} className="absolute top-[22vh] bottom-0 inset-x-0 z-0 overflow-hidden">
        <Image 
          src="/WaytoAGI/page1_bg.png"
          alt="Happo-en Garden Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_center] md:object-center opacity-85"
        />
        {/* Subtle gradient overlay to enhance text readability at the bottom */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
      </motion.div>

      {/* 3) Main Quote Text (Pushed to bottom left) & Supplemental Info (Bottom right) */}
      <motion.div style={{ y: textY }} className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 xl:px-24 mb-12 md:mb-16 mt-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
        
        {/* Steve Jobs Quote Block */}
        <div className="border-l-[3px] border-white/50 pl-6 md:pl-8 py-1 max-w-xl lg:max-w-2xl">
          <div className="overflow-hidden mb-8 md:mb-10">
            <motion.p 
              initial={{ y: "100%", opacity: 0, rotateX: -20 }}
              animate={{ y: "0%", opacity: 1, rotateX: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl lg:text-[26px] text-white/95 leading-[1.4] font-light tracking-tight origin-bottom"
            >
              {t("hero.quote")}
            </motion.p>
          </div>
          
          <div className="overflow-hidden">
            <motion.p 
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm md:text-base lg:text-lg text-white font-bold tracking-tight"
            >
              {t("hero.quoteAuthor")}
            </motion.p>
          </div>
        </div>

        {/* Bottom Right Logo & Geo-Tag (Hidden on very small screens, visible on md and up) */}
        <motion.div 
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 1, delay: 0.8 }}
           className="hidden md:flex flex-col items-start md:items-end gap-2 pb-2"
        >
          <div className="relative h-6 w-24">
             <Image src="/WaytoAGI/page1_logo3.png" alt="WaytoAGI" fill sizes="96px" className="object-contain object-left md:object-right pointer-events-none" />
          </div>
          <p className="text-white text-xs font-semibold tracking-wide">Happo-en, Tokyo. Japan</p>
        </motion.div>

      </motion.div>

    </section>
  );
}
