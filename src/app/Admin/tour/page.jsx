"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { fetchTourData } from '@/tourcomponents/tours';
import TourForm from '@/app/Admin/form/tour/tourForm';

export default function AdminTourPage() {
	const [open, setOpen] = React.useState(false);
	const [tours, setTours] = React.useState([]);

	React.useEffect(() => {
		let mounted = true;
		fetchTourData().then((data) => {
			if (mounted) setTours(Array.isArray(data) ? data : []);
		});
		return () => (mounted = false);
	}, []);

	return (
		<div className="p-8 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-100 min-h-screen">
			<div className="container mx-auto">
				<div className="flex justify-between items-center mb-6">
					<h1 className="text-2xl font-bold">Manage Tours</h1>
					<button onClick={() => setOpen(true)} className="px-4 py-2 bg-green-600 text-white rounded">Add Tour</button>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{tours.map((t) => (
						<div key={t.id} className="bg-white rounded shadow p-4">
							<h2 className="font-semibold">{t.title}</h2>
							<p className="text-sm text-gray-600">{t.location}</p>
						</div>
					))}
				</div>

				{open && (
					<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
						<div className="bg-white rounded shadow p-6 max-w-lg w-full">
							<button className="mb-4 text-sm text-gray-600" onClick={() => setOpen(false)}>Close</button>
							<TourForm onClose={() => setOpen(false)} onSuccess={(newTour) => setTours((s) => [newTour, ...s])} />
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
