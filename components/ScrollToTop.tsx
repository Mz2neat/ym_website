"use client";

import { useLayoutEffect, useEffect } from "react";

// This safely tells Next.js to run this before the screen paints without throwing server warnings
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function ScrollToTop() {
    useIsomorphicLayoutEffect(() => {
        // 1. Tells the browser to stop trying to force its own scroll memory
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }
        
        // 2. Snaps to the absolute top BEFORE the page becomes visible
        window.scrollTo({ top: 0, behavior: "instant" });
    }, []);
    
    return null;
}