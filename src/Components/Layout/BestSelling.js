import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { allProducts, darkMode } from "../Products/ProductSlice";
import { GrPrevious, GrNext } from "react-icons/gr";

import Slider from "react-slick";
import { ToastContainer } from "react-toastify";
import Products from "../Products/Products";

const BestSelling = () => {
	const darkmode = useSelector(darkMode);
	const data = useSelector(allProducts);
	console.log(data);

	const bestselling = data?.slice(10, 12);
	const secondBestSelling = data?.slice(5, 8);
	const extractedArr = bestselling.concat(secondBestSelling);

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
				breakpoint: 1000,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSLide: 1,
				},
			},
		],
	};

	return (
		<div className={` w-full overflow-x-hidden py-10 mx-auto ${darkmode ? "bg-[var(--blue-dark)] " : "bg-white"}`}>
			<h1 className={`text-4xl font-bold px-8 leading-normal ${darkmode ? "text-white/90" : "text-[var(--blue-dark)]"}`}>
				Best Sellers.<span className="text-gray-500">Best selling of the month</span>
			</h1>

			<Slider {...settings} className="py-10 w-full">
				{extractedArr?.map((item) => (
					<Products item={item} key={item.id} />
				))}
			</Slider>
		</div>
	);
};

export default BestSelling;
