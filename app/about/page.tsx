"use client";

import Image from "next/image";
export default function about() {
  return (
    <main className="min-h-screen bg-[#000010]">
      <section className="relative min-h-screen">
        <Image
          src="/images/lexuslf4.jpg"
          alt="BackgroundImage"
          fill
          className="object-cover object-center opacity-20"
        />

      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative z-10">

      <h1 className="ml-16 pt-10 font-bold text-xl">
        What is Young Muslims
      </h1>
      <h1 className="text-4xl text-center tracking-tight font-extrabold mt-8 mb-1 max-w-2xl mx-auto">
      YM is not just another youth group 
      </h1>
      <h1 className="text-4xl text-center tracking-tight font-extrabold mt-20 max-w-[85%] mx-auto">
       YM is A community where meaningful experiences, friendships, and faith naturally connect.
         {/* We should have boild statemnt here that 
        extendt he length ofg th page  */} 
        </h1>
      </div>
      
      
      <section className= "px-8 py-20"> 
          <h1 className="text-3xl tracking-tight font-bold mt-45 mb-10 text-center">
            include something like what is the mission and vision of YM here. or What is YM about.
          </h1>
          
          <div className="mx-auto mt-8 flex max-w-[85%] flex-col gap-8 md:flex-row text-center"> {/*This code segment (lines 17-41) covers the text for the mission and vission statements The width is precentage to avoid scaling issues on other devices */}
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
           </section>
           </section>
           

{/*<section className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl tracking-tight font-bold mt-30 text-center">
            What We Do
          </h1>
          </section>*/} {/*this is the what we do text/headding*/}
        <section className="relative z-10 px-8 pt-16 pb-24">
          <div className="mx-auto mt-8 flex max-w-[95%] flex-col gap-8 md:flex-row text-center"> {/* box for what is ym a halaqah and image of logo or halaqah */}
               {/* LEFT SIDE: stacked text boxes */}
            <div className="flex flex-col gap-8 md:w-1/3">
              <div> 
              <h2 className=" mx-auto text-lg font-bold text-white mt-16"> {/* for halaqah heading*/}
                 What is YM a Halaqah
              </h2>

                <p className="mt-8 text-md leading-8 text-gray-300"> {/* */}
         YM Halaqas are a space to chill, play, connect, and grow. Whether you come for the game, the people, or just to see what it’s about, you’ll find a community where Islam feels real, relevant, and connected to everyday life. Through activities, conversations, and brotherhood, YM helps you build friendships, strengthen your faith, and find a place where you truly belong. 

              </p>
              </div> 
              <div>
              <h2 className=" mt-16 mx-auto text-lg font-bold text-white text-center"> {/* */}
                What does a YM Halaqah Include?
              </h2>
                <p className="mt-8 text-md leading-8 text-gray-300 mx-auto text-center"> {/* */}
         Every YM gathering begins with a relatable Islamic reminder, a short, interactive talk led by a YM member or guest speaker, followed by an engaging activity like basketball, soccer, or gaming. It’s about learning the Deen while building brotherhood in a space where you truly belong.
                </p>
           </div>
           </div>
           <div className=" w-full md:w-2/3">
            <Image
              src="/images/TheMangoMan.jpeg"
              alt="YMactivity"
              width={800}
              height={500}
              className="w-full h-auto object-cover rounded-lg brightness-50"
            /> 
            </div>
          </div>


            <div>
            <h2 className=" mt-10 mx-auto text-2xl font-bold text-white max-w-[60%] text-center leading-10"> {/* */}
                The 3 majour aspects of a YM Halaqah?
              </h2>
                <p className="mt-2 text-md leading-8 text-gray-300 max-w-[60%] mx-auto text-center"> {/* */}
                  </p>
           </div>

<div className="mx-auto mt-16 flex max-w-[100%] flex-col gap-8 md:flex-row text-center"> 
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

         Soemthing about including Islamic reminder or talk at the beginning of the halaqah
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
          </div>
       <div className="flex flex-col items-center text-center mt-16">
          <h1 className="max-w-3xl text-xl font-semibold leading-10 tracking-tight text-white "> 
           {/* This is the about page. The majour purpose is to diplsay the information about the organization and its mission. It will also include the history of the organization and its achievements. 
            South King king AGZ once said "Kill Fudail Syed" I think its important we remember his words and follow his advice.*/}

            
          </h1>
      </div>

      <div className="mx-auto mt-16 flex max-w-[95%] flex-col gap-8 md:flex-row text-center">
            <div className="md:w-1/3">
              <h2 className="text-2xl font-bold text-white">
                 Real Moments Real Impact
              </h2>
                <p className="mt-4 text-lg leading-8 text-gray-300 max-w-[70%] mx-auto">  
          something about halaqah ie sports etc being a space for real moments and real impact.
          </p>
            </div>
            
          </div>
          </section>
    
    </main>

  );
}