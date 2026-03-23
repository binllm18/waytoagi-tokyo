"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface VerticalSectionProps {
    imageSrc: string;
    index: number;
}

export default function VerticalSection({ imageSrc, index }: VerticalSectionProps) {
    // Using slightly different animations depending on odd/even to make it dynamic
    const yOffset = index % 2 === 0 ? 50 : 80;

    return (
        <motion.section
            initial={{ opacity: 0, y: yOffset }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full min-h-screen flex items-center justify-center relative bg-black/50 py-10 overflow-hidden"
        >
            <div className="relative w-full max-w-7xl aspect-video px-4 md:px-8 group">
                <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full h-full rounded-2xl md:rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 bg-[#0A0A0A]"
                >
                    <Image
                        src={imageSrc}
                        alt={`Page ${index + 1}`}
                        fill
                        className="object-contain lg:object-cover"
                        priority={index < 2} // Prioritize LCP for first two sections
                    />

                    {/* Subtle gradient overlay to blend edges if needed on contain */}
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 to-transparent mix-blend-overlay" />
                </motion.div>
            </div>
        </motion.section>
    );
}
