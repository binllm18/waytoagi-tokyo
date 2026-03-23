"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";

export default function EventDetailsSection() {
  const { t } = useLanguage();
  const columns = Array.from({ length: 5 });

  return (
    <section className="relative w-full min-h-screen bg-[#222224] overflow-hidden border-t border-black pb-24 md:pb-0">
      
      {/* Massive 2026 Background Watermark (DESKTOP ONLY - Completely Reverted) */}
      <div className="absolute inset-x-0 bottom-0 pointer-events-none hidden md:flex items-end justify-center overflow-hidden z-0">
         <motion.div
           initial={{ opacity: 0, y: 100 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
           className="w-full text-center"
         >
           <span 
             className="block text-[38vw] leading-[0.75] font-black text-[#2a2a2c] select-none tracking-tighter"
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
          <div className="absolute inset-x-0 bottom-0 w-[100vw] left-1/2 -translate-x-1/2 h-px bg-white/10 shadow-lg" />
        </div>

        {/* DESKTOP: 5-Column Typographic Grid (Reverted completely to original perfect state) */}
        <div className="hidden md:grid md:grid-cols-5 w-full flex-grow px-16 pb-12">
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
                className="flex flex-col pt-6 h-full"
              >
                {/* Top Dates */}
                <div className="flex flex-col gap-2">
                  <p className={`text-sm font-bold tracking-wider uppercase ${isCenter ? 'text-white' : 'text-white/40'}`}>
                    {t("s2.wed")}
                  </p>
                  <p className={`text-5xl lg:text-5xl font-black uppercase ${isCenter ? 'text-white' : 'text-white/40'}`} style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}>
                    {t("s2.date")}
                  </p>
                </div>

                {/* Center Exclusive Tag */}
                {isCenter && (
                  <div className="mt-8">
                    <p className="text-5xl lg:text-5xl font-black text-white uppercase leading-tight" style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}>
                      {t("s2.event")}
                    </p>
                  </div>
                )}

                {/* Spacer */}
                <div className="flex-grow min-h-[120px] lg:min-h-[200px]" />

                {/* Bottom Label */}
                <div className="mt-auto pb-16 lg:pb-24">
                  <p className={`text-base font-bold tracking-wider uppercase ${isCenter ? 'text-white' : 'text-white/40'}`}>
                    {t("s2.week")}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* MOBILE: Vertical Timeline Cards (New Architecture) */}
        <div className="flex flex-col md:hidden w-full px-6 pb-24 relative mt-4 gap-12">
          {/* Vertical Timeline Track */}
          <div className="absolute left-[31px] top-4 bottom-12 w-px bg-white/10 z-0" />
          
          {columns.map((_, i) => {
            const isCenter = i === 2;
            return (
              <div key={i} className="relative z-10 flex items-start gap-6">
                
                {/* Timeline Dot Indicator */}
                <div className={`w-3.5 h-3.5 rounded-full mt-3 shrink-0 ${isCenter ? 'bg-white shadow-[0_0_15px_rgba(255,255,255,1)]' : 'bg-[#111] border border-white/20'}`} />
                
                {/* Timeline Content Block */}
                <div className={`flex flex-col w-full relative ${isCenter ? 'opacity-100' : 'opacity-40'}`}>
                  
                  <p className="text-xs font-bold tracking-wider uppercase text-white mb-1">
                    {t("s2.wed")}
                  </p>
                  <p className="text-5xl font-black uppercase text-white tracking-tighter" style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}>
                    {t("s2.date")}
                  </p>

                  {/* Highlight Event Card */}
                  {isCenter && (
                    <div className="mt-8 mb-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-white/80" />
                      <p className="text-3xl font-black text-white uppercase leading-[1.1] tracking-tight mb-3" style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}>
                        {t("s2.event")}
                      </p>
                      <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/70">
                        {t("s2.week")}
                      </p>
                    </div>
                  )}

                  {!isCenter && (
                    <div className="mt-3">
                      <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/50">
                        {t("s2.week")}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {/* MOBILE EXCLUSIVE: 2026 Watermark anchored at the absolute bottom of the timeline block */}
          <div className="absolute bottom-[-10px] inset-x-0 pointer-events-none z-0 opacity-80 flex justify-center overflow-hidden">
             <span 
               className="block text-[45vw] leading-[0.75] font-black text-[#2b2b2d] select-none tracking-tighter"
               style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
             >
               2026
             </span>
          </div>

        </div>

      </div>
    </section>
  );
}
