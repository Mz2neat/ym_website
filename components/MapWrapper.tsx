"use client";

import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("@/components/map"), { 
    ssr: false,
    loading: () => (
        <div className="h-[400px] lg:h-[500px] w-full bg-[#000010] border border-[#2683EB]/30 rounded-xl flex items-center justify-center text-white">
            Loading interactive map...
        </div>
    )
});

export default function MapWrapper({ neighbournets }: { neighbournets: any[] }) {
    return <DynamicMap neighbournets={neighbournets} />;
}