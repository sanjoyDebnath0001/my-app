"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image"; // Added missing import
import HeroAbout from "@/abuot-component/hero-section";

export default function AboutPage() {
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

	// State for "Read More" functionality
	const [isExpanded, setIsExpanded] = useState(false);

	// State to track which team member is being hovered over
	const [hoveredMember, setHoveredMember] = useState(null);

	// Use useRef to maintain state of section index across renders
	const sectionIndexRef = useRef(0);

	const bgClasses = [
		"bg-gradient-to-r from-purple-500 to-indigo-400",
		"bg-gradient-to-r from-blue-500 to-pink-400",
	];

	const getSectionBg = () => {
		const bg = bgClasses[sectionIndexRef.current % bgClasses.length];
		sectionIndexRef.current++;
		return bg;
	};

	// Team member data with a hover fact
	const teamMembers = [
		{ name: "Jane Doe", role: "Co-Founder & CEO", fact: "Loves hiking in the Himalayas." },
		{ name: "John Smith", role: "Lead Developer", fact: "Creator of the first platform prototype." },
		{ name: "Emily Wang", role: "Head of Operations", fact: "Organizes our annual team-building trips." },
		{ name: "Sam Wilson", role: "Customer Success", fact: "Fluent in 5 languages to help global travelers." },
		{ name: "Rahul Ghosh", role: "Photographer", fact: "Can create compelling visual content that sparks desire and interest in the destination or experience." },
	];

	return (
		<div className="bg-gradient-to-r from-indigo-400 to-teal-200 text-gray-200 min-h-screen font-inter antialiased">
			<main className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
				<HeroAbout />
				<motion.section
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="relative rounded-2xl p-8 sm:p-12 shadow-lg overflow-hidden"
				>
					<div className="absolute inset-0 z-0">
						<Image
							src="/bg/free-sea.jpg"
							alt="A calm sea at sunset"
							layout="fill"
							objectFit="cover"
							quality={100}
						/>
						<div className="absolute inset-0 bg-black/40"></div>
					</div>
					<div className="relative z-10">
						<h2 className="text-3xl font-bold text-white mb-4">
							A Vision to Travel Better
						</h2>
						<p className="text-gray-200 text-lg leading-relaxed">
							At Ghar Basai, we believe travel is more than just a trip—it's a
							journey of discovery, connection, and creating memories that last a
							lifetime. Our mission is to make that journey as seamless and
							enriching as possible.
							{isExpanded && (
								<span className="text-gray-200 text-lg leading-relaxed mt-4 block">
									We're constantly working to expand our network of verified hosts and create intuitive tools that empower you to find the perfect place to stay, whether it's for a night or an entire season.
								</span>
							)}
						</p>
						<button
							onClick={() => setIsExpanded(!isExpanded)}
							className="mt-4 text-white hover:text-purple-300 font-bold transition-colors duration-300"
						>
							{isExpanded ? "Read Less" : "Read More..."}
						</button>
					</div>
				</motion.section>

				{/* Promise Section */}
				<motion.section
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className={`${getSectionBg()} rounded-2xl p-8 sm:p-12 shadow-lg grid grid-cols-1 md:grid-cols-3 gap-8 text-center`}
				>

					<motion.div
						variants={item}
						className="rounded-2xl p-8 shadow-lg hover:scale-105 transition-transform"
					>
						<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
							<path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
						<h3 className="text-xl font-bold text-white mb-2">Quality</h3>
						<p className="text-gray-900 font-bold">
							We partner with trusted hosts and brands to ensure every stay
							meets our high standards.
						</p>
					</motion.div>
					{/* Simplicity */}
					<motion.div
						variants={item}
						className="rounded-2xl p-8 shadow-lg hover:scale-105 transition-transform"
					>
						{/* SVG icon for Simplicity */}
						<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
							<path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.468 10.03 5 9 5a2.25 2.25 0 00-2.25 2.25c0 1.152.923 2.094 2.128 2.247 1.13.155 2.059.176 2.871.018a2.25 2.25 0 012.25-2.25c1.152 0 2.094.923 2.247 2.128.155 1.13.176 2.059.018 2.871-1.15 1.15-2.522 1.954-4.225 1.954-1.703 0-3.075-.804-4.225-1.954" />
						</svg>
						<h3 className="text-xl font-bold  mb-2">Simplicity</h3>
						<p className="text-black/50 font-bold">
							Our platform is intuitive and easy to use, so you can focus on
							planning your adventure.
						</p>
					</motion.div>
					{/* Community */}
					<motion.div
						variants={item}
						className=" rounded-2xl p-8 shadow-lg hover:scale-105 transition-transform"
					>
						{/* SVG icon for Community */}
						<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
							<path strokeLinecap="round" strokeLinejoin="round" d="M17.904 15.753A6.75 6.75 0 0012 3a6.75 6.75 0 00-5.904 9.753l-.904.904a6.75 6.75 0 00-.904 9.753l.904.904A6.75 6.75 0 0012 21a6.75 6.75 0 005.904-9.753l.904-.904a6.75 6.75 0 00.904-9.753l-.904-.904A6.75 6.75 0 0017.904 15.753zM12 12a1 1 0 100-2 1 1 0 000 2z" />
						</svg>
						<h3 className="text-xl font-bold text-white mb-2">Community</h3>
						<p className="text-gray-800">
							We're more than just a booking site; we're a community of
							passionate travelers.
						</p>
					</motion.div>
				</motion.section>


				{/* Team Section with a more interesting design */}
				<motion.section
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className={`${getSectionBg()} rounded-2xl p-8 sm:p-12 shadow-lg`}
				>
					<h2 className="text-3xl font-bold text-white mb-8 text-center">
						Meet the Visionaries
					</h2>
					<motion.div
						variants={container}
						className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
					>
						{teamMembers.map((member, i) => (
							<motion.div
								key={i}
								variants={item}
								className="relative flex flex-col items-center text-center cursor-pointer p-6 rounded-xl bg-gray-800 transition-all duration-500 hover:bg-gray-700 hover:scale-105 group"
								onMouseEnter={() => setHoveredMember(member.name)}
								onMouseLeave={() => setHoveredMember(null)}
							>
								{/* Profile Image & Overlay */}
								<div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-purple-400 group-hover:border-pink-400 transition-colors duration-500">
									<Image
										src={`/team/${member.name.toLowerCase().replace(/\s/g, '-')}.jpg`}
										alt={`Profile of ${member.name}`}
										width={128}
										height={128}
										objectFit="cover"
										className="transition-transform duration-500 group-hover:scale-110"
									/>
								</div>

								{/* Name and Role */}
								<h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
									{member.name}
								</h3>
								<p className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
									{member.role}
								</p>

								{/* Hovered Fact Card */}
								<motion.div
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: hoveredMember === member.name ? 1 : 0, y: hoveredMember === member.name ? 0 : 10 }}
									transition={{ duration: 0.3 }}
									className="absolute inset-x-0 bottom-0 mb-[-1rem] bg-pink-500 text-white text-xs p-2 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-[-1rem]"
								>
									<span className="font-semibold">Fact: </span>{member.fact}
								</motion.div>
							</motion.div>
						))}
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
							src="/bg/next-adven.jpg"
							alt="A person hiking on a mountain trail"
							layout="fill"
							objectFit="cover"
							quality={100}
						/>
						<div className="absolute inset-0 bg-black/40"></div>
					</div>
					<div className="relative z-10">
						<h2 className="text-3xl font-bold text-white mb-4">
							Ready to find your next adventure?
						</h2>
						<p className="text-lg text-gray-400 mb-8">
							Join the Ghar Basai community and let us help you find your "home
							away from home."
						</p>
						<Link
							href="/"
							className="inline-block bg-purple-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-purple-700 transition-colors duration-300"
						>
							Explore Stays
						</Link>
					</div>
				</motion.section>
			</main>
		</div>
	);
}