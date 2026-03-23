"use client";

import { motion } from "framer-motion";

export default function Slide2() {
    const columns = Array.from({ length: 5 });

    return (
        <div className="w-full max-w-[1400px] h-[80vh] bg-[#1a1a1a] rounded-3xl relative overflow-hidden flex flex-col p-12 lg:p-16 border border-white/5 shadow-2xl">
            {/* Massive subtle background year */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute bottom-[-10%] left-[-5%] text-[400px] font-black text-white/[0.03] leading-none pointer-events-none z-0"
            >
                2026
            </motion.div>

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-4 mb-16 z-10"
            >
                <div className="w-12 h-1 bg-white/20" />
                <h2 className="text-xl md:text-2xl font-light tracking-[0.2em] text-white/50 uppercase">
                    Course of Schedule
                </h2>
                <h3 className="text-xl md:text-2xl font-bold tracking-widest text-white uppercase ml-4">
                    Event Details 2026
                </h3>
            </motion.div>

            {/* Grid Content */}
            <div className="flex-1 grid grid-cols-5 gap-4 md:gap-8 z-10 mt-10 relative h-full">
                {columns.map((_, index) => {
                    const isCenter = index === 2;

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + index * 0.1, type: "spring", stiffness: 100 }}
                            className={`flex flex-col h-full border-t flex-1 ${isCenter ? "border-red-500/50" : "border-white/10"
                                } pt-6`}
                        >
                            <h4 className={`text-md font-black tracking-tighter uppercase ${isCenter ? "text-red-400" : "text-white/40"
                                }`}>
                                {isCenter ? "1 DAY EVENT" : "TOKYO AI WEEK"}
                            </h4>

                            <div className="mt-8 flex flex-col gap-6">
                                {[1, 2, 3].map((item) => (
                                    <div key={item} className="flex flex-col gap-2">
                                        <span className="text-xs font-mono text-white/30 uppercase tracking-wider">
                                            {isCenter ? "Main Summit" : "Side Event"}
                                        </span>
                                        <span className="text-sm font-medium text-white/80 leading-snug">
                                            Wednesday
                                            <br />
                                            April 8
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {isCenter && (
                                <div className="mt-auto p-4 bg-red-900/20 rounded-lg border border-red-500/20">
                                    <p className="text-sm text-red-100/80 font-medium">Main Agenda & Core Keynotes</p>
                                </div>
                            )}
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
