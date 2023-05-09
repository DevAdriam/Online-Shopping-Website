import React from "react";
import { useSelector } from "react-redux";
import { allProducts, darkMode } from "./ProductSlice";
import Nav from "../Layout/Nav";
import Products from "./Products";
import { ToastContainer } from "react-toastify";
const ProductList = () => {
	const darkmode = useSelector(darkMode);
	const data = useSelector(allProducts);
	return (
		<div>
			<Nav />

			<div className={`md:px-20 px-4 pt-32 w-full ${darkmode ? "bg-[var(--blue-dark)]" : "bg-transparent"}`}>
				<div aria-label="title">
					<h1 className={`text-3xl font-bold ${darkmode ? "text-white/90" : "text-black"}`}>All Products</h1>
					<p className="py-10 text-gray-500 leading-6">
						Quality in a product or service is not what the supplier puts in. it is what the customer gets out
						and is willing to pay for. A product is not quality because it is hard to make and costs a lot of
						money, as manufacturers typically believe.
					</p>
					<hr className="py-16" />
				</div>
				<div
					aria-label="allproducts"
					className={`w-full flex md:justify-start justify-center relative z-20 items-center px-5 flex-wrap md:gap-16 gap-2 
					`}
				>
					{data?.map((item) => (
						<Products key={item.id} item={item} />
					))}
				</div>
			</div>
		</div>
	);
};

export default ProductList;
