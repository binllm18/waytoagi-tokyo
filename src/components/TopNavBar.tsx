"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TopNavBar() {
  const [activeTab, setActiveTab] = useState<string>("");
  const [isVisible, setIsVisible] = useState(false);

  const tabs = [
    { id: "exhibition", name: "EXHIBITION", color: "bg-[#5F6DFF]" },
    { id: "main-hall", name: "MAIN HALL", color: "bg-[#5F6DFF]" },
    { id: "venue-branding", name: "VENUE BRANDING", color: "bg-[#5F6DFF]" }, // Keeping base blue, can change if needed
    { id: "media", name: "MEDIA", color: "bg-[#5F6DFF]" },
    { id: "vip-area", name: "VIP AREA & VIP DINNER", color: "bg-[#5F6DFF]" },
    { id: "tickets", name: "TICKETS", color: "bg-[#5F6DFF]" },
    { id: "digital-branding", name: "DIGITAL BRANDING", color: "bg-[#5F6DFF]" }, // Changed to exact blue requested by user image
    { id: "others", name: "OTHERS", color: "bg-[#5F6DFF]" }
  ];

  useEffect(() => {
    // Observer to detect which section is currently in the viewport
    const options = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Triggers when section is comfortably in view
      threshold: 0
    };

    const spyObserver = new IntersectionObserver((entries) => {
      let foundVisible = false;
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
          foundVisible = true;
          setIsVisible(true);
        }
      });
    }, options);

    // Track when user scrolls past the dark sections to reveal the bar
    const triggerObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setIsVisible(true);
        // We do not hide it once revealed, or perhaps hide if scrolling back to absolute top.
      });
    }, { rootMargin: "0px" });

    // Attach to sections
    tabs.forEach(tab => {
      const el = document.getElementById(tab.id);
      if (el) {
        spyObserver.observe(el);
        triggerObserver.observe(el);
      }
    });

    // Sub-observer hide logic if scrolling back up
    const handleScroll = () => {
      if (window.scrollY < 2000) setIsVisible(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      spyObserver.disconnect();
      triggerObserver.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 md:bottom-auto md:top-8 inset-x-0 w-full flex justify-center px-4 z-[90] pointer-events-none"
        >
          <div className="flex overflow-x-auto scrollbar-hide items-center justify-start md:justify-center gap-1 md:gap-2 max-w-7xl p-1.5 md:p-2 rounded-full bg-white/80 backdrop-blur-2xl border border-black/5 shadow-xl shadow-black/5 pointer-events-auto">
            {tabs.map(tab => {
              const isActive = tab.id === activeTab;
              return (
                <a 
                  key={tab.id}
                  href={`#${tab.id}`}
                  className="shrink-0 group relative overflow-hidden"
                >
                  <motion.div 
                    className={`relative z-10 px-4 py-2.5 text-[10px] md:text-[11px] font-bold uppercase rounded-full tracking-wider transition-all duration-500 ease-out ${
                      isActive 
                        ? `text-white ${tab.color} shadow-md` 
                        : "text-black/60 bg-transparent hover:text-black hover:bg-black/5"
                    }`}
                  >
                    {tab.name}
                  </motion.div>
                </a>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
