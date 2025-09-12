"use client";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

export default function Destinations() {
	const destinations = [
		{ name: "Darjeeling", tours: "50 Tours", image: "/darjeeling.jpg" },
		{ name: "Puri", tours: "50 Tours", image: "/puri.jpg" },
		{ name: "Gangtok", tours: "50 Tours", image: "/gangtok.jpg" },
		{ name: "Shillong", tours: "50 Tours", image: "/shillong.jpg" },
		{ name: "Goa", tours: "50 Tours", image: "/goa.jpg" },
		{ name: "Mussoorie", tours: "50 Tours", image: "/mussoorie.jpg" },
		{ name: "Agra", tours: "50 Tours", image: "/agra.jpg" },
		{ name: "Digha", tours: "50 Tours", image: "/digha.jpg" },
	];

	const [currentIndex, setCurrentIndex] = useState(0);
	const itemsPerPage = 4;

	const handleNext = () => {
		setCurrentIndex(
			(prevIndex) =>
				(prevIndex + 1) % (destinations.length - itemsPerPage + 1)
		);
	};

	const handlePrev = () => {
		setCurrentIndex(
			(prevIndex) =>
				(prevIndex - 1 + (destinations.length - itemsPerPage + 1)) %
				(destinations.length - itemsPerPage + 1)
		);
	};

	const slideTranslateValue = currentIndex * (200 + 16); // 200px width + 16px gap

	return (
		<section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
			<div className="max-w-4xl mx-auto text-center">
				<span className="text-sm font-semibold text-gray-500 tracking-wider">
					POPULAR DESTINATIONS
				</span>
				<h2 className="mt-2 text-4xl font-bold text-gray-800">
					Discover the World's Favorite Getaways
				</h2>
				<p className="mt-4 text-gray-600">
					Lorem ipsum dolor sit amet consectetur. At lorem ut cursusui fringilla
					eu. Accumsan vulputate sit placirat enim present sita ultricies
					dignissim et.
				</p>
			</div>

			<div className="relative mt-12 flex items-center justify-center">
				{/* Prev Button */}
				<button
					onClick={handlePrev}
					className="absolute left-0 p-3 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors duration-300 z-10"
				>
					<FaChevronLeft className="text-lg text-gray-600" />
				</button>

				{/* Carousel */}
				<div className="overflow-hidden w-full max-w-4xl">
					<div
						className="flex transition-transform duration-500 ease-in-out space-x-4"
						style={{ transform:` translateX(-${ slideTranslateValue }px) `}}
					>
						{destinations.map((destination, index) => (
							<div
								key={index}
								className="flex flex-col items-center flex-shrink-0 w-48 text-center"
							>
								<div className="relative w-48 h-48 rounded-full overflow-hidden mb-4 border-2 border-transparent hover:border-blue-500 transition-colors duration-300 transform hover:scale-105">
									<Image
										src={destination.image}
										alt={destination.name}
										fill
										className="object-cover"
									/>
								</div>
								<h3 className="font-semibold text-gray-800 text-lg">
									{destination.name}
								</h3>
								<p className="mt-1 text-sm text-gray-500">
									{destination.tours}
								</p>
							</div>
						))}
					</div>
				</div>

				{/* Next Button */}
				<button
					onClick={handleNext}
					className="absolute right-0 p-3 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors duration-300 z-10"
				>
					<FaChevronRight className="text-lg text-gray-600" />
				</button>
			</div>

			{/* Dots Navigation */}
			<div className="flex justify-center mt-8 space-x-2">
				{Array.from({ length: destinations.length - itemsPerPage + 1 }).map(
					(_, index) => (
						<button
							key={index}
							onClick={() => setCurrentIndex(index)}
							className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentIndex === index ? "bg-blue-600" : "bg-gray-400"
								}`}
						/>
					)
				)}
			</div>
		</section>
	);
}