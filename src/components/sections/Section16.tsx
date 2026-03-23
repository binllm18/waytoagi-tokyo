"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Section16() {
  const { t } = useLanguage();
  return (
    <section id="others" className="relative w-full bg-white py-12 md:py-24 flex flex-col items-center overflow-hidden">
      <div className="w-full max-w-[1500px] mx-auto px-6 md:px-12 xl:px-24 flex flex-col">
         
         {/* Shared Top Title */}
         <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap items-center gap-4 mb-16 md:mb-20"
         >
             <h2 className="text-5xl md:text-6xl font-black text-black tracking-[-0.04em] uppercase">{t("s16.title")}</h2>
             <span className="border border-black/20 text-black/80 font-bold px-3 py-1 rounded text-[10px] md:text-xs whitespace-nowrap">
               PD - 13
             </span>
             <span className="border border-black/20 text-black/80 font-bold px-3 py-1 rounded text-[10px] md:text-xs whitespace-nowrap">
               PD - 14
             </span>
         </motion.div>

         {/* Dual Split Content - No ugly bounding boxes, pure floating imagery! */}
         <div className="flex flex-col md:flex-row w-full gap-12 md:gap-16 lg:gap-24">
            
            {/* Flyer Block */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.1 }}
               className="w-full md:w-1/2 flex flex-col items-start"
            >
               <h3 className="text-xl md:text-2xl font-black text-black uppercase mb-3 tracking-tight">{t("s16.flyer")}</h3>
               <p className="text-black/80 font-medium text-sm md:text-[15px] leading-relaxed mb-10 max-w-[90%]">
                 {t("s16.flyerDesc")}
               </p>
               <div className="relative w-full h-[400px] lg:h-[600px] xl:h-[700px] flex items-start justify-center md:justify-start">
                 <Image src="/WaytoAGI/page16_pic1.png" fill sizes="50vw" className="object-contain object-top drop-shadow-2xl translate-x-[-5%]" alt="Promotional Flyer Tote Bag" />
               </div>
            </motion.div>

            {/* Pamphlet Block */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="w-full md:w-1/2 flex flex-col items-start"
            >
               <h3 className="text-xl md:text-2xl font-black text-black uppercase mb-3 tracking-tight">{t("s16.pamphlet")}</h3>
               <p className="text-black/80 font-medium text-sm md:text-[15px] leading-relaxed mb-10 max-w-[90%]">
                 {t("s16.pamphletDesc")}
               </p>
               <div className="relative w-full h-[400px] lg:h-[600px] xl:h-[700px] flex items-start justify-center md:justify-start">
                 <Image src="/WaytoAGI/page16_pic2.png" fill sizes="50vw" className="object-contain object-top drop-shadow-2xl" alt="Digital Pamphlet Info Display" />
               </div>
            </motion.div>

         </div>
      </div>
    </section>
  );
}
