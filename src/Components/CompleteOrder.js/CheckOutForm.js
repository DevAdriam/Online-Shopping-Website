import React, { useRef, useState } from "react";
import { FcCheckmark } from "react-icons/fc";
import { HiOutlineUserCircle, HiOutlineCreditCard } from "react-icons/hi";
import { BsCreditCard, BsTruck } from "react-icons/bs";
import { RiGlobalLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { userData } from "../Account/Accslice";
import { CiDeliveryTruck } from "react-icons/ci";
import { darkMode } from "../Products/ProductSlice";
import OrderSummary from "./OrderSummary";
const CheckOutForm = () => {
	const personinfo = useSelector(userData);
	const darkmode = useSelector(darkMode);
	const [chgContact, SetchgContact] = useState(false);
	const [shipping, Setshipping] = useState(true);
	const [payment, Setpayment] = useState(true);

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

	const [paymentMethod, SetpaymentMethod] = useState("");
	const [confirmBtn, SetconfirmBtn] = useState(false);
	const [contactObj, SetcontactObj] = useState(tempoUserData);

	const paymentFun = (e) => {
		SetpaymentMethod(e.target.value);
	};
	return (
		<div
			className={` w-full lg:flex grid md:pl-20 md:pr-10  px-4 min-h-[100vh]  ${
				darkmode && "bg-[var(--blue-dark)] text-sky-50/90"
			}`}
		>
			<div className="lg:w-[60%] w-full max-h-100vh lg:overflow-y-scroll overflow-x-hidden lg:pr-10 pr-1 md:pb-5 pb-3">
				{/*******Contact Start******/}
				<div className="w-full py-4 rounded-md border flex items-center justify-between px-5  ">
					<div className="flex gap-4 items-center">
						<div>
							<HiOutlineUserCircle size={30} />
						</div>

						<div className="grid">
							<h1>
								<span className="sm:text-xl text-[1.1rem] flex items-center tracking-[0.022rem] text-uppercase font-semibold">
									Contact Info
									<FcCheckmark className="mx-1" />
								</span>
							</h1>
							<h1 className="flex items-center gap-2 lg:text-md text-sm max-w-[80%] lg:min-w-full flex-wrap lg:flex-nowrap pt- ">
								{(contactObj.firstname === "") & (contactObj.lastname === "") ? (
									personinfo.username ? (
										<span>{personinfo.username}</span>
									) : (
										<span className="text-red-500">your username?</span>
									)
								) : (
									<span>
										{contactObj.firstname} {contactObj.lastname}
									</span>
								)}

								<span> / </span>

								{contactObj.email === "" ? (
									personinfo.email ? (
										<span>{personinfo.email}</span>
									) : (
										<span className="text-red-500">your email?</span>
									)
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
						className="px-3 py-2 bg-sky-50 rounded-md text-black"
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
								className={`py-2 rounded-xl border outline-none px-4 ${
									(contactObj.firstname === "") & !personinfo.username && "border-red-500"
								} `}
							/>
						</div>
						<div className="flex flex-col gap-2 w-[47%]">
							<label htmlFor="lastname">Last Name</label>
							<input
								type="text"
								name="lastname"
								ref={lastnameRef}
								className={`py-2 rounded-xl border outline-none px-4 ${
									(contactObj.lastname === "") & !personinfo.username && "border-red-500"
								} `}
							/>
						</div>
					</div>

					<div className="flex flex-col gap-2 w-[70%] my-2">
						<label htmlFor="phone">Phone</label>
						<input
							type="phone"
							name="phone"
							ref={phoneRef}
							className={`py-2 rounded-xl border outline-none px-4 ${
								(contactObj.phone === "") & !personinfo.phone && "border-red-500"
							} `}
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

						<div className="flex flex-col ">
							<h1 className="flex items-center lg:gap-2">
								<span className=" sm:text-xl gap-1 text-[1.1rem] tracking-[0.022rem] text-uppercase font-semibold flex  items-center ">
									Shipping Address
									<FcCheckmark />
								</span>
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
						className="px-3 py-2 bg-sky-50 rounded-md text-black"
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
					<div className="flex w-full justify-between my-2 gap-3 flex-wrap lg:flex-nowrap">
						<div className="flex flex-col gap-2 sm:w-[30%] w-[45%] ">
							<label htmlFor="state">State</label>
							<input
								type="text"
								name="state"
								ref={stateRef}
								className={`py-2 rounded-xl border outline-none px-4 ${
									(contactObj.state === "") & !personinfo.state && "border-red-500"
								} `}
							/>
						</div>
						<div className="flex flex-col gap-2 sm:w-[30%] w-[45%]">
							<label htmlFor="city">City</label>
							<input
								type="text"
								name="city"
								ref={cityRef}
								className={`py-2 rounded-xl border outline-none px-4 ${
									(contactObj.city === "") & !personinfo.city && "border-red-500"
								} `}
							/>
						</div>
						<div className="flex flex-col gap-2 sm:w-[30%] w-[60%]">
							<label htmlFor="postalCode">Postal Code</label>
							<input
								type="number"
								name="postalCode"
								ref={postalCodeRef}
								className={`py-2 rounded-xl border outline-none px-4 ${
									contactObj.postalCode === null && "border-red-500"
								} `}
								placeholder="eg- Yankin (11082)"
							/>
						</div>
					</div>

					<div className="flex flex-col gap-2 w-[70%] my-2">
						<label htmlFor="address">Address</label>
						<textarea
							type="text"
							name="address"
							ref={addressRef}
							className={`py-2 rounded-xl border outline-none px-4 ${
								(contactObj.address === "") & !personinfo.address && "border-red-500"
							} `}
						/>
					</div>
				</div>

				{/*******Payment Start***********/}
				<div className="w-full py-4 rounded-md border flex items-center justify-between px-5 mt-4">
					{/* Payment info */}
					<div className="flex gap-4 items-center">
						<HiOutlineCreditCard size={28} />

						<div className="grid">
							<h1>
								<span className=" sm:text-xl text-[1.1rem] flex items-center  tracking-[0.022rem] text-uppercase font-semibold">
									Payment Method
									<FcCheckmark />
								</span>
							</h1>
							<h1 className="flex items-center gap-2 lg:text-md text-sm max-w-[80%] lg:min-w-full flex-wrap lg:flex-nowrap pt-">
								<span>{paymentMethod}</span>
							</h1>
						</div>
					</div>

					<button className="px-3 py-2 bg-sky-50 rounded-md text-black" onClick={() => Setpayment(!payment)}>
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

			<OrderSummary />
		</div>
	);
};

export default CheckOutForm;
