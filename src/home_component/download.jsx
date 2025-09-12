"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Download(){
	return (
		<div className="relative h-screen overflow-hidden bg-black">
			<Image
				src="/background-city.jpg"
				alt="City skyline background"
				fill
				priority
				className="object-cover"
			/>
			<div className="absolute inset-0 bg-black/50"></div>

			
			<div className="relative z-10 flex h-full flex-col items-center justify-center p-8 text-white lg:items-start lg:p-20">
				<div className="max-w-xl space-y-4">
					<span className="font-semibold uppercase tracking-widest text-gray-300">
						Get Our App
					</span>
					<h1 className="text-4xl font-bold lg:text-6xl">
						Smart Travel Starts With Our App
					</h1>
					<p className="text-gray-300">
						Lorem ipsum dolor sit amet consectetur. At lorem ut cursusui
						fringilla eu. Accumsan vulputate sit placerat enim present sita
						ultricies dignissim et.
					</p>

					{/* App Store Buttons */}
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

			{/* Phone Mockups with animation */}
			<div className="absolute bottom-0 right-0 z-10 hidden lg:block">
				<div className="relative h-[600px] w-[500px]">

					{/* Phone 2 (foreground) */}
					<motion.div
						className="absolute right-40 top-1/2 -translate-y-1/2 transform mask-b-from-80% mask-radial-[40%_50%] mask-radial-from-80%"
						animate={{ y: [0, 20, 0] }}
						transition={{
							duration: 5,
							repeat: Infinity,
							ease: "easeInOut",
						}}
					>
						<Image
							src="/phone-mockup-2.png"
							alt="App mockup screen foreground"
							width={300}
							height={600}
							className="drop-shadow-2xl"
						/>
					</motion.div>
				</div>
			</div>
		</div>
	);
};
