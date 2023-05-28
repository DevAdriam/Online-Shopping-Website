import React from "react";
import { ReactComponent as NoOrder } from "../../SVG/Coronavirus Delivery Preventions-pana.svg";
import { ReactComponent as EmptyWishList } from "../../SVG/Empty-pana.svg";
import { useSelector } from "react-redux";
import { darkMode } from "../../Products/ProductSlice";

const NoOrderList = ({ chgLi }) => {
	const darkmode = useSelector(darkMode);
	return (
		<div className={`${darkmode && "bg-[var(--blue-dark)]"} h-max-content py-10 grid items-center overflow-hidden`}>
			<div>
				{chgLi === "wishlist" && <EmptyWishList className="mx-auto w-[85%] lg:w-[50%] sm:w-[70%]" />}
				{chgLi === "myorder" && <NoOrder className="mx-auto lg:w-[60%] sm:w-[70%]" />}

				<h1 className="font-bold lg:text-3xl md:text-2xl text-xl text-sky-500 text-center tracking-wider pb-10 pt-2">
					There is no {chgLi === "wishlist" && "wishlist!"}
					{chgLi === "myorder" && "order!"}
				</h1>
			</div>
		</div>
	);
};

export default NoOrderList;
