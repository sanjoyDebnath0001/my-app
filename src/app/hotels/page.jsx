"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { hotelData } from "@/hotelcomponents/hotels";
import HotelCard from "@/hotelcomponents/hotelCard";

export default function HotelsPage() {
	// State to manage a selected hotel for a "featured" view or modal
	const [selectedHotel, setSelectedHotel] = useState(null);

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
						Our Handpicked Stays
					</h1>
					<p className="text-xl text-gray-200 max-w-2xl mx-auto">
						Find your perfect "home away from home" from our curated selection of
						hotels and retreats.
					</p>
				</motion.section>

				<motion.div
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
				>
					{hotelData.map((hotel) => (
						<motion.div key={hotel.id} variants={item}>
							<HotelCard hotel={hotel} />
						</motion.div>
					))}
				</motion.div>
			</main>
		</div>
	);
}