import React, { useState } from "react";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { IoCartOutline, IoHelpBuoyOutline } from "react-icons/io5";
import { VscClose } from "react-icons/vsc";
import { BsFacebook, BsMessenger, BsTwitter } from "react-icons/bs";
import { CiLogout, CiUser } from "react-icons/ci";
import { TbClipboard, TbClipboardText } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { changeMode, darkMode } from "../Products/ProductSlice";
import { cartCount } from "../Cart/CartSLice";
import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { HiMenuAlt2 } from "react-icons/hi";
import Acclayout from "../Account/Acclayout";
const Nav = () => {
	const [open, SetOpen] = useState(false);
	const [acc, Setacc] = useState(false);
	const darkmode = useSelector(darkMode);
	const cartLength = useSelector(cartCount);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const navlinkStyles = ({ isActive }) => {
		return {
			backgroundColor: isActive ? "rgb(148 163 184/0.2 )" : "none",
			padding: isActive ? "0.5rem 1rem " : "0.5rem 1rem",
			borderRadius: "9999px",
		};
	};

	const chgDarkMode = () => {
		dispatch(changeMode());
	};

	const openNav = () => {
		SetOpen(!open);
	};
	const openAcc = () => {
		Setacc(!acc);
	};

	return (
		<div>
			<nav
				className={`flex justify-between items-center px-5 md:px-18 py-4 fixed top-0 z-50 w-full ${
					darkmode ? "bg-[var(--blue-dark)] text-slate-300" : "bg-white"
				}`}
			>
				<div className="flex items-center gap-4">
					<HiMenuAlt2 className="md:hidden inline-block cursor-pointer" size={30} onClick={openNav} />
					<span onClick={() => navigate("/")} className="cursor-pointer">
						<img
							src={`${
								darkmode
									? "https://ciseco-nextjs.vercel.app/_next/static/media/logo-light.695409b5.svg"
									: "https://ciseco-nextjs.vercel.app/_next/static/media/logo.14d0e71d.svg"
							}`}
							alt="logo"
							className="w-[120px] md:w-[170px]"
						/>
					</span>
				</div>

				<div>
					<ul className="hidden md:flex justify-between items-center gap-5">
						<li>
							<NavLink to="/manCollection" style={navlinkStyles}>
								Men
							</NavLink>
						</li>
						<li>
							<NavLink to="/womenCollection" style={navlinkStyles}>
								Women
							</NavLink>
						</li>
						<li>
							<NavLink to="/electronics" style={navlinkStyles}>
								Electronics
							</NavLink>
						</li>
						<li>
							<NavLink to="/jewelery" style={navlinkStyles}>
								Jewelery
							</NavLink>
						</li>
					</ul>
				</div>

				<div className="flex gap-2">
					<button onClick={openAcc}>
						<AiOutlineUser size={40} className="py-2 px-2 hover:bg-slate-400/20 rounded-full " />
					</button>
					{/* account */}
					{acc && (
						<div
							className={`w-[250px] h-[380px] rounded-3xl  absolute top-[83px] right-[20px] shadow-md ${
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
									<span className={`inline-block ${darkmode && "text-white"} font-bold text-[17px]`}>
										Eden Smith
									</span>
									<span className={`inline-block  text-xs ${darkmode && "text-white"}`}>
										Los Angeles,US
									</span>
								</div>
							</div>
							<hr className=" w-[85%] mx-auto" />

							<div className=" py-4 px-3">
								<ul className="w-full ">
									<li
										onClick={() => navigate("/myaccount")}
										className="w-full py-3 px-4 hover:bg-gray-300/60 cursor-pointer rounded-md transition-all duration-300"
									>
										<CiUser className="mx-2 inline-block" size={25} />
										My Account
									</li>
									<li className="w-full py-3 px-4 hover:bg-gray-300/60 cursor-pointer rounded-md transition-all duration-300">
										<TbClipboard className="mx-2 inline-block" size={25} /> My Orders
									</li>
									<li className="w-full py-3 px-4 hover:bg-gray-300/60 cursor-pointer rounded-md transition-all duration-300">
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
									<li className="w-full py-3 px-4 hover:bg-gray-300/60 cursor-pointer rounded-md transition-all duration-300">
										<CiLogout className="mx-2 inline-block" size={25} /> LogOut
									</li>
								</ul>
							</div>
						</div>
					)}

					<button className="relative" onClick={() => navigate("/shoppingCart")}>
						<div className="w-[18px] h-[18px] bg-sky-500 rounded-full absolute top-[2px] right-[2px] font-bold  text-xs text-center text-white">
							{cartLength}
						</div>
						<IoCartOutline size={40} className="py-2 px-2 hover:bg-slate-400/20 rounded-full " />
					</button>
					<button onClick={chgDarkMode}>
						{darkmode ? (
							<MdOutlineDarkMode size={40} className="py-2 px-2 hover:bg-slate-400/20 rounded-full " />
						) : (
							<MdDarkMode size={40} className="py-2 px-2 hover:bg-slate-400/20 rounded-full " />
						)}
					</button>
				</div>

				{/* for mobile */}
				<div
					className={`block md:hidden w-full  h-[100vh] absolute top-0 ${
						darkmode ? "bg-[var(--blue-dark)]" : "bg-white"
					} ${open ? "left-0" : "left-[-1000px]"} transition-all duration-300`}
				>
					<div className="flex justify-between px-5 py-6 h-[80px] items-center">
						<span onClick={() => navigate("/")} className="cursor-pointer">
							<img
								src={`${
									darkmode
										? "https://ciseco-nextjs.vercel.app/_next/static/media/logo-light.695409b5.svg"
										: "https://ciseco-nextjs.vercel.app/_next/static/media/logo.14d0e71d.svg"
								}`}
								alt="logo"
								width={120}
							/>
						</span>
						<VscClose size={25} onClick={openNav} className="cursor-pointer" />
					</div>

					<p className="p-4 text-gray-500 leading-6">
						Discover the most outstanding articles on all topics of life. Write your stories and share them
					</p>

					<div className="flex gap-4 p-4">
						<BsFacebook size={25} className="text-sky-800/80" />
						<BsMessenger size={25} className="text-sky-500/90" />
						<BsTwitter size={25} className="text-sky-400/80" />
					</div>

					<hr className="p-4" />
					<div>
						<ul className="flex justify-start  w-full flex-col gap-3">
							<li>
								<NavLink to="/manCollection" style={navlinkStyles}>
									Men
								</NavLink>
							</li>
							<hr />

							<li>
								<NavLink to="/womenCollection" style={navlinkStyles}>
									Women
								</NavLink>
							</li>
							<hr />

							<li>
								<NavLink to="/electronics" style={navlinkStyles}>
									Electronics
								</NavLink>
							</li>
							<hr />

							<li>
								<NavLink to="/jewelery" style={navlinkStyles}>
									Jewelery
								</NavLink>
							</li>
							<hr />
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Nav;
