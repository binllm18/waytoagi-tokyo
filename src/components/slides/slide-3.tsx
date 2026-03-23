"use client";

import { motion } from "framer-motion";

export default function Slide3() {
    const stats = [
        { label: "AI Members", value: ">9m", color: "text-blue-400" },
        { label: "Cities Reached", value: "40+", color: "text-purple-400" },
        { label: "Universities", value: "200+", color: "text-cyan-400" },
    ];

    const regions = [
        { name: "Japan", pop: "64.6%", top: "45%", left: "80%", active: true },
        { name: "China", pop: "9.2%", top: "40%", left: "70%" },
        { name: "Singapore", pop: "3.6%", top: "60%", left: "75%" },
        { name: "USA", pop: "2.4%", top: "35%", left: "20%" },
        { name: "Europe", pop: "2.3%", top: "30%", left: "55%" },
    ];

    return (
        <div className="w-full max-w-[1400px] h-[80vh] bg-[#0A0A0A] rounded-3xl relative overflow-hidden flex flex-col p-12 lg:p-16 border border-white/5 shadow-2xl">
            {/* Subdued global network background effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)] z-0 pointer-events-none" />

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="z-10 mb-12 max-w-2xl"
            >
                <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
                    WaytoAGI is a global <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                        open-source community
                    </span>
                </h2>
                <p className="text-white/60 text-lg leading-relaxed font-light">
                    We bring together the brightest minds in artificial intelligence across the globe, fostering an ecosystem where ideas evolve into revolutionary technologies.
                </p>
            </motion.div>

            {/* Stats Row */}
            <div className="flex gap-12 z-10 mb-16">
                {stats.map((stat, idx) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + idx * 0.1 }}
                        className="flex flex-col gap-2"
                    >
                        <span className={`text-4xl md:text-5xl font-black tracking-tighter ${stat.color}`}>
                            {stat.value}
                        </span>
                        <span className="text-sm font-semibold tracking-widest text-white/50 uppercase">
                            {stat.label}
                        </span>
                    </motion.div>
                ))}
            </div>

            {/* Map Abstract Representation */}
            <div className="relative flex-1 w-full bg-white/[0.02] rounded-2xl border border-white/5 z-10 overflow-hidden">
                {/* Abstract point map background */}
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'2\' cy=\'2\' r=\'1\' fill=\'white\'/%3E%3C/svg%3E")' }} />

                {/* Global Distribution Nodes */}
                {regions.map((region, idx) => (
                    <motion.div
                        key={region.name}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 + idx * 0.1, type: "spring" }}
                        className={`absolute flex flex-col items-center ${region.active ? "z-20" : "z-10"}`}
                        style={{ top: region.top, left: region.left }}
                    >
                        <div className={`relative flex items-center justify-center rounded-full ${region.active ? "w-16 h-16 bg-blue-500/20 border border-blue-400/50 shadow-[0_0_30px_rgba(59,130,246,0.3)]" : "w-8 h-8 bg-white/5 border border-white/10"
                            }`}>
                            <div className={`w-2 h-2 rounded-full ${region.active ? "bg-blue-400 animate-pulse" : "bg-white/40"}`} />
                        </div>
                        <div className="mt-3 text-center bg-[#0A0A0A]/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
                            <span className={`block text-xs font-bold leading-none ${region.active ? "text-blue-300" : "text-white/60"}`}>
                                {region.name}
                            </span>
                            <span className={`block text-[10px] mt-1 font-mono ${region.active ? "text-blue-100" : "text-white/40"}`}>
                                {region.pop}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
