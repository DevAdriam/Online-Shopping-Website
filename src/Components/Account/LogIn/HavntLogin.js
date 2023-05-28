import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { darkMode } from "../../Products/ProductSlice";
import { updateAccount, login, pwCondition, password, userData, loggIn, accDoesntExist } from "../AccMain/Accslice";

import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { toast } from "react-toastify";

const HavntLogin = () => {
	const darkmode = useSelector(darkMode);
	const confirmPassword = useSelector(pwCondition);
	const personinfo = useSelector(userData);
	const loggingIn = useSelector(loggIn);
	console.log(personinfo);

	const [register, Setregister] = useState(false);
	const [showpw, Setshowpw] = useState(false);
	const [confirmshowpw, Setconfirmshowpw] = useState(false);

	let usernameRef = useRef();
	let emailRef = useRef();
	let passwordRef = useRef();
	let confirmpwRef = useRef();

	const loginemailRef = useRef();
	const loginpwRef = useRef();

	const dispatch = useDispatch();

	const createAcc = (e) => {
		e.preventDefault();

		if (passwordRef.current.value === confirmpwRef.current.value) {
			const registerData = {
				username: usernameRef.current.value,
				email: emailRef.current.value,
				password: passwordRef.current.value,
				phone: null,
				address: "Yangon",
				gender: null,
				about: "",
				image: "",
			};

			dispatch(updateAccount(registerData));
			dispatch(login());
			dispatch(password(true));
			toast.success("Account successfully created!");

			console.log(registerData);
			usernameRef.current.value = "";
			emailRef.current.value = "";
			passwordRef.current.value = "";
			confirmpwRef.current.value = "";
		} else {
			dispatch(password(false));
		}
	};

	const loginToAcc = (e) => {
		const logindata = {
			email: loginemailRef.current.value,
			password: loginpwRef.current.value,
		};
		console.warn(logindata);

		const getDatafromLS = {
			email: personinfo.email,
			password: personinfo.password,
		};

		if (logindata.email === getDatafromLS.email && logindata.password === getDatafromLS.password) {
			dispatch(login());
			dispatch(accDoesntExist(false));
			toast.success("Log in to your account!");
		} else {
			dispatch(accDoesntExist(true));
		}
	};
	return (
		<div
			className={`w-[280px] min-h-[280px] rounded-3xl flex absolute top-[83px] right-[20px] shadow-md overflow-x-hidden  ${
				darkmode ? "bg-[var(--blue-minidark)]" : "bg-white"
			}`}
		>
			<div
				className={`${
					register && "translate-x-[-300px] transition-transform duration-500"
				} min-w-[280px] max-h-[380px]`}
			>
				<h1 className={`font-bold pt-8  text-center text-xl`}>Log in to my account</h1>

				<form className="py-5 mx-3">
					<label htmlFor="email" className="mb-2 ml-1">
						Email
					</label>
					<input
						type="email"
						name="email"
						autoComplete
						ref={loginemailRef}
						placeholder="Enter your email..."
						className={`inline-block w-full py-2 px-4 rounded-xl focus:outline-none border focus:shadow-cyan-400 focus:shadow-sm 
								${loggingIn && "border-red-500 focus:shadow-red-500"}
							`}
					/>

					<label htmlFor="password" className=" ml-1 mt-5 block">
						Password
					</label>
					<span className="relative block">
						<input
							type={showpw ? "text" : "password"}
							name="password"
							autoComplete
							ref={loginpwRef}
							placeholder="Enter your password..."
							className={`inline-block w-full  py-2 px-4 rounded-xl focus:outline-none border focus:shadow-cyan-400 focus:shadow-sm 
								${loggingIn && "border-red-500 focus:shadow-red-500 "}
							`}
						/>
						{showpw ? (
							<AiOutlineEyeInvisible
								size={20}
								fill="black"
								className="absolute right-3 top-[10px] cursor-pointer"
								onClick={() => Setshowpw(!showpw)}
							/>
						) : (
							<AiOutlineEye
								size={20}
								fill="black"
								className="absolute right-3 top-[10px] cursor-pointer"
								onClick={() => Setshowpw(!showpw)}
							/>
						)}
					</span>
					{loggingIn && <span className="text-red-500 text-sm">Email or Password is incorrect</span>}

					<button
						className={`w-[99%] h-[40px] shadow-md leading-[10px] mx-auto my-5 rounded-full py-3 px-10 font-bold hover:opacity-90 hover:shadow-sm hover:shadow-slate-300/70 ${
							!darkmode ? "bg-[var(--blue-dark)] text-white/90" : "bg-white text-black"
						}`}
						type="button"
						onClick={loginToAcc}
					>
						Login
					</button>

					<h1 className="mx-auto text-sm">
						New customer?
						<NavLink
							className={`font-bold mx-2 hover:underline hover:underline-offset-auto p-0  ${
								darkmode ? "text-white/90" : "text-[var(--blue-dark)]"
							}`}
							onClick={() => Setregister(!register)}
						>
							Create Your Account
						</NavLink>
					</h1>

					<h1 className={`mx-auto pt-3 text-sm text-gray-500 ${darkmode && "text-white/90"}`}>
						by creating your account , you will get
						<span
							className={`font-bold text-[var(--blue-dark)] mx-1 ${
								darkmode && "text-sky-500"
							} text-sm leading-5`}
						>
							10% Discount Promocode
						</span>
					</h1>

					<h1 className={`mx-auto pt-3 text-sm text-gray-500 ${darkmode && "text-white/90"}`}>
						(Promocode will be automatically added to your cart!)
					</h1>
				</form>
			</div>

			<div className={` min-w-[280px] ${register && "translate-x-[-280px] transition-transform duration-500"}`}>
				<h1 className={`font-bold pt-6 pb-1 text-center text-xl`}>Register Your Account</h1>

				<form className="py-5 mx-3" onSubmit={createAcc}>
					<label htmlFor="username" className="mb-2 ml-1">
						Username
					</label>
					<input
						type="text"
						name="username"
						autoComplete
						ref={usernameRef}
						placeholder="Enter your username..."
						className="inline-block w-full mb-2 py-2 px-4 rounded-xl focus:outline-none border focus:shadow-cyan-400 focus:shadow-sm"
					/>

					<label htmlFor="email" className="mb-2 ml-1">
						Email
					</label>
					<input
						type="email"
						name="email"
						autoComplete
						ref={emailRef}
						placeholder="Enter your email..."
						className="inline-block w-full mb-2  py-2 px-4 rounded-xl focus:outline-none border focus:shadow-cyan-400 focus:shadow-sm"
					/>

					<label htmlFor="password" className="mb-2 ml-1">
						Password
					</label>
					<span className="relative block">
						<input
							type={showpw ? "text" : "password"}
							name="password"
							autoComplete
							ref={passwordRef}
							placeholder="Enter your password..."
							className={`inline-block w-full  py-2 px-4 rounded-xl focus:outline-none border focus:shadow-cyan-400 focus:shadow-sm ${
								confirmPassword === false && "border-red-600"
							}`}
						/>
						{showpw ? (
							<AiOutlineEyeInvisible
								size={20}
								fill="black"
								className="absolute right-3 top-[10px] cursor-pointer"
								onClick={() => Setshowpw(!showpw)}
							/>
						) : (
							<AiOutlineEye
								size={20}
								fill="black"
								className="absolute right-3 top-[10px] cursor-pointer"
								onClick={() => Setshowpw(!showpw)}
							/>
						)}
					</span>

					<label htmlFor="confirmpw" className="mb-2 ml-1">
						Confrim Password
					</label>

					<span className="relative block">
						<input
							type={confirmshowpw ? "text" : "password"}
							name="confirmpw"
							autoComplete
							ref={confirmpwRef}
							placeholder="Confirm your password..."
							className={`inline-block w-full  py-2 px-4 rounded-xl focus:outline-none border focus:shadow-cyan-400 focus:shadow-sm ${
								confirmPassword === false && "border-red-600"
							}`}
						/>
						{confirmshowpw ? (
							<AiOutlineEyeInvisible
								size={20}
								fill="black"
								className="absolute right-3 top-[10px] cursor-pointer"
								onClick={() => Setconfirmshowpw(!confirmshowpw)}
							/>
						) : (
							<AiOutlineEye
								size={20}
								fill="black"
								className="absolute right-3 top-[10px] cursor-pointer"
								onClick={() => Setconfirmshowpw(!confirmshowpw)}
							/>
						)}
					</span>

					{confirmPassword === false && <span className="text-sm text-red-600">The password doesn't rematch</span>}

					<button
						className={`w-[99%] h-[40px] shadow-md leading-[10px] mx-auto my-5 rounded-full py-3 px-10 font-bold hover:opacity-90 hover:shadow-sm hover:shadow-slate-300/70 ${
							!darkmode ? "bg-[var(--blue-dark)] text-white/90" : "bg-white text-black"
						}`}
						type="submit"
					>
						Create Account
					</button>

					<h1 className="mx-auto text-sm">
						Already have an account?
						<NavLink
							className={`font-bold mx-2 hover:underline hover:underline-offset-auto p-0  ${
								darkmode ? "text-white/90" : "text-[var(--blue-dark)]"
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
