"use client";
import React, { useState } from "react";

const NewDataForm = ({ setBooked, onSuccess }) => {
	const [formData, setFormData] = useState({
		image: null,
		imagePreview: "",
		hotelname: "",
		location: "",
		price: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value, files } = e.target;

		if (name === "image" && files.length > 0) {
			const file = files[0];
			const reader = new FileReader();
			reader.onloadend = () => {
				setFormData((prev) => ({
					...prev,
					image: file,
					imagePreview: reader.result,
				}));
			};
			reader.readAsDataURL(file);
		} else {
			setFormData((prev) => ({ ...prev, [name]: value }));
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!formData.imagePreview || !formData.hotelname || !formData.location || !formData.price) {
			console.error("Please fill out all required fields.");
			return;
		}

		const baseUrl = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:5000';
		const endpoint = `${baseUrl}/api/hotels`;

		const payload = {
			// send both name and title for compatibility
			name: formData.hotelname,
			title: formData.hotelname,
			location: formData.location,
			price: formData.price,
			description: formData.message || '',
			image_url: formData.imagePreview, // base64 data URL
		};

		fetch(endpoint, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload),
		})
			.then(async (res) => {
				if (!res.ok) {
					const txt = await res.text().catch(() => null);
					throw new Error(`Server responded ${res.status}: ${txt || res.statusText}`);
				}
				return res.json();
			})
			.then((data) => {
				console.log('Hotel added:', data);
				if (typeof setBooked === 'function') setBooked(false); // close modal
				// reset form
				setFormData({ image: null, imagePreview: '', hotelname: '', location: '', price: '', message: '' });
				if (typeof onSuccess === 'function') onSuccess(data);
				alert('Hotel added successfully');
			})
			.catch((err) => {
				console.error('Failed to add hotel:', err);
				alert('Failed to add hotel: ' + (err.message || err));
			});
	};

	return (
		<div className="p-10 bg-gradient-to-r from-indigo-200 via-purple-300 to-yellow-100">
			<form onSubmit={handleSubmit} className=" space-y-6 max-w-lg mx-auto">
				<h1 className="text-xl text-blue-900">Add New Data</h1>


				<div>
					<label htmlFor="image" className="block text-sm font-medium text-gray-700">
						Upload Image
					</label>
					<input
						type="file"
						id="image"
						name="image"
						accept="image/*"
						onChange={handleChange}
						required
						className="mt-1 block w-full px-4 py-3 rounded-lg border-2 border-gray-300 
                    focus:outline-none focus:ring-2 focus:ring-blue-500 
                    focus:border-transparent transition duration-300"
					/>
					{formData.imagePreview && (
						<img
							src={formData.imagePreview}
							alt="Preview"
							className="mt-3 h-32 w-full object-cover rounded-lg border"
						/>
					)}
				</div>

				{/* Hotel Name */}
				<div>
					<label htmlFor="hotelname" className="block text-sm font-medium text-gray-700">
						Hotel Name
					</label>
					<input
						type="text"
						id="hotelname"
						name="hotelname"
						value={formData.hotelname}
						onChange={handleChange}
						required
						className="mt-1 block w-full px-4 py-3 rounded-lg border-2 border-gray-300 
                    focus:outline-none focus:ring-2 focus:ring-blue-500 
                    focus:border-transparent transition duration-300"
						placeholder="e.g. Ghar Bashi"
					/>
				</div>

				{/* Location */}
				<div>
					<label htmlFor="location" className="block text-sm font-medium text-gray-700">
						Location
					</label>
					<input
						type="text"
						id="location"
						name="location"
						value={formData.location}
						onChange={handleChange}
						required
						className="mt-1 block w-full px-4 py-3 rounded-lg border-2 border-gray-300 
                    focus:outline-none focus:ring-2 focus:ring-blue-500 
                    focus:border-transparent transition duration-300"
						placeholder="e.g. Darjeeling"
					/>
				</div>

				{/* Price (INR Only) */}
				<div>
					<label htmlFor="price" className="block text-sm font-medium text-gray-700">
						Price of Hotel Stay (INR)
					</label>
					<div className="relative mt-1">
						<span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
						<input
							type="number"
							id="price"
							name="price"
							value={formData.price}
							onChange={handleChange}
							required
							className="pl-8 block w-full px-4 py-3 rounded-lg border-2 border-gray-300 
                        focus:outline-none focus:ring-2 focus:ring-blue-500 
                        focus:border-transparent transition duration-300"
							placeholder="1000"
						/>
					</div>
				</div>

				{/* Message */}
				<div>
					<label htmlFor="message" className="block text-sm font-medium text-gray-700">
						Special Requests (Optional)
					</label>
					<textarea
						id="message"
						name="message"
						rows="4"
						value={formData.message}
						onChange={handleChange}
						className="mt-1 block w-full px-4 py-3 rounded-lg border-2 border-gray-300 
                    focus:outline-none focus:ring-2 focus:ring-blue-500 
                    focus:border-transparent transition duration-300"
						placeholder="Any restrictions or special instructions?"
					></textarea>
				</div>

				{/* Submit */}
				<button
					type="submit"
					className="w-full px-6 py-3 text-white font-semibold rounded-lg 
				bg-gradient-to-r from-blue-500 to-indigo-600 
                hover:from-blue-600 hover:to-indigo-700 
                transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-[1.02]"
				>
					ADD
				</button>
			</form>
		</div>
	);
};

export default NewDataForm;