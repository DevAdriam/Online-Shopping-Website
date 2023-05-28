import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment, deleteComment, reviews } from "./userReviewSlice";

import { AiFillStar } from "react-icons/ai";
import { darkMode } from "../Products/ProductSlice";
import { userData, isloggedin } from "../Account/AccMain/Accslice";
import { toast } from "react-toastify";

const Review = () => {
	const darkmode = useSelector(darkMode);
	let [reviewCount, SetreviewCount] = useState(6);
	const userReviews = useSelector(reviews);

	const personinfo = useSelector(userData);
	const login = useSelector(isloggedin);
	const dispatch = useDispatch();
	const showReviews = userReviews.slice(0, reviewCount);

	let commentRef = useRef();

	const submitFeedback = () => {
		if (commentRef.current.value !== "" && login) {
			dispatch(
				addComment({
					id: userReviews.length + 1,
					name: personinfo.username,
					image: personinfo.image,
					rating: 4,
					review: commentRef.current.value,
				})
			);
			toast.success("uploaded your comment!");
			SetreviewCount(reviewCount + 1);
			console.log(userReviews.length, reviewCount);

			commentRef.current.value = "";
		}
	};

	return (
		<div className="flex items-center flex-wrap w-full my-10 gap-5 overflow-x-hidden">
			{showReviews.map((userRev) => {
				return (
					<div className="w-full lg:w-[45%] h-[max-content] px-8 py-5 bg-sky-50/50 rounded-xl" key={userRev.id}>
						{/* name and rating */}
						<div className="w-full flex justify-between">
							<div className="flex items-center gap-2">
								<img
									src={userRev.image}
									alt={userRev.name}
									className="w-[70px] h-[70px]  object-cover rounded-full"
								/>
								<h1>{userRev.name}</h1>
							</div>
							{userRev.rating === 1 && (
								<div className="flex items-center">
									<span>
										<AiFillStar fill="yellow" size={25} />
									</span>
								</div>
							)}
							{userRev.rating === 2 && (
								<div className="flex items-center">
									<span>
										<AiFillStar fill="yellow" size={25} />
									</span>
									<span>
										<AiFillStar fill="yellow" size={25} />
									</span>
								</div>
							)}
							{userRev.rating === 3 && (
								<div className="flex items-center">
									<span>
										<AiFillStar fill="yellow" size={25} />
									</span>
									<span>
										<AiFillStar fill="yellow" size={25} />
									</span>
									<span>
										<AiFillStar fill="yellow" size={25} />
									</span>
								</div>
							)}
							{userRev.rating === 4 && (
								<div className="flex items-center">
									<span>
										<AiFillStar fill="yellow" size={25} />
									</span>
									<span>
										<AiFillStar fill="yellow" size={25} />
									</span>
									<span>
										<AiFillStar fill="yellow" size={25} />
									</span>
									<span>
										<AiFillStar fill="yellow" size={25} />
									</span>
								</div>
							)}
							{userRev.rating === 5 && (
								<div className="flex items-center">
									<span>
										<AiFillStar fill="yellow" size={25} />
									</span>
									<span>
										<AiFillStar fill="yellow" size={25} />
									</span>
									<span>
										<AiFillStar fill="yellow" size={25} />
									</span>
									<span>
										<AiFillStar fill="yellow" size={25} />
									</span>
									<span>
										<AiFillStar fill="yellow" size={25} />
									</span>
								</div>
							)}
						</div>
						{/* review */}
						<div className="w-full flex justify-between items-center">
							<p className="text-md trackig-wide leading-relaxed my-5">{userRev.review}</p>
							{userRev.name === personinfo.username && (
								<span
									onClick={() => {
										dispatch(deleteComment(userRev.id));
										SetreviewCount(reviewCount - 1);
									}}
									className="text-red-500 py-2 px-4 hover:bg-gray-200/80 rounded-lg cursor-pointer"
								>
									Delete
								</span>
							)}
						</div>
					</div>
				);
			})}
			<div className="w-full">
				<button
					onClick={() => {
						console.log(userReviews, reviewCount);
						SetreviewCount(reviewCount + 2);
					}}
					disabled={reviewCount === userReviews.length ? true : false}
					className={`w-[200px] h-[50px] block  p-5 rounded-full leading-[10px] mx-auto hover:shadow-sm ${
						darkmode ? "bg-white text-[var(--blue-dark)]" : "bg-[var(--blue-dark)] text-white/90"
					} ${reviewCount === userReviews.length && "opacity-[0.5]"}`}
				>
					Show more
				</button>
			</div>

			<input
				type="textarea"
				placeholder="Write your comment"
				ref={commentRef}
				className="block w-full border border-gray-400 outline-none rounded-xl pt-5 pb-16 px-5 mt-5"
			/>
			<div className="w-full">
				<button
					onClick={submitFeedback}
					className={`w-[200px] h-[50px] p-5 rounded-full  leading-[10px] hover:shadow-sm ${
						darkmode ? "bg-white text-[var(--blue-dark)]" : "bg-[var(--blue-dark)] text-white/90"
					} `}
				>
					Submit
				</button>
			</div>
		</div>
	);
};

export default Review;
