'use client'
import React from "react";
import Image from "next/image";
import { hotelData } from "@/hotelcomponents/hotels";
import { motion } from "framer-motion";

export default function HotelDetailPage({ params }) {
	// Corrected: Accessing the id property directly from the params object, which is correct for client components.
	const { id } = params;
	const hotel = hotelData.find((h) => h.id === id);

	if (!hotel) {
		return <div>Hotel not found for ID: {id}</div>;
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
							src={hotel.image}
							alt={hotel.title}
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
								{hotel.title}
							</h1>
							<p className="text-xl text-gray-600">
								{hotel.description}
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.4 }}
							className="bg-gray-50 p-6 rounded-xl border border-gray-200"
						>
							<h2 className="text-2xl font-bold text-gray-800 mb-4">
								Amenities
							</h2>
							<ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-600">
								{hotel.amenities.map((amenity, index) => (
									<li key={index} className="flex items-center space-x-2">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
											<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
										</svg>
										<span>{amenity}</span>
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
								{hotel.price}
								<span className="text-xl text-gray-500 font-normal"> / night</span>
							</div>
							<button className="bg-purple-600 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:bg-purple-700 transition-colors duration-300">
								Book Now
							</button>
						</motion.div>
					</div>
				</motion.div>
			</main>
		</div>
	);
}