import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { darkMode } from "../../Products/ProductSlice";
import { cancel_ModalBox, order_list, orderdate, showCancelOrderMb } from "../../Cart/CartSLice";
import { Link } from "react-router-dom";
import CancelOrder from "../AccOrder/CancelOrder";
import NoOrderList from "../EmptySvGcomponent/NoOrderList";

const OrderHistory = ({ chgLi }) => {
	const darkmode = useSelector(darkMode);
	const getOrderDate = useSelector(orderdate);
	const getOrderList = useSelector(order_list);

	const dispatch = useDispatch();
	console.log(getOrderList);

	return getOrderList.length === 0 ? (
		<NoOrderList chgLi={chgLi} />
	) : (
		<>
			<CancelOrder />
			<div className={`${darkmode && " bg-[var(--blue-dark)]"}  py-10 `}>
				<h1 className={`text-2xl font-bold ${darkmode && "text-white/90"}`}>Order History</h1>

				<div className=" w-full h-max-content  my-10  border rounded-full  ">
					<div className="flex items-center justify-between px-2 md:px-8 bg-[var(--pastel-blue)] py-8">
						<div className="">
							<span className="font-bold text-xl">#WFHO558</span>
							<div className="flex items-center gap-2 py-5">
								<h1 className="text-stone-500">{getOrderDate} .</h1>
								<h1 className="flex items-center  gap-1">
									<span className="w-[15px] h-[15px] block rounded-full bg-yellow-300"></span>{" "}
									Pending...
								</h1>
							</div>
						</div>
						<button
							onClick={() => dispatch(showCancelOrderMb(true))}
							className="border border-red-500 rounded-full py-2 px-5 mt-4  bg-red-500 hover:bg-white hover:text-black text-white/90 duration-450 transition-color "
						>
							Cancel <span className="hidden sm:inline-block">Order</span>
						</button>
					</div>

					{getOrderList.map((item) => {
						return (
							<div className="w-full  py-5 px-2 md:px-6 border bg-white" key={item.id}>
								<div className="flex justify-between">
									<div className="flex  gap-4">
										<div className="p-4 rouned-md">
											<img
												src={item.image}
												alt={item.category}
												className="max-w-[50px] md:max-w-[60px] lg:max-w-[70px] object-contain"
											/>
										</div>
										<div>
											<h1 className="font-semibold text-sm md:text-md pr-3">{item.title}</h1>
											<h2 className="text-stone-500 pt-2">
												{item?.color} <span className="text-stone-400">|</span> {item?.size}
											</h2>
											<span className="py-1 block text-stone-500">Qty {item.quantity}</span>
										</div>
									</div>

									<div className="">
										<button className="w-[70px]  h-[30px] lg:leading-[30px] border-2  border-[var(--light-green)] text-[var(--light-green)] text-sm font-bold rounded-md">
											$ {item.price}
										</button>
										<Link
											to={`/allProducts/${item.id}`}
											className="text-sky-500 block mt-12 cursor-pointer"
										>
											View
										</Link>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default OrderHistory;
