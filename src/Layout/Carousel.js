import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Carousel = () => {
	const [imgNo, SetimgNo] = useState(() => 0);
	const previous = () => {
		if (imgNo > 0) {
			SetimgNo((imgNo) => imgNo - 1);
		} else {
			SetimgNo(imgSlide.length - 1);
		}
	};

	const next = () => {
		if (imgNo < imgSlide.length - 1) {
			SetimgNo((imgNo) => imgNo + 1);
		} else {
			SetimgNo(0);
		}
	};

	const goToSLide = (index) => {
		SetimgNo(index);
	};

	const imgSlide = [
		{
			url: "https://img.freepik.com/free-vector/flat-design-shopping-center-twitter-header_23-2149342568.jpg?w=1400&t=st=1679853304~exp=1679853904~hmac=21b8e8a6b10b5a59e88bc3dba0bc8542ff65382d38b577f284acbd18fac80a2a",
		},
		{
			url: "https://img.freepik.com/free-vector/flat-design-shopping-center-facebook-cover_23-2149342571.jpg?w=1400&t=st=1679853197~exp=1679853797~hmac=0e1cd0d11fdf0254ee24b47811c1f3fdee0e3eed5e7caee5d716bf8a0433eaf1",
		},
		{
			url: "https://img.freepik.com/premium-psd/sweatshirts-mock-up-design_23-2149592340.jpg?w=1400",
		},
		{
			url: "https://img.freepik.com/premium-vector/ultra-sale-flash-banner-with-discount-everything-promo_419341-1211.jpg?w=1400",
		},
		{
			url: "https://img.freepik.com/free-vector/hand-drawn-fashion-collection-facebook-cover_23-2149982509.jpg?w=1400&t=st=1679853994~exp=1679854594~hmac=5ded812d050bf395f4753cf451977a4abae481c957432716aee7b0aad3d70071",
		},
	];

	return (
		<div className="w-full h-[500px] relative group mt-16">
			<div
				style={{
					backgroundImage: `url(${imgSlide[imgNo].url})`,
					// backgroundRepeat: "no-repeat",
					// backgroundPosition: "center",
					// backgroundSize: "cover",
				}}
				className="w-full h-full duration-500 bg-no-repeat bg-center bg-cover "
			></div>

			{/* left Arrow */}
			<div
				className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 bg-black/20 rounded-full p-4 cursor-pointer text-white"
				onClick={previous}
			>
				<BsChevronCompactLeft size={30} />
			</div>

			{/* Right Arrow */}
			<div
				className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 bg-black/20 rounded-full p-4 cursor-pointer text-white"
				onClick={next}
			>
				<BsChevronCompactRight size={30} />
			</div>

			<div className="flex justify-center py-4">
				{imgSlide.map((slide, index) => {
					return (
						<div key={index} onClick={() => goToSLide(index)} className="text-xl cursor-pointer text-slate-600">
							<RxDotFilled />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Carousel;
