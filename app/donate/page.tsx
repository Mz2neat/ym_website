"use client";

import { motion } from "framer-motion";
import { fadeLeft, fadeRight } from "@/lib/motion";

export default function Donate() {
    return (
        <main className="relative min-h-screen overflow-y-auto no-scrollbar flex items-center justify-center py-12 lg:py-0">
            <div className="flex flex-col lg:flex-row w-[90%] lg:w-[80%] max-w-7xl mx-auto gap-8 lg:gap-16 relative z-20">
                <motion.div 
                    className="w-full lg:w-[50%] flex flex-col justify-center text-center lg:text-left"
                    {...fadeLeft}
                >
                    <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-semibold font-Josefin mb-4 lg:mb-6">
                        Support Our<br className="hidden lg:block"/>Vision
                    </h1>
                    <p className="text-gray-400 text-base md:text-xl lg:text-2xl font-medium max-w-full lg:max-w-lg mx-auto lg:mx-0">
                        Donations help fund halaqahs, retreats, educational programs, and community initiatives that empower young Muslims to grow in faith, character, and leadership.
                    </p>
                </motion.div>

                <motion.div 
                    className="w-full lg:w-[50%]"
                    {...fadeRight}
                >
                    <div className="w-full min-h-[700px] rounded-3xl overflow-hidden bg-[#04143d] isolate relative">
                        <iframe 
                            title="Donation form powered by Zeffy" 
                            src="https://www.zeffy.com/embed/donation-form/donate-to-ym-national" 
                            allow="payment"
                            scrolling="no"
                            className="absolute top-0 left-0 w-full h-full border-0"
                        ></iframe>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}