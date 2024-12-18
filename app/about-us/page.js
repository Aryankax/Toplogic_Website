'use client';
import React from "react";
import Navbar from "@/components/nav";

const AboutUs = () => {
    return (
        <>
            <Navbar />
            {/* About Us Header */}
            <section className="relative w-full bg-slate-100 text-black py-12">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-Poppins font-semibold uppercase mb-4 text-green-700">
                        About Us
                    </h1>
                    <p className="text-lg max-w-3xl mx-auto text-gray-600 font-Lato">
                        Delivering <span className="font-semibold text-green-600">Excellence</span> in IT Consulting and Services for Over 20 Years
                    </p>
                </div>

                {/* Company Intro */}
                <div className="container mx-auto px-8 md:px-20">
                    <div className="bg-green-50 rounded-2xl shadow-lg p-8 md:p-12">
                        <h2 className="text-4xl font-bold mb-4 text-green-700">Who We Are</h2>
                        <p className="text-gray-700 font-Lato leading-relaxed">
                            Established in <span className="text-green-600 font-semibold">2006</span>, <span className="text-green-600 font-semibold">Toplogic Softlabs</span> is a 
                            leading IT Consulting and Services company, proudly serving clients worldwide for over 
                            two decades. With a skilled team of <strong>40+ professionals</strong>, we have successfully 
                            delivered <strong>300-400+ projects</strong> to domestic and international clients.
                        </p>
                        <p className="mt-4 text-gray-700 font-Lato leading-relaxed">
                            Our expertise spans across industries such as <span className="font-semibold">Healthcare</span>, SaaS Platforms, AI-Driven 
                            Solutions, and Cloud-Native Applications. We are committed to driving innovation, 
                            delivering impactful results, and exceeding client expectations.
                        </p>
                    </div>
                </div>
            </section>

            {/* Director Section */}
            <section className="bg-slate-100 py-16">
                <div className="container mx-auto px-8 md:px-20">
                    <h2 className="text-4xl font-semibold text-center mb-12 text-green-700 uppercase">
                        Meet Our Director & CEO
                    </h2>

                    {/* Card */}
                    <div className="flex flex-col md:flex-row items-center bg-green-50 rounded-xl shadow-lg p-6 md:p-12">
                        {/* Director Image */}
                        <div className="bg-green-700 rounded-full w-48 h-48 flex-shrink-0 flex items-center justify-center shadow-lg mb-6 md:mb-0 md:mr-8">
                            {/* <span className="text-6xl font-bold text-white">AK</span> */}
                            <img src="./anuj_kacker.jpeg" className="w-full h-full rounded-full"></img>
                        </div>
                        {/* Director Details */}
                        <div>
                            <h3 className="text-3xl font-semibold text-black font-Poppins">
                                Mr. Anuj Kacker
                            </h3>
                            <p className="text-green-600 mt-2 font-Lato">
                                Founder, Director & CEO of Toplogic Softlabs Pvt Ltd
                            </p>
                            <p className="mt-4 text-gray-700 leading-relaxed font-Lato">
                                With a strong passion for life sciences and technology, Mr. Anuj Kacker has successfully 
                                led <strong>18+ years</strong> of transformative projects across <span className="text-green-600 font-medium">healthcare</span>, 
                                <span className="text-green-600 font-medium"> AI-driven solutions</span>, and <span className="text-green-600 font-medium">cloud-based platforms</span>. 
                                Notable innovations include <em>Ghoshal BreathCalc</em> and <em>QuickBid</em>, revolutionizing diagnostics and 
                                tender management systems.
                            </p>
                            <p className="mt-4 text-gray-700 font-Lato">
                                Reach out for collaborations or inquiries:
                            </p>
                            <ul className="list-none mt-2 space-y-2 text-gray-600">
                                <li>📧 Email: <a href="mailto:anuj@toplogic.in" className="text-green-600 underline">anuj@toplogic.in</a></li>
                                <li>🔗 LinkedIn: <a href="https://www.linkedin.com/in/anuj-kacker/" target="_blank" className="text-green-600 underline">linkedin.com/in/anuj-kacker</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="bg-green-800 text-white py-12">
                <div className="container mx-auto px-8 md:px-20">
                    <h2 className="text-4xl font-bold text-center mb-8 uppercase">Get in Touch</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-Poppins">
                        {/* Contact Info */}
                        <div>
                            <h3 className="text-3xl font-semibold mb-4">Contact Information</h3>
                            <ul className="space-y-3 text-lg font-Lato">
                                <li>📧 Email: <a href="mailto:info@toplogic.in" className="underline">info@toplogic.in</a></li>
                                <li>📞 Phone: <a href="tel:+915224048888" className="underline">0522-4048888</a></li>
                                <li>🏢 Address: 
                                    <p className="mt-1">
                                        50/51 Narain Nagar - A,<br />
                                        P.O. Indira Nagar, Adjacent to Kumar Clinic,<br />
                                        Lucknow, Uttar Pradesh, 226016
                                    </p>
                                </li>
                            </ul>
                        </div>
                        {/* Map Embed */}
                        <div className="w-full rounded-lg shadow-lg overflow-hidden">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.1584838727867!2d80.9765596790889!3d26.866705401944817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd4958273db5%3A0xc2c04f850cde5cf1!2sToplogic%20Softlabs%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1734430320660!5m2!1sen!2sin"
                width="100%"
                height="400"
                className="border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Toplogic Softlabs Map"
            ></iframe>
        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black text-white text-center py-4">
                <p className="font-Lato">&copy; {new Date().getFullYear()} Toplogic Softlabs Pvt Ltd. All Rights Reserved.</p>
            </footer>
        </>
    );
};

export default AboutUs;
