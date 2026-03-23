"use client";

import { motion } from "framer-motion";

export default function Slide1() {
    return (
        <div className="w-full max-w-[1400px] h-[80vh] bg-[#111] rounded-3xl relative overflow-hidden flex flex-col justify-between p-12 lg:p-16 border border-white/5 shadow-2xl">
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-transparent opacity-50 z-0" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-900/10 blur-[120px] rounded-full z-0" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/10 blur-[100px] rounded-full z-0" />

            {/* Header Logos */}
            <div className="flex justify-between items-center z-10 w-full mb-8">
                <div className="flex gap-8 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl font-bold tracking-tighter"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-red-400">
                            WaytoAGI
                        </span>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-white/70 font-medium tracking-wide"
                    >
                        Linkloud
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-white/70 font-medium tracking-wide"
                    >
                        Asu Capital Partners
                    </motion.div>
                </div>
            </div>

            {/* Main Content Content */}
            <div className="flex flex-col z-10 max-w-3xl mt-auto pb-12">
                <motion.p
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-sm font-semibold tracking-[0.2em] text-blue-400 uppercase mb-6"
                >
                    This April 8, 2026...
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white mb-12"
                >
                    AGI HORIZON 2026
                    <span className="block text-white/40 mt-2">Tokyo, Japan</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="border-l-4 border-white/20 pl-8"
                >
                    <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light italic">
                        "You've got to start with the customer experience and work backwards to the technology. You can't start with the technology and try to figure out where you're going to try to sell it."
                    </p>
                    <p className="mt-4 text-sm tracking-widest text-white/50 uppercase font-semibold">
                        — Steve Jobs, 1997
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
