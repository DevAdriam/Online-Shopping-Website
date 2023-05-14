import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { allProducts, darkMode } from "./ProductSlice";
import Nav from "../Layout/Nav";
import { CiShoppingCart } from "react-icons/ci";
import { FaShippingFast } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { RiGlobalLine, RiRefund2Line } from "react-icons/ri";
import { addToCart } from "../Cart/CartSLice";
import { ToastContainer, toast } from "react-toastify";
import Review from "../Reviews/Review";
import Slider from "react-slick";
import { AiFillStar } from "react-icons/ai";

import { GrPrevious, GrNext } from "react-icons/gr";
import Products from "./Products";
const ProductDetail = () => {
	const sizeArr = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];
	const param = useParams();
	const dispatch = useDispatch();
	const [color, Setcolor] = useState("black");
	const [size, Setsize] = useState(sizeArr[2]);
	const [productCount, SetproductCount] = useState(1);

	// accordions
	const [desc, Setdesc] = useState(true);
	const [fabric, Setfabric] = useState(false);
	const [fit, Setfit] = useState(false);
	const [faq, Setfaq] = useState(false);

	const darkmode = useSelector(darkMode);
	const allItems = useSelector(allProducts);
	const item = allItems.find((product) => product.id === Number(param.pId));
	const recommenndItems = allItems
		.filter((product) => product.category === item.category)
		.filter((product) => product.id !== item.id);
	console.warn(recommenndItems);

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 2,
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnHover: true,
		prevArrow: <GrPrevious />,
		nextArrow: <GrNext />,
		responsive: [
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					initialSLide: 1,
				},
			},
			{
				breakpoint: 845,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSLide: 1,
				},
			},
		],
	};

	//functions

	const addingCart = () => {
		dispatch(
			addToCart({
				id: item.id,
				totalprice: item.price,
				quantity: productCount,
				price: item.price,
				title: item.title,
				image: item.image,
				color: color,
				size: size,
			})
		);
		console.log(color, size, productCount);
		toast.success("item added to cart");
	};
	return (
		<div className="max-w-[100vw] overflow-x-hidden">
			<Nav />
			<ToastContainer
				className="toast-position"
				position="top-right"
				autoClose={500}
				hideProgressBar={true}
				newestOnTop={false}
				rtl={false}
				pauseOnFocusLoss
				draggable
				theme="light"
			/>

			<div
				className={`py-[100px] sm:px-10 px-2 w-[100vw] overflow-x-hidden ${
					darkmode ? "bg-[var(--blue-dark)] text-white/90" : "bg-white text-black"
				}`}
			>
				<div className="lg:flex w-full ">
					<div
						className={`lg:w-[50%] w-[100%] h-[80vh] rounded-xl lg:flex grid items-center ${
							darkmode ? "bg-white" : "bg-sky-100/20"
						} `}
					>
						<img
							src={item.image}
							alt={item.category}
							className="max-w-[50%] h-[400px] object-contain mx-auto  "
						/>
					</div>

					<div className="lg:w-[50%] w-full h-full sm:pl-10 pl-4 pt-5">
						<h1
							className={`lg:tcursor-pointer ext-3xl sm:text-2xl text-xl font-bold ${
								darkmode ? "text-white/90" : "text-black"
							}`}
						>
							{item.title}
						</h1>

						<div
							className={`pt-5 pb-9 relative flex w-full items-center ${
								darkmode ? "text-white/90" : "text-black"
							}`}
						>
							<button className="sm:w-[90px] w-[100px] h-[40px] lg:leading-[30px]  border-[3px]  border-[var(--light-green)] text-[var(--light-green)]  text-lg  font-bold rounded-md">
								{item.price} $
							</button>
							<span className="inline-block w-[1px] sm:mx-5 mx-2 h-[35px]  bg-gray-400/80 rotate-[180deg]"></span>
							<span className="flex items-center text-md sm:pr-5 pr-2">
								<AiFillStar size={25} className="text-yellow-500 " />
								{item.rating.rate}
							</span>
							<span className=" text-md underline">{item.rating.count} reviews</span>
						</div>

						<h2
							className={`text-lg ${item.category === "jewelery" && "hidden"} ${
								item.category === "electronics" && "hidden"
							}`}
						>
							Color : <span className="font-bold">{color}</span>
						</h2>

						<div
							className={`${item.category === "jewelery" && "hidden"} ${
								item.category === "electronics" && "hidden"
							} flex gap-[15px] items-center mt-3 ${darkmode ? "text-white/90" : "text-black"}`}
						>
							{/* Colors */}
							<div
								className={`w-[25px] h-[25px] rounded-full bg-red-500 ${
									item.category === "jewelery" && "hidden"
								} ${item.category === "electronics" && "hidden"} ${
									color === "red" && "outline outline-offset-2 outline-blue-500 rounded-full"
								} `}
								onClick={() => Setcolor("red")}
							></div>
							<div
								className={`w-[25px] h-[25px] rounded-full bg-sky-500 ${
									color === "skyBlue" && "outline outline-offset-2 outline-blue-500"
								} `}
								onClick={() => Setcolor("skyBlue")}
							></div>
							<div
								className={`w-[25px] h-[25px] rounded-full bg-orange-500 ${
									color === "orange" && "outline outline-offset-2 outline-blue-500"
								} `}
								onClick={() => Setcolor("orange")}
							></div>
							<div
								className={`w-[25px] h-[25px] rounded-full bg-black ${
									color === "black" && "outline outline-offset-2 outline-blue-500"
								} `}
								onClick={() => Setcolor("black")}
							></div>
							<div
								className={`w-[25px] h-[25px] rounded-full bg-purple-500 ${
									color === "purple" && "outline outline-offset-2 outline-blue-500"
								} `}
								onClick={() => Setcolor("purple")}
							></div>
							<div
								className={`w-[25px] h-[25px] rounded-full bg-green-500 ${
									color === "green" && "outline outline-offset-2 outline-blue-500"
								} `}
								onClick={() => Setcolor("green")}
							></div>
							<div
								className={`w-[25px] h-[25px] rounded-full bg-cyan-500 ${
									color === "cyan" && "outline outline-offset-2 outline-blue-500"
								} `}
								onClick={() => Setcolor("cyan")}
							></div>
						</div>

						<h2
							className={`text-lg mt-5 ${item.category === "jewelery" && "hidden"} ${
								item.category === "electronics" && "hidden"
							}`}
						>
							Size : <span className="font-bold">{size}</span>
						</h2>

						<div
							className={`flex gap-[15px] items-center mt-3 ${item.category === "jewelery" && "hidden"} ${
								item.category === "electronics" && "hidden"
							}`}
						>
							{/* size */}
							<div
								className={`w-[70px] h-[40px] border-2 cursor-pointer rounded-2xl grid items-center text-center font-bold ${
									size === sizeArr[0] && "bg-sky-500 text-white/90"
								} `}
								onClick={() => Setsize(sizeArr[0])}
							>
								{sizeArr[0]}
							</div>

							<div
								className={`w-[70px] h-[40px] border-2 cursor-pointer rounded-2xl grid items-center text-center font-bold ${
									size === sizeArr[1] && "bg-sky-500 text-white/90"
								}`}
								onClick={() => Setsize(sizeArr[1])}
							>
								{sizeArr[1]}
							</div>

							<div
								className={`w-[70px] h-[40px] border-2 cursor-pointer rounded-2xl grid items-center text-center font-bold ${
									size === sizeArr[2] && "bg-sky-500 text-white/90"
								}`}
								onClick={() => Setsize(sizeArr[2])}
							>
								{sizeArr[2]}
							</div>

							<div
								className={`w-[70px] h-[40px] border-2 cursor-pointer rounded-2xl grid items-center text-center font-bold ${
									size === sizeArr[3] && "bg-sky-500 text-white/90"
								}`}
								onClick={() => Setsize(sizeArr[3])}
							>
								{sizeArr[3]}
							</div>

							<div
								className={`w-[70px] h-[40px] border-2 cursor-pointer rounded-2xl grid items-center text-center font-bold ${
									size === sizeArr[4] && "bg-sky-500 text-white/90"
								}`}
								onClick={() => Setsize(sizeArr[4])}
							>
								{sizeArr[4]}
							</div>

							<div
								className={`w-[70px] h-[40px] border-2 cursor-pointer rounded-2xl grid items-center text-center font-bold ${
									size === sizeArr[5] && "bg-sky-500 text-white/90"
								}`}
								onClick={() => Setsize(sizeArr[5])}
							>
								{sizeArr[5]}
							</div>
						</div>

						<div className="flex items-center w-full mt-5 justify-start">
							{/* + 1 - buttons */}

							<div className="sm:w-[35%] w-[38%] bg-[var(--pastel-blue)] rounded-full h-[50px] sm:mr-5 mr-3 px-3 flex items-center justify-around">
								<button
									disabled={productCount === 1 && true}
									className={`w-[35px] h-[35px] rounded-full border   ${
										productCount === 1
											? "text-gray-300/90 border-gray-300/90"
											: "text-gray-500 border-gray-400"
									} grid items-center`}
									onClick={() => SetproductCount(productCount - 1)}
								>
									-
								</button>
								<span className="text-gray-500 mx-3">{productCount}</span>
								<button
									onClick={() => SetproductCount(productCount + 1)}
									className="w-[35px] h-[35px] rounded-full border border-gray-400 text-gray-500 grid items-center"
								>
									+
								</button>
							</div>

							<button
								className={`w-[60%] rounded-full h-[50px] shadow-sm shadow-[var(--blue-dark)] text-xl tracking-wide flex items-center justify-center ${
									darkmode ? "bg-white text-[var(--blue-dark)]" : "bg-[var(--blue-dark)] text-white/90"
								} hover:opacity-[0.9]`}
								onClick={addingCart}
							>
								<CiShoppingCart className="mx-1" size={25} /> Add To Cart
							</button>
						</div>

						<hr className="my-10 " />

						{/* Start Description */}

						<div className="w-full rounded-2xl h-[50px] bg-[var(--pastel-blue)] font-bold flex items-center justify-between px-5 text-black mt-3 ">
							<h1>Description</h1>
							{desc ? (
								<span className="text-lg font-bold cursor-pointer" onClick={() => Setdesc(!desc)}>
									-
								</span>
							) : (
								<span className="text-lg font-bold cursor-pointer" onClick={() => Setdesc(!desc)}>
									+
								</span>
							)}
						</div>
						<p className={`${desc ? "block" : "hidden"} py-5 px-3 `}>
							Fashion is a form of self-expression and autonomy at a particular period and place and in a
							specific context, of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body
							posture.
						</p>

						<div className="w-full rounded-2xl h-[50px] bg-[var(--pastel-blue)] font-bold flex items-center justify-between px-5 text-black mt-3 ">
							<h1>Fabric + core</h1>
							{fabric ? (
								<span className="text-lg font-bold cursor-pointer" onClick={() => Setfabric(!fabric)}>
									-
								</span>
							) : (
								<span className="text-lg font-bold cursor-pointer" onClick={() => Setfabric(!fabric)}>
									+
								</span>
							)}
						</div>
						<ul className={`${fabric ? "block" : "hidden"} py-5 px-7  list-disc `}>
							<li className="py-1">Made from a sheer Belgian power micromesh.</li>
							<li className="py-1">74% Polyamide (Nylon) 26% Elastane (Spandex) </li>
							<li className="py-1"> Adjustable hook & eye closure and straps</li>
							<li className="py-1">Hand wash in cold water, dry flat</li>
						</ul>

						<div className="w-full rounded-2xl h-[50px] bg-[var(--pastel-blue)] font-bold flex items-center justify-between px-5 text-black mt-3 ">
							<h1>How it fits</h1>
							{fit ? (
								<span className="text-lg font-bold cursor-pointer" onClick={() => Setfit(!fit)}>
									-
								</span>
							) : (
								<span className="text-lg font-bold cursor-pointer" onClick={() => Setfit(!fit)}>
									+
								</span>
							)}
						</div>
						<p className={`${fit ? "block" : "hidden"} py-5 px-3 `}>
							Use this as a guide. Preference is a huge factor — if you're near the top of a size range
							and/or prefer more coverage, you may want to size up.
						</p>

						<div className="w-full rounded-2xl h-[50px] bg-[var(--pastel-blue)] font-bold flex items-center justify-between px-5 text-black mt-3 ">
							<h1>FAQ</h1>
							{faq ? (
								<span className="text-lg font-bold cursor-pointer" onClick={() => Setfaq(!faq)}>
									-
								</span>
							) : (
								<span className="text-lg font-bold cursor-pointer" onClick={() => Setfaq(!faq)}>
									+
								</span>
							)}
						</div>
						<ul className={`${faq ? "block" : "hidden"} py-5 px-7  list-disc `}>
							<li className="py-1">
								All full-priced, unworn items, with tags attached and in their original packaging are
								eligible for return or exchange within 30 days of placing your order.
							</li>
							<li className="py-1">
								Please note, packs must be returned in full. We do not accept partial returns of packs.
							</li>
							<li className="py-1"> Want to know our full returns policies? Here you go.</li>
							<li className="py-1">Want more info about shipping, materials or care instructions? Here!</li>
						</ul>

						{/*Shipping about 4 divs */}

						<div className="py-8 w-full flex items-center flex-wrap gap-4 text-black">
							<div className="lg:w-[48%] w-[97%] h-[150px] rounded-xl bg-rose-100 flex flex-col justify-center items-start px-5">
								<FaShippingFast size={25} />
								<h1 className="font-bold py-1">Free Shipping</h1>
								<span className="text-gray-500">On orders over a $50.00</span>
							</div>
							<div className="lg:w-[48%] w-[97%] h-[150px] rounded-xl bg-cyan-100 flex flex-col justify-center items-start px-5">
								<GiReturnArrow size={25} />
								<h1 className="font-bold py-1">Very Easy To Return</h1>
								<span className="text-gray-500">Just phone number</span>
							</div>
							<div className="lg:w-[48%] w-[97%] h-[150px] rounded-xl bg-cyan-100 flex flex-col justify-center items-start px-5">
								<RiGlobalLine size={25} />
								<h1 className="font-bold py-1">Nationwide Delivery </h1>
								<span className="text-gray-500">Fast delivery nationwide</span>
							</div>
							<div className="lg:w-[48%] w-[97%] h-[150px] rounded-xl bg-orange-100 flex flex-col justify-center items-start px-5">
								<RiRefund2Line size={25} />
								<h1 className="font-bold">Refunds Policy</h1>
								<span className="text-gray-500">60 days to return</span>
							</div>
						</div>
					</div>
				</div>
				<div className="lg:w-[70%] w-full px-5 my-5">
					<h1 className="py-5 font-bold text-2xl">Product Details</h1>
					<p className="text-md tracking-wide leading-8">{item.description}</p>
				</div>

				<hr className="my-14" />

				<div>
					<h1 className="font-bold text-2xl flex">
						<AiFillStar size={35} className="mx-1" /> {item.rating.rate} /
						<span className="mx-1">{item.rating.count} Reviews</span>
					</h1>
				</div>
				<Review />

				{/* Recommended Products  */}
				<div>
					<h1 className={`font-bold text-2xl text-[var(--blue-dark)] mt-10 mb-8 ${darkmode && "text-white/90"} `}>
						Customers also purchased
					</h1>

					<Slider {...settings} className={`py-10 w-full text-black`}>
						{recommenndItems.map((item) => (
							<Products item={item} key={item.id} />
						))}
					</Slider>
				</div>
			</div>
		</div>
	);
};

export default ProductDetail;
