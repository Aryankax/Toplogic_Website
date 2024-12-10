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
            x: "-1500px",
            scrollTrigger: {
                trigger: "#industries",
                scroller: "body",
                markers: false,
                start: "top 15%",
                end: "top -550%",
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
            <div className="relative bg-black min-h-screen">
                <div className="fixed top-0 left-0 right-0 z-50">
                    <Navbar />
                </div>

                {/* Video Background */}
                <video
                    className="absolute w-screen h-[700px] z-10 object-cover"
                    src="/Toplogic_Video.mp4"
                    autoPlay
                    loop
                    muted
                />

                {/* Dark Overlay */}
                <div className="absolute w-full h-[700px] z-20 bg-black opacity-70"></div>

                {/* Hero Section Content */}
                <section
                    className="Hero-section-content text-white relative w-screen h-screen z-20"
                    id="Hero-Content"
                >
                    <p className="font-Poppins font-bold text-green-700 absolute left-20 top-44 text-[100px] uppercase transition-colors duration-300 hover:text-green-500">
                        Revolutionizing
                    </p>
                    <p className="font-Poppins font-bold absolute left-20 top-[260px] text-[100px] text-green-700 uppercase transition-colors duration-300 hover:text-green-500">
                        IT SOLUTIONS.
                    </p>
                    <div className="w-[800px] h-[500px] absolute top-[400px] left-20">
                        <p className="font-Poppins text-lg">
                            Toplogic Softlabs is at the forefront of innovation, delivering cutting-edge IT solutions that are transforming industries. With a focus on excellence and sustainability, we provide tailor-made technology services designed to streamline operations, enhance efficiency, and drive growth. We are committed to revolutionizing the digital landscape, ensuring our clients stay ahead in the fast-paced world of technology.
                        </p>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="Facts-and-Figures" ref={statsRef}>
                    <div className="border-2 relative z-40 w-screen h-[450px] bg-gray-200">
                        <h1 className="text-center text-[70px] font-Poppins font-extrabold uppercase relative top-4">
                            Empowering Success
                        </h1>
                        <h1 className="text-center relative text-[30px] font-Poppins font-bold text-green-800">
                            Our Achievements in Numbers
                        </h1>

                        {/* Grid Layout for Stats Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12 px-8 max-w-7xl mx-auto relative top-10">
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
                <section className="relative top-20 left-14">
                    <h1 className="text-white uppercase font-Poppins font-extrabold text-5xl">Elevate Your</h1>
                    <h1 className="text-white uppercase font-Poppins font-extrabold text-5xl">Business With</h1>
                    <h1 className="text-white uppercase font-Poppins font-extrabold text-5xl">Digital <span className="text-green-800">innovation</span>.</h1>
                    <div className="w-[500px] relative top-8">
                        <p className="text-gray-300 text-lg">At <span className="text-white font-bold">Toplogic Softlabs</span>, we excel in delivering world-class <span className="text-white font-bold">digital transformation consulting services</span> tailored to bridge the gap between <span className="text-white font-bold">business strategies and innovation</span>. Our team of experts specializes in reimagining business processes by integrating <span className="text-white font-bold">cutting-edge digital technologies</span> that empower enterprises to embrace modern digital ecosystems.
                        <span className="text-white font-bold"> Unlike one-size-fits-all solutions</span>, <span className="text-white font-bold">our approach focuses on developing a customized digital transformation framework</span>. We meticulously analyze your existing operating models and align them with <span className="font-bold text-white">industry-leading practices</span> to ensure seamless adaptation. Our consultants help businesses of all sizes—from <span className="font-bold text-white">startups to established industry leaders</span>—strategize and invest in open, <span className="font-bold text-white">scalable technologies</span> that <span className="text-white font-bold">elevate customer experiences</span>.
                        By <span className="text-white font-bold">leveraging automation, data-driven insights, and streamlined operations</span>, Toplogic Softlabs ensures your business stays ahead in the digital age. Unlock the potential of digital innovation with solutions designed to enhance <span className="text-white font-bold">efficiency</span>, <span className="text-white font-bold">agility</span>, and <span className="text-white font-bold">competitive advantage</span>.
                        </p>
                    </div>
                    <div className="relative text-white w-[650px] -top-[550px] left-[520px] h-[700px] grid grid-cols-2 grid-rows-2 text-center">
                        <div className="">
                                <Image src={cloud} width={60} height={undefined} className="h-auto relative left-32 top-1" alt="Cloud"></Image>
                                <p className="font-Poppins font-bold text-xl">Cloud technology</p>
                                <p className="text-center text-base text-gray-300 p-2 rounded-xl relative top-2">We streamline your journey to the cloud, offering seamless migration and comprehensive management services. From complex infrastructure transitions to optimizing existing cloud assets, we ensure a smooth and efficient process. Our agile, scalable, and secure cloud environments empower your business to innovate faster, reduce costs, and drive growth.</p>
                        </div>
                        <div className="">
                                <Image src={ai} width={50} height={undefined} className="h-auto relative left-32 top-2" alt="AI"></Image>
                                <p className="font-Poppins font-bold text-xl relative top-3">Artificial Intelligence</p>
                                <p className="text-center text-base text-gray-300 p-2 rounded-xl relative left-4 top-4">Optimize Your Operations with Intelligent Automation. Our experts implement RPA solutions to automate repetitive tasks and complex workflows. By integrating seamlessly with your ERP systems, we boost efficiency, reduce errors, and drive cost savings. This allows your team to focus on strategic initiatives and deliver exceptional results.</p>
                        </div>
                        <div className="">
                                <Image src={digital} width={40} height={undefined} className="h-auto relative left-32 top-1" alt="Digital transformation"></Image>
                                <p className="font-Poppins font-bold text-xl relative top-3">Digital Transformation Consulting</p>
                                <p className="text-center text-base text-gray-300 p-2 rounded-xl relative top-2">Our seasoned experts dive deep into your specific challenges, providing tailored strategies to drive sustainable growth. Through in-depth evaluations and actionable insights, we empower you to make informed decisions and achieve measurable results.</p>
                        </div>
                        <div className="">
                                <Image src={mobile} width={50} height={undefined} className="h-auto relative left-32 top-1" alt="Mobile"></Image>
                                <p className="font-Poppins font-bold text-xl relative top-3">Enterprise Mobility & App Developmenty</p>
                                <p className="text-center text-base text-gray-300 p-2 rounded-xl relative top-2 left-4">Our expert team develops cutting-edge mobile apps that enhance customer engagement and drive business growth. From cross-platform to custom solutions, we leverage the latest technologies to deliver seamless user experiences and optimize your mobile presence.</p>
                        </div>
                    </div>
                </section>
                <section className="Industries">
                    <div className="border-2 border-gray-200 relative -top-[460px] h-[540px] bg-gray-200" id="industries">
                        <h1 className="text-center font-Poppins font-extrabold text-[70px] relative top-1 uppercase">Industries</h1>
                        <div className="relative max-w-full px-10 top-6" id="industryScrollContainer" ref={industryRef}>
            <div className="flex gap-12 pb-6" id="horizontal-container">
                <IndustryDiv Name={"Automotive"} imageSrc={automotive}></IndustryDiv>
                <IndustryDiv Name={"Real Estate"}></IndustryDiv>
                <IndustryDiv Name={"Health Care"}></IndustryDiv>
                <IndustryDiv Name={"E-commerce"}></IndustryDiv>
                <IndustryDiv Name={"Transportation"}></IndustryDiv>
                <IndustryDiv Name={"Manufacturing"}></IndustryDiv>
                <IndustryDiv Name={"Education"}></IndustryDiv>
                <IndustryDiv Name={"Software Vendors"}></IndustryDiv>
                <IndustryDiv Name={"Fintech"}></IndustryDiv>
                <IndustryDiv Name={"Travel & Tourism"}></IndustryDiv>
                <IndustryDiv Name={"Entertainment"}></IndustryDiv>
            </div>
        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Home;
