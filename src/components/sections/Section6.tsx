"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import Image from "next/image";

interface CategoryBlockProps {
  title: string;
  logos: string[];
  duration: number;
}

const CategoryBlock = ({ title, logos, duration }: CategoryBlockProps) => (
  <div className="w-full flex flex-col text-left mt-8 md:mt-12">
    {/* Specialized Divider Line with Embedded Title */}
    <div className="w-full border-t border-white/10 relative my-6 md:my-10">
      <span className="absolute -top-[10px] left-0 md:bg-[#18181a] bg-[#1a1a1c] pr-4 text-[10px] md:text-xs font-bold text-white/40 uppercase tracking-widest">
        {title}
      </span>
    </div>
    
    {/* Mobile Specific - Static Flex Wrap Layout */}
    <div className="flex flex-wrap gap-8 items-center md:hidden">
      {logos.map((logo, i) => (
        <div key={i} className="relative h-8 w-24 flex-shrink-0">
          <Image 
            src={`/WaytoAGI/page6_logos/${logo}`} 
            alt={`${title} Partner ${i}`} 
            fill 
            className="object-contain object-left" 
          />
        </div>
      ))}
    </div>

    {/* PC Specific - Unidirectional Segmented Marquee Row */}
    <div className="hidden md:flex overflow-hidden w-full relative">
       {/* Edge fade linear gradients can be applied here if desired, but keeping pure tech structure as requested */}
       <motion.div 
         className="flex gap-12 lg:gap-16 w-max items-center"
         animate={{ x: ["0%", "-50%"] }}
         transition={{ ease: "linear", duration, repeat: Infinity }}
       >
         {[...logos, ...logos].map((logo, i) => (
           <div key={i} className="relative h-10 w-32 xl:w-40 flex-shrink-0 group">
             <Image 
               src={`/WaytoAGI/page6_logos/${logo}`} 
               alt={`${title} Partner ${i}`} 
               fill 
               className="object-contain object-left md:opacity-70 md:grayscale md:hover:opacity-100 md:hover:grayscale-0 transition-all duration-300 pointer-events-none" 
             />
           </div>
         ))}
       </motion.div>
    </div>
  </div>
);

export default function Section6() {
  const { t } = useLanguage();
  // Mapping the 17 unique files
  const sponsors = ["2 28.png", "Group 13619.png", "Group 13620.png", "Group 13622.png", "Rectangle-1.png", "Rectangle-10.png", "Rectangle-11.png", "Rectangle-12.png"];
  const community = ["Rectangle-2.png", "Rectangle-3.png", "Rectangle-4.png", "Rectangle-5.png", "Rectangle-6.png"];
  const media = ["Rectangle-7.png", "Rectangle-8.png", "Rectangle-9.png", "Rectangle.png"];

  return (
    <section className="relative w-full bg-[#1a1a1c] py-24 md:py-32 flex flex-col justify-center overflow-hidden border-t border-white/5">
      <div className="relative z-10 w-full max-w-[1500px] mx-auto flex flex-col items-start px-6 md:px-12 xl:px-24">
        
        <motion.h2 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6"
        >
          {t("s6.title")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/70 text-sm md:text-base leading-relaxed tracking-wide mb-8 max-w-4xl"
        >
          {t("s6.desc")}
        </motion.p>
        
        {/* Render segmented categorically separated marquees */}
        <CategoryBlock title={t("s6.cat1")} logos={sponsors} duration={30} />
        <CategoryBlock title={t("s6.cat2")} logos={community} duration={45} />
        <CategoryBlock title={t("s6.cat3")} logos={media} duration={60} />

      </div>
    </section>
  );
}
