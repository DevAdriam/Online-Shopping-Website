import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAllHistory, deleteSingleHistory, history } from "../Products/ProductSlice";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineHistory } from "react-icons/ai";

const SearchProductList = () => {
	const getHistory = useSelector(history);
	const dispatch = useDispatch();

	return (
		<>
			<div className="py-6 px-5 flex items-center justify-between">
				<h1>Recent History</h1>
				<h1
					onClick={() => {
						dispatch(deleteAllHistory());
					}}
					className={`text-red-500 cursor-pointer  ${getHistory.length === 0 && "hidden"}`}
				>
					Clear History
				</h1>
			</div>
			<ul>
				{getHistory.map((history) => (
					<li key={Math.random()} className="flex items-center justify-between w-full border-b px-4 py-3">
						<div className="flex items-center gap-2">
							<AiOutlineHistory size={25} className="min-w-[30px]" />
							<span>{history}</span>
						</div>
						<div className="cursor-pointer" onClick={() => dispatch(deleteSingleHistory(history))}>
							<RxCross2 />
						</div>
					</li>
				))}
			</ul>
		</>
	);
};

export default SearchProductList;
