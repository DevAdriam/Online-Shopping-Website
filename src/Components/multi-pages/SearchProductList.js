import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addHistory, deleteAllHistory, deleteSingleHistory, history } from "../Products/ProductSlice";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineHistory } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SearchProductList = () => {
	const getHistory = useSelector(history);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	return (
		<>
			{getHistory.length !== 0 && (
				<div>
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
						{getHistory.map((recent) => (
							<li
								key={recent.id}
								className="flex items-center justify-between relative z-40 w-full border-b px-4 py-3"
							>
								<div
									onClick={() => {
										const recentHistory = {
											id: recent.id,
											title: recent.title,
										};
										navigate(`/allProducts/${recent.id}`);
										dispatch(deleteSingleHistory(recent.id));
										dispatch(addHistory(recentHistory));
									}}
									className="flex items-center gap-2"
								>
									<AiOutlineHistory size={25} className="min-w-[30px]" />
									<span>{recent.title}</span>
								</div>
								<div
									className="cursor-pointer relative z-50"
									onClick={() => dispatch(deleteSingleHistory(recent.id))}
								>
									<RxCross2 />
								</div>
							</li>
						))}
					</ul>
				</div>
			)}
		</>
	);
};

export default SearchProductList;
