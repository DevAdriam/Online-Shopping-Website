import React, { useState } from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { tempoData, updatetempoData, userData } from "../Account/AccMain/Accslice";
import { useForm } from "react-hook-form";
import { FcCheckmark } from "react-icons/fc";
import { darkMode } from "../Products/ProductSlice";
import { validation } from "../Cart/CartSLice";

const ContactForm = () => {
	const personData = useSelector(userData);
	const dispatch = useDispatch();
	const darkmode = useSelector(darkMode);
	const [openContact, SetopenContact] = useState(false);
	let tempoUserData = useSelector(tempoData);

	const form = useForm({
		defaultValues: {
			firstname: personData.username,
			lastname: "",
			email: personData.email,
			phone: personData?.phone || "",
		},
	});
	const {
		register,
		handleSubmit,
		getValues,
		formState: { errors, isValid },
	} = form;

	const contactFormSubmit = () => {
		const data = getValues();
		SetopenContact(!openContact);
		dispatch(
			updatetempoData({
				username: `${data.firstname} ${data.lastname}`,
				email: data.email,
				phone: data.phone,
				city: tempoUserData.city,
				townShip: tempoUserData.townShip,
				postalcode: tempoUserData.postalcode,
				address: tempoUserData.address,
			})
		);
		dispatch(validation("contactValid"));
	};

	return (
		<>
			{/* contact information */}
			<div className="w-full h-max-content md:flex grid px-5 xl:py-5 py-3 mb-5 items-center justify-between border rounded-xl">
				<div className="lg:flex gap-4 items-center">
					<HiOutlineUserCircle size={40} />
					<div aria-label="contact-info" className="py-4">
						<h1 className={`uppercase text-sky-300 `}>
							Contact Info
							<FcCheckmark size={25} className={` mt-[-5px] mx-2 ${isValid ? "inline-block " : "hidden"}`} />
						</h1>
						<div className="font-semibold py-3">
							<span className="text-base">
								{tempoUserData.username ? tempoUserData.username : personData.username} /
							</span>
							<span className="text-base">
								{tempoUserData.email ? tempoUserData.email : personData.email} /
							</span>
							<span className="text-base">
								{tempoUserData.phone ? tempoUserData.phone : personData.phone}
							</span>
						</div>
					</div>
				</div>

				<button
					disabled={!isValid}
					className={`py-2 px-4 w-[120px] bg-sky-100 rounded-xl text-black ${!isValid && "opacity-50"}`}
					onClick={contactFormSubmit}
				>
					{openContact ? "Change" : "Apply"}
				</button>
			</div>
			{/* contact form */}
			<form
				className={`w-full border rounded-xl flex flex-wrap py-5 my-5  ${openContact && "hidden"}`}
				onSubmit={handleSubmit(contactFormSubmit)}
				noValidate
			>
				<div className="flex flex-col px-6 py-4">
					<label htmlFor="firstname">Firstname</label>
					<input
						type="text"
						name="firstname"
						className={`min-w-[40%] border rounded-xl py-2 px-4 outline-none my-2 bg-transparent ${
							darkmode ? "border-white text-white" : "border-gray-300 text-black"
						}`}
						{...register("firstname", {
							required: "Firstname is required",
						})}
					/>
					<span className="text-red-500">{errors.firstname?.message}</span>
				</div>

				<div className="flex flex-col px-6 py-4">
					<label htmlFor="lastname">Lastname</label>
					<input
						type="text"
						name="lastname"
						className={`min-w-[40%] border rounded-xl py-2 px-4 outline-none my-2 bg-transparent ${
							darkmode ? "border-white text-white" : "border-gray-300 text-black"
						}`}
						{...register("lastname", {
							required: "Lastname is required",
						})}
					/>
					<span className="text-red-500">{errors.lastname?.message}</span>
				</div>

				<div className="flex flex-col px-6 py-4">
					<label htmlFor="phone">Phone</label>
					<input
						type="number"
						name="phone"
						className={`max-w-[400px] border rounded-xl py-2 px-4 outline-none my-2 bg-transparent ${
							darkmode ? "border-white text-white" : "border-gray-300 text-black"
						}`}
						{...register("phone", {
							required: "Phone Number is required",
						})}
					/>
					<span className="text-red-500">{errors.phone?.message}</span>
				</div>

				<div className="flex flex-col px-6 py-4">
					<label htmlFor="email">Email</label>
					<input
						type="text"
						name="email"
						className={`max-w-[400px] border rounded-xl py-2 px-4 outline-none my-2 bg-transparent ${
							darkmode ? "border-white text-white" : "border-gray-300 text-black"
						}`}
						{...register("email", {
							required: "Email is required",
						})}
					/>
					<span className="text-red-500">{errors.email?.message}</span>
				</div>
			</form>
		</>
	);
};

export default ContactForm;
