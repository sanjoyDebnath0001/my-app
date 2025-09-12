"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { MdLocationOn, MdPhone, MdEmail, MdContentCopy, MdDone } from "react-icons/md";

export default function ContactPage() {
    // Reusable variants for stagger animations
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    // State for copy functionality
    const [copiedStates, setCopiedStates] = useState({
        location: false,
        phone: false,
        email: false,
    });

    // State for form validation
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    // Function to handle copying text to clipboard
    const handleCopy = async (text, key) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedStates(prev => ({ ...prev, [key]: true }));
            setTimeout(() => {
                setCopiedStates(prev => ({ ...prev, [key]: false }));
            }, 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};
        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.email) newErrors.email = "Email is required";
        if (!formData.message) newErrors.message = "Message is required";

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            alert("Form submitted successfully! (This is a mock submission)");
            // Here you would typically send the form data to an API
            setFormData({ name: '', email: '', message: '' }); // Reset form
        }
    };

    return (
        <div className="bg-gradient-to-r from-indigo-400 to-teal-200 text-gray-200 min-h-screen font-inter antialiased">
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-8 py-12">
                {/* Hero Section */}
                <motion.section
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
                        Get In Touch
                    </h1>
                    <p className="text-lg text-gray-800 max-w-2xl mx-auto">
                        We're here to help you with any questions or feedback. Feel free to reach out to us!
                    </p>
                </motion.section>

                {/* Contact Information & Form Section */}
                <motion.section
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="relative bg-gradient-to-r from-purple-500 to-indigo-400 rounded-2xl p-8 sm:p-12 shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {/* Contact Info Block */}
                    <motion.div variants={item}>
                        <h3 className="text-3xl font-bold text-white mb-4">Contact Information</h3>
                        <div className="space-y-6 text-gray-100">
                            {/* Location */}
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => handleCopy('1234 Road, Info, Example 3029, Example', 'location')}
                                className="flex items-center gap-4 cursor-pointer transition-transform duration-200"
                            >
                                <MdLocationOn className="text-xl text-pink-200 flex-shrink-0" />
                                <span>1234 Road, Info, Example 3029, Example</span>
                                <span className="text-sm text-gray-300 ml-auto flex items-center">
                                    {copiedStates.location ? <MdDone className="text-green-300" /> : <MdContentCopy className="hover:text-white" />}
                                </span>
                            </motion.div>

                            {/* Phone */}
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => handleCopy('+0123 456 789', 'phone')}
                                className="flex items-center gap-4 cursor-pointer transition-transform duration-200"
                            >
                                <MdPhone className="text-xl text-pink-200 flex-shrink-0" />
                                <span>+0123 456 789</span>
                                <span className="text-sm text-gray-300 ml-auto flex items-center">
                                    {copiedStates.phone ? <MdDone className="text-green-300" /> : <MdContentCopy className="hover:text-white" />}
                                </span>
                            </motion.div>

                            {/* Email */}
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => handleCopy('info@gharbasai.com', 'email')}
                                className="flex items-center gap-4 cursor-pointer transition-transform duration-200"
                            >
                                <MdEmail className="text-xl text-pink-200 flex-shrink-0" />
                                <span>info@gharbasai.com</span>
                                <span className="text-sm text-gray-300 ml-auto flex items-center">
                                    {copiedStates.email ? <MdDone className="text-green-300" /> : <MdContentCopy className="hover:text-white" />}
                                </span>
                            </motion.div>
                        </div>
                    </motion.div>

                    
                    <motion.div variants={item}>
                        <h3 className="text-3xl font-bold text-white mb-4">Send Us a Message</h3>
                        <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                            <div>
                                <label htmlFor="name" className="sr-only">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full rounded-md p-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-300 transition-all duration-300 ${errors.name ? 'border-2 border-red-500' : 'border-2 border-transparent'}`}
                                />
                                {errors.name && <p className="text-red-300 text-sm mt-1">{errors.name}</p>}
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full rounded-md p-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-300 transition-all duration-300 ${errors.email ? 'border-2 border-red-500' : 'border-2 border-transparent'}`}
                                />
                                {errors.email && <p className="text-red-300 text-sm mt-1">{errors.email}</p>}
                            </div>
                            <div>
                                <label htmlFor="message" className="sr-only">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={`w-full rounded-md p-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-300 transition-all duration-300 ${errors.message ? 'border-2 border-red-500' : 'border-2 border-transparent'}`}
                                ></textarea>
                                {errors.message && <p className="text-red-300 text-sm mt-1">{errors.message}</p>}
                            </div>
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full bg-pink-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-pink-600 transition-colors duration-300"
                            >
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>
                </motion.section>

                {/* CTA Section */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative rounded-2xl p-8 sm:p-12 shadow-lg text-center overflow-hidden"
                >
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="https://source.unsplash.com/random/1200x600/?office,workspace"
                            alt="A bright office space"
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                        />
                        <div className="absolute inset-0 bg-black/40"></div>
                    </div>
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Want to work with us?
                        </h2>
                        <p className="text-lg text-gray-400 mb-8">
                            Join the Ghar Basai community and help us build the future of travel.
                        </p>
                        <Link
                            href="/careers"
                            className="inline-block bg-purple-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-purple-700 transition-colors duration-300"
                        >
                            View Careers
                        </Link>
                    </div>
                </motion.section>
            </main>
        </div>
    );
}