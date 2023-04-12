import React from "react";
import { CiSearch } from "react-icons/ci";
const HeroSection = () => {
	return (
		<div className="w-full lg:h-[100vh] md:h-[80vh] h-[55vh] bg-[var(--soft-blue)] relative overflow-hidden mt-20">
			<div className="w-full ">
				<div className="absolute z-10 md:top-[35%] sm:top-[50%] top-[40%] lg:w-1/2 w-full sm:px-10 px-5">
					<span className="text-xl text-slate-800 mb-10 font-[Roboto] ">In this season , find the best</span>

					<h1 className="md:text-6xl text-4xl text-[var(--blue-dark)] font-bold lg:py-10 py-4">
						Exclusive collection for everyone
					</h1>

					<button className="w-[180px] py-5  flex items-center justify-center bg-[var(--blue-dark)] text-white  rounded-full font-bold font-[Roboto] leading-normal hover:opacity-90">
						<span>Explore now</span> <CiSearch size={25} className="text-slate-400 ml-2" />
					</button>
				</div>
				<img
					src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-right-2.dc1c84f6.png&w=750&q=75"
					alt=""
					className="max-w-[650px] md:w-[5/6] w-11/12 object-cover absolute md:top-[-50px] md:right-[-5px] -right-10 top-[-30px]"
				/>
			</div>
		</div>
	);
};

export default HeroSection;
