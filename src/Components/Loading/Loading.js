import React from "react";

const Loading = () => {
	return (
		<div className="w-[100%] h-[100vh]  flex flex-col justify-center items-center">
			<div className="loader">
				<div className="loader__bar"></div>
				<div className="loader__bar"></div>
				<div className="loader__bar"></div>
				<div className="loader__bar"></div>
				<div className="loader__bar"></div>
				<div className="loader__ball"></div>
			</div>
			<p className="font-bold tracking-wide py-2">Loading...</p>
		</div>
	);
};

export default Loading;
