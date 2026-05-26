"use client";
// component/Footer.tsx


import Link from "next/link";

export default function Footer(){
    return(
        <footer className="flex items-center justify-between p-4 bg-black text-white h-64">
            <ul className="ml-16">
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
        </footer>
    )
}