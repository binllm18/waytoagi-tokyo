"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import en from "./dictionaries/en";
import zh from "./dictionaries/zh";
import ja from "./dictionaries/ja";

type Language = "en" | "zh" | "ja";
type Dictionary = typeof en;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const dictionaries: Record<Language, Dictionary> = { en, zh, ja };

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("language") as Language;
    if (saved && dictionaries[saved]) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (path: string): string => {
    const keys = path.split(".");
    let current: any = dictionaries[language];
    for (const key of keys) {
      if (!current || current[key] === undefined) return path;
      current = current[key];
    }
    return current;
  };

  if (!mounted) {
     return (
       <LanguageContext.Provider value={{ language: "en", setLanguage, t: (path) => {
         const keys = path.split("."); let current: any = en;
         for (const key of keys) { if (!current) return path; current = current[key]; } return current;
       } }}>
         {children}
       </LanguageContext.Provider>
     );
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
