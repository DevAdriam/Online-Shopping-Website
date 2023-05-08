import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { AiFillStar, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BiDetail } from "react-icons/bi";
import { TbShoppingCartPlus } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToWishList, deleteFromWishList, wishList } from "../Cart/CartSLice";
import { darkMode } from "./ProductSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Products = ({ item }) => {
	const darkmode = useSelector(darkMode);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	//getting wishlist item
	const wishlist = useSelector(wishList);
	const haveWish = wishlist.find((product) => product.id === item.id);
	const [wish, Setwish] = useState(item.save);

	// Notification
	const notiAddCart = () => {
		toast.success("item added to cart");
	};

	const addCart = () => {
		const product = {
			id: item.id,
			image: item.image,
			category: item.category,
			title: item.title,
			price: item.price,
		};
		dispatch(addToCart(product));
		try {
			notiAddCart();
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div
			key={item.id}
			className={`slick-slide arrivals relative mb-10  lg:min-w-[310px] min-h-[350px] min-w-[330px] w-full rounded-xl  flex flex-col items-center justify-center shadow-sm ${
				darkmode ? "bg-white " : "bg-sky-100/20"
			}  `}
		>
			<div
				className="absolute top-4 right-6 cursor-pointer"
				onClick={(e) => {
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
				}}
			>
				{haveWish ? <AiFillHeart size={25} fill="red" /> : <AiOutlineHeart size={25} />}
			</div>
			<div className="absolute top-8 left-[30%] z-[-1]">
				<img src={item.image} alt={item.category} className=" object-cover bg-center" width={80} />
			</div>

			<div className="actionsBtn flex ">
				<button
					onClick={addCart}
					className="w-[130px] h-[37px]  rounded-full flex gap-1 items-center shadow-sm mx-2 text-white bg-[var(--blue-dark)] text-center hover:opacity-90"
				>
					<TbShoppingCartPlus size={20} className="ml-2" />
					<span className="mx-2">AddToCart</span>
				</button>
				<button
					className="w-[120px] h-[37px] rounded-full shadow-sm  flex gap-2 items-center justify-center bg-gray-300 hover:bg-gray-300/50"
					onClick={() => navigate(`/allProducts/${item.id}`)}
				>
					<BiDetail size={20} className="ml-3" />
					Detail
				</button>
			</div>

			<div className="absolute bottom-0 left-0 w-full z-[-1]">
				<h1 className="text-[var(--blue-dark)] text-md font-bold py-3 px-5">{item.title.slice(0, 50)}</h1>
				<h1 className="font-bold text-gray-400 px-5">{item.category}</h1>
				<div className="py-3 px-5  flex justify-between">
					<button className="w-[70px]  h-[30px] lg:leading-[30px] border-2  border-[var(--light-green)] text-[var(--light-green)] text-sm font-bold rounded-md">
						$ {item.price}
					</button>

					<span className="flex items-center text-md ">
						<AiFillStar className="text-yellow-500 " />
						{item.rating.rate}
						<span className="px-1">({item.rating.count} reviews)</span>
					</span>
				</div>
			</div>
		</div>
	);
};

export default Products;
