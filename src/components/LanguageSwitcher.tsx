"use client";
import { useLanguage } from "@/i18n/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const langs = [
    { code: "en", label: "EN" },
    { code: "ja", label: "日本語" },
    { code: "zh", label: "中文" }
  ] as const;

  return (
    <div className="fixed top-6 right-6 md:top-8 md:right-12 z-[100]" ref={containerRef}>
      <div 
        className="relative backdrop-blur-2xl bg-white/5 border border-white/20 rounded-full px-5 py-2 flex items-center gap-2 cursor-pointer shadow-2xl hover:bg-white/10 transition-all outline-none text-white font-medium text-xs md:text-sm tracking-wide"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{langs.find(l => l.code === language)?.label || "EN"}</span>
        <svg className="w-4 h-4 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>

        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-12 right-0 bg-[#1a1a1c]/90 backdrop-blur-2xl border border-white/10 rounded-[1.2rem] p-2 w-32 flex flex-col gap-1 shadow-2xl overflow-hidden"
            >
              {langs.map(({ code, label }) => (
                 <button
                   key={code}
                   className={`text-left px-4 py-2.5 rounded-xl text-xs md:text-sm transition-all flex items-center justify-between ${language === code ? "bg-white text-black font-semibold" : "text-white/70 hover:bg-white/10 hover:text-white"}`}
                   onClick={(e) => {
                     e.stopPropagation();
                     setLanguage(code as "en" | "zh" | "ja");
                     setIsOpen(false);
                   }}
                 >
                   {label}
                   {language === code && (
                     <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                     </svg>
                   )}
                 </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
