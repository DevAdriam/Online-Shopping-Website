import React, { useState } from "react";
import { useSelector } from "react-redux";
import { darkMode } from "../Products/ProductSlice";
import { cartList } from "../Cart/CartSLice";
import { MdDiscount } from "react-icons/md";

const OrderSummary = () => {
	const darkmode = useSelector(darkMode);
	const cartArr = useSelector(cartList);

	const randomAlphabet = ["A", "B", "D", "E", "K", "L", "M", "O", "P", "L", "T"];
	const [discountCode, SetdiscountCode] = useState("");
	const [apply, Setapply] = useState(false);
	const [closeCoupon, SetcloseCoupon] = useState(false);

	const registerCoupon = `${randomAlphabet[Math.floor(Math.random() * 10)]}${randomAlphabet[Math.floor(Math.random() * 10)]}${
		randomAlphabet[Math.floor(Math.random() * 10)]
	}${randomAlphabet[Math.floor(Math.random() * 10)]}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`;

	const shippingEstimate = 2.89;
	const taxEstimate = 4.76;
	const subTotalPrice = cartArr
		? cartArr
				.map((item) => item.totalprice)
				.reduce((total, curr) => (total += curr))
				.toFixed(2)
		: 0;

	const totalPrice = (Number(subTotalPrice) + shippingEstimate + taxEstimate - 20).toFixed(2);
	return (
		<div className="lg:w-[40%] w-full md:pl-8 px-2 pr-2 lg:pr-0 pb-9">
			<h1 className="font-bold text-xl">Order Summary</h1>

			<ul className="mt-5">
				{cartArr.map((item) => (
					<li className="w-full border-b  flex  justify-between py-8 my-2" key={item.id}>
						<div className="flex gap-7 mr-3">
							<div className="relative p-4 bg-sky-50 max-w-[80px] rounded-xl">
								<img src={item.image} alt={item.category} className="w-full object-contain rounded-xl" />
								<span className="absolute rounded-full w-[25px] h-[25px] bg-sky-400/90 right-[-10px] top-[-8px] text-center leading-[25px] text-white/90 ">
									{item.quantity}
								</span>
							</div>

							<div>
								<h1 className="font-semibold">{item.title}</h1>
								<h1 className="flex gap-3 text-[15px]">
									<span>{item.color}</span>
									<span> | </span>
									<span>{item.size}</span>
								</h1>
							</div>
						</div>

						<button className="min-w-[70px] h-[30px] leading-[30px] border-2  border-[var(--light-green)] text-[var(--light-green)] text-sm font-bold rounded-md">
							$ {item.price}
						</button>
					</li>
				))}
			</ul>

			<label htmlFor="discountCode" className="block w-full pt-5 pb-1">
				Discount Code
			</label>

			<div className="w-full flex items-center gap-4">
				<input
					type="text"
					value={discountCode}
					onChange={(e) => SetdiscountCode(e.target.value)}
					className="py-2 px-4 outline-none rounded-xl border block w-[65%]"
				/>
				<button className={`py-2 px-4 w-[30%] rounded-xl bg-sky-100/90 text-black`} onClick={() => Setapply(true)}>
					Apply
				</button>
			</div>

			{/* Promocode for register */}

			<div
				className={`flex items-center justify-between py-4 pr-4 pl-3 border-dotted border rounded-xl my-4 ${
					closeCoupon && "hidden"
				}`}
			>
				<h1 className="flex items-center w-full gap-4 ">
					<MdDiscount size={30} fill="green" />

					<div className="grid ">
						<span className="font-bold">{registerCoupon}</span>
						<span>20$ off discount for create account</span>
					</div>
				</h1>
				<button
					className="text-green-500"
					onClick={(e) => {
						SetdiscountCode(registerCoupon);
						SetcloseCoupon(true);
					}}
				>
					Add
				</button>
			</div>

			<div className="py-9">
				<h3 className="flex items-center justify-between py-3">
					<span className=" text-gray-400">Subtotal</span>
					<span className="font-bold">$ {subTotalPrice}</span>
				</h3>
				<h3 className="flex items-center justify-between py-3">
					<span className=" text-gray-400">Shipping estimate</span>
					<span className="font-bold">$ {shippingEstimate}</span>
				</h3>
				<h3 className="flex items-center justify-between py-3">
					<span className=" text-gray-400">Tax estimate</span>
					<span className="font-bold">$ {taxEstimate}</span>
				</h3>

				{apply === true && (
					<h3 className="flex items-center justify-between py-3">
						<span className=" text-red-700">Coupon Code</span>
						<span className="font-bold text-red-700">-$ 20.00</span>
					</h3>
				)}

				<hr className="w-full py-4" />

				<h3 className="flex items-center justify-between">
					<span className=" font-bold text-[16px]">Order Total</span>
					<span className="font-bold">$ {totalPrice}</span>
				</h3>
			</div>
			<button
				className={`w-full mx-auto h-[50px] shadow-md font-bold  text-md tracking-widest rounded-full ${
					darkmode ? "bg-white text-[var(--blue-dark)]" : "bg-[var(--blue-dark)] text-white/90"
				}  hover:opacity-[0.9] duration-200 hover:shadow-sm hover:shadow-slate-300/70`}
			>
				Confirm Order
			</button>
		</div>
	);
};

export default OrderSummary;
