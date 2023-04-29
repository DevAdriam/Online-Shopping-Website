import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { darkMode } from "../Products/ProductSlice";
import { changeNavlink, isloggedin, login, userData } from "./Accslice";

import { AiOutlineHeart } from "react-icons/ai";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { CiLogout, CiUser } from "react-icons/ci";
import { TbClipboard } from "react-icons/tb";
import { NavLink, useNavigate } from "react-router-dom";
const IfLogin = () => {
	const darkmode = useSelector(darkMode);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const islogin = useSelector(isloggedin);
	const personifo = useSelector(userData);
	console.log(personifo);
	console.log(islogin);
	return (
		<div
			className={`w-[280px] h-[380px] rounded-3xl  absolute top-[83px] right-[20px] shadow-md ${
				darkmode ? "bg-[var(--blue-minidark)]" : "bg-white"
			}`}
		>
			<div className="flex items-center justify-start gap-3 p-5">
				<img
					src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FImage-8.a9a0d423.png&w=128&q=75"
					alt="userphoto"
					className="w-[50px] h-[50px] object-cover rounded-full"
				/>

				<div>
					<span className={`block ${darkmode && "text-white"} font-bold text-[17px]`}>
						{personifo ? personifo.username : "User"}
					</span>
					<span className={`inline-block  text-sm ${darkmode && "text-white"}`}>
						Yangon
						<NavLink className="mx-2 text-xs text-sky-400 undelrine underline-offset-auto" to="/myAccount">
							Change Location
						</NavLink>
					</span>
				</div>
			</div>
			<hr className=" w-[85%] mx-auto" />

			<div className=" py-4 px-3">
				<ul className="w-full ">
					<li
						onClick={() => {
							navigate("/myAccount");
							dispatch(changeNavlink("accinfo"));
						}}
						className="w-full py-3 px-4 hover:bg-gray-300/60 cursor-pointer rounded-md transition-all duration-300"
					>
						<CiUser className="mx-2 inline-block" size={25} />
						My Account
					</li>
					<li
						onClick={() => {
							navigate("/myAccount");
							dispatch(changeNavlink("myorder"));
						}}
						className="w-full py-3 px-4 hover:bg-gray-300/60 cursor-pointer rounded-md transition-all duration-300"
					>
						<TbClipboard className="mx-2 inline-block" size={25} /> My Orders
					</li>
					<li
						onClick={() => {
							navigate("/myAccount");
							dispatch(changeNavlink("wishlist"));
						}}
						className="w-full py-3 px-4 hover:bg-gray-300/60 cursor-pointer rounded-md transition-all duration-300"
					>
						<AiOutlineHeart className="mx-2 inline-block" size={25} /> Wishlist
					</li>
				</ul>
			</div>
			<hr className=" w-[85%] mx-auto" />

			<div className=" pt-2  px-3">
				<ul className="w-full ">
					<li className="w-full py-3 px-4 hover:bg-gray-300/60 cursor-pointer rounded-md transition-all duration-300">
						<IoHelpBuoyOutline className="mx-2 inline-block" size={25} />
						Help
					</li>
					<li
						onClick={() => {
							dispatch(login());
							console.log(islogin);
						}}
						className="w-full py-3 px-4 hover:bg-gray-300/60 cursor-pointer rounded-md transition-all duration-300"
					>
						<CiLogout className="mx-2 inline-block" size={25} /> LogOut
					</li>
				</ul>
			</div>
		</div>
	);
};

export default IfLogin;
