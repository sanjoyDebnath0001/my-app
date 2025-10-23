"use client"; // This component needs to be a client component to use useState

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { hotelData, fetchHotelData } from "@/hotelcomponents/hotels";
import HotelCard from "@/hotelcomponents/hotelCard";
import NewDataForm from "@/app/Admin/form/hotel/hfrom"; // Assuming NewDataForm is in the same directory

export default function AdminHotelUpdatepage() {
	const [addForm, setAddForm] = useState(false);
	const [hotels, setHotels] = useState(hotelData);

	// load hotels from internal API on mount (client component)
	React.useEffect(() => {
		let mounted = true;
		fetchHotelData().then((data) => {
			if (mounted && Array.isArray(data)) setHotels(data);
		});
		return () => (mounted = false);
	}, []);

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
						All Hotel
					</h1>
				</motion.section>

				{/* Existing hotel cards */}
				<motion.div
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
				>
					{hotels.map((hotel) => (
						<motion.div key={hotel.id} variants={item}>
							<HotelCard hotel={hotel} />
						</motion.div>
					))}
				</motion.div>

				{/* The button to open the form */}
				<button
					className="px-10 py-10 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-300 text-xl"
					onClick={() => setAddForm(true)}
				>
					ADD HOTEL DATA
				</button>
			</main>

			{/* Conditionally render the modal/form */}
			{addForm && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
					<motion.div
						initial={{ scale: 0.9, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0.9, opacity: 0 }}
						className="relative bg-white rounded-lg shadow-xl p-8 max-w-lg w-full"
					>
						{/* Close button for the modal */}
						<button
							onClick={() => setAddForm(false)}
							className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors duration-200"
						>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
						<NewDataForm setBooked={setAddForm} onSuccess={(newHotel) => setHotels((prev) => [newHotel, ...prev])} />
					</motion.div>
				</div>
			)}
		</div>
	);
}