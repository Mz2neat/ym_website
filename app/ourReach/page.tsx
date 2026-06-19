"use client";

// ourReach/page.tsx

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ourReach(){
  return (
    <main className="min-h-screen mb-32">
      <div className="relative z-20 mt-4 md:mt-8 lg:mt-16">
          <h1 className="text-[#2683EB] ml-32 text-xl">Welcome to YM Chapters</h1>
          <h1 className="text-white ml-8 py-4 text-2xl max-w-5xl md:text-3xl md:ml-16 lg:text-5xl lg:ml-32 font-semibold font-Josefin">Our Reach</h1>
        </div>

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
        <p className="text-white lg:text-xl">
          Serving one of Canada's largest Muslim communities, YM Brampton provides a welcoming space for youth to grow spiritually, connect with like-minded brothers, and create lasting memories.
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
        <p className="text-white lg:text-xl">
        A community dedicated to nurturing confident Muslim leaders through halaqahs, retreats, outdoor activities, and meaningful connections rooted in Islamic values.</p>
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

      <motion.div 
        className="fixed top-83 right-32 overflow-hidden bg-[#000010]/50 backdrop-blur-md border-[3px] border-[#2683EB] rounded-2xl flex flex-col h-[60vh] w-[40%]"
        initial={{opacity: 0, y:50}} 
        whileInView={{opacity: 1, y:0}} 
        transition={{duration:0.8}} 
        viewport={{once:true}}
      >
        <div className="bg-[#000010]">
        <h1 className="text-white text-center py-4 lg:text-4xl font-semibold w-full z-30 drop-shadow-lg">
          Find a Chapter
        </h1>
        </div>
        <div className="relative h-full w-full">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d185016.03907676053!2d-79.73604940730002!3d43.567295255854276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sICNA!5e0!3m2!1sen!2sca!4v1781878807522!5m2!1sen!2sca" 
          className="absolute top-0 left-0 w-full h-full border-0" 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        </div>
      </motion.div>
    </main>
  );
}