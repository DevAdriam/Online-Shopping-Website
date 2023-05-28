import React from "react";
import cheerIcon from "../images/confetti.png";

import { BsArrowRight } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { allSuccessOrder, allTasksFinished, showModalBox } from "../Cart/CartSLice";
import { useNavigate } from "react-router-dom";
import { darkMode } from "../Products/ProductSlice";
const ModalBoxCompleteOrder = () => {
	const purchaseOrder = useSelector(allTasksFinished);
	const darkmode = useSelector(darkMode);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	return (
		purchaseOrder === true && (
			<div
				className={`w-[100vw] h-[100vh] bg-[#e9e1e19c] ${
					darkmode && "bg-[var(--blue-softdark)]"
				} fixed flex items-center justify-center top-0 z-40`}
			>
				<div className="bg-white/90 w-[320px] h-[270px] md:w-[500px]  shadow-md flex-col flex items-center justify-center gap-5">
					<img src={cheerIcon} alt="completeOrder" className="animateIcon" />
					<p>Thanks for your shopping</p>
					<button
						className="bg-green-300 rounded-md shadow-md w-max-content py-2 h-[50px] px-10 flex items-center hover:border-2 hover:border-yellow-300"
						onClick={() => {
							navigate("/allProducts");
							dispatch(showModalBox(false));
						}}
					>
						Shop more products <BsArrowRight className="mx-2" size={22} />
					</button>
				</div>
			</div>
		)
	);
};

export default ModalBoxCompleteOrder;
