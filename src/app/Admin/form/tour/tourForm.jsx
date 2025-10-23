"use client";
import React, { useState } from 'react';

const TourForm = ({ onClose, onSuccess }) => {
	const [formData, setFormData] = useState({
		title: '',
		location: '',
		price: '',
		description: '',
		activities: '', // comma-separated
		image: null,
		imagePreview: '',
	});

	const handleChange = (e) => {
		const { name, value, files } = e.target;
		if (name === 'image' && files && files[0]) {
			const file = files[0];
			const reader = new FileReader();
			reader.onloadend = () => setFormData((p) => ({ ...p, image: file, imagePreview: reader.result }));
			reader.readAsDataURL(file);
		} else setFormData((p) => ({ ...p, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!formData.title || !formData.location || !formData.price) {
			alert('Title, location and price are required');
			return;
		}

		const baseUrl = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:5000';
		const endpoint = `${baseUrl}/api/packages`;

		const payload = {
			title: formData.title,
			location: formData.location,
			price: formData.price,
			description: formData.description,
			activities: formData.activities ? formData.activities.split(',').map((s) => s.trim()) : [],
			image_url: formData.imagePreview || '',
		};

		try {
			const res = await fetch(endpoint, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(payload),
			});
			if (!res.ok) throw new Error(`Server ${res.status}`);
			const data = await res.json();
			if (typeof onSuccess === 'function') onSuccess(data);
			if (typeof onClose === 'function') onClose();
			alert('Tour saved');
		} catch (err) {
			console.error('Failed to save tour', err);
			alert('Failed to save tour: ' + (err.message || err));
		}
	};

	return (
		<div className="p-6">
			<form onSubmit={handleSubmit} className="space-y-4">
				<div>
					<label className="block text-sm font-medium">Title</label>
					<input name="title" value={formData.title} onChange={handleChange} className="w-full rounded border p-2" />
				</div>
				<div>
					<label className="block text-sm font-medium">Location</label>
					<input name="location" value={formData.location} onChange={handleChange} className="w-full rounded border p-2" />
				</div>
				<div>
					<label className="block text-sm font-medium">Price</label>
					<input name="price" type="number" value={formData.price} onChange={handleChange} className="w-full rounded border p-2" />
				</div>
				<div>
					<label className="block text-sm font-medium">Description</label>
					<textarea name="description" value={formData.description} onChange={handleChange} className="w-full rounded border p-2" />
				</div>
				<div>
					<label className="block text-sm font-medium">Activities (comma separated)</label>
					<input name="activities" value={formData.activities} onChange={handleChange} className="w-full rounded border p-2" />
				</div>
				<div>
					<label className="block text-sm font-medium">Image</label>
					<input name="image" type="file" accept="image/*" onChange={handleChange} />
					{formData.imagePreview && <img src={formData.imagePreview} alt="preview" className="mt-2 h-28 object-cover" />}
				</div>
				<div className="flex gap-2">
					<button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
					<button type="button" onClick={() => typeof onClose === 'function' ? onClose() : null} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
				</div>
			</form>
		</div>
	);
};

export default TourForm;
