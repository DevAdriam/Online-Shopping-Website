import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { darkMode } from "../Products/ProductSlice";
import { updateAccount } from "./Accslice";
const Accinfo = () => {
	const darkmode = useSelector(darkMode);
	const dispatch = useDispatch();

	let usernameRef,
		emailRef,
		dateRef,
		genderRef,
		phoneRef,
		addressRef,
		aboutRef = useRef();

	const updAccount = (e) => {
		e.preventDefault();
		const personalInfo = {
			username: usernameRef.current.value,
			email: emailRef.current.value,
			date: dateRef.current.value,
			gender: genderRef.current.value,
			phone: phoneRef.current.value,
			address: addressRef.current.value,
			about: aboutRef.current.value,
		};
		dispatch(updateAccount(personalInfo));
	};
	return (
		<div className="pt-5 pb-14">
			<h1 className="py-10 text-2xl font-bold">Account Information</h1>

			<div className="flex w-full gap-10 ">
				<div>
					<img
						src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FImage-8.a9a0d423.png&w=128&q=75"
						alt="userphoto"
						className="w-[250px]  rounded-full object-cover border mt-4"
					/>
				</div>

				<form onSubmit={updAccount}>
					<label htmlFor="fullname" className="inline-block w-full font-bold pt-6 pb-2">
						Full name
					</label>
					<input
						type="text"
						name="fullname"
						placeholder="Eden Smith"
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
						Date
					</label>
					<input
						type="date"
						name="date"
						ref={dateRef}
						placeholder="Date of birth"
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

					<button
						className={`w-[200px] h-[60px] shadow-md my-5 rounded-full py-3 px-10 text-white font-bold ${
							!darkmode && "bg-[var(--blue-dark)]"
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
