"use client";

// learningAndDevelopment/page.tsx

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import CtaButton from "@/components/CtaButton";
import { fadeUpFast, fadeIn } from "@/lib/motion";

export default function LearningAndDevelopment(){
    const [openModule, setOpenModule] = useState<string | null>(null);

    const toggleModule = (module: string) => {
        setOpenModule(openModule === module ? null : module);
    };

    return(
        <main className="relative min-h-screen overflow-y-auto no-scrollbar mb-16 lg:mb-32">
        
        <div className="relative z-20 mt-8 lg:mt-16 mx-4 md:mx-8 lg:mx-0 lg:ml-32 max-w-5xl">
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold font-Josefin mb-6 lg:mb-10 text-center lg:text-left">Learning & Development</h1>
            
            <div className="mb-8 lg:mb-10">
                <h1 className="text-white text-xl lg:text-2xl font-medium mb-2 lg:mb-4">Why Islamic Education Matters:</h1>
                <p className="text-white text-base md:text-lg lg:text-xl">Islamic education provides young Muslims with the knowledge, confidence, and values needed to navigate today's world while staying connected to their faith. Through engaging halaqahs, meaningful discussions, and practical lessons, YM helps youth develop a deeper understanding of Islam and apply its teachings in their daily lives.</p>
            </div>

            <Link
            href="https://360.articulate.com/review/content/02e3736c-dc96-4a60-9bcb-a44b092df9cd/review?reviewRequest=b7eea37f-0d29-48c6-ad63-50eec86a3202"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-fit mx-auto lg:mx-0 lg:inline-block mb-8 lg:mb-10"
            >
            <CtaButton variant="outline" className="text-[#2683EB] hover:text-white rounded-lg text-base lg:text-lg px-4 lg:px-6 py-2">
            Learning Modules
            </CtaButton>
            </Link>

            <div className="mb-8 lg:mb-10">
                <h1 className="text-white text-xl lg:text-2xl font-medium mb-2 lg:mb-4">Self-Development Through Community:</h1>
                <p className="text-white text-base md:text-lg lg:text-xl">Growth happens best when you're surrounded by people who inspire and support you. YM creates an environment where youth can build leadership skills, strengthen their character, and develop lifelong friendships. Through mentorship, teamwork, and shared experiences, members are encouraged to become the best version of themselves.</p>
            </div>

            <div className="mb-12 lg:mb-16">
                <h1 className="text-white text-xl lg:text-2xl font-medium mb-2 lg:mb-4">The YM Retreat Experience:</h1>
                <p className="text-white text-base md:text-lg lg:text-xl">YM retreats offer a unique opportunity to step away from daily distractions and reconnect with what matters most. Through inspiring reminders, outdoor activities, team challenges, and brotherhood-building experiences, participants leave refreshed, motivated, and spiritually recharged with memories that last a lifetime.</p>
            </div>

            <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold font-Josefin mb-6 lg:mb-8 text-center lg:text-left">Learning Modules</h1>

            <div className="mb-4">
                <motion.div 
                    className={`bg-[#2683EB] text-white p-3 lg:p-4 flex justify-between items-center text-base md:text-lg lg:text-xl font-medium cursor-pointer ${openModule === 'Br.Muqsith' ? 'rounded-t-lg' : 'rounded-lg'}`}
                    onClick={() => toggleModule('Br.Muqsith')}
                    {...fadeUpFast}
                >
                    <span>Broader Modules </span>
                    <span>{openModule === 'Br.Muqsith' ? '▼' : '▶'}</span>
                </motion.div>
                
                {openModule === 'Br.Muqsith' && (
                    <motion.div 
                        className="bg-white text-black p-4 lg:p-8 rounded-b-lg"
                        {...fadeIn}
                    >
                       <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2 lg:mb-4">These are broader modules made by brother Muqsit </h1>
<p className="text-base lg:text-lg">
  This module is currently under development. but you can view it here!{' '}
  <a
    href="https://icna-study-circles.vercel.app/index.html"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#2683EB] underline"
    >
    View this module
  </a>
</p>
</motion.div>
                )}
            </div>
            
            <div className="mb-4">
                <motion.div 
                    className={`bg-[#2683EB] text-white p-3 lg:p-4 flex justify-between items-center text-base md:text-lg lg:text-xl font-medium cursor-pointer ${openModule === 'reverts' ? 'rounded-t-lg' : 'rounded-lg'}`}
                    onClick={() => toggleModule('reverts')}
                    {...fadeUpFast}
                >
                    <span>Learning Associates Modules </span>
                    <span>{openModule === 'reverts' ? '▼' : '▶'}</span>
                </motion.div>
                
                {openModule === 'reverts' && (
                    <motion.div 
                        className="bg-white text-black p-4 lg:p-8 rounded-b-lg"
                        {...fadeIn}
                    >
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2 lg:mb-4">Coming Soon</h1>
                        <p className="text-base lg:text-lg">This module is currently under development. Please check back later!</p>
                    </motion.div>
                )}
            </div>

            <div className="mb-4">
                <motion.div 
                    className={`bg-[#2683EB] text-white p-3 lg:p-4 flex justify-between items-center text-base md:text-lg lg:text-xl font-medium cursor-pointer ${openModule === 'beginner' ? 'rounded-t-lg' : 'rounded-lg'}`}
                    onClick={() => toggleModule('beginner')}
                    {...fadeUpFast}
                >
                    <span>Beginner modules</span>
                    <span>{openModule === 'beginner' ? '▼' : '▶'}</span>
                </motion.div>
                
                {openModule === 'beginner' && (
                    <motion.div 
                        className="bg-white text-black p-4 lg:p-8 rounded-b-lg"
                        {...fadeIn}
                    >
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2 lg:mb-4">Coming Soon</h1>
                        <p className="text-base lg:text-lg">This module is currently under development. Please check back later!</p>
                    </motion.div>
                )}
            </div>

            <div className="mb-12 lg:mb-16">
                <motion.div 
                    className={`bg-[#2683EB] text-white p-3 lg:p-4 flex justify-between items-center text-base md:text-lg lg:text-xl font-medium cursor-pointer ${openModule === 'intermediate' ? 'rounded-t-lg' : 'rounded-lg'}`}
                    onClick={() => toggleModule('intermediate')}
                    {...fadeUpFast}
                >
                    <span>Intermediate modules</span>
                    <span>{openModule === 'intermediate' ? '▼' : '▶'}</span>
                </motion.div>
                
                {openModule === 'intermediate' && (
                    <motion.div 
                        className="bg-white text-black p-4 lg:p-8 rounded-b-lg"
                        {...fadeIn}
                    >
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2 lg:mb-4">Coming Soon</h1>
                        <p className="text-base lg:text-lg">This module is currently under development. Please check back later!</p>
                    </motion.div>
                )}
            </div>

        </div>
        </main>
    );
}