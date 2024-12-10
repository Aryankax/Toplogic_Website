'use client';
import Image from "next/image";
import React from "react";

const ServicesCard = ({ ServiceName, ImgSrc }) => {
    return (
        <div className="bg-gradient-to-r from-green-800 via-green-700 to-green-900 md:w-[400px] md:h-[380px] w-[250p] flex flex-col items-center justify-between m-5 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 hover:border-2 border-green-400">
            <div className="flex items-center justify-center bg-green-950 rounded-full w-24 h-24 shadow-inner">
                <Image
                    src={ImgSrc}
                    alt={ServiceName}
                    width={50}
                    height={50}
                    className="object-contain"
                />
            </div>
            <h1 className="text-white font-extrabold font-lato text-2xl text-center uppercase mt-4">
                {ServiceName}
            </h1>
            <p className="text-white text-center font-poppins text-sm font-normal mt-3">
                Toplogic empowers your business to seize growth and innovation opportunities by crafting state-of-the-art web applications that set new benchmarks for market trends and unlock fresh possibilities for your online success.
            </p>
            <button className="text-gray-50 bg-gradient-to-r from-green-600 to-green-400 rounded-full w-32 p-2 mt-4 font-medium hover:from-green-500 hover:to-green-300 transition-colors">
                Learn More
            </button>
        </div>
    );
};

export default ServicesCard;
