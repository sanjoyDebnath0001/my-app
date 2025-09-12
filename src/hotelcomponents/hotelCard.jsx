import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const HotelCard = ({ hotel }) => {
	const item = {
		hidden: { opacity: 0, y: 40 },
		show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
	};

	return (
		<motion.div variants={item}>
			<Link href={`/hotels/hotels-deatail/${hotel.id}`} key={hotel.id}>
			<div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-500 ease-in-out transform hover:scale-105">
				<div className="h-64 w-full relative">
					
					<Image
						src={hotel.image}
						alt={hotel.title}
						layout="fill"
						objectFit="cover"
						className="rounded-t-lg"
					/>
				</div>
				<div className="p-4">
					<h3 className="text-lg font-bold text-gray-800 leading-tight">{hotel.title}</h3>
					<div className="mt-2 text-sm text-gray-600 space-y-1">
						<p><strong>{hotel.location}</strong></p>
						<p>Starts ₹{hotel.price} per night</p>
					</div>
					<div className="flex items-center mt-3 text-sm font-medium">
						<div className="bg-green-500 text-white rounded-md px-2 py-0.5 mr-2">{hotel.rating}</div>
						<div className="flex text-yellow-400">
							{[...Array(5)].map((_, i) => (
								<FaStar key={i} className="text-sm" />
							))}
						</div>
						<span className="ml-2 text-gray-600">{hotel.reviews}</span>
					</div>
				</div>
			</div>
		</Link>
		</motion.div >
	);
};

export default HotelCard;