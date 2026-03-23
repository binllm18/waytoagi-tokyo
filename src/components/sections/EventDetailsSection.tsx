"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function EventDetailsSection() {
  const { t } = useLanguage();
  const columns = Array.from({ length: 5 });
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Auto-scroll to Wednesday (Index 2) on mobile
    if (scrollRef.current && window.innerWidth < 768) {
      setTimeout(() => {
        if (!scrollRef.current) return;
        const centerElement = scrollRef.current.children[2] as HTMLElement;
        if (centerElement) {
          const scrollPos = centerElement.offsetLeft - (window.innerWidth / 2) + (centerElement.offsetWidth / 2);
          scrollRef.current.scrollTo({ left: scrollPos, behavior: "smooth" });
        }
      }, 600);
    }
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-[#222224] overflow-hidden border-t border-black pb-24 md:pb-0">
      
      {/* Massive 2026 Background Watermark */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden z-0 md:opacity-100 opacity-60">
         <motion.div
           initial={{ opacity: 0, y: 100 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
           className="w-full text-center"
         >
           <span 
             className="block text-[60vw] md:text-[38vw] leading-none font-black text-[#2a2a2c] select-none tracking-tighter"
             style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
           >
             2026
           </span>
         </motion.div>
      </div>

      <div className="relative z-10 w-full h-full flex flex-col pt-12 md:pt-24 max-w-[1800px] mx-auto">
        
        {/* Header Block with FULL BLEED separator mirroring Page 1 */}
        <div className="relative w-full mb-8 md:mb-16 pb-6 md:pb-12">
          <div className="px-6 md:px-16 w-full">
            <motion.h2 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8 }}
               className="text-3xl md:text-5xl font-bold text-white tracking-tight"
            >
              {t("s2.header")}
            </motion.h2>
          </div>
          {/* True 100vw divider strictly connecting visually to page edges */}
          <div className="absolute inset-x-0 bottom-0 w-[100vw] left-1/2 -translate-x-1/2 h-px bg-white/10 shadow-lg" />
        </div>

        {/* 5-Column Typographic Grid */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto md:grid md:grid-cols-5 w-full flex-grow snap-x snap-mandatory px-6 md:px-16 pb-12 scrollbar-hide"
        >
          {columns.map((_, i) => {
            const isCenter = i === 2;
            const delay = i * 0.1;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay }}
                className="flex-none w-[75vw] md:w-auto snap-center flex flex-col pt-8 md:pt-6 min-h-[400px] md:min-h-0"
              >
                {/* Top Dates */}
                <div className="flex flex-col gap-2">
                  <p className={`text-xs md:text-sm font-bold tracking-wider uppercase ${isCenter ? 'text-white' : 'text-white/40'}`}>
                    {t("s2.wed")}
                  </p>
                  <p className={`text-4xl md:text-5xl lg:text-5xl font-black uppercase ${isCenter ? 'text-white' : 'text-white/40'}`} style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}>
                    {t("s2.date")}
                  </p>
                </div>

                {/* Center Exclusive Tag */}
                {isCenter && (
                  <div className="mt-6 md:mt-8">
                    <p className="text-4xl md:text-5xl lg:text-5xl font-black text-white uppercase leading-tight" style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}>
                      {t("s2.event")}
                    </p>
                  </div>
                )}

                {/* Spacer */}
                <div className="flex-grow min-h-[120px] md:min-h-[200px]" />

                {/* Bottom Label */}
                <div className="mt-auto pb-8 md:pb-24">
                  <p className={`text-sm md:text-base font-bold tracking-wider uppercase ${isCenter ? 'text-white' : 'text-white/40'}`}>
                    {t("s2.week")}
                  </p>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
