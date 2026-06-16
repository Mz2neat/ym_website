"use client";
// component/Footer.tsx


import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full flex flex-col md:flex-row justify-between px-16 py-12">
            {/* COLUMN 1 - LOGO AND SOCIAL MEDIA */}
            <div className="flex flex-col gap-2">
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