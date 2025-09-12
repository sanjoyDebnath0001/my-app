"use client"
import React, { useState } from 'react';

// Icon components are defined here as inline SVG for the single-file setup
const MailIcon = (props) => (
	<svg
		{...props}
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<rect width="20" height="16" x="2" y="4" rx="2" />
		<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
	</svg>
);

const LockIcon = (props) => (
	<svg
		{...props}
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
		<path d="M7 11V7a5 5 0 0 1 10 0v4" />
	</svg>
);

const UserIcon = (props) => (
	<svg
		{...props}
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
		<circle cx="12" cy="7" r="4" />
	</svg>
);

const EyeIcon = (props) => (
	<svg
		{...props}
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
		<circle cx="12" cy="12" r="3" />
	</svg>
);

const EyeOffIcon = (props) => (
	<svg
		{...props}
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path d="M2.062 12.062a10.05 10.05 0 0 1-1.062-1.062M12 5c7 0 10 7 10 7-3 4-6 6-10 6" />
		<path d="M12 5c-7 0-10 7-10 7s3 7 10 7" />
		<line x1="2" x2="22" y1="2" y2="22" />
	</svg>
);

// Logo SVG Component
const LogoSVG = () => (
	<svg
		className="h-24 w-24 text-blue-500 animate-pulse"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path d="M12 2L2 7l10 5 10-5-10-5z" />
		<path d="M2 17l10 5 10-5" />
		<path d="M2 12l10 5 10-5" />
	</svg>
);


// Login Form Component
const LoginForm = ({ toggleForm }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [error, setError] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		setError('');

		// Client-side validation
		if (!email || !password) {
			setError('Please fill out all fields.');
			return;
		}

		// Simulate form submission
		console.log('Login form submitted:', { email, password });
		setError('Login successful! (Front-end only)');
	};

	return (
		<div className="w-full max-w-sm p-8 space-y-6 bg-white bg-opacity-90 backdrop-blur-md rounded-xl shadow-2xl transition-all duration-500 transform border-2 border-transparent border-t-blue-500 border-r-indigo-500">
			<div className="flex justify-center mb-4">
				<LogoSVG />
			</div>
			<h2 className="text-3xl font-bold text-center text-gray-800">Login</h2>
			<form onSubmit={handleSubmit} className="space-y-4">
				{error && (
					<div className="p-3 text-sm text-red-700 bg-red-100 rounded-lg">
						{error}
					</div>
				)}
				<div className="relative">
					<MailIcon className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
					<input
						type="email"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="w-full pl-10 pr-4 py-3 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300"
					/>
				</div>
				<div className="relative">
					<LockIcon className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
					<input
						type={showPassword ? 'text' : 'password'}
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="w-full pl-10 pr-10 py-3 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300"
					/>
					<button
						type="button"
						onClick={() => setShowPassword(!showPassword)}
						className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
					>
						{showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
					</button>
				</div>
				<button
					type="submit"
					className="w-full px-6 py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-[1.02]"
				>
					Login
				</button>
			</form>
			<p className="text-sm text-center text-gray-500">
				Don't have an account?{' '}
				<button
					onClick={toggleForm}
					className="font-semibold text-blue-600 hover:text-blue-500 transition-colors duration-300"
				>
					Register here
				</button>
			</p>
		</div>
	);
};

// Registration Form Component
const RegistrationForm = ({ toggleForm }) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [error, setError] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		setError('');

		// Client-side validation
		if (!name || !email || !password || !confirmPassword) {
			setError('Please fill out all fields.');
			return;
		}
		if (password !== confirmPassword) {
			setError('Passwords do not match.');
			return;
		}
		if (password.length < 6) {
			setError('Password must be at least 6 characters long.');
			return;
		}

		// Simulate form submission
		console.log('Registration form submitted:', { name, email, password });
		setError('Registration successful! (Front-end only)');
	};

	return (
		<div className="w-full max-w-sm p-8 space-y-6 bg-white bg-opacity-90 backdrop-blur-md rounded-xl shadow-2xl transition-all duration-500 transform border-2 border-transparent border-t-blue-500 border-r-indigo-500">
			<div className="flex justify-center mb-4">
				<LogoSVG />
			</div>
			<h2 className="text-3xl font-bold text-center text-gray-800">Register</h2>
			<form onSubmit={handleSubmit} className="space-y-4">
				{error && (
					<div className="p-3 text-sm text-red-700 bg-red-100 rounded-lg">
						{error}
					</div>
				)}
				<div className="relative">
					<UserIcon className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
					<input
						type="text"
						placeholder="Full Name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						className="w-full pl-10 pr-4 py-3 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300"
					/>
				</div>
				<div className="relative">
					<MailIcon className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
					<input
						type="email"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="w-full pl-10 pr-4 py-3 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300"
					/>
				</div>
				<div className="relative">
					<LockIcon className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
					<input
						type={showPassword ? 'text' : 'password'}
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="w-full pl-10 pr-10 py-3 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300"
					/>
					<button
						type="button"
						onClick={() => setShowPassword(!showPassword)}
						className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
					>
						{showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
					</button>
				</div>
				<div className="relative">
					<LockIcon className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
					<input
						type={showPassword ? 'text' : 'password'}
						placeholder="Confirm Password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						className="w-full pl-10 pr-10 py-3 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300"
					/>
					<button
						type="button"
						onClick={() => setShowPassword(!showPassword)}
						className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
					>
						{showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
					</button>
				</div>
				<button
					type="submit"
					className="w-full px-6 py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-[1.02]"
				>
					Register
				</button>
			</form>
			<p className="text-sm text-center text-gray-500">
				Already have an account?{' '}
				<button
					onClick={toggleForm}
					className="font-semibold text-blue-600 hover:text-blue-500 transition-colors duration-300"
				>
					Login here
				</button>
			</p>
		</div>
	);
};


// Main App Component
export default function App() {
	const [isLogin, setIsLogin] = useState(true);

	// Function to switch between the forms
	const toggleForm = () => {
		setIsLogin(!isLogin);
	};

	return (
		<div
			className="flex items-center justify-center min-h-screen bg-[url('https://images.unsplash.com/photo-1604147706283-d52f9c57d770?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center font-inter relative"
		>
			<div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-800 opacity-60 backdrop-blur-md"></div>
			<div className="relative z-10 transition-transform duration-500">
				{isLogin ? <LoginForm toggleForm={toggleForm} /> : <RegistrationForm toggleForm={toggleForm} />}
			</div>
		</div>
	);
}