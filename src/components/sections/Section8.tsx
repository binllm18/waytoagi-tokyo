"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Section8() {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1.1]);
  const yParallax = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={containerRef} className="relative w-full min-h-screen bg-[#141415] py-32 flex flex-col justify-center overflow-hidden border-t border-white/5">
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 xl:px-16 flex flex-col items-center">
        
        <div className="text-center mb-16 select-none cursor-default">
          {/* Top Line Mask Reveal */}
          <div className="overflow-hidden pb-2">
            <motion.h2 
               initial={{ y: "100%", rotateX: 20 }}
               whileInView={{ y: "0%", rotateX: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
               className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter origin-top"
            >
              {t("s8.m2")} <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">m²</span>
            </motion.h2>
          </div>
          
          {/* Bottom Line Mask Reveal */}
          <div className="overflow-hidden mt-1 pt-1">
            <motion.h2
               initial={{ y: "-100%", opacity: 0 }}
               whileInView={{ y: "0%", opacity: 1 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
               className="text-4xl md:text-6xl uppercase text-white/90 tracking-[0.1em] font-black"
            >
              {t("s8.history")}
            </motion.h2>
          </div>
        </div>

        {/* Blueprint Map with Scroll Scale Parallax */}
        <motion.div
           style={{ scale: imgScale, y: yParallax }}
           className="relative w-full aspect-square md:aspect-video lg:aspect-[16/7] magnetic-target"
        >
          <div className="absolute inset-0 bg-transparent rounded-[4rem] group cursor-pointer z-50">
             {/* Interaction wrapper allows custom cursor logic to grip this element */}
          </div>
          <Image 
             src="/WaytoAGI/page8_pic1.png"
             alt="Happo-en Map Diagram Blueprint"
             fill
             sizes="100vw"
             className="object-contain object-center scale-110 pointer-events-none"
          />
        </motion.div>
      </div>
    </section>
  );
}
