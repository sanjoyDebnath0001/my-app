// src/hotelcomponents/hotels.js

export const hotelData = [
	{
		id: "hotel-1",
		title: "Ghar Basai Prime the King's Court With Pool and Bar",
		location: "Darjeeling",
		price: "2,393",
		reviews: "1,244 reviews",
		rating: 4.25,
		image: "/image/beach.jpg",
		description: "A stunning seaside retreat with a private beach, offering luxurious rooms and world-class dining.",
		amenities: ["Free Wi-Fi", "Swimming Pool", "Restaurant", "Bar", "24/7 Front Desk", "Room Service"],
	},
	{
		id: "hotel-2",
		title: "Mountain Retreat Lodge",
		location: "Shimla",
		price: "1,800",
		reviews: "890 reviews",
		rating: 4.5,
		image: "/image/mountain.jpg",
		description: "Experience serene mountain living with breathtaking views and cozy fireplaces.",
		amenities: ["Free Wi-Fi", "Fireplace", "Breakfast", "Hiking Trails"],
	},
	{
		id: "hotel-3",
		title: "City Central Inn",
		location: "New Delhi",
		price: "3,500",
		reviews: "2,100 reviews",
		rating: 4.8,
		image: "/bg/next-adven.jpg",
		description: "Located in the heart of the city, perfect for business and leisure travelers.",
		amenities: ["Business Center", "Gym", "Free Parking", "Restaurant"],
	},
	{
		id: "hotel-4",
		title: "Lakeside Cabin",
		location: "Kashmir",
		price: "2,000",
		reviews: "560 reviews",
		rating: 4.1,
		image: "/images/lakeside-cabin.jpg",
		description: "A rustic and charming cabin right on the lake, ideal for a quiet getaway.",
		amenities: ["Private Dock", "Fishing", "Kitchenette", "BBQ Area"],
	},
	{
		id: "hotel-5",
		title: "Riverside Cottage",
		location: "Rishikesh",
		price: "2,500",
		reviews: "1,500 reviews",
		rating: 4.6,
		image: "/image/riverside.jpg",
		description: "A peaceful cottage next to the river, perfect for relaxation and meditation.",
		amenities: ["Yoga Studio", "Outdoor Deck", "River Access"],
	},
	{
		id: "hotel-6",
		title: "Desert Oasis Resort",
		location: "Jaisalmer",
		price: "2,800",
		reviews: "950 reviews",
		rating: 4.4,
		image: "/image/desert.jpg",
		description: "An elegant resort offering an authentic desert experience with modern comforts.",
		amenities: ["Camel Rides", "Pool", "Buffet Dinner", "Cultural Shows"],
	},
];

/**
 * Fetch hotel data from the app route /api/hotel and normalize to front-end shape.
 * Falls back to the static `hotelData` on error.
 * @param {AbortSignal} [signal]
 */
export async function fetchHotelData(signal) {
	const url = '/api/hotel';
	try {
		const res = await fetch(url, { signal });
		if (!res.ok) throw new Error(`HTTP ${res.status}`);
		const data = await res.json();

		// Normalize shape: accept array or { hotels: [...] }
		let items = Array.isArray(data) ? data : data.hotels || data.data || (data.item ? [data.item] : null);
		if (!items) items = [data];

		const normalized = items.map((h) => ({
			id: h.id || `hotel-${h.id}` || null,
			title: h.title || h.name || '',
			location: h.location || h.city || '',
			price: h.price != null ? String(h.price) : (h.price_text || ''),
			reviews: h.reviews || '',
			rating: h.rating != null ? Number(h.rating) : null,
			image: h.image || h.image_url || h.imageUrl || '',
			description: h.description || '',
			amenities: Array.isArray(h.amenities) ? h.amenities : (h.amenities ? [h.amenities] : []),
		}));

		return normalized;
	} catch (err) {
		// eslint-disable-next-line no-console
		console.warn('fetchHotelData failed, falling back to static hotelData:', err.message || err);
		return hotelData;
	}
}