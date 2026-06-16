"use client";
// component/Footer.tsx


import Link from "next/link";

<<<<<<< HEAD
export default function Footer() {
    return (
        <footer className="w-full flex flex-col md:flex-row justify-between px-16 py-12">
            {/* COLUMN 1 - LOGO AND SOCIAL MEDIA */}
            <div className="flex flex-col gap-2">
            <ul>
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
            </div>
=======
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
                {/* <h3 className="text-lg text-gray-400 font-bold mb-2">Legal</h3> */}
                <p className="text-gray-400 text-sm">© 2026 ICNA & Young Muslims. All rights reserved.</p>
                <p className="text-gray-400 text-sm">All rights reserved.</p>
                </div>
        
>>>>>>> 86e0b9e (footer)
        </footer>
    );
}