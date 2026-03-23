"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext"; // Added this import
import Slide1 from "./slides/slide-1";
import Slide2 from "./slides/slide-2";
import Slide3 from "./slides/slide-3";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [Slide1, Slide2, Slide3];

export default function SlidePresentation({ children }: { children?: React.ReactNode }) { // Modified signature
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null); // Added this ref
  const [activeSegment, setActiveSegment] = useState(0); // Added this state
  const [isHovered, setIsHovered] = useState(false); // Added this state
  const { t } = useLanguage(); // Added this hook

  // Added tabs array
  const tabs = [
    { id: "exhibition", label: t("nav.exhibition"), sectionIndex: 8 },
    { id: "main-hall", label: t("nav.mainHall"), sectionIndex: 9 },
    { id: "venue-branding", label: t("nav.venueBranding"), sectionIndex: 10 },
    { id: "media", label: t("nav.media"), sectionIndex: 12 },
    { id: "vip-area-vip-dinner", label: t("nav.vipDinner"), sectionIndex: 11 },
    { id: "tickets", label: t("nav.tickets"), sectionIndex: 13 },
    { id: "digital-branding", label: t("nav.digitalBranding"), sectionIndex: 14 },
    { id: "others", label: t("nav.others"), sectionIndex: 15 },
  ];

  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide((prev) => prev + 1);
    }
  }, [currentSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide((prev) => prev - 1);
    }
  }, [currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "Space") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  const SlideComponent = slides[currentSlide];

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white font-sans selection:bg-white/30">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute inset-0 w-full h-full flex items-center justify-center p-8 md:p-16 lg:p-24"
        >
          <SlideComponent />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 right-8 z-50 flex gap-4 items-center">
        <div className="text-sm font-medium tracking-widest text-white/50 mr-4">
          {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </div>
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:hover:bg-white/10 transition-colors backdrop-blur-md"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:hover:bg-white/10 transition-colors backdrop-blur-md"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="absolute top-0 left-0 h-1 bg-white/10 w-full z-50">
        <motion.div
          className="h-full bg-white transition-all duration-300 ease-in-out"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </div>
  );
}
