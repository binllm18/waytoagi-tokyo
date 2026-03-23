"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Section4() {
  const { t } = useLanguage();
  return (
    <section className="relative w-full min-h-[80vh] flex items-start bg-[#1a1a1c] pt-24 md:pt-32 pb-32 overflow-hidden border-t border-white/5">
      
      {/* Massive 2026 Background Watermark */}
      <div className="absolute inset-x-0 bottom-0 pointer-events-none flex items-end justify-center overflow-hidden z-0">
         <motion.div
           initial={{ opacity: 0, y: 100 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
           className="w-full text-center"
         >
           <span 
             className="block text-[45vw] md:text-[40vw] leading-[0.75] font-black text-white/[0.03] select-none tracking-tighter"
             style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
           >
             2026
           </span>
         </motion.div>
      </div>

      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-6 md:px-12 xl:px-24 flex flex-col md:flex-row items-start justify-between gap-16 md:gap-24">
        
        {/* Linkloud Column */}
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="w-full md:w-1/2 flex flex-col"
        >
          <div className="relative w-40 h-10 md:w-48 md:h-12 mb-12">
            <Image src="/WaytoAGI/page4_logo1.png" alt="Linkloud Logo" fill className="object-contain object-left" />
          </div>
          <p className="text-white/80 text-sm md:text-[15px] leading-[1.8] font-light tracking-wide text-justify">
            {t("s4.linkloud")}
          </p>
        </motion.div>

        {/* Asu Capital Partners Column */}
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="w-full md:w-1/2 flex flex-col"
        >
          <div className="relative w-40 h-10 md:w-48 md:h-12 mb-12">
             <Image src="/WaytoAGI/page4_logo2.png" alt="Asu Capital Partners Logo" fill className="object-contain object-left filter invert" />
          </div>
          <p className="text-white/80 text-sm md:text-[15px] leading-[1.8] font-light tracking-wide text-justify mb-4">
            {t("s4.asuTitle")}
          </p>
          <p className="text-white/80 text-sm md:text-[15px] leading-[1.8] font-light tracking-wide text-justify">
            {t("s4.asuDesc")}
          </p>
        </motion.div>

      </div>
    </section>
  );
}
