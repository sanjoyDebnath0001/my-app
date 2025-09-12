"use client";
import { FaWifi, FaSnowflake, FaHandshake, FaShower, FaTv, FaShieldAlt } from "react-icons/fa";
import { MdLocalHotel } from "react-icons/md";
import { FaToilet } from "react-icons/fa6";

export default function Feature() {
	const features = [
		{
			icon: FaWifi,
			title: "Free Wifi",
			description: "Lorem ipsum dolor amet consectetur at lorem cursusi",
		},
		{
			icon: FaSnowflake,
			title: "AC",
			description: "Lorem ipsum dolor amet consectetur at lorem cursusi",
		},
		{
			icon: FaToilet,
			title: "Clean Toilets",
			description: "Lorem ipsum dolor amet consectetur at lorem cursusi",
		},
		{
			icon: MdLocalHotel,
			title: "Room Service",
			description: "Lorem ipsum dolor amet consectetur at lorem cursusi",
		},
		{
			icon: FaShower,
			title: "Hot Water",
			description: "Lorem ipsum dolor amet consectetur at lorem cursusi",
		},
		{
			icon: FaTv,
			title: "TV",
			description: "Lorem ipsum dolor amet consectetur at lorem cursusi",
		},
		{
			icon: FaShieldAlt,
			title: "24x7 Security",
			description: "Lorem ipsum dolor amet consectetur at lorem cursusi",
		},
	];

	return (
		<section className="py-16 px-4 sm:px-6 lg:px-8 bg-purple-100">
			<div className="max-w-4xl mx-auto text-center">
				<span className="text-sm font-semibold text-gray-500 tracking-wider">
					WHY CHOOSE GHAR BASAI
				</span>
				<h2 className="mt-2 text-4xl font-bold text-gray-800">
					We Make Every Journey Exceptional
				</h2>
				<p className="mt-4 text-gray-600">
					Lorem ipsum dolor sit amet consectetur. At lorem ut cursusui fringilla eu. Accumsan vulputate sit placirat enim present sita ultricies dignissim et.
				</p>
			</div>

			<div className=" mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-7xl mx-auto">
				{features.map((feature, index) => (
					<div key={index} className="p-6 md:p-8 rounded-lg shadow-lg border border-gray-300 text-center">
						<div className="bg-blue-600 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto text-white text-xl md:text-2xl mb-4 md:mb-6">
							<feature.icon />
						</div>
						<h3 className="font-semibold text-gray-800 text-base md:text-lg">{feature.title}</h3>
						<p className="mt-2 text-sm text-gray-600">{feature.description}</p>
					</div>
				))}
			</div>
		</section>
	);
}