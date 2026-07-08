"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import CtaButton from "@/components/CtaButton";
import { fadeUp } from "@/lib/motion";

type Chapter = {
    id: string;
    name: string;
    description: string;
    image_name: string;
};

export default function ChapterCard ({ chapter }: { chapter: Chapter }){
    return(
        <motion.div
        key={chapter.id}
        className="overflow-hidden bg-[#000010]/50 backdrop-blur-md border-[3px] border-[#2683EB] rounded-2xl flex flex-col min-h-[40vh] w-[90%] mx-auto lg:mx-0 lg:w-[80%] lg:ml-32 mt-8 lg:mt-16"
        {...fadeUp}
      >
        <h1 className="text-center lg:text-left lg:ml-6 py-6 lg:py-8 text-2xl md:text-3xl lg:text-4xl font-semibold">
          {chapter.chapter_name}
        </h1>
        <div className="relative flex flex-col lg:flex-row flex-1 min-h-[125px] pb-6 lg:pb-8">
        <div className="relative w-[90%] lg:w-[40%] h-48 lg:h-auto mx-auto lg:mx-0 lg:ml-6 mb-6 lg:mb-0">
        <Image className="object-cover rounded-lg" src={`/images/${chapter.image_name}`} fill alt="Sports"></Image>
        </div>
        <div className="w-full lg:w-[60%] px-6">
        <p className="text-white text-base md:text-lg lg:text-xl text-center lg:text-left">
        {chapter.description}
        </p>
        <div className="flex justify-center mb-4 relative z-15">
            <Link href="/contact">
            <CtaButton variant="outline" className="text-white rounded-2xl text-lg md:text-xl lg:text-2xl mt-6 lg:mt-10 px-6 lg:px-8 py-3 lg:py-4">
              Contact
            </CtaButton>
            </Link>
          </div>
        </div>
        </div>
        
      
      </motion.div>
    )
}