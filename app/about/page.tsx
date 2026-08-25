"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Activities from "@/components/Activities-about";
import { supabase } from "@/lib/supabase/public";

export default function about() {
  const [locked, setLocked] = useState(false);
  const [leads, setLeads] = useState<any[]>([]);

  // Fetches the Shura members from Supabase on page load
  useEffect(() => {
    const fetchLeads = async () => {
      const { data, error } = await supabase
        .from('shura_members')
        .select('*')
        .order('created_at', { ascending: true }); 

      if (data) {
        setLeads(data);
      } else if (error) {
        console.error("Error fetching Shura members:", error);
      }
    };
    fetchLeads();
  }, []);

  function lockScrollUntilRevealed() {
    if (locked) return;
    setLocked(true);
    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";
    setTimeout(() => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }, 1300);
  }

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
          <h1 className="whitespace-nowrap px-4 text-[clamp(1.1rem,5.2vw,4.5rem)] text-center text-white tracking-tight font-bold font-Josefin mt-6 lg:mt-20 mb-10 mx-auto">
  {"YM is not just another youth group".split(" ").map((word, index) => (
    <motion.span
      key={index}
      className="inline-block mr-[0.25em]"
      initial={{ opacity: 0, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ delay: 0.08, duration: 1, ease: "easeOut" }}
    >
      {word}
    </motion.span>
  ))}
