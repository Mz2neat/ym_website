"use client";

// ourReach/page.tsx

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ourReach(){
  return (
    <main className="min-h-screen">
      <div className="relative z-20 mt-4 md:mt-8 lg:mt-16">
          <h1 className="text-[#2683EB] ml-32 text-xl">Welcome to YM Chapters</h1>
          <h1 className="text-white ml-8 py-4 text-2xl max-w-5xl md:text-3xl md:ml-16 lg:text-5xl lg:ml-32 font-semibold font-Josefin">Our Reach</h1>
        </div>

        {/*Brampton Section*/}

        <motion.div 
        className="overflow-hidden bg-[#000010]/50 backdrop-blur-md border-[3px] border-[#2683EB] rounded-2xl flex flex-col min-h-[40vh] w-[40%] ml-32 mt-16"
        initial={{opacity: 0, y:50}} 
        whileInView={{opacity: 1, y:0}} 
        transition={{duration:0.8}} 
        viewport={{once:true}}
      >
        <h1 className="ml-6 py-8 lg:text-4xl font-semibold">
          Brampton
        </h1>
        <div className="relative flex flex-row flex-1 min-h-[125px] pb-8">
        <div className="relative w-[40%] ml-6">
        <Image className="object-cover rounded-lg" src="/images/YMRetreat3.jpeg" fill alt="Sports"></Image>
        </div>
        <div className="w-[60%] px-6">
        <p>
          Serving one of Canada's largest Muslim communities, YM Brampton provides a welcoming space for youth to grow spiritually, connect with like-minded brothers, and create lasting memories.
        </p>
        </div>
        </div>
        

      </motion.div>

      {/*Calgary Section*/}

      <motion.div 
        className="overflow-hidden bg-[#000010]/50 backdrop-blur-md border-[3px] border-[#2683EB] rounded-2xl flex flex-col h-[40vh] w-[40%] ml-32 mt-16"
        initial={{opacity: 0, y:50}} 
        whileInView={{opacity: 1, y:0}} 
        transition={{duration:0.8}} 
        viewport={{once:true}}
      >
        <h1 className="ml-6 py-8 lg:text-4xl font-semibold">
          Calgary
        </h1>
        <div className="relative flex flex-row flex-1 min-h-[125px] pb-8">
        <div className="relative w-[40%] ml-6">
        <Image className="object-cover rounded-lg" src="/images/YMRetreat4.jpeg" fill alt="Sports"></Image>
        </div>
        <div className="w-[60%] px-6">
        <p>
        A community dedicated to nurturing confident Muslim leaders through halaqahs, retreats, outdoor activities, and meaningful connections rooted in Islamic values.        </p>
        </div>
        </div>

      </motion.div>
    </main>
  );
}