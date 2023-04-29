import React from "react";
import { useSelector } from "react-redux";
import { wishList } from "../Cart/CartSLice";
import Products from "../Products/Products";
import { ToastContainer } from "react-toastify";
import { ReactComponent as EmptyWishlist } from "../SVG/Empty-pana.svg";
import { darkMode } from "../Products/ProductSlice";
const Accwishlist = () => {
	const darkmode = useSelector(darkMode);
	const wishlist = useSelector(wishList);

	return (
		<div className={`w-full ${darkmode && "bg-[var(--blue-dark)]"}`}>
			<ToastContainer
				className="toast-position"
				position="top-right"
				autoClose={500}
				hideProgressBar={true}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
			<h1 className={`py-10 text-2xl font-bold ${darkmode && "text-white"}`}>List of wishList</h1>

			{wishlist.length === 0 ? (
				<EmptyWishlist className="w-[50%] mx-auto" />
			) : (
				<div
					aria-label="allproducts"
					className={`w-full flex md:justify-start justify-center relative z-20 items-center flex-wrap md:gap-5 gap-2 
					`}
				>
					{wishlist.map((item) => (
						<Products key={item.id} item={item} />
					))}
				</div>
			)}

			{wishlist.length === 0 && (
				<h1 className="font-bold lg:text-3xl md:text-2xl text-xl text-sky-500 text-center tracking-wider pb-10 pt-2">
					There is no wishlists
				</h1>
			)}
		</div>
	);
};

export default Accwishlist;
