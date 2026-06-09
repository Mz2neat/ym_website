"use client";
// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import { MoveRight, Users } from "lucide-react";
import CountUp from "react-countup";
import {motion} from "framer-motion";

export default function Home(){
  return (
    //Main Top Part
    <main className="relative z-15 min-h-screen overflow-y-auto no-scrollbar">
      <div className="relative z-15">
      <h1 className="text-[#2683EB] ml-4 lg:ml-32 mt-16 text-lg md:text-xl lg:text-2xl">WELCOME TO YOUNG MUSLIMS</h1>
      <h1 className="text-white ml-4 lg:ml-32 mt-5 text-4xl md:text-6xl lg:text-8xl max-w-4xl md:max-w-4xl lg:max-w-4xl font-bold">Empowering Young Muslims. Inspiring Tomorrow.</h1>
      <h1 className="ml-4 lg:ml-32 mt-10 text-lg lg:text-2xl font-medium">A community for growth, knowledge, and positive change.</h1>
      <h1 className="ml-4 lg:ml-32 text-lg lg:text-2xl font-medium">Join us in building a stronger Ummah</h1>
      </div>
      {/*Gradient Image in Background*/}
      <div className="absolute top-0 right-0 w-full h-[50vh] md:w-[70vw] lg:h-[100vh] lg:w-[70vw] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_5%,#0B0F14_90%)] z-10">
      </div>
      <Image className="object-contain scale-150" src="/images/YMLogoBlurred.webp" fill alt="YM Logo"/>
      </div>
      
      {/*Buttons*/}

<div className="">
      <Link href="/join" className="relative z-15">
      <button className="rounded-lg bg-blue-800 mt-10 ml-4 lg:ml-32 font-medium px-5 py-5 lg:px-10 lg:py-6 text-lg lg:text-3xl hover:bg-white hover:text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(38,131,235,1)]">
      Join our Community
      <Users className="w-5 h-5 lg:w-10 lg:h-10 inline-flex ml-4"/>
      </button>
      </Link>
      <Link href="/activities" className="relative z-15">
      <button className="border border-2 border-[#2683EB] bg-[#0B0F14] rounded-lg mt-10 ml-6 font-medium px-5 py-5 lg:px-10 lg:py-6 hover:bg-white hover:text-black text-lg lg:text-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(38,131,235,1)]">
      Explore Activities
      <MoveRight className="w-5 h-5 lg:w-10 lg:h-10 inline-flex ml-4"/>
      </button>
      </Link>
      </div>

      {/*Mission Statement and Vision Statement*/}


      <motion.div className="relative z-15 bg-black border border-3 border-[#2683EB] mt-32 mx-auto bg-blue relative z-15 h-auto w-[85%] max-w-9xl rounded-xl mb-32 flex" initial={{opacity: 0, y:50}} whileInView={{opacity: 1, y:0}} transition={{duration:0.8}} viewport={{once:true}}>
        
        <div className="mx-auto">
          <div className="text-[#2683EB] ml-2 lg:ml-16 mt-5 text-xl font-medium">
          Our Vision
          </div>
          <div className="ml-2 lg:ml-2 lg:ml-16 max-w-128 text-xl font-medium mb-8">
            
          Canadian Muslim youth collectively contributing to the betterment of society with God-consciousness and a firm understanding of their Muslim identity.
          </div>
          </div>
          <div className="w-1 h-28 bg-gray-600 my-auto rounded-lg">
            {/*empty div for line*/}
          </div>
          <div className="mx-auto">
          <div className="text-[#2683EB] ml-2 lg:ml-16 mt-5 text-xl font-medium">
          Our Mission
          </div>
          <div className="ml-2 lg:ml-16 max-w-128 text-xl font-medium mb-8">
          Mentoring Muslim youth through companionship, education, and service, Young Muslims seek the pleasure of Allah (SWT).
          </div>
          </div>
      </motion.div>
      
      {/*Counting Stats*/}

      <div className="mb-32 grid grid-cols-3 w-[90%] max-w-8xl mx-auto relative z-15">
      <div className="flex flex-col items-center justify center text-center">
      <div className="font-bold text-6xl">
        <CountUp end={750} duration={2.5} enableScrollSpy scrollSpyOnce/>
      +
      </div>
      <div className="font-bold text-6xl">
      Members
      </div>
      </div>
      
      <div className="flex flex-col items-center justify center text-center">
      <div className="font-bold text-6xl">
      <CountUp end={3752} duration={2.5} enableScrollSpy scrollSpyOnce/>+
      </div>
      <div className="font-bold text-6xl">
      Funds Raised
      </div>
      </div>

      <div className="flex flex-col items-center justify center text-center">
      <div className="font-bold text-6xl">
      <CountUp end={12} duration={2.5} enableScrollSpy scrollSpyOnce/>+
      </div>
      <div className="font-bold text-6xl">
      Locations
      </div>
      </div>

      </div>

    </main>
    
  );
}