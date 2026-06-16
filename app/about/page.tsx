"use client";

import Image from "next/image";
export default function about() {
  return (
    // CHANGE 1: <div> → <main> and added bg-[#05070B]
    // Why: layout.tsx has nav + footer but no <main>, so this is the right place
    // for it. One <main> per page is the HTML rule. bg added so the page has
    // a consistent dark background behind all sections.
    <main className="min-h-screen bg-[#05070B]">

      {/* CHANGE 2: removed "absolute" from this section (was "absolute relative h-screen overflow-hidden")
          Why: "absolute" pulls the element out of normal document flow, so the
          halaqah section below had nothing to push against and overlapped the hero.
          "relative" alone is correct — it keeps the section in flow while still
          acting as the positioning parent for the fill Image inside it.
          h-screen → min-h-screen so content is never clipped on smaller screens. */}
      <section className="relative min-h-screen">
        <Image
          src="/images/lexuslf4.jpg"
          alt="BackgroundImage"
          fill
          className="object-cover object-center opacity-20"
        />

        <div className="absolute inset-0 bg-black/50" />

        {/* CHANGE 3: inner <main> → <div>
            Why: you can only have one <main> per page. This was just wrapping
            the hero headings so a plain <div> is correct here. Kept relative z-10
            so headings sit above the absolute-positioned background layers. */}
        <div className="relative z-10">
          <h1 className="ml-16 pt-10 font-bold text-xl">
            What is Young Muslims
          </h1>
          <h1 className="text-4xl text-center tracking-tight font-extrabold mt-8 mb-1 max-w-2xl mx-auto">
            YM is not just another youth group
          </h1>
          <h1 className="text-4xl text-center tracking-tight font-extrabold mt-20 max-w-[85%] mx-auto">
            YM is A community where meaningful experiences, friendships, and faith naturally connect.
          </h1>
        </div>

        {/* Mission & Vision — kept inside the hero so they share the background image */}
        <section className="relative z-10 px-8 py-20">
          <h1 className="text-3xl tracking-tight font-bold mb-10 text-center">
            include something like what is the mission and vision of YM here. or What is YM about.
          </h1>

          <div className="mx-auto mt-8 flex max-w-[85%] flex-col gap-8 md:flex-row text-center">
            <div className="md:w-1/2 relative overflow-hidden rounded-xl border border-white/20 bg-white/5 p-6">
              <Image
                src="/images/3.png"
                alt="compass"
                fill
                className="object-contain opacity-5 brightness-0 invert"
              />
              <h2 className="relative z-10 text-2xl font-bold text-white">
                Mission Statement
              </h2>
              <p className="relative z-10 mt-4 text-lg leading-8 text-gray-300 max-w-[70%] mx-auto">
                Young Muslims seek to mentor Muslim youth through companionship, education, and service,
                while nurturing their Islamic identity, leadership, and commitment to the pleasure of Allah (SWT).
              </p>
            </div>

            <div className="md:w-1/2 relative overflow-hidden rounded-xl border border-white/20 bg-white/5 p-6">
              <Image
                src="/images/2.png"
                alt="compass"
                fill
                className="object-contain opacity-5 brightness-0 invert"
              />
              <h2 className="relative z-10 text-2xl font-bold text-white">
                Vision Statement
              </h2>
              <p className="relative z-10 mt-4 mb-2 text-lg leading-8 text-gray-300 max-w-[70%] mx-auto">
                Canadian Muslim youth collectively contributing to the betterment of society with
                God-consciousness and a firm understanding of their Muslim identity.
              </p>
            </div>
          </div>
        </section>
      </section>
      {/* ── END HERO SECTION ── */}


      {/* CHANGE 4: <main> → <section className="relative z-10 px-8 pt-16 pb-24">
          Why: you can't have a second <main>. This is a distinct content section
          so <section> is the right element. "relative z-10" gives it its own
          stacking context so it always renders on top of the hero's absolute
          background layers — this is what fixes the overlap. */}
      <section className="relative z-10 px-8 pt-16 pb-24">

        <div className="mx-auto mt-8 flex max-w-[95%] flex-col gap-8 md:flex-row text-center">
          {/* LEFT SIDE: stacked text boxes */}
          <div className="flex flex-col gap-8 md:w-1/3">
            <div>
              <h2 className="mx-auto text-lg font-bold text-white mt-16">
                What is YM a Halaqah
              </h2>
              <p className="mt-8 text-md leading-8 text-gray-300">
                YM Halaqas are a space to chill, play, connect, and grow. Whether you come for the game, the people, or just to see what it's about, you'll find a community where Islam feels real, relevant, and connected to everyday life. Through activities, conversations, and brotherhood, YM helps you build friendships, strengthen your faith, and find a place where you truly belong.
              </p>
            </div>
            <div>
              <h2 className="mt-16 mx-auto text-lg font-bold text-white text-center">
                What does a YM Halaqah Include?
              </h2>
              <p className="mt-8 text-md leading-8 text-gray-300 mx-auto text-center">
                Every YM gathering begins with a relatable Islamic reminder, a short, interactive talk led by a YM member or guest speaker, followed by an engaging activity like basketball, soccer, or gaming. It's about learning the Deen while building brotherhood in a space where you truly belong.
              </p>
            </div>
          </div>

          <div className="relative w-full aspect-[16/9] md:w-2/3">
            <Image
              src="/images/TheMangoMan.jpeg"
              alt="YMactivity"
              fill
              className="object-contain rounded-lg brightness-65"
            />
          </div>
        </div>

        <div>
          <h2 className="mt-10 mx-auto text-2xl font-bold text-white max-w-[60%] text-center leading-10">
            The 3 majour aspects of a YM Halaqah?
          </h2>
          <p className="mt-2 text-md leading-8 text-gray-300 max-w-[60%] mx-auto text-center"></p>
        </div>

        <div className="mx-auto mt-16 flex max-w-[100%] flex-col gap-8 md:flex-row text-center">
          <div className="md:w-1/3">
            <h2 className="text-2xl font-bold text-white">Sports/Activites</h2>
            <p className="mt-4 text-lg leading-8 text-gray-300 max-w-[70%] mx-auto">
              something about gaming or ball
            </p>
          </div>
          <div className="md:w-1/3">
            <h2 className="text-2xl font-bold text-white">Khaterah</h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Soemthing about including Islamic reminder or talk at the beginning of the halaqah
            </p>
          </div>
          <div className="md:w-1/3">
            <h2 className="text-2xl font-bold text-white">NeighborNet</h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Explain what a neighborNet is
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center text-center mt-16">
          <h1 className="max-w-3xl text-xl font-semibold leading-10 tracking-tight text-white"></h1>
        </div>

        <div className="mx-auto mt-16 flex max-w-[95%] flex-col gap-8 md:flex-row text-center">
          <div className="md:w-1/3">
            <h2 className="text-2xl font-bold text-white">Real Moments Real Impact</h2>
            <p className="mt-4 text-lg leading-8 text-gray-300 max-w-[70%] mx-auto">
              something about halaqah ie sports etc being a space for real moments and real impact.
            </p>
          </div>
        </div>

      </section>
      {/* ── END HALAQAH SECTION ── */}

    </main>
  );
}
