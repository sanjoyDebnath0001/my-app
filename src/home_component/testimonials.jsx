"use client";
import { FaStar } from "react-icons/fa";

export default function Testimonials() {
	const testimonials = [
		{
			company: "Excellent Company",
			quote: "Lorem ipsum dolor sit amet consectetur. Facibus urna consectetur et risus commodo ultrices amet integer. A fames tempor egestas ipsum volutpat congue egestas et eget quis. Vitae interdum adipis ultricies vitae.",
			author: "John Warner",
			role: "CUSTOMER",
			rating: 5,
		},
		{
			company: "Excellent Company",
			quote: "Lorem ipsum dolor sit amet consectetur. Facibus urna consectetur et risus commodo ultrices amet integer. A fames tempor egestas ipsum volutpat congue egestas et eget quis. Vitae interdum adipis ultricies vitae.",
			author: "John Warner",
			role: "CUSTOMER",
			rating: 5,
		},
		{
			company: "Excellent Company",
			quote: "Lorem ipsum dolor sit amet consectetur. Facibus urna consectetur et risus commodo ultrices amet integer. A fames tempor egestas ipsum volutpat congue egestas et eget quis. Vitae interdum adipis ultricies vitae.",
			author: "John Warner",
			role: "CUSTOMER",
			rating: 5,
		},
	];

	return (
		<section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
			<div className="max-w-7xl mx-auto text-center">
				<span className="text-sm font-semibold text-gray-500 tracking-wider">TESTIMONIAL</span>
				<h2 className="mt-2 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-700">
					Kind Words from Our Community
				</h2>
			</div>

			<div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
				{testimonials.map((testimonial, index) => (
					<div key={index} className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
						<h3 className="text-xl font-semibold text-gray-800">{testimonial.company}</h3>
						<p className="mt-4 text-gray-600 italic">
							&ldquo;{testimonial.quote}&rdquo;
						</p>
						<div className="flex items-center mt-4">
							{[...Array(testimonial.rating)].map((_, i) => (
								<FaStar key={i} className="text-yellow-400" />
							))}
						</div>
						<div className="flex items-center mt-6 space-x-4">
							<div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0"></div>
							<div>
								<p className="font-semibold text-gray-800">{testimonial.author}</p>
								<p className="text-sm text-gray-500">{testimonial.role}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}