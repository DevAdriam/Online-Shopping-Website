import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { darkMode } from "../../Products/ProductSlice";
import { changeNavlink, isloggedin, login, userData } from "../AccMain/Accslice";
import userphoto from "../../images/user.png";

import { AiOutlineHeart } from "react-icons/ai";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { CiLogout, CiUser } from "react-icons/ci";
import { TbClipboard } from "react-icons/tb";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const IfLogin = () => {
	const darkmode = useSelector(darkMode);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const islogin = useSelector(isloggedin);
	const personinfo = useSelector(userData);

	return (
		<div
			className={`w-[280px] min-h-[400px] h-max-content  rounded-3xl  absolute top-[73px] right-[15px] shadow-md ${
				darkmode ? "bg-[var(--blue-minidark)]" : "bg-white"
			}`}
		>
			<div className="flex items-center justify-start gap-3 p-5">
				<img
					src={personinfo.image === "" ? userphoto : personinfo.image}
					alt="userphoto"
					className="w-[50px] h-[50px] object-cover rounded-full"
				/>

				<div>
					<span className={`block ${darkmode && "text-white/90"} font-bold text-[17px]`}>
						{personinfo ? personinfo.username : "User"}
					</span>
					<span
						className={`inline-block  text-sm mr-2 mx-0 w-full ${darkmode && "text-white/90"} ${
							personinfo && "flex flex-col "
						}`}
					>
						{personinfo ? personinfo.city : "Yangon"} , {personinfo ? personinfo.state : ""}
						<NavLink className=" text-sm underline underline-offset-auto text-sky-400  mt-1 " to="/myAccount">
							update account
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
							navigate("/");
							toast.warn("Logged out from account!");
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
