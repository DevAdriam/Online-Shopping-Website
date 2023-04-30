import React, { useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fillinputs, inputs, updateAccount, userData } from "./Accslice";
import { darkMode } from "../Products/ProductSlice";
import { toast } from "react-toastify";
const Accinfo = () => {
	const darkmode = useSelector(darkMode);
	const dispatch = useDispatch();
	const personinfo = useSelector(userData);
	const hasinputs = useSelector(inputs);
	const oldpassword = personinfo.password;
	console.log(oldpassword);
	console.log(personinfo);

	let usernameRef = useRef();
	let emailRef = useRef();
	let genderRef = useRef();
	let phoneRef = useRef();
	let addressRef = useRef();
	let aboutRef = useRef();

	const updAccount = (e) => {
		e.preventDefault();
		if (
			usernameRef.current.value &&
			emailRef.current.value &&
			genderRef.current.value &&
			phoneRef.current.value &&
			addressRef.current.value &&
			aboutRef.current.value
		) {
			const personalInfo = {
				username: usernameRef.current.value,
				email: emailRef.current.value,
				phone: phoneRef.current.value,
				address: addressRef.current.value,
				gender: genderRef.current.value,
				about: aboutRef.current.value,
				password: oldpassword,
			};
			console.log(personalInfo);
			dispatch(updateAccount(personalInfo));
			dispatch(fillinputs(false));

			usernameRef.current.value = "";
			emailRef.current.value = "";
			phoneRef.current.value = "";
			addressRef.current.value = "";
			genderRef.current.value = "";
			aboutRef.current.value = "";
		} else {
			dispatch(fillinputs(true));
		}
	};
	return (
		<div className="pt-5 pb-14">
			<h1 className={`py-10 text-2xl font-bold ${darkmode && "text-white"}`}>Account Information</h1>

			<div className="flex w-full sm:gap-10 gap-4 flex-col sm:flex-row ">
				<div>
					<img
						src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FImage-8.a9a0d423.png&w=128&q=75"
						alt="userphoto"
						className="sm:w-[250px] max-w-[120px] rounded-full object-cover border mt-4"
					/>
				</div>

				<form onSubmit={updAccount} className={`w-[90%] mx-auto ${darkmode && "text-white"}`}>
					<label htmlFor="fullname" className="inline-block w-full font-bold pt-6 pb-2">
						Full name
					</label>
					<input
						type="text"
						name="fullname"
						placeholder="Enter your new username"
						ref={usernameRef}
						className="inline-block w-full  py-2 px-4 rounded-xl focus:outline-none border focus:shadow-cyan-400 focus:shadow-sm"
					/>

					<label htmlFor="email" className="inline-block w-full font-bold pt-6 pb-2">
						Email
					</label>
					<input
						type="email"
						name="email"
						ref={emailRef}
						placeholder="example@email.com"
						className="inline-block w-full  py-2 px-4 rounded-xl focus:outline-none border focus:shadow-cyan-400 focus:shadow-sm"
					/>

					<label htmlFor="fullname" className="inline-block w-full font-bold pt-6 pb-2">
						Address
					</label>
					<input
						type="text"
						name="address"
						ref={addressRef}
						placeholder="New York , US"
						className="inline-block w-full  py-2 px-4 rounded-xl focus:outline-none border focus:shadow-cyan-400 focus:shadow-sm"
					/>

					<label htmlFor="fullname" className="inline-block w-full font-bold pt-6 pb-2">
						Gender
					</label>
					<select
						ref={genderRef}
						className="inline-block w-full  py-2 px-4 rounded-xl focus:outline-none border focus:shadow-cyan-400 focus:shadow-sm"
					>
						<option value="male" key="male">
							Male
						</option>
						<option value="Female" key="Female">
							Female
						</option>
					</select>

					<label htmlFor="phone" className="inline-block w-full font-bold pt-6 pb-2">
						Phone
					</label>
					<input
						type="phone"
						ref={phoneRef}
						name="phone"
						placeholder="01-11129993"
						className="inline-block w-full  py-2 px-4 rounded-xl focus:outline-none border focus:shadow-cyan-400 focus:shadow-sm"
					/>

					<label htmlFor="about you" className="inline-block w-full font-bold pt-6 pb-2">
						About you
					</label>
					<textarea
						type="text"
						name="about you"
						ref={aboutRef}
						placeholder="..."
						className="inline-block w-full  py-2 px-4 rounded-xl focus:outline-none border focus:shadow-cyan-400 focus:shadow-sm"
					/>

					{hasinputs && <span className="text-red-500 block w-full ">Please fill all input fields</span>}

					<button
						className={`w-[200px] h-[60px] shadow-md my-5 rounded-full py-3 px-10 font-bold hover:opacity-90 hover:shadow-sm hover:shadow-slate-300/70 ${
							!darkmode ? "bg-[var(--blue-dark)] text-white" : "bg-white text-black"
						}`}
						type="submit"
					>
						Update account
					</button>
				</form>
			</div>
		</div>
	);
};

export default Accinfo;
