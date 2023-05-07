import React from "react";
import { useSelector } from "react-redux";
import { darkMode } from "../Products/ProductSlice";
import Slider from "react-slick";
import { GrPrevious, GrNext } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const Collection = () => {
	const darkmode = useSelector(darkMode);
	const navigate = useNavigate();

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
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

	console.warn(darkmode);

	return (
		<div className={`py-28 w-full px-8 ${darkmode ? "bg-[var(--blue-dark)] " : "bg-white"}`}>
			<h1 className={`text-4xl font-bold leading-normal ${darkmode ? "text-white" : "text-[var(--blue-dark)]"}`}>
				Discover More.<span className="text-gray-500">Good Things are waiting For You</span>
			</h1>

			<Slider {...settings} className="py-10 w-full">
				<div className="slick-slide  h-[250px] rounded-xl bg-[var(--light-yellow)] px-2 ">
					<div className="flex flex-col gap-3 pl-2 px-2 ">
						<span className="text-sm text-slate-700/80">Explore new arrivals</span>
						<h1 className="text-2xl text-[var(--blue-dark) font-bold">Shop the latest from top brands</h1>
						<button
							className="bg-white rounded-full w-[120px] h-[50px] "
							onClick={() => navigate("/allProducts")}
						>
							show me all
						</button>
					</div>
					<div>
						<img
							src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F5.addcba21.png&w=640&q=75"
							alt="men clothing"
						/>
					</div>
				</div>

				<div className="slick-slide  h-[250px] rounded-xl bg-[var(--soft-pink)] px-2 ">
					<div className="flex flex-col gap-3 pl-2 px-2 ">
						<span className="text-sm text-slate-700/80">Digital gift cards</span>
						<h1 className="text-2xl text-[var(--blue-dark) font-bold">Give the gift of choice</h1>
						<button
							className="bg-white rounded-full w-[120px] h-[50px] "
							onClick={() => navigate("/allProducts")}
						>
							show me all
						</button>
					</div>
					<div>
						<img
							src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F8.e395a7b8.png&w=640&q=75"
							alt="short pant"
						/>
					</div>
				</div>

				<div className="slick-slide  h-[250px] rounded-xl bg-[var(--soft-blue)] px-2 ">
					<div className="flex flex-col gap-3 pl-2 px-2 ">
						<span className="text-sm text-slate-700/80">Sale Collection</span>
						<h1 className="text-2xl text-[var(--blue-dark) font-bold">Up to 80% off retail</h1>
						<button
							className="bg-white rounded-full w-[120px] h-[50px] "
							onClick={() => navigate("/allProducts")}
						>
							show me all
						</button>
					</div>
					<div>
						<img
							src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F9.6769bc98.png&w=640&q=75"
							alt="bag"
						/>
					</div>
				</div>

				<div className="slick-slide  h-[250px] rounded-xl bg-[var(--light-yellow)] px-2 ">
					<div className="flex flex-col gap-3 pl-2 px-2 ">
						<span className="text-sm text-slate-700/80">Sale Collection</span>
						<h1 className="text-2xl text-[var(--blue-dark) font-bold">Up to 80% off retail</h1>
						<button
							className="bg-white rounded-full w-[120px] h-[50px] "
							onClick={() => navigate("/allProducts")}
						>
							show me all
						</button>
					</div>
					<div>
						<img
							src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.a3e1e5fb.png&w=640&q=75"
							alt="women bag"
						/>
					</div>
				</div>

				<div className="slick-slide  h-[250px] rounded-xl bg-[var(--sky-blue)]  px-2 ">
					<div className="flex flex-col gap-3 pl-2 px-2 ">
						<span className="text-sm text-slate-700/80">Explore new all</span>
						<h1 className="text-2xl text-[var(--blue-dark) font-bold">Shop the latest from top brands</h1>
						<button
							className="bg-white rounded-full w-[120px] h-[50px] "
							onClick={() => () => navigate("/allProducts")}
						>
							show me all
						</button>
					</div>
					<div>
						<img
							src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F17.fcfa959c.png&w=640&q=75"
							alt="women clothing"
						/>
					</div>
				</div>
			</Slider>
		</div>
	);
};

export default Collection;