</h1>
          <motion.h1
            onViewportEnter={lockScrollUntilRevealed}
            className="px-4 text-[clamp(1rem,3.2vw,2.25rem)] text-center text-white font-semibold mt-10 lg:mt-120 mb-16 lg:mb-48 max-w-[95%] lg:max-w-[85%] mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.05 } },
            }}
          >
            {"YM is a community where meaningful experiences, friendships, and faith naturally connect".split(" ").map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-[0.25em]"
                variants={{
                  hidden: { opacity: 0, filter: "blur(6px)" },
                  visible: { opacity: 1, filter: "blur(0px)", transition: { duration: 1, ease: "easeOut" } },
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        <section className="relative z-20 px-4 lg:px-8 py-10 lg:py-20">
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-semibold font-Josefin text-white mb-6 lg:mb-10 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            What is the mission and vision of YM?
          </motion.h1>

          <div className="mx-auto mt-12 lg:mt-16 flex max-w-[95%] lg:max-w-[85%] flex-col gap-8 md:flex-row text-center">
            <motion.div
              className="md:w-1/2 relative overflow-hidden bg-[#000010]/50 backdrop-blur-md border-[3px] border-[#2683EB] rounded-2xl p-8 lg:p-12"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
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
            </motion.div>

            <motion.div
              className="md:w-1/2 relative overflow-hidden bg-[#000010]/50 backdrop-blur-md border-[3px] border-[#2683EB] rounded-2xl p-8 lg:p-12"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            >
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
            </motion.div>
          </div>
        </section>
      </section>

      <section className="relative z-20 px-4 lg:px-8 pt-8 lg:pt-16 pb-12 lg:pb-24">

        <div className="mx-auto mt-4 lg:mt-8 mb-16 lg:mb-32 flex max-w-[100%] lg:max-w-[95%] flex-col gap-8 md:flex-row text-center">
          <motion.div
            className="flex flex-col gap-8 md:w-1/3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
          >
            <motion.div
              className="relative overflow-hidden bg-[#000010]/50 backdrop-blur-md border-[3px] border-[#2683EB] rounded-2xl p-6 lg:p-8"
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: "easeOut" } },
              }}
            >
              <h2 className="mx-auto text-lg lg:text-xl font-semibold text-[#2683EB]">
                What is YM a Halaqah
              </h2>
              <p className="mt-4 lg:mt-6 text-sm lg:text-base leading-6 lg:leading-8 text-white">
                YM Halaqas are a space to chill, play, connect, and grow. Whether you come for the game, the people, or just to see what it&apos;s about, you&apos;ll find a community where Islam feels real, relevant, and connected to everyday life. Through activities, conversations, and brotherhood, YM helps you build friendships, strengthen your faith, and find a place where you truly belong.
              </p>
            </motion.div>
            <motion.div
              className="relative overflow-hidden bg-[#000010]/50 backdrop-blur-md border-[3px] border-[#2683EB] rounded-2xl p-6 lg:p-8"
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: "easeOut" } },
              }}
            >
              <h2 className="mx-auto text-lg lg:text-xl font-semibold text-[#2683EB] text-center">
                What does a YM Halaqah Include?
              </h2>
              <p className="mt-4 lg:mt-6 text-sm lg:text-base leading-6 lg:leading-8 text-white mx-auto text-center">
                Every YM gathering begins with a relatable Islamic reminder, a short, interactive talk led by a YM member or guest speaker, followed by an engaging activity like basketball, soccer, or gaming. It&apos;s about learning the Deen while building brotherhood in a space where you truly belong.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative w-full aspect-[16/9] md:w-2/3 rounded-2xl border-[3px] border-[#2683EB] overflow-hidden"
            initial={{ opacity: 0, x: 60, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.15 }}
          >
            <Image
              src="/images/canoe.jpg"
              alt="YMactivity"
              fill
              className="object-cover brightness-75"
            />
          </motion.div>
        </div>

        <div>
          <div className="text-center">
            <motion.div
              className="mx-auto mb-6 h-1 w-48 lg:w-300 rounded-full bg-[#2683EB]"
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ originX: 0.5 }}
            />
            <motion.h2
              className="mt-8 lg:mt-14 text-3xl md:text-4xl lg:text-5xl font-semibold font-Josefin text-white tracking-tight px-4 lg:px-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            >
              The Three Core Aspects of YM
            </motion.h2>
          </div>
        </div>

        <motion.div
          className="mx-auto mt-8 lg:mt-12 flex max-w-[95%] lg:max-w-[100%] flex-col gap-8 md:flex-row text-center bg-[#000010]/50 backdrop-blur-md border-[3px] border-[#2683EB] rounded-2xl p-6 lg:p-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.div
            className="md:w-1/3 md:border-r border-[#2683EB]/30 md:pr-8"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
            }}
          >
            <h2 className="text-xl lg:text-2xl font-semibold text-[#2683EB]">Sports/Activities</h2>
            <p className="mt-2 lg:mt-4 text-base lg:text-lg leading-6 lg:leading-8 text-white max-w-full lg:max-w-[80%] mx-auto">
              Sports and activities are a major part of every YM halaqah. They give brothers a chance to have fun, build friendships, and feel welcomed, while staying connected to an environment that reminds them of their deen.
            </p>
          </motion.div>
          <motion.div
            className="md:w-1/3 md:border-r border-[#2683EB]/30 md:px-8 border-t md:border-t-0 pt-6 md:pt-0"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
            }}
          >
            <h2 className="text-xl lg:text-2xl font-semibold text-[#2683EB]">Khaterah</h2>
            <p className="mt-2 lg:mt-6 text-base lg:text-lg leading-6 lg:leading-8 text-white max-w-full lg:max-w-[80%] mx-auto">
              The khaterah is a short but meaningful Islamic reminder shared during the halaqah. It gives everyone a chance to reflect, learn, and take away a practical message they can apply in their daily lives.
            </p>
          </motion.div>
          <motion.div
            className="md:w-1/3 md:pl-8 border-t md:border-t-0 border-[#2683EB]/30 pt-6 md:pt-0"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
            }}
          >
            <h2 className="text-xl lg:text-2xl font-semibold text-[#2683EB]">NeighborNet</h2>
            <p className="mt-2 lg:mt-4 text-base lg:text-lg leading-6 lg:leading-8 text-white max-w-full lg:max-w-[80%] mx-auto">
              NeighborNet is the basic functioning unit of YM, where local halaqahs take place. It creates a consistent space for youth to gather, connect, learn, and grow together through brotherhood, reminders, and shared activities.
            </p>
          </motion.div>
        </motion.div>

        <div className="mx-auto mt-10 lg:mt-16 max-w-[95%] lg:max-w-[90%]">
          <Activities/>
        </div>

        {/* --- NEW LEADERSHIP SECTION --- */}
        <div className="mt-20 lg:mt-32">
            <div className="text-center">
                <motion.div
                  className="mx-auto mb-6 h-1 w-48 lg:w-300 rounded-full bg-[#2683EB]"
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  style={{ originX: 0.5 }}
                />
                <motion.h2
                  className="mt-8 lg:mt-14 text-3xl md:text-4xl lg:text-5xl font-semibold font-Josefin text-white tracking-tight px-4 lg:px-0"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                >
                  Meet Our Leadership
                </motion.h2>
                <motion.p
                  className="mt-4 text-gray-400 max-w-2xl mx-auto px-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  The dedicated Shura members driving the mission and vision of Young Muslims forward.
                </motion.p>
            </div>

            {/* Member Cards Grid */}
            <motion.div
                className="mx-auto mt-12 grid max-w-[95%] lg:max-w-[85%] gap-8 sm:grid-cols-2 lg:grid-cols-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
            >
                {leads.map((lead) => (
                    <motion.div
                        key={lead.id}
                        className="relative overflow-hidden bg-[#000010]/50 backdrop-blur-md border-[3px] border-[#2683EB] rounded-2xl p-6 lg:p-8 flex flex-col items-center text-center"
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                        }}
                    >
                        <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden border-2 border-[#2683EB] shrink-0">
                            <Image
                                src={`/images/${lead.image_name}`}
                                alt={lead.name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 128px, 128px"
                            />
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold text-white">{lead.name}</h3>
                        <p className="text-[#2683EB] font-semibold mt-1 mb-4 uppercase tracking-wider text-sm">{lead.position}</p>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            {lead.description}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </div>

      </section>
    </main>
  );
}