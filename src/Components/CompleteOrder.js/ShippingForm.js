import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tempoData, updatetempoData, userData } from "../Account/AccMain/Accslice";
import { useForm } from "react-hook-form";
import { FcCheckmark } from "react-icons/fc";
import { FaShippingFast } from "react-icons/fa";
import { darkMode } from "../Products/ProductSlice";
import { validation } from "../Cart/CartSLice";

const ShippingForm = () => {
	const personData = useSelector(userData);
	const darkmode = useSelector(darkMode);
	const dispatch = useDispatch();

	const [openShipping, SetopenShipping] = useState(false);
	let tempoUserData = useSelector(tempoData);

	const form = useForm({
		defaultValues: {
			city: personData.city || "",
			townShip: personData.townShip || " ",
			postalcode: "",
			address: personData?.address || "",
		},
	});
	const {
		register,
		handleSubmit,
		getValues,
		formState: { errors, isValid },
	} = form;

	const shippingFormSubmit = () => {
		const data = getValues();
		SetopenShipping(!openShipping);
		dispatch(
			updatetempoData({
				username: tempoUserData.username,
				email: tempoUserData.email,
				phone: tempoUserData.phone,
				city: data.city,
				townShip: data.townShip,
				postalcode: data.postalcode,
				address: data.address,
			})
		);
		dispatch(validation("shippingValid"));
	};

	return (
		<>
			{/* Shipping information */}
			<div className="w-full h-max-content md:flex grid px-5 py-5 items-center justify-between border rounded-xl">
				<div className="lg:flex gap-4 items-center">
					<FaShippingFast size={40} />
					<div aria-label="shipping-info" className="py-4">
						<h1 className={`uppercase text-sky-300 `}>
							Shipping Info
							<FcCheckmark size={25} className={` mt-[-5px] mx-2 ${isValid ? "inline-block " : "hidden"}`} />
						</h1>
						<div className="font-semibold py-3">
							<span className="text-base">
								{tempoUserData.city ? tempoUserData.city : personData.city} /
							</span>
							<span className="text-base">
								{tempoUserData.townShip ? tempoUserData.townShip : personData.townShip} /
							</span>
							<span className="text-base">
								{tempoUserData.address ? tempoUserData.address : personData.address}
							</span>
						</div>
					</div>
				</div>

				<button
					disabled={!isValid}
					className={`py-2 px-4 w-[120px] bg-sky-100 rounded-xl text-black ${!isValid && "opacity-50"}`}
					onClick={shippingFormSubmit}
				>
					{openShipping ? "Change" : "Apply"}
				</button>
			</div>
			{/* contact form */}
			<form
				className={`w-full border rounded-xl flex flex-wrap py-5 my-5  ${openShipping && "hidden"}`}
				onSubmit={handleSubmit(shippingFormSubmit)}
				noValidate
			>
				<div className="flex flex-col px-6 py-4">
					<label htmlFor="city">City</label>
					<input
						type="text"
						name="city"
						className={`min-w-[40%] border rounded-xl py-2 px-4 outline-none my-2 bg-transparent ${
							darkmode ? "border-white text-white" : "border-gray-300 text-black"
						}`}
						{...register("city", {
							required: "City is required",
						})}
					/>
					<span className="text-red-500">{errors.city?.message}</span>
				</div>

				<div className="flex flex-col px-6 py-4">
					<label htmlFor="townShip">Township</label>
					<input
						type="text"
						name="townShip"
						className={`min-w-[40%] border rounded-xl py-2 px-4 outline-none my-2 bg-transparent ${
							darkmode ? "border-white text-white" : "border-gray-300 text-black"
						}`}
						{...register("townShip", {
							required: "Township is required",
						})}
					/>
					<span className="text-red-500">{errors.townShip?.message}</span>
				</div>

				<div className="flex flex-col px-6 py-4">
					<label htmlFor="postalcode">Postal Code</label>
					<input
						type="number"
						name="postalcode"
						className={`max-w-[400px] border rounded-xl py-2 px-4 outline-none my-2 bg-transparent ${
							darkmode ? "border-white text-white" : "border-gray-300 text-black"
						}`}
						{...register("postalcode", {
							required: "Postal Code Number is required",
						})}
					/>
					<span className="text-red-500">{errors.postalcode?.message}</span>
				</div>

				<div className="flex flex-col px-6 py-4">
					<label htmlFor="address">Address</label>
					<input
						type="text"
						name="address"
						className={`max-w-[400px] border rounded-xl py-2 px-4 outline-none my-2 bg-transparent ${
							darkmode ? "border-white text-white" : "border-gray-300 text-black"
						}`}
						{...register("address", {
							required: "Address is required",
						})}
					/>
					<span className="text-red-500">{errors.address?.message}</span>
				</div>
			</form>
		</>
	);
};

export default ShippingForm;
