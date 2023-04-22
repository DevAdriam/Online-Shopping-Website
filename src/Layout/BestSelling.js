import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToWishList } from "../Cart/CartSLice";
import { darkMode } from "../Products/ProductSlice";
import { Customhook } from "../Hooks/Customhook";
import { AiFillStar, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { TbShoppingCartPlus } from "react-icons/tb";
import Slider from "react-slick";

const BestSelling = () => {
	const darkmode = useSelector(darkMode);
	const dispatch = useDispatch();
	const { data, error, isLoading, isError } = Customhook();
	console.log(data, error);

	if (isLoading) {
		return <h2>Loading....</h2>;
	}
	if (isError) {
		return <h2>{error}</h2>;
	}
	const bestselling = data?.data.slice(10, 12);
	const secondBestSelling = data?.data.slice(5, 8);
	const extractedArr = bestselling.concat(secondBestSelling);

	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 1022,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<div className={` w-full px-8 py-10 mx-auto ${darkmode ? "bg-[var(--blue-dark)] " : "bg-white"}`}>
			<h1 className={`text-4xl font-bold  leading-normal ${darkmode ? "text-white" : "text-[var(--blue-dark)]"}`}>
				Best Sellers.<span className="text-gray-500">Best selling of the month</span>
			</h1>

			<Slider {...settings} className="py-10">
				{extractedArr?.map((item) => {
					const addCart = () => {
						const cartItem = {
							id: item.id,
							title: item.title,
							image: item.image,
							price: item.price,
						};

						dispatch(addToCart(cartItem));
					};

					const addWish = () => {
						const cartItem = {
							id: item.id,
							title: item.title,
							image: item.image,
							price: item.price,
							quantity: 1,
						};

						dispatch(addToWishList(cartItem));
					};
					return (
						<div
							key={item.id}
							className={`slick-slide arrivals relative  min-w-[300px] w-full h-[400px] rounded-xl  mx-auto flex flex-col items-center justify-center ${
								darkmode ? "bg-white " : "bg-transparent"
							}  `}
						>
							<div className="absolute top-4 right-6 cursor-pointer" onClick={addWish}>
								<AiOutlineHeart size={25} />
							</div>
							<div className="absolute top-8 left-[30%] z-[-1]">
								<img
									src={item.image}
									alt={item.category}
									className=" object-cover bg-center"
									width={100}
								/>
							</div>

							<div className="actionsBtn flex ">
								<button
									className="w-[130px] h-[37px]  rounded-full flex gap-1 items-center shadow-sm mx-2 text-white bg-[var(--blue-dark)] text-center hover:opacity-90"
									onClick={addCart}
								>
									<TbShoppingCartPlus size={20} className="ml-2" />
									<span className="mx-2">AddToCart</span>
								</button>
								<button className="w-[120px] h-[37px] rounded-full shadow-sm bg-white  hover:bg-gray-300/60">
									Quick View
								</button>
							</div>

							<div className="absolute bottom-0 left-0 w-full ">
								<h1 className="text-[var(--blue-dark)] text-md font-bold py-3 px-5">{item.title}</h1>
								<h1 className="font-bold text-gray-400 px-5">{item.category}</h1>
								<div className="py-3 px-5 flex justify-between ">
									<button className="w-[70px] h-[30px] leading-[30px] border-2  border-[var(--light-green)] text-[var(--light-green)] text-sm font-bold rounded-md">
										$ {item.price}
									</button>

									<span className="flex items-center">
										<AiFillStar className="text-yellow-500 " />
										{item.rating.rate}
										<span className="px-1">({item.rating.count} reviews)</span>
									</span>
								</div>
							</div>
						</div>
					);
				})}
			</Slider>
		</div>
	);
};

export default BestSelling;
