import React from "react";
import Nav from "./Nav";
import HeroSection from "./HeroSection";
import Collection from "./Collection";
import NewArrivals from "./NewArrivals";
import BestSelling from "./BestSelling";
import Step from "./Step";
import { ToastContainer } from "react-toastify";
const MainPage = () => {
	return (
		<>
			<Nav />
			<HeroSection />
			<Collection />
			<NewArrivals />
			<BestSelling />
			<Step />
			
		</>
	);
};

export default MainPage;
