"use client";
// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import { MoveRight, Users } from "lucide-react";
import CountUp from "react-countup";
import {motion} from "framer-motion";
import CtaButton from "@/components/CtaButton";
import { fadeUp } from "@/lib/motion";

export default function Home(){
  return ( 
    //Main Top Part
    <main className="relative z-15 min-h-screen overflow-y-auto no-scrollbar">
      <div className="relative z-15">
      <h1 className="text-[#2683EB] ml-4 lg:ml-32 mt-16 text-lg md:text-xl lg:text-2xl">WELCOME TO YOUNG MUSLIMS</h1>
      <h1 className="text-white ml-4 pr-4 lg:pr-0 lg:ml-32 mt-5 text-4xl md:text-6xl lg:text-8xl max-w-4xl font-bold">Empowering Young Muslims. Inspiring Tomorrow.</h1>
      <h1 className="ml-4 pr-4 lg:pr-0 lg:ml-32 mt-10 text-lg lg:text-2xl font-medium">A community for growth, knowledge, and positive change.</h1>
      <h1 className="ml-4 pr-4 lg:pr-0 lg:ml-32 text-lg lg:text-2xl font-medium">Join us in building a stronger Ummah</h1>
      </div>
      {/*Gradient Image in Background*/}
      <div className="absolute top-0 right-0 w-full h-[50vh] md:w-[70vw] lg:h-[100vh] lg:w-[70vw] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_5%,#000010_90%)] z-10">
      </div>
      <Image className="object-contain scale-150" src="/images/YMLogoBlurred.webp" fill alt="YM Logo"/>
      </div>
      
      {/*Buttons*/}

<div className="">
      <Link href="/join" className="relative z-15">
      <CtaButton variant="hero-solid" className="rounded-lg mt-10 ml-4 lg:ml-32 text-white hover:text-black px-5 py-5 lg:px-10 lg:py-6 text-lg lg:text-3xl">
      Join our Community
      <Users className="w-5 h-5 lg:w-10 lg:h-10 inline-flex ml-4"/>
      </CtaButton>
      </Link>
      <Link href="/activities" className="relative z-15">
      <CtaButton variant="hero-outline" className="rounded-lg mt-10 ml-6 text-white hover:text-black px-5 py-5 lg:px-10 lg:py-6 text-lg lg:text-3xl">
      Explore Activities
      <MoveRight className="w-5 h-5 lg:w-10 lg:h-10 inline-flex ml-4"/>
      </CtaButton>
      </Link>
      </div>

      {/*Mission Statement and Vision Statement*/}


      <motion.div className="relative z-15 bg-black border border-3 border-[#2683EB] mt-32 mx-auto bg-blue h-auto w-[85%] max-w-9xl rounded-xl mb-32 flex flex-col md:flex-row" {...fadeUp}>

        <div className="mx-auto"> {/*Mission Statement and vision statment starting */  }
          <div className="text-[#2683EB] ml-4 lg:ml-16 mt-5 text-lg md:text-xl font-medium">
          Our Vision
          </div>
          <div className="ml-4 lg:ml-16 max-w-128 text-base md:text-xl font-medium mb-8 pr-4">

         Our vision is to create a sustainable system where Muslim youth are rooted in faith, nurtured by prophetic traditions, and empowered to lead while addressing contemporary challenges with modern tools.
          </div>
          </div>
          <div className="hidden md:block w-1 h-28 bg-gray-600 my-auto rounded-lg shrink-0">
          </div>
          <div className="mx-auto">
          <div className="text-[#2683EB] ml-4 lg:ml-16 mt-5 text-lg md:text-xl font-medium">
          Our Mission
          </div>
          <div className="ml-4 lg:ml-16 max-w-128 text-base md:text-xl font-medium mb-8 pr-4">
          Young Muslims mentor Muslim youth through companionship, education, and service - nurturing their God-consciousness (taqwa) - so that Canadian Muslim youth can collectively contribute to the betterment of society with a firm understanding of their Muslim identity and a commitment to the pleasure of Allah (SWT).

          </div>
          </div>
      </motion.div>
      
      {/*Counting Stats*/}

      <div className="mb-32 grid grid-cols-3 w-[90%] max-w-8xl mx-auto relative z-15">
      <div className="flex flex-col items-center justify-center text-center">
      <div className="font-bold text-2xl md:text-4xl lg:text-6xl">
        <CountUp end={750} duration={2.5} enableScrollSpy scrollSpyOnce/>
      +
      </div>
      <div className="font-bold text-lg md:text-3xl lg:text-5xl">
      Members
      </div>
      </div>

      <div className="flex flex-col items-center justify-center text-center">
      <div className="font-bold text-2xl md:text-4xl lg:text-6xl">
      <CountUp end={3752} duration={2.5} enableScrollSpy scrollSpyOnce/>+
      </div>
      <div className="font-bold text-lg md:text-3xl lg:text-5xl">
      Funds Raised
      </div>
      </div>

      <div className="flex flex-col items-center justify-center text-center">
      <div className="font-bold text-2xl md:text-4xl lg:text-6xl">
      <CountUp end={12} duration={2.5} enableScrollSpy scrollSpyOnce/>+
      </div>
      <div className="font-bold text-lg md:text-3xl lg:text-5xl">
      Locations
      </div>
      </div>

      </div>

    </main>
    
  );
}