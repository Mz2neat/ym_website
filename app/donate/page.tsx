"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import CtaButton from "@/components/CtaButton";
import { fadeLeft, fadeRight } from "@/lib/motion";

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
        <main className="relative min-h-screen overflow-y-auto no-scrollbar flex items-center justify-center py-12 lg:py-0">
            
            <div className="flex flex-col lg:flex-row w-[90%] lg:w-[80%] max-w-7xl mx-auto gap-8 lg:gap-16 relative z-20">
                
                <motion.div 
                    className="w-full lg:w-[50%] flex flex-col justify-center text-center lg:text-left"
                    {...fadeLeft}
                >
                    <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-semibold font-Josefin mb-4 lg:mb-6">Support Our<br className="hidden lg:block"/>Vision</h1>
                    <p className="text-gray-400 text-base md:text-xl lg:text-2xl font-medium max-w-full lg:max-w-lg mx-auto lg:mx-0">
                        Donations help fund halaqahs, retreats, educational programs, and community initiatives that empower young Muslims to grow in faith, character, and leadership.
                    </p>
                </motion.div>

                <motion.div 
                    className="w-full lg:w-[50%] relative h-auto transform-gpu will-change-transform bg-[#1C1C28] rounded-2xl lg:rounded-3xl p-6 md:p-8 lg:p-10 flex flex-col"
                    {...fadeRight}
                >
                    <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 lg:mb-8 text-center lg:text-left">Make a Contribution</h2>
                    
                    <input 
                        type="text" 
                        value={amount}
                        onChange={handleInput}
                        className="w-full border border-gray-500 rounded-lg p-3 mb-4 bg-transparent text-white text-base lg:text-lg font-medium focus:outline-none focus:border-[#2683EB]"
                    />

                    <div className="flex w-full border border-gray-500 rounded-lg overflow-hidden mb-6 lg:mb-8">
                        <button 
                            onClick={() => handlePreset("25", "25.00")}
                            className={`flex-1 py-2 lg:py-3 text-sm lg:text-base font-medium transition-colors border-r border-gray-500 ${activePreset === "$25" ? "bg-gray-600 text-white" : "text-gray-400 hover:bg-gray-700/50"}`}
                        >25</button>
                        <button 
                            onClick={() => handlePreset("50", "50.00")}
                            className={`flex-1 py-2 lg:py-3 text-sm lg:text-base font-medium transition-colors border-r border-gray-500 ${activePreset === "$50" ? "bg-gray-600 text-white" : "text-gray-400 hover:bg-gray-700/50"}`}
                        >50</button>
                        <button 
                            onClick={() => handlePreset("75", "75.00")}
                            className={`flex-1 py-2 lg:py-3 text-sm lg:text-base font-medium transition-colors border-r border-gray-500 ${activePreset === "$75" ? "bg-gray-600 text-white" : "text-gray-400 hover:bg-gray-700/50"}`}
                        >75</button>
                        <button 
                            onClick={() => handlePreset("100", "100.00")}
                            className={`flex-1 py-2 lg:py-3 text-sm lg:text-base font-medium transition-colors border-r border-gray-500 ${activePreset === "$100" ? "bg-gray-600 text-white" : "text-gray-400 hover:bg-gray-700/50"}`}
                        >100</button>
                        <button 
                            onClick={() => handlePreset("Other", "")}
                            className={`flex-1 py-2 lg:py-3 text-sm lg:text-base font-medium transition-colors ${activePreset === "Other" ? "bg-gray-600 text-white" : "text-gray-400 hover:bg-gray-700/50"}`}
                        >Other</button>
                    </div>

                    <h3 className="text-white text-lg lg:text-xl font-semibold mb-4 lg:mb-6 text-center lg:text-left">Accepted Donation Methods</h3>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-1 gap-4">
                        <label className="flex items-center gap-2 lg:gap-4 cursor-pointer">
                            <div className="relative w-10 lg:w-11 bg-white h-6 lg:h-7 rounded flex items-center justify-center p-1">
                                <Image src="/images/visaLogo.png" fill alt="Visa" className="object-contain p-1" />
                            </div>
                            <span className="text-white font-bold text-sm lg:text-base">Visa</span>
                        </label>
                        
                        <label className="flex items-center gap-2 lg:gap-4 cursor-pointer">
                            <div className="relative w-8 lg:w-10 h-5 lg:h-6 flex items-center justify-center">
                                <Image src="/images/MastercardLogo.png" fill alt="Mastercard" className="object-contain" />
                            </div>
                            <span className="text-white font-bold text-sm lg:text-base">Mastercard</span>
                        </label>

                        <label className="flex items-center gap-2 lg:gap-4 cursor-pointer">
                            <div className="relative w-8 lg:w-10 h-5 lg:h-6 flex items-center justify-center">
                                <Image src="/images/paypal.png" fill alt="Paypal" className="object-contain" />
                            </div>
                            <span className="text-white font-bold text-sm lg:text-base">Paypal</span>
                        </label>

                        <label className="flex items-center gap-2 lg:gap-4 cursor-pointer">
                            <div className="relative w-10 lg:w-11 h-6 lg:h-7 bg-white rounded flex items-center justify-center">
                                <Image src="/images/ApplePayLogo.png" fill alt="Apple Pay" className="object-contain" />
                            </div>
                            <span className="text-white font-bold text-sm lg:text-base">Apple Pay</span>
                        </label>

                        <label className="flex items-center gap-2 lg:gap-4 cursor-pointer md:col-span-4 lg:col-span-1">
                            <div className="relative w-8 lg:w-10 h-5 lg:h-6 flex items-center justify-center">
                                <Image src="/images/GooglePayLogo.png" fill alt="Google Pay" className="object-contain" />
                            </div>
                            <span className="text-white font-bold text-sm lg:text-base">Google Pay</span>
                        </label>
                    </div>

                        <CtaButton onClick={handlePaymentPopup} variant="bar"
                        className="w-full mt-8 lg:mt-10 text-white rounded-lg py-3 lg:py-4 font-bold text-lg lg:text-xl shadow-[0_0_20px_rgba(38,131,235,0.4)] hover:shadow-none">
                            Continue to Secure Payment
                        </CtaButton>
                </motion.div>

            </div>

        </main>
    );
}