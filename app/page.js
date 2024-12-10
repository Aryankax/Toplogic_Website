'use client';
import React, { useState, useRef, useEffect } from "react";
import Navbar from "@/components/nav";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import CountUp from "react-countup";
import Image from "next/image";
import cloud from "../images/cloud.png"
import ai from "../images/ai_2.png";
import mobile from "../images/mobile.png";
import digital from "../images/digital_transformation.png";
import IndustryDiv from "@/components/industryDiv";
import automotive from "../images/automotive.jpg";
import { faL } from "@fortawesome/free-solid-svg-icons";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const [countBool, setCountBool] = useState(false);
    const [isClient, setIsClient] = useState(false);  // State to check if we're on the client side
    const statsRef = useRef(null);
    const industryRef = useRef(null);

    // Ensure we're on the client side before rendering CountUp
    useEffect(() => {
        setIsClient(true);  // Set to true only after the component is mounted on the client
    }, []);

    // GSAP animation
    useGSAP(() => {
        // Hero animation
        gsap.from('#Hero-Content', {
            opacity: 0,
            duration: 2,
        });

        // Stats section scroll trigger
        const trigger = ScrollTrigger.create({
            trigger: statsRef.current,
            start: "top center",
            onEnter: () => setCountBool(true),
            onLeaveBack: () => setCountBool(false),
        });

        gsap.to(industryRef.current, {
            x: "-1560px",
            scrollTrigger: {
                trigger: "#industries",
                scroller: "body",
                markers: false,
                start: "top 20%",
                end: "top -560%",
                scrub: 2,
                pin: true
            }
        })

        return () => {
            trigger.kill();
        };
    }, []);

    return (
        <>
            <div className="relative bg-black min-h-screen overflow-x-hidden">
                <div className="fixed top-0 left-0 right-0 z-50">
                    <Navbar />
                </div>

                {/* Video Background */}
                <video
                    className="hidden absolute w-screen h-[720px] md:h-[700px] z-10 md:object-cover md:block"
                    src="/Toplogic_Video.mp4"
                    autoPlay
                    loop
                    muted
                />

                {/* Dark Overlay */}
                <div className="absolute opacity-80 bg-gradient-to-r from-black via-green-950 to-green-800 w-full h-[1000px] md:z-20 md:bg-black md:opacity-70"></div>

                {/* Hero Section Content */}
                <section
                    className="Hero-section-content text-white relative w-screen h-screen z-20"
                    id="Hero-Content"
                >
                    <p className="font-Poppins font-bold text-green-500 absolute md:left-20 md:top-44 md:text-[100px] uppercase transition-colors duration-300 hover:text-green-300 top-44 text-[40px] text-center left-3">
                        Revolutionizing
                    </p>
                    <p className="font-Poppins font-bold text-green-500 relative md:left-20 md:top-[270px] md:text-[100px] uppercase transition-colors duration-300 hover:text-green-300 left-3 top-56 text-[40px]">
                        It Solutions.
                    </p>
                    <div className="md:w-[800px] h-full md:top-[250px] md:p-1 text-justify md:ml-[80px] md:mt-2 flex mt-60 ml-3 mr-2 relative">
                        <p className="font-Poppins text-[18px]">
                            Toplogic Softlabs is at the forefront of innovation, delivering cutting-edge IT solutions that are transforming industries. With a focus on excellence and sustainability, we provide tailor-made technology services designed to streamline operations, enhance efficiency, and drive growth. We are committed to revolutionizing the digital landscape, ensuring our clients stay ahead in the fast-paced world of technology.
                        </p>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="Facts-and-Figures" ref={statsRef}>
                    <div className="border-2 relative z-40 w-screen md:h-[450px] bg-gray-200 h-[820px]">
                        <h1 className="text-center md:text-[70px] font-Poppins font-extrabold uppercase relative md:top-4 top-3 text-[30px]">
                            Empowering Success
                        </h1>
                        <h1 className="text-center relative md:text-[30px] font-Poppins font-bold text-green-800 top-2">
                            Our Achievements in Numbers
                        </h1>

                        {/* Grid Layout for Stats Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:mt-12 px-8 md:px-8 md:max-w-7xl md:mx-auto relative top-8 md:top-10">
                            {/* Card 1 */}
                            <div className="text-center border-2 border-gray-600 rounded-lg p-6 transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 hover:bg-green-100">
                                <p className="text-5xl font-extrabold">
                                    {isClient && countBool && <CountUp start={0} end={20} duration={2.75} />}
                                    <span className="text-green-800">+</span>
                                </p>
                                <p className="text-lg mt-2 uppercase">Years of experience</p>
                            </div>

                            {/* Card 2 */}
                            <div className="text-center border-2 border-gray-600 rounded-lg p-6 transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 hover:bg-green-100">
                                <p className="text-5xl font-extrabold">
                                    {isClient && countBool && <CountUp start={0} end={200} duration={2.75} />}
                                    <span className="text-green-800">+</span>
                                </p>
                                <p className="text-lg mt-2 uppercase">Projects Executed</p>
                            </div>

                            {/* Card 3 */}
                            <div className="text-center border-2 border-gray-600 rounded-lg p-6 transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 hover:bg-green-100">
                                <p className="text-5xl font-extrabold">
                                    {isClient && countBool && <CountUp start={0} end={100} duration={2.75} />}
                                    <span className="text-green-800">+</span>
                                </p>
                                <p className="text-lg mt-2 uppercase">Happy Clients</p>
                            </div>

                            {/* Card 4 */}
                            <div className="text-center border-2 border-gray-600 rounded-lg p-6 transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 hover:bg-green-100">
                                <p className="text-lg font-bold mt-1 uppercase">
                                    INTERNATIONAL CLIENTS
                                </p>
                                <p className="text-lg  uppercase">
                                    AND
                                </p>
                                <p className="text-lg font-bold uppercase">
                                    GLOBAL RECOGNITION
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* New Section */}
                <section className="relative md:top-20 md:left-14 top-10 left-10 w-screen md:h-[1390px]">
                    <h1 className="text-white uppercase font-Poppins font-extrabold md:text-5xl text-4xl">Elevate Your</h1>
                    <h1 className="text-white uppercase font-Poppins font-extrabold md:text-5xl text-4xl">Business With</h1>
                    <h1 className="text-white uppercase font-Poppins font-extrabold md:text-5xl text-4xl">Digital <span className="text-green-800">innovation</span>.</h1>
                    <div className="md:w-[500px] relative md:top-8 w-[300px] text-justify top-2">
                        <p className="text-gray-300 md:text-lg">At <span className="text-white font-bold">Toplogic Softlabs</span>, we excel in delivering world-class <span className="text-white font-bold">digital transformation consulting services</span> tailored to bridge the gap between <span className="text-white font-bold">business strategies and innovation</span>. Our team of experts specializes in reimagining business processes by integrating <span className="text-white font-bold">cutting-edge digital technologies</span> that empower enterprises to embrace modern digital ecosystems.
                        <span className="text-white font-bold"> Unlike one-size-fits-all solutions</span>, <span className="text-white font-bold">our approach focuses on developing a customized digital transformation framework</span>. We meticulously analyze your existing operating models and align them with <span className="font-bold text-white">industry-leading practices</span> to ensure seamless adaptation. Our consultants help businesses of all sizes—from <span className="font-bold text-white">startups to established industry leaders</span>—strategize and invest in open, <span className="font-bold text-white">scalable technologies</span> that <span className="text-white font-bold">elevate customer experiences</span>.
                        By <span className="text-white font-bold">leveraging automation, data-driven insights, and streamlined operations</span>, Toplogic Softlabs ensures your business stays ahead in the digital age. Unlock the potential of digital innovation with solutions designed to enhance <span className="text-white font-bold">efficiency</span>, <span className="text-white font-bold">agility</span>, and <span className="text-white font-bold">competitive advantage</span>.
                        </p>
                    </div>
                    <div className="relative text-white w-[650px] -top-[550px] left-[520px] h-[700px] grid grid-cols-2 grid-rows-2 text-center">
                        <div className="">
                                <Image src={cloud} width={60} height={undefined} className="h-auto relative left-32 top-1" alt="Cloud"></Image>
                                <p className="font-Poppins font-bold text-xl">Cloud technology</p>
                                <p className="text-base text-gray-300 p-2 rounded-xl relative top-2 text-justify">We streamline your journey to the cloud, offering seamless migration and comprehensive management services. From complex infrastructure transitions to optimizing existing cloud assets, we ensure a smooth and efficient process. Our agile, scalable, and secure cloud environments empower your business to innovate faster, reduce costs, and drive growth.</p>
                        </div>
                        <div className="">
                                <Image src={ai} width={50} height={undefined} className="h-auto relative left-32 top-2" alt="AI"></Image>
                                <p className="font-Poppins font-bold text-xl relative top-3">Artificial Intelligence</p>
                                <p className="text-base text-gray-300 p-2 rounded-xl relative left-4 top-4 text-justify">Optimize Your Operations with Intelligent Automation. Our experts implement RPA solutions to automate repetitive tasks and complex workflows. By integrating seamlessly with your ERP systems, we boost efficiency, reduce errors, and drive cost savings. This allows your team to focus on strategic initiatives and deliver exceptional results.</p>
                        </div>
                        <div className="">
                                <Image src={digital} width={50} height={undefined} className="h-[50px] relative md:left-32 md:top-3" alt="Digital transformation"></Image>
                                <p className="font-Poppins font-bold text-xl relative md:top-5 text-center">Digital Transformation Consulting</p>
                                <p className="text-base text-gray-300 p-2 relative md:top-5 text-justify">Our seasoned experts dive deep into your specific challenges, providing tailored strategies to drive sustainable growth. Through in-depth evaluations and actionable insights, we empower you to make informed decisions and achieve measurable results.</p>
                        </div>
                        <div className="">
                                <Image src={mobile} width={50} height={undefined} className="md:h-50 relative left-32 top-1" alt="Mobile"></Image>
                                <p className="font-Poppins font-bold text-xl relative md:top-5">Enterprise Mobility & App Developmenty</p>
                                <p className="text-base text-gray-300 p-2 relative md:top-5 md:left-4 text-justify">Our expert team develops cutting-edge mobile apps that enhance customer engagement and drive business growth. From cross-platform to custom solutions, we leverage the latest technologies to deliver seamless user experiences and optimize your mobile presence.</p>
                        </div>
                    </div>
                </section>
                <section className="Industries">
                    <div className="relative -top-[400px] h-[540px] bg-gray-200" id="industries">
                        <h1 className="text-center font-Poppins font-extrabold md:text-[70px] relative md:top-1 uppercase text-[40px] top-2">Industries</h1>
                        <div className="relative max-w-full px-10 top-12 md:top-4" id="industryScrollContainer" ref={industryRef}>
            <div className="flex gap-12 pb-6 translate-x-10" id="horizontal-container">
                <IndustryDiv Name={"Automotive"} imageSrc={"automotive.jpg"}></IndustryDiv>
                <IndustryDiv Name={"Real Estate"} imageSrc={"real-estate.jpg"}></IndustryDiv>
                <IndustryDiv Name={"Health Care"} imageSrc={"healthcare.jpg"}></IndustryDiv>
                <IndustryDiv Name={"E-commerce"} imageSrc={"ecommerce.jpg"}></IndustryDiv>
                <IndustryDiv Name={"Transportation"} imageSrc={"transportation.jpg"}></IndustryDiv>
                <IndustryDiv Name={"Manufacturing"} imageSrc={"manufacturing.jpg"}></IndustryDiv>
                <IndustryDiv Name={"Software Dev"} imageSrc={"software-dev.jpg"}></IndustryDiv>
                <IndustryDiv Name={"Education"} imageSrc={"education.jpg"}></IndustryDiv>
                <IndustryDiv Name={"Fintech"} imageSrc={"fintech.jpg"}></IndustryDiv>
                <IndustryDiv Name={"Travel & Tourism"} imageSrc={"tourism.jpg"}></IndustryDiv>
                <IndustryDiv Name={"Entertainment"} imageSrc={"netflix.jpg"}></IndustryDiv>
                </div>
                </div>
                </div>
                </section>
            </div>
        </>
    );
};

export default Home;
