import React, { useState } from "react";
import Nav from "../Layout/Nav";
import { useSelector } from "react-redux";
import { navAcc, userData } from "./Accslice";
import { darkMode } from "../Products/ProductSlice";
import Accinfo from "./Accinfo";
import Accwishlist from "./Accwishlist";

const Acclayout = () => {
	const darkmode = useSelector(darkMode);
	const accNav = useSelector(navAcc);
	console.log(accNav);
	const [chgLi, SetchgLi] = useState(accNav);
	console.log(accNav);

	const personinfo = useSelector(userData);
	const navlinkStyles = ({ isActive }) => {
		return {
			backgroundColor: isActive ? "rgb(148 163 184/0.2 )" : "none",
			padding: isActive ? "0.5rem 1rem " : "0.5rem 1rem",
			borderRadius: "9999px",
		};
	};

	return (
		<>
			<Nav />
			<div className={`w-full md:pt-40 pt-28 lg:px-48 sm:px-15 px-5 ${darkmode ? "bg-[var(--blue-dark)]" : "bg-white"}`}>
				<h1 className={`w-full font-bold lg:text-4xl text-2xl ${darkmode && "text-white/90"}`}>Account</h1>
				<h2 className="flex items-center flex-wrap py-8">
					<span className={`font-bold lg:text-2xl text-xl ${darkmode && "text-white/90"}`}>
						{personinfo ? personinfo.username : "eden smith"} ,
					</span>
					<span className={`text-gray-500 lg:text-2xl sm:text-xl text-md`}>
						ciseco@gmail.com · Los Angeles, CA
					</span>
				</h2>
				<hr />

				<ul className="flex justify-between items-center py-5 h-[80px] text-gray-500/80 sm:text-[18px] text-[13.5px] gap-2 accNav">
					<li
						className={` ${darkmode && "hover:text-white/90"} cursor-pointer `}
						onClick={() => SetchgLi("accinfo")}
					>
						Account info
					</li>
					<li
						className={` ${darkmode && "hover:text-white/90"} cursor-pointer `}
						onClick={() => SetchgLi("wishlist")}
					>
						Wishlist
					</li>
					<li
						className={` ${darkmode && "hover:text-white/90"} cursor-pointer `}
						onClick={() => SetchgLi("myorder")}
					>
						My order
					</li>
					<li
						className={` ${darkmode && "hover:text-white/90"} cursor-pointer `}
						onClick={() => SetchgLi("chgpw")}
					>
						Change password
					</li>
				</ul>

				<hr />

				{chgLi === "accinfo" && <Accinfo />}
				{chgLi === "wishlist" && (
					<div>
						<Accwishlist />
					</div>
				)}
				{chgLi === "myorder" && <div>myorder</div>}
				{chgLi === "chgpw" && <div>chgpw</div>}
			</div>
		</>
	);
};

export default Acclayout;
