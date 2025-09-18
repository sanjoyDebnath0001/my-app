"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Download() {
	return (
		<div className="relative h-screen overflow-hidden bg-black">
			{/* Background Image Section */}
			<div className="absolute inset-0 z-0">
				<Image
					src="/background-city.jpg"
					alt="City skyline background"
					fill
					priority
					className="object-cover"
				/>
				<div className="absolute inset-0 bg-black/50"></div>
			</div>
			<div className="relative z-10 flex flex-col items-left justify-center p-8 text-white lg:p-20 min-h-[calc(100vh-12rem)]">
				<div className="max-w-xl space-y-5 lg:pr-0">
					<span className="font-semibold uppercase tracking-widest text-gray-300">
						Get Our App
					</span>
					<h1 className=" font-bold lg:text-6xl">
						Smart Travel Starts With Our App
					</h1>
					<p className="text-gray-300">
						Lorem ipsum dolor sit amet consectetur. At lorem ut cursusui
						fringilla eu. Accumsan vulputate sit placerat enim present sita
						ultricies dignissim et.
					</p>
					<div className="mt-8 flex flex-wrap gap-4">
						<a href="#" aria-label="Download on the Google Play Store">
							<Image
								src="/google-play-badge.svg"
								alt="Get it on Google Play"
								width={160}
								height={48}
							/>
						</a>
						<a href="#" aria-label="Download on the Apple App Store">
							<Image
								src="/app-store-badge.svg"
								alt="Download on the App Store"
								width={160}
								height={48}
							/>
						</a>
					</div>
				</div>
			</div>

			{/* Phone Mockup Section */}
			<div className="absolute bottom-40 right-10 z-200 lg:block">
				<div className="relative h-[1000px] w-[800px]">
					<Image
						src="/phone-mockup-1.png"
						alt="App mockup screen foreground"
						width={800}
						height={1000}
						className="absolute bottom-0 right-0 drop-shadow-2xl"
						style={{ 
							bottom: '-200px', 
						}}
					/>
				</div>
			</div>

			<div className="absolute bottom-0 left-0 right-0 z-30 flex items-center justify-center lg:h-48">
				<div className="w-full h-full bg-white text-black p-8 flex flex-col justify-center items-center text-center">
				</div>
			</div>
		</div>
	);
}