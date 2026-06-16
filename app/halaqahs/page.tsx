"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import CtaButton from "@/components/CtaButton";
import { fadeUp } from "@/lib/motion";

export default function halaqahs(){
  return (
    <main className="min-h-screen relative overflow-x-hidden">
        <div className="relative z-20 mt-8 lg:mt-16 text-center lg:text-left">
          <h1 className="text-white mx-4 lg:mx-0 lg:ml-32 mt-5 text-3xl md:text-4xl lg:text-5xl max-w-5xl font-semibold font-Josefin">Halaqahs</h1>
          <h1 className="mx-4 lg:mx-0 lg:ml-32 text-base md:text-xl lg:text-2xl font-medium mt-4 max-w-4xl">Each Session is an interactive space, designed for real conversations, moving from lectures to shared experiences.</h1>
        </div>

        <div className="absolute top-0 right-0 w-full lg:w-[55vw] h-[50vh] lg:h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#000010] via-[#000010]/70 to-transparent z-10">
        </div>
        <Image className="object-cover object-left scale-100" src="/images/Halaqah3.jpeg" fill alt="Background Image"/>
        </div>

      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 mx-auto w-[90%] lg:w-[85%] max-w-8xl relative z-20 mb-12 md:mb-16 mt-12 lg:mt-16">
        
        <motion.div 
        className="overflow-hidden transform-gpu will-change-transform bg-[#000010]/50 backdrop-blur-md border-[3px] border-[#2683EB] p-6 md:p-8 lg:p-12 rounded-2xl flex flex-col"
        {...fadeUp}
      >
        <div className="text-[#2683EB] text-lg md:text-xl lg:text-3xl font-medium mb-4 lg:mb-8">
          Every week follows a simple, proven formula:
        </div>
        <ul className="list-disc ml-4 lg:ml-6 text-white text-base md:text-lg lg:text-xl font-medium space-y-3">
        <li>
        The Reminder: A short, relatable Islamic talk led by a YM member or guest speaker that addresses the real-world issues youth face today.
        </li>
        <li>
          The Activity: Once the reminder is done, the energy goes up. Whether it’s basketball, soccer, gaming, or a community outing, the goal is to build brotherhood through shared experiences.
        </li>
        </ul>
        <div className="text-[#2683EB] text-lg md:text-xl lg:text-3xl font-medium py-4 mt-2 lg:mt-0">
        Who is it for?
        </div>
          <ul className="list-disc ml-4 lg:ml-6 text-white text-base md:text-lg lg:text-xl font-medium space-y-3">
        <li>
        Our Halaqas are specifically designed for youth and young adults in Grade 9 and up (Ages 15–25).
        </li>
        </ul>

      </motion.div>

        <motion.div 
          className="overflow-hidden transform-gpu will-change-transform bg-[#0B0F14]/50 backdrop-blur-md border-[3px] border-[#2683EB] rounded-2xl flex flex-col h-64 md:h-80 lg:h-auto"
          {...fadeUp}
        >
          <div className="relative h-full [mask-image:linear-gradient(to_bottom,transparent,black_20%)]">
          <Image className="object-cover object-right object-top" src="/images/Halaqah4.jpeg" fill alt="Sports"></Image>
          </div>
        </motion.div>
              
      </div>

    <div className="mt-16 lg:mt-0">
    <h1 className="relative text-center text-white text-3xl md:text-4xl lg:text-5xl font-semibold z-20">Ready to Join?</h1>

      <div className="flex justify-center mb-16 lg:mb-32 relative z-20">
          <Link href="/findYourNeighbourNet">
            <CtaButton variant="outline" className="text-white rounded-2xl text-lg md:text-2xl lg:text-3xl mt-8 lg:mt-10 px-8 lg:px-10 py-4 lg:py-6">
              Find a Halaqah
            </CtaButton>
          </Link>
          </div>

    </div>

    </main>
  );
}