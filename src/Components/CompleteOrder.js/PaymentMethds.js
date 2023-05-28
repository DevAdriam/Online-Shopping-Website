import React, { useState } from "react";
import { MdOutlinePayment } from "react-icons/md";
import { FcCheckmark } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { validation } from "../Cart/CartSLice";

const PaymentMethds = () => {
	const [openPayment, SetopenPayment] = useState(false);
	const [paymentMethod, SetpaymentMethod] = useState("");
	const dispatch = useDispatch();
	const paymentFormSubmit = (e) => {
		SetopenPayment(!openPayment);
		SetpaymentMethod(e.target.value);
		dispatch(validation("paymentValid"));
	};

	return (
		<>
			<div className="w-full h-max-content md:flex grid px-5 xl:py-5 py-3 mb-5 items-center justify-between border rounded-xl">
				<div className="lg:flex gap-4 items-center">
					<MdOutlinePayment size={40} />
					<div aria-label="contact-info" className="py-4">
						<h1 className={`uppercase text-sky-300 `}>
							Payment Methods
							<FcCheckmark
								size={25}
								className={` mt-[-5px] mx-2 inline-block ${paymentMethod === "" && "hidden"}`}
							/>
						</h1>
						<span>{paymentMethod}</span>
					</div>
				</div>

				<button className={`py-2 px-4 w-[120px] bg-sky-100 rounded-xl text-black`} onClick={paymentFormSubmit}>
					{openPayment ? "Change" : "Apply"}
				</button>
			</div>

			<form
				className={`w-full border rounded-xl flex flex-col gap-5 py-8 my-2  ${openPayment && "hidden"}`}
				onChange={paymentFormSubmit}
				noValidate
			>
				<div>
					<input id="01" type="radio" name="r" value="Credit/Debit Card" className="mx-4" defaultChecked></input>
					<label htmlFor="01">Credit / Debit Card</label>
				</div>

				<div>
					<input id="02" type="radio" name="r" value="Online Payment" className="mx-4"></input>
					<label htmlFor="02">Online Payment</label>
				</div>

				<div>
					<input id="03" type="radio" name="r" value="Cash On Delivery" className="mx-4"></input>
					<label htmlFor="03">Cash On Delivery</label>
				</div>
			</form>
		</>
	);
};

export default PaymentMethds;
