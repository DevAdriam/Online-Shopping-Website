import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { darkMode } from "../../Products/ProductSlice";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { doesntMatchOldpw, updateAccount, userData } from "../AccMain/Accslice";
import { toast } from "react-toastify";

const ChgPw = () => {
	const darkmode = useSelector(darkMode);
	const dispatch = useDispatch();

	const user = useSelector(userData);
	const oldPassword = user.password;

	const [sameWithOldpw, SetsameWithOldpw] = useState(null);
	const [sameWithNewpw, SetsameWithNewpw] = useState(null);
	const [matchWithNewpw, SetmatchWithNewpw] = useState(null);

	//for show and hide pw
	const [showCurrent, SetshowCurrent] = useState(false);
	const [showNew, SetshowNew] = useState(false);
	const [showConfirm, SetshowConfirm] = useState(false);

	const [currentPassword, SetcurrentPassword] = useState("");
	const [newPassword, SetnewPassword] = useState("");
	const [confirmnewPassword, SetconfirmnewPassword] = useState("");

	const updatePw = (e) => {
		e.preventDefault();

		if (oldPassword === currentPassword) {
			SetsameWithOldpw(true);
			if (currentPassword === newPassword) {
				SetsameWithNewpw(true);
				return;
			} else {
				if (confirmnewPassword === newPassword) {
					SetmatchWithNewpw(true);

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

					//reset value
					SetcurrentPassword("");
					SetnewPassword("");
					SetconfirmnewPassword("");

					// reset condition
					SetsameWithOldpw(null);
					SetsameWithNewpw(null);
					SetmatchWithNewpw(null);

					toast.success("updated password");
					console.log("successs");
				} else {
					SetmatchWithNewpw(false);
					dispatch(doesntMatchOldpw(true));
					return;
				}
			}
		} else {
			SetsameWithOldpw(false);
			console.warn(user.password, currentPassword);
			return;
		}
	};
	return (
		<div className="pt-5 pb-14">
			<h1 className={`py-10 text-2xl font-bold ${darkmode && "text-white/90"}`}>Update your password</h1>

			<form className={`w-[90%] sm:w-[70%]  ${darkmode && "text-white/90"}`} onSubmit={updatePw}>
				{/* Current Password */}
				<label htmlFor="currentpw" className="inline-block w-full font-bold pt-6 pb-2">
					Current Password
				</label>
				<span className="relative block">
					<input
						type={showCurrent ? "text" : "password"}
						name="currentpw"
						value={currentPassword}
						onChange={(e) => SetcurrentPassword(e.target.value)}
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
				{/* condition for current password */}
				{sameWithOldpw === false && <span className="text-red-500">The password is incorrect</span>}

				{/* New Password */}
				<label htmlFor="showNew" className="inline-block w-full font-bold pt-6 pb-2">
					New Password
				</label>
				<span className="relative block">
					<input
						type={showNew ? "text" : "password"}
						name="password"
						value={newPassword}
						onChange={(e) => SetnewPassword(e.target.value)}
						placeholder="Enter your new password..."
						className={`inline-block w-full  py-2 px-4 rounded-xl  focus:outline-none border focus:shadow-cyan-400 focus:shadow-sm 	
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
				{/* Condition for new password */}
				{sameWithNewpw === true && (
					<span className="text-red-500">New password must be different with old password</span>
				)}

				{/* Match New Password */}
				<label htmlFor="showConfirm" className="inline-block w-full font-bold pt-6 pb-2">
					Confirm Password
				</label>
				<span className="relative block">
					<input
						type={showConfirm ? "text" : "password"}
						name="password"
						value={confirmnewPassword}
						onChange={(e) => SetconfirmnewPassword(e.target.value)}
						placeholder="Confrim your password..."
						className={`inline-block w-full  py-2 px-4 rounded-xl  focus:outline-none border  focus:shadow-cyan-400 focus:shadow-sm 	
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
				{/* condition for match new password */}
				{matchWithNewpw === false && <span className="text-red-500">The password doesn't match</span>}

				<button
					className={`w-[220px] h-[60px] shadow-md my-9 rounded-full py-3 px-4 font-bold hover:opacity-90 hover:shadow-sm hover:shadow-slate-300/70 ${
						!darkmode ? "bg-[var(--blue-dark)] text-white/90" : "bg-white text-black"
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
