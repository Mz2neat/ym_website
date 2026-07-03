"use client";
import Image from "next/image";
import Link from "next/link";
import { MoveRight, Users } from "lucide-react";
import CountUp from "react-countup";
import {motion} from "framer-motion";

export default function Home(){
  return (
    <main className="relative z-15 min-h-screen overflow-y-auto no-scrollbar">
      <div className="relative z-15">
      <h1 className="text-[#2683EB] ml-4 lg:ml-32 mt-16 text-lg md:text-xl lg:text-2xl">WELCOME TO YOUNG MUSLIMS</h1>
      <h1 className="text-white ml-4 lg:ml-32 mt-5 text-4xl md:text-6xl lg:text-8xl max-w-4xl md:max-w-4xl lg:max-w-4xl font-bold">Empowering Young Muslims. Inspiring Tomorrow.</h1>
      <h1 className="ml-4 lg:ml-32 mt-10 text-lg lg:text-2xl font-medium">A community for growth, knowledge, and positive change.</h1>
      <h1 className="ml-4 lg:ml-32 text-lg lg:text-2xl font-medium">Join us in building a stronger Ummah</h1>
      </div>
      
      {/*Gradient Image in Background*/}
      <div className="absolute top-0 right-0 w-full h-[50vh] md:w-[70vw] lg:h-[100vh] lg:w-[70vw] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_5%,#000010_90%)] z-10">
      </div>
      <Image className="object-contain scale-150" src="/images/YMLogoBlurred.webp" fill alt="YM Logo"/>
      </div>
      
      {/*Buttons*/}
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-10 ml-4 lg:ml-32 pr-4 md:pr-0">
      <Link href="/join" className="relative z-15 w-full md:w-auto">
      <button className="w-full rounded-lg bg-[#002bb3] font-medium px-5 py-5 lg:px-10 lg:py-6 text-lg lg:text-3xl hover:bg-white hover:text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(38,131,235,1)] flex items-center justify-center md:justify-start">
      Join our Community
      <Users className="w-5 h-5 lg:w-10 lg:h-10 inline-flex ml-4"/>
      </button>
      </Link>
      <Link href="/activities" className="relative z-15 w-full md:w-auto">
      <button className="w-full border border-2 border-[#2683EB] bg-[#0B0F14] rounded-lg font-medium px-5 py-5 lg:px-10 lg:py-6 hover:bg-white hover:text-black text-lg lg:text-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(38,131,235,1)] flex items-center justify-center md:justify-start">
      Explore Activities
      <MoveRight className="w-5 h-5 lg:w-10 lg:h-10 inline-flex ml-4"/>
      </button>
      </Link>
      </div>

      {/*Mission Statement and Vision Statement*/}
      <motion.div className="relative z-15 bg-black border border-3 border-[#2683EB] mt-16 lg:mt-32 mx-auto bg-blue h-auto w-[90%] lg:w-[85%] max-w-9xl rounded-xl mb-16 lg:mb-32 flex flex-col lg:flex-row py-8 lg:py-0" initial={{opacity: 0, y:50}} whileInView={{opacity: 1, y:0}} transition={{duration:0.8}} viewport={{once:true}}>
        
        <div className="mx-auto flex-1 text-center lg:text-left">
          <div className="text-[#2683EB] lg:ml-16 mt-2 lg:mt-5 text-xl font-medium">
          Our Vision
          </div>
          <div className="px-6 lg:px-0 lg:ml-16 max-w-128 text-lg lg:text-xl font-medium mb-4 lg:mb-8 mt-2 lg:mt-0">
          Canadian Muslim youth collectively contributing to the betterment of society with God-consciousness and a firm understanding of their Muslim identity.
          </div>
          </div>
          <div className="w-[80%] h-1 lg:w-1 lg:h-28 bg-gray-600 my-6 lg:my-auto mx-auto rounded-lg">
            {/*empty div for line*/}
          </div>
          <div className="mx-auto flex-1 text-center lg:text-left">
          <div className="text-[#2683EB] lg:ml-16 mt-2 lg:mt-5 text-xl font-medium">
          Our Mission
          </div>
          <div className="px-6 lg:px-0 lg:ml-16 max-w-128 text-lg lg:text-xl font-medium mb-4 lg:mb-8 mt-2 lg:mt-0">
          Mentoring Muslim youth through companionship, education, and service, Young Muslims seek the pleasure of Allah (SWT).
          </div>
          </div>
      </motion.div>
      
      {/*Counting Stats*/}
      <div className="mb-16 lg:mb-32 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-0 w-[90%] max-w-8xl mx-auto relative z-15">
      <div className="flex flex-col items-center justify-center text-center">
      <div className="font-bold text-5xl lg:text-6xl">
        <CountUp end={750} duration={2.5} enableScrollSpy scrollSpyOnce/>
      +
      </div>
      <div className="font-bold text-2xl lg:text-6xl mt-2 lg:mt-0">
      Members
      </div>
      </div>
      
      <div className="flex flex-col items-center justify-center text-center">
      <div className="font-bold text-5xl lg:text-6xl">
      <CountUp end={3752} duration={2.5} enableScrollSpy scrollSpyOnce/>+
      </div>
      <div className="font-bold text-2xl lg:text-6xl mt-2 lg:mt-0">
      Funds Raised
      </div>
      </div>

      <div className="flex flex-col items-center justify-center text-center">
      <div className="font-bold text-5xl lg:text-6xl">
      <CountUp end={12} duration={2.5} enableScrollSpy scrollSpyOnce/>+
      </div>
      <div className="font-bold text-2xl lg:text-6xl mt-2 lg:mt-0">
      Locations
      </div>
      </div>

      </div>

    </main>
    
  );
}