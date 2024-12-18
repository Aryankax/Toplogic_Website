'use client';
import React, { useState } from "react";
import Navbar from "@/components/nav";

const Home = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="min-h-screen bg-slate-100">
            <Navbar />
            
            <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <div className="space-y-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-green-700 tracking-tight">
                        Let's Start a Conversation
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Transform your business with our cutting-edge IT solutions. 
                        Reach out to discuss how we can help you achieve your goals.
                    </p>
                </div>

                <div className="mt-16 max-w-3xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="p-8 lg:p-12">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 gap-y-6 gap-x-8">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="block w-full rounded-lg border-slate-200 shadow-sm focus:border-green-600 focus:ring-green-600 text-slate-900 py-3 px-4"
                                            placeholder="John Smith"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="block w-full rounded-lg border-slate-200 shadow-sm focus:border-green-600 focus:ring-green-600 text-slate-900 py-3 px-4"
                                            placeholder="john@example.com"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">
                                            Your Message
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="6"
                                            className="block w-full rounded-lg border-slate-200 shadow-sm focus:border-green-600 focus:ring-green-600 text-slate-900 py-3 px-4"
                                            placeholder="Tell us about your project..."
                                            required
                                        ></textarea>
                                    </div>
                                </div>

                                <div className="flex justify-end mt-6">
                                    <button
                                        type="submit"
                                        className="px-8 py-3 text-base font-medium text-white bg-green-700 rounded-lg shadow-sm hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600 transition-all duration-200"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>

                            {isSubmitted && (
                                <div className="mt-8 rounded-lg bg-green-50 p-4">
                                    <div className="text-center">
                                        <p className="text-sm font-medium text-green-800">
                                            Thank you for reaching out! Our team will contact you shortly.
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <footer className="bg-black mt-16">
                <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-base text-slate-100">
                        &copy; {new Date().getFullYear()} Toplogic Softlabs Pvt Ltd. All Rights Reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Home;