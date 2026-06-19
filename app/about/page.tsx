
import Image from "next/image";
import Activities from "@/components/Activities-about";
export default function about() {
  return (
    // CHANGE 1: <div> → <main> and added bg-[#05070B]
    // Why: layout.tsx has nav + footer but no <main>, so this is the right place
    // for it. One <main> per page is the HTML rule. bg added so the page has
    // a consistent dark background behind all sections.
    <main className="min-h-screen bg-[#000010]">

      {/* CHANGE 2: removed "absolute" from this section (was "absolute relative h-screen overflow-hidden")
          Why: "absolute" pulls the element out of normal document flow, so the
          halaqah section below had nothing to push against and overlapped the hero.
          "relative" alone is correct — it keeps the section in flow while still
          acting as the positioning parent for the fill Image inside it.
          h-screen → min-h-screen so content is never clipped on smaller screens. */}
      <section className="relative min-h-screen">
        <Image
          src="/images/lexuslfa1.jpg"
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
    What is the mission and vision of YM?
  </h1>

  <div className="mx-auto mt-90 flex max-w-[85%] flex-col gap-8 md:flex-row text-center">
    {/* Mission card */}
    <div className="md:w-1/2 relative overflow-hidden rounded-xl border border-[#2683EB]/30 bg-black p-20">
      <Image
        src="/images/3.png"
        alt="compass"
        fill
        className="object-contain opacity-5 brightness-0 invert"
      />
      <h2 className="relative z-10 text-2xl font-bold text-[#2683EB]">
        Mission Statement
      </h2>
      <p className="relative z-10 mt-4 text-lg leading-8 text-gray-300 max-w-[70%] mx-auto">
        Young Muslims seek to mentor Muslim youth through companionship, education, and service,
        while nurturing their Islamic identity, leadership, and commitment to the pleasure of Allah (SWT).
      </p>
    </div>

    {/* Vision card */}
    <div className="md:w-1/2 relative overflow-hidden rounded-xl border border-[#2683EB]/30 bg-black p-20">
      <Image
        src="/images/2.png"
        alt="compass"
        fill
        className="object-contain opacity-5 brightness-0 invert"
      />
      <h2 className="relative z-10 text-2xl font-bold text-[#2683EB]">
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
           */}
      <section className="relative z-10 px-8 pt-16 pb-24">

        <div className="mx-auto mt-8 mb-50 flex max-w-[95%] flex-col gap-8 md:flex-row text-center">
          {/* LEFT SIDE: stacked text boxes */}
          <div className="flex flex-col gap-8 md:w-1/3">
  <div className="relative overflow-hidden rounded-xl border border-1 border-[#2683EB] bg-black p-6">
    <h2 className="mx-auto text-lg font-bold text-[#2683EB] mt-4">
      What is YM a Halaqah
    </h2>
    <p className="mt-8 text-md leading-8 text-gray-300">
      YM Halaqas are a space to chill, play, connect, and grow. Whether you come for the game, the people, or just to see what it's about, you'll find a community where Islam feels real, relevant, and connected to everyday life. Through activities, conversations, and brotherhood, YM helps you build friendships, strengthen your faith, and find a place where you truly belong.
    </p>
  </div>
  <div className="relative overflow-hidden rounded-xl border border-1 border-[#2683EB] bg-black p-6">
    <h2 className="mt-4 mx-auto text-lg font-bold text-[#2683EB] text-center">
      What does a YM Halaqah Include?
    </h2>
    <p className="mt-8 text-md leading-8 text-gray-300 mx-auto text-center mb-4">
      Every YM gathering begins with a relatable Islamic reminder, a short, interactive talk led by a YM member or guest speaker, followed by an engaging activity like basketball, soccer, or gaming. It's about learning the Deen while building brotherhood in a space where you truly belong.
    </p>
  </div>
</div>

          {/*<div className="relative w-full aspect-[16/9] md:w-2/3">
            <Image
              src="/images/TheMangoMan.jpeg"
              alt="YMactivity"
              fill
              className="object-contain rounded-lg brightness-75"
            />
          </div>*/}
          <div className="relative w-full aspect-[16/9] md:w-2/3">
            <Image
              src="/images/canoe.jpg"
              alt="YMactivity"
              fill
              className="object-contain rounded-lg brightness-75"
            />
          </div>
        </div>

        <div>
          <div className="text-center">
  <div className="mx-auto mb-4 h-1 w-300 rounded-full bg-[#2683EB]" />
  <h2 className="mt-14 text-3xl md:text-4xl font-extrabold text-white tracking-tight">
    The Three Core Aspects of YM
  </h2>
</div>
          <p className="mt-2 text-md leading-8 text-gray-300 max-w-[60%] mx-auto text-center"></p>
        </div>

        <div className="mx-auto mt-10 flex max-w-[100%] flex-col gap-8 md:flex-row text-center border border-3 border-[#2683EB] rounded-xl p-6 bg-black">
  <div className="md:w-1/3 md:border-r border-[#2683EB]/30 md:pr-8">
    <h2 className="text-2xl font-bold text-white">Sports/Activities</h2>
    <p className="mt-4 text-lg leading-8 text-gray-300 max-w-[70%] mx-auto">
      Sports and activities are a major part of every YM halaqah. They give brothers a chance to have fun, build friendships, and feel welcomed, while staying connected to an environment that reminds them of their deen.
    </p>
  </div>
  <div className="md:w-1/3 md:border-r border-[#2683EB]/30 md:px-8 border-t md:border-t-0 pt-8 md:pt-0">
    <h2 className="text-2xl font-bold text-white">Khaterah</h2>
    <p className="mt-7 text-lg leading-8 text-gray-300">
      The khaterah is a short but meaningful Islamic reminder shared during the halaqah. It gives everyone a chance to reflect, learn, and take away a practical message they can apply in their daily lives.
    </p>
  </div>
  <div className="md:w-1/3 md:pl-8 border-t md:border-t-0 border-[#2683EB]/30 pt-8 md:pt-0">
    <h2 className="text-2xl font-bold text-white">NeighborNet</h2>
    <p className="mt-4 text-lg leading-8 text-gray-300">
      NeighborNet is the basic functioning unit of YM, where local halaqahs take place. It creates a consistent space for youth to gather, connect, learn, and grow together through brotherhood, reminders, and shared activities.
    </p>
  </div>
</div>

        
<div className="mx-auto mt-16 max-w-[90%]">
        <Activities/>
      </div>

      </section>
      {/* ── END HALAQAH SECTION ── */}

    </main>
  );
}
