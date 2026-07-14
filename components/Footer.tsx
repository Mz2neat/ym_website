"use client";

import Link from "next/link";

export default function Footer(){
    return(
        <footer className="w-full flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-between px-6 md:px-10 lg:px-16 py-10 lg:py-12 gap-8 lg:gap-0 bg-black text-white">

      <div className="flex flex-col gap-2 w-full md:w-[45%] lg:w-auto" >
        <h3 className="text-base lg:text-lg text-[#2683EB] font-bold mb-1 lg:mb-2">Young Muslims</h3>
        <p className="text-gray-400 text-xs lg:text-sm max-w-[80%] md:max-w-full lg:max-w-[200px]">
          A community where faith, friendship, and growth connect.
        </p>
      </div>

                <div className="flex flex-col gap-2 w-full md:w-[45%] lg:w-auto">
                <h3 className="text-base lg:text-lg font-bold mb-1 lg:mb-2">Navigation</h3>
                <Link href="/" className="text-gray-400 hover:text-white text-sm lg:text-base transition-colors">Home</Link>
                <Link href="/about" className="text-gray-400 hover:text-white text-sm lg:text-base transition-colors">About</Link>
                <Link href="/activities" className="text-gray-400 hover:text-white text-sm lg:text-base transition-colors">Activities</Link>
                <Link href="/learningAndDevelopment" className="text-gray-400 hover:text-white text-sm lg:text-base transition-colors">Learning and Development</Link>
                </div>

                <div className="flex flex-col gap-2 w-full md:w-[45%] lg:w-auto">
                <h3 className="text-base lg:text-lg font-bold mb-1 lg:mb-2">Contact Us</h3>
                <Link href="/contact" className="text-gray-400 hover:text-white text-sm lg:text-base transition-colors">Contact Us</Link>
                <Link href="/donate" className="text-gray-400 hover:text-white text-sm lg:text-base transition-colors">Donate</Link>
                </div>

                <div className="flex flex-col gap-2 w-full md:w-[45%] lg:w-auto mt-2 md:mt-0">
                <p className="text-gray-400 text-xs lg:text-sm">© 2026 ICNA & Young Muslims. All rights reserved.</p>
                </div>

        </footer>
    );
}