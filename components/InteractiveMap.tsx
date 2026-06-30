"use client";

import { motion } from "framer-motion";

export default function AnimatedMap() {
  return (
    <motion.div 
        className="overflow-hidden bg-[#000010]/50 backdrop-blur-md border-[3px] border-[#2683EB] rounded-2xl flex flex-col h-[60vh] w-full"
        initial={{opacity: 0, y:50}} 
        whileInView={{opacity: 1, y:0}} 
        transition={{duration:0.8}} 
        viewport={{once:true}}
      >
        <div className="bg-[#000010]">
        <h1 className="text-white text-center py-4 lg:text-4xl font-semibold w-full z-30 drop-shadow-lg">
          Find a Chapter
        </h1>
        </div>
        <div className="relative h-full w-full">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d185016.03907676053!2d-79.73604940730002!3d43.567295255854276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sICNA!5e0!3m2!1sen!2sca!4v1781878807522!5m2!1sen!2sca" 
          className="absolute top-0 left-0 w-full h-full border-0" 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        </div>
      </motion.div>
  )
}