"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link"; // Added Link for potential navigation

export default function GalleryPage() {
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
		hidden: { opacity: 0, scale: 0.95 },
		show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
	};

	// Sample gallery data with valid placeholder image URLs
	const galleryItems = [
		{
			id: 1,
			title: "Urban Escape",
			description: "A cozy apartment in the heart of the city.",
			imageUrl:"/background-city.jpg",
		},
		{
			id: 2,
			title: "Mountain Retreat",
			description: "Stunning views from a cabin in the woods.",
			imageUrl: "/images.jpg",
		},
		{
			id: 3,
			title: "Beachfront Villa",
			description: "Wake up to the sound of waves crashing.",
			imageUrl: "/goa.jpg",
		},
		{
			id: 4,
			title: "Historic Townhouse",
			description: "Experience the charm of a bygone era.",
			imageUrl: "/gangtok.jpg",
		},
		{
			id: 5,
			title: "Modern Loft",
			description: "Sleek and minimalist design for the modern traveler.",
			imageUrl: "/image2.jpg",
		},
		{
			id: 6,
			title: "Rustic Farmhouse",
			description: "A peaceful getaway in the countryside.",
			imageUrl: "/bg/lake-mountain.jpg",
		},
		{
			id: 7,
			title: "Desert Oasis",
			description: "Find serenity under a vast, starry sky.",
			imageUrl: "https://source.unsplash.com/random/800x600/?desert,oasis",
		},
		{
			id: 8,
			title: "Lakeside Lodge",
			description: "Perfect for fishing, boating, and relaxation.",
			imageUrl: "/ppt.jpg",
		},
		{
			id: 9,
			title: "Cozy Treehouse",
			description: "An unforgettable stay high among the leaves.",
			imageUrl: "https://source.unsplash.com/random/800x600/?treehouse,forest",
		},
	];

	return (
		<div className="bg-gradient-to-r from-indigo-400 to-teal-200 text-gray-200 min-h-screen font-inter antialiased py-12">
			<main className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.section
					initial={{ opacity: 0, y: -50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-12"
				>
					<h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
						Our Gallery
					</h1>
					<p className="text-lg text-gray-800 max-w-2xl mx-auto">
						Explore some of the beautiful properties and destinations available through Ghar Basai.
					</p>
				</motion.section>

				<motion.section
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, amount: 0.3 }}
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
				>
					{galleryItems.map((itemData) => (
						<motion.div
							key={itemData.id}
							variants={item}
							className="relative rounded-2xl overflow-hidden shadow-lg group"
						>
							<Image
								src={itemData.imageUrl}
								alt={itemData.title}
								width={800}
								height={600}
								className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
							/>
							<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
								<h3 className="text-xl font-bold text-white mb-1">
									{itemData.title}
								</h3>
								<p className="text-sm text-gray-200">{itemData.description}</p>
							</div>
						</motion.div>
					))}
				</motion.section>
			</main>
		</div>
	);
}