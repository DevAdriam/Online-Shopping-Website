import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { addItem, cartList, completeOrder, deleteItem, removeItem } from "../Cart/CartSLice";
import { darkMode } from "../Products/ProductSlice";
import { VscSymbolColor } from "react-icons/vsc";
import { IoIosResize } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const ProductsCheckOut = () => {
	const darkmode = useSelector(darkMode);
	const cartlist = useSelector(cartList);
	const navigate = useNavigate();

	const shippingEstimate = 2.89;
	const taxEstimate = 4.76;
	const subTotalPrice = cartlist
		? cartlist
				.map((item) => item.totalprice)
				.reduce((total, curr) => (total += curr))
				.toFixed(2)
		: 0;

	const totalPrice = (Number(subTotalPrice) + shippingEstimate + taxEstimate).toFixed(2);

	const dispatch = useDispatch();

	console.log(cartlist);
	return (
		<div
			className={`flex justify-between flex-col lg:flex-row md:px-20 px-4 pb-9 min-h-[100vh] ${
				darkmode ? "bg-[var(--blue-dark)] " : "bg-white"
			}`}
		>
			<div aria-label="cartItems" className={`lg:w-1/2 w-full flex flex-col gap-10 lg:overflow-y-scroll lg:h-[100vh]`}>
				{cartlist.map((item) => {
					return (
						<div key={item.id}>
							<div className="w-full sm:h-[200px] h-fit-contet py-3 sm:py-5 sm:flex ">
								<div
									className={`md:w-[200px] w-1/2 block md:h-full sm:h-[100px] h-[150px] rounded-md mx-auto ${
										darkmode ? "bg-sky-50" : "bg-sky-100/20"
									} `}
								>
									<img
										src={item.image}
										alt={item.category}
										className="md:w-[100px] w-[150px] h-[150px] object-contain mx-auto p-4"
									/>
								</div>

								<div className="flex flex-col w-full">
									<div className="flex justify-between w-full  sm:px-5 px-1 pt-3 ">
										<div className="flex flex-col px-5 ">
											<span className={`font-bold ${darkmode ? "text-white/90" : "text-black"}`}>
												{item.title}
											</span>
											<div
												className={`flex gap-6 my-2 ${
													darkmode ? "text-white/90" : "text-black"
												} ${item.category === "jewelery" && "hidden"} ${
													item.category === "electronics" && "hidden"
												}`}
											>
												<span
													className={`${item.category === "jewelery" && "hidden"} ${
														item.category === "electronics" && "hidden"
													}`}
												>
													<VscSymbolColor size={20} className="mr-1 inline-block" />
													{item.color}
												</span>
												<span>
													<IoIosResize size={20} className="mr-1 inline-block" />
													{item.size}
												</span>
											</div>
										</div>
										<button className="min-w-[70px] h-[30px]  leading-[30px] border-2  border-[var(--light-green)] text-[var(--light-green)] text-sm font-bold rounded-md">
											$ {item.price}
										</button>
									</div>

									<div className="flex justify-between w-full px-5 pb-3 pt-4 ">
										<div className="flex gap-3 items-center sm:px-5 px-1">
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
						</div>
					);
				})}
			</div>

			<div aria-label="checkout" className="lg:w-1/2 w-full h-[max-content] flex flex-col gap-10 lg:pl-20 px-5 py-10 ">
				<h1 className={`font-bold  text-lg text-[var(--blue-dark)] tracking-wide ${darkmode && "text-white/90"}`}>
					Order Summary
				</h1>

				<div className="flex flex-col ">
					<div className="flex items-center justify-between py-4">
						<p className={`text-gray-500/90`}>Subtotal</p>
						<span className={`font-bold ${darkmode ? "text-white/90" : "text-[var(--blue-dark)]"}`}>
							$ {subTotalPrice}
						</span>
					</div>
					<hr />

					<div className="flex items-center justify-between py-4">
						<p className={`text-gray-500/90`}>Shipping estimate</p>
						<span className={`font-bold ${darkmode ? "text-white/90" : "text-[var(--blue-dark)]"}`}>
							$ 2.98
						</span>
					</div>
					<hr />

					<div className="flex items-center justify-between py-4">
						<p className={`text-gray-500/90`}>Tax estimate</p>
						<span className={`font-bold ${darkmode ? "text-white/90" : "text-[var(--blue-dark)]"}`}>
							$ 4.76
						</span>
					</div>
					<hr />
					<div className="flex items-center justify-between py-4">
						<p className={`${darkmode ? "text-white/90" : "text-[var(--blue-dark)]"} font-bold`}>Order Total</p>
						<span className={`font-bold ${darkmode ? "text-white/90" : "text-[var(--blue-dark)]"}`}>
							$ {totalPrice}
						</span>
					</div>
				</div>

				<button
					className={`w-full mx-auto h-[50px] shadow-md font-bold  text-md tracking-widest rounded-full ${
						darkmode ? "bg-white text-[var(--blue-dark)]" : "bg-[var(--blue-dark)] text-white/90"
					}  hover:opacity-[0.9] duration-200 hover:shadow-sm hover:shadow-slate-300/70`}
					onClick={() => {
						dispatch(completeOrder("true"));
						navigate("/checkOut");
					}}
				>
					Checkout
				</button>
			</div>
		</div>
	);
};

export default ProductsCheckOut;
