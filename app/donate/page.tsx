"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function donate(){
    const [amount, setAmount] = useState("50.00");
    const [activePreset, setActivePreset] = useState("$50");

    const handlePreset = (preset: string, value: string) => {
        setActivePreset(preset);
        if (preset !== "Other") {
            setAmount(value);
        } else {
            setAmount("");
        }
    };

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(e.target.value);
        setActivePreset("Other");
    };
    const handlePaymentPopup = () => {
        const popupWidth = 600;
        const popupHeight = 800;

        const left = (window.innerWidth/2) - (popupWidth/2)
        const top = (window.innerHeight/2) - (popupHeight/2)

        const cleanAmount = amount.replace(/[^0-9.]/g, '');

        window.open(
            `https://www.zeffy.com/en-CA/donation-form/support-our-mission-194?amount=${cleanAmount}`,
            "ZeffyPayment",
            `width=${popupWidth},height=${popupHeight},top=${top},left=${left},scrollbars=yes,status=no,location=no,toolbar=no`
        )
    };

    return(
        <main className="relative min-h-screen overflow-y-auto no-scrollbar flex items-center justify-center">
            
            <div className="flex w-[80%] max-w-7xl mx-auto gap-16 relative z-20">
                
                <motion.div 
                    className="w-[50%] flex flex-col justify-center"
                    initial={{opacity: 0, x:-50}} 
                    whileInView={{opacity: 1, x:0}} 
                    transition={{duration:0.8}} 
                    viewport={{once:true}}
                >
                    <h1 className="text-white text-5xl md:text-7xl font-semibold font-Josefin mb-6">Support Our<br/>Vision</h1>
                    <p className="text-gray-400 text-xl md:text-2xl font-medium max-w-lg">
                        Donations help fund halaqahs, retreats, educational programs, and community initiatives that empower young Muslims to grow in faith, character, and leadership.
                    </p>
                </motion.div>

                <motion.div 
                    className="w-[50%] relative h-auto transform-gpu will-change-transform bg-[#1C1C28] rounded-3xl p-10 flex flex-col"
                    initial={{opacity: 0, x:50}} 
                    whileInView={{opacity: 1, x:0}} 
                    transition={{duration:0.8}} 
                    viewport={{once:true}}
                >
                    <h2 className="text-white text-4xl font-semibold mb-8">Make a Contribution</h2>
                    
                    <input 
                        type="text" 
                        value={amount}
                        onChange={handleInput}
                        className="w-full border border-gray-500 rounded-lg p-3 mb-4 bg-transparent text-white text-lg font-medium focus:outline-none focus:border-[#2683EB]"
                    />

                    <div className="flex w-full border border-gray-500 rounded-lg overflow-hidden mb-8">
                        <button 
                            onClick={() => handlePreset("25", "25.00")}
                            className={`flex-1 py-3 font-medium transition-colors border-r border-gray-500 ${activePreset === "$25" ? "bg-gray-600 text-white" : "text-gray-400 hover:bg-gray-700/50"}`}
                        >25</button>
                        <button 
                            onClick={() => handlePreset("50", "50.00")}
                            className={`flex-1 py-3 font-medium transition-colors border-r border-gray-500 ${activePreset === "$50" ? "bg-gray-600 text-white" : "text-gray-400 hover:bg-gray-700/50"}`}
                        >50</button>
                        <button 
                            onClick={() => handlePreset("75", "75.00")}
                            className={`flex-1 py-3 font-medium transition-colors border-r border-gray-500 ${activePreset === "$75" ? "bg-gray-600 text-white" : "text-gray-400 hover:bg-gray-700/50"}`}
                        >75</button>
                        <button 
                            onClick={() => handlePreset("100", "100.00")}
                            className={`flex-1 py-3 font-medium transition-colors border-r border-gray-500 ${activePreset === "$100" ? "bg-gray-600 text-white" : "text-gray-400 hover:bg-gray-700/50"}`}
                        >100</button>
                        <button 
                            onClick={() => handlePreset("Other", "")}
                            className={`flex-1 py-3 font-medium transition-colors ${activePreset === "Other" ? "bg-gray-600 text-white" : "text-gray-400 hover:bg-gray-700/50"}`}
                        >Other</button>
                    </div>

                    <h3 className="text-white text-xl font-semibold mb-6">Accepted Donation Methods</h3>

                    <div className="flex flex-col gap-4">
                        <label className="flex items-center gap-4 cursor-pointer">
                            <div className="relative w-11 bg-white h-7 rounded flex items-center justify-center p-1">
                                <Image src="/images/visaLogo.png" fill alt="Visa" className="object-contain p-1" />
                            </div>
                            <span className="text-white font-bold">Visa</span>
                        </label>
                        
                        <label className="flex items-center gap-4 cursor-pointer">
                            <div className="relative w-10 h-6 flex items-center justify-center">
                                <Image src="/images/MastercardLogo.png" fill alt="Mastercard" className="object-contain" />
                            </div>
                            <span className="text-white font-bold">Mastercard</span>
                        </label>

                        <label className="flex items-center gap-4 cursor-pointer">
                            <div className="relative w-10 h-6 flex items-center justify-center">
                                <Image src="/images/paypal.png" fill alt="Paypal" className="object-contain" />
                            </div>
                            <span className="text-white font-bold">Paypal</span>
                        </label>

                        <label className="flex items-center gap-4 cursor-pointer">
                            <div className="relative w-11 h-7 bg-white rounded flex items-center justify-center">
                                <Image src="/images/ApplePayLogo.png" fill alt="Apple Pay" className="object-contain" />
                            </div>
                            <span className="text-white font-bold">Apple Pay</span>
                        </label>

                        <label className="flex items-center gap-4 cursor-pointer">
                            <div className="relative w-10 h-6 flex items-center justify-center">
                                <Image src="/images/GooglePayLogo.png" fill alt="Google Pay" className="object-contain" />
                            </div>
                            <span className="text-white font-bold">Google Pay</span>
                        </label>
                    </div>

                        <button onClick={handlePaymentPopup}
                        className="w-full mt-10 bg-[#2683EB] text-white rounded-lg py-4 font-bold text-xl hover:bg-[#000010] border-2 border-transparent hover:border-[#2683EB] transition-all duration-300 shadow-[0_0_20px_rgba(38,131,235,0.4)] hover:shadow-none">
                            Continue to Secure Payment.
                        </button>
                </motion.div>

            </div>

        </main>
    );
}