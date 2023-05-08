import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { darkMode } from "../Products/ProductSlice";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {
	checkCurrentPw_with_Oldpw,
	doesntMatchOldpw,
	matchOldpw,
	matchpassword,
	password,
	pwCondition,
	updateAccount,
	userData,
} from "./Accslice";
import { toast } from "react-toastify";

const ChgPw = () => {
	const darkmode = useSelector(darkMode);
	const dispatch = useDispatch();

	const user = useSelector(userData);
	const oldPassword = user.password;
	let newPassword;

	const [sameWithOldpw, SetsameWithOldpw] = useState(false);
	const [sameWithNewpw, SetsameWithNewpw] = useState(true);

	//for show and hide pw
	const [showCurrent, SetshowCurrent] = useState(false);
	const [showNew, SetshowNew] = useState(false);
	const [showConfirm, SetshowConfirm] = useState(false);

	let previous_password = useRef();
	let confirm_newpassword = useRef();
	const updatePw = (e) => {
		e.preventDefault();

		if (oldPassword === previous_password.current.value && previous_password.current.value !== newPassword) {
			SetsameWithOldpw(false);

			if (confirm_newpassword.current.value === newPassword) {
				SetsameWithNewpw(true);
			} else {
				SetsameWithNewpw(false);
				dispatch(doesntMatchOldpw(true));
				return;
			}

			dispatch(
				updateAccount({
					username: user.username,
					password: newPassword,
					email: user.email,
					gender: user.gender,
					phone: user.phone,
					address: user.address,
					about: user.about,
					image: user.image,
				})
			);

			previous_password.current.value = "";
			confirm_newpassword.current.value = "";
			toast.success("updated password");
			console.log("successs");
		} else {
			SetsameWithOldpw(true);
			console.warn(user.password, previous_password.current.value);

			return;
		}
	};
	return (
		<div className="pt-5 pb-14">
			<h1 className={`py-10 text-2xl font-bold ${darkmode && "text-white"}`}>Update your password</h1>

			<form className={`w-[90%] sm:w-[60%]  ${darkmode && "text-white"}`} onSubmit={updatePw}>
				<label htmlFor="currentpw" className="inline-block w-full font-bold pt-6 pb-2">
					Current Password
				</label>
				<span className="relative block">
					<input
						type={showCurrent ? "text" : "password"}
						name="currentpw"
						ref={previous_password}
						placeholder="Enter your current password..."
						className={`inline-block w-full  py-2 px-4 rounded-xl focus:outline-none border focus:shadow-cyan-400 focus:shadow-sm 	
							`}
					/>
					{showCurrent ? (
						<AiOutlineEyeInvisible
							size={20}
							fill="black"
							className="absolute right-3 top-[10px] cursor-pointer"
							onClick={() => SetshowCurrent(!showCurrent)}
						/>
					) : (
						<AiOutlineEye
							size={20}
							fill="black"
							className="absolute right-3 top-[10px] cursor-pointer"
							onClick={() => SetshowCurrent(!showCurrent)}
						/>
					)}
				</span>
				{sameWithOldpw && <span className="text-red-500">The password is incorrect</span>}

				<label htmlFor="showNew" className="inline-block w-full font-bold pt-6 pb-2">
					New Password
				</label>
				<span className="relative block">
					<input
						type={showNew ? "text" : "password"}
						name="password"
						value={newPassword}
						onChange={(e) => {
							SetnewPassword(e.target.value);
						}}
						placeholder="Enter your new password..."
						className={`inline-block w-full  py-2 px-4 rounded-xl ${
							!check_newpassword_match && "border-red-500 shadow-red-500"
						} focus:outline-none border focus:shadow-cyan-400 focus:shadow-sm 	
							`}
					/>
					{showNew ? (
						<AiOutlineEyeInvisible
							size={20}
							fill="black"
							className="absolute right-3 top-[10px] cursor-pointer"
							onClick={() => SetshowNew(!showNew)}
						/>
					) : (
						<AiOutlineEye
							size={20}
							fill="black"
							className="absolute right-3 top-[10px] cursor-pointer"
							onClick={() => SetshowNew(!showNew)}
						/>
					)}
				</span>
				{sameWithOldPw && <span className={`text-red-500 text-sm `}>password must be different</span>}
				{newPassword.length > 0 && newPassword.length < 5 && <span className="text-red-500 text-sm">weak</span>}
				{newPassword.length >= 5 && (
					<span className={`text-green-500 text-sm ${sameWithOldPw && "hidden"}`}>strong</span>
				)}

				<label htmlFor="showConfirm" className="inline-block w-full font-bold pt-6 pb-2">
					Confirm Password
				</label>
				<span className="relative block">
					<input
						type={showConfirm ? "text" : "password"}
						name="password"
						ref={confirm_newpassword}
						placeholder="Confrim your password..."
						className={`inline-block w-full  py-2 px-4 rounded-xl ${
							!check_newpassword_match && "border-red-500 t"
						} focus:outline-none border  focus:shadow-cyan-400 focus:shadow-sm 	
							`}
					/>
					{showConfirm ? (
						<AiOutlineEyeInvisible
							size={20}
							fill="black"
							className="absolute right-3 top-[10px] cursor-pointer"
							onClick={() => SetshowConfirm(!showConfirm)}
						/>
					) : (
						<AiOutlineEye
							size={20}
							fill="black"
							className="absolute right-3 top-[10px] cursor-pointer"
							onClick={() => SetshowConfirm(!showConfirm)}
						/>
					)}
				</span>

				{sameWithNewpw === false && <span className="text-red-500 text-sm block">The password doesn't match</span>}

				<button
					className={`w-[220px] h-[60px] shadow-md my-9 rounded-full py-3 px-4 font-bold hover:opacity-90 hover:shadow-sm hover:shadow-slate-300/70 ${
						!darkmode ? "bg-[var(--blue-dark)] text-white" : "bg-white text-black"
					}`}
					type="submit"
				>
					Change Password
				</button>
			</form>
		</div>
	);
};

export default ChgPw;
