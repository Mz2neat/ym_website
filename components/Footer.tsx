"use client";
// component/Footer.tsx

import Link from "next/link";

export default function Footer(){
    return(
        <footer className="w-[95%] flex flex-col md:flex-row justify-between px-16 py-12 bg-black text-white">

        {/* Column 1 — Brand */}
      <div className="flex flex-col gap-2" >
        <h3 className="text-lg text-[#2683EB] font-bold mb-2">Young Muslims</h3>
        <p className="text-gray-400 text-sm max-w-[200px]">
          A community where faith, friendship, and growth connect.
        </p>
      </div>

                {/* Column 2 — Navigation */}
                <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold mb-2">Navigation</h3>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link>
                <Link href="/activities" className="text-gray-400 hover:text-white transiton-colors">Activities</Link>
                <Link href="/learningAndDevelopment" className="text-gray-400 hover:text-white transition-colors">Learning and Development</Link>
                </div>

                {/* Column 3 — Contact */}
                <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold mb-2">Contact Us</h3>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link>
                <Link href="/donate" className="text-gray-400 hover:text-white transition-colors">Donate</Link>
                </div>

                {/* Column 4 — Legal */}
                <div className="flex flex-col gap-2">
                <p className="text-gray-400 text-sm">© 2026 ICNA & Young Muslims. All rights reserved.</p>
                </div>

        </footer>
    );
}
