import React from "react";
import Nav from "../Layout/Nav";
import { useSelector } from "react-redux";
import { darkMode } from "../Products/ProductSlice";
import { cartList } from "./CartSLice";
import { Link } from "react-router-dom";

import ProductsCheckOut from "./ProductsCheckOut";
import EmptyCart from "./EmptyCart";
const ShoppingCart = () => {
	const darkmode = useSelector(darkMode);
	const cartlist = useSelector(cartList);

	console.log(cartlist);

	return (
		<div>
			<Nav />

			<div className={`md:px-20 px-4 pt-32 w-full ${darkmode ? "bg-[var(--blue-dark)]" : "bg-transparent"}`}>
				<div aria-label="title">
					<h1 className={`text-3xl font-bold ${darkmode ? "text-white" : "text-black"}`}>Shopping Cart</h1>
					<p className="py-7 text-gray-500 leading-6">
						<Link
							to="/"
							className={`underline underline-offset-2 ${
								darkmode ? "hover:text-gray-100" : "hover:text-gray-900"
							}`}
						>
							HomePage
						</Link>
						<span> / </span>
						<Link
							to="/allProducts"
							className={`underline underline-offset-2 ${
								darkmode ? "hover:text-gray-100" : "hover:text-gray-900"
							}`}
						>
							ClothingCategories
						</Link>
						<span> / </span>

						<Link
							to="/shoppingCart"
							className={`underline underline-offset-2 ${
								darkmode ? "hover:text-gray-100 text-gray-100" : "hover:text-gray-900 text-gray-900"
							}`}
						>
							ShoppingCart
						</Link>
					</p>
					<hr className="py-8" />
				</div>
			</div>

			{cartlist.length === 0 ? <EmptyCart /> : <ProductsCheckOut />}
		</div>
	);
};

export default ShoppingCart;
