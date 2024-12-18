'use client';
import Image from "next/image";
import React from "react";

import { useRouter } from "next/navigation";

const IndustryDiv = ({imageSrc, Name, Description, linkName}) => {
    const router = useRouter();
    return(
        <>
                <div className="flex-none w-[200px] h-[350px] bg-white rounded-lg transition-transform hover:scale-100 z-10 hover:shadow-lg hover:shadow-green-700 mt-1 overflow-y-hidden hover:cursor-pointer" onClick={() => router.push(`industries/${linkName}`)}>
                <img
                src={imageSrc} 
                alt="Industry"
                className="w-[200px] h-[350px] rounded-lg opacity-90 z-0"
                />
                <h1 className="relative uppercase font-Poppins text-xl font-bold text-white z-10 -top-48 text-center">{Name}</h1>
                <div className="bg-gray-800 w-[200px] h-[352px] opacity-50 relative md:-top-[379px] rounded-lg hover:opacity-0 transition-all duration-500 -top-[379px] hover:scale-100">
                </div>
            </div>
        </>
    );
};

export default IndustryDiv;
