export const tourData = [
	{
		id: "tour-1",
		title: "Himalayan Trekking Expedition",
		location: "Nepal",
		price: "5,000",
		reviews: "980 reviews",
		rating: 4.8,
		image: "/image/himalayan-trek.jpg",
		description: "An unforgettable 14-day trekking adventure through the stunning Himalayan range, perfect for experienced hikers.",
		activities: ["Trekking", "Camping", "Mountain Climbing", "Stargazing"],
	},
	{
		id: "tour-2",
		title: "Golden Triangle Tour",
		location: "India",
		price: "1,500",
		reviews: "2,500 reviews",
		rating: 4.9,
		image: "/image/golden-triangle.jpg",
		description: "A classic 7-day tour covering the historical wonders of Delhi, Agra, and Jaipur.",
		activities: ["Sightseeing", "Historical Tours", "Shopping", "Food Tasting"],
	},
	{
		id: "tour-3",
		title: "Kerala Backwaters Cruise",
		location: "Kerala, India",
		price: "2,200",
		reviews: "1,800 reviews",
		rating: 4.7,
		image: "/image/backwaters.jpg",
		description: "Relax on a houseboat as you glide through the serene backwaters of Kerala, a true escape from the city.",
		activities: ["Houseboat Cruise", "Village Tours", "Bird Watching", "Ayurvedic Spa"],
	},
	{
		id: "tour-4",
		title: "Safari in Masai Mara",
		location: "Kenya",
		price: "8,000",
		reviews: "1,100 reviews",
		rating: 4.9,
		image: "/image/safari.jpg",
		description: "A wildlife photographer's dream, this safari tour offers a chance to see the 'Big Five' in their natural habitat.",
		activities: ["Game Drives", "Hot Air Balloon Safari", "Cultural Visits"],
	},
	{
		id: "tour-5",
		title: "Cherry Blossom Festival Tour",
		location: "Tokyo, Japan",
		price: "3,500",
		reviews: "3,200 reviews",
		rating: 5.0,
		image: "/image/cherry-blossom.jpg",
		description: "Witness the stunning beauty of Japan during the cherry blossom season with this guided cultural tour.",
		activities: ["Temple Visits", "Tea Ceremony", "Festival Viewing", "Local Market Exploration"],
	},
];

/**
 * Fetch tour/package data from local API and normalize to the front-end shape.
 * Falls back to `tourData` if the fetch fails.
 * @param {AbortSignal} [signal]
 * @returns {Promise<Array>} Array of tour/package objects
 */
export async function fetchTourData(signal) {
	const url = 'http://localhost:5001/api/packages';
	try {
		const res = await fetch(url, { signal });
		if (!res.ok) throw new Error(`HTTP ${res.status}`);
		const data = await res.json();

		// Support multiple API shapes: array, { packages: [...] }, { data: [...] }
		let items = Array.isArray(data) ? data : data.packages || data.data || (data.item ? [data.item] : null);
		if (!items) items = [data];

		// Normalize each package to front-end `tourData` shape
		const normalized = items.map((pkg) => {
			// pkg may have fields: title, name, image_url, image, activities (JSON string or array), price
			const activitiesRaw = pkg.activities || pkg.activity || pkg.activities_json || null;
			let activities = null;
			if (activitiesRaw) {
				if (typeof activitiesRaw === 'string') {
					try { activities = JSON.parse(activitiesRaw); } catch { activities = [activitiesRaw]; }
				} else if (Array.isArray(activitiesRaw)) {
					activities = activitiesRaw;
				} else {
					activities = [String(activitiesRaw)];
				}
			}

			return {
				id: pkg.id ? `tour-${pkg.id}` : pkg.id || pkg._id || null,
				title: pkg.title || pkg.name || pkg.name_text || '',
				location: pkg.location || pkg.place || '',
				price: pkg.price != null ? String(pkg.price) : (pkg.price_text || ''),
				reviews: pkg.reviews || '',
				rating: pkg.rating != null ? Number(pkg.rating) : null,
				image: pkg.image || pkg.image_url || pkg.imageUrl || '',
				description: pkg.description || pkg.itinerary || pkg.details || '',
				activities: activities || [],
			};
		});

		return normalized;
	} catch (err) {
		// eslint-disable-next-line no-console
		console.warn('fetchTourData failed, falling back to static tourData:', err.message || err);
		return tourData;
	}
}