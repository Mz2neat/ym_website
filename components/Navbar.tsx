"use client";
// component/Navbar.tsx

import Link from "next/link";
import { useState } from 'react';
import Image from "next/image";

export default function Navbar(){
    return(
        <nav className="flex items-center justify-between p-4 bg-black text-xs md:text-lg lg:text-xl text-white">
            <div className="flex-1">
                <Link href="/">
                <Image
                src="/images/YMLogoTransparentCrop.png"
                alt="YM Logo"
                width={110}
                height={50}
                />
                </Link>
                </div>
            <ul className="flex gap-6 flex-wrap">
                <Link className="hover:text-[#2683EB]" href="/">
                <li>Home</li>
                </Link>
                <Link className="hover:text-[#2683EB]" href="/about">
                <li>About</li>
                </Link>

                <div className="relative group">    
                    <Link className="hover:text-[#2683EB]" href="/activities">
                    <li>Activities</li>
                    </Link>

                    <div className="absolute left-0 top-full mt-2 w-56 rounded-xl bg-[#0B0F14]/95 backdrop-blur-md border-[2px] border-[#2683EB] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-4 group-hover:translate-y-0 shadow-[0_10px_30px_rgba(38,131,235,0.15)] z-50">
                        <div className="flex flex-col py-3">
                            <Link href="/ourReach" className="px-6 py-3 text-white text-lg hover:bg-[#2683EB]/20 hover:text-[#2683EB] transition-colors">
                            Our Reach
                            </Link>

                            <Link href="/halaqahs" className="px-6 py-3 text-white text-lg hover:bg-[#2683EB]/20 hover:text-[#2683EB] transition-colors">
                            Halaqahs
                            </Link>
                        </div>

                    </div>
                </div>

                <Link className="hover:text-[#2683EB]" href="/leaninganddevelopment">
                <li>Learning and Development</li>
                </Link>

                <div className="relative group">    
                    <Link className="hover:text-[#2683EB]" href="/contact">
                    <li>Contact Us</li>
                    </Link>

                    <div className="absolute left-0 top-full mt-2 w-56 rounded-xl bg-[#0B0F14]/95 backdrop-blur-md border-[2px] border-[#2683EB] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-4 group-hover:translate-y-0 shadow-[0_10px_30px_rgba(38,131,235,0.15)] z-50">
                        <div className="flex flex-col py-3">
                            <Link href="/findYourNeighbourNet" className="px-6 py-3 text-white text-lg hover:bg-[#2683EB]/20 hover:text-[#2683EB] transition-colors">
                            Find your NeighbourNet
                            </Link>

                        </div>

                    </div>
                </div>


                <Link className="hover:text-[#2683EB]" href="/donate">
                <li>Donate</li>
                </Link>

            </ul>
            <div className="flex-1 flex justify-end">
                <Link href="join">
                <button className="bg-blue-800 text-white px-5 py-2 rounded-md font-semibold hover:bg-white hover:text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(38,131,235,1)]">
                    Join Now
                </button>
                </Link>
            </div>
        </nav>
    );
}