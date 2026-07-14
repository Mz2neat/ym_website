import {supabase} from "@/lib/supabase/public";
import ChapterCard from "@/components/ChapterCard";
import InteractiveMap from "@/components/InteractiveMap";

export const dynamic = "force-dynamic";

export default async function ourReach(){

  const { data: chapters, error } = await supabase
  .from('chapters')
  .select('*')

  if (error){
    console.error("Error Fetching Chapters:", error);
  return <div>Failed to load Chapters.</div>;
}
  return (

    <main className="min-h-screen mb-16 lg:mb-32 overflow-x-hidden">
      <div className="relative z-20 mt-8 lg:mt-16 text-center lg:text-left">
          <h1 className="text-[#2683EB] mx-4 lg:mx-0 lg:ml-32 text-lg lg:text-xl">Welcome to YM Chapters</h1>
          <h1 className="text-white mx-4 lg:mx-0 py-2 lg:py-4 text-3xl max-w-5xl md:text-4xl lg:text-5xl lg:ml-32 font-semibold font-Josefin">Our Reach</h1>
        </div>

      <div className="flex flex-col lg:flex-row justify-between items-start w-full px-4 lg:px-0 lg:pr-32 relative gap-12 lg:gap-0 mt-8 lg:mt-0">
      
      <div className="flex flex-col w-full lg:w-[60%]">
      {chapters?.map((chapter) =>(

        <ChapterCard key={chapter.chapter_id} chapter={chapter}/>

      ))}
      </div>

      <div className="w-full lg:w-[50%] relative lg:sticky lg:top-32 mt-2 lg:mt-16 z-10">
      <InteractiveMap/>
      </div>

      </div>

    </main>
  );
}