'use client'

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { tourData } from "@/tourcomponents/tours";
import TourCard from "@/tourcomponents/TourCard";

export default function ToursPage() {
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

	return (
		<div className="bg-gradient-to-r from-teal-200 to-indigo-400 text-gray-800 min-h-screen font-inter antialiased">
			<main className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12 py-12">
				<motion.section
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center"
				>
					<h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 drop-shadow-md">
						Explore Our Tour Packages
					</h1>
					<p className="text-xl text-gray-200 max-w-2xl mx-auto">
						Find your next adventure with our curated selection of tours and expeditions.
					</p>
				</motion.section>

				<motion.div
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
				>
					{tourData.map((tour) => (
						<motion.div key={tour.id} variants={item}>
							<TourCard tour={tour} />
						</motion.div>
					))}
				</motion.div>
			</main>
		</div>
	);
}