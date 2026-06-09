"use client";

import Image from "next/image";
export default function about() {
  return (
    <div className="min-h-screen font-sans"> {/*  can use bg-[#05070B] for actual color */}
      <main>
      <h1 className="ml-16 mt-10 font-bold">What is Young Muslims</h1>
      <h1 className="text-4xl text-center tracking-tight font-extrabold mt-20 mb-1 max-w-2xl mx-auto">
      YM is not just another youth group </h1>
      <h1 className="text-4xl text-center tracking-tight font-extrabold mt-5 max-w-2xl mx-auto">
       YM is A community where meaningful experiences, friendships, and faith naturally connect.
         {/* We should have boild statemnt here that 
        extendt he length ofg th page  */} </h1>
        <section className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl tracking-tight font-bold mt-30 text-center">
            include something like what is the mission and vision of YM here. or What is YM about.
          </h1>
          </section>
          <div className="mx-auto mt-16 flex max-w-[85%] flex-col gap-8 md:flex-row text-center"> {/*This code segment (lines 17-41) covers the text for the mission and vission statements The width is precentage to avoid scaling issues on other devices */}
            <div className="md:w-1/2 relative overflow-hidden rounded-xl border border-white/20 rounded-xl bg-white/5 p-6"> {/* makes text boxes 1/2 width of set width from above (99% of screen width)*/}
            <Image
              src="/images/3.png"
              alt="compass"
              fill
              className="object-contain opacity-5 brightness-0 invert"
            />
              <h2 className="relative z-10 text-2xl font-bold text-white"> {/* for missionsatament heading*/}
                 Mission Statement 
              </h2>
                <p className="mt-4 text-lg leading-8 text-gray-300 max-w-[70%] mx-auto"> {/* for mission statement text. max width is 70% of the 99% from above to avoid scaling issues on other devices and to avoid have the text going all the way to the edges*/}  

         Young Muslims seek to mentor Muslim youth through companionship, education, and service, 
         while nurturing their Islamic identity, leadership, and commitment to the pleasure of Allah (SWT). 

                </p>
           </div> 
            <div className="md:w-1/2 relative overflow-hidden rounded-xl border border-white/20 rounded-xl bg-white/5 p-6">
            <Image
              src="/images/2.png"
              alt="compass"
              fill
              className="object-contain opacity-5 brightness-0 invert"
            />
              <h2 className="relative z-10 text-2xl font-bold text-white">
                  Vision Statement
              </h2>
                <p className="mt-4 mb-2 text-lg leading-8 text-gray-300 max-w-[70%] mx-auto">

         Canadian Muslim youth collectively contributing to the betterment of society with God-consciousness and a firm understanding of their Muslim identity. 

                </p>
            </div>
         
          </div> 

{/*<section className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl tracking-tight font-bold mt-30 text-center">
            What We Do
          </h1>
          </section>*/} {/*this is the what we do text/headding*/}
        
          <div className="mt-8 mx-auto max-w-[90%] text-center"> {/* */}
              <h2 className=" mx-auto text-2xl font-bold text-white"> {/* for halaqah heading*/}
                 What is YM a Halaqah
              </h2>
                <p className="mt-4 text-lg leading-8 text-gray-300 max-w-[70%] mx-auto "> {/* */}
         YM Halaqas are a space to chill, play, connect, and grow. Whether you come for the game, the people, or just to see what it’s about, you’ll find a community where Islam feels real, relevant, and connected to everyday life. Through activities, conversations, and brotherhood, YM helps you build friendships, strengthen your faith, and find a place where you truly belong. 

                </p>
           </div> 
           <div className="mt-4 mx-auto max-w-[90%] text-center"> {/*what does ym a halqaah include */}
            <h2 className=" mt-10 mx-auto text-xl font-bold text-white"> {/* */}
                What does a YM Halaqah Include?
              </h2>
                <p className="mt-2 text-lg leading-8 text-gray-300 max-w-[50%] mx-auto"> {/* */}
         Every YM gathering begins with a relatable Islamic reminder, a short, interactive talk led by a YM member or guest speaker, followed by an engaging activity like basketball, soccer, or gaming. It’s about learning the Deen while building brotherhood in a space where you truly belong.
                </p>
           </div>
<div className="mx-auto mt-16 flex max-w-5xl flex-col gap-8 md:flex-row text-center"> 
            <div className="md:w-1/3">
              <h2 className="text-2xl font-bold text-white">
                 Sports/Activites 
              </h2>
                <p className="mt-4 text-lg leading-8 text-gray-300 max-w-[70%] mx-auto">

         something about gaming or ball 

                </p>
           </div> 
            <div className="md:w-1/3">
              <h2 className="text-2xl font-bold text-white">
                  Khaterah 
              </h2>
                <p className="mt-4 text-lg leading-8 text-gray-300">

         Soemthing about inclduign Islamic reminder or talk at the beginning of the halaqah
                </p>
            </div>
      
            <div className="md:w-1/3">
              <h2 className="text-2xl font-bold text-white">
                  NeighborNet
              </h2>
                <p className="mt-4 text-lg leading-8 text-gray-300">
                  Explain what a neighborNet is
                   </p>

    </div>
       <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
          <h1 className="max-w-3xl text-xl font-semibold leading-10 tracking-tight text-black "> {/*This is the about page. The majour purpose is to diplsay the information about the organization and its mission. It will also include the history of the organization and its achievements. 
            South King king AGZ once said "Kill Fudail Syed" I think its important we remember his words and follow his advice. */}

            
          </h1>
      </div>

      </div>
    </main>
</div>
  );
}