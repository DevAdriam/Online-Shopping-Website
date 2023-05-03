import React, { useRef, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { updateAccount, userData } from "./Accslice";
import { darkMode } from "../Products/ProductSlice";
import userphoto from "../images/user.png";
import { toast } from "react-toastify";

const Accinfo = () => {
	const darkmode = useSelector(darkMode);
	const dispatch = useDispatch();
	const personinfo = useSelector(userData);
	const oldpassword = personinfo.password;

	let usernameRef = useRef();
	let emailRef = useRef();
	let genderRef = useRef();
	let phoneRef = useRef();
	let addressRef = useRef();
	let aboutRef = useRef();

	const [viewImg, SetviewImg] = useState(personinfo.image);

	const previewImg = (file) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			SetviewImg(reader.result);
		};
	};

	const handleFileInputChange = (e) => {
		const file = e.target.files[0];
		previewImg(file);
	};

	const updAccount = (e) => {
		e.preventDefault();

		const personalInfo = {
			username: usernameRef.current.value ? usernameRef.current.value : personinfo.username,
			email: emailRef.current.value ? emailRef.current.value : personinfo.email,
			phone: phoneRef.current.value ? phoneRef.current.value : personinfo.phone,
			address: addressRef.current.value ? addressRef.current.value : personinfo.address,
			gender: genderRef.current.value ? genderRef.current.value : personinfo.gender,
			about: aboutRef.current.value ? aboutRef.current.value : personinfo.about,
			password: oldpassword,
			image: viewImg,
		};
		dispatch(updateAccount(personalInfo));

		toast.success("Account Updated");

		usernameRef.current.value = "";
		emailRef.current.value = "";
		phoneRef.current.value = "";
		addressRef.current.value = "";
		genderRef.current.value = "";
		aboutRef.current.value = "";
	};
	return (
		<div className="pt-5 pb-14">
			<h1 className={`py-10 text-2xl font-bold ${darkmode && "text-white"}`}>Account Information</h1>

			<div className="flex w-full sm:gap-10 gap-4 flex-col sm:flex-row relative">
				<div>
					{viewImg ? (
						<div className="w-[120px] h-[120px] rounded-full object-cover  mt-4">
							<img
								src={viewImg}
								alt="Preview"
								className="sm:w-[250px] w-full h-full rounded-full object-cover border mt-4"
							></img>
						</div>
					) : (
						<div className="w-[120px] h-[120px] rounded-full object-cover  mt-4">
							<img
								src={userphoto}
								alt="Preview"
								className="sm:w-[250px] w-full h-full rounded-full object-cover border mt-4"
							></img>
						</div>
					)}
					<input type="file" accept="image/*" title="" onChange={handleFileInputChange} className="inputfile " />
				</div>

				<form onSubmit={updAccount} className={`w-[90%]  ${darkmode && "text-white"}`}>
					<label htmlFor="fullname" className="inline-block w-full font-bold pt-6 pb-2">
						Full name
					</label>
					<input
						type="text"
						name="fullname"
						placeholder={personinfo ? personinfo.username : "Enter your username"}
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
						placeholder={personinfo ? personinfo.email : "Enter your email"}
						className="inline-block w-full  py-2 px-4 rounded-xl focus:outline-none border focus:shadow-cyan-400 focus:shadow-sm"
					/>

					<label htmlFor="fullname" className="inline-block w-full font-bold pt-6 pb-2">
						Address
					</label>
					<input
						type="text"
						name="address"
						ref={addressRef}
						placeholder={personinfo ? personinfo.address : "Yangon"}
						className="inline-block w-full  py-2 px-4 rounded-xl focus:outline-none border focus:shadow-cyan-400 focus:shadow-sm"
					/>

					<label htmlFor="fullname" className="inline-block w-full font-bold pt-6 pb-2">
						Gender
					</label>
					<select
						ref={genderRef}
						placeholder={personinfo ? personinfo.gender : "Choose your gender"}
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
						placeholder={personinfo ? personinfo.phone : "01-111 222 333"}
						className="inline-block w-full  py-2 px-4 rounded-xl focus:outline-none border focus:shadow-cyan-400 focus:shadow-sm"
					/>

					<label htmlFor="about you" className="inline-block w-full font-bold pt-6 pb-2">
						About you
					</label>
					<textarea
						type="text"
						name="about you"
						ref={aboutRef}
						placeholder={personinfo ? personinfo.about : "..."}
						className="inline-block w-full  py-2 px-4 rounded-xl focus:outline-none border focus:shadow-cyan-400 focus:shadow-sm"
					/>

					<button
						className={`w-[140px] h-[50px] shadow-md my-5 rounded-full py-3 px-10 font-bold hover:opacity-90 hover:shadow-sm hover:shadow-slate-300/70 ${
							!darkmode ? "bg-[var(--blue-dark)] text-white" : "bg-white text-black"
						}`}
						type="submit"
					>
						Update
					</button>
				</form>
			</div>
		</div>
	);
};

export default Accinfo;
