import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { useSelector } from "react-redux";
import { allProducts, darkMode } from "../Products/ProductSlice";
import Nav from "../Layout/Nav";

import { useNavigate } from "react-router-dom";
import Products from "../Products/Products";

import { ToastContainer } from "react-toastify";
const ManCollection = () => {
	const navigate = useNavigate();
	const data = useSelector(allProducts);
	const darkmode = useSelector(darkMode);

	const manArr = data?.filter((item) => item.category === "men's clothing");
	console.log(manArr);
	return (
		<div>
			<Nav />
			<div className={`md:px-20 px-4 pt-32 w-full ${darkmode ? "bg-[var(--blue-dark)]" : "bg-transparent"}`}>
				<div aria-label="title">
					<h1 className={`text-3xl font-bold ${darkmode ? "text-white/90" : "text-black"}`}>Man Collection</h1>
					<p className="py-10 text-gray-500 leading-6">
						Fashion is a playground up until a certain age. But then you have to find your own signature and
						your own style.”
					</p>
					<hr className="py-16" />
				</div>

				<div
					aria-label="men-clothing"
					className={`w-full flex md:justify-start justify-center relative z-20 items-center px-5 flex-wrap lg:gap-16 gap-2 
					`}
				>
					{manArr.map((item) => (
						<Products key={item.id} item={item} />
					))}
				</div>

				<div className="py-10">
					<button
						onClick={() => navigate("/allProducts")}
						className="w-[220px] h-[50px] bg-[var(--soft-pink)] hover:shadow-slate-500/80 hover:shadow-sm transition-shadow duration-100 flex items-center justify-center mx-auto  text-black rounded-full"
					>
						Show All Products <BsArrowRight size={25} className="mx-3" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default ManCollection;
