// compontnet/Navbar.tsx
"use client";
import Link from "next/link";
import { useState } from 'react';
import Image from "next/image";

export default function Navbar(){
    return(
        <nav className="flex items-center justify-between p-4 bg-gray-950 text-white">
            <div className="flex-1">
                <Link href="/">
                <Image
                src="/images/YMLogo.png"
                alt="YM Logo"
                width={130}
                height={50}
                />
                </Link>
                </div>
            <ul className="flex gap-6">
                <li>Home</li>
                <li>About</li>
                <li>Activities</li>
                <li>Learning and Development</li>
                <li>Contact Us</li>
                <li>Donate</li>
            </ul>
            <div className="flex-1 flex justify-end">
                <button className="bg-blue-800 hover:bg-blue-700 text-white px-5 py-2 rounded-md font-semibold transition-colors">
                    Join Now
                </button>
            </div>
        </nav>
    );
}