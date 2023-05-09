import React from "react";
import { useSelector } from "react-redux";
import { darkMode } from "../Products/ProductSlice";

const Step = () => {
	const darkmode = useSelector(darkMode);
	return (
		<>
			<hr />
			<div
				className={`w-full py-20  flex justify-around items-center flex-wrap pl-20 relative ${
					darkmode ? "bg-[var(--blue-dark)]" : "bg-white"
				}`}
			>
				<div className="absolute hidden lg:inline-block z-[-1] left-0 top-[25%]">
					<img src="https://ciseco-nextjs.vercel.app/_next/static/media/VectorHIW.be5444ab.svg" alt="arrow" />
				</div>

				<div aria-label="step1" className="w-[300px]">
					<img
						src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHIW1img.5d05ab6a.png&w=256&q=75"
						alt="step1"
						className="w-[45%] object-cover mx-5 rounded-3xl"
					/>
					<div className="w-4/6 flex flex-col items-center  ">
						<h2 className=" w-fit py-1 px-3 my-5 text-center bg-rose-200/80 rounded-full text-rose-800 font-bold  text-xs ">
							Step 1
						</h2>
						<h1 className={`text-md font-bold my-4 ${darkmode ? "text-white/90" : "text-black"}`}>
							Filter & Discover
						</h1>
						<p className=" text-gray-500 text-center">Smart filtering & suggestion make it easy to find</p>
					</div>
				</div>

				<div aria-label="step2" className="w-[300px]">
					<img
						src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHIW2img.4553ec6b.png&w=256&q=75"
						alt="step1"
						className="w-[45%] object-cover mx-5 rounded-3xl"
					/>
					<div className="w-4/6 flex flex-col items-center  ">
						<h2 className=" w-fit py-1 px-3 my-5 text-center bg-sky-200/80 rounded-full text-sky-800 font-bold  text-xs ">
							Step 2
						</h2>
						<h1 className={`text-md font-bold my-4 ${darkmode ? "text-white/90" : "text-black"}`}>
							Add To Cart
						</h1>
						<p className=" text-gray-500 text-center">Easily select the correct items and add them to cart</p>
					</div>
				</div>

				<div aria-label="step3" className="w-[300px]">
					<img
						src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHIW3img.63a41796.png&w=256&q=75"
						alt="step1"
						className="w-[45%] object-cover mx-5 rounded-3xl"
					/>
					<div className="w-4/6 flex flex-col items-center  ">
						<h2 className=" w-fit py-1 px-3 my-5 text-center  bg-orange-200/80 rounded-full text-orange-800 font-bold  text-xs ">
							Step 3
						</h2>
						<h1 className={`text-md font-bold my-4 ${darkmode ? "text-white/90" : "text-black"}`}>
							Fast Shipping
						</h1>
						<p className=" text-gray-500 text-center">The carrier will confirm and first shipping to you</p>
					</div>
				</div>

				<div aria-label="step4" className="w-[300px]">
					<img
						src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHIW4img.10d25987.png&w=256&q=75"
						alt="step1"
						className="w-[45%] object-cover mx-5 rounded-3xl"
					/>
					<div className="w-4/6 flex flex-col items-center  ">
						<h2 className=" w-fit py-1 px-3 my-5 text-center  bg-violet-200/80 rounded-full text-violet-800 font-bold  text-xs ">
							Step 4
						</h2>
						<h1 className={`text-md font-bold my-4 ${darkmode ? "text-white/90" : "text-black"}`}>
							Enjoy the Products
						</h1>
						<p className=" text-gray-500 text-center">Have fun and enjoy the 5-stars quality products</p>
					</div>
				</div>
			</div>
			<hr />
		</>
	);
};

export default Step;
