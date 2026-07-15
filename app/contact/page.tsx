"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, User, Search} from "lucide-react";
import { useState, useEffect, Suspense } from "react";
import CtaButton from "@/components/CtaButton";
import { fadeUp } from "@/lib/motion";
import { supabase } from "@/lib/supabase/public";
import { useSearchParams } from "next/navigation";

function ContactFormContent(){

    const searchParams = useSearchParams();

    const urlChapterName = searchParams.keys().next().value;

    const [result, setResult] = useState("Submit");
    const [chapters, setChapters] = useState<any[]>([]);

    const [selectedKey, setSelectedKey] = useState("35944dc-5376-4a7f-a344-e49bdbc5b9ec");

    useEffect(() => {
        const fetchChapters = async () => {
            const {data, error} = await supabase.from('chapters').select('*');
            if (data){
                setChapters(data);
                const matchedChapter = data.find((chapter) => (
                                chapter.chapter_name.toLowerCase() === (urlChapterName?.toLowerCase())

                            ))
                            if (matchedChapter)
                            {
                            setSelectedKey(matchedChapter.contact_access_id);
                            }
            }
            else if (error){
                console.error("Error fethching chapters:", error);
            }
        };
        fetchChapters();
    }, [urlChapterName]);


    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setResult("Sending...");

        const formData = new FormData(event.currentTarget);

        formData.append("access_key", selectedKey);

        const response = await fetch("https://api.web3forms.com/submit", {
            method:"POST",
            body: formData

        });
        
        const data = await response.json();

        if (data.success)
        {
            setResult("Form Submitted Successfully");
            event.currentTarget.reset();

        }
        else
        {
            console.log("Error", data);
            setResult(data.message);
        }

    };


    return(
        <main className="relative min-h-screen mb-16 lg:mb-32 overflow-x-hidden">
        
        <div className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] w-full flex items-center justify-center lg:justify-start mb-12 lg:mb-16">
            <div className="absolute inset-0 bg-black/40 lg:bg-transparent lg:bg-[linear-gradient(to_right,#000010_20%,transparent_100%)] z-10"></div>
            <Image className="object-cover object-center absolute inset-0" src="/images/ContactPageHero.jpg" fill alt="Contact Background"/>
            
            <div className="relative z-20 mx-6 lg:mx-0 lg:ml-32 text-center lg:text-left">
                <h1 className="text-white text-3xl md:text-5xl lg:text-7xl font-semibold font-Josefin leading-tight">Have a Question?<br className="hidden md:block"/>Want to Get Involved?</h1>
            </div>
        </div>

        <div className="flex flex-col lg:flex-row w-full px-6 md:px-16 lg:px-0 lg:pl-32 lg:pr-20 gap-12 lg:gap-10 xl:gap-16 relative z-20 justify-between items-center lg:items-start">
            
            <motion.div 
                className="w-full md:w-[70%] lg:w-[20%] flex flex-col items-center lg:items-start text-center lg:text-left"
                {...fadeUp}
            >
                <h1 className="text-white text-xl lg:text-2xl font-bold mb-4 lg:mb-6">FIND YOUR LOCAL<br/>NEIGHBOURNET</h1>
                <Link href="/findYourNeighbourNet" className="w-full">
                    <CtaButton variant="solid" className="text-white rounded-xl text-lg lg:text-xl px-4 lg:px-6 py-3 lg:py-4 w-full flex items-center justify-between">
                        <span>Find your NeighbourNet</span>
                        <Search/>
                    </CtaButton>
                </Link>
            </motion.div>

            <motion.div 
                className="w-full md:w-[80%] lg:w-[38%] flex flex-col"
                {...fadeUp}
            >
                <form onSubmit={onSubmit} className="w-full border border-[#2683EB] rounded-2xl p-5 lg:p-6 flex flex-col gap-4 bg-[#000010]/40 backdrop-blur-sm">
                    <p className="text-gray-400 text-sm mb-2">Who do you want to contact?</p>
                    
                    <select
                    value={selectedKey}
                    onChange={(e) => setSelectedKey(e.target.value)}
                    className="bg-[#000010]/80 border border-[#2683EB] rounded-lg p-3 text-white focus:outline-none focus:ring-1 focus:ring-[#2683EB] mb-2 appearance-none cursor-pointer">
                    
                    <option value="335944dc-5376-4a7f-a344-e49bdbc5b9ec" className="bg-[#000010]">
                            YM National (General Inquiry)
                        </option>

                        {chapters.map((chapter) => (
                            chapter.contact_access_id && (
                                <option key = {chapter.chapter_name} value={chapter.contact_access_id} className="bg-[#000010]">
                                    YM {chapter.chapter_name}
                                    </option>
                            )
                        ))}
                        </select>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input 
                            type="text" 
                            name="name"
                            required
                            placeholder="Name" 
                            className="bg-transparent border border-[#2683EB] rounded-lg p-3 text-white focus:outline-none focus:ring-1 focus:ring-[#2683EB] placeholder:text-gray-500" 
                        />
                        <input 
                            type="email" 
                            name="email"
                            required
                            placeholder="Email" 
                            className="bg-transparent border border-[#2683EB] rounded-lg p-3 text-white focus:outline-none focus:ring-1 focus:ring-[#2683EB] placeholder:text-gray-500" 
                        />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input 
                            type="text" 
                            name="City"
                            required
                            placeholder="City" 
                            className="bg-transparent border border-[#2683EB] rounded-lg p-3 text-white focus:outline-none focus:ring-1 focus:ring-[#2683EB] placeholder:text-gray-500" 
                        />
                        <input 
                            type="text" 
                            placeholder="Postal Code" 
                            className="bg-transparent border border-[#2683EB] rounded-lg p-3 text-white focus:outline-none focus:ring-1 focus:ring-[#2683EB] placeholder:text-gray-500" 
                        />
                    </div>
                    
                    <textarea
                        name="Message"
                        required
                        placeholder="Message" 
                        rows={5} 
                        className="bg-transparent border border-[#2683EB] rounded-lg p-3 text-white focus:outline-none focus:ring-1 focus:ring-[#2683EB] resize-none placeholder:text-gray-500"
                    ></textarea>
                    
                    <CtaButton
                        type="submit"
                        variant="bar"
                        className="w-full text-white rounded-lg py-3 text-lg mt-2"
                    >
                        {result}
                    </CtaButton>
                </form>
            </motion.div>

            <motion.div 
                className="w-full md:w-[80%] lg:w-[38%] flex flex-col text-center lg:text-left"
                {...fadeUp}
            >
                <h1 className="text-white text-lg lg:text-xl font-bold mb-4 lg:mb-6 uppercase">General Young Muslims<br/>Contact Information</h1>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">

                    <div className="border border-[#2683EB] rounded-xl p-4 flex gap-3 items-center sm:items-start lg:items-start justify-center sm:justify-start text-left bg-[#000010]/40 backdrop-blur-sm">
                        <Mail className="text-[#2683EB] w-5 h-5 shrink-0 mt-0 sm:mt-1" />
                        <div className="flex flex-col">
                            <span className="text-white font-bold text-sm mb-1">Main Email</span>
                            <span className="text-white text-xs">ym.national@Icna.ca</span>
                        </div>
                    </div>

                    <div className="border border-[#2683EB] rounded-xl p-4 flex gap-3 items-center sm:items-start lg:items-start justify-center sm:justify-start text-left bg-[#000010]/40 backdrop-blur-sm">
                        <User className="text-[#2683EB] w-5 h-5 shrink-0 mt-0 sm:mt-1" />
                        <div className="flex flex-col">
                            <span className="text-white font-bold text-sm mb-1">Lead Contact</span>
                            <span className="text-white text-xs">Brother Owais Aziz</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>

        </main>
    );
}

    export default function ContactPage() {
        return(
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-white">Loading contact form...</div>}>
            <ContactFormContent />
        </Suspense>
        )
    }