"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import CtaButton from "@/components/CtaButton";
import { fadeUp } from "@/lib/motion";

export default function join(){
    return(
        <main className="relative min-h-screen overflow-y-auto flex flex-col items-center pt-8 lg:pt-16 no-scrollbar mb-16 lg:mb-32">

            <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-semibold font-Josefin mb-8 lg:mb-16">Join Us</h1>

            <motion.div 
                className="relative z-20 mb-8 lg:mb-12 text-center"
                {...fadeUp}
            >
                
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mx-auto w-[90%] lg:w-[75%] max-w-6xl relative z-20">
                
                <motion.div 
                    className="overflow-hidden transform-gpu will-change-transform bg-[#000010]/50 backdrop-blur-md border-[3px] border-[#2683EB] rounded-2xl flex flex-col items-center p-6 lg:p-10 h-auto lg:h-[500px] justify-between"
                    {...fadeUp}
                >
                    <h1 className="text-[#2683EB] text-2xl lg:text-3xl font-semibold mb-6 lg:mb-8">Join From Link</h1>
                    
                    <div className="overflow-hidden rounded-2xl border border-[#000010] relative w-full h-32 md:h-40 lg:h-48 mb-6 lg:mb-8">
                        <Image className="object-contain" src="/images/discordJoin.png" fill alt="Discord Card"></Image>
                    </div>
                    <Link href="https://discord.gg/pHzsVEm888" target="_blank" rel="noopener noreferrer" className="w-full flex justify-center">
                        <CtaButton variant="solid" className="w-full md:w-[90%] whitespace-nowrap text-white rounded-xl text-lg lg:text-xl px-4 lg:px-6 py-3 lg:py-4">
                            Open Discord Link →
                        </CtaButton>
                    </Link>
                </motion.div>

                <motion.div 
                    className="overflow-hidden transform-gpu will-change-transform bg-[#000010]/50 backdrop-blur-md border-[3px] border-[#000010] rounded-2xl flex flex-col items-center p-6 lg:p-10 h-auto lg:h-[500px]"
                    {...fadeUp}
                >
                    <h1 className="text-[#2683EB] text-2xl lg:text-3xl font-semibold mb-8 lg:mb-12">Join From QR Code</h1>
                    
                    <div className="overflow-hidden relative w-48 h-48 lg:w-64 lg:h-64 bg-white rounded-2xl p-4 mb-4 lg:mb-0">
                        <Image className="object-contain" src="/images/discordQRCode.png" fill alt="QR Code"></Image>
                    </div>
                </motion.div>

            </div>

        </main>
    );
}