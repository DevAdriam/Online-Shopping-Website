import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { addItem, cartList, darkMode, deleteItem, removeItem } from "../Products/ProductSlice";

import { VscSymbolColor } from "react-icons/vsc";
import { IoIosResize } from "react-icons/io";
import { ReactComponent as Cart } from "../No data-cuate.svg";
const ProductsCheckOut = () => {
	const darkmode = useSelector(darkMode);
	const cartlist = useSelector(cartList);
	const shippingEstimate = 2.89;
	const taxEstimate = 4.76;
	const subTotalPrice = cartlist
		.map((item) => item.totalprice)
		.reduce((total, curr) => (total += curr))
		.toFixed(2);

	const totalPrice = (Number(subTotalPrice) + shippingEstimate + taxEstimate).toFixed(2);

	const dispatch = useDispatch();

	console.log(cartlist);
	return (
		<div
			className={`flex justify-between flex-col lg:flex-row md:px-20 px-4 min-h-[100vh] ${
				darkmode ? "bg-[var(--blue-dark)] " : "bg-white"
			}`}
		>
			<div aria-label="cartItems" className={`lg:w-1/2 w-full flex flex-col gap-10 lg:overflow-y-scroll lg:h-[100vh]`}>
				{cartlist.map((item) => {
					return (
						<>
							<div className="w-full h-[200px] flex " key={item.id}>
								<div
									className={`md:w-[200px] w-[25%] md:h-full h-[100px] rounded-md ${
										darkmode ? "bg-white" : "bg-sky-100/20"
									} `}
								>
									<img
										src={item.image}
										alt={item.category}
										className="md:w-[100px] w-full h-full object-contain mx-auto p-4"
									/>
								</div>
								<div className="flex flex-col w-full">
									<div className="flex justify-between w-full  px-5 ">
										<div className="flex flex-col px-5 ">
											<span className={`font-bold ${darkmode ? "text-white" : "text-black"}`}>
												{item.title}
											</span>
											<div className="flex gap-6 my-2 ">
												<span>
													<VscSymbolColor size={20} className="mr-1 inline-block" /> black
												</span>
												<span>
													<IoIosResize size={20} className="mr-1 inline-block" /> 2xl
												</span>
											</div>
										</div>
										<button className="min-w-[70px] h-[30px]  leading-[30px] border-2  border-[var(--light-green)] text-[var(--light-green)] text-sm font-bold rounded-md">
											$ {item.price}
										</button>
									</div>

									<div className="flex justify-between w-full px-5 pt-6">
										<div className="flex gap-3 items-center px-5">
											<button
												className={`w-[30px] h-[30px]  border-2 leading-[20px] rounded-full text-center ${
													darkmode ? "text-gray-200/80" : "text-gray-700"
												}`}
												onClick={() => {
													dispatch(addItem(item.id));
												}}
											>
												+
											</button>
											<span className={`${darkmode ? "text-gray-200/80" : "text-gray-700"}`}>
												{item.quantity}
											</span>
											<button
												className={`w-[30px] h-[30px]  border-2 leading-[20px] rounded-full text-center ${
													darkmode ? "text-gray-200/80" : "text-gray-700"
												}`}
												onClick={() => {
													dispatch(removeItem(item.id));
												}}
											>
												-
											</button>
										</div>

										<button
											className="font-bold text-sky-600"
											onClick={() => {
												dispatch(deleteItem(item.id));
											}}
										>
											Remove
										</button>
									</div>
								</div>
							</div>
							<hr />
						</>
					);
				})}
			</div>

			<div aria-label="checkout" className="lg:w-1/2 w-full h-[max-content] flex flex-col gap-10 lg:pl-20 px-5 py-10 ">
				<h1 className={`font-bold  text-lg text-[var(--blue-dark)] tracking-wide ${darkmode && "text-white"}`}>
					Order Summary
				</h1>

				<div className="flex flex-col ">
					<div className="flex items-center justify-between py-4">
						<p className={`text-gray-600/80`}>Subtotal</p>
						<span className={`font-bold ${darkmode ? "text-white" : "text-[var(--blue-dark)]"}`}>
							$ {subTotalPrice}
						</span>
					</div>
					<hr />

					<div className="flex items-center justify-between py-4">
						<p className={`text-gray-600/80`}>Shipping estimate</p>
						<span className={`font-bold ${darkmode ? "text-white" : "text-[var(--blue-dark)]"}`}>$ 2.98</span>
					</div>
					<hr />

					<div className="flex items-center justify-between py-4">
						<p className={`text-gray-600/80`}>Tax estimate</p>
						<span className={`font-bold ${darkmode ? "text-white" : "text-[var(--blue-dark)]"}`}>$ 4.76</span>
					</div>
					<hr />
					<div className="flex items-center justify-between py-4">
						<p className={`${darkmode ? "text-white" : "text-[var(--blue-dark)]"} font-bold`}>Order Total</p>
						<span className={`font-bold ${darkmode ? "text-white" : "text-[var(--blue-dark)]"}`}>
							$ {totalPrice}
						</span>
					</div>
				</div>

				<button className="w-full mx-auto h-[50px] shadow-md font-bold text-white text-md tracking-widest rounded-full bg-[var(--blue-dark)] hover:opacity-[0.9] duration-200 ">
					Checkout
				</button>
			</div>
		</div>
	);
};

export default ProductsCheckOut;