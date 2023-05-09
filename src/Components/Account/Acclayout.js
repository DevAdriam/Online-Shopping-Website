import React, { useState } from "react";
import Nav from "../Layout/Nav";
import { useSelector } from "react-redux";
import { navAcc, userData } from "./Accslice";
import { darkMode } from "../Products/ProductSlice";
import { ToastContainer } from "react-toastify";
import Accinfo from "./Accinfo";
import Accwishlist from "./Accwishlist";
import ChgPw from "./ChgPw";
const Acclayout = () => {
	const darkmode = useSelector(darkMode);
	const accNav = useSelector(navAcc);
	const [chgLi, SetchgLi] = useState(accNav);

	const personinfo = useSelector(userData);

	return (
		<>
			<Nav />

			<div className={`w-full md:pt-40 pt-28 lg:px-48 sm:px-15 px-5 ${darkmode ? "bg-[var(--blue-dark)]" : "bg-white"}`}>
				<h1 className={`w-full font-bold lg:text-4xl text-2xl ${darkmode && "text-white/90"}`}>Account</h1>
				<h2 className="flex items-center flex-wrap py-8">
					<span className={`font-bold lg:text-2xl text-xl ${darkmode && "text-white/90"}`}>
						{personinfo ? personinfo.username : "User"} ,
					</span>
					<span className={`text-gray-500 lg:text-2xl sm:text-xl text-md`}>
						{personinfo ? personinfo.email : "example@gmail.com"} , {personinfo ? personinfo.address : "yangon"}{" "}
					</span>
				</h2>
				<hr />

				<ul className="flex justify-between items-center py-5 h-[80px] text-gray-500/80 sm:text-[18px] text-[13.5px] gap-2 accNav">
					<li
						className={` ${darkmode && "hover:text-white/90 text-gray-500"} ${
							chgLi === "accinfo" && "text-black font-bold"
						} ${(chgLi === "accinfo") & darkmode && "text-white/90 font-bold"} cursor-pointer relative`}
						onClick={() => SetchgLi("accinfo")}
					>
						Account info
						{chgLi === "accinfo" && (
							<span className="absolute block bottom-[-30px] sm:bottom-[-27px] w-full h-[3px] bg-sky-300"></span>
						)}
					</li>
					<li
						className={` ${darkmode && "hover:text-white/90 text-gray-500"} ${
							chgLi === "wishlist" && "text-black font-bold"
						} 
						${(chgLi === "wishlist") & darkmode && "text-white/90 font-bold"} relative cursor-pointer `}
						onClick={() => SetchgLi("wishlist")}
					>
						Wishlist
						{chgLi === "wishlist" && (
							<span className="absolute block bottom-[-30px] sm:bottom-[-27px] w-full h-[3px] bg-sky-300"></span>
						)}
					</li>
					<li
						className={` ${darkmode && "hover:text-white/90 text-gray-500"} ${
							chgLi === "myorder" && "text-black font-bold"
						} ${(chgLi === "myorder") & darkmode && "text-white/90 font-bold"} relative cursor-pointer `}
						onClick={() => SetchgLi("myorder")}
					>
						My order
						{chgLi === "myorder" && (
							<span className="absolute block bottom-[-30px] sm:bottom-[-27px] w-full h-[3px] bg-sky-300"></span>
						)}
					</li>
					<li
						className={` ${darkmode && "hover:text-white/90 text-gray-500"} ${
							chgLi === "chgpw" && "text-black font-bold"
						} ${(chgLi === "chgpw") & darkmode && "text-white/90 font-bold"} relative cursor-pointer `}
						onClick={() => SetchgLi("chgpw")}
					>
						Change password
						{chgLi === "chgpw" && (
							<span className="absolute block bottom-[-30px] sm:bottom-[-27px] w-full h-[3px] bg-sky-300"></span>
						)}
					</li>
				</ul>

				<hr />

				{chgLi === "accinfo" && <Accinfo />}
				{chgLi === "wishlist" && <Accwishlist />}
				{chgLi === "myorder" && <div>order</div>}
				{chgLi === "chgpw" && <ChgPw />}
			</div>
		</>
	);
};

export default Acclayout;
