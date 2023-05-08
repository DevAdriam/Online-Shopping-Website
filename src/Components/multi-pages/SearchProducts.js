import React, { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { AiOutlineHistory } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { addHistory, allProducts, darkMode, deleteAllHistory, deleteSingleHistory, history } from "../Products/ProductSlice";
import { useNavigate } from "react-router-dom";
const SearchProducts = () => {
	const [filteredArr, SetfilteredArr] = useState([]);
	const [inputWords, SetinputWords] = useState("");
	const allItems = useSelector(allProducts);
	const getHistory = useSelector(history);
	const darkmode = useSelector(darkMode);
	console.log(getHistory);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const searchItmes = (e) => {
		SetinputWords(e.target.value);
		let filterProduct = allItems.filter((item) => item.title.toLowerCase().includes(inputWords.toLowerCase()));
		SetfilteredArr(filterProduct);
	};
	return (
		<div className={`px-3 w-full min-h-[100vh] py-2 ${darkmode && "bg-[var(--blue-dark)] text-white/90"} `}>
			<div className="flex justify-start items-center gap-4">
				<div onClick={() => navigate(-1)} className=" cursor-pointer py-2 ">
					<BiArrowBack size={25} />
				</div>
				<div className="relative w-full">
					<input
						type="text"
						onChange={searchItmes}
						value={inputWords}
						placeholder="Search products ..."
						className="text-black py-2 px-16 w-full outline-none border rounded-full"
					/>
					<FiSearch size={25} className="absolute left-5 top-[20%] text-black" />
				</div>
			</div>

			{inputWords === "" ? (
				<>
					<div className="py-6 px-5 flex items-center justify-between">
						<h1>Recent History</h1>
						<h1
							onClick={() => {
								console.log(getHistory);
								dispatch(deleteAllHistory());
							}}
							className={`text-red-500 cursor-pointer  ${getHistory.length === 0 && "hidden"}`}
						>
							Clear History
						</h1>
					</div>
					<ul>
						{getHistory.map((history) => (
							<li
								key={Math.random()}
								className="flex items-center justify-between w-full border-b px-4 py-3"
							>
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
			) : (
				<div>
					<ul>
						{filteredArr.map((item) => {
							return (
								<li
									className="flex items-center w-full px-4 py-2 border-b gap-3 my-3 hover:bg-slate-300"
									onClick={() => {
										navigate(`/allProducts/${item.id}`);
										dispatch(addHistory(item.title));
										console.log(getHistory);
									}}
								>
									<img src={item.image} alt={item.category} className="w-[20%] object-contain" />
									<h1>{item.title}</h1>
								</li>
							);
						})}
					</ul>
				</div>
			)}
		</div>
	);
};

export default SearchProducts;
