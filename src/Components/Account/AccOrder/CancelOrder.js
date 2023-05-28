import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { darkMode } from "../../Products/ProductSlice";
import { RiDeleteBin6Line } from "react-icons/ri";
import { cancel_ModalBox, deleteOrder, showCancelOrderMb } from "../../Cart/CartSLice";
import { toast } from "react-toastify";
const CancelOrder = () => {
	const show = useSelector(cancel_ModalBox);

	const dispatch = useDispatch();
	return (
		show && (
			<div className={`w-full px-0 h-[100vh] fixed left-[30px] flex items-center justify-center top-0 z-40`}>
				<div className="bg-white w-[330px] h-[270px] md:w-[500px] relative mr-20 sm:mr-0  shadow-md flex-col flex items-center justify-center gap-5">
					<div className="bg-grey-400 w-[100px] h-[100px] rounded-full absolute left-[45%]  top-14 ">
						<RiDeleteBin6Line fill="red" size={47} />
					</div>
					<h1 className="md:text-xl font-bold w-full mx-auto text-center text-lg">
						Are you sure you want to delete your order?
					</h1>

					<div className="flex items-center justify-between px-4 gap-4 absolute bottom-10">
						<button
							onClick={() => dispatch(showCancelOrderMb(false))}
							className="w-[140px] h-[45px] py-1 px-8 border rounded-full bg-white hover:opacity-90"
						>
							Cancel
						</button>
						<button
							onClick={() => {
								dispatch(showCancelOrderMb(false));
								dispatch(deleteOrder());
								toast.error("Canceled Ordered!");
							}}
							className="w-[140px] h-[45px] py-1 px-8 border rounded-full bg-red-500 hover:opacity-90 text-white"
						>
							Delete
						</button>
					</div>
				</div>
			</div>
		)
	);
};

export default CancelOrder;
