import React, { useRef, useState } from "react";
import { FcCheckmark } from "react-icons/fc";
import { HiOutlineUserCircle, HiOutlineCreditCard } from "react-icons/hi";
import { BsCreditCard, BsTruck } from "react-icons/bs";
import { RiGlobalLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { userData } from "../Account/Accslice";
import { CiDeliveryTruck } from "react-icons/ci";
import { cartList } from "../Cart/CartSLice";
import { darkMode } from "../Products/ProductSlice";
const CheckOutForm = () => {
	const personinfo = useSelector(userData);
	const darkmode = useSelector(darkMode);
	const cartArr = useSelector(cartList);
	const [chgContact, SetchgContact] = useState(false);
	const [shipping, Setshipping] = useState(true);
	const [payment, Setpayment] = useState(true);

	const shippingEstimate = 2.89;
	const taxEstimate = 4.76;
	const subTotalPrice = cartArr
		? cartArr
				.map((item) => item.totalprice)
				.reduce((total, curr) => (total += curr))
				.toFixed(2)
		: 0;

	const totalPrice = (Number(subTotalPrice) + shippingEstimate + taxEstimate).toFixed(2);

	// Ref for tempoUserData
	let firstnameRef = useRef();
	let lastnameRef = useRef();
	let phoneRef = useRef();
	let emailRef = useRef();
	let stateRef = useRef();
	let cityRef = useRef();
	let addressRef = useRef();
	let postalCodeRef = useRef();

	let tempoUserData = {
		firstname: "",
		lastname: "",
		phone: "",
		email: "",
		state: "",
		city: "",
		address: "",
		postalCode: "",
	};

	const [paymentMethod, SetpaymentMethod] = useState("debit/credit card");
	const [contactObj, SetcontactObj] = useState(tempoUserData);

	const paymentFun = (e) => {
		SetpaymentMethod(e.target.value);
	};
	return (
		<div className=" w-full lg:flex grid md:px-20 px-4 min-h-[100vh] ">
			<div className="lg:w-[60%] w-full max-h-100vh lg:overflow-y-scroll overflow-x-hidden lg:pr-10 pr-1 md:pb-5 pb-3">
				{/*******Contact Start******/}
				<div className="w-full py-4 rounded-md border flex items-center justify-between px-5  ">
					<div className="flex gap-4 items-center">
						<HiOutlineUserCircle size={28} />

						<div className="grid">
							<h1 className="flex items-center gap-2">
								<span className=" text-xl tracking-[0.022rem] text-uppercase font-semibold">
									Contact Info
								</span>
								<FcCheckmark />
							</h1>
							<h1 className="flex items-center gap-2 lg:text-md text-sm max-w-[80%] lg:min-w-full flex-wrap lg:flex-nowrap pt- ">
								{(contactObj.firstname === "") & (contactObj.lastname === "") ? (
									<span>{personinfo.username}</span>
								) : (
									<span>
										{contactObj.firstname} {contactObj.lastname}
									</span>
								)}

								<span> / </span>

								{contactObj.email === "" ? (
									<span>{personinfo.email}</span>
								) : (
									<span>{contactObj.email}</span>
								)}

								<span> / </span>

								{contactObj.phone === "" ? (
									personinfo.phone ? (
										<span>{personinfo.phone}</span>
									) : (
										<span className="text-red-500">your phone?</span>
									)
								) : (
									<span>{contactObj.phone}</span>
								)}
							</h1>
						</div>
					</div>

					<button
						className="px-3 py-2 bg-sky-50 rounded-md"
						onClick={() => {
							SetchgContact(!chgContact);
							if (chgContact) {
								tempoUserData = {
									firstname: firstnameRef.current.value,
									lastname: lastnameRef.current.value,
									phone: phoneRef.current.value,
									email: emailRef.current.value,
									state: stateRef.current.value,
									city: cityRef.current.value,
									address: addressRef.current.value,
								};
								SetcontactObj(tempoUserData);
							}
						}}
					>
						{chgContact ? "Apply" : "Change"}
					</button>
				</div>
				{/* Change Contact */}
				<div
					className={`w-full py-4 rounded-md border flex items-center justify-between px-5 flex-wrap ${
						chgContact === false && "hidden"
					}`}
				>
					<h1 className="w-full block py-4 font-bold text-xl tracking-wide">Contact Information</h1>

					{/* First name && Last name*/}
					<div className="flex w-full justify-between my-2">
						<div className="flex flex-col gap-2 w-[47%]">
							<label htmlFor="firstname">First Name</label>
							<input
								type="text"
								name="firstname"
								ref={firstnameRef}
								className="py-2 rounded-xl border outline-none px-4"
							/>
						</div>
						<div className="flex flex-col gap-2 w-[47%]">
							<label htmlFor="lastname">Last Name</label>
							<input
								type="text"
								name="lastname"
								ref={lastnameRef}
								className="py-2 rounded-xl border outline-none px-4"
							/>
						</div>
					</div>

					<div className="flex flex-col gap-2 w-[70%] my-2">
						<label htmlFor="phone">Phone</label>
						<input
							type="phone"
							name="phone"
							ref={phoneRef}
							className="py-2 rounded-xl border outline-none px-4"
						/>
					</div>

					<div className="flex flex-col gap-2 w-[70%] my-2">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							name="email"
							ref={emailRef}
							className="py-2 rounded-xl border outline-none px-4"
						/>
					</div>
				</div>

				{/*******Shipping Start******/}
				<div className="w-full py-4 rounded-md border flex items-center justify-between px-5 mt-4">
					{/* Shipping info */}
					<div className="flex gap-4 items-center">
						<BsTruck size={28} />

						<div className="grid">
							<h1 className="flex items-center gap-2">
								<span className=" text-xl tracking-[0.022rem] text-uppercase font-semibold">
									Shipping Address
								</span>
								<FcCheckmark />
							</h1>
							<h1 className="flex items-center gap-2 lg:text-md text-sm max-w-[80%] lg:min-w-full flex-wrap lg:flex-nowrap pt-">
								{contactObj.address === "" ? (
									personinfo.address ? (
										<span>{personinfo.address}</span>
									) : (
										<span className="text-red-500">your address?</span>
									)
								) : (
									<span>{contactObj.address}</span>
								)}

								<span> / </span>

								{contactObj.state === "" ? (
									personinfo.state ? (
										<span>{personinfo.state}</span>
									) : (
										<span className="text-red-500">your state?</span>
									)
								) : (
									<span>{contactObj.state}</span>
								)}

								<span> / </span>

								{contactObj.city === "" ? (
									personinfo.city ? (
										<span>{personinfo.city}</span>
									) : (
										<span className="text-red-500">your city?</span>
									)
								) : (
									<span>{contactObj.city}</span>
								)}
							</h1>
						</div>
					</div>

					<button
						className="px-3 py-2 bg-sky-50 rounded-md"
						onClick={() => {
							Setshipping(!shipping);
							if (shipping) {
								tempoUserData = {
									firstname: firstnameRef.current.value,
									lastname: lastnameRef.current.value,
									phone: phoneRef.current.value,
									email: emailRef.current.value,
									state: stateRef.current.value,
									city: cityRef.current.value,
									address: addressRef.current.value,
								};
								SetcontactObj(tempoUserData);
							}
						}}
					>
						{shipping ? "Apply" : "Change"}
					</button>
				</div>
				{/* Change Shipping address */}
				<div
					className={`w-full py-4 rounded-md border flex items-center justify-between px-5 flex-wrap ${
						shipping === false && "hidden"
					}`}
				>
					<h1 className="w-full block py-4 font-bold text-xl tracking-wide">Delivery Information</h1>

					{/* Change State & City & Postal Code & address*/}
					<div className="flex w-full justify-between my-2">
						<div className="flex flex-col gap-2 w-[30%]">
							<label htmlFor="state">State</label>
							<input
								type="text"
								name="state"
								ref={stateRef}
								className="py-2 rounded-xl border outline-none px-4"
							/>
						</div>
						<div className="flex flex-col gap-2 w-[30%]">
							<label htmlFor="city">City</label>
							<input
								type="text"
								name="city"
								ref={cityRef}
								className="py-2 rounded-xl border outline-none px-4"
							/>
						</div>
						<div className="flex flex-col gap-2 w-[30%]">
							<label htmlFor="postalCode">Postal Code</label>
							<input
								type="number"
								name="postalCode"
								ref={postalCodeRef}
								className="py-2 rounded-xl border outline-none px-4"
							/>
						</div>
					</div>

					<div className="flex flex-col gap-2 w-[70%] my-2">
						<label htmlFor="address">Address</label>
						<textarea
							type="text"
							name="address"
							ref={addressRef}
							className="py-2 rounded-xl border outline-none px-4"
						/>
					</div>
				</div>

				{/*******Payment Start***********/}
				<div className="w-full py-4 rounded-md border flex items-center justify-between px-5 mt-4">
					{/* Payment info */}
					<div className="flex gap-4 items-center">
						<HiOutlineCreditCard size={28} />

						<div className="grid">
							<h1 className="flex items-center gap-2">
								<span className=" text-xl tracking-[0.022rem] text-uppercase font-semibold">
									Payment Method
								</span>
								<FcCheckmark />
							</h1>
							<h1 className="flex items-center gap-2 lg:text-md text-sm max-w-[80%] lg:min-w-full flex-wrap lg:flex-nowrap pt-">
								<span>{paymentMethod}</span>
							</h1>
						</div>
					</div>

					<button className="px-3 py-2 bg-sky-50 rounded-md" onClick={() => Setpayment(!payment)}>
						{payment ? "Apply" : "Change"}
					</button>
				</div>

				{/* Change payment method */}
				<div className={`w-full py-4 rounded-md border  px-5  ${payment === false && "hidden"}`}>
					<h1 className="w-full block py-4 font-bold text-xl tracking-wide">Payment Methods</h1>
					<div className="py-3">
						<input
							type="radio"
							id="credit card"
							value="Debit / Credit Card"
							defaultChecked
							checked={paymentMethod === "Debit / Credit Card"}
							onChange={paymentFun}
						/>
						<label htmlFor="Debit / Credit Card">
							<BsCreditCard size={25} className="inline-block ml-3" />
							<span className="inline-block text-[18px] mx-3">Debit / Credit Card</span>
						</label>
					</div>

					<div className="py-3">
						<input
							type="radio"
							id="onlinepayment"
							value="Online Payment"
							checked={paymentMethod === "Online Payment"}
							onChange={paymentFun}
						/>
						<label htmlFor="Online Payment">
							<RiGlobalLine size={25} className="inline-block ml-3" />
							<span className="inline-block text-[18px] mx-3">Online Payment</span>
						</label>
					</div>

					<div className="py-3">
						<input
							type="radio"
							id="COD"
							value="Cash On Delivery"
							checked={paymentMethod === "Cash On Delivery"}
							onChange={paymentFun}
						/>
						<label htmlFor="Cash On Delivery">
							<CiDeliveryTruck size={25} className="inline-block ml-3" />
							<span className="inline-block text-[18px] mx-3">Cash On Delivery</span>
						</label>
					</div>
				</div>
			</div>

			<div className="lg:w-[40%] w-full md:pl-8 px-2 pr-2 pb-9">
				<h1 className="font-bold text-xl">Order Summary</h1>

				<ul className="mt-5">
					{cartArr.map((item) => (
						<li className="w-full border-b rounded-xl flex items-center justify-between py-5 my-2">
							<div className="flex items-center gap-4">
								<div className="relative p-4 bg-sky-50 max-w-[80px]">
									<img
										src={item.image}
										alt={item.category}
										className="w-full object-contain rounded-xl"
									/>
									<span className="absolute rounded-full w-[25px] h-[25px] bg-sky-400/90 right-[-10px] top-[-8px] text-center leading-[25px] text-white/90 ">
										{item.quantity}
									</span>
								</div>

								<div>
									<h1 className="font-semibold">{item.title}</h1>
									<h1 className="flex items-center gap-3 text-[15px]">
										<span>{item.color}</span>
										<span> | </span>
										<span>{item.size}</span>
									</h1>
								</div>
							</div>

							<button className="min-w-[70px] h-[30px]  leading-[30px] border-2  border-[var(--light-green)] text-[var(--light-green)] text-sm font-bold rounded-md">
								$ {item.price}
							</button>
						</li>
					))}
				</ul>

				<label htmlFor="discountCode" className="block w-full pt-5 pb-1">
					Discount Code
				</label>

				<div className="w-full flex items-center gap-4">
					<input type="text" className="py-2 px-4 outline-none rounded-xl border block w-[65%]" />
					<button className={`py-2 px-4 w-[30%] rounded-xl bg-gray-300/90`}>Apply</button>
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
		</div>
	);
};

export default CheckOutForm;
