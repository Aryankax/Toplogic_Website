'use client';
import Image from "next/image";
import React from "react";

const ServicesCard = ({ ServiceName, ImgSrc, TitleSize}) => {
    return (
        <div className="bg-gradient-to-r from-green-800 via-green-700 to-green-900 md:w-[300px] md:h-[450px]  flex flex-col items-center justify-between m-5 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 hover:border-2 border-green-400 md:gap-2 w-[350px] h-[450px]">
            <div className="flex items-center justify-center bg-green-950 rounded-full md:w-32 md:h-32 w-32 h-32 shadow-inner">
                <Image
                    src={ImgSrc}
                    alt={ServiceName}
                    width={40}
                    height={undefined}
                    className="object-contain rounded-lg"
                />
            </div>
            <h1 className={`text-white font-extrabold font-lato text-${TitleSize} text-center uppercase`}>
                {ServiceName}
            </h1>
            <p className="text-white text-center font-poppins text-sm font-normal">
                Toplogic empowers your business to seize growth and innovation opportunities by crafting state-of-the-art web applications that set new benchmarks for market trends and unlock fresh possibilities for your online success.
            </p>
            <button className="text-gray-50 bg-gradient-to-r from-green-600 to-green-400 rounded-full w-32 p-2 mt-4 font-medium hover:from-green-500 hover:to-green-300 transition-colors">
                Learn More
            </button>
        </div>
    );
};

export default ServicesCard;
