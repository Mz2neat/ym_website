"use client";

// findYourNeighbourNet/page.tsx

import {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {findNearestNeighbourNet} from "@/lib/distance";
import { motion } from "framer-motion";

export default function findYourNeighbourNet(){

    const [postalCode, setPostalCode] = useState("");
    const [result, setResult] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSearch = async () => {
        if (!postalCode) return;

        setLoading(true);
        setError("");
        setResult(null);

        const nearest = await findNearestNeighbourNet(postalCode);

        if(!nearest){
            setError("Could not find a location. Please check your postal code.");

        }

        else{
            setResult(nearest);
        }
        setLoading(false);
    }

    return(
        <main className="relative min-h-screen overflow-hidden flex items-center justify-center">
            
            <div className="absolute inset-0 z-0">
                <Image className="object-cover opacity-40" src="/images/FindYourNeighbourNetBG.jpg" fill alt="Gathering Background"/>
                <div className="absolute inset-0 bg-[#000010]/60"></div>
            </div>

            <motion.div 
                className="relative z-20 flex flex-col items-center w-full max-w-4xl"
                initial={{opacity: 0, y:30}} 
                whileInView={{opacity: 1, y:0}} 
                transition={{duration:0.8}} 
                viewport={{once:true}}
            >
                <h1 className="text-white text-4xl md:text-5xl font-bold font-Josefin mb-8 text-center">Get Connected to your Local NeighbourNet</h1>
                
                {/*Search Bar*/}

                <input 
                    type="text" 
                    placeholder="Enter Postal Code (e.g. L6X)"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    className="w-[80%] h-20 bg-white rounded-full text-center text-black text-xl font-medium focus:outline-none focus:ring-4 focus:ring-[#2683EB] placeholder:text-gray-500"
                />

                {/* Search Button */}
                <button 
                    onClick={handleSearch}
                    disabled={loading}
                    className="mt-8 border-2 border-[#2683EB] bg-[#000010] text-white rounded-full text-xl font-medium px-10 py-3 hover:bg-[#2683EB] transition-all duration-300 hover:shadow-[0_0_30px_rgba(38,131,235,0.6)] disabled:opacity-50"
                >
                    {loading ? "Searching..." : "Find Nearest"}
                </button>

                {/* Error Message */}
                {error && (
                    <p className="text-red-400 mt-6 text-lg font-medium">{error}</p>
                )}

                {/* The Result Card, Only renders if result exists) */}
                {result && (
                    <motion.div 
                        className="mt-12 overflow-hidden bg-[#000010]/70 backdrop-blur-md border-[3px] border-[#2683EB] rounded-2xl flex flex-col p-8 w-[90%] max-w-2xl text-center"
                        initial={{opacity: 0, y:20}} 
                        animate={{opacity: 1, y:0}} 
                    >
                        <h2 className="text-white text-3xl font-semibold mb-4">
                            {result.neighbournet_name}
                        </h2>

                        <p className="text-[#2683EB] font-medium mb-8">
                            Distance: {Math.round(result.distanceKms)} km away
                        </p>
                        
                        <Link href="/contact">
                            <button className="border-2 border-[#2683EB] bg-white text-black rounded-xl text-lg font-semibold px-8 py-3 hover:bg-[#2683EB] hover:text-white transition-all duration-300">
                                Contact Chapter
                            </button>
                        </Link>
                    </motion.div>
                )}
            </motion.div>

        </main>
    );
}