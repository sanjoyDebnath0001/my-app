"use client";
import { useState } from 'react';
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Brands() {
	const brands = [
		{
			category: "Economical",
			title: "Comfortable, economical hotels",
			features: [
				"Top reviewed hotels",
				"Centrally located",
				"Free Wi-Fi",
			],
			color: "bg-blue-600",
		},
		{
			category: "Prime",
			title: "Comfortable, economical hotels",
			features: [
				"Top reviewed hotels",
				"Centrally located",
				"Free Wi-Fi",
			],
			color: "bg-purple-600",
		},
		{
			category: "Express",
			title: "Comfortable, economical hotels",
			features: [
				"Top reviewed hotels",
				"Centrally located",
				"Free Wi-Fi",
			],
			color: "bg-indigo-600",
		},
		
	];

	const [currentIndex, setCurrentIndex] = useState(0);

	const handleNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % brands.length);
	};

	const handlePrev = () => {
		setCurrentIndex((prevIndex) => (prevIndex - 1 + brands.length) % brands.length);
	};

	// Slice the array to show only three brands
	const visibleBrands = [
		brands[currentIndex],
		brands[(currentIndex + 1) % brands.length],
		brands[(currentIndex + 2) % brands.length],
	];

	return (
		<div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
			<div className="text-center max-w-2xl mx-auto">
				<span className="text-sm font-semibold text-gray-500 tracking-wider">BRANDS</span>
				<h2 className="mt-2 text-4xl font-bold text-gray-800">Our Leading Travel Brands</h2>
				<p className="mt-4 text-gray-600">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. At lorem ut cursusui fringilla eu. Accumsan vulputate sit placirat enim present sita ultricies dignissim et.
				</p>
			</div>

			<div className="flex justify-center space-x-4 mt-10">
				{brands.map((brand, index) => (
					<button
						key={index}
						className={`px-6 py-2 rounded-full text-white font-medium ${brand.color}`}
					>
						{brand.category}
					</button>
				))}
			</div>

			<div className="relative mt-12 flex items-center justify-center">
				<button
					onClick={handlePrev}
					className="absolute left-0 lg:left-10 p-3 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors duration-300 z-10"
				>
					<FaChevronLeft className="text-lg text-gray-600" />
				</button>

				<div className="flex justify-center space-x-8">
					{visibleBrands.map((brand, index) => (
						<div key={index} className="w-80 bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-500 ease-in-out transform hover:scale-105">
							<div className="bg-gray-800 h-64 w-full flex items-center justify-center">
								{/* Placeholder for the image */}
								<div className="text-white text-xl">Image Placeholder</div>
							</div>
							<div className="p-6">
								<h3 className="text-lg font-semibold text-gray-800">{brand.title}</h3>
								<ul className="mt-4 space-y-2">
									{brand.features.map((feature, i) => (
										<li key={i} className="flex items-center text-sm text-gray-600">
											<FaRegCircleCheck className="text-blue-500 mr-2 flex-shrink-0" />
											{feature}
										</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>

				<button
					onClick={handleNext}
					className="absolute right-0 lg:right-10 p-3 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors duration-300 z-10"
				>
					<FaChevronRight className="text-lg text-gray-600" />
				</button>
			</div>
		</div >
	);
}