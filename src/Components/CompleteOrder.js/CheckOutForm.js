import React, { useRef, useState } from "react";
import { FcCheckmark } from "react-icons/fc";
import { HiOutlineUserCircle, HiOutlineCreditCard } from "react-icons/hi";
import { BsCreditCard, BsTruck } from "react-icons/bs";
import { RiGlobalLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { userData } from "../Account/AccMain/Accslice";
import { CiDeliveryTruck } from "react-icons/ci";
import { darkMode } from "../Products/ProductSlice";
import OrderSummary from "./OrderSummary";
import ModalBoxCompleteOrder from "./ModalBoxCompleteOrder";
import ContactForm from "./ContactForm";
import ShippingForm from "./ShippingForm";
import PaymentMethds from "./PaymentMethds";
const CheckOutForm = () => {
	const darkmode = useSelector(darkMode);

	return (
		<>
			<div
				className={` w-full xl:flex justify-between grid md:pl-20 md:pr-20 py-5  px-4 min-h-[100vh]  ${
					darkmode && "bg-[var(--blue-dark)] text-sky-50/90"
				}`}
			>
				<div className="xl:w-[55%] w-full flex flex-col overflow-x-hidden  lg:h-[100vh] xl:border-r xl:border-b-0 border-b py-5 xl:py-0 pr-5">
					<ContactForm />
					<ShippingForm />
					<PaymentMethds />
				</div>

				<OrderSummary />
			</div>
			<ModalBoxCompleteOrder />
		</>
	);
};

export default CheckOutForm;
