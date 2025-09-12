"use client"

import React from "react";
import Image from "next/image";
import { tourData } from "@/tourcomponents/tours";
import { motion } from "framer-motion";
import { FaMapPin } from "react-icons/fa";
import Link from "next/link";

export default async function TourDetailPage({ params }) {
	// Await the params object to resolve the dynamic route ID.
	const { id } = await params;
	const tour = tourData.find((t) => t.id === id);

	if (!tour) {
		return <div>Tour not found for ID: {id}</div>;
	}

	return (
		<div className="bg-gray-100 min-h-screen text-gray-800 font-inter antialiased">
			<main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="bg-white rounded-2xl shadow-xl overflow-hidden"
				>
					<div className="relative w-full h-[50vh] sm:h-[60vh]">
						<Image
							src={tour.image}
							alt={tour.title}
							layout="fill"
							objectFit="cover"
						/>
					</div>
					<div className="p-8 sm:p-12 space-y-6">
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
						>
							<h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-2">
								{tour.title}
							</h1>
							<p className="text-xl text-gray-600">
								{tour.description}
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.4 }}
							className="bg-gray-50 p-6 rounded-xl border border-gray-200"
						>
							<h2 className="text-2xl font-bold text-gray-800 mb-4">
								Tour Activities
							</h2>
							<ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-600">
								{tour.activities.map((activity, index) => (
									<li key={index} className="flex items-center space-x-2">
										<FaMapPin className="h-5 w-5 text-purple-600" />
										<span>{activity}</span>
									</li>
								))}
							</ul>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.6 }}
							className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200"
						>
							<div className="text-3xl font-bold text-purple-600">
								${tour.price}
								<span className="text-xl text-gray-500 font-normal"> / person</span>
							</div>
							<button className="bg-purple-600 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:bg-purple-700 transition-colors duration-300">
								<Link href="/tour-booking/booking-from" >
									Book Now
								</Link>
							</button>
						</motion.div>
					</div>
				</motion.div>
			</main>
		</div>
	);
}