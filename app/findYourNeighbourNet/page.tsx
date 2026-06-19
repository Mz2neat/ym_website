"use client";

// findYourNeighbourNet/page.tsx

import Image from "next/image";
import { motion } from "framer-motion";

export default function findYourNeighbourNet(){
    return(
        <main className="relative min-h-screen overflow-hidden flex items-center justify-center">
            
            <div className="absolute inset-0 z-0">
                <Image className="object-cover opacity-40" src="/images/FindYourNeighbourNetBG.jpg" fill alt="Gathering Background"/>
                <div className="absolute inset-0 bg-[#000010]/60"></div>
            </div>

            <motion.div 
                className="relative z-20 flex flex-col items-center w-full max-w-4xl"
                initial={{opacity: 0, y:30}} 
                whileInView={{opacity: 1, y:0}} 
                transition={{duration:0.8}} 
                viewport={{once:true}}
            >
                <h1 className="text-white text-4xl md:text-5xl font-bold font-Josefin mb-8 text-center">Get Connected to your Local NeighbourNet</h1>
                
                <input 
                    type="text" 
                    placeholder="Enter Postal Code"
                    className="w-[80%] h-20 bg-white rounded-full text-center text-black text-xl font-medium focus:outline-none focus:ring-4 focus:ring-[#2683EB] placeholder:text-gray-500"
                />
            </motion.div>

        </main>
    );
}