
// ourReach/page.tsx

import {supabase} from "@/lib/supabase/public";
import ChapterCard from "@/components/ChapterCard";
import InteractiveMap from "@/components/InteractiveMap";

export default async function ourReach(){

  const { data: chapters, error } = await supabase
  .from('chapters')
  .select('*')

  if (error){
    console.error("Error Fetching Chapters:", error);
  return <div>Failed to load Chapters.</div>;
}
  return (

    <main className="min-h-screen mb-32">
      <div className="relative z-20 mt-4 md:mt-8 lg:mt-16">
          <h1 className="text-[#2683EB] ml-32 text-xl">Welcome to YM Chapters</h1>
          <h1 className="text-white ml-8 py-4 text-2xl max-w-5xl md:text-3xl md:ml-16 lg:text-5xl lg:ml-32 font-semibold font-Josefin">Our Reach</h1>
        </div>

      <div className="flex flex-row justify-between items-start w-full pr-32 relative">
      
      <div className="flex flex-col w-[60%]">
      {chapters?.map((chapter) =>(
        
        <ChapterCard key={chapter.id} chapter={chapter}/>

      ))}
      </div>

      <div className="w-[50%] sticky top-32 mt-16">
      <InteractiveMap/>
      </div>

      </div>

    </main>
  );
}