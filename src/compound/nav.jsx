"use client";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function Navbar() {
	return (
		<div>
		<nav className="bg-white/90 backdrop-blur-sm shadow-md py-4 px-6 md:px-12 lg:px-24 flex justify-between items-center  top-0 left-0 right-0 z-50">
			<div className="flex items-center space-x-8">
				{/* Logo */}
				<Link href="/" className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-700">
					Ghar Basai
				</Link>

				{/* Navigation Links */}
				<ul className="hidden lg:flex items-center space-x-6 text-gray-700 font-medium">
					<li>
						<Link href="/" className="px-4 py-2 rounded-full bg-indigo-700 text-white hover:bg-indigo-800 transition-colors duration-300">
							Home
						</Link>
					</li>
					<li>
							<Link href="/about" className="font-semibold hover:text-blue-600 transition-colors duration-300">
							About Us
						</Link>
					</li>
					<li className="relative group">
							<Link href="/hotels" className="flex font-semibold items-center hover:text-blue-600 transition-colors duration-300">
							Hotels <MdOutlineKeyboardArrowDown className="ml-1" />
						</Link>
					</li>
					<li className="relative group">
							<Link href="/tour-booking" className="flex font-semibold items-center hover:text-blue-600 transition-colors duration-300">
							Tour Booking <MdOutlineKeyboardArrowDown className="ml-1" />
						</Link>
					</li>
					<li>
							<Link href="/gallery" className="font-semibold hover:text-blue-600 transition-colors duration-300">
							Gallery
						</Link>
					</li>
					<li>
							<Link href="/contact" className="font-semibold hover:text-blue-600 transition-colors duration-300">
							Contact Us
						</Link>
					</li>
				</ul>
			</div>

			{/* User & Consultation Button */}
			<div className="flex items-center space-x-4">
				<FaUserCircle className="text-3xl text-white-500 hover:text-blue-700 transition-colors duration-300 cursor-pointer" />
				<Link href="/consultation" className="px-6 py-2 rounded-full text-white font-medium bg-gradient-to-r from-blue-700 to-purple-800 hover:opacity-90 transition-opacity duration-300">
					Book A Free Consultation
				</Link>
			</div>

			</nav>
		</div>
	);
}