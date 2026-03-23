"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Section15() {
  const { t } = useLanguage();
  return (
    <section className="relative w-full bg-white py-12 md:py-24 flex flex-col items-center border-t border-black/10 overflow-hidden">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 xl:px-24 flex flex-col">
         
         {/* Top Header */}
         <div className="flex items-center gap-4 mb-16 md:mb-20">
             <h2 className="text-5xl md:text-6xl font-black text-black tracking-[-0.04em] uppercase">{t("s15.title")}</h2>
             <span className="hidden md:flex border border-purple-500 text-purple-600 font-bold px-3 py-1 rounded text-xs">PD - 9</span>
             <span className="hidden md:flex border border-purple-500 text-purple-600 font-bold px-3 py-1 rounded text-xs">PD - 10</span>
             <span className="hidden md:flex border border-purple-500 text-purple-600 font-bold px-3 py-1 rounded text-xs">PD - 11</span>
             <span className="hidden md:flex border border-purple-500 text-purple-600 font-bold px-3 py-1 rounded text-xs">PD - 12</span>
         </div>
         
         {/* Content Information Split */}
         <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row w-full gap-12 lg:gap-24 mb-16"
         >
            {/* PR Times Block */}
            <div className="w-full md:w-1/2 flex flex-col pr-0 lg:pr-12">
               <p className="text-xs md:text-sm font-bold text-black/60 mb-3 break-all">https://prtimes.jp/main/html/rd/p/000000152.000031083.html</p>
               <h3 className="text-xl md:text-2xl font-black text-black uppercase mb-4 leading-tight tracking-tight">{t("s15.sub1")}</h3>
               <p className="text-black/80 font-medium text-sm md:text-base leading-relaxed">
                 {t("s15.desc1")}
               </p>
            </div>
            
            {/* Teamz Website Block */}
            <div className="w-full md:w-1/2 flex flex-col">
               <p className="text-xs md:text-sm font-bold text-black/60 mb-3 break-all">https://tokyo26.waytoagi.com/</p>
               <h3 className="text-xl md:text-2xl font-black text-black uppercase mb-4 leading-tight tracking-tight">{t("s15.sub2")}</h3>
               <p className="text-black/80 font-medium text-sm md:text-base leading-relaxed">
                 {t("s15.desc2")}
               </p>
            </div>
         </motion.div>

         {/* Full Bleed Image Container (Taking 100% of the viewport container as requested) */}
         <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full relative h-[45vh] md:h-[60vh] lg:h-[700px] rounded-2xl md:rounded-3xl overflow-hidden mt-8"
         >
             <Image 
               src="/WaytoAGI/page15_pic1.png" 
               fill 
               className="object-contain md:object-cover object-center lg:object-top" 
               alt="Digital Branding Asset Spread" 
               sizes="100vw"
             />
         </motion.div>
      </div>
    </section>
  );
}
