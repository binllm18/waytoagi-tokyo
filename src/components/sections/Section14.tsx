"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Section14() {
  const { t } = useLanguage();
  return (
    <section className="relative w-full bg-white py-12 md:py-24 flex flex-col items-center border-t border-black/10 overflow-hidden">
      <div className="w-full max-w-[1500px] mx-auto px-6 md:px-12 xl:px-24 flex flex-col md:flex-row gap-12 lg:gap-8">
         
         {/* LEFT Column: Title, Lanyard, Description */}
         <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-[30%] lg:w-[25%] flex flex-col"
         >
            <div className="flex items-center gap-3 mb-10 max-w-full">
               <h2 className="text-5xl md:text-6xl font-black text-black tracking-[-0.04em] uppercase">{t("s14.title")}</h2>
               <span className="border border-green-500 text-green-600 font-bold px-3 py-1 rounded text-[10px] md:text-xs">PD - 8</span>
            </div>

            {/* General Pass Lanyard - Constrained absolute width for accurate premium feel */}
            <div className="relative w-full max-w-[200px] xl:max-w-[240px] aspect-[1/2] mb-8 lg:mb-10 text-center flex items-center justify-center">
               <Image src="/WaytoAGI/page14_pic2.png" fill sizes="260px" className="object-contain object-left-top drop-shadow-xl" alt="Ticket General Pass Lanyard" />
            </div>
            
            <h3 className="text-lg md:text-xl font-black text-black uppercase mb-1 tracking-tight">{t("s14.generalPass")}</h3>
            <p className="font-bold text-black/60 mb-3 text-xs tracking-wide">{t("s14.days")}</p>
            <p className="text-black/80 font-medium text-xs md:text-sm leading-relaxed">
               {t("s14.desc")}
            </p>
         </motion.div>

         {/* RIGHT Column: Wide Map over elegant thin dotted border */}
         <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-[70%] lg:w-[75%] flex items-center justify-center pt-8 md:pt-16 lg:pl-16 relative"
         >
            <div className="relative w-full h-[50vh] min-h-[400px] md:min-h-[500px] border-[1.5px] border-dashed border-black/40 rounded-[2.5rem] md:rounded-[4rem] flex justify-center items-center py-12 px-8">
                {/* The map overflows the box elegantly exactly as shown in screenshot */}
                <Image 
                  src="/WaytoAGI/page14_pic1.png" 
                  fill 
                  sizes="70vw" 
                  className="object-contain scale-[1.1] md:scale-[1.15] lg:scale-[1.25] origin-center drop-shadow-xl select-none pointer-events-none" 
                  alt="Venue Tickets Map Details" 
                />
            </div>
         </motion.div>

      </div>
    </section>
  );
}
