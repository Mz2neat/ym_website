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
            <ul className="flex gap-6">
                <Link href="/">
                <li>Home</li>
                </Link>
                <Link href="/about">
                <li>About</li>
                </Link>
                <Link href="/activities">
                <li>Activities</li>
                </Link>
                <Link href="/leaninganddevelopment">
                <li>Learning and Development</li>
                </Link>
                <Link href="/contact">
                <li>Contact Us</li>
                </Link>
                <Link href="/donate">
                <li>Donate</li>
                </Link>

            </ul>
            <div className="flex-1 flex justify-end">
                <Link href="join">
                <button className="bg-blue-800 hover:bg-blue-700 text-white px-5 py-2 rounded-md font-semibold transition-colors">
                    Join Now
                </button>
                </Link>
            </div>
        </nav>
    );
}