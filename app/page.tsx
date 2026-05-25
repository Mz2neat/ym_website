// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import { MoveRight, Users } from "lucide-react";

export default function Home(){
  return (
    //Main Top Part
    <main className="relative min-h-screen overflow-y-auto no-scrollbar">
      <div className="relative z-15">
      <h1 className="text-[#2683EB] ml-32 mt-16 text-xl">WELCOME TO YOUNG MUSLIMS</h1>
      <h1 className="text-white ml-32 mt-5 text-8xl max-w-4xl font-bold">Empowering Young Muslims. Inspiring Tomorrow.</h1>
      <h1 className="ml-32 mt-10 text-xl font-medium">A community for growth, knowledge, and positive change.</h1>
      <h1 className="ml-32 text-xl font-medium">Join us in building a stronger Ummah</h1>
      </div>
      {/*Gradient Image in Background*/}
      <div className="absolute top-0 right-0 w-[1300px] h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_5%,#0B0F14_70%)] z-10">
      </div>
      <Image className="object-cover scale-130" src="/images/IslamicArchitecture.png" fill alt="Islamic Architecture Design"/>
      </div>
      
      {/*Buttons*/}

      <Link href="/join" className="relative z-15">
      <button className="rounded-lg bg-blue-800 mt-10 ml-32 font-medium px-10 py-6 hover:bg-white hover:text-black text-3xl">
      Join our Community
      <Users className="w-10 h-10 inline-flex ml-4"/>
      </button>
      </Link>
      <Link href="/activities" className="relative z-15">
      <button className="border border-[#2683EB] rounded-lg mt-10 ml-6 font-medium px-10 py-6 hover:bg-white hover:text-black text-3xl">
      Explore Activities
      <MoveRight className="w-10 h-10 inline-flex ml-4"/>
      </button>
      </Link>

      {/*Mission Statement and Vision Statement*/}


      <div className="bg-black border border-3 border-[#2683EB] mt-32 mx-auto bg-blue relative z-15 h-40 w-[85%] max-w-9xl rounded-xl mb-32 flex">
        <div className="mx-auto">
          <div className="text-[#2683EB] ml-16 mt-5 text-xl font-medium">
          Our Vision
          </div>
          <div className="ml-16 max-w-128 text-xl font-medium">
          Canadian Muslim youth collectively contributing to the betterment of society with God-consciousness and a firm understanding of their Muslim identity.
          </div>
          </div>
          <div className="mx-auto">
          <div className="text-[#2683EB] ml-16 mt-5 text-xl font-medium">
          Our Mission
          </div>
          <div className="ml-16 max-w-128 text-xl font-medium">
          Mentoring Muslim youth through companionship, education, and service, Young Muslims seek the pleasure of Allah (SWT).
          </div>
          </div>
      </div>
      
    </main>
    
  );
}