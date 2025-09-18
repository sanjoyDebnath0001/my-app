"use client";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

export default function Footer() {
	return (
		<footer className="bg-black text-white py-12">
			<div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">

				{/* Company Info */}
				<div>
					<h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-700">Ghar Basai</h2>
					<p className="mt-4 text-sm text-gray-400">
						Lorem ipsum dolor sit amet consectetur.<br />
						Massa sed felis viverra a elementum sit
						rutrum lacus et ut.
					</p>
					<div className="flex justify-center md:justify-start gap-4 mt-6 text-2xl">
						<Link href="#" className="text-gray-400 hover:text-blue-600 transition-colors duration-300">
							<FaFacebook />
						</Link>
						<Link href="#" className="text-white-400 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 hover:text-red-300 transition-colors duration-300">
							<FaInstagram />
						</Link>
						<Link href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
							<FaLinkedin />
						</Link>
					</div>
				</div>

				{/* Quick Links */}
				<div>
					<h3 className="text-lg font-semibold mb-4 border-b border-gray-500 pb-2 inline-block">Quick Links</h3>
					<ul className="space-y-2 text-sm text-gray-400">
						<li>
							<Link href="/" className="hover:text-white transition-colors duration-300">
								Home
							</Link>
						</li>
						<li>
							<Link href="/about" className="hover:text-white transition-colors duration-300">
								About Us
							</Link>
						</li>
						<li>
							<Link href="/hotels" className="hover:text-white transition-colors duration-300">
								Hotels
							</Link>
						</li>
						<li>
							<Link href="/gallery" className="hover:text-white transition-colors duration-300">
								Gallery
							</Link>
						</li>
						<li>
							<Link href="/faq" className="hover:text-white transition-colors duration-300">
								FAQ
							</Link>
						</li>
						<li>
							<Link href="/contact" className="hover:text-white transition-colors duration-300">
								Contact Us
							</Link>
						</li>
					</ul>
				</div>

				{/* Contact Us */}
				<div>
					<h3 className="text-lg font-semibold mb-4">Contact With Us</h3>
					<div className="space-y-4 text-gray-400">
						<p className="flex items-center justify-center md:justify-start gap-2">
							<MdLocationOn className="text-xl" /> 1234 Road, Info, Example 3029, Example
						</p>
						<p className="flex items-center justify-center md:justify-start gap-2">
							<MdPhone className="text-xl" /> 0123 456 789
						</p>
						<p className="flex items-center justify-center md:justify-start gap-2">
							<MdEmail className="text-xl" /> info@gharbasai.com
						</p>
					</div>
				</div>

				{/* Newsletter */}
				<div>
					<h3 className="text-lg font-semibold mb-4">Newsletter</h3>
					<div className="flex flex-col sm:flex-row gap-0">
						<input
							type="email"
							placeholder="Your E-mail Address"
							className="px-4 py-2 w-full sm:w-auto rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500 text-sm"
						/>
						<button className="px-1 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 text-sm">
							<Link href="/login" className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 text-sm">
								SUBSCRIBE
							</Link>
						</button>
					</div>
					<p className="text-sm text-gray-400 mb-4">
						Sign up with your email address to receive news and updates.
					</p>
				</div>
			</div>

			<div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
				Copyright &copy; {new Date().getFullYear()} Ghar Basai. All rights reserved.
			</div>
		</footer>
	);
}