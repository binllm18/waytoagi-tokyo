"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Section13() {
  const { t } = useLanguage();
  return (
    <section className="relative w-full bg-white py-12 md:py-24 flex flex-col items-center border-t border-black/10 overflow-hidden">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 xl:px-24 flex flex-col gap-12 md:gap-16">
         
         {/* Top Section: Title, Description + Map Graphic placed precisely Top-Right */}
         <div className="flex flex-col-reverse md:flex-row justify-between w-full items-start gap-12">
            
            {/* Left Content */}
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="w-full md:w-3/5 flex flex-col"
            >
              <h2 className="text-5xl md:text-6xl font-black text-black tracking-[-0.04em] mb-8 md:mb-12 uppercase">{t("s13.title")}</h2>
              <div className="flex gap-4 mb-4 md:mb-6">
                {/* PDF tags commonly seen in Figma */}
                <span className="border border-blue-500 text-blue-600 font-bold px-3 py-1 rounded text-xs md:text-sm">PD - 6</span>
                <span className="border border-blue-500 text-blue-600 font-bold px-3 py-1 rounded text-xs md:text-sm">PD - 7</span>
              </div>
              <h3 className="text-xl md:text-2xl font-black text-black uppercase mb-4 tracking-tight leading-tight">{t("s13.sub")}</h3>
              <p className="text-black/80 font-medium text-sm md:text-base leading-relaxed">
                {t("s13.desc")}
              </p>
            </motion.div>

            {/* Right Map Image (Moved from bottom to Top Right per User spec) */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="w-full md:w-1/3 h-48 md:h-72 relative mt-4 md:mt-0"
            >
              <Image src="/WaytoAGI/page13_pic3.png" fill sizes="33vw" className="object-contain md:object-right-top" alt="Media VIP Map" />
            </motion.div>
         </div>

         {/* Bottom Photos Section */}
         <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full flex w-full flex-col md:flex-row gap-6 md:gap-8 h-[350px] md:h-[500px] lg:h-[600px]"
         >
            {/* Left Photo (Speaker on Stage) - Accurately positioned */}
            <div className="w-full md:w-1/2 relative h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-sm">
               <Image src="/WaytoAGI/page13_pic1.png" fill sizes="50vw" className="object-cover" alt="Press Conference Stage" />
            </div>
            
            {/* Right Photo (Sponsor Board) - Successfully relocated */}
            <div className="w-full md:w-1/2 relative h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-sm">
               <Image src="/WaytoAGI/page13_pic2.png" fill sizes="50vw" className="object-cover" alt="Media Partners Board" />
            </div>
         </motion.div>

      </div>
    </section>
  );
}
