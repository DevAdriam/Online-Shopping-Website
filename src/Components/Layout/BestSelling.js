import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToWishList, deleteFromWishList, wishList } from "../Cart/CartSLice";
import { allProducts, darkMode } from "../Products/ProductSlice";
import { AiFillStar, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { TbShoppingCartPlus } from "react-icons/tb";
import Slider from "react-slick";
import { ToastContainer } from "react-toastify";

const BestSelling = () => {
	const darkmode = useSelector(darkMode);
	const dispatch = useDispatch();
	const data = useSelector(allProducts);
	console.log(data);

	const bestselling = data?.slice(10, 12);
	const secondBestSelling = data?.slice(5, 8);
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
	const wishlist = useSelector(wishList);
	const [wish, Setwish] = useState(false);

	return (
		<div className={` w-full px-8 py-10 mx-auto ${darkmode ? "bg-[var(--blue-dark)] " : "bg-white"}`}>
			<h1 className={`text-4xl font-bold  leading-normal ${darkmode ? "text-white" : "text-[var(--blue-dark)]"}`}>
				Best Sellers.<span className="text-gray-500">Best selling of the month</span>
			</h1>
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

			<Slider {...settings} className="py-10">
				{extractedArr?.map((item) => {
					const haveWish = wishlist.find((product) => product.id === item.id);
					const notiAddCart = () => {
						toast.success("item added to cart");
					};

					const addCart = () => {
						const cartItem = {
							id: item.id,
							image: item.image,
							category: item.category,
							title: item.title,
							price: item.price,
						};

						dispatch(addToCart(cartItem));
						notiAddCart();
					};

					const addWish = () => {
						Setwish(!wish);
						// notiWishList();

						haveWish
							? dispatch(deleteFromWishList(item.id))
							: dispatch(
									addToWishList({
										id: item.id,
										image: item.image,
										category: item.category,
										title: item.title,
										price: item.price,
										rating: {
											rate: item.rating.rate,
											count: item.rating.count,
										},
									})
							  );
					};
					return (
						<div
							key={item.id}
							className={`slick-slide arrivals relative  min-w-[300px] w-full h-[400px] rounded-xl  mx-auto flex flex-col items-center justify-center ${
								darkmode ? "bg-white " : "bg-transparent"
							}  `}
						>
							<div className="absolute top-4 right-6 cursor-pointer" onClick={addWish}>
								{haveWish ? <AiFillHeart size={25} fill="red" /> : <AiOutlineHeart size={25} />}
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
