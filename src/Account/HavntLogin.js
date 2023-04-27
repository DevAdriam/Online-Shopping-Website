import React, { useState } from "react";
import { useSelector } from "react-redux";
import { darkMode } from "../Products/ProductSlice";
import { NavLink } from "react-router-dom";

const HavntLogin = () => {
	const darkmode = useSelector(darkMode);
	const [register, Setregister] = useState(false);
	return (
		<div
			className={`w-[280px] h-[380px] rounded-3xl flex absolute top-[83px] right-[20px] shadow-md overflow-x-hidden overflow-y-scroll ${
				darkmode ? "bg-[var(--blue-minidark)]" : "bg-white"
			}`}
		>
			<div
				className={`${
					register && "translate-x-[-300px] transition-transform duration-500"
				} min-w-[280px] max-h-[380px]`}
			>
				<h1 className={`font-bold pt-6 pb-3 text-center text-xl`}>Log in to my account</h1>
				<h2 className={`  text-center text-md`}>Enter your email and password</h2>

				<form className="py-5 mx-3">
					<label htmlFor="email" className="mb-2 ml-1">
						Email
					</label>
					<input
						type="email"
						name="email"
						placeholder="Enter your email..."
						className="inline-block w-full mb-2  py-2 px-4 rounded-xl focus:outline-none border focus:shadow-cyan-400 focus:shadow-sm"
					/>

					<label htmlFor="password" className="mb-2 ml-1">
						Password
					</label>
					<input
						type="password"
						name="password"
						placeholder="Enter your password..."
						className="inline-block w-full  py-2 px-4 rounded-xl focus:outline-none border focus:shadow-cyan-400 focus:shadow-sm"
					/>

					<button
						className={`w-[99%] h-[40px] shadow-md leading-[10px] mx-auto my-5 rounded-full py-3 px-10 font-bold hover:opacity-90 hover:shadow-sm hover:shadow-slate-300/70 ${
							!darkmode ? "bg-[var(--blue-dark)] text-white" : "bg-white text-black"
						}`}
						type="submit"
					>
						Login
					</button>

					<h1 className="mx-auto text-sm">
						New customer?
						<NavLink
							className={`font-bold mx-2 hover:underline hover:underline-offset-auto p-0  ${
								darkmode ? "text-white" : "text-[var(--blue-dark)]"
							}`}
							onClick={() => Setregister(!register)}
						>
							Create Your Account
						</NavLink>
					</h1>
				</form>
			</div>

			<div
				className={`translate-x-[100px] min-w-[280px] ${
					register && "translate-x-[-279px] transition-transform duration-500"
				}`}
			>
				<h1 className={`font-bold pt-6 pb-3 text-center text-xl`}>Log in to my account</h1>
				<h2 className={`  text-center text-md`}>Enter your email and password</h2>

				<form className="py-5 mx-3">
					<label htmlFor="username" className="mb-2 ml-1">
						Username
					</label>
					<input
						type="text"
						name="username"
						placeholder="Enter your username..."
						className="inline-block w-full mb-2 py-2 px-4 rounded-xl focus:outline-none border focus:shadow-cyan-400 focus:shadow-sm"
					/>

					<label htmlFor="email" className="mb-2 ml-1">
						Email
					</label>
					<input
						type="email"
						name="email"
						placeholder="Enter your email..."
						className="inline-block w-full mb-2  py-2 px-4 rounded-xl focus:outline-none border focus:shadow-cyan-400 focus:shadow-sm"
					/>

					<label htmlFor="password" className="mb-2 ml-1">
						Password
					</label>
					<input
						type="password"
						name="password"
						placeholder="Enter your password..."
						className="inline-block w-full  py-2 px-4 rounded-xl focus:outline-none border focus:shadow-cyan-400 focus:shadow-sm"
					/>

					<label htmlFor="password" className="mb-2 ml-1">
						Confrim Password
					</label>
					<input
						type="password"
						name="password"
						placeholder="Confirm your password..."
						className="inline-block w-full  py-2 px-4 rounded-xl focus:outline-none border focus:shadow-cyan-400 focus:shadow-sm"
					/>

					<button
						className={`w-[99%] h-[40px] shadow-md leading-[10px] mx-auto my-5 rounded-full py-3 px-10 font-bold hover:opacity-90 hover:shadow-sm hover:shadow-slate-300/70 ${
							!darkmode ? "bg-[var(--blue-dark)] text-white" : "bg-white text-black"
						}`}
						type="submit"
					>
						Create Account
					</button>

					<h1 className="mx-auto text-sm">
						Already have an account?
						<NavLink
							className={`font-bold mx-2 hover:underline hover:underline-offset-auto p-0  ${
								darkmode ? "text-white" : "text-[var(--blue-dark)]"
							}`}
							onClick={() => Setregister(!register)}
						>
							Login
						</NavLink>
					</h1>
				</form>
			</div>
		</div>
	);
};

export default HavntLogin;
