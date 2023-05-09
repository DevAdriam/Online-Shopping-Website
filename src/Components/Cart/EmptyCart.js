import React from "react";
import { ReactComponent as Cart } from "../SVG/No data-cuate.svg";
import { useSelector } from "react-redux";
import { darkMode } from "../Products/ProductSlice";
import { TbArrowRight } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
const EmptyCart = () => {
	const darkmode = useSelector(darkMode);
	const navigate = useNavigate();
	return (
		<div
			className={`text-center p-5 pb-10 h-[80vh]  overflow-y-hidden md:min-h-[100vh] ${
				darkmode ? "bg-[var(--blue-dark)] text-white/90 " : "bg-white"
			}`}
		>
			<Cart className="w-[50%] mx-auto" />
			<p className="md:text-5xl sm:text-3xl text-2xl font-bold text-sky-500/80 py-4 font-mono">Your Cart is Empty</p>
			<button
				className="w-[200px] h-[50px] rounded-md bg-sky-500/80 text-white/90 font-bold py-4 leading-[10px] hover:shadow-lg hover:opacity-90"
				onClick={() => navigate("/allProducts")}
			>
				Go Shopping <TbArrowRight className="mx-1 inline-block" size={25} />
			</button>
		</div>
	);
};

export default EmptyCart;
