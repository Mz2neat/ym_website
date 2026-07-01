"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ChapterCard ({ chapter }: any){
    return(
        <motion.div 
        key={chapter.id}
        className="overflow-hidden bg-[#000010]/50 backdrop-blur-md border-[3px] border-[#2683EB] rounded-2xl flex flex-col min-h-[40vh] w-[80%] ml-32 mt-16"
        initial={{opacity: 0, y:50}} 
        whileInView={{opacity: 1, y:0}} 
        transition={{duration:0.8}} 
        viewport={{once:true}}
      >
        <h1 className="ml-6 py-8 lg:text-4xl font-semibold">
          {chapter.name}
        </h1>
        <div className="relative flex flex-row flex-1 min-h-[125px] pb-8">
        <div className="relative w-[40%] ml-6">
        <Image className="object-cover rounded-lg" src={`/images/${chapter.image_name}`} fill alt="Sports"></Image>
        </div>
        <div className="w-[60%] px-6">
        <p className="text-white lg:text-xl">
        {chapter.description}
        </p>
        <div className="flex justify-center mb-4 relative z-15">
            <Link href="/contact">
            <button className="border-2 border-[#2683EB] bg-[#000010] text-white rounded-2xl text-lg md:text-xl lg:text-2xl mt-10 font-medium px-8 py-4 hover:bg-[#2683EB] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(38,131,235,0.8)]">
              Contact
            </button>
            </Link>
          </div>
        </div>
        </div>
        
      
      </motion.div>
    )
}