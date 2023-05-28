import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToWishList, deleteFromWishList, wishList } from "../Cart/CartSLice";
import { allProducts, darkMode } from "../Products/ProductSlice";
import { AiFillStar, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { GrPrevious, GrNext } from "react-icons/gr";

import { TbShoppingCartPlus } from "react-icons/tb";
import Slider from "react-slick";
import { ToastContainer } from "react-toastify";
import Products from "../Products/Products";

const NewArrival = () => {
	const darkmode = useSelector(darkMode);
	const dispatch = useDispatch();
	const data = useSelector(allProducts);
	console.log(data);

	const menClothes = data?.slice(0, 2);
	const womenCLothes = data?.slice(15, 18);
	const extractedArr = womenCLothes.concat(menClothes);

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 2,
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnHover: true,
		prevArrow: <GrPrevious />,
		nextArrow: <GrNext />,
		responsive: [
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSLide: 1,
				},
			},
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					initialSLide: 1,
				},
			},
			{
				breakpoint: 1250,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					initialSLide: 3,
				},
			},
		],
	};

	const wishlist = useSelector(wishList);
	const [wish, Setwish] = useState(false);

	return (
		<div className={` w-full overflow-x-hidden py-10 mx-auto ${darkmode ? "bg-[var(--blue-dark)] " : "bg-white"}`}>
			<h1 className={`text-4xl font-bold px-8 leading-normal ${darkmode ? "text-white/90" : "text-[var(--blue-dark)]"}`}>
				New Arrivals.<span className="text-gray-500">REY backpacks & bags</span>
			</h1>

			<Slider {...settings} className="py-10 w-full flex justify-center">
				{extractedArr?.map((item) => (
					<Products item={item} key={item.id} />
				))}
			</Slider>
		</div>
	);
};

export default NewArrival;
