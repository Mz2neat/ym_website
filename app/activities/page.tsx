"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, Star, Users } from "lucide-react";
import Link from "next/link";
import CtaButton from "@/components/CtaButton";
import { fadeUp } from "@/lib/motion";

export default function Activities(){
    return(
        <main className="relative min-h-screen overflow-y-auto no-scrollbar mb-16 lg:mb-32">
        <div className="relative z-20 text-center lg:text-left">
        <h1 className="text-[#2683EB] mx-4 lg:mx-0 lg:ml-32 mt-8 lg:mt-16 text-lg lg:text-xl">Our Community Engagement</h1>
        <h1 className="text-white mx-4 lg:mx-0 lg:ml-32 mt-2 lg:mt-5 text-3xl md:text-4xl lg:text-5xl lg:max-w-5xl font-semibold font-Josefin">Explore YM Activities</h1>
        <h1 className="mx-4 lg:mx-0 lg:ml-32 text-lg lg:text-xl font-medium mt-2 lg:mt-4">Our specific Programs</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 w-[90%] lg:w-[40%] mx-auto lg:mx-0 lg:ml-16">
        <div className="flex flex-col items-center text-center mt-8 lg:mt-16 relative z-20">
            <Users className="w-8 h-8 lg:w-10 lg:h-10"/>
            <span className="font-medium mt-2 lg:mt-0">Build Brotherhood</span>
        </div>

        <div className="flex flex-col items-center text-center mt-8 lg:mt-16 relative z-20">
            <BookOpen className="w-8 h-8 lg:w-10 lg:h-10"/>
            <span className="font-medium mt-2 lg:mt-0">Grow Spiritually</span>
        </div>
        <div className="flex flex-col items-center text-center mt-8 lg:mt-16 relative z-20">
            <Star className="w-8 h-8 lg:w-10 lg:h-10"/>
            <span className="font-medium mt-2 lg:mt-0">Have Fun and Connect</span>
        </div>
        </div>

              <div className="absolute top-0 right-0 w-full lg:w-[1300px] h-[50vh] lg:h-screen overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_5%,#000010_70%)] z-10">
              </div>
              <Image className="object-cover object-left scale-100" src="/images/YMRetreat.jpeg" fill alt="Background Image"/>
              </div>

      <motion.div 
        className="overflow-hidden transform-gpu will-change-transform bg-[#000010]/50 backdrop-blur-md border-[3px] border-[#2683EB] mt-16 lg:mt-32 mx-auto relative z-20 h-auto w-[90%] lg:w-[75%] max-w-8xl rounded-2xl mb-12 lg:mb-16 flex flex-col lg:flex-row"
        {...fadeUp}
      >
        <div className="mb-6 w-full lg:w-[50%] py-6 lg:py-0 text-center lg:text-left">
          <div className="text-[#2683EB] mx-6 lg:mx-0 lg:ml-16 mt-2 lg:mt-5 text-xl md:text-2xl lg:text-3xl font-medium relative z-15">
            Halaqahs
          </div>
            <div>
              <div className="text-white mx-6 lg:mx-0 lg:ml-16 text-base md:text-xl lg:text-2xl font-medium mt-4 lg:mt-2 lg:mr-16 relative z-15">
                Our Halaqahs are designed to be the perfect balance of spiritual growth and high-energy fun. Every YM gathering begins with a relatable Islamic reminder, a short, interactive talk led by a YM member or guest speaker, followed by an engaging activity like basketball, soccer, or gaming. It’s about learning the Deen while building brotherhood in a space where you truly belong.
              </div>
            </div>
          <div className="flex justify-center mb-4 relative z-15">
            <Link href="/halaqahs">
            <CtaButton variant="outline" className="text-white rounded-2xl text-lg md:text-2xl lg:text-3xl mt-6 lg:mt-10 px-8 lg:px-10 py-4 lg:py-6">
              Learn More
            </CtaButton>
            </Link>
          </div>
        </div>

        <div className="relative w-full lg:w-[50%] h-64 lg:h-auto [mask-image:linear-gradient(to_bottom,transparent,black_20%)] lg:[mask-image:linear-gradient(to_right,transparent,black_20%)]">
          <Image className="object-right object-cover" src="/images/Halaqah2.jpeg" fill alt="Halaqahs"></Image>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto w-[90%] lg:w-[75%] max-w-8xl relative z-20 mb-16 lg:mb-32">
        
        <motion.div 
          className="overflow-hidden transform-gpu will-change-transform bg-[#000010]/50 backdrop-blur-md border-[3px] border-[#2683EB] h-auto lg:h-135 rounded-2xl flex flex-col text-center lg:text-left"
          {...fadeUp}
        >
          <div className="mb-6 pt-6 lg:pt-0">
            <div className="text-[#2683EB] mx-6 lg:mx-0 lg:ml-16 mt-2 lg:mt-5 text-xl md:text-2xl lg:text-3xl font-medium">
              Retreat
            </div>
            <div className="text-white mx-6 lg:mx-0 lg:ml-16 text-base md:text-xl lg:text-2xl font-medium mt-4 lg:mt-2 lg:mr-16">
            The YM Retreat is designed to help youth strengthen their connection with Allah, build friendships, and develop leadership skills. Through outdoor activities, group discussions, and shared experiences, participants leave connected to a community of brothers.
            </div>
          </div>
          <div className="relative h-64 lg:h-128 [mask-image:linear-gradient(to_bottom,transparent,black_20%)]">
          <Image className="object-[center_80%] object-cover scale-100" src="/images/YMRetreat2.jpeg" fill alt="Retreat"></Image>
        </div>
        </motion.div>

        <motion.div 
          className="overflow-hidden transform-gpu will-change-transform bg-[#000010]/50 backdrop-blur-md border-[3px] border-[#2683EB] h-auto lg:h-135 rounded-2xl flex flex-col text-center lg:text-left"
          {...fadeUp}
        >
          <div className="mb-6 pt-6 lg:pt-0">
            <div className="text-[#2683EB] mx-6 lg:mx-0 lg:ml-16 mt-2 lg:mt-5 text-xl md:text-2xl lg:text-3xl font-medium">
              Sports
            </div>
            <div className="text-white mx-6 lg:mx-0 lg:ml-16 text-base md:text-xl lg:text-2xl font-medium mt-4 lg:mt-2 lg:mr-16">
            YM Sports create an environment where youth can stay active, have fun, and build genuine brotherhood. From weekly games to special tournaments, sports serve as a gateway to friendship, mentorship, and personal growth within an Islamic atmosphere.
            </div>
          </div>
          <div className="relative h-64 lg:h-128 [mask-image:linear-gradient(to_bottom,transparent,black_20%)]">
          <Image className="object-cover object-[center_30%]" src="/images/BasketballCropped.jpg" fill alt="Sports"></Image>
          </div>
        </motion.div>
              
      </div>

        </main>
        
    );
}