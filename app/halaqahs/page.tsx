"use client";


import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

// halaqahs/page.tsx

export default function halaqahs(){
  return (
    <main className="min-h-screen relative">
        <div className="relative z-20 mt-4 md:mt-8 lg:mt-16">
          <h1 className="text-white ml-8 mt-5 text-2xl max-w-5xl md:text-3xl md:ml-16 lg:text-5xl lg:ml-32 font-semibold font-Josefin">Halaqahs</h1>
          <h1 className="ml-8 text-sm md:text-xl md:ml-16 lg:text-2xl lg:ml-32 font-medium mt-4 max-w-4xl">Each Session is an interactive space, designed for real conversations, moving from lectures to shared experiences.</h1>
        </div>

        {/*Gradient Image in Background*/}
        <div className="absolute top-0 right-0 w-[1300px] h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#000010] via-[#000010]/70 to-transparent z-10">
        </div>
        <Image className="object-cover object-left scale-100" src="/images/Halaqah3.jpeg" fill alt="Background Image"/>
        </div>

      {/* Halaqah Info Section */}
      <div className="lg:grid lg:grid-cols-2 flex-row gap-8 mx-auto w-[85%] max-w-8xl relative z-20 sm:mb-4 md:mb-8 lg:mb-16 mt-4 md:mt-8 lg:mt-16">
        
        {/* Info */}
        <motion.div 
        className="overflow-hidden transform-gpu will-change-transform bg-[#000010]/50 backdrop-blur-md border-[3px] border-[#2683EB] p-8 lg:p-12 rounded-2xl flex flex-col"
        initial={{opacity: 0, y:50}} 
        whileInView={{opacity: 1, y:0}} 
        transition={{duration:0.8}} 
        viewport={{once:true}}
      >
        <div className="text-[#2683EB] text-md md:text-xl lg:text-3xl font-medium mb-4 md:mb-6 lg:mb-8">
          Every week follows a simple, proven formula:
        </div>
        <ul className="list-disc ml-6 text-white text-sm md:text-lg lg:text-2xl font-medium space-y-3 text-white text-sm md:text-lg lg:text-xl">
        <li>
        The Reminder: A short, relatable Islamic talk led by a YM member or guest speaker that addresses the real-world issues youth face today.
        </li>
        <li>
          The Activity: Once the reminder is done, the energy goes up. Whether it’s basketball, soccer, gaming, or a community outing, the goal is to build brotherhood through shared experiences.
        </li>
        </ul>
        <div className="text-[#2683EB] text-md md:text-xl lg:text-3xl font-medium py-4">
        Who is it for?
        </div>
          <ul className="ml-6 text-white text-sm md:text-lg lg:text-2xl font-medium space-y-3 text-white text-sm md:text-lg lg:text-xl">
        <li>
        Our Halaqas are specifically designed for youth and young adults in Grade 9 and up (Ages 15–25).
        </li>
        </ul>

      </motion.div>

        {/* Picture */}
        <motion.div 
          className="overflow-hidden transform-gpu will-change-transform bg-[#0B0F14]/50 backdrop-blur-md border-[3px] border-[#2683EB] rounded-2xl flex flex-col"
          initial={{opacity: 0, y:50}} 
          whileInView={{opacity: 1, y:0}} 
          transition={{duration:0.8}} 
          viewport={{once:true}}
        > 
          <div className="relative h-full [mask-image:linear-gradient(to_bottom,transparent,black_20%)]">
          <Image className="object-cover object-right object-top" src="/images/Halaqah4.jpeg" fill alt="Sports"></Image>
          </div>
        </motion.div>
              
      </div>


    <div>
    <h1 className="relative text-center text-white text-2xl md:text-3xl lg:text-5xl font-semibold z-20">Ready to Join?</h1>

      <div className="flex justify-center sm:mb-8 md:mb-16 lg:mb-32 relative z-20">
          <Link href="/findYourNeighbourNet">
            <button className="border-2 border-[#2683EB] bg-[#0B0F14] text-white rounded-2xl text-xl md:text-2xl lg:text-3xl mt-10 font-medium px-10 py-6 hover:bg-[#2683EB] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(38,131,235,0.8)]">
              Find a Halaqah
            </button>
          </Link>
          </div>

    </div>

    </main>
  );
}