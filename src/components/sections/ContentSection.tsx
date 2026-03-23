"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ContentSectionProps {
    id: string;
    title: string;
    subtitle?: string;
    description?: string;
    images: string[];
    reverse?: boolean;
}

export default function ContentSection({ id, title, subtitle, description, images, reverse = false }: ContentSectionProps) {
    return (
        <section
            id={id}
            className={`relative w-full min-h-[80vh] flex items-center py-24 overflow-hidden border-t border-white/5 ${reverse ? "bg-[#0a0a0c]" : "bg-[#050505]"
                }`}
        >
            <div className={`relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 xl:px-24 flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center gap-16`}>

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: reverse ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-5/12 flex flex-col justify-center"
                >
                    {subtitle && (
                        <h3 className="text-sm md:text-base font-bold tracking-widest text-blue-400 uppercase mb-4">
                            {subtitle}
                        </h3>
                    )}
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-white mb-6">
                        {title}
                    </h2>
                    {description && (
                        <p className="text-white/60 text-lg leading-relaxed font-light">
                            {description}
                        </p>
                    )}
                </motion.div>

                {/* Graphics Area */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="w-full lg:w-7/12 relative min-h-[400px] md:min-h-[500px] flex items-center justify-center gap-4 flex-wrap"
                >
                    {images.map((img, idx) => (
                        <div key={idx} className="relative w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-white/[0.02] border border-white/10 p-4">
                            <Image
                                src={`/WaytoAGI/${img}`}
                                alt={`${title} graphic ${idx + 1}`}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
