"use client";

import Image from "next/image";
import Link from "next/link";
import CtaButton from "@/components/CtaButton";

type Chapter = {
    chapter_id: string;
    chapter_name: string;
    description: string;
    image_name: string;
};

// We now accept the array "index" to prioritize image loading!
export default function ChapterCard ({ chapter, index = 10 }: { chapter: Chapter, index?: number }){
    return(
        // Removed motion.div and backdrop-blur to save massive CPU/GPU resources
        <div className="overflow-hidden bg-[#000020] border-[3px] border-[#2683EB] rounded-2xl flex flex-col min-h-[40vh] w-[90%] mx-auto lg:mx-0 lg:w-[80%] lg:ml-32 mt-8 lg:mt-16">
        
        <h1 className="text-center lg:text-left lg:ml-6 py-6 lg:py-8 text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
          {chapter.chapter_name}
        </h1>
        
        <div className="relative flex flex-col lg:flex-row flex-1 min-h-[125px] pb-6 lg:pb-8">
        
        <div className="relative w-[90%] lg:w-[40%] h-48 lg:h-64 mx-auto lg:mx-0 lg:ml-6 mb-6 lg:mb-0 shrink-0">
          <Image 
            className="object-cover rounded-lg" 
            src={`/images/${chapter.image_name}`} 
            fill 
            sizes="(max-width: 1024px) 90vw, 40vw" 
            priority={index < 2} // Instantly loads the top 2 images, lazy loads the remaining 30!
            alt={`${chapter.chapter_name} Image`}
          />
        </div>

        <div className="w-full lg:w-[60%] px-6">
        <p className="text-white text-base md:text-lg lg:text-xl text-center lg:text-left">
        {chapter.description}
        </p>
        <div className="flex justify-center mb-4 relative z-15">
            <Link href={`/contact?${chapter.chapter_name}`}>
            <CtaButton variant="outline" className="text-white rounded-2xl text-lg md:text-xl lg:text-2xl mt-6 lg:mt-10 px-6 lg:px-8 py-3 lg:py-4">
              Contact
            </CtaButton>
            </Link>
          </div>
        </div>
        </div>
      </div>
    )
}