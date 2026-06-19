"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Phone, Mail, User } from "lucide-react"; 

export default function contact(){
    return(
        <main className="relative min-h-screen mb-32">
        
        <div className="relative h-[60vh] w-full flex items-center mb-16">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#000010_20%,transparent_100%)] z-10"></div>
            <Image className="object-cover object-center absolute inset-0" src="/images/ContactPageHero.jpg" fill alt="Contact Background"/>
            
            <div className="relative z-20 ml-32">
                <h1 className="text-white text-5xl md:text-7xl font-semibold font-Josefin leading-tight">Have a Question?<br/>Want to Get Involved?</h1>
            </div>
        </div>

        <div className="flex w-full pl-32 pr-20 gap-10 xl:gap-16 relative z-20 justify-between items-start">
            
            <motion.div 
                className="w-[20%] flex flex-col"
                initial={{opacity: 0, y:50}} 
                whileInView={{opacity: 1, y:0}} 
                transition={{duration:0.8}} 
                viewport={{once:true}}
            >
                <h1 className="text-white text-2xl font-bold mb-6">FIND YOUR LOCAL<br/>NEIGHBOURNET</h1>
                <Link href="/neighbourNet">
                    <button className="border-2 border-[#2683EB] bg-[#2683EB] text-white rounded-xl text-xl font-medium px-6 py-4 hover:bg-[#000010] transition-all duration-300 w-full flex items-center justify-between">
                        <span>Find your NeighbourNet</span>
                        <span>🔍</span>
                    </button>
                </Link>
            </motion.div>

            <motion.div 
                className="w-[38%] flex flex-col"
                initial={{opacity: 0, y:50}} 
                whileInView={{opacity: 1, y:0}} 
                transition={{duration:0.8}} 
                viewport={{once:true}}
            >
                <form className="w-full border border-[#2683EB] rounded-2xl p-6 flex flex-col gap-4 bg-[#000010]/40 backdrop-blur-sm">
                    <p className="text-gray-400 text-sm mb-2">*Contacting Brampton West Chapter</p>
                    
                    <div className="grid grid-cols-2 gap-4">
                        <input 
                            type="text" 
                            placeholder="Name" 
                            className="bg-transparent border border-[#2683EB] rounded-lg p-3 text-white focus:outline-none focus:ring-1 focus:ring-[#2683EB] placeholder:text-gray-500" 
                        />
                        <input 
                            type="email" 
                            placeholder="Email" 
                            className="bg-transparent border border-[#2683EB] rounded-lg p-3 text-white focus:outline-none focus:ring-1 focus:ring-[#2683EB] placeholder:text-gray-500" 
                        />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                        <input 
                            type="text" 
                            placeholder="City" 
                            className="bg-transparent border border-[#2683EB] rounded-lg p-3 text-white focus:outline-none focus:ring-1 focus:ring-[#2683EB] placeholder:text-gray-500" 
                        />
                        <input 
                            type="text" 
                            placeholder="Postal Code" 
                            className="bg-transparent border border-[#2683EB] rounded-lg p-3 text-white focus:outline-none focus:ring-1 focus:ring-[#2683EB] placeholder:text-gray-500" 
                        />
                    </div>
                    
                    <textarea 
                        placeholder="Message" 
                        rows={5} 
                        className="bg-transparent border border-[#2683EB] rounded-lg p-3 text-white focus:outline-none focus:ring-1 focus:ring-[#2683EB] resize-none placeholder:text-gray-500"
                    ></textarea>
                    
                    <button 
                        type="submit" 
                        className="w-full bg-[#2683EB] text-white rounded-lg py-3 font-medium text-lg hover:bg-[#000010] border-2 border-transparent hover:border-[#2683EB] transition-all duration-300 mt-2"
                    >
                        Submit
                    </button>
                </form>
            </motion.div>

            <motion.div 
                className="w-[38%] flex flex-col"
                initial={{opacity: 0, y:50}} 
                whileInView={{opacity: 1, y:0}} 
                transition={{duration:0.8}} 
                viewport={{once:true}}
            >
                <h1 className="text-white text-xl font-bold mb-6 uppercase">General Young Muslims<br/>Contact Information</h1>
                
                <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="border border-[#2683EB] rounded-xl p-4 flex gap-3 items-start bg-[#000010]/40 backdrop-blur-sm">
                        <MapPin className="text-[#2683EB] w-5 h-5 shrink-0 mt-1" />
                        <div className="flex flex-col">
                            <span className="text-white font-bold text-sm mb-1">Office Address</span>
                            <span className="text-white text-xs leading-tight">391 Burnhamthorpe<br/>Rd E, Oakville, ON<br/>L6H 7B4</span>
                        </div>
                    </div>

                    <div className="border border-[#2683EB] rounded-xl p-4 flex gap-3 items-start bg-[#000010]/40 backdrop-blur-sm">
                        <Phone className="text-[#2683EB] w-5 h-5 shrink-0 mt-1" />
                        <div className="flex flex-col">
                            <span className="text-white font-bold text-sm mb-1">Main Office Phone</span>
                            <span className="text-white text-xs">+1 (905)-257-4262</span>
                        </div>
                    </div>

                    <div className="border border-[#2683EB] rounded-xl p-4 flex gap-3 items-start bg-[#000010]/40 backdrop-blur-sm">
                        <Mail className="text-[#2683EB] w-5 h-5 shrink-0 mt-1" />
                        <div className="flex flex-col">
                            <span className="text-white font-bold text-sm mb-1">Main Email</span>
                            <span className="text-white text-xs">icna@icna.ca</span>
                        </div>
                    </div>

                    <div className="border border-[#2683EB] rounded-xl p-4 flex gap-3 items-start bg-[#000010]/40 backdrop-blur-sm">
                        <User className="text-[#2683EB] w-5 h-5 shrink-0 mt-1" />
                        <div className="flex flex-col">
                            <span className="text-white font-bold text-sm mb-1">Lead Contact</span>
                            <span className="text-white text-xs">ICNA Contact</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>

        </main>
    );
}