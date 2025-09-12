"use client";

import Image from 'next/image';
export default function AboutUs(){
	return (
		<section className="bg-gray-50 py-16 lg:py-24">
			<div className="container mx-auto px-4 lg:px-8">
				<div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-12">

					{/* Left Content Section */}
					<div className="w-full lg:w-1/2 mb-10 lg:mb-0">
						<span className="text-sm font-semibold text-gray-600 uppercase tracking-widest">
							ABOUT US
						</span>
						<h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mt-2 mb-6">
							Crafting Unforgettable Travel Experiences for You
						</h1>

						
						<div className="relative w-full h-80 lg:h-[450px] mb-8 rounded-2xl overflow-hidden shadow-xl">
							<Image
								src="/image/mountain.jpg" 
								alt="Mountains and houses"
								layout="fill"
								objectFit="cover"
								className="rounded-2xl"
							/>
						</div>
					</div>

					
					<div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end">
						
						<div className="relative w-full h-96 lg:h-[500px] mb-8 lg:mb-12 rounded-2xl overflow-hidden shadow-xl">
							<Image
								src="/image/beach.jpg" // Replace with your image path
								alt="Beach resort"
								layout="fill"
								objectFit="cover"
								className="rounded-2xl"
							/>
						</div>

						{/* The text content below the top-right image */}
						<div className="w-full text-gray-600 mb-6 lg:mb-4">
							<p className="mb-4">
								Lorem ipsum dolor sit amet consectetur. At lorem ut cursusi fringilla eu. Accumsan vuputate sit placrat enim present sita ultricies dignissm et.
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur. At lorem ut cursusi fringilla eu. Accumsan vuputate sit placrat enim present sita ultricies dignissm et.
							</p>
						</div>

						{/* Read More button */}
						<button className="self-start lg:self-end px-8 py-3 rounded-full text-sm font-semibold transition-transform hover:scale-105 bg-indigo-600 text-white shadow-lg">
							Read More
						</button>
					</div>

				</div>
			</div>
		</section>
	);
};
