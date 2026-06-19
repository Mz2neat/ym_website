"use client";

// learningAndDevelopment/page.tsx

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function LearningAndDevelopment(){
    const [openModule, setOpenModule] = useState<string | null>(null);

    const toggleModule = (module: string) => {
        setOpenModule(openModule === module ? null : module);
    };

    return(
        <main className="relative min-h-screen overflow-y-auto no-scrollbar mb-32">
        
        <div className="relative z-20 mt-16 ml-32 max-w-5xl">
            <h1 className="text-white text-5xl font-semibold font-Josefin mb-10">Learning & Development</h1>
            
            <div className="mb-10">
                <h1 className="text-white text-2xl font-medium mb-4">Why Islamic Education Matters:</h1>
                <p className="text-white text-xl">Islamic education provides young Muslims with the knowledge, confidence, and values needed to navigate today's world while staying connected to their faith. Through engaging halaqahs, meaningful discussions, and practical lessons, YM helps youth develop a deeper understanding of Islam and apply its teachings in their daily lives.</p>
            </div>

            <Link 
            href="https://360.articulate.com/review/content/02e3736c-dc96-4a60-9bcb-a44b092df9cd/review?reviewRequest=b7eea37f-0d29-48c6-ad63-50eec86a3202"
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block border-2 border-[#2683EB] bg-[#000010] text-[#2683EB] rounded-lg text-lg font-medium px-6 py-2 mb-10 hover:bg-[#2683EB] hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(38,131,235,0.8)]"
            >
            Learning Modules
            </Link>

            <div className="mb-10">
                <h1 className="text-white text-2xl font-medium mb-4">Self-Development Through Community:</h1>
                <p className="text-white text-xl">Growth happens best when you're surrounded by people who inspire and support you. YM creates an environment where youth can build leadership skills, strengthen their character, and develop lifelong friendships. Through mentorship, teamwork, and shared experiences, members are encouraged to become the best version of themselves.</p>
            </div>

            <div className="mb-16">
                <h1 className="text-white text-2xl font-medium mb-4">The YM Retreat Experience:</h1>
                <p className="text-white text-xl">YM retreats offer a unique opportunity to step away from daily distractions and reconnect with what matters most. Through inspiring reminders, outdoor activities, team challenges, and brotherhood-building experiences, participants leave refreshed, motivated, and spiritually recharged with memories that last a lifetime.</p>
            </div>

            <h1 className="text-white text-4xl font-semibold font-Josefin mb-8">Learning Modules</h1>

            <div className="mb-4">
                <motion.div 
                    className={`bg-[#2683EB] text-white p-4 flex justify-between items-center text-xl font-medium cursor-pointer ${openModule === 'reverts' ? 'rounded-t-lg' : 'rounded-lg'}`}
                    onClick={() => toggleModule('reverts')}
                    initial={{opacity: 0, y:20}} 
                    whileInView={{opacity: 1, y:0}} 
                    transition={{duration:0.4}} 
                    viewport={{once:true}}
                >
                    <span>Modules for Reverts</span>
                    <span>{openModule === 'reverts' ? '▼' : '▶'}</span>
                </motion.div>
                
                {openModule === 'reverts' && (
                    <motion.div 
                        className="bg-white text-black p-8 rounded-b-lg"
                        initial={{opacity: 0}} 
                        animate={{opacity: 1}} 
                        transition={{duration:0.3}} 
                    >
                        <h1 className="text-3xl font-semibold mb-4">Coming Soon</h1>
                        <p className="text-lg">This module is currently under development. Please check back later!</p>
                    </motion.div>
                )}
            </div>

            <div className="mb-4">
                <motion.div 
                    className={`bg-[#2683EB] text-white p-4 flex justify-between items-center text-xl font-medium cursor-pointer ${openModule === 'beginner' ? 'rounded-t-lg' : 'rounded-lg'}`}
                    onClick={() => toggleModule('beginner')}
                    initial={{opacity: 0, y:20}} 
                    whileInView={{opacity: 1, y:0}} 
                    transition={{duration:0.4}} 
                    viewport={{once:true}}
                >
                    <span>Beginner modules</span>
                    <span>{openModule === 'beginner' ? '▼' : '▶'}</span>
                </motion.div>
                
                {openModule === 'beginner' && (
                    <motion.div 
                        className="bg-white text-black p-8 rounded-b-lg"
                        initial={{opacity: 0}} 
                        animate={{opacity: 1}} 
                        transition={{duration:0.3}} 
                    >
                        <h1 className="text-3xl font-semibold mb-4">Coming Soon</h1>
                        <p className="text-lg">This module is currently under development. Please check back later!</p>
                    </motion.div>
                )}
            </div>

            <div className="mb-16">
                <motion.div 
                    className={`bg-[#2683EB] text-white p-4 flex justify-between items-center text-xl font-medium cursor-pointer ${openModule === 'intermediate' ? 'rounded-t-lg' : 'rounded-lg'}`}
                    onClick={() => toggleModule('intermediate')}
                    initial={{opacity: 0, y:20}} 
                    whileInView={{opacity: 1, y:0}} 
                    transition={{duration:0.4}} 
                    viewport={{once:true}}
                >
                    <span>Intermediate modules</span>
                    <span>{openModule === 'intermediate' ? '▼' : '▶'}</span>
                </motion.div>
                
                {openModule === 'intermediate' && (
                    <motion.div 
                        className="bg-white text-black p-8 rounded-b-lg"
                        initial={{opacity: 0}} 
                        animate={{opacity: 1}} 
                        transition={{duration:0.3}} 
                    >
                        <h1 className="text-3xl font-semibold mb-4">Coming Soon</h1>
                        <p className="text-lg">This module is currently under development. Please check back later!</p>
                    </motion.div>
                )}
            </div>

        </div>
        </main>
    );
}