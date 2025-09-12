import Image from 'next/image';

export default function DealSection () {
	return (
		<section className="bg-purple-100 ">
			<div className="container mx-auto px-4 lg:px-8">
				<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
					<div className="mb-4 md:mb-0">
						<span className="text-sm font-semibold text-indigo-600 uppercase">OFFER</span>
						<h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mt-1">
							Exclusive Deals For You
						</h2>
					</div>
					<div className="md:w-1/2 lg:w-1/3 text-gray-600">
						<p className="text-sm">
							Lorem ipsum dolor sit amet consectetur. At lorem ut cursusi fringilla eu. Accumsan vuputate sit placrat enim present sita ultricies dignissm et.
						</p>
						{/* Navigation Arrows */}
						<div className="hidden md:flex items-center justify-end mt-4 space-x-2">
							<button className="p-2 border border-gray-300 rounded-full text-gray-500 hover:bg-gray-100 transition">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
									<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
								</svg>
							</button>
							<button className="p-2 border border-gray-300 rounded-full text-gray-500 hover:bg-gray-100 transition">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
									<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
								</svg>
							</button>
						</div>
					</div>
				</div>

				
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					
					<div className="relative rounded-xl overflow-hidden shadow-lg h-96 md:h-[450px]">
						<Image
							src="/images1/longstay.jpg"
							alt="Luxury hotel with pool"
							layout="fill"
							objectFit="cover"
							className="absolute z-0"
						/>
						
						<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>

						<div className="relative z-20 h-full flex flex-col justify-between p-6 text-white">
							
							<div className="self-start px-4 py-1 bg-white/30 backdrop-blur-sm rounded-full text-sm font-semibold tracking-wide">
								LONGSTAY
							</div>

							{/* Content */}
							<div className="flex flex-col">
								<h3 className="text-3xl md:text-4xl font-bold leading-tight">
									Avail Up to 55% Off
								</h3>
								<p className="mt-2 text-sm md:text-base text-gray-200">
									Lorem ipsum dolor sit amet consectetur proin netus cursus non.
								</p>
								<button className="mt-6 self-start px-6 py-3 rounded-full text-sm font-semibold transition-transform hover:scale-105 bg-indigo-600 text-white shadow-lg">
									Book Now
								</button>
							</div>
						</div>
					</div>
					<div className="relative rounded-xl overflow-hidden shadow-lg h-96 md:h-[450px]">
						<Image
							src="/images1/newlaunch.jpg" 
							alt="Mountain cabin resort"
							layout="fill"
							objectFit="cover"
							className="absolute z-0"
						/>
						
						<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>

						<div className="relative z-20 h-full flex flex-col justify-between p-6 text-white">
							
							<div className="self-start px-4 py-1 bg-white/30 backdrop-blur-sm rounded-full text-sm font-semibold tracking-wide">
								NEWLAUNCH
							</div>

							
							<div className="flex flex-col">
								<h3 className="text-3xl md:text-4xl font-bold leading-tight">
									Exclusive 30% Off
								</h3>
								<p className="mt-2 text-sm md:text-base text-gray-200">
									Lorem ipsum dolor sit amet consectetur proin netus cursus non.
								</p>
								<button className="mt-6 self-start px-6 py-3 rounded-full text-sm font-semibold transition-transform hover:scale-105 bg-indigo-600 text-white shadow-lg">
									Book Now
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
