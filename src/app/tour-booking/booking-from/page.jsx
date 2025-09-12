"use client";

import React, { useState } from 'react';

// Inline SVG components for the icons to keep it a single file
const CheckCircleIcon = (props) => (
	<svg
		{...props}
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
	>
		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
	</svg>
);

// Main Booking Form Component
const BookingForm = ({ setBooked }) => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		date: '',
		time: '',
		guests: 1,
		message: ''
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData(prev => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Client-side validation
		if (!formData.name || !formData.email || !formData.date || !formData.time || !formData.guests) {
			console.error('Please fill out all required fields.');
			return;
		}

		console.log('Booking submitted:', formData);
		setBooked(true); // Switch to the confirmation view
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-6">
			<h1 className="text-4xl font-bold text-center text-gray-800 mb-2">Book Now</h1>
			<p className="text-center text-gray-500 mb-6">Secure your spot in just a few clicks.</p>

			<div>
				<label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
				<input
					type="text"
					id="name"
					name="name"
					value={formData.name}
					onChange={handleChange}
					required
					className="mt-1 block w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
					placeholder="Jane Doe"
				/>
			</div>

			<div>
				<label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
				<input
					type="email"
					id="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					required
					className="mt-1 block w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
					placeholder="you@example.com"
				/>
			</div>

			<div className="flex flex-col sm:flex-row gap-4">
				<div className="w-full sm:w-1/2">
					<label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
					<input
						type="date"
						id="date"
						name="date"
						value={formData.date}
						onChange={handleChange}
						required
						className="mt-1 block w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
					/>
				</div>
				<div className="w-full sm:w-1/2">
					<label htmlFor="time" className="block text-sm font-medium text-gray-700">Time</label>
					<input
						type="time"
						id="time"
						name="time"
						value={formData.time}
						onChange={handleChange}
						required
						className="mt-1 block w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
					/>
				</div>
			</div>

			<div>
				<label htmlFor="guests" className="block text-sm font-medium text-gray-700">Number of Guests</label>
				<input
					type="number"
					id="guests"
					name="guests"
					value={formData.guests}
					onChange={handleChange}
					min="1" max="10"
					required
					className="mt-1 block w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
					placeholder="1"
				/>
			</div>

			<div>
				<label htmlFor="message" className="block text-sm font-medium text-gray-700">Special Requests (Optional)</label>
				<textarea
					id="message"
					name="message"
					rows="4"
					value={formData.message}
					onChange={handleChange}
					className="mt-1 block w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
					placeholder="Any dietary restrictions or special seating needs?"
				></textarea>
			</div>

			<button
				type="submit"
				className="w-full px-6 py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-[1.02]"
			>
				Book Now
			</button>
		</form>
	);
};

// Confirmation Message Component
const ConfirmationMessage = ({ setBooked }) => (
	<div className="text-center p-8">
		<CheckCircleIcon className="mx-auto h-16 w-16 text-green-500 animate-bounce" />
		<h2 className="mt-6 text-3xl font-bold text-gray-800">Booking Confirmed!</h2>
		<p className="mt-2 text-gray-600">Your booking has been received. We look forward to seeing you.</p>
		<button
			onClick={() => setBooked(false)}
			className="mt-6 px-6 py-3 font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
		>
			Book Another
		</button>
	</div>
);

export default function App() {
	const [isBooked, setBooked] = useState(false);

	return (
		<div
			className="flex items-center justify-center min-h-screen p-4 bg-[url('https://images.unsplash.com/photo-1549488344-93e157778b46?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center font-inter relative"
		>
			<div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-800 opacity-60 backdrop-blur-md"></div>
			<div className="relative z-10 w-full max-w-lg p-8 bg-white bg-opacity-90 rounded-xl shadow-2xl transition-all duration-300 transform scale-100">
				{isBooked ? (
					<ConfirmationMessage setBooked={setBooked} />
				) : (
					<BookingForm setBooked={setBooked} />
				)}
			</div>
		</div>
	);
}
