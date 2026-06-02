"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, Star, Users } from "lucide-react";


export default function Activities(){
    return(
        <main className="relative min-h-screen overflow-y-auto no-scrollbar mb-32">
        <div className="relative z-20">
        <h1 className="text-[#2683EB] ml-32 mt-16 text-xl">Our Community Engagement</h1>
        <h1 className="text-white ml-32 mt-5 text-5xl max-w-5xl font-semibold font-Josefin">Explore YM Activities</h1>
        <h1 className="ml-32 text-xl font-medium mt-4">Our specific Programs</h1>
        </div>


        <div className="grid grid-cols-3 w-[40%] ml-16">
        <div className="flex flex-col items-center text-center mt-16 relative z-20">
            <Users className="w-10 h-10"/>
            <span className="font-medium">Build Brotherhood</span>
        </div>

        <div className="flex flex-col items-center text-center mt-16 relative z-20">
            <BookOpen className="w-10 h-10"/>
            <span className="font-medium">Grow Spiritually</span>
        </div>
        <div className="flex flex-col items-center text-center mt-16 relative z-20">
            <Star className="w-10 h-10"/>
            <span className="font-medium">Have Fun and Connect</span>
        </div>
        </div>

        {/*Gradient Image in Background*/}
              <div className="absolute top-0 right-0 w-[1300px] h-screen overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_5%,#0B0F14_70%)] z-10">
              </div>
              <Image className="object-cover scale-130" src="/images/FillerImage.jpeg" fill alt="Islamic Architecture Design"/>
              </div>
{/*Halaqah Section*/}

<motion.div 
        className="transform-gpu will-change-transform bg-[#0B0F14]/50 backdrop-blur-md border-[3px] border-[#2683EB] mt-32 mx-auto relative z-20 h-auto w-[85%] max-w-8xl rounded-2xl mb-16 flex"
        initial={{opacity: 0, y:50}} 
        whileInView={{opacity: 1, y:0}} 
        transition={{duration:0.8}} 
        viewport={{once:true}}
      >
        <div className="mb-6 w-[50%] ">
          <div className="text-[#2683EB] ml-16 mt-5 text-xl md:text-2xl lg:text-3xl font-medium relative z-15">
            Halaqahs
          </div>
            <div>
              <div className="text-white ml-16 text-lg md:text-xl lg:text-2xl font-medium mt-2 mr-16 relative z-15">
                Our activities are designed to be the perfect balance of spiritual growth and high-energy fun. Every YM gathering begins with a relatable Islamic reminder, a short, interactive talk led by a YM member or guest speaker, followed by an engaging activity like basketball, soccer, or gaming. It’s about learning the Deen while building brotherhood in a space where you truly belong.
              </div>
              <div>
                <div className="">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,transparent_5%,#0B0F14_70%)] z-10">
                  </div>
                  <Image className="scale-100" src="/images/placeholderHalaqahs.png" fill alt="Halaqahs"></Image>
                </div>
              </div>
            </div>
          <div className="flex justify-center mb-4 relative z-15">
            <button className="border-2 border-[#2683EB] bg-[#0B0F14] text-white rounded-2xl text-xl md:text-2xl lg:text-3xl mt-10 font-medium px-10 py-6 hover:bg-[#2683EB] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(38,131,235,0.8)]">
              Find a Halaqah
            </button>
          </div>
        </div>
      </motion.div>

      {/* Sports & Retreat Section Wrapper */}
      <div className="grid grid-cols-2 gap-8 mx-auto w-[85%] max-w-8xl relative z-20 mb-32">
        
        {/* Sports Section */}
        <motion.div 
          className="transform-gpu will-change-transform bg-[#0B0F14]/50 backdrop-blur-md border-[3px] border-[#2683EB] h-168 rounded-2xl"
          initial={{opacity: 0, y:50}} 
          whileInView={{opacity: 1, y:0}} 
          transition={{duration:0.8}} 
          viewport={{once:true}}
        >
          <div className="mb-6">
            <div className="text-[#2683EB] ml-16 mt-5 text-xl md:text-2xl lg:text-3xl font-medium">
              Sports
            </div>
            <div className="text-white ml-16 text-lg md:text-xl lg:text-2xl font-medium mt-2 mr-16">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac dignissim ipsum. Donec eu nisi urna. Morbi condimentum justo sed suscipit consectetur. Fusce hendrerit semper erat, non molestie tortor pulvinar nec.                
            </div>
          </div>
        </motion.div>

        {/* Retreat Section */}
        <motion.div 
          className="transform-gpu will-change-transform bg-[#0B0F14]/50 backdrop-blur-md border-[3px] border-[#2683EB] h-auto rounded-2xl"
          initial={{opacity: 0, y:50}} 
          whileInView={{opacity: 1, y:0}} 
          transition={{duration:0.8, delay: 0.2}} 
          viewport={{once:true}}
        >
          <div className="mb-6">
            <div className="text-[#2683EB] ml-16 mt-5 text-xl md:text-2xl lg:text-3xl font-medium">
              Retreat
            </div>
            <div className="text-white ml-16 text-lg md:text-xl lg:text-2xl font-medium mt-2 mr-16">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac dignissim ipsum. Donec eu nisi urna. Morbi condimentum justo sed suscipit consectetur. Fusce hendrerit semper erat, non molestie tortor pulvinar nec.                
            </div>
          </div>
        </motion.div>
              
      </div>



        </main>
        
    );
}