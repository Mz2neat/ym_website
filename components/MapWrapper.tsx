"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

const DynamicMap = dynamic(() => import("@/components/map"), { 
    ssr: false,
    loading: () => (
        <div className="h-[400px] lg:h-[500px] w-full bg-[#000010] border border-[#2683EB]/30 rounded-xl flex items-center justify-center text-white">
            Loading interactive map...
        </div>
    )
});

export default function MapWrapper({ neighbournets }: { neighbournets: any[] }) {
    // 1. Create a state variable to hold the map back
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        // 2. Wait half a second after the page loads before building the map.
        // This gives Framer Motion time to finish its math and frees up the scroll wheel instantly.
        const timer = setTimeout(() => {
            setIsReady(true);
        }, 500); 

        return () => clearTimeout(timer);
    }, []);

    // 3. Show a lightweight placeholder while the timer runs
    if (!isReady) {
        return (
            <div className="h-[400px] lg:h-[500px] w-full bg-[#000010] border border-[#2683EB]/30 rounded-xl flex items-center justify-center text-gray-500">
                Initializing map...
            </div>
        );
    }

    // 4. Safely render the heavy map
    return <DynamicMap neighbournets={neighbournets} />;
}