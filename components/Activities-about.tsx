"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

/**
 * Activities carousel
 * -------------------
 * A horizontally-scrollable row of activity cards with a fixed info panel
 * on the left. Scroll using the on-screen arrows OR the keyboard arrow keys.
 *
 * To add / edit / reorder activities, just change the `activities` array
 * below — no need to touch the scroll logic.
 */

const activities = [
  { label: "Activities", src: "/images/BasketballCropped.jpg" },
  { label: "Brotherhood", src: "/images/TheMangoMan.jpeg" },
  { label: "Retreats", src: "/images/YMRetreat3.jpeg" },
  { label: "Community Service", src: "/images/Halaqah2.jpeg" },
  { label: "memorable times", src: "/images/fire.jpeg" },
  {label: "Bonding", src: "/images/Brotehrhood.jpg" },
  { label: "Retreats", src: "/images/YMRetreat3.jpeg" },
  { label: "Community Service", src: "/images/Halaqah2.jpeg" },
  { label: "memorable times", src: "/images/fire.jpeg" },
  {label: "Bonding", src: "/images/Brotehrhood.jpg" }
];

export default function Activities() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [focused, setFocused] = useState(false);

  const scrollByCard = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.6;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  // Arrow-key navigation. We only listen while the carousel is hovered or
  // focused — otherwise the arrow keys would hijack scrolling for the whole
  // page even when the user is reading something else. Hovering/tabbing in
  // "arms" the keys; leaving "disarms" them.
  useEffect(() => {
    if (!focused) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        scrollByCard("left");
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        scrollByCard("right");
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [focused]);

  return (
    <section className="bg-[#0a0f24] rounded-2xl p-8 md:p-12">
      <div className="flex flex-col gap-8 md:flex-row md:items-center">
        {/* Left info panel */}
        <div className="md:w-1/4 shrink-0 text-left">
          <p className="text-sm font-semibold tracking-widest text-[#2683EB] uppercase">
            Our Activities
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-white">
            Real Moments.
            <br />
            Real Impact.
          </h2>
          <p className="mt-4 text-sm leading-7 text-gray-300">
            From halaqahs and sports nights to retreats and community service,
            each space creates experiences that build faith, friendships, and leaders.
          </p>
          <button
            className="mt-6 rounded-lg border border-[#2683EB] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#2683EB]"
            onClick={() => (window.location.href = "/activities")}
          >
            Explore YM Activities
          </button>
        </div>

        {/* Scrollable image row */}
        <div
          className="relative md:w-3/4"
          tabIndex={0}
          onMouseEnter={() => setFocused(true)}
          onMouseLeave={() => setFocused(false)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        >
          {/* Left arrow */}
          <button
            onClick={() => scrollByCard("left")}
            aria-label="Scroll left"
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white backdrop-blur transition hover:bg-[#2683EB]"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Cards */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {activities.map((item) => (
              <div
                key={item.label}
                className="relative aspect-[3/4] w-40 shrink-0 overflow-hidden rounded-xl md:w-48"
              >
                <Image src={item.src} alt={item.label} fill className="object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                  <p className="text-sm font-semibold text-white">{item.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scrollByCard("right")}
            aria-label="Scroll right"
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white backdrop-blur transition hover:bg-[#2683EB]"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}