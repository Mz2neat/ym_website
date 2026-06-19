"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function join(){
    return(
        <main className="relative min-h-screen overflow-y-auto flex flex-col items-center pt-16 no-scrollbar mb-32">

            <h1 className="text-white text-5xl md:text-7xl font-semibold font-Josefin mb-16">Join Us</h1>

            <motion.div 
                className="relative z-20 mb-12 text-center"
                initial={{opacity: 0, y:30}} 
                whileInView={{opacity: 1, y:0}} 
                transition={{duration:0.8}} 
                viewport={{once:true}}
            >
                
            </motion.div>

            <div className="grid grid-cols-2 gap-12 mx-auto w-[75%] max-w-6xl relative z-20">
                
                <motion.div 
                    className="overflow-hidden transform-gpu will-change-transform bg-[#000010]/50 backdrop-blur-md border-[3px] border-[#2683EB] rounded-2xl flex flex-col items-center p-10 h-[500px] justify-between"
                    initial={{opacity: 0, y:50}} 
                    whileInView={{opacity: 1, y:0}} 
                    transition={{duration:0.8}} 
                    viewport={{once:true}}
                >
                    <h1 className="text-[#2683EB] text-3xl font-semibold mb-8">Join From Link</h1>
                    
                    <div className="overflow-hidden rounded-2xl border border-[#000010] relative w-full h-48 mb-8">
                        <Image className="object-contain" src="/images/discordJoin.png" fill alt="Discord Card"></Image>
                    </div>
                    <Link href="https://discord.gg/pHzsVEm888" target="_blank" rel="noopener noreferrer" className="w-full flex justify-center">
                        <button className="w-[90%] whitespace-nowrap border-2 border-[#2683EB] bg-[#2683EB] text-white rounded-xl text-xl font-medium px-6 py-4 hover:bg-[#000010] transition-all duration-300">
                            Open Discord Link →
                        </button>
                    </Link>
                </motion.div>

                <motion.div 
                    className="overflow-hidden transform-gpu will-change-transform bg-[#000010]/50 backdrop-blur-md border-[3px] border-[#000010] rounded-2xl flex flex-col items-center p-10 h-[500px]"
                    initial={{opacity: 0, y:50}} 
                    whileInView={{opacity: 1, y:0}} 
                    transition={{duration:0.8}} 
                    viewport={{once:true}}
                >
                    <h1 className="text-[#2683EB] text-3xl font-semibold mb-12">Join From QR Code</h1>
                    
                    <div className="overflow-hidden relative w-64 h-64 bg-white rounded-2xl p-4">
                        <Image className="object-contain" src="/images/discordQRCode.png" fill alt="QR Code"></Image>
                    </div>
                </motion.div>

            </div>

        </main>
    );
}