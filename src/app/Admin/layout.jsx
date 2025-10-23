'use client'
import React, { useState } from "react";
import { Home, User, Building, CalendarDays, Earth, MapPlus, Menu, Scroll, X, WholeWord } from "lucide-react";
import Link from "next/link";
export default function AdminHotelUpdatelayout({ children }) {
	const [isOpen, setIsOpen] = useState(false);
	const [isCollapsed, setIsCollapsed] = useState(false)

	return (
		<tr><th>
			<div className={` z-20 top-0 left-0 h-full bg-gray-900 text-white transition-all duration-300 ${isCollapsed ? "w-16" : "w-64"} ${isOpen ? "translate-x-0" : "-translate-x-full"}md:translate-x-o`}>
				<div className="flex item-center justify-between p-4 border-bborder-gray-600">
					{!isCollapsed && <span className="text-lg front-bold">Admin Panel</span>}
					<button
						onClick={()=>setIsCollapsed(!isCollapsed)}
						className="p-2 hover:bg-gray-800 rounded-md hidden md:block">
						{isCollapsed ? <Menu/>:<Scroll/>}
					</button>
					<button
						onClick={() => setIsOpen(false)}
						className="p-2 md:hidden"
					>
						<X/>
					</button>
				</div>
				<nav className="mt-4">
					<ul>
						<li>
							<Link
								href="/Admin/landing"
								className="flex item-center gap-3 p-4 hover:bg-blue-400 transition-colors"
								onClick={()=>setIsOpen(false)}
							>
								<Home className="w-5 h-5" />
								{!isCollapsed && <span>Admin Home</span>}
							</Link>
						</li>
						<li>
							<Link
								href="/Admin/update-hotel"
								className="flex item-center gap-3 p-4 hover:bg-blue-400 transition-colors"
								onClick={() => setIsOpen(false)}
							>
								<Building className="w-5 h-5" />
								{!isCollapsed && <span>Hotel info</span>}
							</Link>
						</li>
						<li>
							<Link
								href="/Admin/user"
								className="flex item-center gap-3 p-4 hover:bg-blue-400 transition-colors"
								onClick={() => setIsOpen(false)}
							>
								<User className="w-5 h-5" />
								{!isCollapsed && <span>User info</span>}
							</Link>
						</li>
						<li>
							<Link
								href="/Admin/tour"
								className="flex item-center gap-3 p-4 hover:bg-blue-400 transition-colors"
								onClick={() => setIsOpen(false)}
							>
								<MapPlus className="w-5 h-5" />
								{!isCollapsed && <span>Tour info</span>}
							</Link>
						</li>
						<li>
							<Link
								href="/Admin/gallery"
								className="flex item-center gap-3 p-4 hover:bg-blue-400 transition-colors"
								onClick={() => setIsOpen(false)}
							>
								<Earth className="w-5 h-5" />
								{!isCollapsed && <span>gallery</span>}
							</Link>
						</li>
						<li>
							<Link
								href="/Admin/Event"
								className="flex item-center gap-3 p-4 hover:bg-blue-400 transition-colors"
								onClick={() => setIsOpen(false)}
							>
								<CalendarDays className="w-5 h-5" />
								{!isCollapsed && <span>Event list</span>}
							</Link>
						</li>
					</ul>
			</nav>
			</div>
		</th>
		<th>
			{children}
		</th>
		</tr>
	);
}