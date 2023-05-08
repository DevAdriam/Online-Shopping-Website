import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

import { AiOutlineUser } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";
import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { VscClose } from "react-icons/vsc";
import { BsFacebook, BsMessenger, BsTwitter } from "react-icons/bs";
import { HiMenuAlt2 } from "react-icons/hi";

import { allProducts, changeMode, darkMode } from "../Products/ProductSlice";
import { cartCount } from "../Cart/CartSLice";
import DetermineLogin from "../Account/DetermineLogin";

const Nav = () => {
	const [open, SetOpen] = useState(false);
	const [acc, Setacc] = useState(false);
	const [search, Setsearch] = useState(false);
	const [filteredArr, SetfilteredArr] = useState([]);

	const darkmode = useSelector(darkMode);
	const cartLength = useSelector(cartCount);

	const allItems = useSelector(allProducts);

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
	const searchProducts = (e) => {
		if (e.target.value === "") {
			SetfilteredArr([]);
		} else {
			const newFilter = allItems.filter((item) => {
				let searchWord = e.target.value.toLowerCase();
				return item.title.toLowerCase().includes(searchWord);
			});
			SetfilteredArr(newFilter);
		}
	};

	return (
		<div>
			<nav
				className={`flex justify-between 
				 items-center px-2 md:px-18 py-4 fixed top-0 z-50 w-full ${darkmode ? "bg-[var(--blue-dark)] text-slate-300" : "bg-white"}`}
			>
				<div className="flex items-center md:gap-4 gap-2">
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
					<ul
						className={`justify-between items-center lg:gap-2 xl:gap-4 ${
							search ? "md:hidden hidden" : "md:flex hidden"
						}`}
					>
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

				<div className="flex lg:gap-1 xl:gap-2 items-center justify-between  gap-1 lg:px-5">
					<button onClick={() => navigate("/searchProducts")}>
						<FiSearch
							size={38}
							className={`cursor-pointer py-2 md:hidden hover:bg-slate-400/20 rounded-full ${
								darkmode && "text-slate-300"
							}`}
						/>
					</button>

					<div className={`md:flex items-center relative hidden left-[-3rem] text-black cursor-pointer`}>
						<input
							type="text"
							placeholder="Search products ..."
							onChange={searchProducts}
							className={`w-[40vw] lg:w-[50vw] h-full ${
								darkmode ? "bg-sky-100" : "bg-sky-100/50"
							} inline-block border outline-none px-10 rounded-md ${!search && "hidden"}`}
						/>
						<FiSearch
							size={23}
							className={`absolute left-3 cursor-pointer ${darkmode && "text-slate-300"}`}
							onClick={() => Setsearch(true)}
						/>
						<RxCross2
							size={23}
							className={`absolute right-3 cursor-pointer ${search ? "inline-block" : "hidden"} `}
							onClick={() => {
								Setsearch(!search);
								SetfilteredArr([]);
							}}
						/>
						<div className="absolute w-[30rem] xl:w-[45rem] h-max-content max-h-[25rem] overflow-y-scroll bg-white h-max-content flex flex-col left-0 top-12 shadow-md">
							{filteredArr.map((item) => {
								return (
									<div
										key={item.id}
										onClick={() => navigate(`/allProducts/${item.id}`)}
										className="hover:bg-slate-50  w-full h-max-content border-b rounded-md flex gap-2 items-center p-5"
									>
										<img src={item.image} alt={item.category} className="w-[50px] object-contain" />
										<h1>{item.title}</h1>
									</div>
								);
							})}
						</div>
					</div>

					<button onClick={openAcc}>
						<AiOutlineUser
							size={40}
							className="py-2  hover:bg-slate-400/20 rounded-full "
							style={navlinkStyles}
						/>
					</button>
					{/* account */}
					{acc && <DetermineLogin />}

					<button className="relative" onClick={() => navigate("/shoppingCart")}>
						<div className="w-[18px] h-[18px] bg-sky-500 rounded-full absolute top-[2px] right-[2px] font-bold  text-xs text-center text-white">
							{cartLength}
						</div>
						<IoCartOutline size={40} className="py-2  hover:bg-slate-400/20 rounded-full " />
					</button>
					<button onClick={chgDarkMode}>
						{darkmode ? (
							<MdOutlineDarkMode size={40} className="py-2  hover:bg-slate-400/20 rounded-full " />
						) : (
							<MdDarkMode size={40} className="py-2  hover:bg-slate-400/20 rounded-full " />
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
