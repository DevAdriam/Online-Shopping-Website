import React from "react";
import { useSelector } from "react-redux";
import { wishList } from "../../Cart/CartSLice";
import Products from "../../Products/Products";
import { darkMode } from "../../Products/ProductSlice";
import NoOrderList from "../EmptySvGcomponent/NoOrderList";
const Accwishlist = ({ chgLi }) => {
	const darkmode = useSelector(darkMode);
	const wishlist = useSelector(wishList);
	return wishlist.length === 0 ? (
		<NoOrderList chgLi={chgLi} />
	) : (
		<div className={`w-full min-h-[100vh] ${darkmode && "bg-[var(--blue-dark)]"}`}>
			<h1 className={`py-10 text-2xl font-bold ${darkmode && "text-white/90"}`}>List of wishList</h1>
			<div
				aria-label="allproducts"
				className={`w-full flex md:justify-start justify-center relative z-20 items-center flex-wrap md:gap-5 gap-2 
					`}
			>
				{wishlist.map((item) => (
					<Products key={item.id} item={item} />
				))}
			</div>
		</div>
	);
};

export default Accwishlist;
