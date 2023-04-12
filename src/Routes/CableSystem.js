import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Router, Routes } from "react-router-dom";
import App from "../../App";
import MainPage from "../Layout/MainPage";
import ManCollection from "../multi-pages/ManCollection";
import WomenCollection from "../multi-pages/WomenCollection";
import Electronics from "../multi-pages/Electronics";
import Jewelery from "../multi-pages/Jewelery";
import ProductList from "../Products/ProductList";

const CableSystem = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<MainPage />}></Route>

				<Route path="/manCollection" element={<ManCollection />}></Route>
				<Route path="/womenCollection" element={<WomenCollection />}></Route>
				<Route path="/electronics" element={<Electronics />}></Route>
				<Route path="/jewelery" element={<Jewelery />}></Route>

				<Route path="/allProducts" element={<ProductList />}></Route>
			</Routes>
		</div>
	);
};

export default CableSystem;
