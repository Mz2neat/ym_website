import Image from "next/image";
import Activities from "@/components/Activities-about";

export default function about() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#000010] mb-16 lg:mb-32">

      <section className="relative min-h-screen">
        <Image
          src="/images/lexuslfa1.jpg"
          alt="BackgroundImage"
          fill
          className="object-cover object-center opacity-20"
        />

        <div className="absolute inset-0 bg-[#000010]/60 z-10" />

        <div className="relative z-20">
          <h1 className="text-center lg:text-left lg:ml-16 pt-10 font-medium text-[#2683EB] text-lg lg:text-xl">
            What is Young Muslims
          </h1>
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-center text-white tracking-tight font-semibold font-Josefin mt-6 lg:mt-8 mb-1 max-w-[90%] lg:max-w-2xl mx-auto">
            YM is not just another youth group
          </h1>
          <h1 className="text-base md:text-xl lg:text-2xl text-center text-white font-medium mt-10 lg:mt-12 max-w-[95%] lg:max-w-[85%] mx-auto">
            YM is A community where meaningful experiences, friendships, and faith naturally connect.
          </h1>
        </div>

        <section className="relative z-20 px-4 lg:px-8 py-10 lg:py-20">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-Josefin text-white mb-6 lg:mb-10 text-center">
            What is the mission and vision of YM?
          </h1>

          <div className="mx-auto mt-12 lg:mt-16 flex max-w-[95%] lg:max-w-[85%] flex-col gap-8 md:flex-row text-center">
            <div className="md:w-1/2 relative overflow-hidden bg-[#000010]/50 backdrop-blur-md border-[3px] border-[#2683EB] rounded-2xl p-8 lg:p-12">
              <Image
                src="/images/3.png"
                alt="compass"
                fill
                className="object-contain opacity-5 brightness-0 invert"
              />
              <h2 className="relative z-10 text-xl lg:text-2xl font-semibold text-[#2683EB]">
                Mission Statement
              </h2>
              <p className="relative z-10 mt-4 text-base lg:text-lg leading-7 lg:leading-8 text-white max-w-full lg:max-w-[80%] mx-auto">
                Young Muslims seek to mentor Muslim youth through companionship, education, and service,
                while nurturing their Islamic identity, leadership, and commitment to the pleasure of Allah (SWT).
              </p>
            </div>

            <div className="md:w-1/2 relative overflow-hidden bg-[#000010]/50 backdrop-blur-md border-[3px] border-[#2683EB] rounded-2xl p-8 lg:p-12">
              <Image
                src="/images/2.png"
                alt="compass"
                fill
                className="object-contain opacity-5 brightness-0 invert"
              />
              <h2 className="relative z-10 text-xl lg:text-2xl font-semibold text-[#2683EB]">
                Vision Statement
              </h2>
              <p className="relative z-10 mt-4 mb-2 text-base lg:text-lg leading-7 lg:leading-8 text-white max-w-full lg:max-w-[80%] mx-auto">
                Canadian Muslim youth collectively contributing to the betterment of society with
                God-consciousness and a firm understanding of their Muslim identity.
              </p>
            </div>
          </div>
        </section>
      </section>

      <section className="relative z-20 px-4 lg:px-8 pt-8 lg:pt-16 pb-12 lg:pb-24">

        <div className="mx-auto mt-4 lg:mt-8 mb-16 lg:mb-32 flex max-w-[100%] lg:max-w-[95%] flex-col gap-8 md:flex-row text-center">
          <div className="flex flex-col gap-8 md:w-1/3">
            <div className="relative overflow-hidden bg-[#000010]/50 backdrop-blur-md border-[3px] border-[#2683EB] rounded-2xl p-6 lg:p-8">
              <h2 className="mx-auto text-lg lg:text-xl font-semibold text-[#2683EB]">
                What is YM a Halaqah
              </h2>
              <p className="mt-4 lg:mt-6 text-sm lg:text-base leading-6 lg:leading-8 text-white">
                YM Halaqas are a space to chill, play, connect, and grow. Whether you come for the game, the people, or just to see what it&apos;s about, you&apos;ll find a community where Islam feels real, relevant, and connected to everyday life. Through activities, conversations, and brotherhood, YM helps you build friendships, strengthen your faith, and find a place where you truly belong.
              </p>
            </div>
            <div className="relative overflow-hidden bg-[#000010]/50 backdrop-blur-md border-[3px] border-[#2683EB] rounded-2xl p-6 lg:p-8">
              <h2 className="mx-auto text-lg lg:text-xl font-semibold text-[#2683EB] text-center">
                What does a YM Halaqah Include?
              </h2>
              <p className="mt-4 lg:mt-6 text-sm lg:text-base leading-6 lg:leading-8 text-white mx-auto text-center">
                Every YM gathering begins with a relatable Islamic reminder, a short, interactive talk led by a YM member or guest speaker, followed by an engaging activity like basketball, soccer, or gaming. It&apos;s about learning the Deen while building brotherhood in a space where you truly belong.
              </p>
            </div>
          </div>

          <div className="relative w-full aspect-[16/9] md:w-2/3 rounded-2xl border-[3px] border-[#2683EB] overflow-hidden">
            <Image
              src="/images/canoe.jpg"
              alt="YMactivity"
              fill
              className="object-cover brightness-75"
            />
          </div>
        </div>

        <div>
          <div className="text-center">
            <div className="mx-auto mb-6 h-1 w-48 lg:w-300 rounded-full bg-[#2683EB]" />
            <h2 className="mt-8 lg:mt-14 text-3xl md:text-4xl lg:text-5xl font-semibold font-Josefin text-white tracking-tight px-4 lg:px-0">
              The Three Core Aspects of YM
            </h2>
          </div>
        </div>

        <div className="mx-auto mt-8 lg:mt-12 flex max-w-[95%] lg:max-w-[100%] flex-col gap-8 md:flex-row text-center bg-[#000010]/50 backdrop-blur-md border-[3px] border-[#2683EB] rounded-2xl p-6 lg:p-10">
          <div className="md:w-1/3 md:border-r border-[#2683EB]/30 md:pr-8">
            <h2 className="text-xl lg:text-2xl font-semibold text-[#2683EB]">Sports/Activities</h2>
            <p className="mt-2 lg:mt-4 text-base lg:text-lg leading-6 lg:leading-8 text-white max-w-full lg:max-w-[80%] mx-auto">
              Sports and activities are a major part of every YM halaqah. They give brothers a chance to have fun, build friendships, and feel welcomed, while staying connected to an environment that reminds them of their deen.
            </p>
          </div>
          <div className="md:w-1/3 md:border-r border-[#2683EB]/30 md:px-8 border-t md:border-t-0 pt-6 md:pt-0">
            <h2 className="text-xl lg:text-2xl font-semibold text-[#2683EB]">Khaterah</h2>
            <p className="mt-2 lg:mt-6 text-base lg:text-lg leading-6 lg:leading-8 text-white max-w-full lg:max-w-[80%] mx-auto">
              The khaterah is a short but meaningful Islamic reminder shared during the halaqah. It gives everyone a chance to reflect, learn, and take away a practical message they can apply in their daily lives.
            </p>
          </div>
          <div className="md:w-1/3 md:pl-8 border-t md:border-t-0 border-[#2683EB]/30 pt-6 md:pt-0">
            <h2 className="text-xl lg:text-2xl font-semibold text-[#2683EB]">NeighborNet</h2>
            <p className="mt-2 lg:mt-4 text-base lg:text-lg leading-6 lg:leading-8 text-white max-w-full lg:max-w-[80%] mx-auto">
              NeighborNet is the basic functioning unit of YM, where local halaqahs take place. It creates a consistent space for youth to gather, connect, learn, and grow together through brotherhood, reminders, and shared activities.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-10 lg:mt-16 max-w-[95%] lg:max-w-[90%]">
          <Activities/>
        </div>

      </section>

    </main>
  );
}