import React from "react";

import { AiFillStar, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { TbShoppingCartPlus } from "react-icons/tb";
import { useSelector } from "react-redux";
import { darkMode } from "./ProductSlice";
const Products = ({ item }) => {
	const darkmode = useSelector(darkMode);
	return (
		<div>
			<div
				aria-label="allproducts"
				className="w-full flex flex-grow justify-start items-center flex-wrap gap-16 lg:gap-1"
			>
				<div
					key={item.id}
					className={`slick-slide arrivals relative mb-10  min-w-[300px] lg:min-w-[250px] h-[400px] rounded-xl  flex flex-col items-center justify-center ${
						darkmode ? "bg-white " : "bg-transparent"
					}  `}
				>
					<div className="absolute top-4 right-6 cursor-pointer">
						<AiOutlineHeart size={25} />
					</div>
					<div className="absolute top-8 left-[30%] z-[-1]">
						<img src={item.image} alt={item.category} className=" object-cover bg-center" width={100} />
					</div>

					<div className="actionsBtn flex ">
						<button className="w-[130px] h-[37px]  rounded-full flex gap-1 items-center shadow-sm mx-2 text-white bg-[var(--blue-dark)] text-center hover:opacity-90">
							<TbShoppingCartPlus size={20} className="ml-2" />
							<span className="mx-2">AddToCart</span>
						</button>
						<button className="w-[120px] h-[37px] rounded-full shadow-sm bg-white  hover:bg-gray-300/60">
							Quick View
						</button>
					</div>

					<div className="absolute bottom-0 left-0 w-full z-[-1]">
						<h1 className="text-[var(--blue-dark)] text-md font-bold py-3 px-5">{item.title}</h1>
						<h1 className="font-bold text-gray-400 px-5">{item.category}</h1>
						<div className="py-3 px-5 flex justify-between">
							<button className="w-[70px] h-[30px] leading-[30px] border-2  border-[var(--light-green)] text-[var(--light-green)] text-sm font-bold rounded-md">
								$ {item.price}
							</button>

							<span className="flex items-center  ">
								<AiFillStar className="text-yellow-500 " />
								{item.rating.rate}
								<span className="px-1">({item.rating.count} reviews)</span>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Products;
