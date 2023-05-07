import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { VscClose } from "react-icons/vsc";
import { BsFacebook, BsMessenger, BsTwitter } from "react-icons/bs";
import { HiMenuAlt2 } from "react-icons/hi";

import { changeMode, darkMode } from "../Products/ProductSlice";
import { cartCount } from "../Cart/CartSLice";
import DetermineLogin from "../Account/DetermineLogin";

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
			padding: isActive && "0.5rem 1rem ",
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
							<NavLink to="/Jewelry" style={navlinkStyles}>
								Jewelry
							</NavLink>
						</li>
					</ul>
				</div>

				<div className="flex gap-2">
					<button onClick={openAcc}>
						<AiOutlineUser
							size={40}
							className="py-2 px-2 hover:bg-slate-400/20 rounded-full "
							style={navlinkStyles}
						/>
					</button>
					{/* account */}
					{acc && <DetermineLogin />}

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
								<NavLink to="/manCollection" style={navlinkStyles} className="w-full">
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
								<NavLink to="/Jewelry" style={navlinkStyles}>
									Jewelry
								</NavLink>
							</li>
							<hr />

							<li>
								<NavLink to="/allProducts" style={navlinkStyles}>
									All
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
