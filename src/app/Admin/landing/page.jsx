
export default function () {
	
	return (
		<div>
		<main class="flex-1 overflow-y-auto p-8">
			<header class="flex justify-between items-center mb-6">
				<h1 class="text-3xl font-semibold">Dashboard</h1>
				<div class="flex items-center space-x-4">
					<input type="text" placeholder="Search..." class="bg-gray-700 rounded-full px-4 py-2 text-sm text-gray-100 focus:outline-none"/>
						<button class="text-gray-400 hover:text-white transition-colors duration-200">
							<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
								<path d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 9a1 1 0 112 0 1 1 0 01-2 0zm1-5a1 1 0 112 0 1 1 0 01-2 0zm-5 5a1 1 0 112 0 1 1 0 01-2 0zm8 0a1 1 0 112 0 1 1 0 01-2 0z" />
							</svg>
						</button>
						<div class="w-8 h-8 rounded-full bg-gray-600"></div>
				</div>
			</header>

			<section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
				<div class="bg-gray-800 rounded-lg shadow-md p-6">
					<h3 class="text-lg font-medium text-gray-400">Room Occupancy</h3>
					<p class="text-4xl font-bold mt-2 text-white">75%</p>
				</div>
				<div class="bg-gray-800 rounded-lg shadow-md p-6">
					<h3 class="text-lg font-medium text-gray-400">Reservations Today</h3>
					<p class="text-4xl font-bold mt-2 text-white">12</p>
				</div>
				<div class="bg-gray-800 rounded-lg shadow-md p-6">
					<h3 class="text-lg font-medium text-gray-400">Check-ins</h3>
					<p class="text-4xl font-bold mt-2 text-white">8</p>
				</div>
				<div class="bg-gray-800 rounded-lg shadow-md p-6">
					<h3 class="text-lg font-medium text-gray-400">Check-outs</h3>
					<p class="text-4xl font-bold mt-2 text-white">4</p>
				</div>
			</section>

			<section class="bg-gray-800 rounded-lg shadow-md p-6">
				<div class="flex justify-between items-center mb-4">
					<h2 class="text-xl font-semibold">Room Management</h2>
					<button class="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-lg text-sm font-medium">
						+ Add New Room
					</button>
				</div>
				<div class="overflow-x-auto">
					<table class="w-full text-left">
						<thead>
							<tr class="bg-gray-700">
								<th class="p-4 rounded-tl-lg">Room Number</th>
								<th class="p-4">Room Type</th>
								<th class="p-4">Status</th>
								<th class="p-4 rounded-tr-lg">Price per Night</th>
							</tr>
						</thead>
						<tbody>
							<tr class="border-b border-gray-700">
								<td class="p-4">101</td>
								<td class="p-4">Single</td>
								<td class="p-4">
									<span class="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">Available</span>
								</td>
								<td class="p-4">$100</td>
							</tr>
							<tr class="border-b border-gray-700">
								<td class="p-4">102</td>
								<td class="p-4">Double</td>
								<td class="p-4">
									<span class="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">Occupied</span>
								</td>
								<td class="p-4">$150</td>
							</tr>
							<tr class="border-b border-gray-700">
								<td class="p-4">103</td>
								<td class="p-4">Suite</td>
								<td class="p-4">
									<span class="bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded-full">Under Maintenance</span>
								</td>
								<td class="p-4">$250</td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>
		</main>
	</div>
	);
}